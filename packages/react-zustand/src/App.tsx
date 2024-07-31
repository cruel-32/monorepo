import { useState, useEffect } from 'react';
import { Button } from '@monorepo/common/src/components/atoms/Button';
import { Input } from '@monorepo/common/src/components/atoms/Input';
import reactLogo from '@monorepo/common/src/assets/react.svg';

import '@/index.css';
import '@monorepo/common/src/styles/common.css';

import useMemberStore from '@/store/memberStore';

import TestComponents from './components/TestComponents';

import { createMemberSchema } from '@/models/member/Member';

function App() {
  const memberStore = useMemberStore();
  const [count, setCount] = useState(0);

  const test = (item: string) => {
    console.log('test :::: ', item);
  };

  const updateMember = () => {
    if (memberStore.memberDetail?.id !== undefined) {
      const result = createMemberSchema.validate(memberStore.memberDetail);
      result
        .then(() => {
          memberStore.updateMember(memberStore.memberDetail?.id, memberStore.memberDetail!);
          memberStore.clearMember();
        })
        .catch((err) => {
          window.alert(err);
        });
    }
  };

  const insertMember = () => {
    const result = createMemberSchema.validate(memberStore.memberDetail);
    result
      .then(() => {
        memberStore.insertMember(memberStore.memberDetail!);
        memberStore.clearMember();
      })
      .catch((err) => {
        window.alert(err);
      });
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log('evt :::: ', evt.target.value);
    console.log('typeof evt :::: ', typeof evt.target.value);
    const { name, value } = evt.target;
    memberStore.setMember({ [name]: value });
  };
  console.log('rendering');

  useEffect(() => {
    test('useEffect');
  }, []);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="react" />
        </a>
      </div>
      <h1 className="text-3xl font-bold underline">Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
      </div>
      <TestComponents title="타이틀" />
      <div>
        <h1>zustand</h1>
        <div>
          <p>멤버 {memberStore.memberDetail?.id >= 0 ? memberStore.memberDetail?.id : ''}</p>
          id:{' '}
          <Input
            value={memberStore.memberDetail?.id >= 0 ? memberStore.memberDetail?.id : ''}
            disabled
            type="number"
          />
          <br />
          name: <Input onChange={handleChange} name="name" value={memberStore.memberDetail?.name} />
          <br />
          age:{' '}
          <Input
            onChange={handleChange}
            name="age"
            value={memberStore.memberDetail?.age >= 0 ? memberStore.memberDetail?.age : ''}
            type="number"
          />
          <br />
          job: <Input onChange={handleChange} name="job" value={memberStore.memberDetail?.job} />
          <br />
          {memberStore.memberDetail?.id >= 0 ? (
            <Button onClick={updateMember}>수정</Button>
          ) : (
            <Button onClick={insertMember}>추가</Button>
          )}
          <Button onClick={memberStore.clearMember}>클리어</Button>
          <div>
            <p>preview</p>
            id: {memberStore.memberDetail?.id >= 0 ? memberStore.memberDetail?.id : ''}
            <br />
            name: {memberStore.memberDetail?.name}
            <br />
            age: {memberStore.memberDetail?.age >= 0 ? memberStore.memberDetail?.id : ''}
            <br />
            job: {memberStore.memberDetail?.job}
            <br />
          </div>
        </div>
        <div>
          <p>멤버들</p>
          {memberStore.members.map((member) => (
            <div key={member?.id}>
              id:{' '}
              <Button onClick={() => memberStore.getMemberDetail(member?.id!)}>{member?.id}</Button>
              <br />
              name: {member?.name} <br />
              age: {member?.age} <br />
              job: {member?.job} <br />
              <Button onClick={() => memberStore.removeMember(member?.id!)}>removeMember</Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
