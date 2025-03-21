// GridContainer.tsx
import React from "react";

type GridContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className: string;
};

const GridContainer = ({
  children,
  className,
  ...rest
}: GridContainerProps) => {
  return (
    <main
      className={`grid min-h-screen grid-cols-12 gap-4 gap-y-10  mx-auto ${className}`}
      {...rest}
    >
      {children}
    </main>
  );
};

export default GridContainer;
