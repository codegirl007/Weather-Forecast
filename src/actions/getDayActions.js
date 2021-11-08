import { DAYS, MONTHS } from "../utils/daysmonts";

export const getDayfromUnix = (unix) => {
  const date = new Date(unix * 1000);
  return `${DAYS[date.getDay()]}, ${
    MONTHS[date.getMonth()]
  } ${date.getDate()} `;
};

export const getTimefromUnix = (unix) => {
  const hours = new Date(unix * 1000).getHours();
  const minutes = new Date(unix * 1000).getMinutes();
  const twoDigitMinutes = minutes.toString().padStart(2, "0");
  return `${hours}:${twoDigitMinutes}`;
};
