import { appAxios } from "@/config/axios";

export interface Contact {
  fullName: string;
  email: string;
  message: string;
}

export const contactUs = async (data: Contact) => {
  const res = await appAxios.post("/contact-us", data, {
    headers: {
      api_key: process.env.NEXT_PUBLIC_API_KEY as string,
    },
  });
  return res;
};
