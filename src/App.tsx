import { Button, Image } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';
import { useState, useTransition } from 'react';
import { randImg } from '@ngneat/falso';

import './App.css';

const App = () => {
  const [value, setValue] = useState('');
  const [isPending, startTransition] = useTransition();
  const onClick = () => {
    const img = randImg();
    startTransition(() => {
      setValue(img);
    });
  };
  return (
    <div>
      <Button onClick={onClick}>hello react 18</Button>
      {isPending ? 'loading...' : <Image src={value} />}
    </div>
  );
};

export default App;
