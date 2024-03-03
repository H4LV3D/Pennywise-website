"use client";
import { useMutation } from "@tanstack/react-query";
import { contactUs } from "@/utils/requests/contact";
import { useForm, FieldValues } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { showNotification } from "@mantine/notifications";
import {
  notificationStyles,
  notificationStyles2,
} from "@/utils/others/notificationStyles";
import ButtonLoader from "@/components/shared/ButtonLoader";

interface FormInterface {
  fullName: string;
  email: string;
  message: string;
}

const FormSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email().required("Email is required"),
  message: yup.string().required("Message is required"),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInterface>({
    resolver: yupResolver(FormSchema),
  });

  const mutation = useMutation({
    mutationFn: async (data: FormInterface) => {
      const res = await contactUs(data);
      return res.data;
    },
    onSuccess: (data) => {
      showNotification({
        title: "Message sent successfully",
        message: data.message,
        style: notificationStyles,
        // @ts-ignore
        styles: notificationStyles2,
        radius: "md",
        color: "blue",
      });
      reset();
    },
    onError: (error: any) => {
      showNotification({
        title: "An error occurred",
        message: error.response.data.messagge,
        style: notificationStyles,
        // @ts-ignore
        styles: notificationStyles2,
        radius: "md",
        color: "red",
      });
      console.error(error);
    },
  });

  const onSubmit = (data: FormInterface) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-y-6 md:p-8 max-w-xl">
        <h1 className="text-2xl font-bold text-brand-blue dark:text-brand-white">
          Leave us a message.
        </h1>

        <input
          type="text"
          placeholder="Your Name"
          {...register("fullName")}
          className="text-neutral-700 focus:text-brand-green bg-transparent focus:bg-opacity-20 border border-neutral-600 focus:border-brand-green p-4 rounded-[0.5rem] focus:outline-none"
        />
        {errors.fullName && (
          <p className="text-red-500">{errors.fullName.message}</p>
        )}

        <input
          type="email"
          placeholder="Your Email"
          {...register("email")}
          className="text-neutral-700 focus:text-brand-green bg-transparent focus:bg-opacity-20 border border-neutral-600 focus:border-brand-green p-4 rounded-[0.5rem] focus:outline-none"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <textarea
          cols={30}
          rows={6}
          placeholder="Your Message"
          {...register("message")}
          className="text-neutral-400 focus:text-brand-green bg-transparent focus:bg-opacity-20 border border-neutral-600 focus:border-brand-green p-4 rounded-[0.5rem] focus:outline-none"
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}

        <button
          type="submit"
          disabled={mutation.isPending}
          className="bg-brand-blue text-brand-white h-[3.5rem] rounded-[0.5rem] font-[500] flex justify-center items-center space-x-2"
        >
          {mutation.isPending ? <ButtonLoader /> : <span>Send</span>}
        </button>
      </div>
    </form>
  );
}
