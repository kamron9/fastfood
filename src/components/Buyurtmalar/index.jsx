import React, { useState } from "react";
import Body from "./Body";
import Navbar from "./Navbar";
import { Container } from "./style";

const Buyurtmalar = ({ location }) => {
  const [active, setActive] = useState(true);
  return (
    <Container className="body">
      <Navbar onClick={(state) => setActive(state)} />
      <Body active={active} />
    </Container>
  );
};

export default Buyurtmalar;
