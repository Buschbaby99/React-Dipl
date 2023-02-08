import React, { useContext } from 'react';

const MyComponent = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      {isAuthenticated ? (
        <p>Welcome back! You are logged in.</p>
      ) : (
        <p>Please log in to access this content.</p>
      )}
    </div>
  );
};

export default MyComponent;
