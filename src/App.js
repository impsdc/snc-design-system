import "./styles/index.css";

function App() {
  return (
    <div className="bg-blue-400 h-screen grid">
      <div className="w-3/4 my-auto ml-20">
        <h1 className="text-5xl font-bold mb-10 text-white">JIT mode is cool</h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo officia earum ducimus neque obcaecati consequuntur ratione accusamus at officiis tempore,
          magnam non debitis fugit unde alias id quidem necessitatibus.
        </p>
        <button className={"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4"}>truc</button>
      </div>
    </div>
  );
}

export default App;