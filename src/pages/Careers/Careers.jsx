import React from "react";
import { useNavigate } from "react-router-dom";

const Careers = () => {
    const navigate = useNavigate();

    return (
        <>
            <section className="bg-[linear-gradient(97.84deg,#0C1F2B_0%,#00426C_51.91%,#0C212E_100.9%)] min-h-dvh flex flex-col items-center justify-center md:p-[30px] p-[20px]">
                   <div className="w-full  max-w-[1050px] mx-auto relative">
                     <button
                        onClick={() => navigate("/")}
                        className="text-white px-4 py-2 rounded-lg"
                    >
                        ← Back
                    </button>
                   </div>
                <div className="p-[40px_30px] md:p-[50px] rounded-[30px] bg-[#ffffff24] max-w-[1050px] mx-auto relative">

                    {/* BACK BUTTON */}

                    <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold text-center text-white md:mb-[16px] mb-[12px]">
                        Job Opening for Computer System Analyst
                    </h2>

                    <h2 className="text-[16px] md:text-[20px] font-medium text-center text-white mb-[32px]">
                        Application Window: 01/12/2026 – 02/13/2026
                    </h2>

                    <div className="grid gap-[12px] md:gap-[16px]">
                        <p className="text-[14px] md:text-[16px] text-white tracking-[0.8px]">
                            Computer System Analyst needed w/Master’s degree or Foreign
                            Equivalent in Computer Information Sciences or Computer Science or
                            Computer Engineering and one (1) year experience as Computer
                            System Analyst performing following job duties:
                        </p>

                        <p className="text-[14px] md:text-[16px] text-white tracking-[0.6px]">
                            Evaluate the performance of pharmacy computer systems, including
                            electronic health records, pharmacy management systems and
                            identify areas for improvement. Conduct regular data quality
                            reviews in PrimeRx and EHR systems to maintain accuracy and
                            completeness. Monitor denial review outcomes and recommend
                            process improvements. Manage National Drug Code (NDC) billing
                            data fields and analyze drug-related billing denials for medical
                            necessity and coding issues. Provide technical support to
                            end-users and resolving system issues promptly. Ensure all
                            systems and processes complied with regulatory and industry
                            standards.
                        </p>

                        <p className="text-[14px] md:text-[16px] text-white">
                            Benefits: PTO
                        </p>

                        <p className="text-[14px] md:text-[16px] text-white">
                            Salary: $103,917.00 Per Year
                        </p>

                        <p className="text-[14px] md:text-[16px] text-white">
                            Mail Resumes to:
                        </p>

                        <p className="text-[14px] md:text-[16px] text-white">
                            Mahantam RX Inc., d/b/a Nates Pharmacy <br />
                            <a
                                href="https://maps.app.goo.gl/V7GqMoSJYwtWCe4c9"
                                target="_blank"
                                rel="noreferrer"
                                className="underline underline-offset-4"
                            >
                                376 Van Brunt Street, Brooklyn, NY 11231
                            </a>
                        </p>

                        <p className="text-[16px] text-white">
                            Job Location: Brooklyn, NY
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Careers;
