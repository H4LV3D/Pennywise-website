import { appAxios } from "@/config/axios";

export interface Subscribe {
  email: string;
}

export const subscribe = async (data: Subscribe) => {
  const res = await appAxios.post("/subscribe", data, {
    headers: {
      api_key: process.env.NEXT_PUBLIC_API_KEY as string,
    },
  });
  return res;
};
