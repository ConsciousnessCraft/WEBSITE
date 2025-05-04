import { useState } from 'react';
import { Activity } from 'lucide-react';

export default function ChurnPrediction() {
  const [age, setAge] = useState('');
  const [frequency, setFrequency] = useState('');
  const [result, setResult] = useState('');

  const handleRun = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/churn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ age: Number(age), frequency: Number(frequency) }),
      });
      const data = await response.json();
      setResult(
        `Prédiction : ${data.prediction}\nProbabilité de churn : ${data.churn_probability * 100}%`
      );
    } catch (err) {
      setResult("Erreur lors de l'appel à l'API");
    }
  };

  const handleClear = () => {
    setAge('');
    setFrequency('');
    setResult('');
  };

  return (
    <div className="border rounded-2xl shadow-md p-6 bg-gray-900 text-white hover:bg-gray-800 transition duration-300">
      <div className="flex items-center gap-4 mb-3">
        <Activity className="h-8 w-8 text-purple-600" />
        <h2 className="text-xl font-semibold">Prédiction de churn client</h2>
      </div>
      <p className="text-sm text-gray-300 mb-4">
        Entrez l'âge et la fréquence d'achat pour estimer le risque de churn.
      </p>

      <input
        type="number"
        placeholder="Âge"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="w-full p-2 mb-2 rounded bg-gray-800 text-white border border-gray-700"
      />

      <input
        type="number"
        placeholder="Fréquence d'achat"
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
        className="w-full p-2 mb-4 rounded bg-gray-800 text-white border border-gray-700"
      />

      <div className="flex gap-2">
        <button onClick={handleRun} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-500">
          Lancer la démo
        </button>
        <button onClick={handleClear} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500">
          Effacer
        </button>
      </div>

      {result && (
        <pre className="bg-gray-800 mt-4 p-2 rounded text-sm text-purple-400 overflow-auto whitespace-pre-line">
          {result}
        </pre>
      )}
    </div>
  );
}
