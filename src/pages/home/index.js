import logo from '../../assets/logo-refidim.png';
import youtube from '../../assets/youtube.png';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';

import '../../style.css';


function Home() {
    return (
        <div className="home_main">
            <header className="home_header">
                <div className='home_container_header'>
                    <div className="home_logo">
                        <img src={logo} alt="Logo igreja cristã refidim" />
                    </div>
                    <nav className='home_header_nav'>
                        <a href="#">
                            Dias de Culto
                        </a>
                        <a href="#">
                            Palavra do Dia
                        </a>
                        <a href="#">
                            Sobre Nós
                        </a>
                        <a href="#">
                            Calendário
                        </a>
                        <a href="#">
                            Calendário
                        </a>
                        <a className='teste' href="#">
                            Doe
                        </a>
                    </nav>
                    <div className='home_box_social_media'>
                        <img src={youtube} alt="Logo Youtube" />
                        <img src={instagram} alt="Logo Instagram" />
                        <img src={facebook} alt="Logo Facebook"/>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Home;