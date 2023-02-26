import plus from "../images/plus.png";
import style from "./SearchBar.module.css";

const SearchBar = ({
  inputValue,
  clockState,
  setInputValue,
  todos,
  setTodos,
}) => {
  function AddTodo(event) {
    setInputValue(event.target.value);
  }

  function sub(e) {
    e.preventDefault();
    if (inputValue !== "") {
      setTodos([
        ...todos,
        {
          text: inputValue,
          date: clockState,
          complited: false,
          id: Math.random() * 1000,
        },
      ]);
    }

    setInputValue("");
  }

  return (
    <form className="flex gap-2">
      <input
        value={inputValue}
        className={`${style.input} h-12 rounded`}
        placeholder="Note"
        onChange={AddTodo}
        type="text"
        required
      />
      <button
        onClick={sub}
        className={`${style.submit} h-12 flex justify-center items-center rounded`}
        type="submit"
      >
        <i>
          <img src={plus} alt="plus" />
        </i>
      </button>
      <div className={style.reqBox}></div>
    </form>
  );
};

export default SearchBar;
