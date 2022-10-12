import React, { useState } from "react";

export default function Todolist() {
  const [todo, setTodo] = useState<string>("");
  const [todoarr, setTodoarr] = useState<string[]>([]);
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodo(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodoarr((current) => [...current, todo]);
    setTodo("");
  };
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const haha = todoarr.filter(
      (item, index) =>
        index.toString() !== event.currentTarget.parentElement?.id
    );
    setTodoarr(haha);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={todo} onChange={onChange} placeholder="투두리스트" />
        <button>추가</button>
      </form>
      <ul>
        {todoarr.map((item, index) => (
          <li id={index.toString()} key={index}>
            {item} <button onClick={onClick}>삭제</button>
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
