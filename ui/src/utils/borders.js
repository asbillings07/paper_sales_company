import { colors } from './colors'

export const borders = (border) =>
  ({
    grey30: `
      border: 1px solid ${colors('grey30')};
    `,
    grey100: `
      border: 1px solid ${colors('grey100')};
    `,
    grey20: `
      border: 1px solid ${colors('grey20')};
    `,
    grey70: `
      border: 1px solid ${colors('grey70')};
    `,
    grey50: `
      border: 1px solid ${colors('grey50')};
    `,
    noBorder: `
      border: none;
    `,
    smallRadius: `
      border-radius: 3px;
    `,
    largeRadius: `
      border-radius: 20px;
    `,
    extraSmallRadius: `
      border-radius: 2px;
    `
  }[border])
