import { Fragment, useState, useEffect } from 'react';

const Copyright = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the year when the component mounts
    setYear(new Date().getFullYear());
  }, []);

  return (
    <Fragment>
      <p>{`© ${year} Whatever Rights Reserved.`}</p>
    </Fragment>
  );
};

export default Copyright;
