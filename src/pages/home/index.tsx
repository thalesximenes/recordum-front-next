import Btn from "@/components/Btn";
import { NextPage } from "next";
import { Row } from "@/components/Row";
import TextInput from "@/components/TextInput";
import { startLogin } from "@/redux/Session/slice";
import { successGetUserInfo } from "@/redux/User/slice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const [nome, setNome] = useState("");

  return (
    <>
      <Row>
        <TextInput label={"Nome"} value={nome} setValue={setNome} />
      </Row>
      <Row>
        <Btn
          onClick={() =>
            dispatch(
              successGetUserInfo({
                primeiroNome: nome,
                sobrenome: nome,
                curso: nome,
                email: nome,
                escolaridade: nome,
                universidade: nome,
                vestibulares: nome,
              })
            )
          }
        >
          Cadastrar
        </Btn>
      </Row>
    </>
  );
};

export default Home;
