import { ReactNode } from '../../../node_modules/.pnpm/react@18.0.0/node_modules/react';
import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
export type TabType = {
    disabled?: boolean;
    title: string;
    value: string;
};
declare const Tabs: React.ForwardRefExoticComponent<{
    children?: ReactNode;
    fullWidth?: boolean | undefined;
    tabs: TabType[];
} & Omit<TabsPrimitive.TabsProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const TabsList: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export type TabsTriggerProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>;
declare const TabsTrigger: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { Tabs, TabsContent, TabsList, TabsTrigger };
//# sourceMappingURL=tabs.d.ts.map