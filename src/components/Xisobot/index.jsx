import React from "react";
import LineChart from "../../mock/lineChart";
import LineChart2 from "../../mock/lineChart2";
import Navbar from "./Navbar";
import { Wrapper } from "./style";
import { Chart, Container } from "./style";

const Xisobot = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Chart>
          <LineChart />
        </Chart>
        <Chart>
          <LineChart2 />
        </Chart>
      </Wrapper>
    </Container>
  );
};

export default Xisobot;
