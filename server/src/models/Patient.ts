import { Gender } from "./interfaces/Enums";
import { IPerson } from "./interfaces/Person";
import { Schema, model } from "mongoose";

export interface IPatient extends IPerson {
  medicalHistory: [
    {
      condition: String; // Name of the medical condition (e.g., "Diabetes", "Hypertension")
      diagnosisDate: Date; // Date when the condition was diagnosed
      treatment: String; // Treatment provided (e.g., "Insulin", "Medication")
      status: String; // Status of the condition (e.g., "Ongoing", "Recovered", "Under Control")
      doctor: String; // Doctor who treated the condition
      hospital: String; // Hospital or clinic where the patient was treated
      notes: String; // Additional notes (optional)
      prescriptions: [
        {
          medication: String; // Name of the prescribed medication
          dosage: String; // Dosage of the medication (e.g., "1 tablet daily")
          startDate: Date; // Start date of the prescription
          endDate: Date; // End date of the prescription (if applicable)
        }
      ];
      tests: [
        {
          testName: String; // Name of the medical test (e.g., "Blood Test", "MRI Scan")
          testDate: Date; // Date when the test was conducted
          results: String; // Summary of test results (e.g., "Normal", "Elevated blood sugar levels")
          attachments: [String]; // Links to any attached test reports or documents (optional)
        }
      ];
    }
  ];
}

export const patientSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: Gender, required: true },
  dob: { type: Date, required: true },
  contactInfo: {
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // TODO: Add Email regex & unique validations
    address: {
      flatNumber: { type: String, required: true },
      street: { type: String, required: true },
      city: { type: String, required: true },
      zipCode: { type: String, required: true },
    },
  },
});

export const Patient = model<IPatient>("Patient", patientSchema);
