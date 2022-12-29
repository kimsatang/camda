import * as React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Favicon from 'images/favicon.svg';
import Ahrologo from 'images/ahro_logo.svg';
// s3 url을 props로 받으면 될까나?
// default를 algorithmlabs favicon

interface HelmetProps {
  title?: string;
  url?: string;
}

const HtmlHeader = ({ title }: HelmetProps) => {
  // if (!url) {
  //   // https://hr-solution-dev.s3.ap-northeast-2.amazonaws.com/f407faf6-55c5-44a8-b590-9b938dd82751
  //   return (
  //     <Helmet>
  //       <title>{title}</title>

  //       {/*s3 link  */}
  //       <link
  //         rel="shortcut icon"
  //         // s3 url
  //         href={Favicon}
  //       />
  //     </Helmet>
  //   );
  // }
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="shortcut icon" href={Favicon} />
    </Helmet>
  );
};

export default HtmlHeader;
