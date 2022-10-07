import React, { useState } from "react";

export default function Todolist() {
  const [data, setData]: [string, (event: string) => void] = useState("");
  const [arr, setArr]: [string[], (current: any) => any] = useState([]);
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setData(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setArr((current: any) => [...current, data]);
    setData("");
  };

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget.parentElement?.innerText.split(" ")[0];
    setArr((current: any) => current.filter((item: any) => item !== target));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={data} onChange={onChange} placeholder="Write memo" />
        <button>ㄱㅏ즈아</button>
      </form>
      <ul>
        {arr.map((item, index) => (
          <li key={index}>
            {item} <button onClick={onClick}>제거</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/*export default function Todolist() {
  const [data, setData] = useState("");
  const [todo, setTodo] = useState<Todo[]>([]);
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setData(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input placeholder="Write to do" onChange={onChange} />
        <button>Add</button>
      </form>
    </div>
  );
}*/
