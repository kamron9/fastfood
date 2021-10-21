import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  border: 1px solid red;
  width: 100%;
  height: 80px;
  background: #ffffff;
  transition: all 0.2s;
  :hover {
    box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  }

  border-radius: 6px;
  margin-bottom: 10px;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
export const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 30px;
`;
export const Text = styled.div`
  margin-left: 25px;
`;
