import styled from 'styled-components'

const Sun = styled.div`
    display: inline-block;
    position: absolute;
    margin-left: 15%;
    background-color: #f9ed0f;
    width: 40em;
    height: 22em;
    border-radius: 20em 20em 20em 20em;
    text-align: center;
    font-weight: bold;
    padding-top: 18em;
    box-shadow: 0px 50px 100px -20px #32325d40,
    0px 30px 60px -30px #32325d40; 
`

const Header = ({ language }) => {


    return (
    <Sun>
        { language === 'EN' ? 'HI.' : 'MOI.' }
    </Sun>
    )
}

export default Header