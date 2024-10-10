import React, { memo, useCallback, useState } from "react";
import { API } from "storybook/internal/manager-api";
import { IconButton } from "storybook/internal/components";
import { TOOL_ID, EVENTS } from "../constants";
import * as icons from "@storybook/icons";

interface Props {
  /** The storybook API */
  api: API;
}

export const Tool = memo(function M1AddonSelector({ api }: Props) {
  const [isM1, setIsM1] = useState(false);
  const channel = api.getChannel();

  const toggle = useCallback(() => {
    const nextIsM1 = !isM1;
    setIsM1(nextIsM1)
    channel.emit(EVENTS.RESULT, nextIsM1);
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
