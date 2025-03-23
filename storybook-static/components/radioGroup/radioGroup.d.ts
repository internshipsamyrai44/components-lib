import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
export type Option = {
    label: string;
    value: string;
};
export interface RadioGroupProps {
    className?: string;
    defaultValue?: string;
    disabled?: boolean;
    onValueChange?: (value: string) => void;
    options: Option[];
}
declare const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps & Omit<RadioGroupPrimitive.RadioGroupProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const RadioGroupItem: React.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupItemProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export { RadioGroup, RadioGroupItem };
//# sourceMappingURL=radioGroup.d.ts.map