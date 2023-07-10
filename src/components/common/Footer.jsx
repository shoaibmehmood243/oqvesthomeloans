import { fb, footer1, footer2, insta, location, lock, logoLight, msgLight, phoneLight, twitter } from '../../assets'
import styles from '../../styles/footer.module.css'

const Footer = ()=> {
    return(
        <footer>
            <div className={styles.footer}>
                <div className={styles.footerGrid}>
                    <div>
                        <img className='mb-4' src={logoLight} />
                        <p style={{letterSpacing: '1px'}} className='mb-6 text-sm'><img src={lock} /> Your information is protected by SSL encryption. By submitting this contact request you expressly consent OQVEST may contact you by telephone, email, or direct mail even if you have previously registered on a Do Not Call registry or have previously requested that OQVEST not contact you for solicitation purposes.</p>
                        <p>Stay Connected</p>
                        <div className='flex gap-3'>
                            <a target='_blank' href='https://www.facebook.com/oqvest'>
                                <img src={fb} />
                            </a>
                            <a target='_blank' href='https://www.instagram.com/oqvest'>
                                <img src={insta} />
                            </a>
                        </div>
                    </div>
                    <div className={`mt-3 md:mt-8 ${styles.links}`}>
                        <h5>NMLS# 1977536</h5>
                        <p className='mb-1'>Click here</p>
                        <a className='my-1' href='#'>www.nmlsconsumeraccess.org</a>
                        <p className='mt-1'>to check license.</p>
                        <div className='flex gap-3'>
                            <img src={footer1} />
                            <img src={footer2} />
                        </div>
                    </div>
                    <div>
                        <div className='flex align-items-center gap-2 mb-3'>
                            <img src={phoneLight} />
                            <span><a href="tel:+551 225 0733">551-225-0733</a></span>
                        </div>
                        <div className='flex align-items-center gap-2 mb-3'>
                            <img src={msgLight} />
                            <span><a href="mailto:contact@oqvest.com">contact@oqvest.com</a></span>
                        </div>
                        <div className={styles.map}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.118078643175!2d-74.04563212505788!3d40.73742723606027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25744c1d852d5%3A0x18559a0769b54c06!2s50%20Harrison%20St%20%23211c%2C%20Hoboken%2C%20NJ%2007030%2C%20USA!5e0!3m2!1sen!2s!4v1679495069595!5m2!1sen!2s" width="350" height="250" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className='flex align-items-center gap-2 mt-4'>
                            <img src={location} />
                            <span>50 Harrison ST, STE 211C Hoboken, NJ 07030</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerInner}>
                <hr className='my-4' />
                <p className={styles.bottom}>Copyright OQVEST 2021. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;