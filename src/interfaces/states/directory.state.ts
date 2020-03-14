import { string } from "prop-types";


export interface IDirectoryState {
	id: number;
	title: string;
	imageUrl: string;
	size?: string;
	linkUrl: string;
}