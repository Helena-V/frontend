import styled from 'styled-components'

const Wrapper = styled.div`
    display: inline-block;
    padding: 2em;
    background-color: #FFA041;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    width: 10em;
    z-index: 35;
    box-shadow: 0px 50px 100px -20px #32325d40,
                0px 30px 60px -30px #32325d40;  
`
const Link = styled.a`
    background-color: #FFA041;
    margin: 0;
    border: none;
    padding: 2em;
    text-align: center;
    text-decoration: none;
    display: block;
    color: #000000;
    cursor: pointer;
`

const StickyBarLeft2 = ({ language }) => {

    return (
        <Wrapper>
            <Link href="https://github.com/Helena-V" target="_blank" rel="noopener noreferrer">{ language === 'EN' ? 'View the FRONTEND of this project.' : 'Tämän projektin FRONTEND.' }</Link>
        </Wrapper>
    )
}

export default StickyBarLeft2