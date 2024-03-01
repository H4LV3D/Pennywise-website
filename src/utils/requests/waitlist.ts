import { appAxios } from "@/config/axios";

export interface Waitlist {
  email: string;
}

export const addToWaitList = async (data: Waitlist) => {
  const res = await appAxios.post("/email", data, {
    headers: {
      api_key: process.env.NEXT_PUBLIC_API_KEY as string,
    },
  });
  return res;
};

export const getWaitlistNumber = async () => {
  const res = await appAxios.get("/users", {
    headers: {
      api_key: process.env.NEXT_PUBLIC_API_KEY as string,
    },
  });
  return res;
};
