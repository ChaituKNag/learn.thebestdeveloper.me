import styled from "styled-components"
import { fonts } from "../../themes"

export default styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.bgDark};
  color: ${({ theme }) => theme.bg};
  border-radius: 0.3rem;
  border: 4px solid ${({ theme }) => theme.borderColor};
  font-size: 1.2rem;
  cursor: pointer;
  font-family: ${fonts.secondary};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: 0;
  display: block;

  &:hover {
    opacity: 0.9;
  }
`
