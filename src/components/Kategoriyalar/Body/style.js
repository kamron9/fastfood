import styled from "styled-components";

export const Container = styled.div``;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  transition: all 0.3s;
  border-radius: 6px;
  :hover {
    box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-around;
  align-items: center;
`;
export const Text = styled.div``;
