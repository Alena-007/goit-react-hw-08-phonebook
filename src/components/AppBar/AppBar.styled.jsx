import styled from 'styled-components';

export const Header = styled.header`
  top: ${p => p.theme.space[0]}px;
  left: ${p => p.theme.space[0]}px;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[6]}px;
  padding-right: ${p => p.theme.space[6]}px;
  background-color: ${p => p.theme.colors.secondary};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
  margin-left: auto;
  margin-right: auto;
`;
