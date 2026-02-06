import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trpc } from "@/lib/trpc";
import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const subscribe = trpc.newsletter.subscribe.useMutation({
    onSuccess: () => {
      toast.success("Successfully subscribed to newsletter!");
      setEmail("");
      setName("");
    },
    onError: (error) => {
      toast.error(`Failed to subscribe: ${error.message}`);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    subscribe.mutate({ email, name: name || undefined });
  };

  return (
    <div className="bg-card border border-border rounded-lg p-8 max-w-md mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <Mail className="w-6 h-6 text-accent" />
        <h3 className="text-xl font-bold text-gold-bright">Stay Updated</h3>
      </div>
      
      <p className="text-gray-400 mb-6">
        Subscribe to receive news about Enoch Path development and release updates.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Your name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-background border-border text-foreground"
          />
        </div>
        
        <div>
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-background border-border text-foreground"
          />
        </div>

        <Button
          type="submit"
          disabled={subscribe.isPending}
          className="w-full bg-accent text-accent-foreground hover:bg-gold-bright transition-all duration-300"
        >
          {subscribe.isPending ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    </div>
  );
}
