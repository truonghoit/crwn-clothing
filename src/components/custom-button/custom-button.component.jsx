import React from 'react';

import './custom-button.styles.scss';

const CustomComponent = ({ children, isGoogleSignIn, ...otherProps}) => (
  <button className={`${isGoogleSignIn?'google-sign-in': ''} custom-button`}
          {...otherProps}>
    {children}
  </button>
);
export default CustomComponent;
