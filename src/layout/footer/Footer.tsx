import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/flex-wrapper/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <Name>Aisultan</Name>
                <SocialIconsList>
                    <SocialIconsItem>
                        <SocialIconLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'instagramSvg'}/>
                        </SocialIconLink>
                    </SocialIconsItem>

                    <SocialIconsItem>
                        <SocialIconLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'telegramSvg'}/>
                        </SocialIconLink>
                    </SocialIconsItem>

                    <SocialIconsItem>
                        <SocialIconLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'vkSvg'}/>
                        </SocialIconLink>
                    </SocialIconsItem>

                    <SocialIconsItem>
                        <SocialIconLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'linkedinSvg'}/>
                        </SocialIconLink>
                    </SocialIconsItem>
                </SocialIconsList>
                <Copyright>© 2023 Aisultan Abdykerov, All Rights Reserved.</Copyright>
            </FlexWrapper>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    min-height: 20vh;
  background-color: hotpink;
`

const Name = styled.span`
`
const SocialIconsList = styled.ul`
    display: flex;
    gap: 30px;
`
const SocialIconsItem = styled.li`
`
const SocialIconLink = styled.a`
`
const Copyright = styled.small`
`