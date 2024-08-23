"uuse client";
import PageLayout from "@/layout/PageLayout";
import { useRouter } from "next/router";
import React from "react";
import Blogs from "@/data/blog.json";

type Props = {};

const IndividualBlogPage = ({}: Props) => {
  const router = useRouter();
  const id = router.query.id;

  const selectedBlog = Blogs.find((blog) => blog.id === id);
  return (
    <>
      <PageLayout>
        <div className="">
          <div className="min-h-[30vh] flex items-end  ">
            <h1 className="font-[600] text-5xl leading-[3.65rem] text-brand-blue dark:text-brand-white max-w-2xl ">
              {selectedBlog?.title}
            </h1>
          </div>
          <div className="py-12 max-w-3xl ">
            <p className=" text-[#646464] dark:text-brand-white font-urbanist text-[1.075rem] leading-8 tracking-wide  ">
              {selectedBlog?.body.split("\n").map((item, index) => (
                <p key={index} className="mb-6">
                  {item}
                </p>
              ))}
            </p>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default IndividualBlogPage;
