// import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
	const { activeMenu } = useSelector(state => state.activeMenu);

	return (
		<div className='relative z-0 bg-gradient-to-l from-stone-200 via-lime-100 to-stone-200  min-h-screen p-4 flex transition-all duration-300'>
			<div className='flex relative mr-4'>
				{activeMenu && <Sidebar />}
			</div>

			<div className='flex-1 flex flex-col'>
				<Navbar />
			</div>
		</div>
	);
};

export default Home;
