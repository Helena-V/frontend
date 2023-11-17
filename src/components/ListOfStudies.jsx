import styled from 'styled-components'

const Wrapper = styled.div`
    margin: auto;
    width: 50%;
    height: 100%;
    background-color: #91de72;
    box-shadow: 0px 50px 100px -20px #32325d40,
                0px 30px 60px -30px #32325d40;      
`
const Title = styled.h1`
    text-align: center;
    text-transform: uppercase;
    padding: 2em;
    margin-top: 1em;
`
const Div = styled.div`
    padding: 4em;
    margin: auto;
    text-align: center;
    content: justify;
`
const Button = styled.button`
    cursor: pointer;
    padding: 2em;
    display: block;
    margin: auto;
`
const Table = styled.table`
    text-align: left;
`

const ListOfStudies = ({ language, setStudiesVisible }) => {

    const handleClick = () => {
        setStudiesVisible(false)
    }

    if (language === 'EN') {
        return (
            <Wrapper>
                <Title>List of my Studies in Computer Science</Title>
                <Div>
                    <Table>
                        <tbody>
                            <tr>
                                <td>Cyber Security Base: Introduction to Cyber Security</td><td>1 ECTS</td><td>ACCEPTED</td>
                            </tr>
                            <tr>
                                <td>Cyber Security Base: Securing Software</td><td>3 ECTS</td><td>ACCEPTED</td>
                            </tr>
                            <tr>
                                <td>Cyber Security Base: Advanced Topics</td><td>3 ECTS</td><td>ACCEPTED</td>
                            </tr>
                            <tr>
                                <td>Fullstack Open</td><td>8 ECTS</td><td>5/5</td>
                            </tr>
                            <tr>
                                <td>Fullstack Open, Programming project</td><td>10 ECTS</td><td>ACCEPTED</td>
                            </tr>
                            <tr>
                                <td>Introduction to Programming (Java)</td><td>5 ECTS</td><td>5/5</td>
                            </tr>
                            <tr>
                                <td>Advanced Course on Programming (Java)</td><td>5 ECTS</td><td>1/5</td>
                            </tr>
                            <tr>
                                <td>Web Server Programming (Java)</td><td>5 ECTS</td><td>3/5</td>
                            </tr>
                            <tr>
                                <td>Introduction to Databases</td><td>5 ECTS</td><td>5/5</td>
                            </tr>
                            <tr>
                                <td>Introduction to AI</td><td>2 ECTS</td><td>ACCEPTED</td>
                            </tr>
                            <tr>
                                <td>Introduction to Application Design</td>4 ECTS<td>3/5</td>
                            </tr>
                            <tr>
                                <td>User Interfaces, Usability and Cognitive Ergonomy</td><td>4 ECTS</td><td>3/5</td>
                            </tr>
                        </tbody>
                    </Table>
                </Div>
                <Button onClick={handleClick}>CLOSE</Button>
            </Wrapper>
        )
    } else {
        return (
<Wrapper>
                <Title>Lista tietojenkäsittelytieteen opinnoistani</Title>
                <Div>
                    <Table>
                        <tbody>
                            <tr>
                                <td>Cyber Security Base: Introduction to Cyber Security</td><td>1 ECTS</td><td>HYVÄKSYTTY</td>
                            </tr>
                            <tr>
                                <td>Cyber Security Base: Securing Software</td><td>3 ECTS</td><td>HYVÄKSYTTY</td>
                            </tr>
                            <tr>
                                <td>Cyber Security Base: Advanced Topics</td><td>3 ECTS</td><td>HYVÄKSYTTY</td>
                            </tr>
                            <tr>
                                <td>Fullstack - websovellusohjelmointi</td><td>8 ECTS</td><td>5/5</td>
                            </tr>
                            <tr>
                                <td>Fullstack - websovellusohjelmointi, harjoitustyö</td><td>10 ECTS</td><td>HYVÄKSYTTY</td>
                            </tr>
                            <tr>
                                <td>Ohjelmoinnin perusteet (Java)</td><td>5 ECTS</td><td>5/5</td>
                            </tr>
                            <tr>
                                <td>Ohjelmoinnin jatkokurssi (Java)</td><td>5 ECTS</td><td>1/5</td>
                            </tr>
                            <tr>
                                <td>Web-palvelinohjelmointi (Java)</td><td>5 ECTS</td><td>3/5</td>
                            </tr>
                            <tr>
                                <td>Tietokantojen perusteet</td><td>5 ECTS</td><td>5/5</td>
                            </tr>
                            <tr>
                                <td>Introduction to AI</td><td>2 ECTS</td><td>ACCEPTED</td>
                            </tr>
                            <tr>
                                <td>Johdatus sovellussuunnitteluun</td>4 ECTS<td>3/5</td>
                            </tr>
                            <tr>
                                <td>Käyttöliittymät, käytettävyys ja kognitiivinen ergonomia</td><td>4 ECTS</td><td>3/5</td>
                            </tr>
                        </tbody>
                    </Table>
                </Div>
                <Button onClick={handleClick}>SULJE</Button>
            </Wrapper>
        )
    }

}

export default ListOfStudies