import React from 'react';
import photo from '../../assets/images/main/photo_2023-10-12 12.50.59.jpeg'
import {FlexWrapper} from "../../components/flex-wrapper/FlexWrapper";
import {Container} from "../../components/Container/Container";
import {S} from './Main_Styles'

export const Main:React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Aisultan Abdykerov</span></S.Name>
                        <S.MainTitle>A Web Developer. </S.MainTitle>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt="no"/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};
