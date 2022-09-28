import './styles.css';
import { useRef } from "react";

interface inputFieldProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent<HTMLFormElement>) => void;
}


export default function InputField({ todo, setTodo, handleAdd }: inputFieldProps) {

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
        <form className='input' onSubmit={(e) => {
          handleAdd(e)
          inputRef.current?.blur()
          }}>
            <input 
            ref={inputRef}
            type="input"
            placeholder="Enter a task" 
            className="input__box"
            value={todo}
            onChange={
              (e) => setTodo(e.target.value)
            }
             />
            <button className="input_submit" type="submit">
                Go
            </button>
        </form>
    </div>
  )
}
