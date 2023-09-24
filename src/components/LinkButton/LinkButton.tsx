import { motion } from "framer-motion";
interface LinkButtonProps {
  link: string;
  image: string;
  alt: string; // Adicione a propriedade 'whileHover' como opcional se ela for opcional
}

export default function LinkButton({ link, image, alt }: LinkButtonProps) {
  return (
    <a href={link}>
      <motion.img
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 9,
            stiffness: 50,
            restDelta: 0.001,
          },
        }}
        src={image}
        alt={alt}
      />
    </a>
  );
}
