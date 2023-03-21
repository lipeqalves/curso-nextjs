const { default: Link } = require("next/link")

const NotFound = () =>{
    return(
        <>
            <h1>404</h1>
            <p>Parece que esta página não existe!</p>
            <Link href="/">Voltar</Link>
        </>
    )
}

export default NotFound;