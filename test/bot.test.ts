import { describe, expect, it } from "vitest";

import { buildPromptCompletionMessage } from "../src/bot.js";

describe("bot completion message", () => {
  it("renders a separate done message payload", () => {
    expect(buildPromptCompletionMessage()).toEqual({
      text: "<b>\u2705 Done</b>",
      fallbackText: "\u2705 Done",
      parseMode: "HTML",
      sourceText: "\u2705 Done",
    });
  });
});
