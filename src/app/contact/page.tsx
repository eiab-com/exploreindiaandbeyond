"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import supabase from "@/lib/supabase";
import { CheckCircle2 } from "lucide-react";

// Validation Schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Phone number must be at least 8 digits"),
  countryCode: z.string(),
  location: z.string().min(2, "Please enter your location"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  contactMethod: z.enum(["Email", "Phone"], {
    required_error: "Please select a preferred way of contact",
  }),
});

// Country codes
const countryCodes = [
  { code: "+1", country: "US/Canada" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "India" },
  { code: "+61", country: "Australia" },
  { code: "+49", country: "Germany" },
];

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      countryCode: "+44",
      location: "",
      message: "",
      contactMethod: "",
    },
  });

  const onSubmit = async (data: {
    name: string;
    email: string;
    message: string;
    location: string;
    phone: string;
    countryCode: string;
    contactMethod: string;
  }) => {
    try {
      console.log("Form submitted:", data);
      // Destructure to remove extra fields if needed
      const { countryCode, phone, contactMethod, ...rest } = data;
      // Build payload with phone combined
      const payload = {
        ...rest,
        phone: `${countryCode} ${phone}`,
        contactMethod,
      };

      await supabase.from("contacts").insert(payload);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionError(
        "There was an error submitting your form. Please try again."
      );
    }
  };

  return (
    <div className="container mt-20 lg:h-screen h-fit mx-auto px-4 py-16 max-w-3xl col-span-12">
      <div className="space-y-2 text-center  mb-4">
        <h1 className="text-4xl font-bold tracking-tight font-heading text-primary">
          Contact Us
        </h1>
        <p className="text-muted-foreground text-lg">
          {` We'll get back to you within 24 hours`}
        </p>
      </div>

      {isSubmitted ? (
        <div className="border-2  rounded-xl p-8 text-center ">
          <div className="flex flex-col items-center gap-4">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
            <h2 className="text-2xl font-semibold">Message Sent!</h2>
            <p className="text-muted-foreground">
              {` Thank you for contacting us. We'll respond shortly.`}
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="mt-4"
              variant="outline"
            >
              Send Another Message
            </Button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border rounded-xl p-8 bg-background shadow-sm"
        >
          <div className="space-y-8">
            {submissionError && (
              <p className="text-red-500 text-sm">{submissionError}</p>
            )}

            <div className="grid gap-6 md:grid-cols-2">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base">
                  Full Name
                </Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="John Doe"
                  className="h-12"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base">
                  Email Address
                </Label>
                <Input
                  id="email"
                  {...register("email")}
                  placeholder="john@example.com"
                  className="h-12"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location" className="text-base">
                Location
              </Label>
              <Input
                id="location"
                {...register("location")}
                placeholder="City, Country"
                className="h-12"
              />
              {errors.location && (
                <p className="text-red-500 text-sm">
                  {errors.location.message}
                </p>
              )}
            </div>

            {/* Phone Input Group */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="countryCode" className="text-base">
                  Country Code
                </Label>
                <Select
                  onValueChange={(value) => setValue("countryCode", value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="+1" />
                  </SelectTrigger>
                  <SelectContent>
                    {countryCodes.map(({ code, country }) => (
                      <SelectItem key={code} value={code}>
                        {country} ({code})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="phone" className="text-base">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  {...register("phone")}
                  placeholder="1234567890"
                  className="h-12"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Contact Method */}
            <div className="space-y-2">
              <Label htmlFor="contactMethod" className="text-base">
                Preferred Contact Method
              </Label>
              <Select
                onValueChange={(value) => setValue("contactMethod", value)}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select contact method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Email">Email</SelectItem>
                  <SelectItem value="Phone">Phone</SelectItem>
                </SelectContent>
              </Select>
              {errors.contactMethod && (
                <p className="text-red-500 text-sm">
                  {errors.contactMethod.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-base">
                Your Message
              </Label>
              <Textarea
                id="message"
                {...register("message")}
                placeholder="Please include all relevant details..."
                className="min-h-[120px]"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-base font-medium"
              size="lg"
            >
              Send Message
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactPage;
