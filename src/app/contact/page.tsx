"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
import { CheckCircle2 } from "lucide-react";
import {
  contactFormSchema,
  countryCodes,
  type ContactFormValues,
} from "@/schema";
import { submitContactForm } from "@/actions/contacts";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    error?: string;
    success?: string;
  }>({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      countryCode: "+44",
      location: "",
      message: "",
      contactMethod: undefined,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setFormStatus({});

    try {
      const result = await submitContactForm(data);

      if (result.success) {
        setIsSubmitted(true);
        reset();
      } else if (result.error) {
        setFormStatus({ error: result.error });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus({
        error: "There was an error submitting your form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mt-20 lg:h-screen h-fit mx-auto px-4 py-16 max-w-3xl col-span-12">
      <div className="space-y-2 text-center mb-4">
        <h1 className="text-4xl font-bold tracking-tight font-heading text-primary">
          Contact Us
        </h1>
        <p className="text-muted-foreground text-lg">
         {` We'll get back to you within 24 hours`}
        </p>
      </div>

      {isSubmitted ? (
        <div className="border-2 rounded-xl p-8 text-center">
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
            {formStatus.error && (
              <p className="text-red-500 text-sm">{formStatus.error}</p>
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
                  defaultValue="+44"
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
                onValueChange={(value) =>
                  setValue("contactMethod", value as "Email" | "Phone")
                }
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
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactPage;
