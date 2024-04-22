import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export default function App() {
	const [showMenu, setShowMenu] = useState(false)

	const toggleMenu = () => {
		setShowMenu(prev => !prev)
	}
	return (
		<header>
			<nav className='bg-gray-900 text-gray-50'>
				<div className='flex w-11/12 mx-auto justify-between items-center py-3'>
					<a href='#'>
						<div className='text-3xl'>Great Page</div>
					</a>
					<div className='menu-icon text-xl md:hidden' onClick={toggleMenu}>
						{showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
					</div>
					<ul className='hidden md:flex gap-3'>
						<li className='hover:underline'>
							<a href='#about'>About</a>
						</li>
						<li className='hover:underline'>
							<a href='#contact'>Contact</a>
						</li>
						<li className='hover:underline'>
							<a href='#support'>Support</a>
						</li>
					</ul>
				</div>
				<div className='md:hidden'>
					{showMenu && (
						<ul className='text-center pb-4'>
							<li className='hover:underline'>
								<a href='#about'>About</a>
							</li>
							<li className='hover:underline'>
								<a href='#contact'>Contact</a>
							</li>
							<li className='hover:underline'>
								<a href='#support'>Support</a>
							</li>
						</ul>
					)}
				</div>
			</nav>
		</header>
	)
}
