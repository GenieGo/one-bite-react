import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
import Button from "./components/Button";
import Header from "./components/Header";
import { getEmotionImage } from "./util/get-emotion.image";

// 1. "/": 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New페이지
// 3. "/diary" : 일기 상세히 조회하는 Diary페이지
function App() {
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/new");
  };
  return (
    <>
      <Header
        title={"header"}
        leftChild={<Button text={"left"} />}
        rightChild={<Button text={"rifhgt"} />}
      />
      <Button
        text={"button"}
        onClick={() => {
          console.log("button click");
        }}
      />
      <Button
        text={"button"}
        type={"POSITIVE"}
        onClick={() => {
          console.log("button click");
        }}
      />
      <Button
        text={"button"}
        type={"NEGATIVE"}
        onClick={() => {
          console.log("button click");
        }}
      />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route path="/diary/:id" element={<Diary />}></Route>
        {/* 와일드카드 */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
