
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { useState, FormEvent } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    setIsSubmitting(true);
    // Form will be handled by FormSubmit
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form
      action="https://formsubmit.co/samiksha14087@gmail.com"
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-6 animate-fade-in"
    >
      {/* Hidden FormSubmit configuration fields */}
      <input 
        type="hidden" 
        name="_autoresponse" 
        value="Thank you for contacting Samiksha! I'll get back to you soon."
      />
      <input 
        type="hidden" 
        name="_template" 
        value="box" 
      />

      <div className="group transition-all duration-300">
        <label htmlFor="name" className="block text-sm font-medium mb-2 group-focus-within:text-portfolio-primary">
          Name
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          className="w-full transition-all duration-300 focus:border-portfolio-primary"
          placeholder="Your name"
        />
      </div>

      <div className="group transition-all duration-300">
        <label htmlFor="email" className="block text-sm font-medium mb-2 group-focus-within:text-portfolio-primary">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          className="w-full transition-all duration-300 focus:border-portfolio-primary"
          placeholder="Your email address"
        />
      </div>

      <div className="group transition-all duration-300">
        <label htmlFor="message" className="block text-sm font-medium mb-2 group-focus-within:text-portfolio-primary">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full resize-none transition-all duration-300 focus:border-portfolio-primary"
          placeholder="Your message"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-portfolio-primary hover:bg-portfolio-secondary text-white flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            <Mail className="h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
