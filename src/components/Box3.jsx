import styled from 'styled-components'

const Wrapper = styled.div`
    background-color: #069fa5;
    padding: 3em;
    width: 15em;
    font-size: 1.25em;
    text-align: center;
    box-shadow: 0px 50px 100px -20px #32325d40,
                0px 30px 60px -30px #32325d40;  
`

const Box3 = ({ language, content }) => {

    if (content !== null && content !== undefined) {
        if (language === 'EN') {
            return (
                <Wrapper>{content.EnglishContent[2].text}</Wrapper>
            )
        } else {
            return (
                <Wrapper>
                    {content.FinnishContent[2].text}
                </Wrapper>
            )
        }
    }
    return (
        <Wrapper>Downloading...</Wrapper>
    )
}

export default Box3