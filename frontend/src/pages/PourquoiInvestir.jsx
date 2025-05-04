import { BarChart, Globe, Cpu, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PourquoiInvestir() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-16">
      {/* Header Section */}
      <section className="relative p-10 text-center max-w-4xl mx-auto rounded-xl overflow-hidden">
        {/* Animated Content */}
        <div className="relative z-10 text-gray-800">
          {/* Animated Heading */}
          <motion.h1
            className="text-4xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Pourquoi Investir dans notre Société ?
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          >
            Le marché mondial de l’Intelligence Artificielle est estimé à 1,8 trillion USD d'ici 2030.
            <br />
            Notre entreprise se positionne à l’intersection des besoins métiers critiques et des avancées technologiques,
            avec une approche pragmatique et opérationnelle.
            <br />
            Investir dans notre société, c’est parier sur une croissance durable, alimentée par une expertise technique de
            pointe et une roadmap ambitieuse.
          </motion.p>
        </div>
      </section>

      {/* Market Infographic */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Le Marché Mondial de l’IA : Opportunité et Croissance
        </h2>
        <div className="flex justify-center items-center gap-6 flex-wrap">
          {/* First Circle */}
          <div className="w-32 h-32 bg-gradient-to-tr from-blue-400 to-blue-600 text-white rounded-full flex flex-col items-center justify-center shadow-lg">
            <h3 className="text-xl font-bold">1,8T USD</h3> {/* Reduced font size */}
            <p className="text-xs text-center">Estimation du marché mondial d'ici 2030</p> {/* Adjusted text size */}
          </div>

          


          {/* Second Circle */}
          <div className="w-32 h-32 bg-gradient-to-tr from-green-400 to-green-600 text-white rounded-full flex flex-col items-center justify-center shadow-lg">
            <h3 className="text-xl font-bold">+20%</h3> {/* Reduced font size */}
            <p className="text-xs text-center">Croissance annuelle moyenne attendue</p> {/* Adjusted text size */}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="text-center space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800">Nos Avantages Compétitifs</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200">
            <ShieldCheck className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold">IA Responsable</h3>
            <p className="text-gray-300">Une approche éthique et transparente pour des IA justes et fiables.</p>
          </div>
          <div className="flex flex-col items-center bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200">
            <Cpu className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold">Technologie Avancée</h3>
            <p className="text-gray-300">Des solutions IA à la pointe, optimisées pour les besoins industriels.</p>
          </div>
          <div className="flex flex-col items-center bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200">
            <Globe className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold">Marché Mondial</h3>
            <p className="text-gray-300">Nous opérons à une échelle mondiale, avec un réseau de partenaires solides.</p>
          </div>
          <div className="flex flex-col items-center bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200">
            <BarChart className="h-12 w-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold">Croissance Durable</h3>
            <p className="text-gray-300">Des performances solides, alimentées par une vision à long terme.</p>
          </div>
        </div>
      </section>

      {/* Vision IA à 3 ans */}
      <section className="text-center space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800">Notre Vision IA à 3 ans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 text-white p-6 rounded-xl shadow-xl hover:scale-105 transition-transform duration-200">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">IA Responsable</h3>
            <p>
              Nous continuerons à intégrer des principes éthiques dans toutes nos solutions IA pour garantir la transparence et
              l'équité dans l'utilisation des données.
            </p>
          </div>
          <div className="bg-gray-800 text-white p-6 rounded-xl shadow-xl hover:scale-105 transition-transform duration-200">
            <h3 className="text-xl font-semibold text-green-600 mb-4">LLMs Customisés</h3>
            <p>
              Le développement de modèles linguistiques spécialisés pour des secteurs variés, offrant une personnalisation
              inégalée dans l'analyse de texte.
            </p>
          </div>
          <div className="bg-gray-800 text-white p-6 rounded-xl shadow-xl hover:scale-105 transition-transform duration-200">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">Edge AI</h3>
            <p>
              Nous renforcerons nos solutions pour le traitement des données sur des dispositifs locaux, réduisant ainsi la
              latence et augmentant la réactivité des systèmes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
