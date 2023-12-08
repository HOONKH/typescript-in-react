import { FC } from "react";
// functioncomponent 타입 함수형 컴포넌트에서 렌더링이 되지않으면 충족이되지않음.
const App: FC = () => {
  return <div className="bg-red-100">Hello, TS!</div>;
};

export default App;

// ()=>JSX.Element 는 FC의 확장 타입은 최대한 좁혀서 사용해주는것이 좋음.
