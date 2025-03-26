import React from "react";

function GoogleSignInButton(props) {
  // Destructure props with default values
  const { onClick = () => {}, className = "" } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${className}`}
    >
      <svg
        className="w-5 h-5 mr-2"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-0.138-2.65-0.389-3.917z"
          fill="#FFC107"
        />
        <path
          d="M6.306 14.691l6.571 4.819C13.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
          fill="#FF3D00"
        />
        <path
          d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.523 5.025C9.505 39.556 16.227 44 24 44z"
          fill="#4CAF50"
        />
        <path
          d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.002-.001l6.19 5.238C36.971 39.801 44 34 44 24c0-1.341-0.138-2.65-0.389-3.917z"
          fill="#1976D2"
        />
      </svg>
      Continue with Google
    </button>
  );
}

// // PropTypes can be used for runtime type checking in JavaScript
// GoogleSignInButton.propTypes = {
//   onClick: PropTypes.func,
//   className: PropTypes.string,
// };

export default GoogleSignInButton;
