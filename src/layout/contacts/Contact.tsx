import React from 'react';
import {SectionTitle} from "../../components/section-title/SectionTitle";
import {Button} from "../../components/button/Button";
import {Container} from "../../components/Container/Container";
import {S} from './Contact_Styles'

export const Contact:React.FC = () => {
    return (
        <S.Contact>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form>
                    <S.Field placeholder={'name'}/>
                    <S.Field placeholder={'subject'}/>
                    <S.Field placeholder={'message'} as={'textarea'}/>
                    <Button type={'submit'}>Send Message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};


