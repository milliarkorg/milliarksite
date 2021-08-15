import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none
  }
`

export const MainWrapper = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.5);  
  color: #FFB000;
  font-size: 18px;
  font-weight: bold;
`
export const Logo = styled.div`
  width: 50%;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10vw;
`
export const LinksWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const LinksText = styled.div`
  width: 50%;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding-right: 10vw;
`
export const LinksImages = styled.div`
  width: 50%;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-around; 
  padding-right: 10vw;
`
