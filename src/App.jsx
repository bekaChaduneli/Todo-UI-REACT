import React from "react";
import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import TodoList from "./components/TodoList/TodoList";
import Background from "./components/Background/background";
import Date from "./components/Date/Date";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [clockState, setClockState] = useState(`6:27`);
  const [clockStatePm, setClockStatePm] = useState(`PM`);
  const [clockStateDay, setClockStateDay] = useState(27);
  const [currentTime, setCurrentTime] = useState();
  return (
    <div className="box">
      <Background />
      <Date
        clockStatePm={clockStatePm}
        setClockStatePm={setClockStatePm}
        setClockStateDay={setClockStateDay}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        clockStateDay={clockStateDay}
        clockState={clockState}
        setClockState={setClockState}
      />
      <main className="w-full h-full p-12 flex flex-col gap-11 main">
        <SearchBar
          clockState={clockState}
          clockStatePm={clockStatePm}
          inputValue={inputValue}
          setInputValue={setInputValue}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList
          clockState={clockState}
          todos={todos}
          setTodos={setTodos}
          inputValue={inputValue}
        />
      </main>
    </div>
  );
}

export default App;
