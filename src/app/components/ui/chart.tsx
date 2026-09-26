"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";
import type { TooltipContentProps, LegendPayload } from "recharts";

import { cn } from "../../../lib/cn";
type TooltipPayloadEntry = NonNullable<
  TooltipContentProps<number | string, string>["payload"]
>[number];

/* -------------------------------------------------------------------------- */
/*                                    TYPES                                   */
/* -------------------------------------------------------------------------- */

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode;
    icon?: React.ComponentType;
    color?: string;
  }
>;

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used inside <ChartContainer />");
  }

  return context;
}

/* -------------------------------------------------------------------------- */
/*                               CHART CONTAINER                              */
/* -------------------------------------------------------------------------- */

type ChartContainerProps = React.ComponentProps<"div"> & {
  config: ChartConfig;
  children: React.ReactNode;
};

export function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: ChartContainerProps) {
  const uniqueId = React.useId();
  const chartId = id ?? `chart-${uniqueId}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        className={cn(
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-grid_line]:stroke-border [&_.recharts-reference-line_line]:stroke-border [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <style>{`
          [data-chart="${chartId}"] {
            ${Object.entries(config)
              .filter(([, value]) => value.color)
              .map(([key, value]) => `--color-${key}: ${value.color};`)
              .join("\n")}
          }
        `}</style>

        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   TOOLTIP                                  */
/* -------------------------------------------------------------------------- */

export const ChartTooltip = RechartsPrimitive.Tooltip;

type ChartTooltipContentProps = TooltipContentProps<number | string, string> & {
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "line" | "dot";
  nameKey?: string;
  formatter?: (
    value: number,
    name: string,
    item: TooltipPayloadEntry,
    index: number,
    payload: NonNullable<
      TooltipContentProps<number | string, string>["payload"]
    >
  ) => React.ReactNode | [React.ReactNode, React.ReactNode];
};

export function ChartTooltipContent({
  active,
  payload,
  label,
  hideLabel = false,
  hideIndicator = false,
  indicator = "dot",
  nameKey,
  formatter,
}: ChartTooltipContentProps) {
  const { config } = useChart();

  if (!active || !payload?.length) return null;

  return (
    <div className="grid min-w-[8rem] gap-2 rounded-lg border border-border bg-background px-3 py-2 text-xs shadow-xl">
      {!hideLabel && label != null && (
        <div className="font-medium">{label}</div>
      )}

      {payload.map((item, index) => {
        const key =
          nameKey ??
          String(
            typeof item.dataKey === "function"
              ? index
              : item.dataKey ?? item.name ?? index
          );

        const itemConfig = config[key];

        const numericValue =
          typeof item.value === "number" ? item.value : Number(item.value);

        const displayValue = Number.isNaN(numericValue) ? 0 : numericValue;

        const formatted = formatter
          ? formatter(
              displayValue,
              String(item.name ?? ""),
              item,
              index,
              payload
            )
          : displayValue.toLocaleString("es-CL");

        return (
          <div
            key={String(
              typeof item.dataKey === "function" ? index : item.dataKey ?? index
            )}
            className="flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-2">
              {!hideIndicator && (
                <>
                  {indicator === "dot" ? (
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{
                        backgroundColor:
                          item.color ?? item.fill ?? itemConfig?.color,
                      }}
                    />
                  ) : (
                    <span
                      className="h-4 w-1 rounded-full"
                      style={{
                        backgroundColor:
                          item.color ?? item.fill ?? itemConfig?.color,
                      }}
                    />
                  )}
                </>
              )}

              {itemConfig?.icon && <itemConfig.icon />}

              <span>{itemConfig?.label ?? item.name}</span>
            </div>

            <span className="font-semibold">
              {Array.isArray(formatted) ? formatted[0] : formatted}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    LEGEND                                  */
/* -------------------------------------------------------------------------- */

export const ChartLegend = RechartsPrimitive.Legend;

type ChartLegendContentProps = React.ComponentProps<"div"> & {
  payload?: ReadonlyArray<LegendPayload>;
  verticalAlign?: "top" | "middle" | "bottom";
  hideIcon?: boolean;
  nameKey?: string;
};

export function ChartLegendContent({
  className,
  payload,
  hideIcon = false,
  nameKey,
}: ChartLegendContentProps) {
  const { config } = useChart();

  if (!payload?.length) return null;

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-4",
        className
      )}
    >
      {payload.map((item: LegendPayload, index) => {
        const key =
          nameKey ??
          String(
            typeof item.dataKey === "function"
              ? index
              : item.dataKey ?? item.value ?? index
          );

        const itemConfig = config[key];

        return (
          <div
            key={String(
              typeof item.dataKey === "function" ? index : item.dataKey ?? index
            )}
            className="flex items-center gap-2 text-sm"
          >
            {!hideIcon && (
              <>
                {itemConfig?.icon ? (
                  <itemConfig.icon />
                ) : (
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{
                      backgroundColor: item.color ?? itemConfig?.color,
                    }}
                  />
                )}
              </>
            )}

            <span>{itemConfig?.label ?? item.value}</span>
          </div>
        );
      })}
    </div>
  );
}
