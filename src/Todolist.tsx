import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface USEFORMTYPE {
  email: string;
  id: string;
  password: string;
  name: string;
  age: number;
}

export default function Todolist() {
  //원래는 각각의 인풋에 대해 useState를 적용하여 데이터를 관리해야 하지만 useForm을 이용하면된다.
  const { register, watch, handleSubmit, formState } = useForm<USEFORMTYPE>();
  console.log(register("email"));
  console.log(watch().email); //이렇게 하면 email만 지켜볼 수 있다.
  //조건에 대한 타당성검서(validation)을 해야한다. 그떈 handleSubmit 하면된다.
  //handleSubmit은 성공했을 때 실행시킬함수 실패했을 때 실행시킬함수 두 가지의 인자를 받을 수 있다.
  const Success = () => {
    console.log(watch());
  };

  return (
    <div>
      <h1>UseForm연습</h1>
      <form onSubmit={handleSubmit(Success)}>
        <input
          {...register("email", {
            required: "email은 필수입니다",
            minLength: { value: 10, message: "10글자이상이어야해용" },
          })}
          placeholder="email"
        />
        <span>{formState.errors?.email?.message}</span>
        <input
          {...register("id", { required: "id는 필수 입력입니다." })}
          placeholder="id"
        />
        <span>{formState.errors?.id?.message}</span>
        <input
          {...register("password", { required: "id는 필수 입력입니다." })}
          placeholder="password"
        />
        <span>{formState.errors?.password?.message}</span>
        <input
          {...register("name", { required: "id는 필수 입력입니다." })}
          placeholder="name"
        />
        <span>{formState.errors?.name?.message}</span>
        <input
          {...register("age", { required: "id는 필수 입력입니다." })}
          placeholder="age"
        />
        <span>{formState.errors?.age?.message}</span>
        <button>제출</button>
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
---------------useForm()을 쓰고 난 후 
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




}*/
