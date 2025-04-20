
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Configure the template parameters to match the EmailJS template
      const templateParams = {
        to_email: "samiksha14087@gmail.com", // Admin email
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
      };

      const result = await emailjs.send(
        "service_or0f9tm", 
        "template_dm1zebq", 
        templateParams,
        "ggCnpAlboXrUI9iCE"
      );

      if (result.status === 200) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
        });
        // Reset form
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full"
          placeholder="Your email address"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full resize-none"
          placeholder="Your message"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-portfolio-primary hover:bg-portfolio-secondary text-white flex items-center justify-center gap-2"
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
