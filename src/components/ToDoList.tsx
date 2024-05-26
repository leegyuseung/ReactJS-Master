import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

interface IForm {
  toDo: string;
}

function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  const { setValue } = useForm<IForm>();

  setValue("toDo", "");
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
