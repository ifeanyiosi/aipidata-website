"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactValidation } from "@/lib/validations/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

export default function COntactOne() {
  const form = useForm({
    resolver: zodResolver(ContactValidation),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = () => {
    console.log("values");
  };

  return (
    <div className="flex min-h-screen bg-[#fff] w-full  flex-col items-center justify-between px-[30px] md:px-[100px] py-24">
      <div className="flex flex-col items-start lg:flex-row justify-between">
        <div className="w-full flex flex-col items-start">
          <h1 className="text-[36px] lg:text-[50px] text-[#000] mt-[20px] mb-[10px] leading-[42px] lg:leading-[60px] font-[400] lg:pr-[85px] ">
            You had us at &#34;Hello.&#34; Let&apos;s make something great
            together.
          </h1>

          <div className="mt-[85px] w-full flex  flex-col md:flex-row lg:flex-col mb-[48px] min-h-[100%] text-[#333] text-[14px]  ">
            <div className="flex items-start w-full justify-start flex-col">
              <h1 className="text-[#2081b8] font-bold text-[14px] lg:text-[15px] mt-[20px] mb-[10px] ">
                BUSINESS AND ENQUIRES
              </h1>
              <h4 className="text-[15px] lg:text-[18px] my-[10px] ">
                Info@aipidata.com
              </h4>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col justify-start  "
            >
              <div className="flex items-center mb-[18px]  justify-between  flex-col lg:flex-row">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex flex-col px-[10px]  w-full">
                      <FormLabel className="text-[14px] text-[#25adff] ">
                        Name
                      </FormLabel>
                      <FormControl className="">
                        <Input
                          className="account-form_input no-focus"
                          placeholder=""
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem className="flex px-[10px] flex-col  w-full">
                      <FormLabel className="text-[14px] text-[#25adff]">
                        Company
                      </FormLabel>
                      <FormControl className="">
                        <Input
                          className="account-form_input  focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500"
                          placeholder=""
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex items-center mb-[18px]   flex-col lg:flex-row">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex px-[10px] flex-col gap-3 w-full">
                      <FormLabel className="text-[14px] text-[#25adff]">
                        Email
                      </FormLabel>
                      <FormControl className="">
                        <Input
                          className="account-form_input no-focus"
                          placeholder=""
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="flex px-[10px] flex-col gap-3 w-full">
                      <FormLabel className="text-[14px] text-[#25adff]">
                        Phone
                      </FormLabel>
                      <FormControl className="">
                        <Input
                          className="account-form_input no-focus"
                          placeholder=""
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="flex px-[10px] flex-col gap-3 w-full">
                    <FormLabel className="text-[14px] text-[#25adff]">
                      Bio
                    </FormLabel>
                    <FormControl className="">
                      <Textarea
                        rows={5}
                        className="account-form_input no-focus"
                        placeholder="Tell us all about your awesome project. Do you have a website? What’s your budget and timeline? Do you like coffee?"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="bg-transparent text-[#000] mt-10 hover:bg-[#000] hover:text-[#fff] border-[1px] font-700 border-[#000] "
                type="submit"
              >
                Send Away 👋
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
