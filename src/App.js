import "./styles/index.css";
import header from "./images/header.jpg";
import footer from "./images/footer.jpg";
import { Carrousel} from "./components/Carrousel";
import {data} from "./components/Carrousel.stories"

console.log(data);

function App() {
  return (
    <div className="relative min-h-screen">
      <section>
        <img src={header} alt="header" />
      </section>
      <div className="">
      <Carrousel slide={data} />
      </div>
      <section className="" style={{background: '#333'}}>
        <img src={footer} alt="header" className="block ml-auto mr-auto"/>
      </section>
    </div>
  );
}

export default App;
