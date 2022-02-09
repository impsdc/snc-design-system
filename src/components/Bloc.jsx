import React from "react";
import PropTypes from "prop-types";
import "../styles/scss/button.scss";

export const Bloc = ({ space, img }) => {
    return (
        <section>
            <img
                src={img}
                alt="header"
                className={`bg-gray-300 block ml-auto mr-auto ${space === "light"
                    ? "pt-4"
                    : space === "normal"
                        ? "pt-12"
                        : space === "medium"
                            ? "pt-20"
                            : space === "big"
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
    space: PropTypes.oneOf(["light", "normal", "medium", "big"]),
};

Bloc.defaultProps = {
    img: "",
    space: "light",
};
