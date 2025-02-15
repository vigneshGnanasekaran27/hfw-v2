import React from "react";

const PersonalInfoForm = ({ formData, errors, handleInputChange }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Personal Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.personalInfo.name}
            onChange={(e) =>
              handleInputChange("personalInfo", "name", e.target.value)
            }
            className={`w-full p-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
            required
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1 error-message">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={formData.personalInfo.email}
            onChange={(e) =>
              handleInputChange("personalInfo", "email", e.target.value)
            }
            className={`w-full p-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1 error-message">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Phone Number<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={formData.personalInfo.phone}
            onChange={(e) =>
              handleInputChange("personalInfo", "phone", e.target.value)
            }
            className={`w-full p-2 border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
            required
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1 error-message">
              {errors.phone}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Date of Birth<span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={formData.personalInfo.dateOfBirth}
            onChange={(e) =>
              handleInputChange("personalInfo", "dateOfBirth", e.target.value)
            }
            className={`w-full p-2 border ${
              errors.dateOfBirth ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
            required
          />
          {errors.dateOfBirth && (
            <p className="text-red-500 text-sm mt-1 error-message">
              {errors.dateOfBirth}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Gender <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.personalInfo.gender}
            onChange={(e) =>
              handleInputChange("personalInfo", "gender", e.target.value)
            }
            className={`w-full p-2 border ${
              errors.gender ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm mt-1 error-message">
              {errors.gender}
            </p>
          )}
        </div>
        <div className="flex gap-2">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">
              Height<span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                value={formData.personalInfo.height}
                onChange={(e) =>
                  handleInputChange("personalInfo", "height", e.target.value)
                }
                className={`w-full p-2 border ${
                  errors.height ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                required
              />
              <select
                value={formData.personalInfo.heightUnit}
                onChange={(e) =>
                  handleInputChange(
                    "personalInfo",
                    "heightUnit",
                    e.target.value
                  )
                }
                className="w-24 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="cm">cm</option>
                <option value="inches">inches</option>
              </select>
            </div>
            {errors.height && (
              <p className="text-red-500 text-sm mt-1 error-message">
                {errors.height}
              </p>
            )}
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">
              Weight<span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                value={formData.personalInfo.weight}
                onChange={(e) =>
                  handleInputChange("personalInfo", "weight", e.target.value)
                }
                className={`w-full p-2 border ${
                  errors.weight ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                required
              />
              <select
                value={formData.personalInfo.weightUnit}
                onChange={(e) =>
                  handleInputChange(
                    "personalInfo",
                    "weightUnit",
                    e.target.value
                  )
                }
                className="w-24 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="kg">kg</option>
                <option value="lbs">lbs</option>
              </select>
            </div>
            {errors.weight && (
              <p className="text-red-500 text-sm mt-1 error-message">
                {errors.weight}
              </p>
            )}
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">
            Street Address<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.personalInfo.streetAddress}
            onChange={(e) =>
              handleInputChange("personalInfo", "streetAddress", e.target.value)
            }
            className={`w-full p-2 border ${
              errors.streetAddress ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
            required
          />
          {errors.streetAddress && (
            <p className="text-red-500 text-sm mt-1 error-message">
              {errors.streetAddress}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            City<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.personalInfo.city}
            onChange={(e) =>
              handleInputChange("personalInfo", "city", e.target.value)
            }
            className={`w-full p-2 border ${
              errors.city ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
            required
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1 error-message">
              {errors.city}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            State/Province<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.personalInfo.state}
            onChange={(e) =>
              handleInputChange("personalInfo", "state", e.target.value)
            }
            className={`w-full p-2 border ${
              errors.state ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
            required
          />
          {errors.state && (
            <p className="text-red-500 text-sm mt-1 error-message">
              {errors.state}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Postal Code<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.personalInfo.postalCode}
            onChange={(e) =>
              handleInputChange("personalInfo", "postalCode", e.target.value)
            }
            className={`w-full p-2 border ${
              errors.postalCode ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
            required
          />
          {errors.postalCode && (
            <p className="text-red-500 text-sm mt-1 error-message">
              {errors.postalCode}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Country<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.personalInfo.country}
            onChange={(e) =>
              handleInputChange("personalInfo", "country", e.target.value)
            }
            className={`w-full p-2 border ${
              errors.country ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
            required
          />
          {errors.country && (
            <p className="text-red-500 text-sm mt-1 error-message">
              {errors.country}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
