import { FC } from 'react';
// import { PropsWithChildren  } from 'react';
// FC<PropsWithChildren<props>>

type props = {
  title: string;
};

const TestComponents: FC<props> = (props) => {
  return <div>{props.title} 테스트 컴포넌트</div>;
};

export default TestComponents;
