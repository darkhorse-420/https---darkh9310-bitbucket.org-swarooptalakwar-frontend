import React from 'react';

const Greeting = () => {
  const getCurrentGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return 'Good Morning!';
    } else if (currentHour < 18) {
      return 'Good Afternoon!';
    } else {
      return 'Good Evening!';
    }
  };

  return (
    <div className="text-4xl font-bold p-4 ">
      <h1>{getCurrentGreeting()}</h1>
    </div>
  );
}

export default Greeting;