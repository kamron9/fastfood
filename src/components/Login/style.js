import styled from "styled-components";
import Img from "../../assets/images/login.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const LoginImg = styled.div`
  display: flex;
  flex: 2;
  background-image: url(${Img});
  background-size: cover;
  background-repeat: no-repeat;
`;
export const LoginSection = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`;
export const Title = styled.div`
  font-family: SFProDisplay bold;
  font-size: 24px;
  line-height: 14px;
  color: #2d3a45;
`;
Title.Description = styled.div`
  font-family: SFProDisplay;
  margin-top: 10px;
  font-size: 16px;
  line-height: 20px;
  color: #8d9ba8;
`;
export const InputWrapper = styled.div`
  margin-top: 20px;
  box-sizing: border-box;
  width: 300px;
  height: fit-content;
  box-sizing: content-box;
  padding: 10px;
  background: #ffffff;
  box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  border-radius: 6px;
`;
export const Line = styled.div`
  width: -1px;
  height: 1px;
  opacity: 0.2;
  margin: 5px;
  border: 1px solid #979797;
`;
export const InputLogin = styled.input`
  width: 100%;
  height: 60px;
  font-size: 17px;
  border: none;
  outline: none;
  padding: 10px;
  :focus {
    border-left: 3px solid #fcb600;
  }
`;
export const InputPassword = styled.input`
  width: 100%;
  font-size: 17px;
  height: 60px;
  border: none;
  outline: none;
  padding: 10px;
  :focus {
    border-left: 3px solid #fcb600;
  }
`;
export const Button = styled.button`
  width: 320px;
  border: none;
  outline: none;
  height: 70px;
  cursor: pointer;
  font-size: 17px;
  background: #2d3a45;
  mix-blend-mode: normal;
  opacity: 0.8;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 6px;
  color: white;
  margin-top: 10px;
  transition: all 0.2s;
  :hover {
    background: #fcb600;
    color: black;
  }
`;
