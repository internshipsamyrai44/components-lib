import { default as React } from '../../../node_modules/.pnpm/react@18.0.0/node_modules/react';
import { StoryObj } from '@storybook/react';

declare const meta: {
    argTypes: {
        disabled: {
            control: {
                type: "boolean";
            };
        };
        fullWidth: {
            control: {
                type: "boolean";
            };
        };
        variant: {
            control: "select";
            options: string[];
        };
    };
    component: React.ForwardRefExoticComponent<{
        asChild?: boolean | undefined;
        fullWidth?: boolean | undefined;
        variant?: "ghost" | "outlined" | "primary" | "secondary" | undefined;
    } & Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const FullWidth: Story;
export declare const Outline: Story;
export declare const Ghost: Story;
export declare const AsLink: Story;
//# sourceMappingURL=button.stories.d.ts.map