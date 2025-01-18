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
      className={`mx-4 sm:mx-8 md:mx-16 lg:mx-32 grid min-h-screen grid-cols-12 gap-4 sm:gap-6 ${className}`}
      {...rest}
    >
      {children}
    </main>
  );
};

export default GridContainer;
