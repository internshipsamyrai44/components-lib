import { ComponentPropsWithoutRef, ElementType, ReactNode } from '../../../node_modules/.pnpm/react@18.0.0/node_modules/react';

export type TypographyVariants = 'bold-text-14' | 'bold-text-16' | 'h1' | 'h2' | 'h3' | 'large' | 'medium-text-14' | 'regular-link' | 'regular-text-14' | 'regular-text-16' | 'semi-bold-small-text' | 'small-link' | 'small-text';
export type TextProps<T extends ElementType = 'p'> = {
    as?: T;
    children?: ReactNode;
    className?: string;
    variant?: TypographyVariants;
} & Omit<ComponentPropsWithoutRef<T>, 'className'>;
export declare const Typography: <T extends ElementType = "p">(props: Omit<ComponentPropsWithoutRef<T>, "children" | "className" | "variant" | "as" | Exclude<keyof import('../../../node_modules/.pnpm/react@18.0.0/node_modules/react').PropsWithoutRef<import('../../../node_modules/.pnpm/react@18.0.0/node_modules/react').ComponentProps<T>>, "className">> & {
    as?: T | undefined;
    children?: ReactNode;
    className?: string | undefined;
    variant?: TypographyVariants | undefined;
} & Omit<import('../../../node_modules/.pnpm/react@18.0.0/node_modules/react').PropsWithoutRef<import('../../../node_modules/.pnpm/react@18.0.0/node_modules/react').ComponentProps<T>>, "className">) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Typography.d.ts.map