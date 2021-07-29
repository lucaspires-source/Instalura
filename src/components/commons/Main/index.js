import React from "react";
import  Text  from "../../foundation/Text";
import { Button } from "../Button";

const Main = () => {
  return (
    <div>
      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
        textAlign={{
          xs: "center",
          md: "left",
        }}
      >
        Compartilhe momentos e conecte-se com amigos
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        textAlign={{
          xs: "center",
          md: "left",
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s.
      </Text>

      <Button
        variant="primary.main"
        margin={{
          xs: "auto",
          md: "initial",
        }}
        display="block"
      >
        Cadastrar
      </Button>
    </div>
  );
};

export default Main;
