import React from "react";
import Link from "next/link";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <h1>Student List:</h1>

      <ul>
        <li>
          <Link href="/studentlist/ashu">Ashu</Link>
        </li>
        <li>
          <Link href="/studentlist/aman">Aman</Link>
        </li>
        <li>
          <Link href="/studentlist/neeraj">Neeraj</Link>
        </li>
        <li>
          <Link href="/studentlist/karan">Karan</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
