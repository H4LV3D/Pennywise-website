"use client";
import PageLayout from "@/layout/PageLayout";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className={` min-h-screen bg-[#fbfbfb] dark:bg-[#000B17] xxxl:pt-20  `}
    >
      <PageLayout>
        <Navbar />
        <div className="px-4 md:px-8 max-w-[1250px] mx-auto overflow-hidden ">
          <div className=" py-16 grid grid-cols-1 lg:grid-cols-2 place-items-center border-b dark:border-neutral-700 min-h-[80vh] ">
            <div className=" space-y-5 ">
              <h1 className="font-[800] text-[64px] leading-[60px] text-brand-blue dark:text-brand-white ">
                Make The Best Financial Decisions!
              </h1>
              <p className="text-[#6c6c6c] dark:text-neutral-400 text-[1rem]">
                We help you make the best financial decisions by providing you
                with the right information and tools. We are your one stop shop
                for all your financial needs.
              </p>
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => (localStorage.theme = "dark")}
                  className="bg-brand-blue  text-white h-[3rem] px-8 rounded-[0.5rem] flex items-center space-x-2"
                >
                  <span className="">Get Started</span>
                  <i className="fas fa-long-arrow-right fa-fw fa-lg text-white "></i>
                </button>
                <button
                  onClick={() => (localStorage.theme = "light")}
                  className="  py-3 rounded-[0.5rem] flex items-center space-x-2 text-brand-green "
                >
                  <span className="h-8 w-8 border border-brand-green rounded-[50%] flex justify-center items-center ">
                    <i className="fas fa-play fa-fw fa-md pl-0.5 "></i>
                  </span>
                  <span>Learn More</span>
                </button>
              </div>
              {/* <div className="">
                <Image
                  src="/Achievements.png"
                  alt="Achievements"
                  width={600}
                  height={300}
                />
              </div> */}
            </div>
            <div className="relative flex -space-x-72 ">
              {[1, 2, 3].map((item, index) => (
                <div
                  className={`${
                    index === 0
                      ? " z-30"
                      : index === 1
                      ? " mt-12 z-20"
                      : " mt-24"
                  }  `}
                  key={index}
                >
                  <Image
                    src={`/phone-${index + 1}.png`}
                    alt="Features"
                    width={1000}
                    height={1000}
                    className=" "
                  />
                </div>
              ))}
            </div>
          </div>

          <div className=" py-16 grid grid-cols-1 lg:grid-cols-2 place-items-center border-b dark:border-neutral-700 min-h-[80vh] ">
            <div className="">
              <Image
                src="/features.png"
                alt="Features"
                width={600}
                height={600}
              />
            </div>
            <div className=" space-y-5 ">
              <div>
                <p className="uppercase text-[1.125rem] !tracking-widest text-brand-green dark:text-neutral-400 ">
                  FEATURES
                </p>
                <h1 className="font-[800] text-[46px] leading-[60px] text-brand-blue dark:text-brand-green ">
                  Pennywise Premium
                </h1>
              </div>

              <div className="grid grid-cols-1 gap-y-8 ">
                {[1, 2, 3].map((item, index) => (
                  <div className="" key={index}>
                    <div className="flex space-x-2 items-center dark:text-neutral-200 ">
                      <i className="fas fa-money-bill fa-lg fa-fw"></i>
                      <h5 className="font-[500] text-[1.4rem] dark:text-brand-white  ">
                        Budgeting Intervals
                      </h5>
                    </div>
                    <p className="text-[#6c6c6c] dark:text-neutral-400 text-[1rem]">
                      We help you make the best financial decisions by providing
                      you with the right information and tools. We are your one
                      stop shop for all your financial needs.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className=" py-16 grid grid-cols-1 lg:grid-cols-2 place-items-center min-h-[60vh] ">
            <div className=" space-y-5 ">
              <div className="">
                <p className="uppercase text-[1.125rem] !tracking-widest dark:text-neutral-400 ">
                  Advantages
                </p>
                <h1 className="font-[800] text-[46px] leading-[60px] text-brand-blue dark:text-brand-green  ">
                  Why choose Pennywise?
                </h1>
              </div>

              <div className="space-y-4 ">
                <div className="flex space-x-2 items-center dark:text-brand-white">
                  <span className="h-[2.25rem] w-[2.25rem] border border-black dark:border-brand-white rounded-[50%] flex justify-center items-center ">
                    <i className="fas fa-bell fa-lg fa-fw"></i>
                  </span>
                  <h5 className="font-[500] text-[1.4rem]  ">
                    Clever Notifications
                  </h5>
                </div>
                <p className="text-[#6c6c6c] dark:text-neutral-400 text-[1rem] lg:pr-24 ">
                  With our clever notifications, you will never miss a payment
                  or an important event. We will notify you when you need to
                  take action. We will also notify you when you are spending too
                  much money. We will also notify you when you are spending too
                  much money.
                </p>
              </div>
            </div>
            <div className="">
              <Image
                src="/notifications.png"
                alt="Customize"
                width={600}
                height={600}
              />
            </div>
          </div>

          <div className=" py-16 grid grid-cols-1 lg:grid-cols-2 place-items-center border-b dark:border-neutral-700 min-h-[60vh] ">
            <div className="">
              <Image
                src="/customize.png"
                alt="Customize"
                width={500}
                height={500}
              />
            </div>
            <div className="space-y-4 ">
              <div className="flex space-x-2 items-center dark:text-brand-white">
                <span className="h-[2.25rem] w-[2.25rem] border border-black dark:border-brand-white rounded-[50%] flex justify-center items-center ">
                  <i className="fas fa-star fa-lg fa-fw"></i>
                </span>
                <h5 className="font-[500] text-[1.4rem] ">
                  Fully Customizable
                </h5>
              </div>
              <p className="text-[#6c6c6c] dark:text-neutral-400 text-[1rem] lg:pr-24 ">
                It is your money and you should be able to manage it the way you
                want. With Pennywise, you can customize everything from budgets
                to categories to accounts. You can also create your own custom
                categories and budgets. You can also create your own custom
                categories and budgets.
              </p>
            </div>
          </div>

          <div className="py-16 ">
            <div className="text-center">
              <p className="uppercase text-[1.125rem] !tracking-widest text-brand-green dark:text-neutral-400 ">
                Testimonials
              </p>
              <h1 className="font-[800] text-[40px] sm:text-[46px] leading-[48px] w-[24rem] mx-auto text-brand-blue dark:text-brand-green ">
                What Our Users Say About Us?
              </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center min-h-[40vh]  ">
              <div className="md:flex justify-center items-center py-8 relative hidden  w-[500px] h-[500px] ">
                {/* <Image
                  src="/three_rings.png"
                  alt="three rings"
                  width={500}
                  height={500}
                /> */}
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center  ">
                  <div className=" bg-brand-blue w-[160px] h-[160px] flex items-center justify-center rounded-[50%]">
                    <Image
                      src="/Memoji-8.png"
                      alt="Icons"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
                {[1, 2, 3, 4].map((item, index) => (
                  <div
                    className={`bg-brand-blue h-20 w-20 border border-brand-blue rounded-[50%] absolute flex-shrink-0 ${
                      index === 0
                        ? "top-28 left-20"
                        : index == 3
                        ? "bottom-28 right-20"
                        : index === 1
                        ? " top-20 right-28"
                        : "bottom-20 left-28"
                    } `}
                    key={index}
                  >
                    {/* <Image
                      src="/peep-8.svg"
                      alt="peep"
                      width={65}
                      height={65}
                      className="mx-auto"
                    /> */}
                  </div>
                ))}
              </div>
              <div className="w-full ">
                <div className="space-y-6 w-[24rem] mx-auto ">
                  <h5 className="font-[500] text-[1.3rem] dark:text-brand-white ">
                    The Best Financial Accounting App Ever!
                  </h5>

                  <p className="text-[#6c6c6c] dark:text-neutral-400 text-[1rem] ">
                    It is your money and you should be able to manage it the way
                    you want. With Pennywise, you can customize everything from
                    budgets to categories to accounts. You can also create your
                    own custom categories and budgets.
                  </p>

                  <div className="flex items-center space-x-3">
                    {[1, 2, 3, 4, 5].map((item, index) => (
                      <button
                        className="bg-brand-blue h-6 w-6 rounded-[50%]"
                        key={index}
                      >
                        <span className=" "></span>
                      </button>
                    ))}
                  </div>

                  <p className="text-[.9375rem] font-[500] text-brand-green  ">
                    Toluwalope Akinkunmi
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-16 xl:w-[950px] mx-auto">
            <div className="">
              <p className="uppercase text-[1.125rem] !tracking-widest dark:text-neutral-400 ">
                FAQ
              </p>
              <h1 className="font-[800] text-[40px] sm:text-[46px] leading-[48px] w-[28rem] text-brand-blue dark:text-brand-green ">
                Frequently Asked Questions
              </h1>
            </div>
            <div className="mt-8 ">
              <div className="w-full grid grid-cols-1 gap-8 md:grid-cols-2 ">
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <div
                    className={`"space-y-2 mx-auto p-6 rounded-lg ${
                      index === 0 || index === 3 || index === 4
                        ? "md:bg-brand-blue md:text-white md:dark:bg-brand-green dark:text-brand-blue "
                        : " dark:text-brand-white "
                    }  `}
                    key={index}
                  >
                    <h5 className="font-[500] text-[1.3rem] ">
                      The Best Financial Accounting App Ever!
                    </h5>
                    <p className="text-[#6c6c6c] dark:text-neutral-500 text-[1rem] ">
                      It is your money and you should be able to manage it the
                      way you want. With Pennywise, you can customize everything
                      from budgets to categories to accounts.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="py-16 xl:w-[950px] mx-auto">
            <div className="bg-black  p-6 sm:p-0 sm:pl-8  min-h-[35vh] w-full rounded-2xl flex items-center ">
              <div className="text-white w-[28rem] ">
                <h3 className="text-[2.25rem] font-[600] ">
                  Ready To Get Started?
                </h3>
                <p className="text-[#6c6c6c] dark:text-neutral-400">
                  We help you make the best financial decisions by providing you
                  with the right information and tools.
                </p>
                <button className="bg-white text-black h-[3rem] px-8 rounded-[0.5rem] flex items-center space-x-2 mt-4 ">
                  <span className="font-[500] ">Download App</span>
                  <i className="fab fa-apple fa-fw fa-lg text-black "></i>
                </button>
              </div>
              <div className="hidden sm:block ">
                <img
                  src="/iPhone 13 Pro.png"
                  alt=""
                  className="w-[30rem] mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </PageLayout>
    </div>
  );
}
