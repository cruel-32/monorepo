import { useState, useEffect } from 'react';
import { Button } from '@monorepo/common/src/components/atoms/Button';
import reactLogo from '@monorepo/common/src/assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  const test = (item: string) => {
    console.log('test :::: ', item);
  };

  useEffect(() => {
    test('test');
  }, []);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="react" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button buttonType="primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </>
  );
}

export default App;
