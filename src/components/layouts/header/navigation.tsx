"use client";

import { FC, ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation: FC = (): ReactElement => {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-2">
      {items.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className={`${pathname === item.href ? "bg-cyan-950/60 text-cyan-400" : "hover:text-cyan-400"} rounded-md px-8 py-2 transition-colors hover:bg-cyan-950`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const items = [
  { label: "خانه", href: "/" },
  { label: "Reactjs Tiptap Editor", href: "/editor" },
  { label: "CKEditor", href: "/ckeditor" },
];
