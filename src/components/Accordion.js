import Item from "./Item";

export default function Accordion({ faqs }) {
  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <Item
        key = {Date.now() + Math.random()}
          title={faq.title}
          text={faq.text}
          number={index + 1}
          open={faqs.open}
        />
      ))}
    </div>
  );
}
