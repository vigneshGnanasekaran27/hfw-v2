import React, { useState } from "react";

const IdealWeightCalculator = () => {
  const [formData, setFormData] = useState({
    height: "",
    sex: "male",
    formula: "Devine",
  });

  const [result, setResult] = useState(null);

  const calculateIdealWeight = () => {
    const heightInCm = parseFloat(formData.height);

    // Convert height to inches for most formulas
    const heightInInches = heightInCm / 2.54;
    let idealWeight;

    switch (formData.formula) {
      case "Devine":
        idealWeight =
          formData.sex === "male"
            ? 50 + 2.3 * (heightInInches - 60)
            : 45.5 + 2.3 * (heightInInches - 60);
        break;

      case "Hamwi":
        idealWeight =
          formData.sex === "male"
            ? 48 + 2.7 * (heightInInches - 60)
            : 45.5 + 2.2 * (heightInInches - 60);
        break;

      case "Miller":
        idealWeight =
          formData.sex === "male"
            ? 56.2 + 1.41 * (heightInInches - 60)
            : 53.1 + 1.36 * (heightInInches - 60);
        break;

      default:
        idealWeight = null;
    }

    return idealWeight > 0 ? idealWeight.toFixed(1) : "Invalid Input";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const idealWeight = calculateIdealWeight();
    setResult(idealWeight);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Ideal Weight Calculator
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Calculate your ideal weight based on your height, sex, and selected
          formula.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sex
              </label>
              <select
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Height (cm)
              </label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
                min="1"
                step="0.1"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Formula
              </label>
              <select
                name="formula"
                value={formData.formula}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="Devine">Devine</option>
                <option value="Hamwi">Hamwi</option>
                <option value="Miller">Miller</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Calculate Ideal Weight
            </button>
          </div>
        </form>
      </div>

      {result && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Your Ideal Weight
            </h2>
            <div className="text-4xl font-bold text-blue-600 mb-4">
              {result} kg
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600 text-sm">
              The ideal weight is calculated based on the{" "}
              <span className="font-medium">{formData.formula}</span> formula
              for a {formData.sex} with a height of {formData.height} cm.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default IdealWeightCalculator;
