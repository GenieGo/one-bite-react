import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  useState,
  useContext,
  useReducer,
  useRef,
  useEffect,
  createContext,
} from "react";

// pages
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";

const mockData = [
  {
    id: 1,
    createdDate: new Date("2024-04-25").getTime(),
    emotionId: 1,
    content: "1번 일기",
  },
  {
    id: 2,
    createdDate: new Date("2024-04-25").getTime(),
    emotionId: 2,
    content: "2번 일기",
  },
  {
    id: 3,
    createdDate: new Date("2024-04-25").getTime(),
    emotionId: 3,
    content: "3번 일기",
  },
  {
    id: 4,
    createdDate: new Date("2024-04-25").getTime(),
    emotionId: 4,
    content: "4번 일기",
  },
  {
    id: 5,
    createdDate: new Date("2024-04-25").getTime(),
    emotionId: 5,
    content: "5번 일기",
  },
];
const reducer = (state, action) => {
  let nextState;
  switch (action.type) {
    case "INIT":
      console.log("init");
      nextState = state;
      break;
    case "CREATE":
      console.log("create");
      nextState = [action.data, ...state];
      break;
    case "UPDATE":
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    case "DELETE":
      nextState = state.filter(
        (item) => String(item.id) !== String(action.data)
      );
      break;
    default:
      nextState = state;
  }
  return nextState;
};

// context
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(0);

  // useEffect
  useEffect(() => {
    data.forEach((item) => {
      // 마지막 id값 + 1
      let maxId = 0;
      if (Number(item.id) > Number(maxId)) {
        maxId = Number(item.id);
      }
      idRef.current = maxId + 1;
    });
  }, []);

  // function
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        createdDate,
        emotionId,
        content,
      },
    });
  };
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

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      data: id,
    });
  };

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
