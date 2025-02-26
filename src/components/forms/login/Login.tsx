"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import google from "../../../../public/google.svg";
import { schemaLogin } from "./schemaLogin";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { LockKeyhole, User } from "lucide-react";

export function FormLogin() {
  const form = useForm<z.infer<typeof schemaLogin>>({
    resolver: zodResolver(schemaLogin),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof schemaLogin>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  console.log(form.getValues());
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#5101D6] text-base">Email</FormLabel>
              <FormControl>
                <Input icon={<User/>} placeholder="Email" {...field} />
              </FormControl>
              <FormDescription>Ingrese su email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#5101D6] text-base">Password</FormLabel>
              <FormControl>
                <Input icon={<LockKeyhole/>} type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormDescription>Ingrese su contraseña.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full rounded-none bg-[#5101D6] hover:bg-[#4D00CD] h-12 "
          type="submit"
        >
          Iniciar session
        </Button>
      </form>
      <div className="flex mt-8 gap-1 w-full items-center justify-center">
          <div className="border-b h-0 w-full border-[#9C9C9C]" />
          <span className="font-bold text-sm text-[#5101D6]">OR</span>
          <div className="w-full border-b h-0 border-[#9C9C9C]" />
        </div>
        <Image
          src={google}
            alt="Google"
            width={80}
            height={80}
            className="m-auto mt-4 cursor-pointer"
          />
    </Form>
  );
}
