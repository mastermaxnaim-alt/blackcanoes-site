import image_FELIPE_PRETO_1 from '@/imports/FELIPE_PRETO-1.png'
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function BrandStorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="brand-story"
      ref={ref}
      className="relative bg-[#1a1a1a] px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2
              className="tracking-wider"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                letterSpacing: "0.06em",
              }}
            >
              A HISTÓRIA
            </h2>

            <div
              className="space-y-6 text-lg leading-relaxed text-white/80"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              <p>
                Em Jericoacoara, onde o vento e o mar se encontram, nasceu uma
                visão. Felipe Preto, movido pela paixão pela cultura polinésia e
                pelo oceano, iniciou uma jornada que transformaria a navegação
                artesanal no Brasil.
              </p>

              <p>
                A primeira canoa, <strong className="text-white">Estrela Dalva</strong>,
                  emergiu como um marco histórico. Construída com isopor – uma
                inovação pioneira na região – ela representava mais do que uma
                embarcação: era um símbolo de possibilidades.
              </p>

              <p>
                Em Preá, a visão evoluiu. Felipe não apenas construiu canoas;
                ele esculpiu cada remo à mão, selecionando madeiras nobres,
                estudando ergonomia, unindo funcionalidade com arte.
              </p>

              <p>
                Hoje, BLACK CANOES representa 15 anos de vanguarda, inovação e
                respeito profundo pela tradição polinésia e pelo oceano que
                conecta continentes e culturas.
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src={image_FELIPE_PRETO_1}
                alt="Felipe Preto"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Decorative Element */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 h-32 w-32 border-4 border-[#d4a574]"
            />
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {[
            { number: "15+", label: "Anos de Experiência" },
            { number: "01", label: "Primeira Canoa de Styrofoam" },
            { number: "100%", label: "Artesanal" },
            { number: "∞", label: "Paixão pelo Oceano" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="mb-2 text-5xl text-[#d4a574]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {stat.number}
              </div>
              <div
                className="text-sm uppercase tracking-wider text-white/60"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
