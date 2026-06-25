import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function ArtisanalFabricationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const processes = [
    {
      image:
        "https://images.unsplash.com/photo-1611012376839-d49a817b86c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjYW5vZSUyMHBhZGRsZSUyMGNyYWZ0c21hbnNoaXB8ZW58MXx8fHwxNzc5MTk2NDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Remos Artesanais",
      description:
        "Cada remo é esculpido à mão por Felipe Preto, utilizando madeiras selecionadas e design ergonômico funcional.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1721508490084-1b1de5b230d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGNyYWZ0c21hbnNoaXAlMjBuYXR1cmFsJTIwbWF0ZXJpYWxzfGVufDF8fHx8MTc3OTE5NjQ4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Materiais Sustentáveis",
      description:
        "Inovação com consciência. Utilizamos materiais recicláveis e técnicas que respeitam o meio ambiente.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1655111379423-b85edc4da9ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kd29ya2luZyUyMHdvcmtzaG9wJTIwYXJ0aXNhbiUyMGhhbmRzfGVufDF8fHx8MTc3OTE5NjQ3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Processo Manual",
      description:
        "Do primeiro corte ao acabamento final, cada canoa é criada com dedicação e precisão artesanal.",
    },
  ];

  return (
    <section
      id="artisanal-fabrication"
      ref={ref}
      className="bg-[#f5f1eb] px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2
            className="mb-6 tracking-wider text-[#1a1a1a]"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              letterSpacing: "0.06em",
            }}
          >
            FABRICAÇÃO ARTESANAL
          </h2>
          <p
            className="mx-auto max-w-3xl text-xl leading-relaxed text-[#1a1a1a]/70"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Cada embarcação é uma obra de arte. Do workshop em Preá, nascem
            canoas que combinam tradição polinésia com inovação brasileira.
          </p>
        </motion.div>

        {/* Process Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group relative overflow-hidden rounded-sm bg-white shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={process.image}
                  alt={process.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3
                  className="mb-4 text-2xl tracking-wide text-[#1a1a1a]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {process.title}
                </h3>
                <p
                  className="leading-relaxed text-[#1a1a1a]/70"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  {process.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <blockquote
            className="text-3xl italic text-[#1a1a1a] md:text-4xl"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            "Feito à mão. Feito com alma."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
