import React from "react";
import Text from "../../foundation/Text";
import { Button } from "../Button";
import { Grid } from "../../foundation/layout/Grid";

const Main = () => {
  return (
    <Grid.Container>
      <Grid.Row>
        <Grid.Col>
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
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s.
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
        </Grid.Col>
        <Grid.Col>
          <img
            style={{ display: "block", margin: "auto" }}
            src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
};

export default Main;
