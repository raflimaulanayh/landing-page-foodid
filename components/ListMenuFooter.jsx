import React from "react";
import Link from "next/link";

const ListMenuFooter = ({ urlListFooter, children }) => {
  return (
    <>
      <Link href={urlListFooter} className="text-xl text-[#677487] py-2">
        {children}
      </Link>
    </>
  );
};

export default ListMenuFooter;
