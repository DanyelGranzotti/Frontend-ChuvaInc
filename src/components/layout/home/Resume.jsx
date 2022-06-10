import React, { useState } from "react";

import * as S from "../../styles/layout/home/Resume.styled";

import example from "../data/example";

const Resume = () => {
  const [showMore, setShowMore] = useState(false);
  const text = example.text;

  return (
    <S.ResumeContainer>
      <h1>Resumo</h1>

      <p>
        {showMore ? text : `${text.substring(0, 810)}`}
        <button className="btn" onClick={() => setShowMore(!showMore)}>
          {showMore ? "ver menos" : "ver mais"}
        </button>
      </p>
    </S.ResumeContainer>
  );
};

export default Resume;
