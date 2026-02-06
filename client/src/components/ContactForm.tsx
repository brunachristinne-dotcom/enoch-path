import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitContact = trpc.feedback.submit.useMutation({
    onSuccess: () => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    },
    onError: (error) => {
      toast.error(`Failed to send message: ${error.message}`);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Combine subject and message for storage
    const fullMessage = subject 
      ? `Subject: ${subject}\n\n${message}` 
      : message;
    
    submitContact.mutate({
      name: name || undefined,
      email,
      message: fullMessage,
    });
  };

  return (
    <div className="bg-card border border-border rounded-lg p-8 max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <Mail className="w-6 h-6 text-accent" />
        <h3 className="text-xl font-bold text-gold-bright">Get in Touch</h3>
      </div>
      
      <p className="text-gray-400 mb-6">
        Have questions about Enoch Path? Want to collaborate or provide feedback? 
        Send us a message and we'll respond as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Name <span className="text-gray-600">(optional)</span>
            </label>
            <Input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-background border-border text-foreground"
            />
          </div>
          
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Email <span className="text-accent">*</span>
            </label>
            <Input
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background border-border text-foreground"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Subject <span className="text-gray-600">(optional)</span>
          </label>
          <Input
            type="text"
            placeholder="What is this about?"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="bg-background border-border text-foreground"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Message <span className="text-accent">*</span>
          </label>
          <Textarea
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={6}
            className="bg-background border-border text-foreground resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={submitContact.isPending}
          className="w-full bg-accent text-accent-foreground hover:bg-gold-bright transition-all duration-300 flex items-center justify-center gap-2"
        >
          {submitContact.isPending ? (
            "Sending..."
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
