import React, { SVGProps } from 'react';

const SvgIncomingMail = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5 9h14a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2v-9a2 2 0 012-2zm13.144 1.84L12 14.148 5.856 10.84a.75.75 0 00-.712 1.32l6.5 3.5c.222.12.49.12.712 0l6.5-3.5a.75.75 0 00-.712-1.32z'
					fill='currentColor'
				/>
				<path
					d='M14.888 2.83H12.93V.824a.5.5 0 00-.5-.5h-1.023a.5.5 0 00-.5.5v2.008H8.95a.5.5 0 00-.381.823l2.968 3.505a.5.5 0 00.763 0l2.968-3.505a.5.5 0 00-.381-.823z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgIncomingMail;
