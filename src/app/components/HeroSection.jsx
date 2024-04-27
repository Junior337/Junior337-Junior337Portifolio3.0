"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";




const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 ">
                        <span className="text-[#4E9317] bg-clip-text text-2xl sm:text-4xl lg:text-5xl font-bold">
                            Olá, eu sou o Junior <span className="text-4xl">&#128079;</span>{" "}
                            <br />
                        </span>
                        <span className="text-green-500 text-4xl sm:text-5xl lg:text-8xl font-extrabold">

                            ( <TypeAnimation
                                className="text-white"
                                sequence={[

                                    'Frontend Dev',
                                    1000,
                                    'Mobile Dev',
                                    1000,
                                    'Game Dev',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}

                                repeat={Infinity}
                            />
                            )
                        </span>
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl ">
                        Desenvolvedor frontend e apaixonado pelo processo de criação de jogos.
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#4E9317] text-white">
                            Me Contrate
                        </button>
                        <button className="px-6 py-2 w-full sm:w-fit rounded-full border-2 border-green-500 hover:bg-slate-800 text-white  mt-3">
                            Baixar CV

                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image src="/images/avatar-3d(v2).png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;