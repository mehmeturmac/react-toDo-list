import React from "react";

// Components içerisinden göndermiş olduğumuz state'in verilerini çağırıyoruz.
function List({ todos, setTodos, hide }) {
  // todos içersinden oluşturduğumuz id sayesinde map içesinde id karşılaştırması yapıyoruz.
  const checkTodo = (e) => {
    // Uyumlu id'yi bulduktan sonra işaretli olma durumunu(checked) değiştiriyoruz.
    let newTodos = todos.map((todo) => {
      if (parseInt(todo.id) === parseInt(e.target.id)) {
        // id'ler eşleşebilsin diye parseInt kullanarak integera çevirdik.
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    setTodos(newTodos); // işaretli olma durumunu set ediyoruz.
  };

  const deleteTodo = (e) => {
    setTodos(
      todos.filter((todo) => parseInt(todo.id) !== parseInt(e.target.id))
    ); // id karşılaştırması yaparak filtreleme yapıyoruz.
  };

  const isComplated = (e) => {
    // Event olarak gelen verinin işaretli olma durumuna göre ve footerdan gelen veriye göre listeleme yapıyoruz.
    // hidden classı atandığında dom listede görünmüyor.
    if (e.checked === true && hide === "All") {
      return "completed";
    } else if (e.checked === true && hide === "Active") {
      return "completed hidden";
    } else if (e.checked === false && hide === "Completed") {
      return "hidden";
    }
  };

  return (
    <div className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {todos.map((todo) => (
          // todos map ederek gelen veriler ile liste elemanlarımızı oluşturuyoruz.
          <li key={todo.id} id={todo.id} className={isComplated(todo)}>
            {/* isComplated ile state elemanımızı göndererek classlarımızı belirliyoruz. */}
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                defaultChecked={todo.checked}
                id={todo.id}
                onClick={checkTodo}
                // işaretlenme durumu değiştiğinde id kullanarak veriyi state'e set ediyoruz.
              />
              <label>{todo.todo}</label>
              <button
                className="destroy"
                id={todo.id}
                onClick={deleteTodo}
                // Silmek için butona basıldığında id yardımı ile state'den veriyi sildiriyoruz.
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
