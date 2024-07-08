import { NextPage } from "next";
import { Row } from "@/components/Row";
import TextInput from "@/components/TextInput";
import { useState } from "react";
import Btn from "@/components/Btn";
import { startLogin } from "@/redux/Session/slice";
import { useDispatch } from "react-redux";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const [nome, setNome] = useState("");

  return (
    <>
      <Row>
        <TextInput
          label={"Nome"}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </Row>
      <Row>
        <Btn
          onClick={() =>
            dispatch(startLogin({ username: "user", password: "password" }))
          }
        >
          Cadastrar
        </Btn>
      </Row>
    </>
  );
};

export default Home;
