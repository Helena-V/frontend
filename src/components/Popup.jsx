import { useState } from 'react'
import messageService from '../services/message.js'
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
    padding: 1em;
    margin-top: 1em;
`
const Div = styled.div`
    padding: 2em;
    margin: auto;
    text-align: center;
    content: justify;
`
const Button = styled.button`
    cursor: pointer;
    padding: 2em;
    display: inline-block;
    margin: 2em;
    width: 10em;
`
const Form = styled.form`
    width: 60%;
    margin: auto;
`
const Input = styled.input`
    width: 100%;
    padding: 1.5em 3em;
    margin: 1em 0em;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`
const Img = styled.img`
    height: 1.5em;
    cursor: pointer;
`
const P = styled.p`
`
const MessageSent = styled.div`
    margin: auto;
    text-align: center;
`
const Textarea = styled.textarea`
    width: 100%;
    padding: 1.5em 3em;
    margin: 1em 0em;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`

const Popup = ({ language, setContactInformationVisible, data2 }) => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ content, setContent ] = useState('')
    const [ messageSent, setMessageSent ] = useState(false)

    if (data2 === undefined | data2 === null) {
        return (
            <Wrapper>Downloading...</Wrapper>
        )
    }

    const handleClose = () => {
        setContactInformationVisible(false)
    }

    const resetMessage = () => {
        setName('')
        setEmail('')
        setPhone('')
        setContent('')
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const message = {
            name: name,
            email: email,
            phone: phone,
            content: content
        }
        try {
            await messageService.postMessage(message)
            resetMessage()
            setMessageSent(true)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <Wrapper>
            <Title>{ language === 'EN' ? 'CONTACT ME' : 'OTA YHTEYTTÄ' }</Title>
            <Div>
                { language === 'EN' ? data2[0].EnglishContactFirst : data2[0].FinnishContactFirst}
                <a href="mailto:hanna.r.vesa@gmail.com"><Img src="./src/resources/mail.svg"></Img></a> hanna.r.vesa@gmail.com
            <P>{ language === 'EN' ? data2[0].EnglishContactSecond : data2[0].FinnishContactSecond }</P>
            <Form onSubmit={handleSubmit}>
                <Input placeholder={ language === 'EN' ? 'Name:' : 'Nimi:'} value={name} onChange={(event) => setName(event.target.value)}></Input><br />
                <Input placeholder={ language === 'EN' ? 'Email:' : 'Sähköposti:'} value={email} onChange={(event) => setEmail(event.target.value)}></Input><br />
                <Input placeholder={ language === 'EN' ? 'Phone:' : 'Puhelin:'} value={phone} onChange={(event) => setPhone(event.target.value)}></Input><br />
                <Textarea placeholder={ language === 'EN' ? 'Message:' : 'Viesti:'} value={content} onChange={(event) => setContent(event.target.value)}></Textarea><br />
                <Button type="submit">{ language === 'EN' ? 'SEND' : 'LÄHETÄ'}</Button>
                <Button onClick={handleClose}>{ language === 'EN' ? 'CLOSE' : 'SULJE'}</Button>
            </Form>
            { messageSent ? <MessageSent>{ language === 'EN' ? 'Message sent' : 'Viesti lähetetty' }</MessageSent> 
                    : '' }
                            
            </Div>
        </Wrapper>
    )
}

export default Popup