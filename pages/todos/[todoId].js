import Link from "next/link";
// import { useRouter } from "next/router";

export async function getStaticProps(context) {
  const { params } = context;
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.todoId}`
  );
  const todo = await data.json();

  return {
    props: { todo },
  };
}
export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const data = await response.json();

  const paths = data.map((todo)=>{
    return{
      params:{
        todoId: `${todo.id}`
      }
    }
  })
  return {paths, fallback:false}
}
export default function Todo({ todo }) {
  // const router = useRouter();
  // const todoId = router.query.todoId;

  return (
    <>
      <Link href="/todos">Voltar</Link>
      <h1>exibir todo: {todo.id} </h1>
      <h3>Text: {todo.title}</h3>
      <p>
        Comentario: la la la..
        <Link href={`/todos/${todo.id}/comment/1`}>detalhes</Link>
      </p>
      <p>
        Comentario: la la la..
        <Link href={`/todos/${todo.id}/comment/2`}>detalhes</Link>
      </p>
      <p>
        Comentario: la la la..
        <Link href={`/todos/${todo.id}/comment/3`}>detalhes</Link>
      </p>
    </>
  );
}
