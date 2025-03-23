import { StoryObj } from '@storybook/react';

declare const meta: {
    argTypes: {
        variant: {
            control: {
                type: "radio";
            };
            options: string[];
        };
    };
    component: <T extends import('../../../node_modules/.pnpm/react@18.0.0/node_modules/react').ElementType = "p">(props: Omit<import('../../../node_modules/.pnpm/react@18.0.0/node_modules/react').ComponentPropsWithoutRef<T>, "children" | "className" | "variant" | "as" | Exclude<keyof import('../../../node_modules/.pnpm/react@18.0.0/node_modules/react').PropsWithoutRef<import('../../../node_modules/.pnpm/react@18.0.0/node_modules/react').ComponentProps<T>>, "className">> & {
        as?: T | undefined;
        children?: import('../../../node_modules/.pnpm/react@18.0.0/node_modules/react').ReactNode;
        className?: string | undefined;
        variant?: import('./Typography').TypographyVariants | undefined;
    } & Omit<import('../../../node_modules/.pnpm/react@18.0.0/node_modules/react').PropsWithoutRef<import('../../../node_modules/.pnpm/react@18.0.0/node_modules/react').ComponentProps<T>>, "className">) => import("react/jsx-runtime").JSX.Element;
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Large: Story;
export declare const H1: Story;
export declare const H2: Story;
export declare const H3: Story;
export declare const RegularText16: Story;
export declare const BoldText16: Story;
export declare const RegularText14: Story;
export declare const MediumText14: Story;
export declare const BoldText14: Story;
export declare const SmallText: Story;
export declare const SemiBoldSmallText: Story;
export declare const RegularLink: Story;
export declare const SmallLink: Story;
//# sourceMappingURL=Typography.stories.d.ts.map