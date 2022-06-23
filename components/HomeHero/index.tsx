
import { Container, TextContainer, InfosContainer, CodeItem, Picture } from './styles';
import picture from '../../assets/pessoa.webp'

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      
      <img src={Picture} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Hi</h1>
          <h2>My name is Pedro</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">//My Info</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Name: <span className="blue">Pedro,</span>
            </div>
            <div>
              LastName: <span className="blue">Zanetti</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Role</span> {'\u007B'}
            <div>
              Occupation: <span className="blue">Dev Front-end,</span>
            </div>
            <div>
              Location: <span className="blue">São Paulo, Brazil</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;