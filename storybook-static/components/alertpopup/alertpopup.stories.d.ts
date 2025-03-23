import { StoryObj } from '@storybook/react';

declare const meta: {
    component: (props: {
        alertType: "error" | "success";
        callback?: (() => void) | undefined;
        duration?: number | undefined;
        message: string;
    }) => import('../../../node_modules/.pnpm/react@18.0.0/node_modules/react').ReactElement<any, string | import('../../../node_modules/.pnpm/react@18.0.0/node_modules/react').JSXElementConstructor<any>>;
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Success: Story;
export declare const Error: Story;
//# sourceMappingURL=alertpopup.stories.d.ts.map