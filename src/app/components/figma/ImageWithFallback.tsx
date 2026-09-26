import React, { forwardRef, useEffect, useState } from "react";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

type ImageWithFallbackProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  fetchPriority?: "high" | "low" | "auto";
};

export const ImageWithFallback = forwardRef<
  HTMLImageElement,
  ImageWithFallbackProps
>(function ImageWithFallback(
  {
    src,
    alt,
    className,
    style,
    loading = "lazy",
    decoding = "async",
    fetchPriority = "auto",
    ...rest
  },
  ref
) {
  const [didError, setDidError] = useState(false);

  useEffect(() => {
    setDidError(false);
  }, [src]);

  if (didError) {
    return (
      <div
        className={`inline-flex items-center justify-center bg-gray-100 ${
          className ?? ""
        }`}
        style={style}
        role="img"
        aria-label={`No se pudo cargar la imagen: ${alt ?? "imagen"}`}
      >
        <img
          src={ERROR_IMG_SRC}
          alt=""
          aria-hidden="true"
          className="max-w-full max-h-full"
          {...rest}
          data-original-url={src}
        />
      </div>
    );
  }

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      onError={() => setDidError(true)}
      {...rest}
    />
  );
});
