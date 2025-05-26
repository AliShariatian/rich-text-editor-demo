import { FC, ReactElement } from "react";
import { Container } from "@/components/layouts";
import { ResultSection } from "./_components/result-section";

const HomePage: FC = (): ReactElement => {
  return (
    <Container>
      <ResultSection />
    </Container>
  );
};

export default HomePage;
