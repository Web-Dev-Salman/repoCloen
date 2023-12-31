import React, { SVGProps } from 'react';

const SvgBarcodeScan = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M15 9h-2V5h2v4zm0 6v5h-2v-5h2zM5 9H2V6a1 1 0 011-1h2v4zm0 6v5H3a1 1 0 01-1-1v-4h3zm13-6h-2V5h2v4zm0 6v5h-2v-5h2zm4-6h-2V5h1a1 1 0 011 1v3zm0 6v4a1 1 0 01-1 1h-1v-5h2z'
					fill='currentColor'
				/>
				<path d='M9 9H7V5h2v4zm0 6v5H7v-5h2z' fill='currentColor' opacity={0.3} />
				<rect fill='currentColor' opacity={0.3} y={11} width={24} height={2} rx={1} />
			</g>
		</svg>
	);
};

export default SvgBarcodeScan;
