import { default as React, ComponentPropsWithoutRef, ReactNode } from '../../../node_modules/.pnpm/react@18.0.0/node_modules/react';

export declare const Pagination: React.ForwardRefExoticComponent<{
    currentPage: number;
    onChangePage: (num: number) => void;
    pageSize: number;
    siblingCount?: number | undefined;
    totalCount: number;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
type SelectContainerProps = {
    children: ReactNode;
    content: string[];
} & Omit<ComponentPropsWithoutRef<'div'>, 'content'>;
export declare const SelectContainer: ({ children, className, content, ...rest }: SelectContainerProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=pagination.d.ts.map