import { type HTMLReactParserOptions, Element } from "html-react-parser";
import { CodeBlock } from "./code-block";

export const htmlReactParserOptions = () => {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element) {
        switch (domNode.name) {
          case "pre":
            const language = domNode.attribs.language;
            const showLineNumbers = domNode.attribs.linenumbers === "true";
            const code = domNode.attribs.code;

            return <CodeBlock code={code} language={language} showLineNumbers={showLineNumbers} />;

          default:
            break;
        }
      }
    },
  };

  return { options };
};
