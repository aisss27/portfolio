import React from 'react';
import {SectionTitle} from "../../components/section-title/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../components/flex-wrapper/FlexWrapper";
import {Work} from "./work/Work";
import work1 from '../../assets/images/works/01.webp'
import work2 from '../../assets/images/works/02.webp'
import {Container} from "../../components/Container/Container";
import {S} from './Works_Style'


const worksItems = ["All", "Landing Page", "React", "Spa"]

const workData = [
    {
        title: 'Social Network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        src: work1
    },
    {
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        src: work2
    }
]
export const Works:React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={'space-between'} align={"flex-start"} wrap={'wrap'}>
                    {workData.map((w) => {
                      return  <Work title={w.title}
                              text={w.text}
                              src={w.src}
                        />
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};





