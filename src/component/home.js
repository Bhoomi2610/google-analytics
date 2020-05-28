import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, [])
  return (<center><b>
    Home page</b></center>)
}
export default Home;