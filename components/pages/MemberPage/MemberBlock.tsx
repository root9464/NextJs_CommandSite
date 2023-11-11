/* eslint-disable @typescript-eslint/no-explicit-any */

import styles from '@/app/global.module.scss';

const MemberBlock = ({props}: any) => {
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
