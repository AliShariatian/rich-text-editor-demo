import { FC, ReactElement } from "react";

import { Container } from "../container";
import { Navigation } from "./navigation";

export const Header: FC = (): ReactElement => {
  return (
    <header className="mb-10 h-20 border-b border-b-zinc-800">
      <Container className="flex h-full items-center">
        <Navigation />
      </Container>
    </header>
  );
};
