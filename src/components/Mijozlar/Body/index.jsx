import React, { useState } from "react";
import { Container, IconWrapper, Text, Wrapper } from "./style";
import { mijozlarData } from "../../../mock/Mijozlar";
import Edit from "../../Generic/Edit";
import Delete from "../../Generic/Delete";
import Fade from "react-reveal/Fade";
import Slash from "../../Generic/Slash";
import Check from "../../Generic/Check";

const Body = () => {
  const [change, setChange] = useState(Check);
  const onChange = (id) => {
    setChange(Slash);
  };
  return (
    <Container>
      <Fade top>
        {mijozlarData.map(({ id, MijozIsmi, Tel, BuyurtmalarSoni, Status }) => {
          return (
            <Wrapper key={id}>
              <Text>{MijozIsmi}</Text>
              <Text>{Tel}</Text>
              <Text center>{BuyurtmalarSoni}</Text>
              <Text>{Status}</Text>
              <IconWrapper left>
                <div onClick={() => onChange(id)}>{change}</div>
                {/* <Slash />  */}
                <Edit />
                <div>
                  <Delete />
                </div>
              </IconWrapper>
            </Wrapper>
          );
        })}
      </Fade>
    </Container>
  );
};

export default Body;
