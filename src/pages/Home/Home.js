import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { MainWrapper, TitleWrapper, SubTitleWrapper, HomeButton, HomeButtonWrapper } from './styles'
import { StyledLink } from '../../components/Navbar/styles'

function Home() {
  return (
    <>
      <Navbar />
      <MainWrapper>
        <TitleWrapper>
          Lorem ipsum dolor sit amet
        </TitleWrapper>
        <SubTitleWrapper>
          Lorem ipsum dolor sit amet
        </SubTitleWrapper>
        <HomeButtonWrapper>
          <StyledLink to='/contact' style={{ textDecoration: 'none', color: '#ffffff' }}>
            <HomeButton>
              CLICK HERE
            </HomeButton>
          </StyledLink>
        </HomeButtonWrapper>
      </MainWrapper>
    </>
  )
}

export default Home
