
import {type Metadata} from 'next';
import styles from '@/app/global.module.scss';
import {MembersProps} from '@/types/propses';
import {MemberBlock} from '@/components/pages/MemberPage/MemberBlock';
export const metadata: Metadata = {
	title: 'About | Next app',
};

export default async function Member() {
	const person1: MembersProps = {
		name: 'Egor',
		text: 'fffffff',
	};
	return (
		<section className={styles.main}>
			<div className={styles.block5}>
				<MemberBlock {...person1}/>
			</div>
		</section>
	);
}
