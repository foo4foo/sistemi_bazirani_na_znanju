import React from "react";

import { Box, Meter, Value } from "grommet";

export class OxygenLevel extends React.Component {
  render() {
    return (
      <div>
        <Box responsive={false} align="center">
          <Meter type="arc" size="medium" vertical={false} value={75} />
          <Value value={75} units="mmHg" size="medium" />
        </Box>
      </div>
    );
  }
}
