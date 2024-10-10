import React, { memo, useCallback, useState } from "react";
import { IconButton } from "storybook/internal/components";
import { TOOL_ID } from "../constants";
import * as icons from "@storybook/icons";

export const Tool = memo(function M1AddonSelector() {
  const [isM1, setIsM1] = useState(false);

  const toggle = useCallback(() => {
    const nextIsM1 = !isM1;
    setIsM1(nextIsM1)
  }, [isM1]);

  return (
    <IconButton
      key={TOOL_ID}
      active={true}
      disabled={false}
      title={isM1 ? "Change brand to classic" : "Change brand to mobile1"}
      onClick={toggle}
    >
      <icons.BeakerIcon />
    </IconButton>
  );
});
