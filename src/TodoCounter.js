
import './TodoCounter.css';

const estilos={
    
    fontSize: 24,
    textAlign: 'center',
    margin: 0,
    padding: '48px'


}

function TodoCounter({ total, completed}){
    return (
        <>
    <h1 className="TodoCounter">
        Has completado  <span> {completed} </span>  de   
         <span> {total}</span> TODOS
    </h1>
    <p>  Probando la NUEVA RAMA  xD </p>
    </>

        );
  }

  export { TodoCounter };