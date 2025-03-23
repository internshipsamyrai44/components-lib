import { StoryObj } from '@storybook/react';

declare const meta: {
    component: (props: import('./recaptcha').RecaptchaProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Initial: Story;
export declare const Checked: Story;
export declare const Loading: Story;
export declare const Expired: Story;
export declare const WithError: Story;
//# sourceMappingURL=recaptcha.stories.d.ts.map