import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';

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

export default function Expertise() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <section
      className="relative p-6 sm:p-10 text-center max-w-full mx-auto bg-white text-black shadow-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Content */}
      <div className="relative z-10">
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Notre Expertise
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.p
          className="text-lg sm:text-xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1 }}
        >
          Notre équipe combine des compétences avancées en Machine Learning, Deep Learning et ingénierie de données pour concevoir des solutions sur mesure, adaptées aux défis métiers spécifiques.
          <br />
          De l'analyse d'images à l'automatisation des flux décisionnels, notre approche est rigoureuse, agile et tournée vers l'impact.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, delay: 1.5 }}
        >
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition-all duration-200">
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
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">{slides[currentSlide].title}</h3>
              <p className="text-lg sm:text-xl">{slides[currentSlide].content}</p>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-green-500 scale-125' : 'bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
