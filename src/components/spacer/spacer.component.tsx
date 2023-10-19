import styled from 'styled-components/native';

interface SpacerProps {
  horizontal?: number;
  vertical?: number;
}

const Spacer = styled.View<SpacerProps>`
  margin-horizontal: ${({horizontal}) => (horizontal ? `${horizontal}px` : 0)};
  margin-vertical: ${({vertical}) => (vertical ? `${vertical}px` : 0)};
`;

export default Spacer;
