
'use client';
import styles from '@/app/global.module.scss';
import Link from 'next/link';
import {motion} from 'framer-motion';
type Props = {
	text: string;
};
const Button = (props: Props) => {
	return (
		<>
			<motion.div
				className={styles.btn}
				initial={{opacity: 0, scale: 0.5}}
				animate={{opacity: 1, scale: 1}}
				transition={{duration: 0.3, ease: [0, 0.71, 0.2, 1.01], scale: {type: 'spring', damping: 5, stiffness: 100, restDelta: 0.001}}}>
				<Link href='/home'>{props.text}</Link></motion.div>
		</>
	);
};

export {Button};
