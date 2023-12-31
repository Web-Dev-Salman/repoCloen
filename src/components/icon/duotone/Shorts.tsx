import React, { SVGProps } from 'react';

const SvgShorts = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M6.506 3.061c.157-.04.322-.061.492-.061h10c.17 0 .335.021.493.061a2 2 0 011.801 1.479l3.365 12.557a1 1 0 01-.707 1.225l-6.762 1.811a1 1 0 01-1.225-.707l-1.965-7.334-1.965 7.334a1 1 0 01-1.225.707l-6.761-1.811a1 1 0 01-.707-1.225L4.704 4.54A2 2 0 016.506 3.06z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgShorts;
