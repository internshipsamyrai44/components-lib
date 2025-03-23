import { default as React } from '../../../node_modules/.pnpm/react@18.0.0/node_modules/react';

type containerOptions = {
    id: string;
    mountNode?: HTMLElement;
};
declare const createContainer: (options: containerOptions) => void;
declare const PORTAL_ERROR_MSG = "There is no portal container in markup. Please add portal container with proper id attribute.";
type PortalProps = {
    id: string;
    children: React.ReactNode;
};
export declare const Portal: (props: PortalProps) => React.ReactPortal | null;
export { createContainer, PORTAL_ERROR_MSG };
//# sourceMappingURL=portal.d.ts.map