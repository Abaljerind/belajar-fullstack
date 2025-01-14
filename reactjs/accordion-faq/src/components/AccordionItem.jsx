import { useState } from "react";

function AccordionItem({ number, question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{number < 10 ? `0${number}` : number}</p>
      <p className="title">{question}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <p className="content-box">{answer}</p>}
    </div>
  );
}

export default AccordionItem;
