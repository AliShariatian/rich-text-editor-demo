import { type HTMLElementType } from "react";
import { type HTMLReactParserOptions, Element } from "html-react-parser";
import { CodeBlock } from "./code-block";

export const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element) {
      switch (domNode.name as HTMLElementType) {
        case "pre":
          const code = domNode.attribs.code;
          const language = domNode.attribs.language;
          const showLineNumbers = domNode.attribs.linenumbers === "true";
          return <CodeBlock code={code} language={language} showLineNumbers={showLineNumbers} />;

        default:
          break;
      }
    }
  },
};
