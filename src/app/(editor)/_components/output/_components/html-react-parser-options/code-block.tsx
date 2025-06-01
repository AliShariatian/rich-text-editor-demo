import { FC, ReactElement } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import { githubDark } from "../../theme";
import { Options } from "./options";

type Props = {
  language: string;
  showLineNumbers: boolean;
  code: string;
};

export const CodeBlock: FC<Props> = ({ code, language, showLineNumbers }): ReactElement => {
  return (
    <div className="group/code relative">
      <Options code={code} language={language} />

      <SyntaxHighlighter
        language={language}
        style={githubDark}
        customStyle={{
          paddingTop: "1.5rem",
          direction: "ltr",
          textAlign: "left",
        }}
        codeTagProps={{
          className: "flex flex-col *:hover:bg-gray-800 *:pr-4",
        }}
        wrapLines
        showLineNumbers={showLineNumbers}
        lineNumberStyle={{
          color: "#aaa",
          minWidth: "3em",
          paddingRight: "0.75em",
          marginRight: "1em",
          borderRight: "1px solid #333",
        }}
        lineProps={{
          style: { paddingLeft: showLineNumbers ? "" : "16px" },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
