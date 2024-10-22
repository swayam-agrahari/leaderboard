import React from 'react';

const Navbar = () => {
    return (
        <nav className="w-full bg-gradient-to-r from-neutral-800 to-green-800  px-4 py-2.5 flex justify-center items-center gap-5 md:justify-evenly lg:justify-between lg:px-0 xl:px-24 2xl:px-36">
            <a href="https://amfoss.in" className="flex-shrink-0">
                <img
                    src="/assets/amfoss_logo.png"
                    alt="amfoss logo"
                    className="w-[150px] md:w-[180px] lg:w-[180px] xl:w-[250px] h-auto"
                />
            </a>

            <a href="https://www.amrita.edu/campus/amritapuri/" className="flex-shrink-0">
                <img
                    src="/assets/amrita_logo.png"
                    alt="amrita logo"
                    className="w-[150px] md:w-[180px] lg:w-[180px] xl:w-[250px] h-auto"
                />
            </a>
        </nav>
    );
};

export default Navbar;