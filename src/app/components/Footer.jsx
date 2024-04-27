import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className=" footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
            <div className="container p-12 flex justify-between">
                <Link href={'/'} className='text-2xl md:text-5xl text-white font-semibold'>
                    <div className="w-[90px] h-[90px] lg:w-[90px] lg:h-[90px] relative">
                        <Image src="/images/avatar-3d(v2).png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                        <h1 className='px-[6rem] py-7 text-[2rem] '>Junior<span className='text-[#4E9317]'>(Dev)</span>
                        </h1>
                    </div>

                </Link>



                <p className="text-slate-600">2024 Todos os Direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;