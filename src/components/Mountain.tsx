import { useRef } from 'react';
import { ReactSVG } from 'react-svg';
import Image from '../assets/mountain.svg';

export default function Mountain() {
    const mountainRef = useRef(null);

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

        mount0.style.transform = `translateZ(-2px)`;
        mount1.style.transform = `translateZ(-4px)`;
        mount2.style.transform = `translateZ(-6px)`;
        mount3.style.transform = `translateZ(-8px)`;
        mount4.style.transform = `translateZ(-10px)`;
        mount5.style.transform = `translateZ(-13px)`;
        mount6.style.transform = `translateZ(-16px)`;
        mount7.style.transform = `translateZ(-17px)`;
    };

    if (mountainRef.current) {
        const mountain = mountainRef.current! as HTMLDivElement;
        const svg = mountain.querySelector('svg') as SVGSVGElement;
        svg.style.position = 'absolute';
        svg.style.perspective = '10px';
        parallaxEffect(mountain);
    }

    return (
        <>
            <ReactSVG ref={mountainRef} src={Image} />
        </>
    );
}
