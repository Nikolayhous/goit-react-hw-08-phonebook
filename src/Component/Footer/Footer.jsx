import s from './Footer.module.css';

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footer__info}>
                <span className={s.text}>copyright © </span> &nbsp;
                <p>
                    <a
                        href="https://github.com/Nikolayhous"
                        className={s.link}
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                    >
                        <svg viewBox="0 0 70 36">
                            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                        </svg>
                        Nikolayhous
                    </a>
                </p>
                &nbsp;
                <span className={s.text}>
                    All right reserved. || Privacy statement
                </span>
            </div>
        </div>
    );
};

export default Footer;
