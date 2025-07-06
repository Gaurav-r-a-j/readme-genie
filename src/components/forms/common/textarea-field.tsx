import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

interface FormTextAreaFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  description?: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
  icon?: ReactNode;
}

export const FormTextAreaField: React.FC<FormTextAreaFieldProps> = ({
  name,
  label,
  placeholder,
  description,
  className,
  required = false,
  disabled = false,
  rows = 3,
  icon,
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
            <Textarea
              {...field}
              placeholder={placeholder}
              disabled={disabled}
              rows={rows}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
