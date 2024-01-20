import styled from 'styled-components'

const Links = styled.div`
    text-align: right;
    background-color: #ffffff;
    padding: 2em;
    float: right;
    position: absolute;
    bottom: 0;
    right: 0;
`

const Footer = ({ language, setContactInformationVisible, setStudiesVisible }) => {


    return (
        <Links>
            Imagery produced by Stable Diffusion AI.
        </Links>
    )


}

export default Footer