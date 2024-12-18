import { useState } from "react";
import "./App.css";
import StarPrint from "./StarPrint";
import TypeSelect from "./TypeSelect";

// TODO: 생성하기 눌렸을때만 변화되도록... 현재는 생성하기 한번 누른다음 색상, 폰트 변경하면 리렌더링 된다.
// 공백 적용 방법 알아보기

function App() {
  const [options, setOptions] = useState({
    height: 0,
    color: "black",
    fontSize: "10",
    type: "",
  });
  const [pyramid, setPyramid] = useState([]);

  const generatePyramid = () => {
    console.log(options.height);
    const rows = [];
    const h = parseInt(options.height);
    console.log(`Star Type : ${options.type}`);

    if (options.type === "1") {
      for (let i = 1; i <= h; i++) {
        // const spaces =' '.repeat(h - i)
        const stars = "*".repeat(i);
        rows.push(stars);
      }
    } else if (options.type === "2") {
      for (let i = 1; i <= h; i++) {
        const spaces = "-".repeat(h - i);
        const stars = "*".repeat(i);
        rows.push(spaces + stars);
      }
    } else if (options.type === "3") {
      for (let i = 1; i <= h; i++) {
        // const spaces =' '.repeat(h - i)
        const stars = "*".repeat(h - i + 1);
        rows.push(stars);
      }
    } else if (options.type === "4") {
      for (let i = 1; i <= h; i++) {
        const spaces = "-".repeat(i - 1);
        const stars = "*".repeat(h - i + 1);
        rows.push(spaces + stars);
      }
    } else if (options.type === "5") {
      for (let i = 1; i <= h; i++) {
        const spaces = "-".repeat(h - i);
        const stars = "*".repeat(i + (i - 1));
        rows.push(spaces + stars);
      }
    }
    setPyramid(rows);
    test();
  };

  const test = () => console.log(pyramid);

  const buttonClickHandler = () => {
    // getTypeSelectData();
    console.log("버튼 눌림");
    generatePyramid();
  };

  const handleOptionsChange = (newOptions) => {
    setOptions(newOptions);
    console.log(newOptions);
  };

  return (
    <>
      <div className="type-select">
        <TypeSelect options={options} onOptionsChange={handleOptionsChange} />
      </div>
      <div className="button">
        <button onClick={buttonClickHandler}>생성하기</button>
      </div>
      <div className="print-body">
        <StarPrint pyramid={pyramid} options={options} />
      </div>
    </>
  );
}

export default App;
