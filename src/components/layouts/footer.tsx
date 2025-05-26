import { FC, ReactElement } from "react";
import { Container } from "./container";

export const Footer: FC = (): ReactElement => {
  return (
    <footer className="mt-10 h-20 border-t border-t-zinc-800">
      <Container className="flex h-full items-center">فوتر</Container>
    </footer>
  );
};
