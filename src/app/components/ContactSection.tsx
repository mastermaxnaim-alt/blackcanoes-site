import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contacts = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+55 (85) 9 8172-8568",
      link: "https://wa.me/5585981728568",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@blackcanoeceara",
      link: "https://www.instagram.com/blackcanoeceara/",
    },
    {
      icon: Mail,
      label: "Email",
      value: "contato@blackcanoes.com",
      link: "mailto:contato@blackcanoes.com",
    },
  ];

  return (
    <footer
      id="contact"
      ref={ref}
      className="relative overflow-hidden bg-[#0a0a0a] px-6 py-32 text-white"
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
            Faça Parte da História
          </h2>
          <p
            className="mx-auto max-w-3xl text-xl leading-relaxed text-white/80"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Conecte-se conosco. Seja para conhecer nossas embarcações, agendar
            uma visita ao workshop ou simplesmente conversar sobre o oceano.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="mb-20 grid gap-8 md:grid-cols-3">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative overflow-hidden rounded-sm border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#d4a574] hover:bg-white/10"
            >
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/20 transition-colors group-hover:border-[#d4a574]">
                  <contact.icon className="h-8 w-8 text-white/70 transition-colors group-hover:text-[#d4a574]" />
                </div>
              </div>
              <div className="text-center">
                <div
                  className="mb-2 text-sm uppercase tracking-widest text-white/50"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {contact.label}
                </div>
                <div
                  className="text-lg text-white"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {contact.value}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-[#d4a574] transition-transform duration-300 group-hover:scale-x-100" />
            </motion.a>
          ))}
        </div>

 {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20 text-center"
        >
          <a href="https://wa.me/5585981728568" target="_blank" rel="noopener">
            <Button
              className="bg-[#d4a574] px-12 py-6 text-lg text-black hover:bg-[#c49564]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Agendar Visita ao Workshop
            </Button>
          </a>
        </motion.div>
        
        {/* Divider */}
        <div className="mb-12 h-px bg-white/10" />

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center justify-between gap-6 md:flex-row"
        >
          {/* Logo */}
          <div>
            <h3
              className="text-3xl tracking-widest"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              BLACK CANOES
            </h3>
            <p
              className="mt-2 text-sm text-white/50"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Jericoacoara · Preá · Brasil
            </p>
          </div>

          {/* Info */}
          <div className="text-center md:text-right">
            <p
              className="mb-2 text-sm text-white/50"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Fundado por Felipe Preto
            </p>
            <p
              className="text-sm text-white/50"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              © 2026 Black Canoes. Vanguarda e inovação.

            </p>
            <p className="mt-1 text-xs text-white/30">
              Desenvolvido por{" "}
              <a href="https://maxdigitalstudio.com" target="_blank" rel="noopener" className="hover:text-white/60">
                Max Digital Studio
              </a>
            </p>
          </div>
        </motion.div>

        {/* Final Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <p
            className="text-xl italic text-white/40"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            "O oceano nos conecta a todos."
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
