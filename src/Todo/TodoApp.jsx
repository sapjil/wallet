import { useState } from 'react';

import TodoList from './TodoList';
import TodoWrite from './TodoWrite';

const TodoApp = () => {
  const [viewContent, setViewContent] = useState('list');

  return (
    <div className="flex stack wrapper">
      <div className="">
        <strong>Today</strong>
      </div>
      <div className="menu">
        <button onClick={() => setViewContent('list')}>목록</button>
        <button onClick={() => setViewContent('write')}>등록</button>
      </div>

      {viewContent === 'list' ? <TodoList /> : <TodoWrite setViewContent={setViewContent} />}
    </div>
  );
};

export default TodoApp;
