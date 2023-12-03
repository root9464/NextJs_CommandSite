
import styles from '@/app/global.module.scss';
import {MembersProps} from '@/types/propses';

const MemberBlock = (props: MembersProps) => {
	return (
		<div className={styles.background}>
			<h1>{props.name}</h1>
			<p>
				{props.text}
			</p>
		</div>

	);
};

export {MemberBlock};
