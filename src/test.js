import { intervalToDuration, formatDistance } from "date-fns";

export const result = formatDistance(new Date("2001/03/06"), new Date(), {
  addSuffix: true
})

