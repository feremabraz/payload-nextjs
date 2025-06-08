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

interface FileFormFieldProps extends BaseFormFieldProps {
  type: "file";
  accept?: string;
  multiple?: boolean;
  fileInputProps?: Omit<
    ComponentProps<"input">,
    "id" | "name" | "type" | "required" | "accept" | "multiple"
  >;
}

type FormFieldProps = InputFormFieldProps | TextareaFormFieldProps | FileFormFieldProps;

export function FormField(props: FormFieldProps) {
  const { label, id, name, type, required = false, className, containerClassName } = props;
  const displayLabel = required ? `${label}* (Required)` : label;

  if (type === "textarea") {
    const { placeholder, rows = 4, textareaProps } = props as TextareaFormFieldProps;
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

  if (type === "file") {
    const { accept, multiple = false, fileInputProps } = props as FileFormFieldProps;
    return (
      <div className={containerClassName}>
        <Label htmlFor={id}>{displayLabel}</Label>
        <input
          type="file"
          id={id}
          name={name}
          accept={accept}
          multiple={multiple}
          required={required}
          className={cn(
            "file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 file:cursor-pointer cursor-pointer",
            className,
          )}
          {...fileInputProps}
        />
      </div>
    );
  }

  const { placeholder, inputProps } = props as InputFormFieldProps;
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
