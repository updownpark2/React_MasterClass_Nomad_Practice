interface SecondProps {
  Second: string;
}

export default function Price({ Second }: SecondProps) {
  return <h1>Price! {Second}</h1>;
}
