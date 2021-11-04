import { Container, IconWrapper, Text, Wrapper } from "./style";
import Edit from "../../Generic/Edit";
import Delete from "../../Generic/Delete";
import Fade from "react-reveal/Fade";
import { data } from "../../../mock/Kategoriyalar";

const Body = () => {
  // const onDelete = (id) => {
  //   let filtered = product.filter((value) => value.id !== id);
  //   let newData = { ...product, value: filtered };
  //   console.log(filtered, "filtered");
  //   console.log(newData);
  // };
  return (
    <Container>
      <Fade top>
        {data.map(({ id, kategoriyaUz, kategoriyaRu, boshKategoriya }) => {
          return (
            <Wrapper key={id}>
              <div>{kategoriyaUz}</div>
              <Text>{kategoriyaRu}</Text>
              {/* <Text>{narxi}</Text> */}
              <Text>{boshKategoriya}</Text>
              <IconWrapper left>
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
