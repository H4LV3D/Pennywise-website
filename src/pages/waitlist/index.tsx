import PageLayout from "@/layout/PageLayout";
import { Table } from "@mantine/core";
import Head from "next/head";
import { getWaitlist } from "@/utils/requests/waitlist";
import { WaitlistUser } from "@/typings/waitlist";
// import { useQuery, useQueryClient } from "@tanstack/react-query";
// import { showNotification } from "@mantine/notifications";
// import { RotatingLines } from "react-loader-spinner";
import React from "react";

export const getStaticProps = async () => {
  const res = await getWaitlist();
  return {
    props: {
      waitlist: res.data.data,
    },
  };
};

export default function Contact({ waitlist }: { waitlist: WaitlistUser[] }) {
  const ths = (
    <tr className="!text-brand-white font-[400] ">
      <th className="!text-brand-white font-[400]">No.</th>
      <th className="!text-brand-white font-[400] hidden sm:table-cell ">
        First Name
      </th>
      <th className="!text-brand-white font-[400] hidden sm:table-cell">
        Last Name
      </th>
      <th className="!text-brand-white font-[400]">Email</th>
    </tr>
  );

  const rows = waitlist?.map((element, index) => (
    <tr
      className="text-neutral-300 hover:font-[500] hover:text-brand-blue  "
      key={element?.email}
    >
      <td className="!border-neutral-500">{index + 1}</td>
      <td className="!border-neutral-500 hidden sm:table-cell ">
        {element?.firstName}
      </td>
      <td className="!border-neutral-500 hidden sm:table-cell ">
        {element?.lastName}
      </td>
      <td className="!border-neutral-500">{element?.email}</td>
    </tr>
  ));

  return (
    <>
      <Head>
        <title>Pennywise | Waitlist </title>
      </Head>
      <PageLayout>
        <div className=" min-h-[75vh]  ">
          <div className="pt-12 ">
            <h5 className="text-sm sm:text-base tracking-wide font-[500] uppercase text-brand-blue dark:text-neutral-200">
              Wait list
            </h5>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mt-0.5 font-bold text-brand-blue dark:text-brand-white">
              Congratulatons!
            </h1>
            <p className="mt-3 text-[1rem] text-[#646464] dark:text-neutral-400 max-w-[30rem] tracking-wide  ">
              You are now on the wait list. We will reach out to you as soon as
              possible. Thank you for your patience.
            </p>
          </div>
          <div className={`my-10 "border-b text-brand-white `}>
            {waitlist?.length > 0 && (
              <Table
                className="hover:bg-opacity-20 border-neutral-500 dark:border-neutral-500"
                highlightOnHover
                captionSide="bottom"
                verticalSpacing={"md"}
                horizontalSpacing={"md"}
                fontSize={"md"}
                withBorder={false}
              >
                <thead>{ths}</thead>
                <tbody>{rows}</tbody>
              </Table>
            )}
            {/* {isLoading && (
              <div className="min-h-[30vh] w-full flex items-center justify-center ">
                <div className="flex space-x-4 items-center ">
                  <RotatingLines
                    width="40px"
                    strokeWidth={"4"}
                    strokeColor="#FBFBFB"
                  />
                  <p className=" text-brand-white text-xl font-[500] ">
                    Loading
                  </p>
                </div>
              </div>
            )}
            {isError && !isLoading && (
              <div className="min-h-[30vh] w-full flex items-center justify-center ">
                <div className="text-center">
                  <h4 className=" text-red-100 text-xl font-[500] ">
                    Error fetching waitlist!
                  </h4>
                  <button
                    onClick={() => {
                      queryClient.invalidateQueries({ queryKey: ["waitlist"] });
                    }}
                    className=" text-brand-green text-xl font-[500] "
                  >
                    Retry
                  </button>
                </div>
              </div>
            )} */}
          </div>
        </div>
      </PageLayout>
    </>
  );
}
