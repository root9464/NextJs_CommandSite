
import styles from '@/app/global.module.scss';
import {Button} from './Buttons';

const BlockInvite = () => (
	<div className={styles.invite}>
		<h1 className={styles.th1}>Присоедениться к сообществу Pay to Win</h1>
		<p className={styles.tp}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into </p>
		<div className={styles.posbuttons}>
			<Button text='fff'/>
			<Button text='fff'/>
		</div>
	</div>
);

export {BlockInvite};
