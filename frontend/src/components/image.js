import flowerimage from './flowers.jpg'//flowerimage nah image ki ala name ichanu
import logo from '../ThubLogo.png'
const Image = () => {
    return(
        <div>
            <h1>Image from components folder</h1>
            <img style={{width:100 ,height :100}} src={flowerimage} alt='Floers'></img>
            <h1>Image from src folder</h1>
            <img src={logo} alt='ThubIcon'></img>
            <h1>Image is in public folder</h1>
            <img src="/Thubicon.png" alt='ThubLogo'></img>
        </div>
    )
}
export default Image;