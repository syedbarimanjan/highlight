import * as React from 'react'

function SvgTab(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 64 44"
			fill="current"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M58.7.7H5.3C2.4.7 0 3.1 0 6v32c0 2.9 2.4 5.3 5.3 5.3h53.3c2.9 0 5.3-2.4 5.3-5.3V6C64 3.1 61.6.7 58.7.7zM5.3 38V6h53.3v32H5.3z" />
			<path d="M19.2 16.698h4.3c.3 0 .5-.3.5-.5v-4.3c0-.3-.3-.5-.5-.5h-4.3c-.3 0-.5.3-.5.5v4.3c0 .2.2.5.5.5zM24 24.099c0 .3.3.5.5.5h4.3c.3 0 .5-.3.5-.5v-4.3c0-.3-.3-.5-.5-.5h-4.3c-.3 0-.5.3-.5.5v4.3zM34.7 24.099c0 .3.3.5.5.5h4.3c.3 0 .5-.3.5-.5v-4.3c0-.3-.3-.5-.5-.5h-4.3c-.3 0-.5.3-.5.5v4.3zM29.9 16.698h4.3c.3 0 .5-.3.5-.5v-4.3c0-.3-.3-.5-.5-.5h-4.3c-.3 0-.5.3-.5.5v4.3c-.1.2.2.5.5.5zM44.8 11.299h-4.3c-.3 0-.5.3-.5.5v4.3c0 .3.3.5.5.5h4.3c.3 0 .5-.3.5-.5v-4.3c0-.2-.2-.5-.5-.5zM42.7 30H21.3c-1.6 0-2.7 1.1-2.7 2.7s1.1 2.7 2.7 2.7h21.3c1.6 0 2.7-1.1 2.7-2.7s-1-2.7-2.6-2.7z" />
		</svg>
	)
}

export default SvgTab
