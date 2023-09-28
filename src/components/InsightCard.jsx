import PropTypes from "prop-types";

const InsightCard = ({graph, title}) => {
  return (
      <div className='bg-white m-6 p-6 rounded-lg'>
          <h4 className='text-3xl text-center font-bold m-4 p-4'>{title}</h4>
          <img width={480} src={graph} alt="" />
      </div>
  )
}

InsightCard.propTypes = {
    graph: PropTypes.img,
    title: PropTypes.string,
};

export default InsightCard
