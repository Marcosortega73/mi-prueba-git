import React from 'react'
import Data from '../../service/data/data.json'
import Navbar from '../../components/navbar/Navbar'

const Contacto = () => {
    return (
        <>
        <Navbar navbar={Data} />
        {console.log(Data)}
      </>
    )
}

export default Contacto
