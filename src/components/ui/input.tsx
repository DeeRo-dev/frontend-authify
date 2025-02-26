import * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  icon?: React.ReactNode; // Añade la prop icon
  iconView?: React.ReactNode; // Añade la prop icon
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, iconView, ...props }, ref) => {
    return (
      <div className="flex items-center text-center justify-start border-b border-b-[#5101D6]">
        {icon && <span className="icon-container">{icon}</span>}
        <input
          type={type}
          className={cn(
        "flex h-9 w-full border-none bg-transparent px-3 py-1 text-base transition-colors file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-none focus-visible:ring-ring-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
          )}
          ref={ref}
          {...props}  
        />
          {iconView && <span className="icon-container">{iconView}</span>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
