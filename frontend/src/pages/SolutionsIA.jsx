import { Eye, MessageSquareText, Activity, ShieldAlert } from 'lucide-react';
import AIImage from '../assets/object-detection-demo.png'; // Your image file

const solutions = [
  {
    title: 'Vision par ordinateur',
    icon: <Eye className="h-8 w-8 text-blue-600" />,
    description:
      "Détection d’objets, classification d’images, OCR avancé. Nos algorithmes analysent des flux visuels complexes pour automatiser les tâches industrielles.",
  },
  {
    title: 'Traitement du langage naturel (NLP)',
    icon: <MessageSquareText className="h-8 w-8 text-green-600" />,
    description:
      "Extraction d’information, analyse de sentiments, génération automatique de texte. Exploitez vos données textuelles avec précision.",
  },
  {
    title: 'Prédiction & Modélisation',
    icon: <Activity className="h-8 w-8 text-purple-600" />,
    description:
      "Prévision de ventes, scoring client, maintenance prédictive. Anticipez les comportements pour mieux décider.",
  },
  {
    title: 'Détection de fraude intelligente',
    icon: <ShieldAlert className="h-8 w-8 text-red-600" />,
    description:
      "Détection d’anomalies financières, comportements utilisateurs anormaux. Nos modèles apprennent des schémas de risque pour prévenir les fraudes en temps réel.",
  },
];

export default function SolutionsIA() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Centered Title and Icon */}
      <div className="flex flex-col items-center justify-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Solutions d’Intelligence Artificielle
        </h1>
      </div>

      {/* Solutions Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {solutions.map((solution, idx) => (
          <div
            key={idx}
            className="border rounded-2xl shadow-md p-6 bg-gray-900 text-white hover:bg-gray-800 hover:shadow-2xl hover:shadow-gray-600 transition-transform transform hover:scale-105 duration-300"
          >
            <div className="flex items-center gap-4 mb-3">
              {solution.icon}
              <h2 className="text-xl font-semibold">{solution.title}</h2>
            </div>
            <p className="text-sm text-gray-300">{solution.description}</p>
          </div>
        ))}
      </div>

      {/* Visual Example */}
      <div className="mt-10 text-center">
        <h2 className="text-xl font-medium mb-2 text-gray-700">
          Exemple visuel : Détection d’objets en environnement industriel
        </h2>
        <img
          src={AIImage}
          alt="Détection d'objets IA"
          className="mx-auto rounded-lg shadow-md w-full max-w-md h-auto"
        />

        <p className="text-sm text-gray-500 mt-2">
          * Illustration d’un modèle identifiant des anomalies sur une chaîne de production
        </p>
      </div>
    </div>
  );
}
