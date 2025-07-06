import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface FormNumberFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  description?: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  min?: number;
  max?: number;
  step?: string;
  allowEmpty?: boolean;
}

export const FormNumberField: React.FC<FormNumberFieldProps> = ({
  name,
  label,
  placeholder,
  description,
  className,
  required = false,
  disabled = false,
  min,
  max,
  step = '1',
  allowEmpty = false,
}) => {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && (
            <FormLabel>
              {label}
              {required && <span className="text-destructive ml-1">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <Input
              type="number"
              min={min}
              max={max}
              step={step}
              placeholder={placeholder}
              disabled={disabled}
              onChange={e => {
                if (allowEmpty && e.target.value === '') {
                  field.onChange(null);
                } else {
                  field.onChange(parseFloat(e.target.value));
                }
              }}
              value={
                field.value === null || field.value === undefined
                  ? ''
                  : field.value
              }
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
