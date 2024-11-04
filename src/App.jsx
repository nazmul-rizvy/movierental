import { useState } from "react";
import { MovieContext } from "./context";
import Footer from "./Footer";
import Header from "./Header";
import MovieList from "./Movies/MovieList";
import Sidebar from "./Sidebar";

export default function App() {
  const [cartData, setCartData] = useState([]);

  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MovieList />
          </div>
        </main>
        <Footer />
      </MovieContext.Provider>
    </>
  );
}
