import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/section-title/SectionTitle";
import {Menu} from "../../components/menu/Menu";
import {FlexWrapper} from "../../components/flex-wrapper/FlexWrapper";
import {Work} from "./work/Work";
import work1 from '../../assets/images/works/01.webp'
import work2 from '../../assets/images/works/02.webp'

const worksItems = ["All", "Landing Page", "React", "Spa"]
export const Works = () => {
    return (
      <StyledWorks>
        <SectionTitle>My Works</SectionTitle>
        <Menu menuItems={worksItems} />
          <FlexWrapper justify={'space-around'}>
              <Work title={'Social Network'}
                    text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                    src={work1}
              />
              <Work title={'Timer'}
                    text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                    src={work2}
              />
          </FlexWrapper>
      </StyledWorks>
    );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: lightblue;
`
