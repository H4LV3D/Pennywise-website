import Head from "next/head";
import Link from "next/link";
import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

type Props = {};

const BlogPost = (props: Props) => {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();

    const element = document.getElementById(id);

    if (element) {
      // Scroll the parent container instead of the window
      window.scrollTo({
        top: element.offsetTop - 100, // Adjust the offset if needed
        behavior: "smooth",
      });

      // Apply styling
      element.style.color = "#80FF00";
      element.style.fontWeight = "bold";
      element.style.fontSize = "1.35rem";
    }
  };

  const tableOfContents = [
    {
      id: "interpretation-and-definitions",
      title: "Interpretation and Definitions",
    },
    {
      id: "collecting-and-using-your-personal-data",
      title: "Collecting and Using Your Personal Data",
    },
    {
      id: "retention-of-your-personal-data",
      title: "Retention of Your Personal Data",
    },
    {
      id: "transfer-of-your-personal-data",
      title: "Transfer of Your Personal Data",
    },
    {
      id: "disclosure-of-your-personal-data",
      title: "Disclosure of Your Personal Data",
    },
    {
      id: "security-of-your-personal-data",
      title: "Security of Your Personal Data",
    },
    {
      id: "childrens-privacy",
      title: "Children's Privacy",
    },
    {
      id: "links-to-other-websites",
      title: "Links to Other Websites",
    },
    {
      id: "changes-to-this-privacy-policy",
      title: "Changes to this Privacy Policy",
    },
    {
      id: "contact-us",
      title: "Contact Us",
    },
  ];
  return (
    <>
      <Head>
        <title>Pennywise | Privacy Policy</title>
        <meta
          name="description"
          content="Pennywise is a financial accounting app that helps you make the best financial decisions by providing you with the right information and tools."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Navbar />
        <div className="mt-[5rem] mx-auto max-w-[1250px] px-6 sm:px-8 md:px-0 dark:bg-[#000B17] ">
          <div id="top" className="space-y-1 min-h-[35vh] flex items-center ">
            <div className="space-y-2 max-w-lg ">
              <h1 className="font-[600] text-3xl sm:text-4xl md:text-5xl dark:text-brand-whitet-brand-blue dark:text-brand-white tracking-wider  ">
                Privacy Policy
              </h1>
              <p className="dark:text-neutral-300 text-[#222] tracking-wider mt-0.5 ">
                Last updated: August 07, 2024.
              </p>
            </div>
          </div>

          <div className="flex  flex-col-reverse lg:flex-row justify-between lg:space-x-8 ">
            <div className="lg:w-3/5 min-h-[1000px] md:h-[800vh] mt-8 lg:mt-0 ">
              <div className="w-full space-y-6 text-[#646464] dark:text-neutral-300 ">
                <div className="space-y-2.5 mt-3.5 ">
                  <p className="leading-6 tracking-wider  mt-0.5 ">
                    This Privacy Policy describes Our policies and procedures on
                    the collection, use and disclosure of Your information when
                    You use the Service and tells You about Your privacy rights
                    and how the law protects You.
                  </p>
                  <p className="leading-6 tracking-wider  mt-0.5 ">
                    We use Your Personal data to provide and improve the
                    Service. By using the Service, You agree to the collection
                    and use of information in accordance with this Privacy
                    Policy.
                  </p>
                </div>

                <p
                  id="interpretation-and-definitions"
                  className="font-[500] text-[21px] font-[500]:text-br dark:text-brand-white text-brand-blue  "
                >
                  Interpretation and Definitions
                </p>

                <div className="space-y-1.5">
                  <p className="font-[500] text-[19px] dark:text-brand-white text-brand-blue  ">
                    Interpretation
                  </p>
                  <p className="leading-6 tracking-wider  mt-0.5 ">
                    The words of which the initial letter is capitalized have
                    meanings defined under the following conditions. The
                    following definitions shall have the same meaning regardless
                    of whether they appear in singular or in plural.
                  </p>
                </div>

                <div className="space-y-4 ">
                  <div className="space-y-1.5">
                    <p className="font-[500] text-[19px] dark:text-brand-white text-brand-blue  ">
                      Definitions
                    </p>
                    <p className="leading-6 tracking-wider  mt-0.5 ">
                      For the purposes of this Privacy Policy:
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="leading-6 tracking-wider  mt-0.5 ">
                      <span className="font-[500] text-brand-dark-blue ">
                        Account
                      </span>{" "}
                      means a unique account created for You to access our
                      Service or parts of our Service.
                    </p>

                    <p className="leading-6 tracking-wider  mt-0.5 ">
                      <span className="font-[500] text-brand-dark-blue ">
                        Affiliate
                      </span>{" "}
                      means an entity that controls, is controlled by or is
                      under common control with a party, where &#34;control&#34;
                      means ownership of 50% or more of the shares, equity
                      interest or other securities entitled to vote for election
                      of directors or other managing authority.
                    </p>

                    <p className="leading-6 tracking-wider  mt-0.5 ">
                      <span className="font-[500] text-brand-dark-blue ">
                        Application
                      </span>{" "}
                      refers to Pennywise, the software program provided by the
                      Company.
                    </p>

                    <p className="leading-6 tracking-wider  mt-0.5 ">
                      <span className="font-[500] text-brand-dark-blue ">
                        Company
                      </span>{" "}
                      (referred to as either &quot;the Company&quot;,
                      &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this
                      Agreement) refers to PENNYTECH @JETS GLOBAL LIMITED, 6
                      OBOKUN STREET ILUPEJU.
                    </p>

                    <p className="leading-6 tracking-wider  mt-0.5 ">
                      <span className="font-[500] text-brand-dark-blue ">
                        Cookies
                      </span>{" "}
                      are small files that are placed on Your computer, mobile
                      device or any other device by a website, containing the
                      details of Your browsing history on that website among its
                      many uses.
                    </p>

                    <p className="leading-6 tracking-wider  mt-0.5 ">
                      <span className="font-[500] text-brand-dark-blue ">
                        Country
                      </span>{" "}
                      refers to: Nigeria
                    </p>

                    <p className="leading-6 tracking-wider  mt-0.5 ">
                      <span className="font-[500] text-brand-dark-blue ">
                        Device
                      </span>{" "}
                      means any device that can access the Service such as a
                      computer, a cellphone or a digital tablet.
                    </p>

                    <p className="leading-6 tracking-wider  mt-0.5 ">
                      <span className="font-[500] text-brand-dark-blue ">
                        Personal Data
                      </span>{" "}
                      is any information that relates to an identified or
                      identifiable individual.
                    </p>

                    <p className="leading-6 tracking-wider  mt-0.5 ">
                      <span className="font-[500] text-brand-dark-blue ">
                        Service
                      </span>{" "}
                      refers to the Application or the Website or both.
                    </p>

                    <p className="leading-6 tracking-wider  mt-0.5 ">
                      <span className="font-[500] text-brand-dark-blue ">
                        Service Provider
                      </span>{" "}
                      means any natural or legal person who processes the data
                      on behalf of the Company. It refers to third-party
                      companies or individuals employed by the Company to
                      facilitate the Service, to provide the Service on behalf
                      of the Company, to perform services related to the Service
                      or to assist the Company in analyzing how the Service is
                      used.
                    </p>

                    <p className="leading-6 tracking-wider  mt-0.5 ">
                      <span className="font-[500] text-brand-dark-blue ">
                        Usage Data
                      </span>{" "}
                      refers to data collected automatically, either generated
                      by the use of the Service or from the Service
                      infrastructure itself (for example, the duration of a page
                      visit).
                    </p>

                    <p className="leading-6 tracking-wider  mt-0.5 ">
                      <span className="font-[500] text-brand-dark-blue ">
                        Website
                      </span>{" "}
                      refers to Pennywise, accessible from{" "}
                      <Link href="https://www.iampennywise.com">
                        <span className="dark:text-brand-light-blue dark:hover:text-brand-green hover:text-brand-white text-brand-blue ">
                          https://www.iampennywise.com
                        </span>
                      </Link>
                    </p>

                    <p className="leading-6 tracking-wider  mt-0.5 ">
                      <span className="font-[500] text-brand-dark-blue ">
                        You
                      </span>{" "}
                      means the individual accessing or using the Service, or
                      the company, or other legal entity on behalf of which such
                      individual is accessing or using the Service, as
                      applicable.
                    </p>
                  </div>
                </div>

                <p
                  id="collecting-and-using-your-personal-data"
                  className="font-[500] text-[21px] dark:text-brand-white text-brand-blue/90  "
                >
                  Collecting and Using Your Personal Data
                </p>

                <p className="font-[500] text-[19px] dark:text-brand-white text-brand-blue/90  ">
                  Types of Data Collected
                </p>

                <div className="space-y-1.5">
                  <p className="font-[400] text-[19px] dark:text-brand-white text-brand-blue  ">
                    Personal Data
                  </p>
                  <p className="leading-6 tracking-wider  mt-0.5 ">
                    While using Our Service, We may ask You to provide Us with
                    certain personally identifiable information that can be used
                    to contact or identify You. Personally identifiable
                    information may include, but is not limited to:
                  </p>

                  <ul className="space-y-3 pt-3.5 pl-6 ">
                    <li className="text-[#646464] dark:text-neutral-400 tracking-wider ">
                      Email Address
                    </li>
                    <li className="text-[#646464] dark:text-neutral-400 tracking-wider ">
                      First and Last Names
                    </li>
                    <li className="text-[#646464] dark:text-neutral-400 tracking-wider ">
                      Address, State, Province, ZIP/Postal code, City
                    </li>

                    <li className="text-[#646464] dark:text-neutral-400 tracking-wider ">
                      Usage Data
                    </li>
                    <li className="text-[#646464] dark:text-neutral-400 tracking-wider ">
                      Bank Account Number
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <p className="font-[500] text-[19px] text-brand-blue dark:text-brand-white  ">
                    Usage Data
                  </p>

                  <p className="leading-6 tracking-wider  ">
                    Usage Data is collected automatically when using the
                    Service.
                  </p>

                  <p className="leading-6 tracking-wider  ">
                    Usage Data may include information such as Your
                    Device&rsquo;s Internet Protocol address (e.g. IP address),
                    browser type, browser version, the pages of our Service that
                    You visit, the time and date of Your visit, the time spent
                    on those pages, unique device identifiers and other
                    diagnostic data.
                  </p>

                  <p className="leading-6 tracking-wider  ">
                    When You access the Service by or through a mobile device,
                    We may collect certain information automatically, including,
                    but not limited to, the type of mobile device You use, Your
                    mobile device unique ID, the IP address of Your mobile
                    device, Your mobile operating system, the type of mobile
                    Internet browser You use, unique device identifiers and
                    other diagnostic data.
                  </p>

                  <p className="leading-6 tracking-wider  ">
                    We may also collect information that Your browser sends
                    whenever You visit our Service or when You access the
                    Service by or through a mobile device.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <p className="font-[500] text-[19px] text-brand-blue dark:text-brand-white  ">
                    Tracking Technologies and Cookies
                  </p>
                  <p className="leading-6 tracking-wider  ">
                    We use Cookies and similar tracking technologies to track
                    the activity on Our Service and store certain information.
                    Tracking technologies used are beacons, tags, and scripts to
                    collect and track information and to improve and analyze Our
                    Service. The technologies We use may include:
                  </p>

                  <div className="py-2 pl-2">
                    <span className="leading-6 tracking-wider  ">
                      <p className="font-[500] text-[16px] text-brand-blue dark:text-brand-white  ">
                        Cookies or Browser Cookies
                      </p>{" "}
                      A cookie is a small file placed on Your Device. You can
                      instruct Your browser to refuse all Cookies or to indicate
                      when a Cookie is being sent. However, if You do not accept
                      Cookies, You may not be able to use some parts of our
                      Service. Unless you have adjusted Your browser setting so
                      that it will refuse Cookies, our Service may use Cookies.
                    </span>
                  </div>

                  <div className="py-2 pl-2">
                    <p className="leading-6 tracking-wider  ">
                      <span className="font-[500] text-[16px] text-brand-blue dark:text-brand-white  ">
                        Web Beacons
                      </span>{" "}
                      Certain sections of our Service and our emails may contain
                      small electronic files known as web beacons (also referred
                      to as clear gifs, pixel tags, and single-pixel gifs) that
                      permit the Company, for example, to count users who have
                      visited those pages or opened an email and for other
                      related website statistics (for example, recording the
                      popularity of a certain section and verifying system and
                      server integrity).
                    </p>
                  </div>

                  <p className="leading-6 tracking-wider  ">
                    Cookies can be &quot;Persistent&quot; or &quot;Session&quot;
                    Cookies. Persistent Cookies remain on Your personal computer
                    or mobile device when You go offline, while Session Cookies
                    are deleted as soon as You close Your web browser. You can
                    learn more about cookies on TermsFeed website article.
                  </p>

                  <p className="leading-6 tracking-wider  ">
                    We use both Session and Persistent Cookies for the purposes
                    set out below:
                  </p>

                  <div className="py-2 pl-2 space-y-1.5 ">
                    <p
                      style={{
                        fontFamily: "Bricolage Grotesque",
                        fontWeight: "500",
                      }}
                      className="font-[500] text-[16px] text-brand-blue dark:text-brand-white  "
                    >
                      Necessary / Essential Cookies
                    </p>

                    <p className="text-[14px] text-brand-dark-blue/80  ">
                      Type : Session Cookies
                    </p>

                    <p className="text-[14px] text-brand-dark-blue/80  ">
                      Administered by : Us
                    </p>

                    <p className="leading-6 tracking-wider  ">
                      Purpose: These Cookies are essential to provide You with
                      services available through the Website and to enable You
                      to use some of its features. They help to authenticate
                      users and prevent fraudulent use of user accounts. Without
                      these Cookies, the services that You have asked for cannot
                      be provided, and We only use these Cookies to provide You
                      with those services.
                    </p>
                  </div>

                  <div className="py-2 pl-2 space-y-1.5 ">
                    <p
                      style={{
                        fontFamily: "Bricolage Grotesque",
                        fontWeight: "500",
                      }}
                      className="font-[500] text-[16px] text-brand-blue dark:text-brand-white  "
                    >
                      Cookies Policy / Notice Acceptance Cookies
                    </p>

                    <p className="text-[14px] text-brand-dark-blue/80  ">
                      Type: Persistent Cookies
                    </p>

                    <p className="text-[14px] text-brand-dark-blue/80  ">
                      Administered by : Us
                    </p>

                    <p className="leading-6 tracking-wider  ">
                      Purpose: These Cookies identify if users have accepted the
                      use of cookies on the Website.
                    </p>
                  </div>

                  <div className="py-2 pl-2 space-y-1.5 ">
                    <p
                      style={{
                        fontFamily: "Bricolage Grotesque",
                        fontWeight: "500",
                      }}
                      className="font-[500] text-[16px] text-brand-blue dark:text-brand-white  "
                    >
                      Functionality Cookies
                    </p>

                    <p className="text-[14px] text-brand-dark-blue/80  ">
                      Type: Persistent Cookies
                    </p>

                    <p className="text-[14px] text-brand-dark-blue/80  ">
                      Administered by : Us
                    </p>

                    <p className="leading-6 tracking-wider  ">
                      Purpose: These Cookies allow us to remember choices You
                      make when You use the Website, such as remembering your
                      login details or language preference. The purpose of these
                      Cookies is to provide You with a more personal experience
                      and to avoid You having to re-enter your preferences every
                      time You use the Website.
                    </p>
                  </div>

                  <p className="leading-6 tracking-wider  ">
                    For more information about the cookies we use and your
                    choices regarding cookies, please visit our Cookies Policy
                    or the Cookies section of our Privacy Policy.
                  </p>
                </div>

                <div className="space-y-4 ">
                  <p className="font-[500] text-[19px] text-brand-blue dark:text-brand-white  ">
                    Use of Your Personal Data
                  </p>
                  <p className="leading-6 tracking-wider  ">
                    The Company may use Personal Data for the following
                    purposes:
                  </p>

                  <div className="py-2 pl-10 space-y-2 ">
                    <p className="leading-6 tracking-wider  ">
                      <span className="font-[700]  ">
                        To provide and maintain our Service,
                      </span>{" "}
                      including to monitor the usage of our Service.
                    </p>

                    <p className="leading-6 tracking-wider  ">
                      <span className="font-[700]  ">
                        To manage Your Account:
                      </span>{" "}
                      to manage Your registration as a user of the Service. The
                      Personal Data You provide can give You access to different
                      functionalities of the Service that are available to You
                      as a registered user.
                    </p>

                    <p className="leading-6 tracking-wider  ">
                      <span className="font-[700]  ">
                        For the performance of a contract:
                      </span>{" "}
                      the development, compliance and undertaking of the
                      purchase contract for the products, items or services You
                      have purchased or of any other contract with Us through
                      the Service.
                    </p>

                    <p className="leading-6 tracking-wider  ">
                      <span className="font-[700]  ">To contact You:</span> To
                      contact You by email, telephone calls, SMS, or other
                      equivalent forms of electronic communication, such as a
                      mobile application&rsquo;s push notifications regarding
                      updates or informative communications related to the
                      functionalities, products or contracted services,
                      including the security updates, when necessary or
                      reasonable for their implementation.
                    </p>

                    <p className="leading-6 tracking-wider  ">
                      <span className="font-[700]  ">To provide You :</span>{" "}
                      with news, special offers and general information about
                      other goods, services and events which we offer that are
                      similar to those that you have already purchased or
                      enquired about unless You have opted not to receive such
                      information.
                    </p>

                    <p className="leading-6 tracking-wider  ">
                      <span className="font-[700] ">
                        For business transfers:
                      </span>{" "}
                      We may use Your information to evaluate or conduct a
                      merger, divestiture, restructuring, reorganization,
                      dissolution, or other sale or transfer of some or all of
                      Our assets, whether as a going concern or as part of
                      bankruptcy, liquidation, or similar proceeding, in which
                      Personal Data held by Us about our Service users is among
                      the assets transferred.
                    </p>

                    <p className="leading-6 tracking-wider  ">
                      <span className="font-[700] ">For other purposes:</span>{" "}
                      We may use Your information for other purposes, such as
                      data analysis, identifying usage trends, determining the
                      effectiveness of our promotional campaigns and to evaluate
                      and improve our Service, products, services, marketing and
                      your experience.
                    </p>
                  </div>

                  <p className="leading-6 tracking-wider  ">
                    We may share Your personal information in the following
                    situations:
                  </p>

                  <div className="py-2 pl-10 space-y-2 ">
                    <p className="leading-6 tracking-wider  ">
                      <span className="font-[700] ">
                        With Service Providers:
                      </span>{" "}
                      We may share Your personal information with Service
                      Providers to monitor and analyze the use of our Service,
                      to contact You.
                    </p>

                    <p className="leading-6 tracking-wider  ">
                      <span className="font-[700] ">
                        For business transfers:
                      </span>{" "}
                      We may share or transfer Your personal information in
                      connection with, or during negotiations of, any merger,
                      sale of Company assets, financing, or acquisition of all
                      or a portion of Our business to another company.
                    </p>

                    <p className="leading-6 tracking-wider  ">
                      <span className="font-[700] ">With Affiliates:</span> We
                      may share Your information with Our affiliates, in which
                      case we will require those affiliates to honor this
                      Privacy Policy. Affiliates include Our parent company and
                      any other subsidiaries, joint venture partners or other
                      companies that We control or that are under common control
                      with Us.
                    </p>

                    <p className="leading-6 tracking-wider  ">
                      <span className="font-[700] ">
                        With business partners:
                      </span>{" "}
                      We may share Your information with Our business partners
                      to offer You certain products, services or promotions.
                    </p>

                    <p className="leading-6 tracking-wider  ">
                      <span className="font-[700] ">With other users:</span>{" "}
                      when You share personal information or otherwise interact
                      in the public areas with other users, such information may
                      be dived by all users and may be publicly distributed
                      outside.
                    </p>

                    <p className="leading-6 tracking-wider  ">
                      <span className="font-[700] ">With Your consent:</span> We
                      may disclose Your personal information for any other
                      purpose with Your consent.
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <p
                    id="retention-of-your-personal-data"
                    className="font-[500] text-[19px] text-brand-blue dark:text-brand-white  "
                  >
                    Retention of Your Personal Data
                  </p>
                  <p className="leading-6 tracking-wider  ">
                    The Company will retain Your Personal Data only for as long
                    as is necessary for the purposes set out in this Privacy
                    Policy. We will retain and use Your Personal Data to the
                    extent necessary to comply with our legal obligations (for
                    example, if we are required to retain your data to comply
                    with applicable laws), resolve disputes, and enforce our
                    legal agreements and policies.
                  </p>
                  <p className="leading-6 tracking-wider  ">
                    The Company will also retain Usage Data for internal
                    analysis purposes. Usage Data is generally retained for a
                    shorter period of time, except when this data is used to
                    strengthen the security or to improve the functionality of
                    Our Service, or We are legally obligated to retain this data
                    for longer time periods.
                  </p>
                </div>

                <div className="space-y-4">
                  <p
                    id="transfer-of-your-personal-data"
                    className="font-[500] text-[19px] text-brand-blue dark:text-brand-white  "
                  >
                    Transfer of Your Personal Data
                  </p>
                  <p className="leading-6 tracking-wider  ">
                    Your information, including Personal Data, is processed at
                    the Company&rsquo;s operating offices and in any other
                    places where the parties involved in the processing are
                    located. It means that this information may be transferred
                    to — and maintained on — computers located outside of Your
                    state, province, country or other governmental jurisdiction
                    where the data protection laws may differ than those from
                    Your jurisdiction.
                  </p>
                  <p className="leading-6 tracking-wider  ">
                    Your consent to this Privacy Policy followed by Your
                    submission of such information represents Your agreement to
                    that transfer.
                  </p>
                  <p className="leading-6 tracking-wider  ">
                    The Company will take all steps reasonably necessary to
                    ensure that Your data is treated securely and in accordance
                    with this Privacy Policy and no transfer of Your Personal
                    Data will take place to an organization or a country unless
                    there are adequate controls in place including the security
                    of Your data and other personal information.
                  </p>
                </div>

                <div className="space-y-4">
                  <p
                    id="disclosure-of-your-personal-data"
                    className="font-[500] text-[19px] text-brand-blue dark:text-brand-white  "
                  >
                    Delete Your Personal Data
                  </p>
                  <p className="leading-6 tracking-wider  ">
                    You have the right to delete or request that We assist in
                    deleting the Personal Data that We have collected about You.
                  </p>
                  <p className="leading-6 tracking-wider  ">
                    Our Service may give You the ability to delete certain
                    information about You from within the Service.
                  </p>
                  <p className="leading-6 tracking-wider  ">
                    You may update, amend, or delete Your information at any
                    time by signing in to Your Account, if you have one, and
                    visiting the account settings section that allows you to
                    manage Your personal information. You may also contact Us to
                    request access to, correct, or delete any personal
                    information that You have provided to Us.
                  </p>
                  <p className="leading-6 tracking-wider  ">
                    Please note, however, that We may need to retain certain
                    information when we have a legal obligation or lawful basis
                    to do so.
                  </p>
                </div>

                <div className="space-y-4">
                  <p
                    id="disclosure-of-your-personal-data"
                    className="font-[500] text-[19px] text-brand/80 dark dark:text-brand-white:text-brand-white "
                  >
                    Disclosure Your Personal Data
                  </p>

                  <div className=" space-y-1.5 ">
                    <p className="font-[500] text-[16px] text-black dark:text-brand-white">
                      {" "}
                      Business Transactions
                    </p>
                    <p className="leading-6 tracking-wider  ">
                      If the Company is involved in a merger, acquisition or
                      asset sale, Your Personal Data may be transferred. We will
                      provide notice before Your Personal Data is transferred
                      and becomes subject to a different Privacy Policy.
                    </p>
                  </div>

                  <div className=" space-y-1.5 ">
                    <p className="font-[500] text-[16px] text-black dark:text-brand-white ">
                      Law enforcement
                    </p>
                    <p className="leading-6 tracking-wider  ">
                      Under certain circumstances, the Company may be required
                      to disclose Your Personal Data if required to do so by law
                      or in response to valid requests by public authorities
                      (e.g. a court or a government agency).
                    </p>
                  </div>

                  <div className=" space-y-1.5 ">
                    <p className="font-[500] text-[16px] text-black dark:text-brand-white     ">
                      Other legal requirements
                    </p>
                    <p className="leading-6 tracking-wider  ">
                      The Company may disclose Your Personal Data in the good
                      faith belief that such action is necessary to:
                    </p>

                    <div className="space-y-1.5 pl-3 py-2  ">
                      <p className="text-sm text-body-text ">
                        Comply with a legal Obligation
                      </p>
                      <p className="text-sm text-body-text ">
                        Protect and defend the rights or property of the Company
                      </p>
                      <p className="text-sm text-body-text ">
                        Prevent or investigate possible wrongdoing in connection
                        with the Service
                      </p>
                      <p className="text-sm text-body-text ">
                        Protect the personal safety of Users of the Service or
                        the public
                      </p>
                      <p className="text-sm text-body-text ">
                        Protect against legal liability
                      </p>
                    </div>
                  </div>

                  <div className=" space-y-1.5 ">
                    <p className="font-[500] text-[16px] text-black dark:text-brand-white">
                      Security of Your Personal Data
                    </p>
                    <p className="leading-6 tracking-wider  ">
                      The security of Your Personal Data is important to Us, but
                      remember that no method of transmission over the Internet,
                      or method of electronic storage is 100% secure. While We
                      strive to use commercially acceptable means to protect
                      Your Personal Data, We cannot guarantee its absolute
                      security.
                    </p>
                  </div>
                </div>

                <div className=" space-y-1.5 ">
                  <p
                    id="disclosure-of-your-personal-data"
                    className="font-[500] text-[19px] text-brand-blue dark:text-brand-white  "
                  >
                    Children&rsquo;s Privacy
                  </p>
                  <p className="leading-6 tracking-wider  ">
                    Our Service does not address anyone under the age of 13. We
                    do not knowingly collect personally identifiable information
                    from anyone under the age of 13. If You are a parent or
                    guardian and You are aware that Your child has provided Us
                    with Personal Data, please contact Us. If We become aware
                    that We have collected Personal Data from anyone under the
                    age of 13 without verification of parental consent, We take
                    steps to remove that information from Our servers.
                  </p>
                  <p className="leading-6 tracking-wider  ">
                    If We need to rely on consent as a legal basis for
                    processing Your information and Your country requires
                    consent from a parent, We may require Your parent&rsquo;s
                    consent before We collect and use that information.
                  </p>
                </div>

                <div className=" space-y-1.5 ">
                  <p
                    id="disclosure-of-your-personal-data"
                    className="font-[500] text-[19px] text-brand-blue dark:text-brand-white "
                  >
                    Links to Other Websites
                  </p>
                  <p className="leading-6 tracking-wider  ">
                    Our Service may contain links to other websites that are not
                    operated by Us. If You click on a third party link, You will
                    be directed to that third party&rsquo;s site. We strongly
                    advise You to rediv the Privacy Policy of every site You
                    visit.
                  </p>
                  <p className="leading-6 tracking-wider  ">
                    We have no control over and assume no responsibility for the
                    content, privacy policies or practices of any third party
                    sites or services.
                  </p>
                </div>

                <div className=" space-y-1.5 ">
                  <p
                    id="changes-to-this-privacy-policy"
                    className="font-[500] text-[19px] text-brand-blue dark:text-brand-white "
                  >
                    Changes to this Privacy Policy
                  </p>
                  <p className="leading-6 tracking-wider  ">
                    We may update Our Privacy Policy from time to time. We will
                    notify You of any changes by posting the new Privacy Policy
                    on this page.
                  </p>
                  <p className="leading-6 tracking-wider  ">
                    We will let You know via email and/or a prominent notice on
                    Our Service, prior to the change becoming effective and
                    update the &quot;Last updated&quot; date at the top of this
                    Privacy Policy.
                  </p>
                  <p className="leading-6 tracking-wider  ">
                    You are advised to read this Privacy Policy periodically for
                    any changes. Changes to this Privacy Policy are effective
                    when they are posted on this page.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <p
                    id="contact-us"
                    className="font-[500] text-[19px] text-brand-blue dark:text-brand-white  "
                  >
                    Contact Us
                  </p>
                  <p className="leading-6 tracking-wider  mt-0.5 ">
                    If you have any questions about these Terms and Conditions,
                    You can contact us by email at{" "}
                    <Link href={"mailto:hello@iampennywise.com"}>
                      <span className="text-brand-blue dark:text-brand-light-blue dark:hover:text-brand-green ">
                        hello@iampennywise.com
                      </span>
                    </Link>
                  </p>
                </div>

                {/* <div className="pb-0"></div> */}
              </div>
            </div>

            <div className=" lg:w-2/5 h-[60vh] overflow-auto lg:sticky top-[10%] ">
              <div className="bg-neutral-100 dark:bg-brand-blue dark:bg-opacity-20 p-8 rounded-xl space-y-6 sticky top-0">
                <h4 className="text-[1.25rem] font-[500] text-brand-blue dark:text-brand-white ">
                  Table of Contents
                </h4>
                <div className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <button
                      key={index}
                      // href={`#${item.id}`}
                      onClick={(e) => handleScroll(e as any, item.id)}
                      className="text-[#222] dark:text-neutral-300 hover:text-brand-blue dark:hover:text-brand-green w-full text-start "
                    >
                      <span className="">{index + 1}. </span>
                      <span className="pl-2.5 ">{item.title}</span>
                    </button>
                  ))}
                </div>
                <hr className=" " />

                <button
                  onClick={(e) => handleScroll(e as any, "top")}
                  className="text-[#222] dark:text-neutral-300 hover:text-brand-blue dark:hover:text-brand-green w-full text-start font-[500] "
                >
                  Back to Top
                </button>
              </div>
              {/*  */}
            </div>
          </div>
        </div>

        <Footer />
      </>
    </>
  );
};

export default BlogPost;
