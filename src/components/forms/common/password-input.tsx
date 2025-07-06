import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';
import React, { forwardRef, useState } from 'react';

export interface PasswordInputProps
  extends React.ComponentPropsWithoutRef<'input'> {
  className?: string;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className = '', ...props }, ref) => {
    const [show, setShow] = useState(false);
    return (
      <div className={`relative ${className}`}>
        <Input
          ref={ref}
          type={show ? 'text' : 'password'}
          autoComplete="current-password"
          {...props}
        />
        <button
          type="button"
          tabIndex={-1}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none"
          onClick={() => setShow(v => !v)}
        >
          {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </div>
    );
  }
);
PasswordInput.displayName = 'PasswordInput';
