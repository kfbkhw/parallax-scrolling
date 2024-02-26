import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import Image from '../assets/mountain.svg';

export default function Mountain() {
    return (
        <ImageWrap>
            <ReactSVG src={Image} />
        </ImageWrap>
    );
}

const ImageWrap = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
