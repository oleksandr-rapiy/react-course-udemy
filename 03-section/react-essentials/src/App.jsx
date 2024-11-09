import Header from "./components/Header";
import Concept from "./components/Concept";
import { CORE_CONCEPTS } from "./data";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
              {CORE_CONCEPTS.map((item) => {
                return (
                  <Concept {...item}
                  />
                );
              })}
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
