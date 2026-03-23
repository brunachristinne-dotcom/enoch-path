import { ArrowUp, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      href: "#",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "#",
      color: "hover:text-blue-300",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "#",
      color: "hover:text-pink-400",
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "#",
      color: "hover:text-red-500",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

      <div className="container max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold text-gold-bright tracking-wider mb-2">
              ENOCH PATH
            </h3>
            <p className="text-gray-400 text-sm">
              Uma jornada épica através da fantasia sombria
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold text-accent mb-4 uppercase tracking-wide">
              Navegação
            </h4>
            <div className="flex flex-col gap-2 text-center">
              <button
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm"
              >
                Sobre o Jogo
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("gallery")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm"
              >
                Galeria de Artes
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm"
              >
                Contato
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-lg font-semibold text-accent mb-4 uppercase tracking-wide">
              Redes Sociais
            </h4>
            <div className="flex gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`text-gray-400 transition-colors duration-300 ${social.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © {currentYear} Enoch Path. Todos os direitos reservados.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Desenvolvido com dedicação épica
            </p>
          </div>

          <Button
            onClick={scrollToTop}
            className="bg-accent text-accent-foreground hover:bg-gold-bright transition-all duration-300 glow-gold flex items-center gap-2"
            size="sm"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
