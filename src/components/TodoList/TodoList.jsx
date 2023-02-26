import styles from "./TodoList.module.css";
import Todos from "../Todos/Todos";
import del from "../images/delete.png";
const TodoList = ({ todos, setTodos, clockState }) => {
  return (
    <div className={`${styles.box}  flex gap-6 flex-col `}>
      {todos.map((todo) => (
        <Todos
          setTodos={setTodos}
          todoText={todo.text}
          del={del}
          todos={todos}
          todo={todo}
          clockState={clockState}
        />
      ))}
    </div>
  );
};

export default TodoList;
