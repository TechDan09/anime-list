import styled from 'styled-components';

type Props = {};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function HomePage(props: Props) {
  return (
    <Container>
      <h1>Hot Anime</h1>
    </Container>
  );
}
