import { ListChecksIcon } from "lucide-react";

import { InsertPollDialog } from "@/components/kits/rich-editor/editor/plugins/poll-plugin";
import { ComponentPickerOption } from "@/components/kits/rich-editor/editor/plugins/picker/component-picker-option";

export function PollPickerPlugin() {
  return new ComponentPickerOption("Poll", {
    icon: <ListChecksIcon className="size-4" />,
    keywords: ["poll", "vote"],
    onSelect: (_, editor, showModal) =>
      showModal("Insert Poll", (onClose) => (
        <InsertPollDialog activeEditor={editor} onClose={onClose} />
      )),
  });
}
