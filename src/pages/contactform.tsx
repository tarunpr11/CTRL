"use client";
import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "@/lib/utils";
import "./style.css";


export function SignupFormDemo() {
  const [state, handleSubmit] = useForm("xyzgweow");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  // Define state for form fields (you'll need to define the corresponding state and setters)
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccessMessage(true);
      // Hide success message after 3 seconds
      const timer = setTimeout(() => setShowSuccessMessage(false), 3000);
      // Cleanup the timer
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black" id="contact">
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              name="firstname"
              placeholder="Tyler"
              type="text"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              name="lastname"
              placeholder="Durden"
              type="text"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="category">Select Category</Label>
          <select
            id="dropdown"
            name="category"
            className="custom-select custom-select-dark"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Web Development">Web Development</option>
            <option value="Design">Design</option>
            <option value="Video Editing">Video Editing</option>
          </select>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Your Message to us</Label>
          <textarea
            className="flex h-40 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover:shadow-none transition duration-400"
            id="message"
            name="message"
            placeholder="Do let us know your reviews, suggestions or request for services"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={10}
            cols={50}
          ></textarea>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          disabled={state.submitting}
        >
          Send &rarr;
        </button>
        {showSuccessMessage && (
          <div className="fixed bottom-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
            Message sent successfully!
          </div>
        )}
      </form>
    </div>
  );
}


const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full contact-boxes", className)}>
      {children}
    </div>
  );
};
