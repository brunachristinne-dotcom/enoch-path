import { Button } from "@/components/ui/button";
import { ChevronDown, Sword, Scroll, Zap } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * DESIGN PHILOSOPHY: Dark Mysticism with Alchemical Gold
 * - Preto profundo (#0a0a0a) vs. Ouro escuro (#d4a574)
 * - Hierarquia mística com círculos alquímicos
 * - Animações reveladoras com glow dourado
 * - Tipografia Cinzel para títulos épicos
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* HERO SECTION - Mystical Forest with Golden Tree */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://private-us-east-1.manuscdn.com/sessionFile/q6h1ksMaDeosj4zLf17QKn/sandbox/aRyGc7LEBqqjkN68rbQJvv-img-1_1770394021000_na1fn_aGVyby1teXN0aWNhbC1mb3Jlc3Q.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcTZoMWtzTWFEZW9zajR6TGYxN1FLbi9zYW5kYm94L2FSeUdjN0xFQnFxamtONjhyYlFKdnYtaW1nLTFfMTc3MDM5NDAyMTAwMF9uYTFmbl9hR1Z5YnkxdGVYTjBhV05oYkMxbWIzSmxjM1EucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Pi10HlSLrIk34HxtVBr81teKhozi9SVmVDfVHXgmZz8nqKIrv7Dz2P9wYx6eJefSoBkrHWXjYGWUHmaOp5E2NEH0PsG6hlV4CMqh9KWHDw84xywEvmE9-R5lva0sdniVGF9lkWcKs09Wu6IEzOFx~CwwR9gVO5lwsF15NW58d83xDhHJtf7qmzScp~vd8r-K-rWtfJSkXuRRi59AJ22Y0XqSHD7rnKKgyLK8D83WlnTKIRZdqplqRYq9LO2NngG0PFNMiKGPyO0-MscOjbvNbhjeceXB8xRLLhmBEXaFJ-WbGnle~XHYxSHhklKD08uXxmhrWdLacRLp~UomOWqCsw__"
            alt="Mystical Forest"
            className="w-full h-full object-cover"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-background"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8 animate-fade-in">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/q6h1ksMaDeosj4zLf17QKn/sandbox/aRyGc7LEBqqjkN68rbQJvv-img-3_1770394024000_na1fn_YWxjaGVtaWNhbC1wYXR0ZXJu.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcTZoMWtzTWFEZW9zajR6TGYxN1FLbi9zYW5kYm94L2FSeUdjN0xFQnFxamtONjhyYlFKdnYtaW1nLTNfMTc3MDM5NDAyNDAwMF9uYTFmbl9ZV3hqYUdWdGFXTmhiQzF3WVhSMFpYSnUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=BBraMiQmwdlYb~EuFWmuE9OwWhIzigsSU29c1W3Z6PXw8j-SiZsL9kZ7bLUSurU6RVqxMCb6j2ErRfJd4HK4e5VNUa~iLJnFt~m0g~W8QvTFT1M2W4ubdxSSPgD6xfw6L2ZLyZqFBL~sXhs2Mvlir53hXO0KbwkVMXZLdSzbHGvUkRN-gQmxTtPRkKYU-a2-X98Ig-oNXqIzzUZv5wS-vOQI2cpGiQ6mJDn77FHQb8yKffDrvyXaPZ27I01Tfpab6RFUKGyvwrWVtdd2PU6~k0usB3qT-P5se7FpQTr2rrbhMCtjmpIqrRKF3cDdKHOJbuo-T206raZtwGPNGWNlLQ__"
              alt="Alchemical Pattern"
              className="w-32 h-32 mx-auto mb-6 opacity-80 glow-gold"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gold-bright drop-shadow-lg animate-fade-in">
            ENOCH PATH
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"></div>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Embark on an epic journey through a dark fantasy realm where divine erosion marks the chosen one. 
            Uncover ancient mysteries, wield legendary weapons, and face the darkness within.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-gold-bright transition-all duration-300 glow-gold"
            >
              Discover the Path
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
            >
              Watch Trailer
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

      {/* ABOUT SECTION */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Character Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-lg blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/q6h1ksMaDeosj4zLf17QKn/sandbox/aRyGc7LEBqqjkN68rbQJvv-img-2_1770394046000_na1fn_ZW5vY2gtY2hhcmFjdGVyLWRyYW1hdGlj.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcTZoMWtzTWFEZW9zajR6TGYxN1FLbi9zYW5kYm94L2FSeUdjN0xFQnFxamtONjhyYlFKdnYtaW1nLTJfMTc3MDM5NDA0NjAwMF9uYTFmbl9aVzV2WTJndFkyaGhjbUZqZEdWeUxXUnlZVzFoZEdsai5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=CRDVimNrkudmbPw5Dpfj4R7Ixgpy5fMRVumOPjLMFYswS7DylH06gEX1GE4wMLb5wmqL6U69ecPosLYE4WaHhwMgSjpUAm1Ozy~S9STHqpOQNjb8hAa8qugRcF1D6OoeWVQPazjOFn~mGLQNgY0zpMDpOShXz9D5BjOoroJRXLLE-pa0HCADV2eSsJv1QGNb1lktQWBoMxWK77vRcErQZdCxcS9k~783HQwTbWJYJb~bYtcQo-XPnX9s7m-G1M72zVx-0arp1ISP~nDYnuMLdAC37DtE1yZVr1K2-dAmMqwlGJewFS4Gf4P7t3zylJut2kGSZYGr7I9gCHgLZ98~Bg__"
                alt="Enoch - The Chosen One"
                className="relative w-full rounded-lg shadow-2xl glow-gold-intense"
              />
            </div>

            {/* Right: About Text */}
            <div>
              <h2 className="text-4xl md:text-5xl mb-6 text-gold-bright">
                The Chosen One
              </h2>

              <div className="w-16 h-1 bg-accent mb-8"></div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Enoch bears the mark of the divine—a golden erosion that spreads across his face, 
                a testament to his connection with ancient forces beyond mortal comprehension. 
                This curse, or blessing, drives him forward on a path shrouded in mystery.
              </p>

              <p className="text-gray-400 text-base leading-relaxed mb-8">
                With his weathered armor and legendary staff, Enoch stands as the last hope against 
                the encroaching darkness. His journey will test not only his strength but the very 
                essence of his humanity.
              </p>

              <div className="flex gap-4">
                <div className="flex items-start gap-3">
                  <Sword className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-accent mb-1">Combat Mastery</h3>
                    <p className="text-sm text-gray-400">Master ancient weapons and techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-accent mb-1">Divine Power</h3>
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
