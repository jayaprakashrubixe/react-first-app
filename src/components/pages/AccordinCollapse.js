import React, { useState } from 'react';
import './sass-css/AccordinCollapse.css';
import { AccordionData, Data } from './AccordionData';
import styled from 'styled-components';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { IconContext } from 'react-icons';

const AccordionSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
height: 100vh;
background: #fff;
`;
const Container = styled.div`
position: absolute;
// top: 30%;
width:100%;
box-shadow: 2px 5px 30px 4px #fff;`;
const Wrap = styled.div`
background: grey;
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
// text-align: center;
width: 100%;
cursor: pointer;
margin-bottom: 6px;
h2{
    padding: 14px;
    font-size: 20px;
    width:100%;
}
span {
    margin-right: 1.5rem;
}
`;

const Dropdown = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
// align-items: center;
padding:18px;

p{
    font-size: 18px;
    width:100%;
    margin:0 auto;
    text-align:left;
}
`;

function AccordinCollapse() {

    const [clicked, setClicked] = useState(false);
    const toggle = index => {
        if (clicked === index) {
            return setClicked(null)
        }
        setClicked(index)
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff', size: '25px' }}>
                <AccordionSection>
                    <Container>
                        {Data.map((item, index) => {
                            return (
                                <>
                                    <Wrap onClick={() => toggle(index)} key={index}>
                                        <h2>{item.question}</h2>
                                        <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                    </Wrap>
                                    {clicked === index ? (
                                        <Dropdown>
                                            <p>{item.answer}</p>
                                        </Dropdown>
                                    ) : null}

                                </>
                            )
                        })}
                    </Container>
                </AccordionSection>
            </IconContext.Provider>
        </>
    )
}

export default AccordinCollapse;
