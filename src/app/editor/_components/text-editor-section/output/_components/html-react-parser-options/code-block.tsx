import { FC, ReactElement } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import { CopyButton } from "../copy-button";
import { CodeLangName } from "../code-lang-name";
import { githubDark } from "../../theme";

type Props = {
  language: string;
  showLineNumbers: boolean;
  code: string;
};

export const CodeBlock: FC<Props> = ({ code, language, showLineNumbers }): ReactElement => {
  return (
    <div className="group/code relative">
      <CopyButton text={code} />

      <SyntaxHighlighter
        language={language}
        style={githubDark}
        customStyle={{ direction: "ltr" }}
        codeTagProps={{ className: "flex flex-col gap-0" }}
        wrapLines
        showLineNumbers={showLineNumbers}
        lineNumberStyle={{ color: "#ccc", minWidth: "2.5em" }}
        lineProps={{
          className: "hover:bg-gray-800",
          style: { paddingLeft: showLineNumbers ? "" : "16px" },
        }}
      >
        {code}
      </SyntaxHighlighter>

      <CodeLangName language={language} />
    </div>
  );
};
