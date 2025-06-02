import { FC, ReactElement } from "react";

import { ExpandableLink } from "@/components/ui/expandable-link";

export const EmptyMessage: FC = (): ReactElement => {
  return (
    <section className="mt-40 h-96 w-full">
      <div className="desktop:gap-20 flex flex-col items-center justify-center gap-14">
        <p className="desktop:text-4xl text-center text-2xl leading-14 font-black">
          محتوایی برای نمایش وجود ندارد! <br /> برای شروع، به صفحه{" "}
          <span className="text-cyan-400">ادیتور</span> بروید...
        </p>

        <div className="flex flex-col gap-4">
          <ExpandableLink text="CK Editor" href="/ckeditor" />
          <ExpandableLink text="React Tiptap Editor" href="/react-tiptap" />
        </div>
      </div>
    </section>
  );
};
