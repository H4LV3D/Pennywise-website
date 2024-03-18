"use client";
import PageLayout from "@/layout/PageLayout";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Table } from "@mantine/core";
import Head from "next/head";
import { useQuery } from "@tanstack/react-query";
import { getWaitlist } from "@/utils/requests/waitlist";
import { WaitlistUser } from "@/typings/waitlist";

export default function Contact() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["waitlist"],
    queryFn: async () => {
      const res = await getWaitlist();
      console.log(res.data.data);
      return res.data.data as WaitlistUser[];
    },
    enabled: true,
    refetchOnWindowFocus: true,
  });

  const ths = (
    <tr className="!text-brand-white font-[400] ">
      <th className="!text-brand-white font-[400]">No.</th>
      <th className="!text-brand-white font-[400]">First Name</th>
      <th className="!text-brand-white font-[400]">Last Name</th>
      <th className="!text-brand-white font-[400]">Email</th>
    </tr>
  );

  const rows = data?.map((element, index) => (
    <tr
      className="text-brand-white hover:text-brand-blue !border-neutral-500 "
      key={element?.firstName}
    >
      <td>{index + 1}</td>
      <td>{element?.firstName}</td>
      <td>{element?.lastName}</td>
      <td>{element?.email}</td>
    </tr>
  ));

  return (
    <>
      <Head>
        <title>Pennywise | Contact </title>
        <meta
          name="description"
          content="Pennywise is a financial accounting app that helps you make the best financial decisions by providing you with the right information and tools."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={` min-h-screen bg-[#fbfbfb] dark:bg-[#000B17] py-16 md:py-20 `}
      >
        <PageLayout>
          <Navbar />
          <div className=" min-h-[75vh] py-8 md:py-8 ">
            <div className="">
              <h5 className="text-xl font-[500] uppercase tracking-wide text-brand-blue dark:text-brand-white">
                Wait list
              </h5>
              <h1 className="text-5xl lg:text-6xl font-bold text-brand-blue dark:text-brand-white">
                Congratulatons!
              </h1>
              <p className="mt-3 text-[1rem] text-[#6464646] dark:text-neutral-400 max-w-[30rem] tracking-wide  ">
                You are now on the wait list. We will reach out to you as soon
                as possible. Thank you for your patience.
              </p>
            </div>
            <div className="my-8 border-b text-brand-white ">
              <Table
                className="hover:bg-opacity-20 "
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
            </div>
          </div>
          <Footer />
        </PageLayout>
      </div>
    </>
  );
}
