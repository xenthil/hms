import { Gender } from "./Enums";

export interface IPerson {
  firstNme: string;
  lastName: string;
  gender: Gender;
  dob: Date;
  contactInfo: {
    phone: string;
    email: string;
    address: {
      flatNumber: string;
      street: string;
      city: string;
      zipCode: string;
    };
  };
}
