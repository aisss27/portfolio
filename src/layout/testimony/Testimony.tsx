import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/section-title/SectionTitle";
import {Icon} from "../../components/icon/Icon";
import {Slider} from "../../components/slider/Slider";
import {FlexWrapper} from "../../components/flex-wrapper/FlexWrapper";
import {IconWrapper} from "../skills/skill/Skill";
import {Container} from "../../components/Container/Container";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'}>
                    <IconWrapper>
                        <Icon iconId={'quote'}/>
                    </IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  background-color: #aeb9ff;
  min-height: 50vh;
  
  ${IconWrapper} {
    margin: 40px 0 72px;
  }
`
