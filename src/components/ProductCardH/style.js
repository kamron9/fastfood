import styled from "styled-components";
import { ReactComponent as save } from "../../assets/icons/save.svg";
import { ReactComponent as clock } from "../../assets/icons/clock.svg";
import { ReactComponent as user } from "../../assets/icons/user.svg";
import { ReactComponent as call } from "../../assets/icons/call.svg";
import { ReactComponent as clipboard } from "../../assets/icons/clipboard.svg";
import { ReactComponent as truck } from "../../assets/icons/truck.svg";

export const Container = styled.div`
  display: flex;
  border-radius: 6px;
  background: #ffffff;
  margin-bottom: 12px;
  height: fit-content;
`;
export const Wrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: ${({ center }) => center && "center"};
  flex-direction: column;
  flex: ${({ flex }) => (flex ? 2 : 1)};
  padding: 15px 25px;
  border-right: ${({ last }) => !last && "1px solid #d9d7d7"};
`;
export const Info = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;
export const BottomLine = styled.div`
  width: 84px;
  height: 1px;
  opacity: 0.2;
  border: 1px solid #979797;
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
  font-size: 22px;
  line-height: 22px;
  color: #2d3a45;
`;
Info.Number = styled.div`
  font-family: SFProDisplay;
  font-size: 20px;
  line-height: 18px;
  color: #2d3a45;
  opacity: 0.7;
`;
Info.CallIcon = styled(call)`
  width: 20px;
  height: 20px;
  margin-right: 22px;
  opacity: 0.7;
`;
Info.ClipBoard = styled(clipboard)`
  width: 18px;
  height: 18px;
`;
Info.Truck = styled(truck)`
  width: 18px;
  height: 18px;
`;
Info.ClipPrice = styled.div`
  font-family: SFProDisplay;
  font-size: 17px;
  line-height: 18px;
  color: #2d3a45;
  margin-left: 15px;
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
  margin-left: auto;
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
  margin-top: ${({ top }) => top && `30px`};

  /* align-items: center; */
  flex-direction: ${({ column }) => column && "column"};
`;
export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ top }) => (top ? `25px` : "20px")};
`;
