import { useState } from "react"; // State oluşturabilmek için react kütüphanesi altından 'useState' modülünü import ediyoruz.

// Components içerisinden göndermiş olduğumuz state'in verilerini çağırıyoruz.
function Footer({ todos, setTodos, setHide }) {
  // işaretlenme durumuna göre filtre oluşturuyoruz.
  const unCompleted = todos.filter((check) => check.checked === false);

  // Footer altında oluşturulan butonların seçilme durumu için array bir state oluşturuyoruz.
  const [select, setSelect] = useState("selected", "", "");

  // işaretlenmiş olanları sildirmek için yine filtre kullanıyoruz.
  const clearCompleted = (e) => {
    setTodos(todos.filter((todo) => todo.checked === false));
  };

  // Footer altındaki butonlar tıklandığında selected clasını atayabilmek için hide state'ine butonun id'sini atıyoruz.
  // Tıklanan butona göre hide state'ine de değer atıyoruz.
  const selectedButton = (e) => {
    switch (e.target.id) {
      case "All":
        setSelect(["selected", "", ""]);
        setHide("All");
        break;
      case "Active":
        setSelect(["", "selected", ""]);
        setHide("Active");
        break;
      case "Completed":
        setSelect(["", "", "selected"]);
        setHide("Completed");
        break;
      default:
    }
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{unCompleted.length}</strong>
        {unCompleted.length > 1 ? " items left" : " item left"}
        {/* Tamamlanmamış todoların sayısını alabilmek için filtre ile oluşturdumuz array'in eleman sayısını kullanıyoruz. */}
      </span>

      {/* Yukarıda oluştuğumuz select state'inin değerine göre butonların classlarını belirliyoruz. */}
      <ul className="filters">
        <li>
          <a className={select[0]} id="All" onClick={selectedButton}>
            All
          </a>
        </li>
        <li>
          <a className={select[1]} id="Active" onClick={selectedButton}>
            Active
          </a>
        </li>
        <li>
          <a className={select[2]} id="Completed" onClick={selectedButton}>
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
