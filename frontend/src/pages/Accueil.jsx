import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import AIImage from '../assets/brain.png';

const slides = [
  {
    title: 'Pipeline Data & IA – De la donnée brute à l’impact opérationnel',
    content: 'Collecte de données ➔ Traitement ➔ Modélisation ➔ Déploiement ➔ Monitoring',
  },
  {
    title: 'Pourquoi la qualité des données est cruciale ?',
    content: 'Des données mal préparées mènent à des modèles biaisés. Nous garantissons une structuration rigoureuse pour maximiser la fiabilité des prédictions.',
  },
  {
    title: 'L’IA sur mesure – adaptée à votre métier',
    content: 'Nos experts conçoivent des modèles IA personnalisés pour répondre à vos enjeux métiers — de la maintenance prédictive à l’analyse sémantique.',
  },
];

export default function Accueil() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative p-6 sm:p-10 text-center max-w-full mx-auto bg-gradient-to-r from-black via-gray-800 to-gray-600 rounded-xl shadow-lg overflow-hidden">
      {/* Background Image with animation */}
      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <img src={AIImage} alt="AI Image" className="object-cover w-full h-full grayscale" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-white">
        {/* Animated Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Nous transformons la donnée en levier de performance grâce à l’Intelligence Artificielle
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className="text-lg sm:text-xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1 }}
        >
          Nos solutions innovantes en vision par ordinateur, NLP et prédiction permettent d’accélérer la prise de décision, réduire les risques et stimuler la croissance.
          Découvrez comment nous bâtissons l’avenir de l’IA responsable et industrielle.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, delay: 1.5 }}
        >
          <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-200 transition-all duration-200">
            En savoir plus
          </button>
        </motion.div>

        {/* Slideshow */}
        <div className="min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8 }}
              className="mb-6 px-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">{slides[currentSlide].title}</h2>
              <p className="text-lg sm:text-xl">{slides[currentSlide].content}</p>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
                  currentSlide === index ? 'bg-white scale-125' : 'bg-gray-500'
                } transition-all duration-300`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
