import React from "react";
import seta from "../assets/seta_play.png";
import checkCerto from "../assets/icone_certo.png";
import checkErrado from "../assets/icone_erro.png";
import checkQuase from "../assets/icone_quase.png";

const iconesMap = {
  certo: checkCerto,
  errado: checkErrado,
  quase: checkQuase,
  default: seta,
};

export default function Pergunta({ pergunta, cor, icone, onClick, onIconClick }) {
  const srcIcone = iconesMap[icone] || iconesMap.default;

  return (
    <div className="card-pergunta" onClick={onClick}>
      <p
        style={{
          color: cor,
          textDecoration: icone !== null && icone !== "default" ? "line-through" : "none",
        }}
      >
        {pergunta}
      </p>
      <img
        src={srcIcone}
        alt="ícone"
        onClick={(e) => {
          e.stopPropagation();
          onIconClick();
        }}
      />
    </div>
  );
}
