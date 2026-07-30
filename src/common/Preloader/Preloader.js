import preloader from './../../assets/images/amalie-steiness.gif';
import s from './Preloader.module.css'

let Preloader = (props) => {
    return <div style={{background: '#898c91'}}>
        <img src={preloader} alt="loading" className={s.photo}/>
    </div>

}
export default Preloader;