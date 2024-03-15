import useInput from "../hooks/useInput";
// 3가지 hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 후 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다 (조건문, 반복문)
// 3. 나만의 훅 (Custom Hook)을 직접 만들 수 있다. (use라는 접두사를 붙여주면 커스텀훅으로 처리)

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();
  return (
    <div>
      <input type="text" value={input} onChange={onChange} />
      <div>{input}</div>
      <input type="text" value={input2} onChange={onChange2} />
      <div>{input2}</div>
    </div>
  );
};

export default HookExam;
