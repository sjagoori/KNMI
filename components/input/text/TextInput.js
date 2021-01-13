import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styles/theme'
import Icon from 'assets/svg/chevron-right'

export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Input placeholder={this.props.placeholder ? this.props.placeholder : false} />
          <Button><Icon /></Button>
        </Container>
      </ThemeProvider>
    )
  }
}

const Container = styled.div`
  display: flex;
`

const Button = styled.button.attrs({ type: 'submit' })`
  cursor: pointer;
  background-color: ${props => props.theme.colors.black};
  width: 30px;
  fill: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  height: 2em; 

  :active, :focus {
    outline: none;
  }
`

const Input = styled.input.attrs({ type: 'text' })`
  border: 3px solid ${props => props.theme.colors.black}; 
  margin: 0;
  border-radius: 0;
  height: 2em;
  
  :active, :focus {
    outline: none;
  }
`