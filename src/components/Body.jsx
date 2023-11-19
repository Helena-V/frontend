import { useState } from 'react'
import Display from './Display.jsx'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin: auto;
    padding: 3em;
    width: 50%;
    background-color: #91de72;
    box-shadow: 0px 50px 100px -20px #32325d40,
                0px 30px 60px -30px #32325d40;     
`
const List = styled.div`
    text-align: center;
    margin: 1em;
    padding-bottom: 8em;
    display: flex;
    list-style-type: none;
    content: justify;
`
const ListItem = styled.li`
    margin: 0em;
    font-color: #000000;
    display: block;
    height: 4em;
    width: 20em;
`
const Title = styled.h1`
    text-align: center;
    margin: 1em;
    text-transform: uppercase;
    padding: 1em;
`
const Button = styled.button`
    padding: 2em;
    color: #000000;
    cursor: pointer;
    margin: auto;
    display: block;
    height: 8em;
    width: 20em;
    font-size: 0.9em;
    box-shadow: 0px 50px 100px -20px #32325d40,
                0px 30px 60px -30px #32325d40;      
`
const P = styled.p`
    text-align: center;
`
const Link = styled.a`
    color: #000000;
`

const Body = ({ language, content }) => {  

    const [ firstQuestionReady, setFirstQuestionReady ] = useState(true)
    const [ secondQuestionReady, setSecondQuestionReady ] = useState(false)
    const [ thirdQuestionReady, setThirdQuestionReady ] = useState(false)

    const [ firstAnswerReady, setFirstAnswerReady ] = useState(false)
    const [ secondAnswerReady, setSecondAnswerReady ] = useState(false)
    const [ thirdAnswerReady, setThirdAnswerReady ] = useState(false)

    const [ firstOption, setFirstOption ] = useState(false)
    const [ secondOption, setSecondOption ] = useState(false)
    const [ thirdOption, setThirdOption ] = useState(false)


    if (content === undefined | content === null) {
        return (
            <Wrapper>Downloading...</Wrapper>
        )
    }

    const clickHandler1 = () => {
        setFirstQuestionReady(false)
        setFirstOption(true)
        setFirstAnswerReady(true)
    }

    const clickHandler2 = () => {
        setFirstQuestionReady(false)
        setSecondOption(true)
        setFirstAnswerReady(true)
    }

    const clickHandler3 = () => {
        setFirstQuestionReady(false)
        setThirdOption(true)
        setFirstAnswerReady(true)
    }

    const moveToNext1 = () => {
        setFirstAnswerReady(false)
        setSecondQuestionReady(true)
        setFirstOption(false)
        setSecondOption(false)
        setThirdOption(false)
    }

    const secondClickHandler1 = () => {
        setSecondQuestionReady(false)
        setSecondAnswerReady(true)
        setFirstOption(true)
    }

    const secondClickHandler2 = () => {
        setSecondQuestionReady(false)
        setSecondAnswerReady(true)
        setSecondOption(true)
    }

    const secondClickHandler3 = () => {
        setSecondQuestionReady(false)
        setSecondAnswerReady(true)
        setThirdOption(true)
    }

    const moveToNext2 = () => {
        setSecondAnswerReady(false)
        setThirdQuestionReady(true)
        setFirstOption(false)
        setSecondOption(false)
        setThirdOption(false)
    }

    const thirdClickHandler1 = () => {
        setThirdQuestionReady(false)
        setThirdAnswerReady(true)
        setFirstOption(true)
    }

    const thirdClickHandler2 = () => {
        setThirdQuestionReady(false)
        setThirdAnswerReady(true)
        setSecondOption(true)
    }

    const thirdClickHandler3 = () => {
        setThirdQuestionReady(false)
        setThirdAnswerReady(true)
        setThirdOption(true)
    }

    const reset = () => {
        setFirstQuestionReady(true)
        setThirdAnswerReady(false)
        setFirstOption(false)
        setSecondOption(false)
        setThirdOption(false)
    }

    if (firstQuestionReady) {
        return (
            <Wrapper>
                <Title>{ language === 'EN' ? content.EnglishQuiz[0].content : content.FinnishQuiz[0].content }</Title>
                <Display content={ language === 'EN' ? content.EnglishQuiz[1].question : content.FinnishQuiz[1].question }></Display>
                <List>
                    <ListItem>
                        <Button onClick={clickHandler1}>{ language === 'EN' ? content.EnglishQuiz[1].options[0] : content.FinnishQuiz[1].options[0] }</Button>
                    </ListItem>
                    <ListItem>
                        <Button onClick={clickHandler2}>{ language === 'EN' ? content.EnglishQuiz[1].options[1] : content.FinnishQuiz[1].options[1] }</Button>
                    </ListItem>
                    <ListItem>
                        <Button onClick={clickHandler3}>{ language === 'EN' ? content.EnglishQuiz[1].options[2] : content.FinnishQuiz[1].options[2] }</Button>
                    </ListItem>
                </List>           
            </Wrapper>
        )    
    }

    if (firstAnswerReady) {
        return (
            <Wrapper>
                <Display content={ language === 'EN' ?
                    (firstOption ? content.EnglishQuiz[1].answers[0] : 
                        (secondOption ? content.EnglishQuiz[1].answers[1] : 
                                            content.EnglishQuiz[1].answers[2]))
                 : 
                    (firstOption ? content.FinnishQuiz[1].answers[0] : 
                        (secondOption ? content.FinnishQuiz[1].answers[1] : 
                                            content.FinnishQuiz[1].answers[2]))
                     } >
                 </Display>
                <Button onClick={moveToNext1}>{ language === 'EN' ? 'NEXT' : 'SEURAAVA'}</Button>
            </Wrapper>
        )
    }

    if (secondQuestionReady) {
        return (
            <Wrapper>
                <Display content={ language === 'EN' ? content.EnglishQuiz[2].question : content.FinnishQuiz[2].question }></Display>
                <List>
                    <ListItem>
                         <Button onClick={secondClickHandler1}>{ language === 'EN' ? content.EnglishQuiz[2].options[0] : content.FinnishQuiz[2].options[0]}</Button>
                    </ListItem>
                    <ListItem>
                        <Button onClick={secondClickHandler2}>{ language === 'EN' ? content.EnglishQuiz[2].options[1] : content.FinnishQuiz[2].options[1] }</Button> 
                    </ListItem>
                    <ListItem>
                        <Button onClick={secondClickHandler3}>{ language === 'EN' ? content.EnglishQuiz[2].options[2] : content.FinnishQuiz[2].options[2] }</Button>                        
                    </ListItem>
                </List>          
            </Wrapper>
        )
    }

    if (secondAnswerReady) {
        return (
            <Wrapper>
                <Display content={ language === 'EN' ?
                    (firstOption ? content.EnglishQuiz[2].answers[0] : 
                        (secondOption ? content.EnglishQuiz[2].answers[1] : 
                                            content.EnglishQuiz[2].answers[2]))
                 : 
                    (firstOption ? content.FinnishQuiz[2].answers[0] : 
                        (secondOption ? content.FinnishQuiz[2].answers[1] : 
                                            content.FinnishQuiz[2].answers[2]))
                     } >
                 </Display>
                <Button onClick={moveToNext2}>{ language === 'EN' ? 'NEXT' : 'SEURAAVA'}</Button>
            </Wrapper>
        )
    }

    if (thirdQuestionReady) {
        return (
            <Wrapper>
                <Display content={language === 'EN' ? content.EnglishQuiz[3].question : content.FinnishQuiz[3].question}></Display>
                <List>
                    <ListItem>
                        <Button onClick={thirdClickHandler1}>{language === 'EN' ? content.EnglishQuiz[3].options[0] : content.FinnishQuiz[3].options[0]}</Button>
                    </ListItem>
                    <ListItem>
                        <Button onClick={thirdClickHandler2}>{language === 'EN' ? content.EnglishQuiz[3].options[1] : content.FinnishQuiz[3].options[1]}</Button>
                    </ListItem>
                    <ListItem>
                        <Button onClick={thirdClickHandler3}>{language === 'EN' ? content.EnglishQuiz[3].options[2] : content.FinnishQuiz[3].options[2]}</Button>
                    </ListItem>
                </List>
            </Wrapper>
        )
    }

    if (thirdAnswerReady) {
        return (
            <Wrapper>
                <Display content={ language === 'EN' ?
                    (firstOption ? content.EnglishQuiz[3].answers[0] : 
                        (secondOption ? content.EnglishQuiz[3].answers[1] : 
                                            content.EnglishQuiz[3].answers[2]))
                 : 
                    (firstOption ? content.FinnishQuiz[3].answers[0] : 
                        (secondOption ? content.FinnishQuiz[3].answers[1] : 
                                            content.FinnishQuiz[3].answers[2]))
                     } >                      
                 </Display>
                 <P>{ language === 'EN' ? content.EnglishQuiz[4].text : content.FinnishQuiz[4].text }</P>
                 <P>{ language === 'EN' ? content.EnglishQuiz[4].again : content.FinnishQuiz[4].again }</P>  
                 <Button onClick={reset}>{ language === 'EN' ? content.EnglishQuiz[4].button : content.FinnishQuiz[4].button}</Button>
            </Wrapper>         
        )
    }

    return (
        <Wrapper>
            Nothing to see here
        </Wrapper>
    )
}

export default Body