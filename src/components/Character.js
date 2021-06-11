// Write your Character component here
import React, { useState, useEffect} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import down from '../images/arrow_down.png';
import up from '../images/arrow_up.png';


const StyledUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 20px;
    overflow: hidden;
    background: transparent;
    color: #fff;
    text-shadow: 1px 1px 5px #000;
    display: inline-grid;
    text-align: left;
    border: 1px solid #d2d2d2;
    box-shadow: 0px 1px 6px -2px #807f7f;
    font-size: 1rem;
    line-height: 1.5rem;
    width: 300px;
`

const StyledLi = styled.li`
    float: left;

`

const Dropbtn = styled.div`
    text-align: left;
    display: inline-block;
`

const DropDownContent = styled.div`
    display: none;

`

const DropDownLi = styled(StyledLi)`    
    padding:  10px;    
    border: 1px solid #d2d2d2;
    box-shadow: 0px 1px 6px -2px #807f7f;
`

const SubA = styled.div`
    color: white;

`

const Img = styled.img`
    width: 10px;
    height: 10px;    
`

const Character = () => {
    const [ characters, setCharacters ] = useState([])
    const [ show, setShow ] = useState('')
    useEffect(() => {   
        axios
        .get('https://swapi.dev/api/people')
        .then(res => setCharacters(res.data.message))
        .catch(err => console.log(err));
    }, []);
    const handleClick = (name) => {
        setShow(name)
    }
    return  (
        <>
            <StyledUl>
            {characters.map((character, index) => {
                return (
                    <DropDownLi key={index}>
                        {character.name} &nbsp;
                        <Dropbtn onClick={() => handleClick(character.name)}>
                            {
                                show != character.name ? <Img src={up}/> : <Img src={down}/>
                            }
                        </Dropbtn>
                        <DropDownContent style={{display: show != character.name ? 'none' : 'block'}}>
                            <SubA>gender: {character.gender}</SubA>
                            <SubA>Height: {character.height}</SubA>
                            <SubA>Mass: {character.mass}</SubA>
                            <SubA>BirthYear: {character.birth_year}</SubA>
                            <SubA>Eye Color: {character.eye_color}</SubA>
                            <SubA>Hair Color: {character.hair_color}</SubA>
                            <SubA>Skin Color: {character.skin_color}</SubA>
                        </DropDownContent>
                    </DropDownLi>
                )
            })} 
           </StyledUl>
        </>
    )
}


export default Character
