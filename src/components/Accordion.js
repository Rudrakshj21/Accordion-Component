import Item from "./Item";
import { useState } from "react";

export default function Accordion({ faqs }) {
  const [currOpen, setCurrOpen] = useState(0);

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <Item
          key={Date.now() + Math.random()}
          title={faq.title}
          number={index + 1}
          onOpen={setCurrOpen}
          currentOpen={currOpen}
        >
          {faq.text}
        </Item>
      ))}
      <Item
        title="Thinking in React"
        number={23}
        onOpen={setCurrOpen}
        currentOpen={currOpen}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
        soluta hic sapiente expedita, adipisci, alias, voluptatum laudantium
        optio praesentium magnam aperiam ullam iusto ipsam reiciendis dolorum
        facere iure pariatur? Culpa.
      </Item>
    </div>
  );
}
