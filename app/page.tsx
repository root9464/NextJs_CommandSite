
import styles from './global.module.scss';
import {Main} from '@/components/pages/MainPages/MainPage';
import {Header} from '@/components/Header';

export default async function Home() {
	return (
		<section className={styles.main}>
			<Header/>
			<Main/>
		</section>
	);
}
