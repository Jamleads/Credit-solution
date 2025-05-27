import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

// Email template configurations
export const emailTemplates = {
  client: {
    subject: "Welcome to LVLUP Credit Solutions - Your Journey Starts Now!",
    template: `
      Hi {{clientName}},

      Thank you for reaching out to LVLUP Credit Solutions! We're excited to help you transform your credit score and achieve your financial goals.

      What happens next:
      • Our credit experts will review your information within 24 hours
      • You'll receive a personalized credit analysis and improvement plan
      • We'll schedule your FREE consultation to discuss your options

      Your message: "{{message}}"

      Our team is committed to providing you with exceptional service and real results. Get ready to see your credit score improve!

      Best regards,
      The LVLUP Credit Solutions Team
      📞 Contact us: (555) 123-4567
      🌐 Visit: lvlupcreditsolutions.com
    `,
  },
  owner: {
    subject: "New Lead: {{clientName}} - Credit Consultation Request",
    template: `
      New lead from website contact form:

      Name: {{clientName}}
      Email: {{email}}
      Phone: {{phone}}
      
      Message:
      {{message}}

      Lead generated from: {{referrer}}
      Timestamp: {{timestamp}}
      Language: {{language}}

      Follow up within 2 hours for best conversion rates.
    `,
  },
};

export function ContactForm() {
  const { t, currentLanguage } = useLanguage();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(".....", formData);
    try {
      // 🔹 Send email to site owner
      await emailjs.send(
        "service_108emkr",
        "template_64poy6k", // Template ID for notifying the site owner
        {
          to_name: formData.name,
          to_email: formData.email,
          to_phone: formData.phone,
          message: formData.message,
        },
        "jrbPqazE6HVfDFwLM" // Your public API key
      );

      // 🔹 Send confirmation email to client
      await emailjs.send(
        "service_108emkr",
        "template_o51sy1s", // Template ID for sending to the client
        {
          to_name: formData.name,
          to_email: formData.email,
          to_phone: formData.phone,
          message: formData.message,
        },
        "jrbPqazE6HVfDFwLM"
      );

      // Toast success
      toast({
        title: "Request Submitted Successfully!",
        description: "Check your email for more info",
      });

      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Email sending error:", error);

      toast({
        title: "Submission Error",
        description: "Please try again or call us directly at (555) 123-4567",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // zUW-6d1uxN13WaJyI_e2h
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-2xl border-0 animate-scale-in">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
              {t("contact.title")}
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              {t("contact.subtitle")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input
                    name="name"
                    placeholder={t("contact.name")}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="h-12 text-lg"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder={t("contact.email")}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="h-12 text-lg"
                  />
                </div>
              </div>

              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder={t("contact.phone")}
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="h-12 text-lg"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder={t("contact.message")}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="min-h-32 text-lg resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 text-lg font-semibold bg-primary-500 hover:bg-primary-600 text-white"
              >
                {isLoading ? "Submitting..." : t("contact.submit")}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
