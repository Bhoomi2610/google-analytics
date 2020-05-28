import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact";
  }, [])


  return (<center><p><b>
    Contact page</b></p></center>)
}
export default Contact;