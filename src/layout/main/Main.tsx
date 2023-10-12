import React from 'react';
import styled from "styled-components";
import photo from '../../assets/images/main/photo_2023-10-12 12.50.59.jpeg'
import {FlexWrapper} from "../../components/flex-wrapper/FlexWrapper";
export const Main = () => {
    return (
        <StyledMain>
          <FlexWrapper align={'center'} justify={'space-around'}>
              <div>
                  <span>Hi There</span>
                  <Name>I am Aisultan Abdykerov</Name>
                  <MainTitle>A Web Developer. </MainTitle>
              </div>
              <Photo src={photo} alt="no"/>
          </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
min-height: 100vh;
  background-color: yellowgreen;
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const MainTitle = styled.h1`

`

const Name = styled.h2`

`