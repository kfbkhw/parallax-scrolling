import { useEffect, useRef } from 'react';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import Image from '../assets/mountain.svg';

export default function Mountain() {
    const mountainRef = useRef(null);

    useEffect(() => {
        window.addEventListener(
            'scroll',
            () => mountainRef.current && parallaxEffect(mountainRef.current)
        );
    }, [mountainRef]);

    const parallaxEffect = (mountain: HTMLDivElement) => {
        const sun = mountain.querySelector('.sun') as SVGCircleElement;
        sun.style.transform = `translateY(${window.scrollY * 1.05}px)`;
    };

    return (
        <ImageWrap ref={mountainRef}>
            <ReactSVG src={Image} />
        </ImageWrap>
    );
}

const ImageWrap = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
