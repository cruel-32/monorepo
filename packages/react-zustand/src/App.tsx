import { useState, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { Button } from '@monorepo/common/src/components/atoms/Button';
import reactLogo from '@monorepo/common/src/assets/react.svg';

import TestComponents from '@/components/TestComponents';
import MemberInput from '@/components/member/MemberInput';
import MemberList from '@/components/member/MemberList';

import '@/index.css';
import '@monorepo/common/src/styles/common.css';

function App() {
  const [count, setCount] = useState(0);

  const test = (item: string) => {
    console.log('test :::: ', item);
  };

  console.log('rendering');

  useEffect(() => {
    test('useEffect');
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
          <MemberInput />
        </div>
        <MemberList />
      </div>
    </LocalizationProvider>
  );
}

export default App;
