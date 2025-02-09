import React from "react";

// Reusable Components
const DetailCard = ({
  icon,
  title,
  value,
}: {
  icon?: React.ElementType;
  title: string;
  value: string;
}) => (
  <div className="flex items-center p-6 bg-card  border space-x-4">
    {icon && (
      <div className="w-12 h-12 p-3 rounded-full bg-muted flex items-center justify-center">
        {React.createElement(icon, {
          className: "w-6 h-6 text-primary",
        })}
      </div>
    )}
    <div>
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  </div>
);

export default DetailCard;