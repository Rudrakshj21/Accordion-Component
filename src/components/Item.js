export default function Item({ title, children, number, onOpen, currentOpen }) {
  const isOpen = number === currentOpen;
  function handleToggle() {
    onOpen((currOpen) => (currOpen === 0 ? number : 0));
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <span className="number">0{number}</span>
      <p className="title">{title}</p>

      {isOpen ? (
        <>
          <p className="icon">-</p>
          <p className="content-box ">{children}</p>
        </>
      ) : (
        <>
          <p className="icon">+</p>
        </>
      )}
    </div>
  );
}
