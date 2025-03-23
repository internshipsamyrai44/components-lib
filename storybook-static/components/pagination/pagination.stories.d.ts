import { StoryObj } from '@storybook/react';

declare const meta: {
    args: {
        currentPage: number;
        onChangePage: () => void;
        pageSize: number;
        totalCount: number;
    };
    component: import('../../../node_modules/.pnpm/react@18.0.0/node_modules/react').ForwardRefExoticComponent<{
        currentPage: number;
        onChangePage: (num: number) => void;
        pageSize: number;
        siblingCount?: number | undefined;
        totalCount: number;
    } & Omit<import('../../../node_modules/.pnpm/react@18.0.0/node_modules/react').DetailedHTMLProps<import('../../../node_modules/.pnpm/react@18.0.0/node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & import('../../../node_modules/.pnpm/react@18.0.0/node_modules/react').RefAttributes<HTMLDivElement>>;
    tags: string[];
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const PaginationWithSelect: Story;
//# sourceMappingURL=pagination.stories.d.ts.map