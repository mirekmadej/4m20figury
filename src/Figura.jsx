import './Figura.css';

function Figura(props)
{
    let id=props.f.id;
    
    return(

        <div className='figura col-sm-4'>
            <p><img className='img-thumbnail' src={props.f.zdjecie} alt={props.f.nazwa} /></p>
            <p>Liczba pobrań: {props.f.liczba}</p>
            <p><button onClick={()=>props.fun(id)}>pobierz</button></p>
        </div>
    );
}
export default Figura;