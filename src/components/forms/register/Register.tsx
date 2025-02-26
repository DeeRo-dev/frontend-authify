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
import { schemaRegister } from "./schemaRegister";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { LockKeyhole} from "lucide-react";

export function FormRegister() {
  const form = useForm<z.infer<typeof schemaRegister>>({
    resolver: zodResolver(schemaRegister),
    defaultValues: {
        name: "",
        lastName: "",
        email: "",
        password:"",
        country: "",
        province:  "",
        telephone: undefined,
    },
  });
  function onSubmit(values: z.infer<typeof schemaRegister>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  console.log(form.getValues());
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
       <div className=" grid grid-cols-2 justify-center gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#5101D6] text-base">Nombre *</FormLabel>
              <FormControl>
                <Input placeholder="Nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#5101D6] text-base">Apellido *</FormLabel>
              <FormControl>
                <Input  placeholder="Apellido" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#5101D6] text-base">Email *</FormLabel>
              <FormControl>
                <Input  placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#5101D6] text-base">País *</FormLabel>
              <FormControl>
                <Input  placeholder="País" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="province"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#5101D6] text-base">Provincia</FormLabel>
              <FormControl>
                <Input  placeholder="Provincia" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="telephone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#5101D6] text-base">Teléfono</FormLabel>
              <FormControl>
                <Input type="number"  placeholder="Número de téfono" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#5101D6] text-base">Contraseña *</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormDescription>Ingrese su contraseña.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="repitPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#5101D6] text-base">Repetir contraseña *</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormDescription>Repetí la contraseña.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <Button
          className="w-full rounded-none bg-[#5101D6] hover:bg-[#4D00CD] h-12 "
          type="submit"
        >
          Registrarme
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
