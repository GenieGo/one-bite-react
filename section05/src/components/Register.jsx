import { useState, useRef } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = () => {
    if (input.name === "") {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          countRef.current++;
          console.log("refObj.current", countRef.current);
        }}
      >
        ref+
      </button>
      <div>
        <input
          name="name"
          ref={inputRef}
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input name="date" type="date" onChange={onChange} />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="한국">한국</option>
          <option value="미국">미국</option>
          <option value="일본">일본</option>
        </select>
      </div>
      <div>
        <textarea name="bio" onChange={onChange} value={input.bio} />
        {input.bio}
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};
export default Register;
