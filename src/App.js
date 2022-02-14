import "./styles/scss/app.css";
import header from "./images/header.jpg";
import footer from "./images/footer.jpg";
import bloc1 from "./images/bloc1.jpg";
import bloc2 from "./images/bloc2.jpg";
import { Carrousel } from "./components/Carrousel";
import { Bloc } from "./components/Bloc";
import { data } from "./helpers/data";

function App() {
  return (
    <div className="relative min-h-screen">
      <section>
        <img src={header} alt="header" />
      </section>
      <div>
        <Carrousel slide={data} space="70px" />
        <Bloc img={bloc1} space="30px"/>
        <Carrousel slide={data} space="10px" />
        <Bloc img={bloc2} space="50px"/> 
      </div>
      <section className="" style={{ background: "#333" }}>
        <img src={footer} alt="header" className="block ml-auto mr-auto" />
      </section>
    </div>
  );
}

export default App;
