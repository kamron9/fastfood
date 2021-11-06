import styled from "styled-components";
import { ReactComponent as check } from "../../../assets/icons/check.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  min-width: 44px;
  height: 44px;
  min-height: 44px;
  border-radius: 50%;
  border: 3px solid #edeff3;
  cursor: pointer;
`;
export const Check = styled(check)`
  box-sizing: content-box;
  width: 21px;
  height: 21px;
`;
