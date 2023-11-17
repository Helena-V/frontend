import styled from 'styled-components'

const Links = styled.div`
    text-align: center;
    background-color: #BABEC0;
    padding: 0em;
    display: flex;
    list-style-type: none;
    position: absolute;
    bottom: 0%;
    width: 100%;
`
const Li = styled.li`
    margin: auto;
    padding: 0.5em;
`
const A = styled.a`
    margin: 0;
    padding: 0.5em;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
`

const Footer = ({ language, setContactInformationVisible, setStudiesVisible }) => {

    const handleClick = () => {
        setContactInformationVisible(true)
        setStudiesVisible(false)
    }

    const handleClick2 = () => {
        setStudiesVisible(true)
        setContactInformationVisible(false)
    }

    if (language === 'EN') {
        return (
            <Links>
                <Li>
                    <A onClick={handleClick}>CONTACT</A>
                </Li>
                <Li>
                    <A onClick={handleClick2}>My Studies in Computer Science</A>
                </Li>
                <Li>Imagery produced by Stable Diffusion AI</Li>
            </Links>
        )
    } else {
        return (
            <Links>
                <Li>
                    <A onClick={handleClick}>OTA YHTEYTTÄ</A>
                </Li>
                <Li>
                    <A onClick={handleClick2}>Tietojenkäsittelytieteen opintoni</A>
                </Li>
                <Li>Imagery produced by Stable Diffusion AI</Li>
            </Links>
        )
    }

}

export default Footer