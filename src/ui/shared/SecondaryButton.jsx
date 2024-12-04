/* eslint-disable react/prop-types */


const SecondaryButton = ({ title, icon, onClick }) => {
    return (
        <button
            onClick={onClick}
            type="submit"
            className="bg-pink hover:bg-purple transition-all duration-300 text-white px-6 py-2 flex justify-center items-center gap-1 rounded-md">
            {icon} {title}
        </button>
    );
};

export default SecondaryButton;