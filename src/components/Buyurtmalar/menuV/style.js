import styled from "styled-components";

const setColor = ({ type }) => {
  console.log(type);
  switch ( type ) {
    case  `brown`:
      return ` #FCB600`;
    case  "blue":
      return ` #11ACFD`;
    case `pink`:
      return `#8E007E`;
    default:
      return `#20d472`;
  }
};

export const Container = styled.div`
  display: flex;
  margin: 33px 50px;
  box-sizing: border-box;
  overflow-x: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 340px;
  margin-right: 30px;
`;
export const Condition = styled.div`
  display: flex;
  margin-bottom: 5px;
  align-items: center;
`;
export const Numbers = styled.div`
  background-color: #fff;
  padding: 0 7px 0px 7px;
  width: fit-content;
  margin-left: 7px;
`;
export const SummaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 6px;
  margin-bottom: 10px;
`;
export const Spot = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${setColor};
`;
export const Summa = styled.div`
  width: 145px;
  height: 18px;
  font-family: SFProDisplay bold;
  font-size: 18px;
  line-height: 18px;
  color: #2d3a45;
`;
