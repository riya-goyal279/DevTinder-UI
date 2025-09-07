import { z } from "zod";
import { FORM_MESSAGES, REGEX } from "./constants";

export const FormSchema = z.object({
  emailId: z
    .string()
    .min(1, { message: FORM_MESSAGES.EMAIL_REQUIRED })
    .regex(REGEX.EMAIL, { message: FORM_MESSAGES.EMAIL_INVALID }),

  password: z
    .string()
    .min(1, { message: FORM_MESSAGES.PASSWORD_REQUIRED }),
});