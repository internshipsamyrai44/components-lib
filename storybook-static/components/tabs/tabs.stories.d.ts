import { StoryObj } from '@storybook/react';

declare const meta: {
    argTypes: {};
    args: {
        children: import("react/jsx-runtime").JSX.Element;
        defaultValue: string;
        tabs: {
            disabled: false;
            title: string;
            value: string;
        }[];
    };
    component: import('../../../node_modules/.pnpm/react@18.0.0/node_modules/react').ForwardRefExoticComponent<{
        children?: import('../../../node_modules/.pnpm/react@18.0.0/node_modules/react').ReactNode;
        fullWidth?: boolean | undefined;
        tabs: import('./tabs').TabType[];
    } & Omit<import('@radix-ui/react-tabs').TabsProps & import('../../../node_modules/.pnpm/react@18.0.0/node_modules/react').RefAttributes<HTMLDivElement>, "ref"> & import('../../../node_modules/.pnpm/react@18.0.0/node_modules/react').RefAttributes<HTMLDivElement>>;
    tags: string[];
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const TabSwitcherDemo: Story;
export declare const FullWidth: {
    args: {
        fullWidth: boolean;
        tabs: {
            disabled: boolean;
            title: string;
            value: string;
        }[];
    };
};
//# sourceMappingURL=tabs.stories.d.ts.map