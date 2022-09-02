import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import "./style.css";
import * as C from "./styles";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  const animatedComponents = makeAnimated();
  const [selectedOptions, setSelectedOptions] = useState([]);
    
  const handleSelect = () => {
    window.location.href = "/infos1"
  }
const options = [
  { value: "empresa 01", label: "Empresa 01" },
  { value: "empresa 02", label: "Empresa 02" },
  { value: "empresa 03", label: "Empresa 03" },
  { value: "empresa 04", label: "Empresa 04" },
  { value: "empresa 05", label: "Empresa 05" },
  { value: "empresa 06", label: "Empresa 06" },
  { value: "empresa 07", label: "Empresa 07" },
  { value: "empresa 08", label: "Empresa 08" },
];

  return (
    <>
        <Select
    components={animatedComponents}
    isMulti
    className="select"
    options={options}
    onChange={(item) => {setSelectedOptions(item);
    }}/>

  <button onClick={handleSelect}>Ver Selecionados</button>
    <C.Container>
      <C.Title>Home</C.Title>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>

</>  
);
  };
export default Home;