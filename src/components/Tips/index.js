import React from 'react';

import { Container, Option, Title, IMG  } from './styles';

import img8 from '../../images/08.png';
import img9 from '../../images/09.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';


const items = [
    {
        key: String(Math.random()),
        img: img8,
        title: 'Pague suas contas e ganhe cashback',
        bgColor:"#172c4a",
    },
    {
        key: String(Math.random()),
        img: img9,
        title: 'Promoções',
        bgColor:"#6a0159",
    },
    {
        key: String(Math.random()),
        img: img10,
        title: 'Convide um amigo',
        bgColor:"#4139c8",
    },
    {
        key: String(Math.random()),
        img: img11,
        title: 'Pague suas contas sem sair de casa',
        bgColor:"#00ab6b",
    },
    {
        key: String(Math.random()),
        img: img12,
        title: 'Dúvidas',
        bgColor:"#ba2f76",
    },
]

export default function Tips() {
    return (
        <Container>
            {items.map((item) =>(
                <Option key={item.key} bgColor={item.bgColor}>
                <Title>{item.title}</Title>

                <IMG source={item.img} />
            </Option>
            ))}
        </Container>
    );
}