import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./lib/utils";
import { Info, TriangleAlert, CircleX } from "lucide-react";

const alertVariants = cva(
  "flex flex-row items-center gap-6 w-full rounded-xl border-2 py-4 px-6",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
      },
      severity: {
        INFO: "border-primaryGreen bg-primaryGreen/40", // Para severidade baixa
        WARNING: "border-primaryOrange bg-primaryOrange/40", // Para severidade média
        CRITICAL: "border-primaryRed bg-primaryRed/40 animate-pulse", // Para severidade alta
      },
    },
    defaultVariants: {
      variant: "default",
      severity: "INFO",
    },
  },
);

function Alert({
  className,
  variant,
  severity,
  children,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  // Função para renderizar ícones com base na severidade
  const renderIcon = () => {
    switch (severity) {
      case "INFO":
        return (
          <Info className="text-primaryGreen" strokeWidth={2.5} width={36} />
        );
      case "WARNING":
        return (
          <TriangleAlert
            className="text-primaryOrange"
            strokeWidth={2.5}
            width={36}
          />
        );
      case "CRITICAL":
        return (
          <CircleX className="text-primaryRed" strokeWidth={2.5} width={36} />
        );
      default:
        return null;
    }
  };

  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant, severity }), className)}
      {...props}
    >
      {renderIcon()}
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn("font-medium leading-none", className)}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className,
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
