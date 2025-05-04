import React from 'react';

const Blogs = () => {
  return (
    <div className="bg-white text-black min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Nos Blogs</h1>

        {/* Blog Article Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Article en vedette</h2>

          {/* Blog Article 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold text-gray-700">1er article de blog proposé</h3>
            <p className="text-gray-600 mt-2">
              Titre : "Comment nous exploitons les LLMs pour renforcer l'analyse NLP sur des données spécifiques"
            </p>
            <p className="text-gray-600 mt-2">
              Intro : "L’explosion des modèles de langage (LLMs) ouvre de nouvelles perspectives pour l’analyse de textes complexes. Chez [Nom de ta société], nous adaptons ces modèles aux réalités métiers spécifiques, en combinant fine-tuning, RAG (Retrieval Augmented Generation) et monitoring pour garantir performance et robustesse."
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blogs;
