import { StoryObj } from '@storybook/react';
import { DatePicker } from './datePicker';

declare const meta: {
    component: typeof DatePicker;
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Error: Story;
export declare const Disabled: Story;
export declare const NoLabel: Story;
export declare const DateRange: Story;
export declare const DateRangeSelected: Story;
export declare const OnChangeEvent: Story;
//# sourceMappingURL=datePicker.stories.d.ts.map