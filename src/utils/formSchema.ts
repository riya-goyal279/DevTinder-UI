import { z } from "zod";

export const FormSchema = z.object({
    emailId: z.string().min(1, {
        message: "Please enter your email address.",
    }).regex(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, {
        message: "Please enter a valid email address.",
    }),

    password: z.string().min(1, {
        message: "Please enter your password.",
    })
});