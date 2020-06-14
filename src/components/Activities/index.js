import  React from 'react';
import { Feather , MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';


import { 
Container, Header,
Title, Card,
CardHeader, Avatar,
Description, 
Bold, CardBody,
UserName,CardFooter,
Details,Value,
Divider,Date,
Actions, Options,
OptionLabel,
} from './styles';

import avatar from '../../images/avatar.png';

export default function Activities() {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@Bank</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Raphael Augusto</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 2000</Value>

                        <Divider/>

                        <Feather name="lock" color="#fff" size={15} />
                        <Date>há 5 anos</Date>
                    </Details>

                    <Actions>
                        <Options>
                            <MaterialCommunityIcons  name="comment-outline" color="#fff" size={18}  />
                            <OptionLabel>0</OptionLabel>
                        </Options>

                        <Options>
                            <AntDesign  name="hearto" color="#fff" size={18}  />
                            <OptionLabel>0</OptionLabel>
                        </Options>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}