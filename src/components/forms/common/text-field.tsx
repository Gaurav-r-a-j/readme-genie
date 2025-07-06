import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

interface FormTextFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  description?: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  type?: string;
}

export const FormTextField: React.FC<FormTextFieldProps> = ({
  name,
  label,
  placeholder,
  description,
  className,
  required = false,
  disabled = false,
  icon,
  type = 'text',
}) => {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && (
            <FormLabel className={cn(icon && 'flex items-center gap-2')}>
              {icon}
              {label}
              {required && <span className="text-destructive ml-1">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <Input
              {...field}
              type={type}
              placeholder={placeholder}
              disabled={disabled}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
