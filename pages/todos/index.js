import styles from "../../styles/Todos.module.css"
import Link from "next/link";
export async function getStaticProps(){
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const todos = await data.json();

    //console.log(todos)
    return {
        props:{todos}
    }
}
const Todos = ({todos}) => {
  return (
    <nav >
      <h1>Tarefas para fazer:</h1>
      <ul className={styles.todolist}>
        {todos.map(todo => (<li key={todo.id} >{todo.title}-{' '}
         <Link href={`/todos/${todo.id}`}>
            Ver mais
        </Link></li>))}
      </ul>
    </nav>
  );
};

export default Todos;