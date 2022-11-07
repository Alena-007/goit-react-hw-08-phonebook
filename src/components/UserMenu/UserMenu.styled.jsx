import styled from 'styled-components';

export const UserMenuStyled = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${p => p.theme.space[4]}px;
  align-items: center;
  padding: ${p => p.theme.space[2]}px;

  & p {
    color: ${p => p.theme.colors.white};
    font-size: ${p => p.theme.fontSizes.l};
    opacity: 0.9;

    & span {
        font-size: ${p => p.theme.fontSizes.xl};
        font-weight: ${p => p.theme.fontWeights.bold};
        text-transform: uppercase;
    }
  }

  & button {
    width: ${p => p.theme.space[6]}px;
    padding: ${p => p.theme.space[2]}px;
    text-align: center;
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.bold};
    background-color: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.secondary};
    border: ${p => p.theme.borders.white};
    border-radius: ${p => p.theme.radii.sm};
    box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    
    &:hover {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
`;
