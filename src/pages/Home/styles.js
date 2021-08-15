import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
`

export const TitleWrapper = styled.div`
  margin-top: 10%;
  padding-left: 14%;
  font-weight: bold;
  font-size: 70px;
`
export const SubTitleWrapper = styled.div`
  margin-top: 2%;
  padding-left: 14%;
  font-weight: bold;
  font-size: 30px;
`

export const HomeButton = styled.div`
  background-color: #FFB000;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px ;
  padding: 15px;
  border-radius: 10px;
  `
export const HomeButtonWrapper = styled.div`
    margin-top: 2%;
    font-weight: bold;
    padding-left: 14%;
    &:hover {
      ${HomeButton}{
        background-color: RGB(240,142,23);
        transition: 200ms ease-in-out
      }
    }
  `
