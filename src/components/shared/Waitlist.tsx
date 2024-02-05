import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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

  // remove scrollling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleFormSubmit = async (data: WaitlistFormData) => {
    console.log(data);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50 ">
      <div className=" grid grid-cols-1 xxxl:grid-cols-2 gap-x-4 place-items-center min-h-[40vh] mx-8 md:mx-0 w-full md:w-[25rem] rounded-3xl bg-[#000B17] border border-brand-green border-opacity-45 ">
        {/* <div className="w-full h-full bg-[#000B17] rounded-2xl border border-brand-green shadow-xl p-6 drop-shadow-xl   ">
          <h1 className="text-[4rem] font-[800] text-brand-white ">
            START SAVING <br /> PENNIES <br /> TODAY!
          </h1>
        </div> */}
        <div className="w-full h-full p-8 space-y-4  ">
          <div className="mb-8 ">
            <div className="flex justify-end items-center mb-4 ">
              <button
                onClick={() => closeModal(false)}
                className="text-sm font-[500] text-brand-green  "
              >
                Cancel
              </button>
            </div>
            <h1 className="text-2xl font-[500] text-brand-green  ">
              Join The Waitlist Now !
            </h1>
            <p className="text-base text-brand-white ">
              Get early access to our product and receive updates on our
              progress.
            </p>
          </div>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
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
                className=" placeholder:text-neutral-500 border rounded w-full py-3 px-3 text-brand-blue font-[500] bg-neutral-200 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.firstName && (
                <span className="text-red-500 text-xs italic">
                  {errors.firstName.message}
                </span>
              )}
            </div>
            <div className="mb-5">
              <input
                {...register("lastName", { required: "Last name is required" })}
                placeholder="Last Name"
                type="text"
                id="lastName"
                className=" placeholder:text-neutral-500 border rounded w-full py-3 px-3 text-brand-blue font-[500] bg-neutral-200 leading-tight focus:outline-none focus:shadow-outline"
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
                placeholder="Email"
                type="email"
                id="email"
                className=" placeholder:text-neutral-500 border rounded w-full py-3 px-3 text-brand-blue font-[500] bg-neutral-200 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.email && (
                <span className="text-red-500 text-xs italic">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="mt-12">
              <button
                type="submit"
                className="hover:bg-brand-blue hover:text-brand-white bg-brand-green text-brand-blue h-[3rem] font-[600] w-full rounded focus:outline-none focus:shadow-outline"
              >
                GET EARLY ACCESS
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WaitlistForm;
