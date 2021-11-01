import styled from "styled-components";
import { ReactComponent as edit } from "../../../assets/icons/edit.svg";

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
export const Edit = styled(edit)`
  box-sizing: content-box;
  width: 18px;
  height: 18px;
`;
