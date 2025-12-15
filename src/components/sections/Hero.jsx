// src/components/sections/Hero.jsx
import Image from "next/image";
import headshot from "../../assets/images/headshots/james-front.jpg";
import githubIcon from "@/assets/images/icons/github-mark.png";
import linkedInIcon from "@/assets/images/icons/linkedIn.png";
import resumeIcon from "@/assets/images/icons/paper.png";

export default function Hero() {
    return (
        <>
            <div className="py-16 bg-white">
                <div className="container-max flex flex-col md:flex-row items-center gap-8">
                    {/* Headshot: circular mask + control via scale and object-position */}
                    <div className="w-50 h-50 rounded-full overflow-hidden flex-shrink-0">
                        {/* Using fill requires parent relative sizing; here we use fixed width/height instead */}
                        <Image
                            src={headshot}
                            width={200}
                            height={200}
                            className="object-cover -translate-y-1"
                            style={{ transform: "translateY(-15%)" }}
                            alt="James"
                        />
                    </div>

                    <div>
                        <h1 className="text-slate-900 text-4xl">James Forman</h1>
                        <p className="mt-3 text-lg text-slate-900">
                            Software Engineer | iOS Developer | BSCS ’26
                        </p>

                        <div className="mt-4 flex gap-6">
                            <div className="relative group inline-block">
                                <a
                                    href="https://www.github.com/forman37"
                                    className="inline-flex items-center justify-center w-10 h-10 rounded-full overflow-hidden bg-gray-200 hover:brightness-110"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={githubIcon}
                                        width={200}
                                        height={200}
                                        alt="GitHub"
                                        className="w-full h-full object-cover"
                                    />
                                </a>
                                <div
                                    className="
                                      absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                                      px-2 py-1 rounded-md text-xs text-white bg-black
                                      opacity-0 translate-y-1
                                      group-hover:opacity-100 group-hover:translate-y-0
                                      transition-all duration-200
                                    "
                                >
                                    GitHub
                                </div>
                            </div>
                            <div className="relative group inline-block">
                                <a
                                    href="https://www.linkedin.com/in/james-forman-349b026a/"
                                    className="inline-flex items-center justify-center w-10 h-10 rounded-full overflow-hidden bg-gray-200 hover:brightness-110"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={linkedInIcon}
                                        width={200}
                                        height={200}
                                        alt="LinkedIn"
                                        className="w-full h-full object-cover"
                                    />
                                </a>
                                <div
                                    className="
                                      absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                                      px-2 py-1 rounded-md text-xs text-white bg-black
                                      opacity-0 translate-y-1
                                      group-hover:opacity-100 group-hover:translate-y-0
                                      transition-all duration-200
                                    "
                                >
                                    LinkedIn
                                </div>
                            </div>
                            <div className="relative group inline-block">
                                <a
                                    href="https://docs.google.com/document/d/1DvV2LoatUyJ__o8LhiQoXfMadojkUn_QT_IFKBJ5aLQ/export?format=pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-black inline-flex items-center justify-center w-10 h-10 rounded-full overflow-hidden brightness-110"
                                >
                                    <Image
                                        src={resumeIcon}
                                        width={200}
                                        height={200}
                                        alt="Download Resume"
                                        className="w-full h-full object-cover hover:brightness-210"
                                    />
                                </a>
                                <div
                                    className="
                                      absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                                      px-2 py-1 rounded-md text-xs text-white bg-black
                                      opacity-0 translate-y-1
                                      group-hover:opacity-100 group-hover:translate-y-0
                                      transition-all duration-200
                                    "
                                >
                                    Download Resume
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <hr
                    style={{
                        border: "none",
                        height: "5px",
                        backgroundColor: "black",
                    }}
                />
            </div>
        </>
    );
}
