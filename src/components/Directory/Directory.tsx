import * as React from 'react';
import { IDirectoryState } from '../../interfaces/states/directory.state';
import './style.scss';

import MenuItem from '../MenuItem/MenuItem';
import { useSelector } from 'react-redux';
import { selectDirectorySections } from 'src/store/directory/directory.selectors';


const Directory: React.FC = () => {

	const sections: IDirectoryState[] = useSelector(selectDirectorySections);

	return (
		<div className='directory-menu'>
		{
			sections.map(({ id, ...otherSectionProps}) => (
				<MenuItem key={id} {...otherSectionProps} />
			))
		}
		</div>
	)
}

export default Directory