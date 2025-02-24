"use client";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import gsap from "gsap";
import supabase from "@/lib/supabase";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactFormSchema } from "@/schema";
import { useGSAP } from "@gsap/react";

interface ContactFormProps {
  adventureTitle: string;
}

// Countries: Only Flags & Dial Codes
const countries = [
  { dialCode: "+1", flag: "🇺🇸" }, // US
  { dialCode: "+44", flag: "🇬🇧" }, // UK
  { dialCode: "+91", flag: "🇮🇳" }, // India
  { dialCode: "+61", flag: "🇦🇺" }, // Australia
  { dialCode: "+49", flag: "🇩🇪" }, // Germany
  { dialCode: "+33", flag: "🇫🇷" }, // France
  { dialCode: "+55", flag: "🇧🇷" }, // Brazil
];


const ContactForm: React.FC<ContactFormProps> = ({ adventureTitle }) => {
  const successRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      destination: adventureTitle,
      phone: "",
      countryCode: "+44",
    },
  });

  useGSAP(() => {
    if (isSubmitted && successRef.current) {
      gsap.from(successRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
      });
    }
  }, [isSubmitted]);

  const onSubmit = async (data: {
    name: string;
    email: string;
    message: string;
    destination: string;
    countryCode: string;
    phone: string;
  }) => {
    try {
      console.log("Form submitted:", data);

      await supabase.from("bookings").insert({
        name: data.name,
        email: data.email,
        message: data.message,
        destination: data.destination,
        phone: `${data.countryCode} ${data.phone}`,
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <DialogContent className="  p-6 rounded-lg shadow-lg w-3/4 lg:w-1/2 ">
      <DialogHeader>
        <DialogTitle className="text-xl font-semibold">
          Enquire about {adventureTitle}
        </DialogTitle>
        <DialogDescription className="text-gray-500">
          {`Complete the form below and we'll get back to you within 24 hours`}
        </DialogDescription>
      </DialogHeader>

      {!isSubmitted ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Country Code + Phone Input */}
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="countryCode"
                render={({ field }) => (
                  <FormItem className="w-32">
                    <FormLabel>Code</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value} // Changed from defaultValue to value
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select">
                          {countries.find((c) => c.dialCode === field.value)
                            ? `${
                                countries.find(
                                  (c) => c.dialCode === field.value
                                )?.flag
                              } ${field.value}`
                            : "Select"}
                        </SelectValue>
                      </SelectTrigger>

                      <SelectContent>
                        {countries.map((country, index) => (
                          <SelectItem key={index} value={country.dialCode}>
                            {`${country.flag} ${country.dialCode}`}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="1234567890" {...field} />
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
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your inquiry..."
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark"
            >
              Send Inquiry
            </Button>
          </form>
        </Form>
      ) : (
        <div ref={successRef} className="text-center space-y-4">
          <svg
            className="mx-auto h-16 w-16 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p className="text-lg font-semibold text-green-600">
            Message sent successfully!
          </p>
        </div>
      )}
    </DialogContent>
  );
};

export default ContactForm;
