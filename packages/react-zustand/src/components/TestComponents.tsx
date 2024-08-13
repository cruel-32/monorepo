import React, { FC, useState, useRef, useEffect } from 'react';
// import { PropsWithChildren  } from 'react';
// FC<PropsWithChildren<props>>
import useMemberStore from '@/store/memberStore';

import type { Member } from '@/models/member/Member';

import { map, Observable } from 'rxjs';
import { Button } from '@monorepo/common/src/components/atoms/Button';
import { getMembers } from '@/apis/testApi';

const observable = new Observable<Number>((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
});

const pipeLine = observable.pipe(map((x) => x * 2));

console.log('just before subscribe');
pipeLine.subscribe({
  next(x) {
    console.log('got value ' + x);
  },
  error(err) {
    console.error('something wrong occurred: ' + err);
  },
  complete() {
    console.log('done');
  },
});
console.log('just after subscribe');

type props = {
  title: string;
};

const TestComponents: FC<props> = (props) => {
  const buttonRef = useRef() as React.MutableRefObject<HTMLButtonElement>;
  const memberStore = useMemberStore();
  const [members, setMembers] = useState<Member[]>([]);

  const handleClick = async () => {
    const memberResult = await getMembers();
    console.log('memberResult ::::: ', memberResult);
    setMembers(memberResult);
  };

  useEffect(() => {
    console.log('buttonRef ::::: ', buttonRef);
  }, [buttonRef]);

  return (
    <div>
      <div>{props.title} 테스트 컴포넌트</div>
      <div>{memberStore.members.map(({ name }) => name).join(', ')}</div>
      <button ref={buttonRef}>rxjs test button</button>
      <Button onClick={handleClick}>getMembers</Button>
      {members.map((member) => (
        <div key={member.id}>
          {member.name}({member.age}) : {member.job}
        </div>
      ))}
    </div>
  );
};

export default TestComponents;
