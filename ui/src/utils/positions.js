export const fixed = ({ yProp = 'top', xProp = 'left', y = 0, x = 0 } = {}) => `
  position: fixed;
  ${yProp}: ${y};
  ${xProp}: ${x};
`
export const absolute = ({ yProp = 'top', xProp = 'left', y = 0, x = 0 } = {}) => `
  position: absolute;
  ${yProp}: ${y};
  ${xProp}: ${x};
`
