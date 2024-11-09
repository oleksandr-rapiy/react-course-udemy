import { useState } from "react";

import TabButton from "./TabButton/TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

import { EXAMPLES } from "../data.js";

function Examples() {
  const [content, setContent] = useState();

  function handleSelect(selectedButton) {
    setContent(EXAMPLES[selectedButton]);
  }

  return (
    <Section id="examples" title="Examples">
      <Tabs
        // ButtonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={content?.key === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={content?.key === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={content?.key === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={content?.key === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
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
      </Tabs>
    </Section>
  );
}

export default Examples;