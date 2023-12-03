
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';
import styles from '@/app/global.module.scss';
import {useState} from 'react';
import type {User} from '@/types/propses';
import {motion} from 'framer-motion';
const Relevance = () => {
	const [userRelevance, setUserRelevance] = useState<User[]>([
		{name: 'User name and surname', text: 'biography user', id: 1},
		{name: 'User name and surname', text: 'biography userbiography userbiography userbiography userbiography user', id: 2},
		{name: 'User name and surname', text: 'biography userbiography userbiography userbiography userbiography user', id: 3},
		{name: 'User name and surname', text: 'biography userbiography userbiography userbiography userbiography user', id: 4},
		/* Максимум 4 страницы иначе стили ебнуться нах */
	]);

	return (
		<>
			{userRelevance.map((user, id: number) => {
				// Console.log(user);
				return (
					<motion.div className={styles.requirements} key={id}
						initial={{opacity: 0, scale: 0.5}}
						whileInView={{opacity: 1, scale: 1}}
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
