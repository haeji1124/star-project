import React from "react";
import "./StarPrint.css";

const StarPrint = (props) => {
  return (
    <div className="pyramid">
      {props.pyramid.map((star, index) => (
        <pre
          key={index}
          style={{
            fontSize: `${props.options.fontSize}px`,
            color: props.options.color,
            paddingLeft: `${star.spaces}ch`,
            margin: 0,           // pre 태그의 기본 마진 제거
            padding: 0,          // 패딩도 제거
            lineHeight: '1',     // 줄 간격을 텍스트 크기와 동일하게
            display: 'block',    // 블록 레벨 요소로 설정
          }}
        >
          {star}
        </pre>
      ))}
    </div>
  );
};

export default StarPrint;
