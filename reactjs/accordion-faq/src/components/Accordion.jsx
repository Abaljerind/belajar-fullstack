import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((item, index) => {
        return <AccordionItem number={index + 1} question={item.question} answer={item.answer} key={index + 1} />;
      })}
    </div>
  );
}

export default Accordion;
