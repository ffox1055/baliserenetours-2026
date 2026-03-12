import { cva, type VariantProps } from "class-variance-authority";
import { Link, type InertiaLinkProps } from "@inertiajs/react";
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type Ref,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-sm border shadow-sm cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-beige disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "border-primary bg-primary text-beige hover:bg-primary-dark hover:border-primary-dark",
        outline:
          "border-primary bg-primary-light/10 text-primary-dark hover:bg-primary/15 hover:border-primary-dark",
        beige:
          "border-beige bg-beige text-primary-dark hover:bg-white hover:border-primary-light",
        inverse:
          "border-beige bg-primary text-white hover:bg-primary-dark hover:border-primary-dark",
      },
      size: {
        default: "px-6 sm:px-8 py-2 text-sm sm:text-base md:text-xl",
        compact: "px-4 sm:px-8 py-2 text-base sm:text-xl",
      },
      fullWidth: {
        true: "w-full",
        false: null,
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false,
    },
  },
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  children: ReactNode;
  className?: string;
};

type ButtonAsButtonProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

type ButtonAsLinkProps = ButtonBaseProps &
  Omit<InertiaLinkProps, "className"> & {
    href: string;
    /** Render as a different element, e.g. `as="button"` for POST links */
    as?: string;
    /** Prefetch the page on hover for improved perceived performance */
    prefetch?: boolean | "hover" | "mount";
    /** Disables navigation and applies aria-disabled when true */
    disabled?: boolean;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export const Button = forwardRef<HTMLButtonElement, ButtonAsButtonProps>(
  function Button(
    { children, className, variant, size, fullWidth, type = "button", ...rest },
    ref,
  ) {
    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        type={type}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

export function ButtonLink({
  children,
  className,
  variant,
  size,
  fullWidth,
  href,
  disabled,
  onClick,
  ...rest
}: ButtonAsLinkProps) {
  return (
    <Link
      href={disabled ? "#" : href}
      aria-disabled={disabled || undefined}
      onClick={(e) => {
        if (disabled) {
          e.preventDefault();
          return;
        }
        onClick?.(e);
      }}
      className={cn(
        buttonVariants({ variant, size, fullWidth }),
        disabled && "pointer-events-none opacity-60",
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
