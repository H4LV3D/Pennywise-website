import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import ButtonLoader from "../shared/ButtonLoader";
import { addToWaitList } from "@/utils/requests/waitlist";
import { showNotification } from "@mantine/notifications";
import {
  notificationStyles,
  notificationStyles2,
} from "@/utils/others/notificationStyles";
import { useRouter } from "next/router";

interface Response {
  message: string;
  count: string;
  data: {
    email: string;
    firstName: string;
    lastName: string;
  };
  success: boolean;
}

interface WaitlistFormProps {
  closeModal: Dispatch<SetStateAction<boolean>>;
}

const WaitlistFormSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

interface WaitlistFormData {
  firstName: string;
  lastName: string;
  email: string;
}

const WaitlistForm = ({ closeModal }: WaitlistFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WaitlistFormData>({
    resolver: yupResolver(WaitlistFormSchema),
  });

  const [response, setResponse] = React.useState<Response | null>();
  const [error, setError] = React.useState(null);

  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const mutation = useMutation({
    mutationFn: async (data: WaitlistFormData) => {
      const res = await addToWaitList(data);
      localStorage.setItem("waitlister", JSON.stringify(data));
      return res.data;
    },
    onSuccess: (data) => {
      setResponse(data);
      showNotification({
        title: data.message,
        message: data.count,
        style: notificationStyles,
        // @ts-ignore
        styles: notificationStyles2,
        radius: "md",
      });
    },
    onError: (error: any) => {
      // @ts-ignore
      setError(error.response.data.message);
      showNotification({
        title: "An error occurred",
        // @ts-ignore
        message: error.response.data.message,
        style: notificationStyles,
        // @ts-ignore
        styles: notificationStyles2,
        radius: "md",
        color: "red",
      });
    },
  });

  const onSubmit = async (formData: WaitlistFormData) => {
    mutation.mutate(formData);
  };

  const bodyRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    if (bodyRef.current === e.target) {
      closeModal(false);
    } else if (modalRef.current === e.target) {
      return;
    }
  };

  return (
    <div
      ref={bodyRef}
      onClick={handleClick}
      className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50 "
    >
      <div
        ref={modalRef}
        className="grid grid-cols-1 p-4 md:p-8 min-h-[40vh] mx-5 md:mx-0 w-full max-w-[34rem] rounded-3xl bg-[#000B17] border border-brand-light-blue border-opacity-45 "
      >
        <div className="w-full h-full p-4 md:p-8 mb-8 space-y-4  ">
          <div className="mb-8 ">
            <div className="flex justify-end items-center mb-4 ">
              <button
                onClick={() => {
                  setResponse(null), closeModal(false);
                  if (mutation.isSuccess) {
                    router.push("/waitlist");
                  }
                }}
                className="text-sm font-[500] text-brand-green   "
              >
                {/* {response?.success ? "Close" : "Cancel"} */}
                <i className="fas fa-xmark fa-xl p-2 "></i>
              </button>
            </div>
            <h1 className="text-2xl sm:text-3xl font-[600] text-brand-light-blue ">
              {response?.success
                ? `Congratulations ${response.data.firstName} `
                : "Join The Waitlist Now !"}
            </h1>
            <p className="text-base text-brand-white ">
              {response?.success
                ? `${response?.count} We will notify you when you get off the waitlist!`
                : "Get early access to our product and receive updates on our progress."}
            </p>
          </div>
          {!response?.success ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5">
                <input
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  placeholder="First Name"
                  type="text"
                  id="firstName"
                  autoCapitalize="words"
                  autoFocus
                  className="bg-transparent !text-brand-white placeholder:text-neutral-500 border border-neutral-500 rounded-md w-full py-3.5 px-3 font-[500] leading-tight focus:outline-none focus:shadow-outline focus:border-brand-light-blue focus:caret-white "
                />
                {errors.firstName && (
                  <span className="text-red-500 text-xs italic">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div className="mb-5">
                <input
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  placeholder="Last Name"
                  type="text"
                  id="lastName"
                  className="bg-transparent !text-brand-white placeholder:text-neutral-500 border border-neutral-500 rounded-md w-full py-3.5 px-3 font-[500] leading-tight focus:outline-none focus:shadow-outline focus:border-brand-light-blue focus:caret-white "
                />
                {errors.lastName && (
                  <span className="text-red-500 text-xs italic">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
              <div className="mb-5">
                <input
                  {...register("email", { required: "Email is required" })}
                  onKeyUp={() => setError(null)}
                  placeholder="Email"
                  type="email"
                  id="email"
                  className="bg-transparent !text-brand-white placeholder:text-neutral-500 border border-neutral-500 rounded-md w-full py-3.5 px-3 font-[500] leading-tight focus:outline-none focus:shadow-outline focus:border-brand-light-blue focus:caret-white "
                />
                {errors.email && (
                  <span className="text-red-500 text-xs italic">
                    {errors.email.message}
                  </span>
                )}
              </div>
              {error && (
                <div className="text-red-500 text-sm font-[500] italic">
                  {error}
                </div>
              )}
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className={`"hover:bg-brand-blue hover:text-brand-white ${
                    mutation.isPending
                      ? "bg-brand-blue text-brand-white "
                      : "bg-brand-light-blue text-brand-blue"
                  }  h-[3.5rem] font-[600] w-full rounded focus:outline-none focus:shadow-outline"`}
                >
                  {mutation.isPending ? (
                    <ButtonLoader color="white" />
                  ) : (
                    <span>
                      <i className="fas fa-paper-plane mr-2"></i>
                      <span className="">Join The Waitlist</span>
                    </span>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="text-brand-white text-sm italic">
              <div className="px-20 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  fill="#80FF00"
                >
                  <path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L550.2 352H592c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H516h-4-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48H48c-26.5 0-48 21.5-48 48V304c0 26.5 21.5 48 48 48H156.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123z" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaitlistForm;
