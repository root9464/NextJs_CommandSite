/* eslint-disable arrow-body-style */
/* eslint-disable capitalized-comments */

/* eslint-disable @typescript-eslint/indent */

/* eslint-disable react/react-in-jsx-scope */
'use client';
import styles from '@/app/global.module.scss';
import {useState} from 'react';
import type {author} from '@/components/pages/AuthorsPages/AuthorPage';
import {motion} from 'framer-motion';
const Relevance = () => {
	const [userRelevance, setUserRelevance] = useState<author[]>([
		{name: 'User name and surname', text: 'biography user', id: 1},
		{name: 'User name and surname', text: 'biography userbiography userbiography userbiography userbiography user', id: 2},
		/* максимум 4 страницы иначе стили ебнуться нах */
	]);
	return (
		<>
			{userRelevance.map((user: any, id: number) => {
                // console.log(user);
                return (
                    <motion.div className={styles.requirements} key={id}
					initial={{opacity: 0, scale: 0.5}}
					animate={{opacity: 1, scale: 1}}
					transition={{duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}}>
                        <h2>{user.name}</h2>
                        <p>{user.text}</p>
                    </motion.div>
                );
            })}
		</>
	);
};

export {Relevance};
