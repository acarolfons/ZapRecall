function BotaoResp(props) {
  return (
    <button
      style={{
        backgroundColor: "#3498db",
        color: "white",
        border: "none",
        padding: "10px 20px",
        cursor: "pointer",
        borderRadius: "5px",
      }}
      onClick={props.onClick}
    >
      {props.texto}
    </button>
  );
}