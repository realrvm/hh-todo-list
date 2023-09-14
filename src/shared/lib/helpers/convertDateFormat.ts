export const convertDateFormat = (date: string | undefined) => {
  if (!date) return [];

  return date.replace(/\//g, ".").split(" ");
};
