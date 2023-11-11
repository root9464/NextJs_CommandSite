
/* eslint-disable react/react-in-jsx-scope */
'use client';
import styles from '@/app/global.module.scss';
import {Button} from './Buttons';
import {motion} from 'framer-motion';

const BlockInvite = () => (
	<motion.div className={styles.invite}
		// Animate={{x: 278}}
		whileInView={{translateX: 278}}
		transition={{type: 'spring', stiffness: 100}}>
		<h1 className={styles.th1}>Присоедениться к сообществу Pay to Win</h1>
		<p className={styles.tp}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into </p>
		<div className={styles.posbuttons}>
			<Button text='fff'/>
			<Button text='fff'/>
		</div>
	</motion.div>
);

export {BlockInvite};
