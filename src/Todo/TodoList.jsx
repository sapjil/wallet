import { useEffect, useState } from 'react';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  // 초기값 적용
  useEffect(() => {
    let todolist = localStorage.getItem('todolist');

    if (todolist) {
      todolist = JSON.parse(todolist);
    } else {
      todolist = [];
    }

    setTodoList(todolist);
  }, []);

  // 총 금액 구하기
  function counting() {
    const newPay = [...todoList];
    const payList = [];

    newPay.forEach((pay) => {
      const ppp = pay.pay;
      payList.push(parseInt(ppp));
    });

    const resultPay = payList.reduce((acc, cur) => acc + cur, 0);

    // 천단위 콤마 추가
    const result = resultPay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // console.log(result);
    return result;
  }

  // 테스크 삭제
  function deleteTodo(e, idx) {
    const newList = [...todoList];
    newList.splice(idx, 1);

    localStorage.setItem('todolist', JSON.stringify(newList));
    setTodoList(newList);
  }

  return (
    <div>
      <div className="list-ul">
        {todoList.length === 0 && <p className="center">NO DATA</p>}
        {todoList.map((item, idx) => (
          <div className="list-item" key={idx}>
            <div className="item-date">{item.date}</div>
            <div className="flex item-wrap">
              <span className="item-title">{item.title}</span>
              <span className="item-pay">{item.pay}</span>
            </div>
            <div className="item-util">
              <button onClick={(e) => deleteTodo(e, idx)}>수정</button>
              <button onClick={(e) => deleteTodo(e, idx)}>삭제</button>
            </div>
          </div>
        ))}
      </div>
      <div className="footer">
        <div className="align right">
          <strong className="item-total">{counting()}원</strong>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
