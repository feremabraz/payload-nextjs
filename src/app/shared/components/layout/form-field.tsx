import { Input } from "@shared-ui/input";
import { Label } from "@shared-ui/label";
import { Textarea } from "@shared-ui/textarea";
import { cn } from "@shared-utilities/utils";
import type { ComponentProps } from "react";

interface BaseFormFieldProps {
  label: string;
  id: string;
  name: string;
  required?: boolean;
  className?: string;
  containerClassName?: string;
}

interface InputFormFieldProps extends BaseFormFieldProps {
  type: "text" | "email" | "tel" | "password" | "url" | "number";
  placeholder?: string;
  inputProps?: Omit<ComponentProps<typeof Input>, "id" | "name" | "type" | "required">;
}

interface TextareaFormFieldProps extends BaseFormFieldProps {
  type: "textarea";
  placeholder?: string;
  rows?: number;
  textareaProps?: Omit<ComponentProps<typeof Textarea>, "id" | "name" | "required">;
}

type FormFieldProps = InputFormFieldProps | TextareaFormFieldProps;

export function FormField({
  label,
  id,
  name,
  type,
  required = false,
  placeholder,
  className,
  containerClassName,
  ...props
}: FormFieldProps) {
  const displayLabel = required ? `${label}* (Required)` : label;

  if (type === "textarea") {
    const { rows = 4, textareaProps } = props as TextareaFormFieldProps;
    return (
      <div className={containerClassName}>
        <Label htmlFor={id}>{displayLabel}</Label>
        <Textarea
          id={id}
          name={name}
          placeholder={placeholder}
          rows={rows}
          required={required}
          className={className}
          {...textareaProps}
        />
      </div>
    );
  }

  const { inputProps } = props as InputFormFieldProps;
  return (
    <div className={containerClassName}>
      <Label htmlFor={id}>{displayLabel}</Label>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className={className}
        {...inputProps}
      />
    </div>
  );
}
