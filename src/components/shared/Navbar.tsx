import React from "react";
import { usePathname } from "next/navigation";
import BrandLogo from "./Logo";
import Link from "next/link";
import WaitlistForm from "../forms/Waitlist";

type Props = {};

function Header({}: Props) {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const navItems = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Pricing", link: "/pricing" },
    { text: "Contact", link: "/contact" },
    { text: "Waitlist", link: "/waitlist" },
  ];

  return (
    <>
      {isModalOpen && <WaitlistForm closeModal={setIsModalOpen} />}
      <div className="fixed top-0 left-0 w-full dark:bg-[#000B17] bg-opacity-75 z-40">
        <div className="px-6 md:px-0 md:container mx-auto xl:w-[1250px] h-20 ">
          <div
            className={`flex items-center justify-between py-5 md:py-3   shadow-sm `}
          >
            <div className="flex items-center lg:space-x-6 text-black dark:text-neutral-400">
              <div className="hidden lg:block group relative dark:border-gray-600 dark:text-neutral-300 cursor-pointer">
                <BrandLogo />
                <p className="opacity-0 bg-black dark:bg-neutral-900 dark:text-neutral-400 text-white text-center text-xs rounded-lg py-2 absolute z-40 group-hover:opacity-100 top-full -left-4 mt-4 px-4 pointer-events-none">
                  Home
                </p>
              </div>
              <div className="lg:hidden">
                <button
                  onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                  }}
                  className=""
                >
                  {isMenuOpen ? (
                    <i className="fas fa-xmark fa-fw fa-lg text-black dark:text-neutral-400"></i>
                  ) : (
                    <i className="fas fa-bars fa-fw fa-lg text-black dark:text-neutral-400"></i>
                  )}
                </button>
              </div>
              <div className="hidden lg:block">
                <div className="flex items-center space-x-5">
                  {navItems.map((item, index) => (
                    <Link
                      href={item.link}
                      key={index}
                      data-aos="fade-down"
                      data-aos-delay={index * 100}
                      className={`w-full p-2  ${
                        path === item.link
                          ? "text-lg text-brand-green font-[600] dark:text-brand-green "
                          : "text-lg text-neutral-400 dark:hover:text-white  hover:text-black "
                      }  
                       `}
                    >
                      {item.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 ">
              <button
                data-aos="fade-down"
                data-aos-delay={1200}
                onClick={() => {
                  setIsModalOpen(true);
                }}
                className="h-[3.5rem] px-8 rounded-[0.5rem] font-[500] bg-brand-blue text-white hover:bg-[#191919] transition-all duration-300 ease-in-out"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
        {
          // Mobile Menu
          isMenuOpen && (
            <div className="w-full p-6 md:container mx-auto lg:hidden border-b border-brand-green rounded-b-2xl shadow-lg ">
              <div className="grid grid-cols-1 space-y-3">
                {navItems.map((item, index) => (
                  <Link
                    href={item.link}
                    key={index}
                    data-aos="fade-down"
                    data-aos-delay={index * 100}
                    className={`w-full p-2  ${
                      path === item.link
                        ? "text-xl text-brand-green font-[600] dark:text-brand-green "
                        : "text-xl text-neutral-400 dark:hover:text-white  hover:text-black "
                    }  
                       `}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
          )
        }
      </div>
    </>
  );
}

export default Header;
