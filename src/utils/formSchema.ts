import { z } from "zod";
import { FORM_MESSAGES, REGEX } from "./constants";

// Common fields
const baseSchema = {
  emailId: z
    .string()
    .min(1, { message: FORM_MESSAGES.EMAIL_REQUIRED })
    .regex(REGEX.EMAIL, { message: FORM_MESSAGES.EMAIL_INVALID }),

  password: z
    .string()
    .min(1, { message: FORM_MESSAGES.PASSWORD_REQUIRED }),
};

// Login Schema
export const LoginSchema = z.object({
  ...baseSchema,
});

// Signup Schema
export const SignupSchema = z.object({
  ...baseSchema,
  firstName: z
    .string()
    .min(1, { message: FORM_MESSAGES.FIRST_NAME_REQUIRED }),
  lastName: z
    .string()
    .min(1, { message: FORM_MESSAGES.LAST_NAME_REQUIRED }),
});

export type LoginValues = z.infer<typeof LoginSchema>;
export type SignupValues = z.infer<typeof SignupSchema>;
