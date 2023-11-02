import React from 'react';
import {Link} from "../../../components/link/Link";
import {Button} from "../../../components/button/Button";
import {S} from '../Works_Style'

type WorkPropsType = {
    title: string
    text: string
    src: string
}
export const Work:React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt=""/>
                <Button>view project</Button>
            </S.ImageWrapper>

            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <Link href={'#'}>demo</Link>
                <Link href={'#'}>code</Link>
            </S.Description>
        </S.Work>
    );
};

