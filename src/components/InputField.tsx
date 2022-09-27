import './styles.css';

interface Props {
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
}


export default function InputField({ todo,setTodo }: Props) {
  return (
    <div>
        <form className='input'>
            <input type="input" placeholder="Enter a task" className="input__box" />
            <button className="input_submit" type="submit">
                Go
            </button>
        </form>
    </div>
  )
}
