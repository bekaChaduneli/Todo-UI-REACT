import style from "./Todos.module.css";

function Todos({ todos, todo, todoText, del, setTodos }) {
  const activate = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return {
            ...el,
            complited: !el.complited,
          };
        }
        return el;
      })
    );
  };

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  return (
    <ul>
      <li
        className="flex h-11 justify-between flex-row items-center"
        number={todo.id}
      >
        <div className="flex flex-col">
          <h1 className="ml-1 text-lg">{todoText}</h1>
          <h1 className={`${style.date} pl-1 text-sm text-gray-400`}>
            Today at {todo.date}
          </h1>
        </div>
        <div className="flex gap-4">
          <div
            onClick={activate}
            className={`w-5 h-5 ${
              todo.complited === false ? style.circle : style.active
            }`}
          ></div>
          <img
            className={`${style.delete}w-5 h-5 mr-1`}
            onClick={deleteHandler}
            src={del}
            alt="delete"
          />
        </div>
      </li>
    </ul>
  );
}

export default Todos;
