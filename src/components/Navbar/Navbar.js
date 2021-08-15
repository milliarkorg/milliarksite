import { LinksWrapper, LinksImages, LinksText, Logo, MainWrapper, StyledLink } from './styles.js'
import { Link } from 'react-router-dom'
import logo from '../../assets/logoMilliark.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import whatsapp from '../../assets/whatsapp.png'
import './index.css'

function Navbar() {
  return (
    <MainWrapper>
      <Logo>
        <img className='logo' src={logo} alt='logo' />
      </Logo>
      <LinksWrapper>
        <LinksText>
          <StyledLink to='/' style={{ textDecoration: 'none', color: '#FFB000' }}>
            <p className='navbarlink'>Home</p>
          </StyledLink>
          <StyledLink to='/link1' style={{ textDecoration: 'none', color: '#FFB000' }}>
            <p className='navbarlink'>LINK</p>
          </StyledLink>
          <StyledLink to='/contact' style={{ textDecoration: 'none', color: '#FFB000' }}>
            <p className='navbarlink'>Contato</p>
          </StyledLink>
        </LinksText>
        <LinksImages>
          <img className='social' src={facebook} alt='facebook' />
          <img className='social' src={instagram} alt='instagram' />
          <img className='social' src={whatsapp} alt='whatsapp' />
        </LinksImages>
      </LinksWrapper>
    </MainWrapper>
  )
}

export default Navbar;