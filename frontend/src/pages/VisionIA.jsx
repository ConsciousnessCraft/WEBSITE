import { Server, Code, Shield, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotreVisionIA() {
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
            Notre Vision pour l'Intelligence Artificielle
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          >
            Nous croyons à une IA éthique, industrialisable, et accessible.
            <br />
            Nos travaux intègrent aujourd'hui les technologies les plus avancées (LLMs, Federated Learning, Vision Edge AI),
            avec un accent fort sur la gouvernance des données et la réduction des biais.
            <br />
            Nous développons également des initiatives autour de l’IA privée et sécurisée, anticipant un futur où les
            entreprises devront maîtriser intégralement leurs modèles et leurs données.
          </motion.p>
        </div>
      </section>

      {/* Key Areas of Focus */}
      <section className="text-center space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800">Nos Domaines Clés de Vision IA</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* LLMs */}
          <div className="flex flex-col items-center bg-gray-800 text-white p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-200">
            <Code className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold">LLMs</h3>
            <p className="text-gray-300">
              Développement de modèles linguistiques de plus en plus puissants et adaptés aux besoins spécifiques de chaque
              industrie.
            </p>
          </div>
          {/* Federated Learning */}
          <div className="flex flex-col items-center bg-gray-800 text-white p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-200">
            <Server className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold">Federated Learning</h3>
            <p className="text-gray-300">
              Une approche collaborative de l'apprentissage pour préserver la confidentialité des données tout en entraînant des
              modèles performants.
            </p>
          </div>
          {/* Vision Edge AI */}
          <div className="flex flex-col items-center bg-gray-800 text-white p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-200">
            <Eye className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold">Vision Edge AI</h3>
            <p className="text-gray-300">
              Traitement local des données visuelles directement sur les dispositifs, permettant des décisions plus rapides et
              précises.
            </p>
          </div>
          {/* Data Governance */}
          <div className="flex flex-col items-center bg-gray-800 text-white p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-200">
            <Shield className="h-12 w-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold">Gouvernance des Données</h3>
            <p className="text-gray-300">
              Mise en place de mécanismes de gouvernance pour assurer la transparence, la sécurité et l'éthique dans la gestion
              des données.
            </p>
          </div>
        </div>
      </section>

      {/* Graphical Representation Section */}
{/* Graphical Representation Section */}
{/* Graphical Representation Section */}
<section className="px-6 py-12 text-center">
  <h2 className="text-2xl font-semibold text-gray-800 mb-10">
    IA d'Aujourd'hui et L'IA Privée de Demain
  </h2>

  <div className="grid md:grid-cols-3 gap-6 items-stretch">
    {/* Left Card */}
    <div className="bg-blue-600 text-white p-6 rounded-xl shadow-md flex flex-col justify-start h-full">
      <h3 className="text-xl font-semibold mb-4">IA d'Aujourd'hui</h3>
      <ul className="text-left text-gray-200 list-disc list-inside flex-grow space-y-2">
        <li>Modèles ouverts et génériques</li>
        <li>Données partagées </li>
        <li>Dépendance des services cloud</li>
      </ul>
    </div>

    {/* Arrow */}
    <div className="flex justify-center items-center">
      <span className="text-3xl text-gray-500 hidden md:block">➡️</span>
      <span className="text-sm text-gray-500 md:hidden">Transition</span>
    </div>

    {/* Right Card */}
    <div className="bg-green-600 text-white p-6 rounded-xl shadow-md flex flex-col justify-start h-full">
      <h3 className="text-xl font-semibold mb-4">IA Privée de Demain</h3>
      <ul className="text-left text-gray-200 list-disc list-inside flex-grow space-y-2">
        <li>Modèles propriétaires et spécialisés</li>
        <li>Contrôle des données et de l'usage</li>
        <li>Décentralisation et traitement local</li>
      </ul>
    </div>
  </div>
</section>



    </div>
  );
}
