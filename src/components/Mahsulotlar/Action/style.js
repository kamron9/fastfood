import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  height: 40px;
  margin-top: 20px;
`;
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 15px;
  padding-left: ${({ left }) => left && "30px"};
  /* width: 160px; */
  font-family: SFProDisplay;
  font-size: 11px;
  line-height: 13px;
  text-transform: uppercase;
  color: #2d3a45;
  border-left: ${({ none }) => (none ? "none" : "1px solid #8d9ba8")};
`;
