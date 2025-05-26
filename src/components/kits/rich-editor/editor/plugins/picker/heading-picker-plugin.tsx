import { Heading2Icon, Heading3Icon, Heading4Icon } from "lucide-react";
import { $getSelection, $isRangeSelection } from "lexical";
import { $setBlocksType } from "@lexical/selection";
import { $createHeadingNode } from "@lexical/rich-text";

import { ComponentPickerOption } from "@/components/kits/rich-editor/editor/plugins/picker/component-picker-option";

export function HeadingPickerPlugin({ n }: { n: 2 | 3 | 4 }) {
  return new ComponentPickerOption(`Heading ${n}`, {
    icon: <HeadingIcons n={n} />,
    keywords: ["heading", "header", `h${n}`],
    onSelect: (_, editor) =>
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $setBlocksType(selection, () => $createHeadingNode(`h${n}`));
        }
      }),
  });
}

function HeadingIcons({ n }: { n: number }) {
  switch (n) {
    case 2:
      return <Heading2Icon className="size-4" />;

    case 3:
      return <Heading3Icon className="size-4" />;

    case 4:
      return <Heading4Icon className="size-4" />;
  }
}
