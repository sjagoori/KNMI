import React from 'react'
import Link from 'next/link'
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styles/theme'
import Icon from 'assets/svg/chevron-right'

export default class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Link href={this.props.url}>
          <Container variant={this.props.variant}>
            <Icon />
            <span>{this.props.label}</span>
          </Container>
        </Link>
      </ThemeProvider>
    )
  }
}

const Container = styled.div`
  color: ${props => {
    if (props.variant == 'primary') return props.theme.colors.white;
    if (props.variant == 'secondary' || props.variant == 'ghost') return props.theme.colors.black;
  }};

  background-color: ${props => {
    if (props.variant == 'primary') return props.theme.colors.primary;
    if (props.variant == 'secondary') return props.theme.colors.secondary;
  }};

  border: ${props => {
    if (props.variant == 'ghost') return '2px solid ' + props.theme.colors.black;
  }};

  text-transform: capitalize;
  font-size: .9em;
  cursor: pointer;
  display: block;
  width: 150px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  svg {
    margin-left: -15px;
    fill: ${props => {
    if (props.variant == 'primary') return props.theme.colors.white;
    if (props.variant == 'secondary' || props.variant == 'ghost') return props.theme.colors.black;
  }};
    opacity: ${props => props.variant == 'text' ? 1 : 0};
    margin-right: 10px;
    transition:  opacity .1s ease-in-out;
  }

  :hover{
     svg {
      opacity: 1;
    }
  }
`