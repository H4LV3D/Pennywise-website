import React from "react";
import PageLayout from "@/layout/PageLayout";
import Blogs from "@/data/blog.json";
import Link from "next/link";

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <PageLayout>
        <div className=" py-10 md:py-16">
          <div className="space-y-2 max-w-lg ">
            <h1 className="font-[600] text-3xl sm:text-4xl md:text-5xl dark:text-brand-whitet-brand-blue dark:text-brand-white tracking-wider  ">
              Blogs
            </h1>
            <p className="dark:text-neutral-300 text-[.95rem] text-[#222] tracking-wider mt-0.5 ">
              Essential reads for your financial journey and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {Blogs.map((blog, index) => (
              <Link href={`/blogs/${blog.id}`} key={index}>
                <div className="bg-white dark:bg-brand-dark-blue rounded-[1rem] shadow-lg overflow-hidden ">
                  <div className="h-[250px] w-full bg-brand-blue"></div>
                  <div className="p-6">
                    <h1 className="font-[500] text-xl dark:text-brand-white text-brand-blue line-clamp-2 ">
                      {blog.title}
                    </h1>
                    <p className="dark:text-neutral-300 text-[#222] mt-2 tracking-wider line-clamp-2 ">
                      {blog.body}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default index;
