import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { MessageSquare, Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState<number | null>(null);

  const submitFeedback = trpc.feedback.submit.useMutation({
    onSuccess: () => {
      toast.success("Thank you for your feedback!");
      setName("");
      setEmail("");
      setMessage("");
      setRating(null);
    },
    onError: (error) => {
      toast.error(`Failed to submit feedback: ${error.message}`);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) {
      toast.error("Please enter your feedback");
      return;
    }
    submitFeedback.mutate({
      name: name || undefined,
      email: email || undefined,
      message,
      rating: rating || undefined,
    });
  };

  return (
    <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <MessageSquare className="w-6 h-6 text-accent" />
        <h3 className="text-xl font-bold text-gold-bright">Share Your Feedback</h3>
      </div>
      
      <p className="text-gray-400 mb-6">
        We'd love to hear your thoughts about Enoch Path. Your feedback helps us create a better experience.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
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
              placeholder="Your email (optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background border-border text-foreground"
            />
          </div>
        </div>

        <div>
          <Textarea
            placeholder="Your feedback..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="bg-background border-border text-foreground resize-none"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Rate your experience (optional)</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className="transition-all duration-200 hover:scale-110"
              >
                <Star
                  className={`w-8 h-8 ${
                    rating && star <= rating
                      ? "fill-accent text-accent"
                      : "text-gray-600 hover:text-accent"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <Button
          type="submit"
          disabled={submitFeedback.isPending}
          className="w-full bg-accent text-accent-foreground hover:bg-gold-bright transition-all duration-300"
        >
          {submitFeedback.isPending ? "Submitting..." : "Submit Feedback"}
        </Button>
      </form>
    </div>
  );
}
