import styled from "@emotion/styled"
import CenterAlignment from "./CenterAlignment"
import { Link } from "react-router-dom"

const Title = styled.h1`
  ${CenterAlignment};
  margin-top: 11.5rem;
  margin-bottom: 2rem;
  color: #4167B2;
`

const PromptLink = styled(Link)`
  display: block;
  margin-top: 3.5rem;
  text-align: center;
  text-decoration: none;
  color: #4167B2;
`

export { Title, PromptLink }