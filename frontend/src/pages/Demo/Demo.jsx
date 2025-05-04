import ObjectDetection from './ObjectDetection';
import SentimentAnalysis from './SentimentAnalysis';
import ChurnPrediction from './ChurnPrediction';

export default function Demo() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Démos d’IA en Direct
      </h1>
      <ObjectDetection />
      <SentimentAnalysis />
      <ChurnPrediction />
    </div>
  );
}
