import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
declare const Checkbox: React.ForwardRefExoticComponent<{
    label?: string | null | undefined;
    onChange?: ((checked: CheckboxPrimitive.CheckedState) => void) | undefined;
} & Omit<CheckboxPrimitive.CheckboxProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export { Checkbox };
//# sourceMappingURL=checkbox.d.ts.map