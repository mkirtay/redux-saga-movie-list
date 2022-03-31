import React from 'react'
import PropTypes from "prop-types";


import './Box.scss';

const Box = ({title, image, year, onClick}) => {
    return (
        <div className="box" onClick={() => onClick()}>
            <figure className="box__image">
                <img src={image} alt="Box Image"/>
            </figure>
            <div>
                <span className="box__date">{year}</span>
                <strong className="box__title">{title}</strong>
            </div>
        </div>
    )
}

Box.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    year: PropTypes.string,
    onClick: PropTypes.func
};

Box.defaultProps = {};

export default Box;