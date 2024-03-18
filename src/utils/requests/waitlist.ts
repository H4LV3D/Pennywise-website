import { appAxios } from "@/config/axios";

export interface Waitlist {
  email: string;
}

export const addToWaitList = async (data: Waitlist) => {
  const res = await appAxios.post("/email", data);
  return res;
};

export const getWaitlistNumber = async () => {
  const res = await appAxios.get("/users");
  return res;
};
