import React, { SVGProps } from 'react';

const SvgMedia = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5.857 2h7.88a1.5 1.5 0 01.968.355l4.764 4.029A1.5 1.5 0 0120 7.529v12.554c0 1.79-.02 1.917-1.857 1.917H5.857C4.02 22 4 21.874 4 20.083V3.917C4 2.127 4.02 2 5.857 2z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M10.782 15.805l4.404-3.01a.5.5 0 000-.824l-4.403-3.03a.5.5 0 00-.783.413v6.039a.5.5 0 00.782.412z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgMedia;
