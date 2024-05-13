import PageLayout from "@/layout/PageLayout";
import { Table } from "@mantine/core";
import Head from "next/head";
import { useQuery } from "@tanstack/react-query";
import { getWaitlist } from "@/utils/requests/waitlist";
import { WaitlistUser } from "@/typings/waitlist";
import { showNotification } from "@mantine/notifications";

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

  if (isError) {
    showNotification({
      title: "Error fetching waitlist.",
      message: error.message,
    });
  }

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

  const rows = data?.map((element, index) => (
    <tr
      className="text-neutral-300 hover:font-[500] hover:text-brand-blue  "
      key={element?.firstName}
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
        <title>Pennywise | Contact </title>
        <meta
          name="description"
          content="Pennywise is a financial accounting app that helps you make the best financial decisions by providing you with the right information and tools."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <div className=" min-h-[75vh]  ">
          <div className="pt-12 ">
            <h5 className="text-base sm:text-lg font-[500] uppercase tracking-wide text-brand-blue dark:text-neutral-200">
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
          <div
            className={`my-10 ${!isLoading && "border-b"} text-brand-white `}
          >
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
            {isLoading && (
              <div className="min-h-[30vh] w-full flex items-center justify-center ">
                <div className=" text-center ">
                  <i className="fas fa-spinner fa-spin fa-2x text-brand-blue dark:text-brand-white"></i>
                  <p className=" text-brand-white text-lg ">Loading</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </PageLayout>
    </>
  );
}
