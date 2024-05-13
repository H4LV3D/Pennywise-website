import PageLayout from "@/layout/PageLayout";
import Head from "next/head";
import ContactForm from "@/components/forms/ContactForm";

export default function Contact() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 min-h-[65vh] py-20 place-items-center ">
          <div className="w-full ">
            <h5 className="text-sm sm:text-xl uppercase mb-2 text-brand-blue dark:text-brand-white">
              Contact Us
            </h5>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-blue dark:text-brand-white">
              Get In Touch
            </h1>
            <p className="mt-3 text-[1rem] text-[#6464646] dark:text-neutral-400 max-w-[30rem] tracking-wide  ">
              We are always available to help you with any issues you might
              have. We are currently available to take any message at the
              moment.
            </p>
            <div className="mt-8"></div>
          </div>
          <div className=" w-full ">
            <ContactForm />
          </div>
        </div>
      </PageLayout>
    </>
  );
}
