import React, { memo, useCallback } from "react";
import { useGlobals } from "storybook/internal/manager-api";
import { IconButton } from "storybook/internal/components";
import { KEY, TOOL_ID } from "../constants";
import * as icons from "@storybook/icons";

export const Tool = memo(function M1AddonSelector() {
  const [globals, updateGlobals, storyGlobals] = useGlobals();

  const isLocked = KEY in storyGlobals;
  const isActive = !!globals[KEY];

  const toggle = useCallback(() => {
    updateGlobals({
      [KEY]: !isActive,
    });
  }, [isActive]);

  return (
    <IconButton
      key={TOOL_ID}
      active={isActive}
      disabled={isLocked}
      title={isActive ? "Change brand to classic" : "Change brand to mobile1"}
      onClick={toggle}
    >
      <icons.BeakerIcon />
    </IconButton>
  );
});
