import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getSeries, getPostsBySeries } from '@/lib/posts';
import { PostMetadata } from '../../../types/post';
import { motion } from 'framer-motion';
import { staggerOne, fadeInUp } from '@/constants/animations';
interface SeriesPostsPageProps {
    posts: PostMetadata[];
}

const SeriesPostsPage: NextPage<SeriesPostsPageProps> = ({ posts }) => {
    const router = useRouter();
    const seriesName = router.query.seriesName as string;

    return (
        <motion.div
            initial='initial'
            animate='animate'
            exit='exit'
            className='flex flex-col min-h-screen bg-white dark:bg-gray-800'
        >
            <Header />
            <motion.div variants={staggerOne} className='flex-grow p-4 container mx-auto px-4 py-8'>
                <motion.h1 variants={fadeInUp} className='text-3xl font-bold mb-6 dark:text-white'>
                    {seriesName}
                </motion.h1>
                <motion.h3 variants={fadeInUp} className='text-xl font-bold mb-6 dark:text-white'>
                    Series Posts ({posts.length})
                </motion.h3>
                <motion.ul variants={staggerOne} className='space-y-4'>
                    {posts.map((post) => (
                        <motion.li
                            key={post.id}
                            variants={fadeInUp}
                            className='bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow'
                        >
                            <Link href={`/posts/${post.id}`}>
                                <div className='text-xl font-semibold hover:underline dark:text-white'>
                                    {post.title}
                                </div>
                            </Link>
                            <p className='text-gray-600 dark:text-gray-300'>{post.date}</p>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
            <Footer />
        </motion.div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const series = getSeries();
    const paths = Array.from(series.keys()).map((seriesName) => ({
        params: { seriesName: seriesName },
    }));
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<SeriesPostsPageProps, { seriesName: string }> = async (context) => {
    const seriesName = context.params?.seriesName ?? '';
    const posts = getPostsBySeries(seriesName);

    return {
        props: {
            posts,
        },
    };
};

export default SeriesPostsPage;
