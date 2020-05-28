import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, [])
  return (<center><p><b>
    About page</b></p></center>)
}
export default About;