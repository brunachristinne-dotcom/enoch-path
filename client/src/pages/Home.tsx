import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { ChevronDown, Sword, Scroll, Zap, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { NewsletterForm } from "@/components/NewsletterForm";
import { FeedbackForm } from "@/components/FeedbackForm";
import { ConceptArtGallery } from "@/components/ConceptArtGallery";
import { ContactForm } from "@/components/ContactForm";
import { trpc } from "@/lib/trpc";

/**
 * DESIGN PHILOSOPHY: Dark Mysticism with Alchemical Gold
 * - Preto profundo (#0a0a0a) vs. Ouro escuro (#d4a574)
 * - Hierarquia mística com círculos alquímicos
 * - Animações reveladoras com glow dourado
 * - Tipografia Cinzel para títulos épicos
 */

export default function Home() {
  const { user } = useAuth();
  const [scrollY, setScrollY] = useState(0);

  // Track page visit on mount
  const trackVisit = trpc.stats.track.useMutation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Track page visit
    trackVisit.mutate({
      page: "/",
      userAgent: navigator.userAgent,
      referrer: document.referrer || undefined,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* HERO SECTION - Video Background with Logo */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663336561492/hKVDvDXVTbLnIRmD.mp4"
              type="video/mp4"
            />
          </video>
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-background"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 mt-32">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"></div>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Embark on an epic journey through a dark fantasy realm where divine erosion marks the chosen one. 
            Uncover ancient mysteries, wield legendary weapons, and face the darkness within.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-gold-bright transition-all duration-300 glow-gold"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discover the Path
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Concept Art
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-accent" />
          </div>
        </div>
      </section>

      {/* DIVIDER - Alchemical Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

      {/* ABOUT SECTION - História/Lore */}
      <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-accent" />
              <h2 className="text-4xl md:text-5xl text-gold-bright">Sobre o Jogo</h2>
            </div>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Character Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-lg blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663336561492/JuSourCpohkMDHIC.jpeg"
                alt="Enoch - The Chosen One"
                className="relative w-full rounded-lg shadow-2xl glow-gold-intense"
              />
            </div>

            {/* Right: Lore Text */}
            <div>
              <h3 className="text-3xl md:text-4xl mb-6 text-gold-bright">
                The Chosen One
              </h3>

              <div className="w-16 h-1 bg-accent mb-8"></div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Enoch bears the mark of the divine—a golden erosion that spreads across his face, 
                a testament to his connection with ancient forces beyond mortal comprehension. 
                This curse, or blessing, drives him forward on a path shrouded in mystery.
              </p>

              <p className="text-gray-400 text-base leading-relaxed mb-6">
                With his weathered armor and legendary staff, Enoch stands as the last hope against 
                the encroaching darkness. His journey will test not only his strength but the very 
                essence of his humanity.
              </p>

              <p className="text-gray-400 text-base leading-relaxed mb-8">
                In a world where gods have fallen and their remnants corrupt the land, Enoch must 
                navigate treacherous territories, face nightmarish creatures, and uncover the truth 
                behind the divine erosion that marks him as both savior and destroyer.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Sword className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-accent mb-1">Combat Mastery</h4>
                    <p className="text-sm text-gray-400">Master ancient weapons and techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-accent mb-1">Divine Power</h4>
                    <p className="text-sm text-gray-400">Harness the golden erosion's magic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

      {/* FEATURES SECTION */}
      <section className="py-20 md:py-32 bg-secondary/20 relative">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gold-bright">
            Epic Features
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-16"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Scroll className="w-8 h-8" />,
                title: "Rich Lore",
                description: "Discover an intricate world filled with ancient mysteries and forgotten civilizations.",
              },
              {
                icon: <Sword className="w-8 h-8" />,
                title: "Dynamic Combat",
                description: "Engage in challenging battles with strategic depth and responsive combat mechanics.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Divine Magic",
                description: "Unlock powerful spells and abilities tied to the mysterious golden erosion.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-card rounded-lg p-8 border border-border hover:border-accent transition-all duration-300 group glow-gold"
              >
                <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gold-bright mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

      {/* CONCEPT ART GALLERY SECTION */}
      <section id="gallery" className="py-20 md:py-32 bg-background relative">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Scroll className="w-8 h-8 text-accent" />
              <h2 className="text-4xl md:text-5xl text-gold-bright">Concept Art Gallery</h2>
            </div>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Explore the artistic journey behind Enoch Path. From initial sketches to final renders, 
              witness the evolution of characters, weapons, and the dark fantasy world.
            </p>
          </div>

          <ConceptArtGallery />
        </div>
      </section>

      {/* DIVIDER */}
      <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

      {/* NEWSLETTER SECTION */}
      <section className="py-20 md:py-32 bg-background relative">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gold-bright">
            Join the Journey
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-16"></div>

          <NewsletterForm />
        </div>
      </section>

      {/* DIVIDER */}
      <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 md:py-32 bg-secondary/20 relative">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gold-bright">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-16"></div>

          <ContactForm />
        </div>
      </section>

      {/* DIVIDER */}
      <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

      {/* FEEDBACK SECTION */}
      <section className="py-20 md:py-32 bg-background relative">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gold-bright">
            Your Voice Matters
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-16"></div>

          <FeedbackForm />
        </div>
      </section>

      {/* DIVIDER */}
      <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

      {/* FOOTER */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-500 mb-4">© 2026 Enoch Path. All rights reserved.</p>
          <p className="text-gray-600 text-sm">
            An epic dark fantasy journey awaits. Are you ready to walk the path?
          </p>
        </div>
      </footer>
    </div>
  );
}
