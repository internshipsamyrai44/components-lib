import { default as React } from '../../../node_modules/.pnpm/react@18.0.0/node_modules/react';
import { DateRange, Matcher } from 'react-day-picker';

interface DatePickerProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
    disabledDates?: Matcher;
    date?: Date;
    endDate?: Date;
    errorText?: string;
    label?: string;
    range?: boolean;
    startDate?: Date;
    onChange?: (date: Date | DateRange | undefined) => void;
}
export declare function DatePicker({ className, date, endDate, errorText, label, range, startDate, disabledDates, onChange, ...props }: DatePickerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=datePicker.d.ts.map