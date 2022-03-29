import React from 'react';
import Counter from './components/counter';
import Todos from './components/todos';

const App = () => {
  return (
    <div>
      <Counter number={0} />
      <hr />
      <Todos />
    </div>
  );
}

export default App;