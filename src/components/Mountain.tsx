import { useEffect, useRef } from 'react';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import Image from '../assets/mountain.svg';

export default function Mountain() {
    const mountainRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (mountainRef.current) {
                const mountain = mountainRef.current as HTMLDivElement;
                parallaxEffect(mountain);
            }
        });
    }, [mountainRef]);

    const parallaxEffect = (mountain: HTMLDivElement) => {
        const sun = mountain.querySelector('.sun') as SVGCircleElement;
        sun.style.transform = `translateY(${window.scrollY * -0.1}px)`;

        const grayCloud = mountain.querySelector('.gray-clouds') as SVGElement;
        const whiteCloud = mountain.querySelector(
            '.white-clouds'
        ) as SVGElement;

        grayCloud.style.transform = `translateX(${
            window.scrollY * 0.125
        }px) translateY(${window.scrollY * -0.1}px)`;
        whiteCloud.style.transform = `translateX(${
            window.scrollY * -0.125
        }px) translateY(${window.scrollY * -0.1}px)`;

        const bird1 = mountain.querySelector('.bird1') as SVGElement;
        const bird2 = mountain.querySelector('.bird2') as SVGElement;
        const bird3 = mountain.querySelector('.bird3') as SVGElement;

        bird1.style.transform = `translateX(${window.scrollY}px)`;
        bird2.style.transform = `translateX(-${
            window.scrollY * 3.5
        }px) translateY(${window.scrollY * -1}px)`;
        bird3.style.transform = `translateX(-${
            window.scrollY * 0.5
        }px) translateY(${window.scrollY * -1}px)`;

        const mount0 = mountain.querySelector('.mountain0') as SVGElement;
        const mount1 = mountain.querySelector('.mountain1') as SVGElement;
        const mount2 = mountain.querySelector('.mountain2') as SVGElement;
        const mount3 = mountain.querySelector('.mountain3') as SVGElement;
        const mount4 = mountain.querySelector('.mountain4') as SVGElement;
        const mount5 = mountain.querySelector('.mountain5') as SVGElement;
        const mount6 = mountain.querySelector('.mountain6') as SVGElement;
        const mount7 = mountain.querySelector('.mountain7') as SVGElement;

        mount0.style.transform = `translateY(${window.scrollY * -0.2}px)`;
        mount1.style.transform = `translateY(${window.scrollY * -0.4}px)`;
        mount2.style.transform = `translateY(${window.scrollY * -0.6}px)`;
        mount3.style.transform = `translateY(${window.scrollY * -0.8}px)`;
        mount4.style.transform = `translateY(${window.scrollY * -1}px)`;
        mount5.style.transform = `translateY(${window.scrollY * -1.3}px)`;
        mount6.style.transform = `translateY(${window.scrollY * -1.6}px)`;
        mount7.style.transform = `translateY(${window.scrollY * -1.7}px)`;
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
