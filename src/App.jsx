import RouterConfig from "./Router/RouterConfig";
import Header from "./components/Header/Header";
import img from "./assets/images/pexels-lumn-235.png";

function App() {
  return (
    <div className="relative">
      <img className="absolute -z-10 w-[70%]" src={img} alt="" />
      <Header />
      <RouterConfig />
    </div>
  );
}

export default App;
