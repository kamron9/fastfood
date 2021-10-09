import styled from "styled-components";
import { ReactComponent as save } from "../../assets/icons/save.svg";
import { ReactComponent as clock } from "../../assets/icons/clock.svg";
import { ReactComponent as user } from "../../assets/icons/user.svg";

export const Container = styled.div`
  height: 100px;
  border-radius: 20px;
  background: #ffffff;
`;
export const Wrapper = styled.div``;
export const Info = styled.div`
  display: flex;
  margin-left: ${({ end }) => end && "auto"};
  align-items: ${({ center }) => center && "center"};
`;
Info.OrderID = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  max-width: fit-content;
  background: #20d472;
  padding: 7px;
  border-radius: 18px;
  min-width: 80px;
  height: 36px;
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.466667px;
  color: #ffffff;
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: #edeff3;
  border-radius: 18px;
  margin-left: 15px;
`;
Info.Save = styled(save)`
  width: 17px;
  height: 17px;
`;
export const ClockWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
Info.Clock = styled(clock)`
  width: 24px;
  height: 24px;
`;
Info.Time = styled.div`
  height: 16px;
  font-family: SFProDisplay;
  font-size: 22px;
  line-height: 16px;
  color: #2d3a45;
  margin-left: 10px;
`;
Info.User = styled(user)`
  width: 24px;
  height: 24px;
  margin-right: 22px;
`;
Info.Name = styled.div`
  font-family: SFProDisplay;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.533333px;
  color: #2d3a45;
`;
Info.Number = styled.div`
  font-family: SFProDisplay;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.4px;
  color: #2d3a45;
  mix-blend-mode: normal;
  opacity: 0.7;
  margin: 5px 0 20px 0;
`;
Info.TotalPrice = styled.div`
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 20px;
  color: #8d9ba8;
  margin-bottom: 5px;
  margin-top: ${({ top }) => top && `20px`};
`;
Info.Price = styled.div`
  font-family: SFProDisplay bold;
  font-size: 24px;
  line-height: 18px;
  color: #2d3a45;
`;
Info.PaymeIcon = styled.div`
  display: flex;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #14e5e4;
  margin-right: 10px;
`;
Info.Payme = styled.div`
  display: flex;
`;
Info.Operator = styled.div`
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 20px;
  color: #8d9ba8;
  margin-bottom: 5px;
`;
Info.OperatorName = styled.div`
  font-family: SFProDisplay;
  font-size: 20px;
  line-height: 20px;
  color: #2d3a45;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
`;
