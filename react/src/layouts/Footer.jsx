
import {
  EmailIcon,
  GithubIcon,
  LinkedInIcon
} from '../assets/icons';
import './Footer.css';


const Footer = () => {
  return (
		<div id='footer' className='footer'>
			<div className='footer-sections'>
				<div className='footer-section section-right'>
					<a href='https://linkedin.com/in/abdelhamidmaaira/'
						 target='_blank'
						 className='footer-link'
						 rel='noopener noreferrer'
						 title='LinkedIn'
					>
						<span className='link-text'>LinkedIn</span>
						<LinkedInIcon />
					</a>
					<a href='https://github.com/Abdev23' target='_blank'
						 className='footer-link'
						 rel='noopener noreferrer'
						 title='GitHub'
					>
						<span className='link-text'>GitHub</span>
						<GithubIcon />
					</a>
					<a href='mailto:test.email@gmail.com'
						 target='_blank'
						 className='footer-link'
						 rel='noopener noreferrer'
						 title='Email'
					>
						<span className='link-text'>Email</span>
						<EmailIcon />
					</a>
				</div>
				
				<div className='footer-section section-left'>
					<p className='footer-text'>
            © 2025{' '}
						<a className='inline-link' href='/'>abdelhamid.dev </a>
            |{' '}
						<a className='inline-link bolder' href='/privacy'>privacy?</a>
					</p>
				</div>
			</div>
		</div>
  );
}


export default Footer;