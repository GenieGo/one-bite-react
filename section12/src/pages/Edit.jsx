import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import useDiary from "../hooks/useDiary";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const currentDiaryItem = useDiary(params.id);

  const onClickDelete = () => {
    if (window.confirm("일기를 삭제할까요?")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
    return;
  };

  const onSubmit = (input) => {
    // if (window.confirm("수정할까요?")) {
    onUpdate(
      input.id,
      input.createdDate.getTime(),
      input.emotionId,
      input.content
    );
    nav("/", { replace: true });
    // }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={
          <Button
            text={"뒤로가기"}
            onClick={() => {
              nav(-1);
            }}
          />
        }
        rightChild={
          <Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete} />
        }
      />
      <Editor initData={currentDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
