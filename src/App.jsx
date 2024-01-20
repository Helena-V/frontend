import { useState, useEffect } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useSpring, animated } from '@react-spring/web'
import Body from './components/Body.jsx'
import Header from './components/Header.jsx'
import StickyBar from './components/StickyBar.jsx'
import StickyBar2 from './components/StickyBar2.jsx'
import StickyBarLeft from './components/StickyBarLeft.jsx'
import StickyBarLeft2 from './components/StickyBarLeft2.jsx'
import Footer from './components/Footer.jsx'
import Box1 from './components/Box1.jsx'
import Box2 from './components/Box2.jsx'
import Box3 from './components/Box3.jsx'
import Box4 from './components/Box4.jsx'
import Box5 from './components/Box5.jsx'
import Box6 from './components/Box6.jsx'
import Box7 from './components/Box7.jsx'
import textService from './services/texts.js'
import contactService from './services/contact.js'


const App = () => {

  const [ language, setLanguage ] = useState('EN')
  const [ data, setData ] = useState([])
  const [ data2, setData2 ] = useState([])
  const [ windowWidth, setWindowWidth ] = useState(0)
  const [ windowHeight, setWindowHeight ] = useState(0)
  const [ scrollPosition, setScrollPosition ] = useState(0)
  const [ isReady150, setIsReady150 ] = useState(false)

  useEffect(() => {
    textService.getAll()
      .then(response => {
          setData(response.data)
      })
  }, [])

  useEffect(() => {
    contactService.getAll()
      .then(response => {
        setData2(response.data)
      })
  }, [])


  const handleResize = () => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
  }

  useEffect(() => {
    if ( typeof window !== 'undefined' && window.innerHeight !== null && window.innerWidth !== null ) {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
      window.addEventListener('resize', handleResize)
      return () => { 
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [windowHeight, windowWidth])
          

  useEffect(() => {
    if (document.getElementById('parallax-wrapper') !== 'undefined' && document.getElementById('parallax-wrapper') !== null) {
      const handleScroll = () => {
        const position = document.getElementById('parallax-wrapper').scrollTop
        setScrollPosition(position)
        const measure = windowHeight * 1.5
        if (scrollPosition > measure) {
          setIsReady150(true)
        }
        if (measure > scrollPosition) {
          setIsReady150(false)
        }
      } 
      document.getElementById('parallax-wrapper').addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [scrollPosition, windowHeight])

  const springPropsLeftSide = useSpring({
    config: { 
      duration: 2000,
      tension: 280,
      friction: 60
    },
    from: { x: '0%' },
    to: { x: isReady150 ? '-100%' : '0%' }   
  })


  const springPropsRightSide = useSpring({
    config: { 
      duration: 2000,
      tension: 280,
      friction: 60
    },   
        from : { x: '0%' },
        to: { x: isReady150 ? '100%' : '0%' }
    })

  return (

    <Parallax pages={15} id="parallax-wrapper" style={{ height: '100vh', margin: '0%', padding: '0', position: 'relative' }}>

      <ParallaxLayer speed={0.4} sticky={{ start: 0, end: 0.5 }} style={{ zIndex: '0' }}>
        <img className="background" src="./src/resources/background1.3.png" />
      </ParallaxLayer>

      <ParallaxLayer offset={0.0} sticky={{ start: 0, end: 3 }} style={{ zIndex: '10' }}>
        <animated.img className="background-left" src="./src/resources/background3-left.png" style={springPropsLeftSide} />
        <animated.img className="background-right" src="./src/resources/background2-right.png" style={springPropsRightSide} />
      </ParallaxLayer>

      <ParallaxLayer offset={0.0} speed={0.5} style={{ display: 'inline-block', position: 'absolute', left: '70%', width: '30%', zIndex: '5' }} >
        <img className="objects" src="./src/resources/lightbluecloud.png" />
      </ParallaxLayer>

      <ParallaxLayer offset={0.0} speed={0.3} style={{ display: 'inline-block', position: 'absolute', top: '-2.25%', left: '65%', width: '25%', zIndex: '-10' }} >
        <img className="objects" src="./src/resources/darkbluecloud.png" />
      </ParallaxLayer>

      <ParallaxLayer offset={0.0} speed={2.0} style={{ display: 'inline-block', position: 'absolute', left: '40%', top: '-2.75%', width: '30%', zIndex: '15' }} >
        <img className="objects" src="./src/resources/lightbluecloud.png" />
      </ParallaxLayer>

      <ParallaxLayer offset={0.0} speed={0.0} style={{ display: 'block', position: 'absolute', left: '60%', top: '-1.75%', width: '25%', zIndex: '-10' }}>
        <img className="objects" src="./src/resources/lightbluecloud.png" />
      </ParallaxLayer>

      <ParallaxLayer offset={0.0} speed={0.0} style={{ display: 'block', position: 'absolute', left: '40%', top: '-0.5%', width: '25%', zIndex: '0' }}>
        <img className="objects" src="./src/resources/darkbluecloud.png" />
      </ParallaxLayer>

      <ParallaxLayer offset={1.5} speed={0.4} sticky={{ start: 1.8, end: 2.6 }} style={{ display: 'block', position: 'absolute', margin: 'auto', width: '50%' }}>
        <Header language={language}></Header>
      </ParallaxLayer>

      <ParallaxLayer offset={3.8} sticky={{ start: 3.8, end: 4.8 }} style={{ display: 'inline-block', position: 'absolute', top: '20%', left: '40%', width: '15em' }}>
        <Box1 language={language} content={data[0]}></Box1>
      </ParallaxLayer>

      <ParallaxLayer offset={5.2} sticky={{ start: 5.2, end: 6.2 }} style={{ display: 'inline-block', position: 'absolute', top: '20%', left: '55%', width: '15em' }}>
        <Box2 language={language} content={data[0]}></Box2>
      </ParallaxLayer>

      <ParallaxLayer offset={5.6} sticky={{ start: 5.6, end: 14 }} style={{ display: 'inline-block', position: 'absolute', top: '5%', left: '90%', width: '8%', margin: '0', padding: '0', maxHeight: '30%' }}>
        <StickyBar language={language} setLanguage={setLanguage}></StickyBar>
      </ParallaxLayer>

      <ParallaxLayer offset={6.0} sticky={{ start: 6.0, end: 14 }} style={{ display: 'inline-block', position: 'absolute', top: '35%', left: '90%', width: '8%', margin: '0', padding: '0', maxHeight: '30%' }}>
        <StickyBar2 language={language}></StickyBar2>
      </ParallaxLayer>

      <ParallaxLayer offset={6.6} sticky={{ start: 6.6, end: 7.6 }} style={{ display: 'inline-block', position: 'absolute', top: '20%', left: '35%', width: '15em' }}>
        <Box3 language={language} content={data[0]}></Box3>
      </ParallaxLayer>

      <ParallaxLayer offset={8.0} sticky={{ start: 8.0, end: 9.0 }} style={{ display: 'inline-block', position: 'absolute', top: '20%', left: '55%', width: '15em' }}>
        <Box4 language={language} content={data[0]}></Box4>
      </ParallaxLayer>

      <ParallaxLayer offset={9.4} sticky={{ start: 9.4, end: 10.4 }} style={{ display: 'inline-block', position: 'absolute', top: '20%', left: '35%', width: '15em' }}>
        <Box5 language={language} content={data[0]}></Box5>
      </ParallaxLayer>

      <ParallaxLayer offset={9.6} sticky={{ start: 9.6, end: 14 }} style={{ display: 'block', position: 'absolute', top: '10%', left: '0%', width: '8%', margin: '2em', padding: '0', maxHeight: '30%' }}>
        <StickyBarLeft language={language}></StickyBarLeft>
      </ParallaxLayer>

      <ParallaxLayer offset={9.9} sticky={{ start: 9.9, end: 14 }} style={{ display: 'block', position: 'absolute', top: '40%', left: '0%', width: '8%', margin: '2em', padding: '0', maxHeight: '30%' }}>
        <StickyBarLeft2 language={language}></StickyBarLeft2>
      </ParallaxLayer> 

      <ParallaxLayer offset={10.8} sticky={{ start: 10.8, end: 11.8 }} style={{ display: 'inline-block', position: 'absolute', top: '20%', left: '55%', width: '15em' }}>
        <Box6 language={language} content={data[0]}></Box6>
      </ParallaxLayer>

      <ParallaxLayer offset={12.2} sticky={{ start: 12.2, end: 13.2 }} style={{ display: 'inline-block', position: 'absolute', top: '20%', left: '35%', width: '15em' }}>
        <Box7 language={language}></Box7>
      </ParallaxLayer>

      <ParallaxLayer offset={14.0} style={{ position: 'absolute', zIndex: '100'}}>
        <Body language={language} content={data[1]}></Body>
        <Footer language={language}></Footer>
      </ParallaxLayer>

    </Parallax>

  )
}


export default App