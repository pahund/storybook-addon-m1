import React, { memo, useCallback } from "react";
import { useGlobals, API } from "storybook/internal/manager-api";
import { IconButton } from "storybook/internal/components";
import { TOOL_ID, EVENTS } from "../constants";
import * as icons from "@storybook/icons";

interface Props {
  /** The storybook API */
  api: API;
}

export const Tool = memo(function M1AddonSelector({ api }: Props) {
  const [globals, updateGlobals, storyGlobals] = useGlobals();
  const channel = api.getChannel();

  const isLocked = TOOL_ID in storyGlobals;
  const isActive = !!globals[TOOL_ID];

  const toggle = useCallback(() => {
    const nextIsActive = !isActive;
    updateGlobals({
      [TOOL_ID]: nextIsActive,
    });
    channel.emit(EVENTS.RESULT, nextIsActive);
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
