import { ComponentPropsWithoutRef } from '../../../node_modules/.pnpm/react@18.0.0/node_modules/react';

type policyLinks = [string, string];
export type RecaptchaProps = {
    errorMessage?: string;
    expiredMessage?: string;
    label?: string;
    onClick?: () => void;
    policyLinks?: policyLinks;
    variant: 'checked' | 'default' | 'expired' | 'loading' | 'withError';
} & ComponentPropsWithoutRef<'div'>;
export declare const Recaptcha: (props: RecaptchaProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=recaptcha.d.ts.map