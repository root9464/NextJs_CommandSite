
import styles from '@/app/global.module.scss';
import Image from 'next/image';
import blures from '@/assets/img/blures.png';
import {BlockL} from '@/components/pages/AboutPages/BlocksLeft';
import {BlockR} from '@/components/pages/AboutPages/BlocksRight';
import Background from '@/assets/img/backgrounds/About.jpeg';
const AboutPage = () => {
	return (
		<div className={styles.main}>
			<Image className={styles.bcimage} src={Background} alt='f'/>
			<Image src={blures} alt='b' className={styles.blures}/>
			<BlockL/>
			<BlockR/>
			<Image src={blures} alt='b' className={styles.blures2}/>
		</div>
	);
};

export {AboutPage};
