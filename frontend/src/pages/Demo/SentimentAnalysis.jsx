import { useState } from 'react';
import { MessageSquareText } from 'lucide-react';

export default function SentimentAnalysis() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleRun = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/sentiment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();

      let labelFr = '';
      switch (data.label) {
        case 'POSITIVE':
          labelFr = 'POSITIF';
          break;
        case 'NEGATIVE':
          labelFr = 'NÉGATIF';
          break;
        case 'NEUTRAL':
          labelFr = 'NEUTRE';
          break;
        default:
          labelFr = data.label;
      }

      setResult(`Sentiment détecté : ${labelFr} (score : ${data.score.toFixed(2)})`);
    } catch (err) {
      setResult('Erreur lors de l’appel à l’API');
    }
  };

  const handleClear = () => {
    setText('');
    setResult('');
  };

  return (
    <div className="border rounded-2xl shadow-md p-6 bg-gray-900 text-white hover:bg-gray-800 transition duration-300">
      <div className="flex items-center gap-4 mb-3">
        <MessageSquareText className="h-8 w-8 text-green-600" />
        <h2 className="text-xl font-semibold">Analyse de sentiments</h2>
      </div>
      <p className="text-sm text-gray-300 mb-4">
        Analyse un texte et retourne si le sentiment est positif, négatif ou neutre.
      </p>

      <textarea
        className="w-full p-2 mb-4 rounded bg-gray-800 text-white border border-gray-700"
        rows={3}
        placeholder="Entrez un texte ici..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex gap-2">
        <button onClick={handleRun} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500">
          Lancer la démo
        </button>
        <button onClick={handleClear} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500">
          Effacer
        </button>
      </div>

      {result && (
        <pre className="bg-gray-800 mt-4 p-2 rounded text-sm text-green-400 overflow-auto">
          {result}
        </pre>
      )}
    </div>
  );
}
