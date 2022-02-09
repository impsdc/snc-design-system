import "./styles/index.css";
import header from "./images/header.jpg";
import footer from "./images/footer.jpg";
import bloc1 from "./images/bloc1.jpg";
import bloc2 from "./images/bloc2.jpg";
import { Carrousel } from "./components/Carrousel";
import { Bloc } from "./components/Bloc";
import { data } from "./helpers/data";

console.log(data);

function App() {
  return (
    <div className="relative min-h-screen">
      <section>
        <img src={header} alt="header" />
      </section>
      <div className="">
        <Carrousel slide={data} space="big" />
        <Bloc img={bloc1} space="light"/>
        <Carrousel slide={data} space="medium" />
        <Bloc img={bloc2} space="big"/> 
      </div>
      <section className="" style={{ background: "#333" }}>
        <img src={footer} alt="header" className="block ml-auto mr-auto" />
      </section>
    </div>
  );
}

export default App;
