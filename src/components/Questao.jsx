import React from "react";
import rodar from "../assets/seta_virar.png";

export default function Questao({ questao, onVirar }) {
  return (
    <div className="card-questao">
      <p>{questao}</p>
      <img
        src={rodar}
        alt="virar"
        onClick={(e) => {
          e.stopPropagation();
          onVirar();
        }}
      />
    </div>
  );
}