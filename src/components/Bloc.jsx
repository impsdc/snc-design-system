import React from "react";
import PropTypes from "prop-types";

export const Bloc = ({ space, img }) => {
    return (
        <section>
            <img
                src={img}
                alt="header"
                className={`bg-gray-300 block ml-auto mr-auto ${space === "10px"
                    ? "pt-4"
                    : space === "30px"
                        ? "pt-12"
                        : space === "50px"
                            ? "pt-20"
                            : space === "70px"
                                ? "pt-28"
                                : ""
                    }`}
            />
        </section>
    );
};

Bloc.propTypes = {
    /**
     * Define the color of the btn
     */
    img: PropTypes.string,
    /**
     * Padding top given to the component
     */
    space: PropTypes.oneOf(["10px", "30px", "50px ", "70px"]),
};

Bloc.defaultProps = {
    img: "",
    space: "light",
};
