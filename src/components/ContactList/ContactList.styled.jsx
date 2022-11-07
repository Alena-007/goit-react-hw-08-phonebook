import styled from 'styled-components';

export const ContactItems = styled.li`
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
  opacity: 0.9;
`;

export const ListButton = styled.button`
  margin-left: ${p => p.theme.space[6]}px;
  font-size: ${p => p.theme.fontSizes.s};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.sm};
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
`;
