import { KeyboardEvent } from '../../../node_modules/.pnpm/react@18.0.0/node_modules/react';
import * as React from 'react';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode;
    errorMessage?: string;
    label?: string;
    onChangeValue?: (value: string) => void;
    onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void;
    type?: 'email' | 'password' | 'search' | 'text';
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export { Input };
//# sourceMappingURL=input.d.ts.map