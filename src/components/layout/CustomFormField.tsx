"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type CustomFormFieldProps = {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
};

export default function CustomFormField({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: CustomFormFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col gap-0">
          <FormLabel className="text-xs text-gray-700 dark:text-gray-300">
            {label}
          </FormLabel>
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              {...field} // RHF handles value + onChange
              className="h-10 pl-4 my-1 rounded-sm [&+p]:text-[10px]
                dark:bg-white/5 bg-white/45 text-sm
                dark:text-white text-gray-900
                border dark:border-white/10 border-gray-500/40
                placeholder:text-gray-400 transition-all"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
