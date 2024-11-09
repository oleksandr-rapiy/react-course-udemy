import Concept from "./Concept/Concept.jsx";
import Section from "./Section.jsx";

import { CORE_CONCEPTS } from "../data.js";

function Concepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((item, index) => {
          return <Concept {...item} key={index} />;
        })}
      </ul>
    </Section>
  );
}

export default Concepts;
