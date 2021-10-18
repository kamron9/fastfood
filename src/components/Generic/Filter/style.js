import styled from "styled-components";
import { ReactComponent as filter } from "../../../assets/icons/filter.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  min-width: 52px;
  height: 52px;
  min-height: 52px;
  border-radius: 50%;
  background: #edeff3;
  cursor: pointer;
`;
export const Filter = styled(filter)`
  width: 42px;
  height: 42px;
  padding: 12px;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 50%;
`;
