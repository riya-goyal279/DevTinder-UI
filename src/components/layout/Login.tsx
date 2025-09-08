"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { LoginSchema, type LoginValues } from "@/utils/formSchema";
import { Form } from "@/components/ui/form";
import { Link } from "react-router-dom";
import CustomFormField from "./CustomFormField";
import PrimaryButton from "./PrimaryButton";
import axios from "axios";

const Login = () => {
  const form = useForm<LoginValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      emailId: "riya.goyal@gmail.com",
      password: "Riya@1234",
    },
  });

  async function onSubmit(data: LoginValues) {
    console.log("✅ Form submitted with values:", data);

    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        data,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log("✅ Login success:", response.data);

      toast.success("Login successful 🎉");
    } catch (error: any) {
      console.error("❌ Login error:", error);

      // Axios errors often have response details
      if (error.response) {
        toast.error(`Login failed: ${error.response.data.message || "Server error"}`);
      } else {
        toast.error("Login failed: Network error");
      }
    }
  }

  return (
    <div
      className="mt-6 max-w-md mx-auto flex flex-col items-center justify-center
      rounded-2xl px-10 pt-6 pb-5
      dark:bg-black/40 bg-amber-100/50
      backdrop-blur-xl 
      border dark:border-white/10 border-orange-500/20
      dark:shadow-2xl dark:shadow-orange-500/10 shadow-[0px_0px_2px_orange]"
    >
      <h2
        className="font-extrabold mb-4 text-xl tracking-wide text-center 
        bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"
      >
        Welcome Back 👋
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

          <PrimaryButton label="Sign In" />

          <p className="text-sm dark:text-gray-400 text-gray-700 text-center">
            Don’t have an account yet?{" "}
            <Link
              to="/signup"
              className="dark:text-orange-400 dark:hover:text-orange-500 text-orange-500 hover:text-orange-600 font-semibold underline-offset-4 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default Login;
