"use client";

import type React from "react";

import { Button } from "@/app/shared/components/ui/button";
import { Input } from "@/app/shared/components/ui/input";
import { Textarea } from "@/app/shared/components/ui/textarea";
import { useState } from "react";

export default function GetQuote() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <section id="quote" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-8">GET A QUOTE</h2>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-left font-bold">
            Planning a new project or renovation? Request your budget here! Our team is ready to
            provide you with a personalized quote tailored to your needs. We ensure a transparent
            and efficient process, helping you make informed decisions every step of the way. Simply
            share your project details, and we&apos;ll take care of the rest—because building with
            clarity starts with the right estimate.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Name * (Required)
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Input your Name"
                required
                className="border-b border-gray-300 rounded-none px-0 focus:ring-0"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 text-sm">
                Phone* (Required)
              </label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Input your Phone Number"
                required
                className="border-b border-gray-300 rounded-none px-0 focus:ring-0"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email* (Required)
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Input your Email"
                required
                className="border-b border-gray-300 rounded-none px-0 focus:ring-0"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 text-sm">
                Subject* (Required)
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Input your Subject"
                required
                className="border-b border-gray-300 rounded-none px-0 focus:ring-0"
              />
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block mb-2 text-sm">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Input your Message Here"
              rows={4}
              className="border-b border-gray-300 rounded-none px-0 focus:ring-0 resize-none"
            />
          </div>

          <div className="flex">
            <Button
              type="submit"
              className="bg-black text-white w-full py-3 rounded-none hover:bg-gray-800"
            >
              SEND NOW
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
