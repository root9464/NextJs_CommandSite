
export interface MembersProps {
    name: string;
    text: string;
}

export interface AuthorProps {
	stack: string;
	id: number;
}

export type User = {
	id: number;
	name?: string;
	text:string;
}

export type NavLink = {
	icon: string;
	label: string;
	href: string;
	id: number;
};
