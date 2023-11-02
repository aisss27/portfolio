import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/flex-wrapper/FlexWrapper";
import {S} from './Footer_Styles'

const socialItemsData = [
    {
        iconId: 'instagramSvg'
    },
    {
        iconId: 'telegramSvg'
    },

    {
        iconId: 'vkSvg'
    },

    {
        iconId: 'linkedinSvg'
    },


]
export const Footer:React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.Name>Aisultan</S.Name>
                <S.SocialIconsList>

                    {socialItemsData.map((s,index)=> {
                        return (
                            <S.SocialIconsItem key={index}>
                                <S.SocialIconLink>
                                    <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={s.iconId}/>
                                </S.SocialIconLink>
                            </S.SocialIconsItem>
                        )
                    })}

                </S.SocialIconsList>
                <S.Copyright>© 2023 Aisultan Abdykerov, All Rights Reserved.</S.Copyright>
            </FlexWrapper>

        </S.Footer>
    );
};

