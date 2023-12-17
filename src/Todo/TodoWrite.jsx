import { useEffect, useState } from 'react';

const TodoWrite = (setViewContent) => {
  const [title, setTitle] = useState('');
  const [pay, setPay] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    todaySet();
  }, []);

  // 오늘 날짜 설정
  function todaySet() {
    const initDate = [];
    const today = document.getElementById('current-date');
    today.value = new Date().toISOString().substring(0, 10);
    const ddate = today.value.toString();
    initDate.push(ddate);
    // console.log(initDate);
    // initDate.push(ddate)
    // console.log(initDate);
  }

  // 테스크 입력
  function writeTodo() {
    let todolist = localStorage.getItem('todolist');
    if (todolist) {
      todolist = JSON.parse(todolist);
    } else {
      todolist = [];
    }

    const newItem = { date: date, title: title, pay: pay };
    todolist.push(newItem);
    todolist = JSON.stringify(todolist);
    localStorage.setItem('todolist', todolist);

    setDate(todaySet());
    setTitle('');
    setPay('');

    // 입력 후 목록으로 이동
    setViewContent('list');
  }

  return (
    <div>
      <div className="">
        <input id="current-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <textarea value={title} onChange={(e) => setTitle(e.target.value)}></textarea>
        <input type="number" value={pay} onChange={(e) => setPay(e.target.value)} />
        <button className="full" onClick={writeTodo}>
          등록
        </button>
      </div>
    </div>
  );
};

export default TodoWrite;
