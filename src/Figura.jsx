import './Figura.css';

function Figura(props)
{
    return(

        <div className='figura'>
            <img src={props.f.zdjecie} alt={props.f.nazwa} />
        </div>
    );
}
export default Figura;