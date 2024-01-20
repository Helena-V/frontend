
import styled from 'styled-components'

const Div = styled.div`
    display: inline-block;
    padding: 1em;
    width: 8em;
    margin: 0;
    background-color: #0d85aa;
    position: absolute;
    right: 0%;
    top: 35%;
    z-index: 35;
    box-shadow: 0px 50px 100px -20px #32325d40,
                0px 30px 60px -30px #32325d40;  
`
const Link = styled.a`
    background-color: #0d85aa;
    margin: 0;
    border: none;
    padding: 2em;
    text-align: center;
    text-decoration: none;
    display: block;
    color: #000000;
    cursor: pointer;
`
const Img = styled.img`
    height: 3em;
    cursor: pointer;
`

const StickyBar2 = ({ language }) => {

      return (
          <Div>
            <Link href="https://github.com/Helena-V" target="_blank" rel="noopener noreferrer"><img className="objects" style={{ margin: '0', padding: '0' }} src="./resources/github-mark.svg"/></Link>
            <Link href="mailto:hanna.r.vesa@gmail.com"><Img src="./resources/mail.svg"></Img></Link>
          </Div>
    )
} 
    

  export default StickyBar2