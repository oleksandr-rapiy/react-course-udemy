import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import Concept from "./components/Concept/Concept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

import { CORE_CONCEPTS, EXAMPLES } from "./data";
import "./App.css";

function App() {
  const [content, setContent] = useState();

  function handleSelect(selectedButton) {
    setContent(EXAMPLES[selectedButton]);
  }

  return (
    <>
      <div>
        <Header />
        <main>
          <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
              {CORE_CONCEPTS.map((item, index) => {
                return <Concept {...item} key={index} />;
              })}
            </ul>
          </section>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton
                isSelected={content?.key === "components"}
                onSelect={() => handleSelect("components")}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={content?.key === "jsx"}
                onSelect={() => handleSelect("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={content?.key === "props"}
                onSelect={() => handleSelect("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={content?.key === "state"}
                onSelect={() => handleSelect("state")}
              >
                State
              </TabButton>
            </menu>
            {!content ? (
              <p>Please select the topic.</p>
            ) : (
              <div id="tab-content">
                <h3>{content.title}</h3>
                <p>{content.description}</p>
                <pre>
                  <code>{content.code}</code>
                </pre>
              </div>
            )}
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
