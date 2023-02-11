import Navi from './mainElement/Navi';
import { Row, Container } from 'reactstrap';
import MainSlider from './MainSlider';
import ActiveProject from './ActiveProject';
import OpenedProject from './OpenedProject';
import CompletedProject from './CompletedProject';
import Banner from './Banner';
import Definition from './Definition';
import BannerAccount from './BannerAccount';

function App() {
  return (
    <Container fluid>
      <Row>
        <Navi></Navi>
        <MainSlider></MainSlider>

      </Row>
      <Row>
        <ActiveProject></ActiveProject>
      </Row>
      <Row>
        <OpenedProject></OpenedProject>
      </Row>
      <Row>
        <CompletedProject></CompletedProject>
      </Row>
      <Row>
        <Banner></Banner>
      </Row>
      <Row>
        <Definition></Definition>
      </Row>
      <Row>
        <BannerAccount></BannerAccount>
      </Row>
    </Container>
  );
}

export default App;
