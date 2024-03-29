import styled from 'styled-components'

const Wrapper = styled.div`
    background-color: #91DE72;
    padding: 3em;
    width: 15em;
    font-size: 1.25em;
    text-align: center;
    box-shadow: 0px 50px 100px -20px #32325d40,
                0px 30px 60px -30px #32325d40;  
`

const Box5 = ({ language, content }) => {

    if (content !== null && content !== undefined) {
        if (language === 'EN') {
            return (
                <Wrapper>
                    {content.EnglishContent[4].text}
                </Wrapper>
            )
        } else {
            return (
                <Wrapper>
                    {content.FinnishContent[4].text}
                </Wrapper>
            )
        }
    }
    return (
        <Wrapper>Downloading...</Wrapper>
    )
}

export default Box5