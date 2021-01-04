import styled from 'styled-components';

export const FlexRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

export const FlexRowFlexStart = styled(FlexRow)`
  justify-content: flex-start;
`;

export const FlexRowFlexEnd = styled(FlexRow)`
  justify-content: flex-end;
`;

export const FlexRowFlexEndReverse = styled(FlexRowFlexEnd)`
  flex-direction: row-reverse;
`;
