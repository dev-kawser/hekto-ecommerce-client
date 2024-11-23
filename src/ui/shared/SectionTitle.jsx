/* eslint-disable react/prop-types */

const SectionTitle = ({ title }) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="text-center mb-5 lg:mt-20 mt-10">
            <h2>
                {title}
            </h2>
        </div>
    );
};

export default SectionTitle;