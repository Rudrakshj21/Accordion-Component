import { useState } from "react";

export default function Item({ title, text, number }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleIsOpen() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleIsOpen}>
      <span className="number">0{number}</span>
      <p className="title">{title}</p>

      {isOpen ? (
        <>
          <p className="icon">-</p>
          <p className="content-box ">{text}</p>
        </>
      ) : (
        <>
          <p className="icon">+</p>
        </>
      )}
    </div>
  );
}
