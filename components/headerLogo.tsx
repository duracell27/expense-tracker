import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderLogo = () => {
  return (
    <div>
      <Link href={"/"}>
        <div className="items-center hidden lg:flex">
          <Image src="/logoipsum2.svg" width={28} height={28} alt="logo" />
          <p className="font-semibold text-white text-2xl ml-3">Finance</p>
        </div>
      </Link>
    </div>
  );
};

export default HeaderLogo;
