import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";
const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const getFilteredDate = () => {
    if (search === "") {
      return todos;
    } else {
      return todos.filter((todo) =>
        todo.content.toLowerCase().includes(search.toLowerCase())
      );
    }
  };
  const filteredTodos = getFilteredDate();

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyzedData 호출");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);
  // 두번째 매개변수 배열은 의존성배열: deps
  // useMemo(() => {메모하고 싶은 연산}, [])
  return (
    <div className="List">
      <h4>Todo List ✔</h4>

      <div>total: {totalCount}</div>
      <div>doneCount: {doneCount}</div>
      <div>notDoneCount: {notDoneCount}</div>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        onChange={onChangeSearch}
      />
      <div className="todos-wraper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
