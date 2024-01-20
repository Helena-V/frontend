import styled from 'styled-components'

const Wrapper = styled.div`
    background-color: #FFA041;
    padding: 3em;
    width: 15em;
    font-size: 1.25em;
    text-align: center;
    box-shadow: 0px 50px 100px -20px #32325d40,
                0px 30px 60px -30px #32325d40;  
`
const Link = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: #000000;
    background-color: #f9ea11;
`

const Box7 = ({ language }) => {


        if (language === 'EN') {
            return (
                <Wrapper>
                    Please visit <Link href="https://flowery.onrender.com/" target="_blank" rel="noopener noreferrer">Flowery</Link>, my coding project for course Fullstack Open.
                    (Startup from hibernation may take a while.)                
                </Wrapper>
            )
        } else {
            return (
                <Wrapper>
                    Tutustuthan myös ohjelmointiprojektiini <Link href="https://flowery.onrender.com/" target="_blank" rel="noopener noreferrer">Flowery</Link> (Sovellus käynnistyy hitaasti).
                </Wrapper>
            )
        }

}

export default Box7