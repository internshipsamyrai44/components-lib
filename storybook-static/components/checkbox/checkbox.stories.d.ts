import { StoryObj } from '@storybook/react';

declare const meta: {
    component: import('../../../node_modules/.pnpm/react@18.0.0/node_modules/react').ForwardRefExoticComponent<{
        label?: string | null | undefined;
        onChange?: ((checked: import('@radix-ui/react-checkbox').CheckedState) => void) | undefined;
    } & Omit<import('@radix-ui/react-checkbox').CheckboxProps & import('../../../node_modules/.pnpm/react@18.0.0/node_modules/react').RefAttributes<HTMLButtonElement>, "ref"> & import('../../../node_modules/.pnpm/react@18.0.0/node_modules/react').RefAttributes<HTMLButtonElement>>;
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultWithLabel: Story;
export declare const DisabledWithLabel: Story;
//# sourceMappingURL=checkbox.stories.d.ts.map