import { FC } from 'react';
// import { PropsWithChildren  } from 'react';
// FC<PropsWithChildren<props>>
import useMemberStore from '@/store/memberStore';

type props = {
  title: string;
};

const TestComponents: FC<props> = (props) => {
  const memberStore = useMemberStore();

  return (
    <div>
      <div>{props.title} 테스트 컴포넌트</div>
      <div>{memberStore.members.map(({ name }) => name).join(', ')}</div>
    </div>
  );
};

export default TestComponents;
