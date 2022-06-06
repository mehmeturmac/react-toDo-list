import { useState } from "react"; // State oluşturabilmek için react kütüphanesi altından 'useState' modülünü import ediyoruz.

//Component'leri gösterebilmek için import ediyoruz;
import Form from "./Form";
import List from "./List";
import Footer from "./Footer";

function Components() {
  // Verilerimizi tutabilmek için todos adında array bir state oluşturyoruz. Varsayılan değerine (eğer veri varsa) localstorage üzerinden veri çekiyoruz.
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  // Listelemede footerdan gelen bilgiyi alabilmek için hide adında string değer tutan bir state oluştuyoruz. Varsayılan değeri 'All'
  const [hide, setHide] = useState("All");

  return (
    <div className="todoapp">
      {/* import ettiğimiz componentleri gösteriyoruz. */}
      {/* Oluşturduğumuz todos state'tini formumuza gönderiyoruz. */}
      <Form todos={todos} setTodos={setTodos} />{" "}
      {/* Footer'dan gelen veriyle listeleme yapabilmek için hide verisini gönderiyoruz. */}
      <List todos={todos} setTodos={setTodos} hide={hide} />{" "}
      {/* Footer'a sethide gönderiyoruz ki footer'dan dönen veri ile listeleme yapabilelim */}
      <Footer todos={todos} setTodos={setTodos} setHide={setHide} />{" "}
    </div>
  );
}

export default Components;
