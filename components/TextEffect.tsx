
'use client';
import React, {FC} from 'react';
import {motion} from 'framer-motion';
import styles from '@/app/global.module.scss';
export type Props = {
	text: string;
	children: React.ReactNode;
};
const TextEffect = (props: Props): JSX.Element => {
	const container = {
		hidden: {opacity: 0},
		visible: (i = 1) => ({
			opacity: 1,
			transition: {staggerChildren: 0.12, delayChildren: 0.04 * i},
		}),
	};

	const child = {
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: 'spring',
				damping: 12,
				stiffness: 100,
			},
		},
		hidden: {
			opacity: 0,
			x: 20,
			transition: {
				type: 'spring',
				damping: 12,
				stiffness: 100,
			},
		},
	};

	return (
		<motion.div
			style={{overflow: 'hidden', display: 'flex', fontSize: '2rem'}}
			variants={container}
			initial='hidden'
			animate='visible'
		>
			<motion.span variants={child} className={styles.name}>
				{props.text}
			</motion.span>

		</motion.div>
	);
};

export {TextEffect};
