import styled from 'styled-components'

const Paragraph = styled.div`
    background-color: #91de72;
    padding: 4em;
    text-align: center;
    margin: 2em;    
`

const Display = (props) => {

    return (
        <div>
            <Paragraph>
                {props.content}
            </Paragraph>
        </div>
    )
}

export default Display