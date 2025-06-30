import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import BlogCard from "./components/BlogCard";

function App() {
  return (
    <>
      <main className="mainHomeScreen">
        <section>
          <div className="w-full max-w-[300px] max-h-[500] drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]">
            <BlogCard />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
