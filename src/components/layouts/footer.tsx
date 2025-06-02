import { FC, ReactElement } from "react";
import Link from "next/link";
import { GithubIcon } from "lucide-react";

import { Container } from "./container";

export const Footer: FC = (): ReactElement => {
  return (
    <footer className="mt-10 h-16 border-t border-t-zinc-800">
      <Container className="flex h-full items-center">
        <Link
          target="_blank"
          href="https://github.com/AliShariatian/rich-text-editor-demo"
          className="desktop:text-base mx-auto flex items-center gap-2 text-sm text-cyan-500 transition-colors hover:text-cyan-300"
        >
          Source code
          <GithubIcon className="relative bottom-0.5 size-5" />
        </Link>
      </Container>
    </footer>
  );
};
