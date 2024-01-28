import {
  Header,
  LandingPage,
  SixSteps,
  Features,
  SustraxUses,
} from "./combined/index";
import "./App.css";
import Calculate from "./components/calculateSection/Calculate";
import Cards from "./components/cardsSection/Cards";

function App() {
  return (
    <div>
      <div className="background-image " style={{ padding: "100px 100px" }}>
        <Header />
        <LandingPage />
      </div>
      <div className="" style={{ padding: "100px 100px" }}>
        <SixSteps />
        <Features />
        <SustraxUses />
        <Calculate />
        <Cards />
      </div>
    </div>
  );
}

export default App;
