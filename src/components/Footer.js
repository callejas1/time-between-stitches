import '../styles/footer.css';
import { FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import artist from '../content/artist';


function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <div className='footer-container'>
                    <div className='footer-icons'>
                        <a
                            href='https://instagram.com/callejas__martin/'
                            target='_blank'
                            rel='noreferrer'
                            className='footer-links'
                        >
                            <FaInstagram className='footer-logos insta-logo' />
                        </a>
                        <a
                            href='mailto:mcallejasneyra@gmail.com'
                            target='_self'
                            className='footer-links'
                        >
                            <HiOutlineMail className='footer-logos email-logo' />
                        </a>
                    </div>
                    <p className='footer-info name'>{artist.name}</p>
                    <div className='footer-right-info'>
                        <p className='footer-info'>Maastricht, NL</p>
                        <p className='footer-info'>Created By Yos Callejas &copy; {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;