import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/section-title/SectionTitle";
import {Button} from "../../components/button/Button";
import {Container} from "../../components/Container/Container";
import {FlexWrapper} from "../../components/flex-wrapper/FlexWrapper";


export const Slogan:React.FC = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <SectionTitle>I Am Available For Freelance</SectionTitle>
                    <Button>Hire me</Button>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};


const StyledSlogan = styled.section`
`
