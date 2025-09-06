"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner";
import { FormSchema } from "@/utils/formSchema";
import { Button } from "@/components/ui/button";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom";

export default function Login() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      emailId: "",
      password: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-900/90 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div className="mt-6 max-w-md mx-auto flex flex-col items-center justify-center
      rounded-2xl px-10 pt-6 pb-5
      bg-black/40
      backdrop-blur-xl border border-white/10 shadow-2xl shadow-orange-500/10">
      
      {/* Title */}
      <h2 className="font-extrabold mb-4 text-xl tracking-wide text-center 
        bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
        Welcome Back 👋
      </h2>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
          
          {/* Email */}
          <FormField
            control={form.control}
            name="emailId"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-gray-300">Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="riya.goyal@gmail.com" 
                    {...field} 
                    className="h-12 pl-4 rounded-sm [&+p]:text-xs
                      bg-white/5 text-white
                      border border-white/10
                      focus:border-orange-400 focus:ring-2 focus:ring-orange-500/40
                      placeholder:text-gray-400 transition-all"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-gray-300">Password</FormLabel>
                <FormControl>
                  <Input 
                    type="password"
                    placeholder="••••••••" 
                    {...field} 
                    className="h-12 pl-4 rounded-sm [&+p]:text-xs
                      bg-white/5 text-white
                      border border-white/10
                      focus:border-orange-400 focus:ring-2 focus:ring-orange-500/40
                      placeholder:text-gray-400 transition-all"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="py-4 px-12 mt-2 rounded-sm font-bold tracking-wide
              bg-gradient-to-r from-orange-500 to-red-500
              hover:from-red-500 hover:to-orange-500 w-full
              text-white shadow-lg shadow-orange-500/20 transition-all duration-300">
            Sign In
          </Button>

          {/* Sign up link */}
          <p className="text-sm text-gray-400 text-center">
            Don’t have an account yet?{" "}
            <Link 
              to="/signup" 
              className="text-orange-400 hover:text-orange-500 font-semibold underline-offset-4 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </Form>
    </div>
  )
}
