import styled from 'styled-components';
import Mountain from './components/Mountain';

export default function App() {
    return (
        <>
            <Title>Mountain</Title>
            <Mountain />
        </>
    );
}

const Title = styled.h1`
    width: 100%;
    padding: 50px;
    font-size: 40px;
    text-align: center;
    color: #083734;
`;
