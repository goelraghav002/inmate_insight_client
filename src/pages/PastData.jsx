import { useSelector } from 'react-redux';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { illness_orissa, illness_state, recidivism, training_delhi, training_state } from '../assets/graph';
import InsightCard from '../components/InsightCard';

const PastData = () => {
    const { activeMenu } = useSelector(state => state.activeMenu);

    return (
        <div className='relative z-0 bg-gradient-to-l from-stone-200 via-lime-100 to-stone-200  min-h-screen p-4 flex transition-all duration-300'>
            <div className='flex relative mr-4'>
                {activeMenu && <Sidebar />}
            </div>

            <div className='flex-1 flex flex-col'>
                <Navbar />
                <div className='flex flex-col items-center rounded-lg'>
                    <h1 className='text-5xl mt-14 m-5 font-bold'>Past Data</h1>

                    <div className='flex flex-wrap justify-center'>
                        <InsightCard graph={training_state} title="Total Officials Trained" />
                        <InsightCard graph={training_delhi} title="Officials Trained in Delhi" />
                        <InsightCard graph={illness_state} title="Mentally Ill Patients" />
                        <InsightCard graph={illness_orissa} title="Mentally Ill Patients in Orissa" />
                        <InsightCard graph={recidivism} title="Recidivism in 2012" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PastData
