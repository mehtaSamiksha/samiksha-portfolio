
import { Layout } from "@/components/layout/Layout";
import { ContactForm } from "@/components/contact/ContactForm";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  useEffect(() => {
    // Initialize EmailJS with your user ID
    // This is needed to use EmailJS without authentication
    // Replace with your actual PUBLIC key when you set up EmailJS
    emailjs.init("YOUR_PUBLIC_KEY");
  }, []);

  return (
    <Layout>
      <section className="section-container">
        <h1 className="section-title">Contact Me</h1>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-center text-lg text-slate-600">
            Have a question or want to work together? Feel free to reach out to me
            using the form below or contact me directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-display font-semibold mb-6">
              Get in Touch
            </h2>
            <p className="text-slate-600 mb-8">
              Fill out the form and I'll get back to you as soon as possible. I'm always
              open to discussing new projects, opportunities, and challenges.
            </p>

            <ContactForm />
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold mb-6">
              Contact Information
            </h2>
            <p className="text-slate-600 mb-8">
              You can also reach me directly using the following contact information.
              I'm looking forward to hearing from you!
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-portfolio-accent p-3 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-portfolio-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Location</h3>
                  <p className="text-slate-600">Sirsa, Haryana 125055</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-portfolio-accent p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-portfolio-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Email</h3>
                  <a
                    href="mailto:samiksha14087@gmail.com"
                    className="text-slate-600 hover:text-portfolio-primary transition-colors"
                  >
                    samiksha14087@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-portfolio-accent p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-portfolio-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Phone</h3>
                  <a
                    href="tel:+917497828529"
                    className="text-slate-600 hover:text-portfolio-primary transition-colors"
                  >
                    +91 7497828529
                  </a>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-200">
                <h3 className="font-medium text-lg mb-4">Connect with Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/mehtaSamiksha"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-slate-900 text-white p-3 rounded-full hover:bg-slate-700 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/samiksha04"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#0077B5] text-white p-3 rounded-full hover:bg-[#005885] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:samiksha14087@gmail.com"
                    className="bg-portfolio-primary text-white p-3 rounded-full hover:bg-portfolio-secondary transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
