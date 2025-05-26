import { FC, ReactElement } from "react";
import Link from "next/link";

import { ExpandableLink } from "@/components/ui/expandable-link";

export const EmptyMessage: FC = (): ReactElement => {
  return (
    <section className="mt-40 h-96 w-full">
      <div className="flex flex-col items-center justify-center gap-20">
        <p className="text-center text-4xl leading-14 font-black">
          محتوایی برای نمایش وجود ندارد! <br /> برای شروع، به صفحه{" "}
          <Link href="/editor" className="text-cyan-400 transition-colors hover:text-cyan-300">
            ادیتور
          </Link>{" "}
          بروید...
        </p>

        <ExpandableLink text="صفحه ادیتور" href="/editor" />
      </div>
    </section>
  );
};
