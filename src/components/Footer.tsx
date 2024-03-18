import ContactsIcon from './common/ContatcsIcon';
const Footer = () => {
    return (
        <footer className='pb-8 text-sm text-neutral-800 dark:text-neutral-400'>
            <hr className='mb-8 border-1 w-full border-neutral-300 transition-all dark:border-neutral-700' />

            <div className='flex flex-col items-end space-y-1 mr-10'>
                <div className='flex space-x-2 mb-2'>
                    <a
                        key='velog'
                        href='https://velog.io/@seongikx'
                        className="'text-primary transition hover:text-secondary'"
                    >
                        <ContactsIcon contact='velog' />
                    </a>
                    <a
                        key='github'
                        href='https://github.com/seongikx'
                        className="'text-primary transition hover:text-secondary'"
                    >
                        <ContactsIcon contact='github' />
                    </a>
                    <a key='instagram' href='https://www.instagram.com/p._.odo/' className="'text-primary transition hover:text-secondary'">
                        <ContactsIcon contact='instagram' />
                    </a>
                </div>
                <p>
                    <span>© since 2024 </span>
                    <a href='localhost:3000' className='text-primary transition hover:text-secondary'>
                        성익이의 일기장
                    </a>
                    <span> Powered by </span>
                    <a href='https://nextjs.org/' className='text-primary transition hover:text-secondary'>
                        Next.js
                    </a>
                    <span>, </span>
                    <a href='https://app.netlify.com/' className='text-primary transition hover:text-secondary'>
                        Netlify App
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
