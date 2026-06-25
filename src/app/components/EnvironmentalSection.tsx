import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Leaf, Recycle, Heart, Waves } from "lucide-react";

export function EnvironmentalSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Recycle,
      title: "Reciclagem",
      description: "Materiais sustentáveis e processos que minimizam impacto ambiental.",
    },
    {
      icon: Waves,
      title: "Respeito ao Oceano",
      description: "Cada canoa é construída com consciência de preservar o que navegamos.",
    },
    {
      icon: Leaf,
      title: "Responsabilidade",
      description: "Fabricação consciente que honra a natureza e suas gerações futuras.",
    },
    {
      icon: Heart,
      title: "Paixão Sustentável",
      description: "Amar o oceano é protegê-lo. Nosso compromisso vai além das ondas.",
    },
  ];

  return (
    <section
      id="environmental"
      ref={ref}
      className="relative overflow-hidden bg-[#0a2540] px-6 py-32 text-white"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdmVzJTIwZG9jdW1lbnRhcnklMjBjaW5lbWF0aWN8ZW58MXx8fHwxNzc5MTk2NDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Oceano"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0a2540]/95" />
      </div>

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
            CONSCIÊNCIA AMBIENTAL
          </h2>
          <p
            className="mx-auto max-w-3xl text-xl leading-relaxed text-white/80"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Nosso compromisso com o oceano vai além da navegação. Cada canoa é
            construída com respeito ao meio ambiente e às futuras gerações.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#d4a574]">
                  <value.icon className="h-8 w-8 text-[#d4a574]" />
                </div>
              </div>
              <h3
                className="mb-3 text-xl tracking-wide"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {value.title}
              </h3>
              <p
                className="text-sm leading-relaxed text-white/70"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <div className="mx-auto max-w-4xl border-l-4 border-[#d4a574] bg-white/5 p-12 backdrop-blur-sm">
            <blockquote
              className="mb-4 text-3xl italic leading-relaxed md:text-4xl"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              "Navegar também é preservar."
            </blockquote>
            <cite
              className="text-sm uppercase tracking-widest text-white/60"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              — Filosofia Black Canoa
            </cite>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-3"
        >
          <div className="text-center">
            <div
              className="mb-2 text-5xl text-[#d4a574]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              100%
            </div>
            <div
              className="text-sm uppercase tracking-wider text-white/60"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Materiais Sustentáveis
            </div>
          </div>
          <div className="text-center">
            <div
              className="mb-2 text-5xl text-[#d4a574]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              0
            </div>
            <div
              className="text-sm uppercase tracking-wider text-white/60"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Desperdício
            </div>
          </div>
          <div className="col-span-2 text-center md:col-span-1">
            <div
              className="mb-2 text-5xl text-[#d4a574]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              ∞
            </div>
            <div
              className="text-sm uppercase tracking-wider text-white/60"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Compromisso
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
