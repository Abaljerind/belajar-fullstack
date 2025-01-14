function AccordionItem({ number, question, answer }) {
  return (
    <div className="item">
      <p className="number">{number}</p>
      <p className="title">{question}</p>
      <p className="icon">+</p>
      <p className="content-box">{answer}</p>
    </div>
  );
}

export default AccordionItem;
