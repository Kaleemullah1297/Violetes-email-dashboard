import './Card.css'

function KeyboardCard({title,shortcut}) {
  return (
    <>
      <span className="d-flex justify-content-between mb-2 keyboard-shorcut">
        <small className="">{title}</small>
        <small className="keyboard-shorcut-keys m-0 p-0 px-2">{shortcut}</small>
      </span>
    </>
  );
}

export default KeyboardCard;
