import { useEffect, useGlobals } from "storybook/internal/preview-api";
import type {
  Renderer,
  StoryContext,
  PartialStoryFn as StoryFunction,
} from "storybook/internal/types";

import { KEY } from "./constants";

export const withGlobals = (
  StoryFn: StoryFunction<Renderer>,
  context: StoryContext<Renderer>,
) => {
  const [globals] = useGlobals();
  const isMobile1Enabled = globals[KEY];
  const canvas = context.canvasElement as ParentNode;

  // Is the addon being used in the docs panel
  const isInDocs = context.viewMode === "docs";

  useEffect(() => {
    if (!isInDocs) {
      setBrand(isMobile1Enabled);
    }
  }, [isMobile1Enabled, isInDocs]);

  return StoryFn();
};

/**
 * We may want to use this later to do some m1 magic to the Storybook…
 */
function setBrand(isMobile1Enabled: boolean) {
  console.log("Is mobile1 brand enabled?", isMobile1Enabled);
}
