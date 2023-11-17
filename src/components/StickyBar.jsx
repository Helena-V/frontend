
import styled from 'styled-components'

const Div = styled.div`
    display: inline-block;
    padding: 2em;
    width: 6em;
    margin: 0em;
    background-color: #f9ea11;
    position: absolute;
    right: 0%;
    top: 5%;
    z-index: 35;
    box-shadow: 0px 50px 100px -20px #32325d40,
                0px 30px 60px -30px #32325d40;      
`
const Button = styled.button`
    background-color: #f9ea11;
    margin: 0;
    border: none;
    padding: 2em;
    text-align: center;
    text-decoration: none;
    display: block;
    cursor: pointer;
`

const StickyBar = ({ language, setLanguage }) => {

    const switchLanguage = () => {
        if (language === 'EN') {
            setLanguage('FI')
        } else {
           setLanguage('EN')
        }
    }


      return (
          <Div>
              <Button onClick={switchLanguage}>FI</Button>
              <Button onClick={switchLanguage}>EN</Button>
          </Div>
    )
} 
    

  export default StickyBar