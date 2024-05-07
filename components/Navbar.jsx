import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-100">
      <div className="flex justify-between items-center max-w-[1240px] h-full  2xl:px-16">
        {/* logo */}
        <div className="w-12 h-12 relative">
          <Link href="/">
            <Image src="/assets/Logo.png" alt="Victory's Image" layout="fill" />
          </Link>
        </div>
        {/* Other content */}
        <div>
          <ul>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contacts
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
