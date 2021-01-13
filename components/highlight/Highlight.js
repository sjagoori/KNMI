import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

export default class Highlight extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Text variant={this.props.variant}>
          {this.props.children}
        </Text>
      </ThemeProvider>
    )
  }
}

const Text = styled.span`
  background: linear-gradient(to top, ${props => props.variant == 'high' ? props.theme.colors.yellow : props.theme.colors.grey} .45em, transparent 0%);
  width: max-content;
  
  :hover{
    background: linear-gradient(to top, ${props => props.variant == 'high' ? props.theme.colors.yellow : props.theme.colors.grey} 1.2em, transparent 0%);
  }
`