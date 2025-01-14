import { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
  const [currOpen, setCurrOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((item, index) => {
        return (
          <AccordionItem
            currOpen={currOpen}
            onSetOpen={setCurrOpen}
            number={index + 1}
            question={item.question}
            answer={item.answer}
            key={index + 1}
          />
        );
      })}
    </div>
  );
}

export default Accordion;
