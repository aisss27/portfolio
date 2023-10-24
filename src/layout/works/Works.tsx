import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/section-title/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../components/flex-wrapper/FlexWrapper";
import {Work} from "./work/Work";
import work1 from '../../assets/images/works/01.webp'
import work2 from '../../assets/images/works/02.webp'
import {Container} from "../../components/Container/Container";

const worksItems = ["All", "Landing Page", "React", "Spa"]
export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={'space-between'} align={"flex-start"}>
                    <Work title={'Social Network'}
                          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                          src={work1}
                    />
                    <Work title={'Timer'}
                          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                          src={work2}
                    />
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  
`



