import React from 'react';

function NasaDivs({Nasa}){
    return(
        <div className='Pic' >
            <img src={Nasa.hdurl} width={"480 px"} />
            <h2>{Nasa.title} </h2>
            <h2>{Nasa.copyright}</h2>
            <h3>{Nasa.date}</h3>
            <p>{Nasa.explanation}</p>
        </div>
    );
}
export default NasaDivs;