import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../constants/animations'; // 애니메이션 파일 경로 수정

const Header = () => {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='bg-white dark:bg-indigo-900 text-gray-900 dark:text-white p-4 shadow-md'>
            <div className='container mx-auto flex items-center justify-between'>
                {/* 로고 */}
                <Link href='/'>
                    <div>
                        <motion.div
                            className='flex items-center cursor-pointer'
                            variants={fadeInUp}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                        >
                            <span role='img' aria-label='logo' className='text-2xl'>
                                📚
                            </span>
                            <span className='text-xl font-semibold ml-2'>성익이의 개발 노트</span>
                        </motion.div>
                    </div>
                </Link>
                {/* 네비게이션 메뉴 */}
                <motion.nav variants={fadeInUp} initial='initial' animate='animate' exit='exit'>
                    <ul className='flex items-center space-x-4'>
                        <li>
                            <Link href='/'>
                                <div className='text-lg hover:text-blue-500 font-bold'>Blog</div>
                            </Link>
                        </li>
                        <li>
                            <Link href='/series'>
                                <div className='text-lg hover:text-blue-500 font-bold'>Series</div>
                            </Link>
                        </li>
                    </ul>
                </motion.nav>

                {/* 메뉴 토글 버튼 */}
                <motion.button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className='text-2xl'
                    variants={fadeInUp}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                >
                    ☰
                </motion.button>
            </div>
        </header>
    );
};

export default Header;
