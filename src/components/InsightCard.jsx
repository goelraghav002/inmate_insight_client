import PropTypes from "prop-types";
import { useState } from "react";

const InsightCard = ({ graph, title }) => {
    const [active, setActive] = useState(false);

    return (
        <div onClick={() => setActive(!active)} className='bg-white m-6 p-6 rounded-lg shadow-lg hover:shadow-[2px_1px_15px_3px_rgba(0,0,0,0.1)] hover:scale-105 transition ease-out duration-700'>
            <h4 className='text-3xl text-center font-bold m-4 p-4'>{title}</h4>
            <div className={`${!active ? 'hidden' : 'block'} transition ease-out duration-700`}>
                {/* <img width={480} src={graph} alt="" /> */}
                <img width={480} src={graph} alt="" />
            </div>
        </div>
    )
}

InsightCard.propTypes = {
    graph: PropTypes.img,
    title: PropTypes.string,
};

export default InsightCard
