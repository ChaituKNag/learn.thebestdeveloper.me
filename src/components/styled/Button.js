import styled from "styled-components"

export default styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.bgDark};
  color: ${({ theme }) => theme.bg};
  border-radius: 0.3rem;
  border: 4px solid ${({ theme }) => theme.borderColor};
  font-size: 1.2rem;
  cursor: pointer;
`
