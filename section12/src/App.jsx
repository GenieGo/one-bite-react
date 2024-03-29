import "./App.css";
import { useReducer, useRef, createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
import Edit from "./pages/Edit";
import { getEmotionImage } from "./util/get-emotion.image";

const mockData = [
  {
    id: 1,
    createdDate: new Date("2024-02-19").getTime(),
    emotionId: 1,
    content: "1번일기 내용",
  },
  {
    id: 2,
    createdDate: new Date("2024-02-18").getTime(),
    emotionId: 2,
    content: "2번일기 내용",
  },
  {
    id: 3,
    createdDate: new Date("2024-03-01").getTime(),
    emotionId: 3,
    content: "3번일기 내용",
  },
  {
    id: 4,
    createdDate: new Date("2024-01-01").getTime(),
    emotionId: 4,
    content: "4번일기 내용",
  },
  {
    id: 5,
    createdDate: new Date("2024-01-01").getTime(),
    emotionId: 5,
    content: "5번일기 내용",
  },
];

function reducer(state, action) {
  let nextState;
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      nextState = [action.data, ...state];
      break;
    }
    case "UPDATE": {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    }
    case "DELETE": {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }
    default:
      nextState = state;
      break;
  }
  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(0);

  useEffect(() => {
    const storedData = localStorage.getItem("diary");
    if (!storedData) {
      setIsLoading(false);
      return;
    }
    const parsedData = JSON.parse(storedData);
    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }
    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });
    idRef.current = maxId + 1;
    dispatch({
      type: "INIT",
      data: parsedData,
    });
    setIsLoading(false);
  }, []);

  // 새로운 일기추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };
  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };
  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {/* <Header
        title={"header"}
        leftChild={<Button text={"left"} />}
        rightChild={<Button text={"rifhgt"} />}
      /> */}

      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/new" element={<New />}></Route>
            <Route path="/diary/:id" element={<Diary />}></Route>
            <Route path="/edit/:id" element={<Edit />} />
            {/* 와일드카드 */}
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
