import styled from "styled-components";
import { ReactComponent as plus } from "../../../assets/icons/plus.svg";
import { ReactComponent as search } from "../../../assets/icons/search.svg";
import Filter from "../../Generic/Filter";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  position: sticky;
  top: 0;
  z-index: 99;
  height: 180px;
  width: 100%;
  background: #fff;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  background: #000;
  position: relative;
  border: ${({ right }) => right && `2px solid #e5e5e5`};
  cursor: ${({ right }) => right && `pointer`};
  padding: 22px 40px;
  background: #fff;
`;
export const Plus = styled(plus)`
  padding: 11px;
  width: 36px;
  min-width: 36px;
  height: 36px;
  min-height: 36px;
  background: #20d472;
  border-radius: 50%;
  cursor: pointer;
`;
export const Text = styled.div`
  font-family: SFProDisplay bold;
  font-size: 14px;
  line-height: 16px;
  color: #2d3a45;
  margin-left: 14px;
`;
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 400px;
  height: 48px;
  background: #edeff3;
  border-radius: 24px;
  margin-right: 20px;
`;
export const Input = styled.input`
  width: 100%;
  font-size: 17px;
  padding: 15px;
  background: #edeff3;
  border-radius: 24px;
  border: none;
  outline: none;
`;
export const Search = styled(search)`
  width: 20px;
  height: 20px;
  margin-right: 15px;
`;
export const FilterTab = styled.div`
  width: 313px;
  height: 227px;
  left: 650px;
  top: 73px;
  background: #ffffff;
  box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  border-radius: 6px;
`;
