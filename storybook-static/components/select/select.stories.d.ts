import { StoryObj } from '@storybook/react';

declare const meta: {
    component: ({ children, placeholder, triggerIcon, triggerProps, ...props }: {
        placeholder?: string | undefined;
        triggerIcon?: import('../../../node_modules/.pnpm/react@18.0.0/node_modules/react').ReactNode;
        triggerProps?: Omit<Omit<import('@radix-ui/react-select').SelectTriggerProps & import('../../../node_modules/.pnpm/react@18.0.0/node_modules/react').RefAttributes<HTMLButtonElement>, "ref">, "children"> | undefined;
    } & import('@radix-ui/react-select').SelectProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Disabled: Story;
export declare const WithGroups: Story;
export declare const WithIcon: Story;
//# sourceMappingURL=select.stories.d.ts.map