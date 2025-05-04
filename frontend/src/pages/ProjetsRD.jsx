import { Eye, MessageSquareText, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const projets = [
  {
    title: 'Projet Vision',
    icon: <Eye className="h-8 w-8 text-blue-600" />,
    description:
      "Développement d'un algorithme d'inspection visuelle de micro-défauts sur surfaces métalliques. Ce projet permet d'automatiser la détection de défauts invisibles à l'œil nu.",
  },
  {
    title: 'Projet NLP',
    icon: <MessageSquareText className="h-8 w-8 text-green-600" />,
    description:
      "Générateur de synthèses automatiques de rapports complexes. Ce projet transforme des documents longs en résumés concis pour accélérer la prise de décision.",
  },
  {
    title: 'Projet IA Responsable',
    icon: <Brain className="h-8 w-8 text-purple-600" />,
    description:
      "Programme interne pour auditer et corriger les biais algorithmiques. Ce projet garantit que nos IA sont transparentes, équitables et responsables.",
  },
];

const milestones = [
  {
    title: 'Début du projet',
    description: 'Lancement de l’algorithme et définition des objectifs.',
    date: 'Janvier 2025',
  },
  {
    title: 'Phase de test',
    description: 'Tests sur échantillons de production pour valider les premiers résultats.',
    date: 'Avril 2025',
  },
  {
    title: 'Optimisation',
    description: 'Amélioration des performances et réduction des faux positifs.',
    date: 'Juillet 2025',
  },
  {
    title: 'Déploiement',
    description: 'Déploiement en production et monitoring des performances.',
    date: 'Octobre 2025',
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjetsRD() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Projets de Recherche & Développement</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Section: Timeline with animation */}
        <div className="space-y-6">
          <motion.div
            className="relative border-l-2 border-gray-300 pl-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative mb-10 cursor-pointer transition-all duration-300"
              >
                {/* Dot */}
                <div className="absolute -left-3 top-1.5 w-5 h-5 rounded-full bg-blue-600 border-2 border-white group-hover:scale-125 group-hover:bg-blue-400 transition-transform duration-300 shadow-md" />

                {/* Content */}
                <div className="ml-4 pl-4 border-l-4 border-transparent group-hover:border-blue-500 transition-all">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-800">{milestone.description}</p>
                  <p className="text-xs text-gray-500 group-hover:text-gray-700">{milestone.date}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Section: Project Cards */}
        <div className="space-y-6">
          {projets.map((projet, idx) => (
            <motion.div
              key={idx}
              className="border rounded-2xl shadow-md p-6 bg-gray-900 text-white hover:bg-gray-800 hover:shadow-xl transition transform hover:scale-105 duration-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-3">
                {projet.icon}
                <h2 className="text-xl font-semibold">{projet.title}</h2>
              </div>
              <p>{projet.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
