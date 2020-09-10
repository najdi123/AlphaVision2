import "./socialMedia.css";
import React, { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const SocialMedia = () => {
  const [expanded, setExpanded] = useState(false);

  const onCategoryClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="socialMedia">
      <div
        onClick={onCategoryClick}
        className={`svgHolder ${
          expanded ? "socialMediaArrowReversed" : "socialMediaArrow"
        }`}
      >
        <svg
          version="1.1"
          width="24"
          height="24"
          x="0px"
          y="0px"
          viewBox="0 0 492.004 492.004"
        >
          <g>
            <g>
              <path
                d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
              />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </div>

      <div
        className={`socialMediaHolder ${
          expanded ? "socialMediaHolderExpanded" : "socialMediaHolderCollapsed"
        }`}
      >
        <FaFacebookSquare className="socialMediaItem" size={44} />
        <FaTwitterSquare className="socialMediaItem" size={44} />
        <FaLinkedin className="socialMediaItem" size={44} />
        <FaInstagramSquare className="socialMediaItem" size={44} />
      </div>
    </div>
  );
};

export default SocialMedia;
