import { FC, ReactElement } from "react";
import { Container } from "./container";

export const Footer: FC = (): ReactElement => {
  return (
    <footer className="mt-10 h-16 border-t border-t-gray-400">
      <Container className="flex h-full items-center">فوتر</Container>
    </footer>
  );
};
