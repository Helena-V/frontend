import styled from 'styled-components'

const StyledButton = styled.button`
    padding: 2em;
    color: #000000;
    cursor: pointer;
    margin: 1em
`
const Wrapper = styled.div`
    text-align: center;
`

const Button = (props) => {

    return (
        <Wrapper>
            <StyledButton onClick={props.handleClick}>
                {props.text}
            </StyledButton>            
        </Wrapper>

    )
}

export default Button