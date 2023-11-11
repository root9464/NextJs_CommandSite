/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';
import styles from '@/app/global.module.scss';
import Image from 'next/image';
import Background from '@/assets/img/backgrounds/Authors.jpeg';
import {Author} from './Author';
import {useState} from 'react';
export type author = {
	id: number;
	stack?: string;
	name?: string;
	text?: string;
};
const AuthorPage = (): JSX.Element => {
	const [authors, setAuthors] = useState<author[]>([
		{stack: 'FULLSTACK DEVOLOPER', id: 1},
		{stack: 'FULLSTACK DEVOLOPER', id: 2},
		{stack: 'FULLSTACK DEVOLOPER', id: 3},
	]);

	return (
		<>
			<Image className={styles.bcimage} src={Background} alt='f'/>
			<div className={styles.block3}>
				{authors.map((item: any, id: number) => {
					// Console.log(id);
					return (
						<Author props={item} key={id}/>
					);
				})}
			</div>
		</>
	);
};

export {AuthorPage};
