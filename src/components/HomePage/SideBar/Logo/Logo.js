import React from 'react';
import './Logo.css';
import Aux from '../../../../hoc/Axu';
import LOGOIMAGE from '../../Main/LogoImage/LogoImage';
const logo = (props) => {
    return(
        <Aux>
            <div className="Logo" onClick={props.clickedLogo}>
               <div>
                    {
                        LOGOIMAGE.map(LOGOIMAGE => {
                            return(<LogoImages key={LOGOIMAGE.id} LogoImage={LOGOIMAGE}/>)
                        })
                    }
               </div>
            </div>
        </Aux>
    )
}


const LogoImages = (props) => {
    const {image} = props.LogoImage
    return (
        <div >
            <img src={image} alt="logoimage" style={{display:'block', marginRight:'auto', marginLeft: 'auto'}}/>
        </div>
    )
}

export default logo;