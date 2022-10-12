import React, { useState } from "react";
import { useForm } from "react-hook-form";
interface SPANTYPE {
  id: string;
  password: string;
  email: string;
  name: string;
  age: number;
}

export default function Todolist() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<SPANTYPE>();
  const [ok, setOk] = useState(true);
  console.log(watch()); //변경되는 register를 추적해준다.
  const OK = () => {
    setOk(true);
  };
  const NO = () => {
    setOk((curret) => !curret);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <form onSubmit={handleSubmit(OK)}>
        <input
          {...register("id", { required: "ID는 필수입니다" })}
          placeholder="id"
        />
        <span>{errors.id?.message}</span>
        <input
          {...register("password", { required: "password는 필수입니다." })}
          placeholder="password"
        />
        <span>{errors.password?.message}</span>
        <input
          {...register("email", {
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "only naver.com",
            },
          })}
          placeholder="email"
        />
        <span>{errors.email?.message}</span>
        <input
          {...register("name", { required: "name은 필수입니다" })}
          placeholder="name"
        />
        <span>{errors.name?.message}</span>
        <input
          {...register("age", { required: "age는 필수입니다" })}
          placeholder="age"
        />
        <span>{errors.age?.message}</span>
        <button>추가</button>
      </form>
    </div>
  );
}

/*export default function Todolist() {
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
*/
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
