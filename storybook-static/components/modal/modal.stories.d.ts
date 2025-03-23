import { StoryObj } from '@storybook/react';

declare const meta: {
    component: (props: {
        title?: string | undefined;
        onClose?: (() => void) | undefined;
        children?: import('../../../node_modules/.pnpm/react@18.0.0/node_modules/react').ReactNode | import('../../../node_modules/.pnpm/react@18.0.0/node_modules/react').ReactNode[];
        className?: string | undefined;
    }) => import("react/jsx-runtime").JSX.Element | null;
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=modal.stories.d.ts.map