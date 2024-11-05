/* eslint-disable react/prop-types */

const PrimaryButton = ({title}) => {
    return (
        <button className="bg-pink py-3 px-8 text-white rounded">
            {title}
        </button>
    );
};

export default PrimaryButton;