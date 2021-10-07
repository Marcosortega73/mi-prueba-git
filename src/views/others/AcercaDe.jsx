import React from "react";
import Data from "../../service/data/data.json";
import Navbar from "../../components/navbar/Navbar";
import ClientesCrud from "../../service/api/clientesCrud";

const AcercaDe = () => {
  return (
    <>
      <Navbar navbar={Data} />
      {console.log(Data)}
      <ClientesCrud />
    </>
  );
};

export default AcercaDe;
