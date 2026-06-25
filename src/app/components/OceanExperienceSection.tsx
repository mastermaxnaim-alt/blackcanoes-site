import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function OceanExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      image:
        "https://images.unsplash.com/photo-1596736890254-cef0137163bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMGtheWFraW5nJTIwZG93bndpbmQlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzc5MTk2NDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Downwind",
    },
    {
      image:
        "https://images.unsplash.com/photo-1631210486085-120f379fc9ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnJpc2UlMjBicmF6aWwlMjBqZXJpY29hY29hcmF8ZW58MXx8fHwxNzc5MTk2NDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Amanhecer",
    },
    {
      image:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdmVzJTIwZG9jdW1lbnRhcnklMjBjaW5lbWF0aWN8ZW58MXx8fHwxNzc5MTk2NDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Conexão",
    },
  ];

  return (
    <section
      id="ocean-experience"
      ref={ref}
      className="relative bg-black px-6 py-32 text-white"
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
            A EXPERIÊNCIA DO OCEANO
          </h2>
          <p
            className="mx-auto max-w-3xl text-xl leading-relaxed text-white/80"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Mais do que navegação. É a sensação de liberdade, o som das ondas, o
            vento no rosto, o horizonte infinito. É onde a alma encontra paz.
          </p>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm"
            >
              {/* Image */}
              <img
                src={experience.image}
                alt={experience.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3
                  className="text-3xl tracking-wider"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {experience.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Width Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <div className="relative aspect-[21/9] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1719152883504-91c3c6e560ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2x5bmVzaWFuJTIwb3V0cmlnZ2VyJTIwY2Fub2UlMjBvY2VhbiUyMHN1bnJpc2V8ZW58MXx8fHwxNzc5MTk2NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Experiência oceânica"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <p
                    className="mb-4 text-4xl italic leading-relaxed md:text-5xl"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                  >
                    "O oceano é espiritual. É aventura."
                  </p>
                  <p
                    className="text-lg text-white/70"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Jericoacoara · Preá · Brasil
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <p
            className="mx-auto max-w-4xl text-2xl italic leading-relaxed text-white/70"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Cada remada é uma meditação. Cada onda, uma lição. Cada viagem, uma
            transformação. Este é o chamado do oceano.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
