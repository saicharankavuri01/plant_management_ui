const CategoryIcon = (props) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="15.375"
        cy="6.625"
        r="2.625"
        stroke="#464D56"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="6.625"
        cy="15.375"
        r="2.625"
        stroke="#464D56"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.75 12.75H18V17.125C18 17.6082 17.6082 18 17.125 18H13.625C13.1418 18 12.75 17.6082 12.75 17.125V12.75Z"
        stroke="#464D56"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 4H9.25V8.375C9.25 8.85825 8.85825 9.25 8.375 9.25H4.875C4.39175 9.25 4 8.85825 4 8.375V4Z"
        stroke="#464D56"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CategoryIcon;
