import {
  DESKTOP_PAGE_WIDTH,
  LARGE_INDENT,
  MEDIUM_INDENT,
  MOBILE_PAGE_WIDTH,
  SMALL_INDENT,
  TABLET_PAGE_WIDTH,
  TINY_INDENT,
} from "../constants";

export const limitTextLength = (text: string, width: number) => {
  if (text.length > TINY_INDENT && width < MOBILE_PAGE_WIDTH)
    return `${text.slice(0, TINY_INDENT)}...`;

  if (text.length > SMALL_INDENT && width < TABLET_PAGE_WIDTH)
    return `${text.slice(0, SMALL_INDENT)}...`;

  if (
    text.length > MEDIUM_INDENT &&
    width > TABLET_PAGE_WIDTH &&
    width < DESKTOP_PAGE_WIDTH
  )
    return `${text.slice(0, MEDIUM_INDENT)}...`;

  if (text.length > LARGE_INDENT && width > DESKTOP_PAGE_WIDTH)
    return `${text.slice(0, LARGE_INDENT)}...`;

  return text;
};
