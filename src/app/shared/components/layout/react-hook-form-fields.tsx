import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@shared-ui/form";
import { Input } from "@shared-ui/input";
import { Textarea } from "@shared-ui/textarea";
import { cn } from "@shared-utilities/utils";
import { useTranslations } from "next-intl";
import type { ComponentProps, ReactNode } from "react";
import type { Control, FieldPath, FieldValues } from "react-hook-form";

interface BaseFormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  control: Control<TFieldValues>;
  name: TName;
  label: string;
  description?: string;
  required?: boolean;
  className?: string;
}

interface FormTextFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends BaseFormFieldProps<TFieldValues, TName> {
  type?: "text" | "email" | "tel" | "password" | "url" | "number";
  placeholder?: string;
  inputProps?: Omit<ComponentProps<typeof Input>, "id" | "name" | "type" | "required">;
}

interface FormTextAreaFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends BaseFormFieldProps<TFieldValues, TName> {
  placeholder?: string;
  rows?: number;
  textareaProps?: Omit<ComponentProps<typeof Textarea>, "id" | "name" | "required">;
}

interface FormFileFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends BaseFormFieldProps<TFieldValues, TName> {
  accept?: string;
  multiple?: boolean;
}

function RequiredIndicator() {
  const t = useTranslations();
  return <> * ({t("common.required")})</>;
}

export function FormTextField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  label,
  description,
  required = false,
  type = "text",
  placeholder,
  className,
  inputProps,
}: FormTextFieldProps<TFieldValues, TName>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>
            {label}
            {required && <RequiredIndicator />}
          </FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} {...inputProps} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export function FormTextAreaField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  label,
  description,
  required = false,
  placeholder,
  rows = 4,
  className,
  textareaProps,
}: FormTextAreaFieldProps<TFieldValues, TName>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>
            {label}
            {required && <RequiredIndicator />}
          </FormLabel>
          <FormControl>
            <Textarea placeholder={placeholder} rows={rows} {...field} {...textareaProps} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export function FormFileField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  label,
  description,
  required = false,
  accept,
  multiple = false,
  className,
}: FormFileFieldProps<TFieldValues, TName>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field: { onChange, value, ...field } }) => (
        <FormItem className={className}>
          <FormLabel>
            {label}
            {required && <RequiredIndicator />}
          </FormLabel>
          <FormControl>
            <input
              type="file"
              accept={accept}
              multiple={multiple}
              onChange={(e) => {
                const files = e.target.files;
                if (files) {
                  onChange(multiple ? files : files[0]);
                }
              }}
              className={cn(
                "file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 file:cursor-pointer cursor-pointer",
              )}
              {...field}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
