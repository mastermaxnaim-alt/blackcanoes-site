import { motion } from "motion/react";
import { Button } from "./ui/button";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1719152883504-91c3c6e560ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2x5bmVzaWFuJTIwb3V0cmlnZ2VyJTIwY2Fub2UlMjBvY2VhbiUyMHN1bnJpc2V8ZW58MXx8fHwxNzc5MTk2NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral")',
          }}
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1
            className="mb-4 tracking-wider text-white"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3rem, 12vw, 8rem)",
              letterSpacing: "0.08em",
            }}
          >
            BLACK CANOES
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-12 max-w-2xl text-xl text-white/90"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Vanguarda e inovação há mais de 15 anos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button
            onClick={() => scrollToSection("brand-story")}
            className="bg-white px-8 py-6 text-black hover:bg-white/90"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Conheça nossa história
          </Button>
          <Button
            onClick={() => scrollToSection("canoes-collection")}
            variant="outline"
            className="border-2 border-white bg-transparent px-8 py-6 text-white hover:bg-white/10"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Ver embarcações
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-12 w-6 rounded-full border-2 border-white/50 p-1"
        >
          <motion.div className="h-2 w-2 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
