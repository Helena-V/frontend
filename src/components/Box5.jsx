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
const Arrow = styled.i`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
`
const P = styled.p`
    text-align: center
`

const Box5 = ({ language, content }) => {

    if (content !== null && content !== undefined) {
        if (language === 'EN') {
            return (
                <Wrapper>
                    {content.EnglishContent[4].text}
                    <P>
                        <Arrow></Arrow><Arrow></Arrow><Arrow></Arrow>
                    </P>
                </Wrapper>
            )
        } else {
            return (
                <Wrapper>
                    {content.FinnishContent[4].text}
                    <P>
                        <Arrow></Arrow><Arrow></Arrow><Arrow></Arrow>
                    </P>
                </Wrapper>
            )
        }
    }
    return (
        <Wrapper>Downloading...</Wrapper>
    )
}

export default Box5