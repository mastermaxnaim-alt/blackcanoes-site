import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function CanoesCollectionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const canoes = [
    {
      name: "Estrela Dalva",
      subtitle: "A Pioneira",
      image:
        "https://images.unsplash.com/photo-1719152883504-91c3c6e560ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2x5bmVzaWFuJTIwb3V0cmlnZ2VyJTIwY2Fub2UlMjBvY2VhbiUyMHN1bnJpc2V8ZW58MXx8fHwxNzc5MTk2NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "A primeira canoa de styrofoam construída em Jericoacoara. Um marco histórico que abriu caminho para a inovação.",
      specs: ["Material: Styrofoam", "Tipo: OC1", "Uso: Águas calmas e downwind"],
    },
    {
      name: "Navegador",
      subtitle: "Performance",
      image:
        "https://images.unsplash.com/photo-1596736890254-cef0137163bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMGtheWFraW5nJTIwZG93bndpbmQlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzc5MTk2NDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Projetada para navegação de alto desempenho. Combina velocidade, estabilidade e design aerodinâmico.",
      specs: ["Material: Compósito", "Tipo: OC1", "Uso: Downwind e competição"],
    },
    {
      name: "Explorador",
      subtitle: "Aventura",
      image:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdmVzJTIwZG9jdW1lbnRhcnklMjBjaW5lbWF0aWN8ZW58MXx8fHwxNzc5MTk2NDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Para quem busca conexão profunda com o oceano. Estável, versátil e preparada para longas jornadas.",
      specs: ["Material: Fibra de vidro", "Tipo: OC1", "Uso: Exploração e lazer"],
    },
  ];

  return (
    <section
      id="canoes-collection"
      ref={ref}
      className="bg-[#1a1a1a] px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2
            className="mb-6 tracking-wider"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              letterSpacing: "0.06em",
            }}
          >
            NOSSAS EMBARCAÇÕES
          </h2>
          <p
            className="mx-auto max-w-3xl text-xl leading-relaxed text-white/80"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Cada canoa BLACK CANOES é única. Desenvolvidas com precisão e paixão,
            nossas embarcações são feitas para aqueles que buscam excelência no
            oceano.
          </p>
        </motion.div>

        {/* Canoes Grid */}
        <div className="grid gap-12 lg:gap-16">
          {canoes.map((canoe, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
            >
              <Card className="overflow-hidden border-none bg-[#242424]">
                <div className="grid gap-8 lg:grid-cols-5">
                  {/* Image */}
                  <div className="lg:col-span-3">
                    <div className="relative aspect-[16/10] overflow-hidden lg:h-full">
                      <img
                        src={canoe.image}
                        alt={canoe.name}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center p-8 lg:col-span-2 lg:p-12">
                    <div className="mb-2 text-sm uppercase tracking-widest text-[#d4a574]">
                      {canoe.subtitle}
                    </div>
                    <h3
                      className="mb-6 text-4xl tracking-wide"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {canoe.name}
                    </h3>
                    <p
                      className="mb-8 leading-relaxed text-white/70"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      {canoe.description}
                    </p>

                    {/* Specs */}
                    <div className="mb-8 space-y-3">
                      {canoe.specs.map((spec, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 text-sm text-white/80"
                        >
                          <div className="h-1 w-1 rounded-full bg-[#d4a574]" />
                          <span style={{ fontFamily: "'Inter', sans-serif" }}>
                            {spec}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="w-fit border-[#d4a574] bg-transparent text-[#d4a574] hover:bg-[#d4a574] hover:text-black"
                    >
                      Saber mais
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
