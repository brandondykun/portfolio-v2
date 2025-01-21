"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

type Errors = {
  name: null | string;
  email: null | string;
  message: null | string;
};

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({
    name: null,
    email: null,
    message: null,
  });
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const [middleName, setMiddleName] = useState("");
  const [botDetected, setBotDetected] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSubmitError(null);

    if (middleName) {
      setBotDetected(true);
      return;
    }

    setErrors({
      name: null,
      email: null,
      message: null,
    });

    let errors = false;
    if (!name) {
      setErrors((prev) => {
        return { ...prev, name: "Please enter your name." };
      });
      errors = true;
    }
    if (!email) {
      setErrors((prev) => {
        return { ...prev, email: "Please enter your email." };
      });
      errors = true;
    }
    if (!message) {
      setErrors((prev) => {
        return { ...prev, message: "Please enter a message." };
      });
      errors = true;
    }

    if (errors) {
      setLoading(false);
      return;
    }

    const formData = {
      user_name: name,
      user_email: email,
      message: message,
    };

    emailjs
      .send(
        process.env.EMAILJS_SERVICE_ID!,
        process.env.EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          // return result.status === 200
          setName("");
          setEmail("");
          setMessage("");
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
          setSubmitError("There was an error. Please try again.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {!submitted ? (
        <form
          className="max-w-[500px] w-full min-h-[460px] flex flex-col gap-4 py-4 md:pl-8 relative overflow-hidden mb-12 lg:mb-0 px-1"
          onSubmit={sendEmail}
        >
          <div className="flex flex-col">
            <Label htmlFor="name-input">Your Name</Label>
            <Input
              id="name-input"
              type="text"
              className={`mt-2 ${
                errors.name ? "border-red-700 dark:border-red-700" : ""
              }`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="user_name"
            />
            <div className="h-4 text-red-700 text-sm pt-1">{errors.name}</div>
          </div>
          {/* Honeypot field */}
          <div className="flex flex-col absolute left-[3000px] top-[3000px]">
            <Label htmlFor="name-input">Middle Name</Label>
            <Input
              id="middle-name-input"
              type="text"
              className={`mt-2 ${
                errors.email ? "border-red-700 dark:border-red-700" : ""
              }`}
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              name="middle_name"
              autoComplete="off"
              tabIndex={-1}
            />
            <div className="h-4 text-red-700 text-sm pt-1">{errors.email}</div>
          </div>
          {/* Honeypot field */}
          <div className="flex flex-col">
            <Label htmlFor="name-input">Your Email</Label>
            <Input
              id="name-input"
              type="email"
              className={`mt-2 ${
                errors.email ? "border-red-700 dark:border-red-700" : ""
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="user_email"
            />
            <div className="h-4 text-red-700 text-sm pt-1">{errors.email}</div>
          </div>

          <div className="flex flex-col">
            <Label htmlFor="text-area-input">Message</Label>
            <Textarea
              id="text-area-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`mt-2 ${
                errors.message ? "border-red-700 dark:border-red-700" : ""
              } min-h-[150px]`}
              name="message"
            />
            <div className="h-4 text-red-700 text-sm pt-1">
              {errors.message}
            </div>
          </div>
          <div className="h-6 text-red-700 text-center md:text-left">
            {submitError}
          </div>
          <div className="flex flex-row justify-center md:justify-start">
            <Button
              type="submit"
              variant="green"
              className="w-fit"
              disabled={loading}
            >
              Send Email
            </Button>
          </div>
        </form>
      ) : (
        <div className="max-w-[450px] w-full flex flex-col flex-1 justify-center items-center text-accent gap-4 min-h-[460px]">
          <IoIosCheckmarkCircleOutline size={150} />
          <div className="text-3xl">Email Sent!</div>
          <div className="text-xl text-stone-500 dark:text-stone-300">
            Thank you for your consideration!
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
