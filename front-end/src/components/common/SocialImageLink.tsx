import styled from 'styled-components';

interface SocialImageLinkStyleType {
    width?: string;
    height?: string;
    smWidth?: string;
    smHeight?: string;
    image?: string;
    link?: string;
}



const SocialImageLinkStyle = styled.a<SocialImageLinkStyleType>`
    cursor: pointer;
    img{
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        
        @media screen and (max-width: 768px) {
            width: ${(props) => props.smWidth};
            height: ${(props) => props.smHeight};
        }
    }
`

const SocialImageLink = (
    {
        width,
        height,
        smWidth,
        smHeight,
        link,
        image
    }: SocialImageLinkStyleType
) => {
    return (
        <SocialImageLinkStyle
            width={width}
            height={height}
            smHeight={smHeight}
            smWidth={smWidth}
            href={link}
            target='_blank'
        >
            <img src={image} />
        </SocialImageLinkStyle>
    )
}

export default SocialImageLink