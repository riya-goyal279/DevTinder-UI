"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { SignupSchema } from "@/utils/formSchema";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Link } from "react-router-dom";
import CustomFormField from "./CustomFormField";
import PrimaryButton from "./PrimaryButton";

const Signup = () => {
  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      emailId: "",
      password: "",
      firstName: "",
      lastName: "",
    },
  });

  async function onSubmit(data: z.infer<typeof SignupSchema>) {
    console.log("✅ Form submitted with values:", data);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Signup failed");

      const result = await response.json();
      console.log("✅ Signup success:", result);

      toast.success("Signup successful 🎉", {
        description: `Welcome aboard, ${data.firstName}!`,
      });
    } catch (error) {
      console.error("❌ Signup error:", error);
      toast.error("Signup failed", {
        description: "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <div
      className="mt-2 max-w-md mx-auto flex flex-col items-center justify-center
      rounded-2xl px-10 py-3
      dark:bg-black/40 bg-amber-100/50
      backdrop-blur-xl 
      border dark:border-white/10 border-orange-500/20
      dark:shadow-2xl dark:shadow-orange-500/10 shadow-[0px_0px_2px_orange]"
    >
      <h2
        className="font-extrabold mb-3 text-xl tracking-wide text-center 
        bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"
      >
        Join Us 🚀
      </h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, (errors) => {
            console.log("❌ Validation errors:", errors);
          })}
          className="w-full space-y-4"
          autoComplete="off"
          autoCorrect="off"
        >
          <div className="flex items-start gap-2">
            <CustomFormField
              control={form.control}
              name="firstName"
              label="First Name"
              placeholder="Riya"
            />

            <CustomFormField
              control={form.control}
              name="lastName"
              label="Last Name"
              placeholder="Goyal"
            />
          </div>

          <CustomFormField
            control={form.control}
            name="emailId"
            label="Email"
            placeholder="riya.goyal@gmail.com"
          />

          <CustomFormField
            control={form.control}
            name="password"
            label="Password"
            placeholder="••••••••"
            type="password"
          />

          <PrimaryButton label="Sign up" />

          <p className="text-sm dark:text-gray-400 text-gray-700 text-center">
            Already a member?{" "}
            <Link
              to="/login"
              className="dark:text-orange-400 dark:hover:text-orange-500 text-orange-500 hover:text-orange-600 font-semibold underline-offset-4 hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default Signup;
