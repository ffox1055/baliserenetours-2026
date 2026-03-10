import { cva, type VariantProps } from "class-variance-authority";
import Link, { type LinkProps } from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
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
  }
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
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href"> &
  Omit<LinkProps, "className"> & {
    href: LinkProps["href"];
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button(props: ButtonProps) {
  if ("href" in props && props.href !== undefined) {
    const { children, className, variant, size, fullWidth, href, ...linkProps } =
      props;

    return (
      <Link
        href={href}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  const {
    children,
    className,
    variant,
    size,
    fullWidth,
    type = "button",
    ...buttonProps
  } = props;

  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size, fullWidth }), className)}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
