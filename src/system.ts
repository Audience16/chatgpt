export const setting = {
  continuousDialogue: false,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
}

export const message = `- 修改自 [@ourongxing](https://github.com/ourongxing) , 本站仅用于演示

- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] Prompt 预设。[[↑]] 可编辑最近一次提问。点击名称滚动到顶部，点击输入框滚动到底部。

- 祝你开心`

export type Setting = typeof setting

export const resetContinuousDialogue = true
