import { DEFAULT_THEME, CUSTOM_THEME } from '../constants/theme';

const INITIAL_STATE = {
  theme: ''
}

export default function theme (state = INITIAL_STATE, action) {
  switch (action.type) {
    case DEFAULT_THEME:
      return {
        ...state,
        theme: ''
      }
    case CUSTOM_THEME:
      return {
        ...state,
        theme: 'adpage'
      }
    default:
      return state
  }
}