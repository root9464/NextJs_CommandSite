
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';
import styles from '@/app/global.module.scss';
import Image from 'next/image';
import Background from '@/assets/img/backgrounds/Authors.jpeg';
import {Author} from './Author';
import {useState} from 'react';
import {AuthorProps} from '@/types/propses';

const AuthorPage = (): JSX.Element => {
	const [authors, setAuthors] = useState<AuthorProps[]>([
		{stack: 'fullstack devoloper', id: 1},
		{stack: 'backend devoloper', id: 2},
		{stack: 'web designer', id: 3},
	]);

	return (
		<>
			<Image className={styles.bcimage} src={Background} alt='f'/>
			<div className={styles.block3}>
				{authors.map((item, id: number) => {
					// Console.log(id);
					return (
						<Author {...item} key={id}/>
					);
				})}
			</div>
		</>
	);
};

export {AuthorPage};
