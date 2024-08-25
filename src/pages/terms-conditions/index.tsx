import PageLayout from "@/layout/PageLayout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

type Props = {};

const index = (props: Props) => {
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
      title: "Interpretation and Definitions",
      id: "interpretation-and-definitions",
    },
    {
      title: "Acknowledgment",
      id: "acknowledgment",
    },
    {
      title: "Links to Other Websites",
      id: "links-to-other-websites",
    },
    {
      title: "Termination",
      id: "termination",
    },
    {
      title: "Refund Policy",
      id: "refund-policy",
    },
    {
      title: "Limitation of Liability",
      id: "limitation-of-liability",
    },
    {
      title: "AS IS and AS AVAILABLE Disclaimer",
      id: "as-is-and-as-available-disclaimer",
    },
    {
      title: "Governing Law",
      id: "governing-law",
    },
    {
      title: "Dispute Resolution",
      id: "dispute-resolution",
    },
    {
      title: "For European Union (EU) Users",
      id: "for-european-union-eu-users",
    },
    {
      title: "United States Legal Compliance",
      id: "united-states-legal-compliance",
    },
    {
      title: "Severability and Waiver",
      id: "severability-and-waiver",
    },
    {
      title: "Translation Interpretation",
      id: "translation-interpretation",
    },
    {
      title: "Changes to These Terms and Conditions",
      id: "changes-to-these-terms-and-conditions",
    },
    {
      title: "Contact Us",
      id: "contact-us",
    },
  ];

  return (
    <>
      <Head>
        <title>Pennywise | Terms & Conditions </title>
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
              <h1 className="font-[600] text-3xl md:text-5xl dark:text-brand-whitet-brand-blue dark:text-brand-white tracking-wider  ">
                Terms & Conditions
              </h1>
              <p className="dark:text-brand-light-blue font-[400] text-base text-[#222] tracking-wider mt-0.5 ">
                *Please read these terms and conditions carefully before using
                Our Service.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row justify-between lg:space-x-8 ">
            <div className="lg:w-3/5 min-h-[1000px] md:h-[600vh] mt-8 lg:mt-0 ">
              <div className="w-full space-y-6 text-[#646464] dark:text-neutral-300 ">
                <div className="w-full space-y-6 max-w-3xl ">
                  <p
                    id="interpretation-and-definitions"
                    className="font-bricolageGrotesque text-[21px] text-brand-blue/90 dark:text-neutral-200 font-[600]   "
                  >
                    Interpretation and Definitions
                  </p>

                  <div className="space-y-1.5">
                    <p className="font-bricolageGrotesque text-[19px] font-[500] dark:text-neutral-200 text-brand-blue   ">
                      Interpretation
                    </p>
                    <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                      The words of which the initial letter is capitalized have
                      meanings defined under the following conditions. The
                      following definitions shall have the same meaning
                      regardless of whether they appear in singular or in
                      plural.
                    </p>
                  </div>

                  <div className="space-y-4 ">
                    <div className="space-y-1.5">
                      <p className="font-bricolageGrotesque text-[19px] font-[500] dark:text-neutral-200 text-brand-blue   ">
                        Definitions
                      </p>
                      <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                        For the purposes of these Terms and Conditions:
                      </p>
                    </div>

                    <div className="space-y-4">
                      <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                        <span className="font-bold  p-brand-dark-blue ">
                          Application
                        </span>{" "}
                        means the software program provided by the Company
                        downloaded by You on any electronic device, named
                        Pennywise.
                      </p>

                      <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                        <span className="font-bold  p-brand-dark-blue ">
                          Application Store
                        </span>{" "}
                        means the digital distribution service operated and
                        developed by Apple Inc. (Apple App Store) or Google Inc.
                        (Google Play Store) in which the Application has been
                        downloaded.
                      </p>

                      <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                        <span className="font-bold  p-brand-dark-blue ">
                          Affiliate
                        </span>{" "}
                        means an entity that controls, is controlled by or is
                        under common control with a party, where
                        &quot;control&quot; means ownership of 50% or more of
                        the shares, equity interest or other securities entitled
                        to vote for election of directors or other managing
                        authority.
                      </p>

                      <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                        <span className="font-bold  p-brand-dark-blue ">
                          Country
                        </span>{" "}
                        refers to: Nigeria
                      </p>

                      <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                        <span className="font-bold  p-brand-dark-blue ">
                          Company
                        </span>{" "}
                        (referred to as either &quot;the Company&quot;,
                        &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in
                        this Agreement) refers to PENNYTECH @JETS GLOBAL
                        LIMITED, 6 OBOKUN STREET ILUPEJU.
                      </p>

                      <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                        <span className="font-bold  p-brand-dark-blue ">
                          Device
                        </span>{" "}
                        means any device that can access the Service such as a
                        computer, a cellphone or a digital tablet.
                      </p>

                      <span className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                        <p className="font-bold  p-brand-dark-blue ">Service</p>{" "}
                        refers to the Application or the Website or both.
                      </span>

                      <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                        <span className="font-bold  p-brand-dark-blue ">
                          Terms and Conditions
                        </span>{" "}
                        (also referred as &quot;Terms&quot;) mean these Terms
                        and Conditions that form the entire agreement between
                        You and the Company regarding the use of the Service.
                      </p>

                      <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                        <span className="font-bold  p-brand-dark-blue ">
                          Third-party Social Media Service
                        </span>{" "}
                        means any services or content (including data,
                        information, products or services) provided by a
                        third-party that may be displayed, included or made
                        available by the Service.
                      </p>

                      <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                        <span className="font-bold  p-brand-dark-blue ">
                          Website
                        </span>{" "}
                        refers to Pennywise, accessible from{" "}
                        <Link href="https://www.iampennywise.com">
                          <span className="text-brand-blue dark:text-brand-white dark:hover:text-brand-green ">
                            https://www.iampennywise.com
                          </span>
                        </Link>
                      </p>

                      <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                        <span className="font-bold  p-brand-dark-blue ">
                          You
                        </span>{" "}
                        means the individual accessing or using the Service, or
                        the company, or other legal entity on behalf of which
                        such individual is accessing or using the Service, as
                        applicable.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p
                      id="acknowledgment"
                      className="font-bricolageGrotesque text-[19px] font-[500] dark:text-neutral-200 text-brand-blue   "
                    >
                      Acknowledgment
                    </p>
                    <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                      These are the Terms and Conditions governing the use of
                      this Service and the agreement that operates between You
                      and the Company. These Terms and Conditions set out the
                      rights and obligations of all users regarding the use of
                      the Service.
                    </p>
                    <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                      Your access to and use of the Service is conditioned on
                      Your acceptance of and compliance with these Terms and
                      Conditions. These Terms and Conditions apply to all
                      visitors, users and others who access or use the Service.
                    </p>
                    <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                      By accessing or using the Service You agree to be bound by
                      these Terms and Conditions. If You disagree with any part
                      of these Terms and Conditions then You may not access the
                      Service.
                    </p>
                    <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                      You represent that you are over the age of 18. The Company
                      does not permit individuals under 18 to use the Service.
                    </p>
                    <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                      Your access to and use of the Service is also conditioned
                      on Your acceptance of and compliance with the Privacy
                      Policy of the Company. Our Privacy Policy describes Our
                      policies and procedures on the collection, use and
                      disclosure of Your personal information when You use the
                      Application or the Website and tells You about Your
                      privacy rights and how the law protects You. Please read
                      Our Privacy Policy carefully before using Our Service.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p
                      id="links-to-other-websites"
                      className="font-bricolageGrotesque text-[19px] font-[500] dark:text-neutral-200 text-brand-blue   "
                    >
                      Links to Other Websites
                    </p>
                    <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                      Our Service may contain links to third-party web sites or
                      services that are not owned or controlled by the Company.
                    </p>
                    <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                      The Company has no control over, and assumes no
                      responsibility for, the content, privacy policies, or
                      practices of any third party web sites or services. You
                      further acknowledge and agree that the Company shall not
                      be responsible or liable, directly or indirectly, for any
                      damage or loss caused or alleged to be caused by or in
                      connection with the use of or reliance on any such
                      content, goods or services available on or through any
                      such web sites or services.
                    </p>
                    <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                      We strongly advise You to read the terms and conditions
                      and privacy policies of any third-party web sites or
                      services that You visit.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p
                      id="termination"
                      className="font-bricolageGrotesque text-[19px] font-[500] dark:text-neutral-200 text-brand-blue   "
                    >
                      Termination
                    </p>
                    <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                      We may terminate or suspend Your access immediately,
                      without prior notice or liability, for any reason
                      whatsoever, including without limitation if You breach
                      these Terms and Conditions.
                    </p>
                    <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                      Upon termination, Your right to use the Service will cease
                      immediately.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p
                      id="refund-policy"
                      className="font-bricolageGrotesque text-[19px] font-[500] dark:text-neutral-200 text-brand-blue   "
                    >
                      Refund Policy
                    </p>
                    <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                      We do not offer refund policies on any of our subscription
                      plans.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p
                      id="limitation-of-liability"
                      className="font-bricolageGrotesque text-[19px] font-[500] dark:text-neutral-200 text-brand-blue   "
                    >
                      Limitation of Liability
                    </p>
                    <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                      Notwithstanding any damages that You might incur, the
                      entire liability of the Company and any of its suppliers
                      under any provision of this Terms and Your exclusive
                      remedy for all of the foregoing shall be limited to the
                      amount actually paid by You through the Service or 100 USD
                      if You haven&apos;t purchased anything through the
                      Service.
                    </p>
                    <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                      To the maximum extent permitted by applicable law, in no
                      event shall the Company or its suppliers be liable for any
                      special, incidental, indirect, or consequential damages
                      whatsoever (including, but not limited to, damages for
                      loss of profits, loss of data or other information, for
                      business interruption, for personal injury, loss of
                      privacy arising out of or in any way related to the use of
                      or inability to use the Service, third-party software
                      and/or third-party hardware used with the Service, or
                      otherwise in connection with any provision of this Terms),
                      even if the Company or any supplier has been advised of
                      the possibility of such damages and even if the remedy
                      fails of its essential purpose.
                    </p>
                    <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                      Some states do not allow the exclusion of implied
                      warranties or limitation of liability for incidental or
                      consequential damages, which means that some of the above
                      limitations may not apply. In these states, each
                      party&apos;s liability will be limited to the greatest
                      extent permitted by law.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p
                      id="as-is-and-as-available-disclaimer"
                      className="font-bricolageGrotesque text-[19px] font-[500] dark:text-neutral-200 text-brand-blue   "
                    >
                      &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo;
                      Disclaimer
                    </p>
                    <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                      The Service is provided to You &quot;AS IS&quot; and
                      &quot;AS AVAILABLE&quot; and with all faults and defects
                      without warranty of any kind. To the maximum extent
                      permitted under applicable law, the Company, on its own
                      behalf and on behalf of its Affiliates and its and their
                      respective licensors and service providers, expressly
                      disclaims all warranties, whether express, implied,
                      statutory or otherwise, with respect to the Service,
                      including all implied warranties of merchantability,
                      fitness for a particular purpose, title and
                      non-infringement, and warranties that may arise out of
                      course of dealing, course of performance, usage or trade
                      practice. Without limitation to the foregoing, the Company
                      provides no warranty or undertaking, and makes no
                      representation of any kind that the Service will meet Your
                      requirements, achieve any intended results, be compatible
                      or work with any other software, applications, systems or
                      services, operate without interruption, meet any
                      performance or reliability standards or be error free or
                      that any errors or defects can or will be corrected.
                    </p>
                    <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                      Without limiting the foregoing, neither the Company nor
                      any of the company&rsquo;s provider makes any
                      representation or warranty of any kind, express or
                      implied: (i) as to the operation or availability of the
                      Service, or the information, content, and materials or
                      products included thereon; (ii) that the Service will be
                      uninterrupted or error-free; (iii) as to the accuracy,
                      reliability, or currency of any information or content
                      provided through the Service; or (iv) that the Service,
                      its servers, the content, or e-mails sent from or on
                      behalf of the Company are free of viruses, scripts, trojan
                      horses, worms, malware, timebombs or other harmful
                      components.
                    </p>
                    <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                      Some jurisdictions do not allow the exclusion of certain
                      types of warranties or limitations on applicable statutory
                      rights of a consumer, so some or all of the above
                      exclusions and limitations may not apply to You. But in
                      such a case the exclusions and limitations set forth in
                      this section shall be applied to the greatest extent
                      enforceable under applicable law.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p
                      id="governing-law"
                      className="font-bricolageGrotesque text-[19px] font-[500] dark:text-neutral-200 text-brand-blue   "
                    >
                      Governing Law
                    </p>
                    <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                      The laws of the Country, excluding its conflicts of law
                      rules, shall govern this Terms and Your use of the
                      Service. Your use of the Application may also be subject
                      to other local, state, national, or international laws.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p
                      id="dispute-resolution"
                      className="font-bricolageGrotesque text-[19px] font-[500] dark:text-neutral-200 text-brand-blue   "
                    >
                      Dispute Resolution
                    </p>
                    <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                      If You have any concern or dispute about the Service, You
                      agree to first try to resolve the dispute informally by
                      contacting the Company.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p
                      id="for-european-union-eu-users"
                      className="font-bricolageGrotesque text-[19px] font-[500] dark:text-neutral-200 text-brand-blue   "
                    >
                      For European Union (EU) Users
                    </p>
                    <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                      If You are a European Union consumer, you will benefit
                      from any mandatory provisions of the law of the country in
                      which You are resident.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p
                      id="united-states-legal-compliance"
                      className="font-bricolageGrotesque text-[19px] font-[500] dark:text-neutral-200 text-brand-blue   "
                    >
                      United States Legal Compliance
                    </p>
                    <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                      You represent and warrant that (i) You are not located in
                      a country that is subject to the United States government
                      embargo, or that has been designated by the United States
                      government as a &#34;terrorist supporting&#34; country,
                      and (ii) You are not listed on any United States
                      government list of prohibited or restricted parties.
                    </p>
                  </div>

                  <p
                    id="severability-and-waiver"
                    className="font-bricolageGrotesque text-[21px] dark:text-neutral-200 text-brand-blue font-[500]   "
                  >
                    Severability and Waiver
                  </p>

                  <div className="space-y-4">
                    <p className="font-bricolageGrotesque text-[19px] font-[500] dark:text-neutral-200 text-brand-blue   ">
                      Severability
                    </p>
                    <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                      If any provision of these Terms is held to be
                      unenforceable or invalid, such provision will be changed
                      and interpreted to accomplish the objectives of such
                      provision to the greatest extent possible under applicable
                      law and the remaining provisions will continue in full
                      force and effect.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="font-bricolageGrotesque text-[19px] font-[500] dark:text-neutral-200 text-brand-blue   ">
                      Waiver
                    </p>
                    <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                      Except as provided herein, the failure to exercise a right
                      or to require performance of an obligation under these
                      Terms shall not affect a party&apos;s ability to exercise
                      such right or require such performance at any time
                      thereafter nor shall the waiver of a breach constitute a
                      waiver of any subsequent breach.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p
                      id="translation-interpretation"
                      className="font-bricolageGrotesque text-[19px] font-[500] dark:text-neutral-200 text-brand-blue   "
                    >
                      Translation Interpretation
                    </p>
                    <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                      These Terms and Conditions may have been translated if We
                      have made them available to You on our Service. You agree
                      that the original English p shall prevail in the case of a
                      dispute.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p
                      id="changes-to-these-terms-and-conditions"
                      className="font-bricolageGrotesque text-[19px] font-[500] dark:text-neutral-200 text-brand-blue   "
                    >
                      Changes to These Terms and Conditions
                    </p>
                    <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                      We reserve the right, at Our sole discretion, to modify or
                      replace these Terms at any time. If a revision is material
                      We will make reasonable efforts to provide at least 30
                      days&apos; notice prior to any new terms taking effect.
                      What constitutes a material change will be determined at
                      Our sole discretion.
                    </p>
                    <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                      By continuing to access or use Our Service after those
                      revisions become effective, You agree to be bound by the
                      revised terms. If You do not agree to the new terms, in
                      whole or in part, please stop using the website and the
                      Service.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p
                      id="contact-us"
                      className="font-bricolageGrotesque text-[19px] font-[500] dark:text-neutral-200 text-brand-blue   "
                    >
                      Contact Us
                    </p>
                    <p className="dark:text-neutral-300 text-[#222] tracking-wider leading-6  mt-0.5 ">
                      If you have any questions about these Terms and
                      Conditions, You can contact us by email at{" "}
                      <Link
                        href={"mailto:hello@iampennywise.com"}
                        target="_blank"
                      >
                        <span className="text-brand-blue dark:text-brand-green ">
                          hello@iampennywise.com
                        </span>
                      </Link>
                    </p>
                  </div>

                  {/* <div className="pb-0"></div> */}
                </div>
                {/*  */}
              </div>
            </div>

            <div className="lg:w-2/5 h-[80vh] md:h-[70vh] overflow-auto lg:sticky top-[10%] ">
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

export default index;
