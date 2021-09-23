import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100vh;
  padding: 28px 0 40px 0;
  border: 1px solid red;
`;
export const LogoWrapper = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  padding: 0 24px;
`;
export const Logo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;
export const LogoTitle = styled.div`
  margin-left: 20px;
`;
export const Title = styled.div`
  font-family: SFProDisplay bold;
  font-size: 18px;
  line-height: 19px;
  color: #2d3a45;
`;
export const TitleDesc = styled.div`
  font-size: 12px;
  line-height: 14px;
  color: #2d3a45;
  opacity: 0.5;
`;
