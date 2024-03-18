import { appAxios } from "@/config/axios";

export interface Subscribe {
  email: string;
}

export const subscribe = async (data: Subscribe) => {
  const res = await appAxios.post("/subscribe", data);
  return res;
};
