import './Footer.css'

const Footer = () => {
    return(
        <div className='footer'>
            <div className='github'>
                <img className='github-icon' src='/images/GitHub-logo.png' alt='github'></img>
                <a className='github-link' href='https://github.com/jordan-bohmbach'>Jordan Bohmbach: Github</a>
            </div>
            <div className='linkedin'>
                <img className='linkedin-icon' src='/images/linkedin-icon.png' alt='linkedin'></img>
                <a className='linkedin-link' href='https://www.linkedin.com/in/jordanbohmbach/'>Jordan Bohmbach: Linkedin</a>
            </div>
        </div>
    )
}

export default Footer