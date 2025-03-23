import * as React from 'react';
interface SidebarItemProps {
    className?: string;
    icon: React.ElementType;
    iconActive?: React.ElementType;
    isActive?: boolean;
    isDisabled?: boolean;
    title: string;
}
declare const Sidebar: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarContent: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarGroup: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarGroupContent: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarLink: React.ForwardRefExoticComponent<Omit<{
    isActive?: boolean | undefined;
    isDisabled?: boolean | undefined;
} & React.ClassAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
declare const SidebarItem: React.FC<SidebarItemProps>;
export { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarItem, SidebarLink };
//# sourceMappingURL=sidebar.d.ts.map