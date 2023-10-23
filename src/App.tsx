import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/main/Main";
import {Skills} from "./layout/skills/Skills";
import {Works} from "./layout/works/Works";
import {Testimony} from "./layout/testimony/Testimony";
import {Contact} from "./layout/contacts/Contact";
import {Slogan} from "./layout/slogan/Slogan";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
            <Slogan/>
            <Footer/>
        </div>
    );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
`;