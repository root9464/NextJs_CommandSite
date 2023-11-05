// About component
/* eslint-disable react/react-in-jsx-scope */

import {AuthorPage} from '@/components/pages/AuthorsPages/AuthorPage';
import {type Metadata} from 'next';
export const metadata: Metadata = {
	title: 'About | Next app',
};

export default function Authors() {
	return (
		<section className='container'>
			<AuthorPage/>
		</section>
	);
}
