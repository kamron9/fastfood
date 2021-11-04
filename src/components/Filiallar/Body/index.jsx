import { Container, IconWrapper, Text, Wrapper } from "./style";
import Edit from "../../Generic/Edit";
import Delete from "../../Generic/Delete";
import Fade from "react-reveal/Fade";
import { data } from "../../../mock/filiallar";
import Map from "../../Generic/Map";

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
        {data.map(({ id, filialNomi, joylashuv, ishVaqti }) => {
          return (
            <Wrapper key={id}>
              <Text>{filialNomi}</Text>
              <Text>{joylashuv}</Text>
              <Text>{ishVaqti}</Text>
              <IconWrapper left>
                <Map />
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
