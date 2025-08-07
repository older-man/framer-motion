// constant
import { NavbarData } from '@/assets/data/mockData'
// components
import { FaApple, FaRegUser } from 'react-icons/fa'
import { MdMenu } from 'react-icons/md'
const Navbar = () => {
	return (
		<nav className="text-white py-3">
			<div className="container flex justify-between items-center">
				{/* logo */}
				<div className="flex items-center gap-2 text-3xl font-semibold">
					<FaApple />
					AirPods Max
				</div>
				{/* menu */}
				<div className='hidden md:block'>
					<ul className='flex items-center gap-2'>
						{NavbarData.map((item) => (
							<li key={item.id}>
								<a
									href={item.link}
									className="inline-block uppercase text-base py-2 px-3"
								>
									{item.title}
								</a>
							</li>
						))}
            <button className='text-3xl ps-14'>
              <FaRegUser />
            </button>
					</ul>
				</div>
        {/* unknow */}
        <div className='md:hidden'>
          <MdMenu className='text-4xl'/>
        </div>
			</div>
		</nav>
	)
}

export default Navbar
