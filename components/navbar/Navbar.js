import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styles/theme'
import Link from 'next/link'
import Icon from 'assets/svg/logo'
import Button from 'components/button/Button'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <div>
            <Icon />
          </div>
          <div>
            {Object.keys(this.props.links).map((key, index) => {
              return <Link key={key} href={this.props.links[key].url}>{this.props.links[key].label}</Link>
            })}
          </div>
          <div>
            <Button
              label={this.props.cta.label}
              url={this.props.cta.url}
              variant='primary'
            />
            {/* <Link href={this.props.cta.url}>{this.props.cta.label}</Link> */}
          </div>
        </Container>
      </ThemeProvider>
    )
  }
}

const Container = styled.div`
  background-color:  ${props => props.theme.colors.white};
  margin-top: 30px;
  overflow: hidden;
  height: 60px;
  width: 75vw;
  margin-left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  filter: drop-shadow(3px 4px 4px  ${props => props.theme.colors.grey} + '25');

  div {
    cursor: pointer;
    display: flex; 
    align-items: center;
    justify-content: space-around;
    height: 100%;
    max-width: 1000px;
    padding-left: 20px;
    padding-right: 20px;
    
    :hover{
      :last-child{
        a:before{
          opacity: 1
        }
      }
    }

    a {
      padding-left: 20px;
      padding-right: 20px;
      margin-right: 15px;
      margin-left: -15px;
      text-decoration: none;
      color: black;
      padding-right: 30px;
      
      &:last-child {
        border: 0;
        margin-right: 10px;
      }
      
      &::before {
        content: 'ᐅ';
        margin-left: -10px;
        padding-right: 5px;
        opacity: 0;
        transition:  opacity .3s ease-in-out;
      }
      
      &:hover {
        color:#0000a4;
        
        &::before {
          opacity: 1;
        }
      }
    }

  &:last-child {
    /* border-left: .5px solid grey; */
    height: 70%;
    justify-content: center;
    background-color: ${props => props.theme.colors.primary};
    transition: .3s;
    /* margin-right: 1em; */
    /* border-radius: 5px; */
    
    & a {
        text-align: center;
        width: 100px;
        padding: 0 0 0;
        color: white;

      &::before {
        margin-left: -5px;
        margin-right: 5px;
      }
    }
    
    &:active{
      filter: brightness(200%);
      box-shadow: inset -2px 0px 4px ${props => props.theme.colors.black} + '35';
    }
  }
}
`