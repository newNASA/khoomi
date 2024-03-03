import React from "react"; 
import Nav from "./pages/navbar/nav.js"
import Menu from "./pages/menu.js";
import Get from "./pages/home/home.js"
import Recomended from "./pages/recomended.js";
import Start from "./pages/start.js";
import Collection from "./pages/collection.js";
import Treending from "./pages/treending.js";
import Footer from "./pages/footer.js";

function App() {
  return (
    <div className="App">
      <Menu />
      <Nav />
      <Get />
      <Recomended />
      <Start />
      <Collection />
      <Start />
      <Treending />
      <Start />
      <Footer />
    </div>
  ); 
}

export default App;