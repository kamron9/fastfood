import styled from "styled-components";

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
