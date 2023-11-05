// About component
/* eslint-disable react/react-in-jsx-scope */

import {type Metadata} from 'next';
import {AboutPage} from '@/components/pages/AboutPages/AboutPage';
export const metadata: Metadata = {
	title: 'About | Next app',
};

export default function About() {
	return (
		<section className='container'>
			<AboutPage/>
		</section>
	);
}
