import { Main } from "next/document";
import { HomeContainer } from "../styles/HomeStyles"
import Header from "../../components/Header";
import HomeHero from "../../components/HomeHero";
import Experiencias from "../../components/Experiencias";

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <HomeHero />
      <Experiencias />
    </HomeContainer>
  );
}
