import styled from "styled-components";

interface CardProps {
  w?: number;
}
interface WrapperProps {
  justify?: string;
}
const Card = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem 2rem;
  overflow-y: auto;
  margin: 0 1rem;
  background: linear-gradient(145deg, #1d2835, #273647);
  border-radius: 15%;
  box-shadow: 9.91px 9.91px 15px #1f2b38, -9.91px -9.91px 15px #253344;
  border-radius: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: ${(props: WrapperProps) => props.justify || "space-between"};
  align-items: center;
  height: 100vh;
  padding: 2rem 1rem;
`;

export const withCustomProps = (WrapperComponent) => (props) =>
  <WrapperComponent {...props} />;

export default withCustomProps(Card);
export { Wrapper };
