/* eslint-disable react/prop-types */

const PrimaryButton = ({ title, icon }) => {
    return (
        <button
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-offset="200"
            className="bg-pink hover:bg-purple transition-all duration-300 py-3 px-8 text-white rounded flex items-center gap-1">
            {icon} {title}
        </button>
    );
};

export default PrimaryButton;