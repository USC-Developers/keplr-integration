
import React from "react";

import { ServiceConsumer } from "./ServcieProvder";

const withServices = (Wrapped: React.FC<any>) => {
  return (props: any) => (
    <ServiceConsumer>
      {({container, setContainer}: any) => <Wrapped {...props} container={container} setContainer={setContainer}/>}
    </ServiceConsumer>
  );
};

export { withServices };