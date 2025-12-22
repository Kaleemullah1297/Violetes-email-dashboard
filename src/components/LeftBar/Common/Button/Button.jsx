function Button({text,onClick}) {
  return (
    <>
      <button className="notes__button btn btn-primary" onClick={onClick}>
        <i class="fa-solid fa-plus fa-xs me-2"></i>{text}
      </button>
    </>
  );
}

export default Button;
