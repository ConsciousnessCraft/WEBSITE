import { useState } from 'react';
import { Eye } from 'lucide-react';

export default function ObjectDetection() {
  const [imageBase64, setImageBase64] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [resultText, setResultText] = useState('');
  const [detectedImage, setDetectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result.split(',')[1];
      setImageBase64(base64);
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRun = async () => {
    if (!imageBase64) return alert('Veuillez sélectionner une image.');

    try {
      const response = await fetch('http://localhost:5000/api/object-detection', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: imageBase64 }),
      });
      const data = await response.json();

      setResultText(`Objets détectés : ${data.detected_objects.join(', ')}`);
      setDetectedImage(`data:image/jpeg;base64,${data.image_with_boxes}`);
    } catch (err) {
      setResultText('Erreur lors de l’appel à l’API');
    }
  };

  const handleClear = () => {
    setImageBase64(null);
    setPreviewUrl(null);
    setResultText('');
    setDetectedImage(null);
  };

  return (
    <div className="border rounded-2xl shadow-md p-6 bg-gray-900 text-white hover:bg-gray-800 transition duration-300">
      <div className="flex items-center gap-4 mb-3">
        <Eye className="h-8 w-8 text-blue-600" />
        <h2 className="text-xl font-semibold">Détection d’objets</h2>
      </div>
      <p className="text-sm text-gray-300 mb-4">
        Envoie une image à l'API de détection d'objets. Retourne l’image avec les objets identifiés.
      </p>

      {/* Styled file upload button */}
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          id="fileUpload"
          onChange={handleImageChange}
          className="hidden"
        />
        <label
          htmlFor="fileUpload"
          className="cursor-pointer inline-block bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm"
        >
          Choisir une image
        </label>
      </div>

      {previewUrl && (
        <img
          src={previewUrl}
          alt="Prévisualisation"
          className="mb-4 rounded shadow-md max-h-56 mx-auto"
        />
      )}

      <div className="flex gap-2">
        <button onClick={handleRun} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
          Lancer la démo
        </button>
        <button onClick={handleClear} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500">
          Effacer
        </button>
      </div>

      {resultText && (
        <pre className="bg-gray-800 mt-4 p-2 rounded text-sm text-blue-400 overflow-auto">
          {resultText}
        </pre>
      )}

      {detectedImage && (
        <img
          src={detectedImage}
          alt="Résultat détection"
          className="mt-4 rounded shadow-md max-h-56 mx-auto"
        />
      )}
    </div>
  );
}
