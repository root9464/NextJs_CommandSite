/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/keyword-spacing */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable react/react-in-jsx-scope */

'use client';
import styles from '@/app/global.module.scss';
import Image from 'next/image';
import Background from '@/assets/img/backgrounds/Authors.jpeg';
import {Author} from './Author';
import {useState} from 'react';
import Link from 'next/link';
const AuthorPage = (): JSX.Element => {
    type author = {
        stack: string;
        id:number;
    };
	const [authors, setAuthors] = useState<author[]>([
        {stack: 'FULLSTACK DEVOLOPER', id: 1},
        {stack: 'FULLSTACK DEVOLOPER', id: 2},
        {stack: 'FULLSTACK DEVOLOPER', id: 3},
    ]);

	return (
		<div className={styles.main}>
			<Image className={styles.bcimage} src={Background} alt='f'/>
			<div className={styles.block3}>
				{authors.map((item:any, id:number) => {
                    console.log(id)
                    return(
                        <Author props={item} key={id}/>
                    )
                })}
			</div>
		</div>
	);
};

export {AuthorPage};
