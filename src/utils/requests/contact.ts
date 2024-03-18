import { appAxios } from "@/config/axios";

export interface Contact {
  fullName: string;
  email: string;
  message: string;
}

export const contactUs = async (data: Contact) => {
  const res = await appAxios.post("/contact-us", data);
  return res;
};
