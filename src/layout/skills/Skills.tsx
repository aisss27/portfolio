import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/flex-wrapper/FlexWrapper";
import {Icon} from "../../components/icon/Icon";
import {SectionTitle} from "../../components/section-title/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                <Skill iconId={'codeSvg'}
                       title={'html5'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>

                <Skill iconId={'cssSvg'}
                       title={'css'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>

                <Skill iconId={'reactSvg'}
                       title={'react'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>

                <Skill iconId={'typescriptSvg'}
                       title={'typescript'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>

                <Skill iconId={'styledcomponentSvg'}
                       title={'styled components'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>

                <Skill iconId={'figmaSvg'}
                       title={'web design'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: pink;
  min-height: 100vh;
`