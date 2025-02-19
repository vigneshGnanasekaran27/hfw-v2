"use client";
import React from "react";

<time datetime="2016-10-25" suppressHydrationWarning />;
const FormReview = ({ formData }) => {
  const renderSection = (title, data, customRender) => {
    return (
      <div className="mb-6">
        <div>
          <div className="text-lg">{title}</div>
        </div>
        <div>
          {div ? (
            customRender(data)
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(data).map(([key, value]) => (
                <div key={key} className="space-y-1">
                  <div className="text-sm font-medium text-gray-500">
                    {key
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())}
                  </div>
                  <div className="text-sm">
                    {Array.isArray(value)
                      ? value.join(", ")
                      : value.toString() || "Not provided"}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Review Your Information</h2>

      {renderSection("Personal Information", formData.personalInfo)}

      {renderSection("Fitness Goals", formData.fitnessGoals, (data) => (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="text-sm font-medium text-gray-500">
                Target Weight
              </div>
              <div className="text-sm">
                {data.targetWeight
                  ? `${data.targetWeight} ${data.targetWeightUnit}`
                  : "Not specified"}
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-medium text-gray-500">
                Target Body Fat
              </div>
              <div className="text-sm">
                {data.targetBodyFat || "Not specified"}
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-sm font-medium text-gray-500">
              Specific Goals
            </div>
            <div className="text-sm">
              {data.specificGoals.join(", ") || "None specified"}
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-sm font-medium text-gray-500">Timeline</div>
            <div className="text-sm">{data.timeline}</div>
          </div>
          <div className="space-y-1">
            <div className="text-sm font-medium text-gray-500">
              Weekly Training Days
            </div>
            <div className="text-sm">{data.weeklyDays}</div>
          </div>
        </div>
      ))}

      {renderSection("Activity Level", formData.activityLevel, (data) => (
        <div className="space-y-4">
          <div className="space-y-1">
            <div className="text-sm font-medium text-gray-500">
              Currently Active
            </div>
            <div className="text-sm">
              {data.isCurrentlyActive ? "Yes" : "No"}
            </div>
          </div>
          {data.isCurrentlyActive && (
            <>
              <div className="space-y-1">
                <div className="text-sm font-medium text-gray-500">
                  Exercise Types
                </div>
                <div className="text-sm">{data.exerciseTypes.join(", ")}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-medium text-gray-500">
                  Training Days Per Week
                </div>
                <div className="text-sm">{data.trainingDaysPerWeek}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-medium text-gray-500">
                  Workout Duration
                </div>
                <div className="text-sm">{data.workoutDuration}</div>
              </div>
            </>
          )}
        </div>
      ))}

      {renderSection("Health Information", formData.healthInfo, (data) => (
        <div className="space-y-4">
          <div className="space-y-1">
            <div className="text-sm font-medium text-gray-500">
              Health Conditions
            </div>
            <div className="text-sm">
              {data.noHealthConditions
                ? "No health conditions reported"
                : data.healthConditions.join(", ") || "None specified"}
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-sm font-medium text-gray-500">
              Past Injuries
            </div>
            <div className="text-sm">
              {data.pastInjuries || "None reported"}
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-sm font-medium text-gray-500">Medications</div>
            <div className="text-sm">{data.medications || "None reported"}</div>
          </div>
          <div className="space-y-1">
            <div className="text-sm font-medium text-gray-500">Allergies</div>
            <div className="text-sm">{data.allergies || "None reported"}</div>
          </div>
        </div>
      ))}

      {renderSection("Nutrition Information", formData.nutritionInfo)}

      {renderSection("Lifestyle Information", formData.lifestyle)}
    </div>
  );
};

export default FormReview;
