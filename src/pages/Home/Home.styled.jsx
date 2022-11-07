import styled from 'styled-components';

export const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  margin-left: auto;
  margin-right: auto;
  width: 1200px;

  & h2 {
    color: ${p => p.theme.colors.white};
    font-size: ${p => p.theme.fontSizes.xl};
    opacity: 0.9;
    margin-bottom: ${p => p.theme.space[3]}px;
  }

  & h1 {
    color: ${p => p.theme.colors.white};
    font-size: ${p => p.theme.fontSizes.xl};
    opacity: 0.9;
    margin-bottom: ${p => p.theme.space[4]}px;
    text-transform: uppercase;
  }

  & h3 {
    color: ${p => p.theme.colors.white};
    font-size: ${p => p.theme.fontSizes.l};
    opacity: 0.9;
    margin-bottom: ${p => p.theme.space[3]}px;
  }

  & img {
    width: 50%;
    opacity: 0.8;
    border: ${p => p.theme.borders.white};
    border-radius: ${p => p.theme.radii.sm};
    box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
  }
`;
