import { useLocation } from "react-router-dom";

export default function Test1() {
  const { state } = useLocation<{ rank: string }>();
  console.log(state.rank);
  return <div>Test1</div>;
}
