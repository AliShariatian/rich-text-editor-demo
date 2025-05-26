import { FC, ReactElement } from "react";
import { Container } from "./container";

export const Header: FC = (): ReactElement => {
  return (
    <header className="mb-10 h-16 border-b border-b-gray-400">
      <Container className="flex h-full items-center">هدر</Container>
    </header>
  );
};
