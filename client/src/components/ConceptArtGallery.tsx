import { Palette } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ArtPiece {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
}

const artPieces: ArtPiece[] = [
  {
    id: "face",
    title: "Processo de Desenvolvimento: Rosto de Enoch",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663336561492/YnpxSBUQACLMIYUa.png",
    description: "Evolução do design do rosto de Enoch em três estágios: Fast Draft (esboço rápido com forma geral e volume), Line Art (arte final com rugas profundas e cristais definidos), e Final Work (render 3D com erosão divina de quartzo dourado, pele envelhecida e iluminação dramática).",
    category: "Character Design"
  },
  {
    id: "staff",
    title: "Processo de Desenvolvimento: Cajado de Enoch",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663336561492/ewXAbGEUsLTbSeYh.png",
    description: "Desenvolvimento do cajado místico em três fases: Fast Draft (madeira antiga com forma orgânica), Line Art (rachaduras profundas e cristais embutidos), e Final Work (madeira antiga com textura rugosa, cristais inativos rochosos e crescimento orgânico nas fendas). Estado apagado representa o poder adormecido.",
    category: "Weapon Design"
  },
  {
    id: "character",
    title: "Enoch - O Escolhido",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663336561492/JuSourCpohkMDHIC.jpeg",
    description: "Arte final do personagem principal: Enoch, um guerreiro marcado pela erosão divina dourada. Vestindo armadura medieval desgastada, capa de pele escura e portando escudo de madeira e espada longa. A erosão dourada em seu rosto simboliza sua conexão com forças divinas antigas.",
    category: "Character Design"
  }
];

export function ConceptArtGallery() {
  const [selectedArt, setSelectedArt] = useState<ArtPiece | null>(null);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artPieces.map((art) => (
          <div
            key={art.id}
            className="group cursor-pointer"
            onClick={() => setSelectedArt(art)}
          >
            <div className="relative overflow-hidden rounded-lg border border-border hover:border-accent transition-all duration-300 bg-card">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Palette className="w-4 h-4 text-accent" />
                  <span className="text-xs text-accent uppercase tracking-wide">{art.category}</span>
                </div>
                <h3 className="text-lg font-bold text-gold-bright mb-2">{art.title}</h3>
                <p className="text-sm text-gray-300 line-clamp-2">{art.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Dialog */}
      <Dialog open={!!selectedArt} onOpenChange={() => setSelectedArt(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-card border-accent">
          <DialogHeader>
            <DialogTitle className="text-2xl text-gold-bright flex items-center gap-3">
              <Palette className="w-6 h-6 text-accent" />
              {selectedArt?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedArt && (
            <div className="space-y-6">
              <div className="relative rounded-lg overflow-hidden border border-border">
                <img
                  src={selectedArt.image}
                  alt={selectedArt.title}
                  className="w-full h-auto"
                />
              </div>
              
              <div>
                <div className="inline-block px-3 py-1 bg-accent/20 border border-accent rounded-full mb-4">
                  <span className="text-sm text-accent uppercase tracking-wide">{selectedArt.category}</span>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">{selectedArt.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
