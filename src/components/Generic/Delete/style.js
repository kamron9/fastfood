import styled from "styled-components";
import { ReactComponent as trash } from "../../../assets/icons/trash.svg";

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
export const Trash = styled(trash)`
  width: 20px;
  height: 20px;
`;
