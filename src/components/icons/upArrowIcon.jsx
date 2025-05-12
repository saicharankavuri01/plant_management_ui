import PropTypes from "prop-types";

const UpArrow = ({
  size = "40",
  backgroundColor = "#055527",
  color = "white",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill={backgroundColor} />
      <path
        d="M17.2928 22.0374V11.2849L22.0026 15.9825C22.379 16.3579 22.9967 16.3579 23.3731 15.9825C23.7495 15.6071 23.7495 15.0006 23.3731 14.6252L17.013 8.28157C16.6366 7.90614 16.0285 7.90614 15.6521 8.28157L9.2823 14.6156C8.9059 14.991 8.9059 15.5975 9.2823 15.9729C9.6587 16.3483 10.2667 16.3483 10.6431 15.9729L15.3626 11.2849V22.0374C15.3626 22.5668 15.7969 23 16.3277 23C16.8585 23 17.2928 22.5668 17.2928 22.0374Z"
        fill={color}
      />
    </svg>
  );
};

UpArrow.propTypes = {
  size: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};

export default UpArrow;
