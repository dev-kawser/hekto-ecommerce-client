/* eslint-disable react/prop-types */

const PrimaryButton = ({title}) => {
    return (
        <button className="bg-pink py-3 px-8 text-white">
            {title}
        </button>
    );
};

export default PrimaryButton;