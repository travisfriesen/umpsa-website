"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { NavbarButton } from "./navbarButton";

export const Header = () => {
    return (
        <div className={`bg-green-200 w-full h-30 grid items-center justify-center grid-cols-4`}>
            <div className={`flex justify-center items-center col-start-1 col-end-2 max-h-40`}>
                <Image
                    src={`svg/logo-notext.svg`}
                    alt={`logo`}
                    width={125}
                    height={125}
                />
            </div>
            <div className={`text-gold-950 text-xl flex flex-row gap-6 col-start-2 col-end-4 justify-center items-center `}>
                <NavbarButton label="Home" />
                <NavbarButton label="Events" />
                <NavbarButton label="About" />
                <NavbarButton label="Contact" />
            </div>
        </div>
    )
}
