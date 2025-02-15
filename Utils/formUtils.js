// formUtils.js
export const handleInputChange = (
  section,
  field,
  value,
  setFormData,
  errors,
  setErrors
) => {
  setFormData((prev) => ({
    ...prev,
    [section]: {
      ...prev[section],
      [field]: value,
    },
  }));

  if (errors[field]) {
    setErrors((prev) => ({
      ...prev,
      [field]: undefined,
    }));
  }
};
