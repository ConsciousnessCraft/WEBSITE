import React from "react";
import { Factory, CreditCard, Stethoscope, ShoppingCart } from 'lucide-react';

const useCases = [
  {
    title: "Industrie",
    icon: <Factory className="h-8 w-8 text-blue-600" />,
    description:
      "Détection automatique de défauts de production : Grâce à la vision par ordinateur, notre IA inspecte en temps réel les lignes de production pour identifier micro-fissures, rayures ou défauts d’assemblage.",
  },
  {
    title: "Banque & Assurance",
    icon: <CreditCard className="h-8 w-8 text-green-600" />,
    description:
      "Surveillance intelligente des transactions : Nos algorithmes détectent des comportements financiers anormaux avec une précision accrue, réduisant les risques et améliorant la conformité.",
  },
  {
    title: "Santé",
    icon: <Stethoscope className="h-8 w-8 text-pink-600" />,
    description:
      "Analyse NLP de comptes-rendus médicaux : Notre solution NLP extrait des informations critiques à partir de textes médicaux non structurés, accélérant les diagnostics et la prise en charge.",
  },
  {
    title: "Retail",
    icon: <ShoppingCart className="h-8 w-8 text-yellow-600" />,
    description:
      "Prévision de la demande & gestion des stocks : Nos modèles prédictifs permettent d’anticiper les ventes, d’ajuster les niveaux de stock et d’optimiser la logistique.",
  },
];

export default function CasUsage() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">Cas d’usage de l’IA</h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {useCases.map((useCase, idx) => (
          <div
            key={idx}
            className="border rounded-2xl shadow-md p-6 bg-gray-900 text-white hover:bg-gray-800 hover:shadow-xl transition-transform transform hover:scale-105 duration-300"
          >
            <div className="flex items-center gap-4 mb-3">
              {useCase.icon}
              <h2 className="text-xl font-semibold">{useCase.title}</h2>
            </div>
            <p className="text-sm text-gray-300">{useCase.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
