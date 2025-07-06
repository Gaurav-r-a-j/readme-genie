import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { PasswordInput, PasswordInputProps } from './password-input';

interface FormPasswordFieldProps extends Omit<PasswordInputProps, 'name'> {
  name: string;
  label?: string;
  placeholder?: string;
  description?: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
}

export const FormPasswordField: React.FC<FormPasswordFieldProps> = ({
  name,
  label,
  placeholder,
  description,
  className,
  required = false,
  disabled = false,
  ...rest
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
            <PasswordInput
              {...field}
              placeholder={placeholder}
              disabled={disabled}
              {...rest}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
