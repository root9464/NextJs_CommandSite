
import styles from '@/app/global.module.scss';
import {Video} from '@/components/Video';
import {TextEffect} from '@/components/TextEffect';

const Main = (): JSX.Element => {
	const props = 'https://cdn.coverr.co/videos/coverr-raindrops-on-tree-branches-7585/1080p.mp4';

	return (
		<div className={styles.main}>
			<Video url={props}/>
			<div className={styles.title}>
				<TextEffect text='Pay to Win'> </TextEffect>

			</div>
		</div>
	);
};

export {Main};
