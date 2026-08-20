import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Globe, MessageSquare, Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { buildContactMailtoLink, submitContactToFormspree } from "./contactUtils";
import LocationMap from "./LocationMap";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  subject: z.string().trim().min(5, "Subject must be at least 5 characters").max(200),
  message: z.string().trim().min(20, "Please provide more details (at least 20 characters)").max(5000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const CorporateContact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

      if (formspreeEndpoint) {
        await submitContactToFormspree(formspreeEndpoint, {
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
        });

        setSubmitted(true);
        reset();
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. We'll respond within 24 hours.",
        });
        return;
      }

      const mailtoLink = buildContactMailtoLink({
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
      });
      window.location.href = mailtoLink;
      reset();
      toast({
        title: "Opening your email app",
        description: "Send the pre-filled message to reach our team.",
      });
    } catch (err) {
      console.error("Contact submission error:", err);
      const fallbackLink = buildContactMailtoLink({
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
      });
      window.location.href = fallbackLink;
      toast({
        title: "Message could not be sent automatically",
        description: "We opened your email app so you can send your message directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Build Your Next Project
          </h2>
          <p className="text-muted-foreground text-lg">
            We'll respond within 24 hours.
          </p>
        </motion.div>

        {/* Info cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {[
            { icon: Mail, title: "Email Us", value: "contact@futuretechafrica.com", href: "mailto:contact@futuretechafrica.com" },
            { icon: Globe, title: "Our Presence", value: "Namibia & Kenya" },
            { icon: MessageSquare, title: "Response Time", value: "Within 24 hours" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (i + 1) }}
              className="bg-card p-6 rounded-2xl shadow-card text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              {item.href ? (
                <a href={item.href} className="text-accent hover:underline text-sm">
                  {item.value}
                </a>
              ) : (
                <p className="text-muted-foreground text-sm">{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl shadow-card p-8"
          >
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Message Received</h3>
              <p className="text-muted-foreground mb-6">
                Thank you for reaching out. Our team will respond within 24 hours.
              </p>
              <Button variant="outline" onClick={() => setSubmitted(false)}>
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <h3 className="text-2xl font-bold text-foreground mb-2">Send us a message</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Fill out the form and our team will get back to you shortly.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="John Doe" {...register("name")} />
                  {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
                  {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone (Optional)</Label>
                <Input id="phone" placeholder="+264 81 234 5678" {...register("phone")} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input id="subject" placeholder="How can we help?" {...register("subject")} />
                {errors.subject && <p className="text-sm text-destructive">{errors.subject.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your project, security concerns, or questions..."
                  {...register("message")}
                />
                {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
              </div>

              <Button type="submit" disabled={isSubmitting} size="lg" className="w-full sm:w-auto">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          )}
          </motion.div>

          {/* Location map */}
          <LocationMap />
        </div>
      </div>
    </section>
  );
};

export default CorporateContact;
