import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Compass, Waves, Globe } from "lucide-react";

export function PolynesianHeritageSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Compass,
      title: "Navegação Ancestral",
      description:
        "A arte polinésia de navegar pelas estrelas, ventos e correntes, passada através de gerações.",
    },
    {
      icon: Waves,
      title: "Conexão com o Oceano",
      description:
        "O oceano não é uma barreira, mas uma ponte que une povos, culturas e continentes.",
    },
    {
      icon: Globe,
      title: "Cultura Global",
      description:
        "Da Polinésia ao Brasil, levamos a tradição e inovação através dos mares.",
    },
  ];

  return (
    <section
      id="polynesian-heritage"
      ref={ref}
      className="relative overflow-hidden bg-[#0a2540] px-6 py-32 text-white"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2
            className="mb-6 tracking-wider"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              letterSpacing: "0.06em",
            }}
          >
            HERANÇA POLINÉSIA
          </h2>
          <p
            className="mx-auto max-w-3xl text-xl leading-relaxed text-white/80"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Por milhares de anos, os navegadores polinésios cruzaram o maior
            oceano do planeta, guiados pelas estrelas, ondas e ventos. Essa
            sabedoria ancestral é a essência de cada canoa BLACK CANOES.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative overflow-hidden rounded-sm border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
            >
              <feature.icon className="mb-6 h-12 w-12 text-[#d4a574]" />
              <h3
                className="mb-4 text-2xl tracking-wide"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {feature.title}
              </h3>
              <p
                className="leading-relaxed text-white/70"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-[#d4a574] transition-transform duration-300 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24"
        >
          <div className="relative aspect-[21/9] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1663801563712-ebf3c6a78239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2x5bmVzaWFuJTIwbmF2aWdhdGlvbiUyMHN0YXJzJTIwb2NlYW58ZW58MXx8fHwxNzc5MTk2NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Navegação polinésia"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540] via-transparent to-transparent" />

            {/* Quote Overlay */}
            <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12">
              <blockquote
                className="text-2xl italic leading-relaxed text-white md:text-3xl"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                "O oceano não separa ilhas, ele as conecta."
              </blockquote>
              <cite
                className="mt-2 block text-sm text-white/60"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                — Provérbio Polinésio
              </cite>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
