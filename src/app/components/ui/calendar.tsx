import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "../../../lib/cn";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col gap-4 sm:flex-row sm:gap-4",
        month: "space-y-4",

        month_caption: "relative flex items-center justify-center pt-1",
        caption_label: "text-sm font-medium",

        nav: "flex items-center gap-1",
        button_previous:
          "absolute left-1 h-7 w-7 bg-transparent p-0 opacity-60 hover:opacity-100",
        button_next:
          "absolute right-1 h-7 w-7 bg-transparent p-0 opacity-60 hover:opacity-100",

        weekdays: "flex",
        weekday: "w-9 text-center text-[0.8rem] text-muted-foreground",

        week: "mt-2 flex w-full",
        day: "w-9 h-9 p-0 text-center text-sm relative",

        day_button:
          "h-9 w-9 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground",

        selected: "bg-primary text-primary-foreground",
        today: "bg-accent text-accent-foreground",
        outside: "text-muted-foreground opacity-50",
        disabled: "text-muted-foreground opacity-50",
        hidden: "invisible",

        range_start: "bg-primary text-primary-foreground",
        range_middle: "bg-accent text-accent-foreground",
        range_end: "bg-primary text-primary-foreground",

        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, className, size, disabled }) => {
          const Icon = orientation === "left" ? ChevronLeft : ChevronRight;

          return (
            <Icon
              className={cn("h-4 w-4", className)}
              size={size ?? 16}
              aria-hidden="true"
              opacity={disabled ? 0.5 : 1}
            />
          );
        },
      }}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";
