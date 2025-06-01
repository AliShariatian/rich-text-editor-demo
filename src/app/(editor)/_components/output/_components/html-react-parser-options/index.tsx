import { type HTMLElementType } from "react";
import { type HTMLReactParserOptions, Element, Text } from "html-react-parser";
import { CodeBlock } from "./code-block";

export const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element) {
      switch (domNode.name as HTMLElementType) {
        case "pre":
          if (domNode.attribs.code) {
            const code = domNode.attribs.code;
            const language = domNode.attribs.language;
            const showLineNumbers = domNode.attribs.linenumbers === "true";

            return <CodeBlock code={code} language={language} showLineNumbers={showLineNumbers} />;
          }

          const codeElement = domNode.children[0] as Element;
          const code = (codeElement.children[0] as Text).data;
          const language = codeElement.attribs.class.split("-").at(1) || "";

          return <CodeBlock code={code} language={language} showLineNumbers={true} />;

        default:
          break;
      }
    }
  },
};
