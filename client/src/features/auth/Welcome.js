import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    const date = new Date();
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date);
  return (
    <div>Welcome</div>
  )
}

export default Welcome;