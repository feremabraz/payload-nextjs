import { Input } from "@shared-ui/input";
import { Label } from "@shared-ui/label";
import { Textarea } from "@shared-ui/textarea";
import { cn } from "@shared-utilities/utils";
import type { ComponentProps, ReactNode } from "react";

interface BaseFieldProps {
  label: string;
  id: string;
  name: string;
  required?: boolean;
  className?: string;
}

interface TextFieldProps extends BaseFieldProps {
  type?: "text" | "email" | "tel" | "password" | "url" | "number";
  placeholder?: string;
  inputProps?: Omit<ComponentProps<typeof Input>, "id" | "name" | "type" | "required">;
}

interface TextAreaFieldProps extends BaseFieldProps {
  placeholder?: string;
  rows?: number;
  textareaProps?: Omit<ComponentProps<typeof Textarea>, "id" | "name" | "required">;
}

interface FileFieldProps extends BaseFieldProps {
  accept?: string;
  multiple?: boolean;
}

function FieldWrapper({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

function FieldLabel({
  htmlFor,
  children,
  required,
}: { htmlFor: string; children: ReactNode; required?: boolean }) {
  const displayLabel = required ? `${children}* (Required)` : children;
  return <Label htmlFor={htmlFor}>{displayLabel}</Label>;
}

export function TextField({
  label,
  id,
  name,
  type = "text",
  required = false,
  placeholder,
  className,
  inputProps,
}: TextFieldProps) {
  return (
    <FieldWrapper className={className}>
      <FieldLabel htmlFor={id} required={required}>
        {label}
      </FieldLabel>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        {...inputProps}
      />
    </FieldWrapper>
  );
}

export function TextAreaField({
  label,
  id,
  name,
  required = false,
  placeholder,
  rows = 4,
  className,
  textareaProps,
}: TextAreaFieldProps) {
  return (
    <FieldWrapper className={className}>
      <FieldLabel htmlFor={id} required={required}>
        {label}
      </FieldLabel>
      <Textarea
        id={id}
        name={name}
        placeholder={placeholder}
        rows={rows}
        required={required}
        {...textareaProps}
      />
    </FieldWrapper>
  );
}

export function FileField({
  label,
  id,
  name,
  required = false,
  accept,
  multiple = false,
  className,
}: FileFieldProps) {
  return (
    <FieldWrapper className={className}>
      <FieldLabel htmlFor={id} required={required}>
        {label}
      </FieldLabel>
      <input
        type="file"
        id={id}
        name={name}
        accept={accept}
        multiple={multiple}
        required={required}
        className={cn(
          "file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 file:cursor-pointer cursor-pointer",
        )}
      />
    </FieldWrapper>
  );
}
