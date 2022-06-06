import { useState, useEffect } from "react"; // State oluşturabilmek ve todos verimiz değiştiğinde işlem yapabilmek için react kütüphanesi altından 'useState' ve 'useEffect' modüllerini import ediyoruz.

// Components içerisinden göndermiş olduğumuz state'in verilerini çağırıyoruz.
function Form({ todos, setTodos }) {
  const [form, setForm] = useState(""); // Form değerlerini tutması için yeni bir state oluştuyoruz.

  const onSubmit = (e) => {
    e.preventDefault(); // Submit yapıldığında sayfanın yenilenmesini durduruyoruz.

    if (form === "") {
      // Eğer form içeriği boşsa false döndürüyoruz. Böylece state içerisine boş eleman atamamış oluyoruz.
      return false;
    }

    // Form içerisinden gelen veriyi set ediyoruz.
    setTodos([
      ...todos, // State içerisindeki verileri kaybetmemek için ...todos yazıyoruz.
      {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0, // Id çakışması olmaması için todos'un son elemanının id'sine bakıp +1 ekliyoruz. Eğer eleman yoksa ilk id 0 oluyor.
        todo: form,
        checked: false, // Varsayılanı false yapıyoruz ki checkbox işaretsiz gelsin.
      },
    ]);
  };

  useEffect(() => {
    setForm("");
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // todos verisi değiştiğinde form state'ini boşaltıyoruz ve todos verisini localStorage'a ekliyoruz.

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={form} // form verisini value'ya eşitliyoruz.
          onChange={(e) => setForm(e.target.value)} // value değiştiğinde form state'ine value'yu set ediyoruz.
        />
      </form>
    </header>
  );
}

export default Form;
