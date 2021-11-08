import { DAYS, MONTHS } from "../utils/daysmonts";

export const getDayfromUnix = (unix) => {
  const date = new Date(unix * 1000);
  return `${DAYS[date.getDay()]}, ${
    MONTHS[date.getMonth()]
  } ${date.getDate()} `;
};
