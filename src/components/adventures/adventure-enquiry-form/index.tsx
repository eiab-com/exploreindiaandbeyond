"use client";

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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
import { AdventureEnquiryFormSchema } from "@/schema";
import { submitAdventureEnquiryForm } from "@/actions/enquiries";
import { CheckCircle2 } from "lucide-react";

interface AdventureEnquiryProps {
  adventureTitle: string;
}

const countries = [
  { dialCode: "+1", flag: "🇺🇸" },
  { dialCode: "+44", flag: "🇬🇧" },
  { dialCode: "+91", flag: "🇮🇳" },
  { dialCode: "+61", flag: "🇦🇺" },
  { dialCode: "+49", flag: "🇩🇪" },
  { dialCode: "+33", flag: "🇫🇷" },
  { dialCode: "+55", flag: "🇧🇷" },
];

const AdventureEnquiry: React.FC<AdventureEnquiryProps> = ({
  adventureTitle,
}) => {
  const successRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm({
    resolver: zodResolver(AdventureEnquiryFormSchema),
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
    setErrorMessage("");

    const response = await submitAdventureEnquiryForm(data);

    if (response?.error) {
      setErrorMessage(response.error);
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <DialogContent className="p-6 rounded-lg shadow-lg w-3/4 lg:w-1/2">
      <DialogHeader>
        <DialogTitle className="text-xl font-semibold">
          Enquire about {adventureTitle}
        </DialogTitle>
        <DialogDescription className="text-gray-500">
          {`Complete the form below and we'll get back to you within 24 hours.`}
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

            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="countryCode"
                render={({ field }) => (
                  <FormItem className="w-32">
                    <FormLabel>Code</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select">
                          {
                            countries.find((c) => c.dialCode === field.value)
                              ?.flag
                          }{" "}
                          {field.value}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country, index) => (
                          <SelectItem key={index} value={country.dialCode}>
                            {country.flag} {country.dialCode}
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

            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark"
            >
              Send Inquiry
            </Button>
          </form>
        </Form>
      ) : (
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
      )}
    </DialogContent>
  );
};

export default AdventureEnquiry;
