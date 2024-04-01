/**
 * Format Date Time
 * @param date
 * @param locale
 */
export const formatDateTime = (date: Date, locale: string = "en-US") => {
  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long", // Use "long" for the full month name
    year: "numeric",
  };

  const timeFormatOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit", // Use "2-digit" to display minutes with leading zero
    hour12: true, // Set to true for 12-hour format
  };

  const dateFormatter = new Intl.DateTimeFormat(locale, dateFormatOptions);
  const timeFormatter = new Intl.DateTimeFormat(locale, timeFormatOptions);

  const formattedDate = dateFormatter.format(date);
  const formattedTime = timeFormatter.format(date);

  return `${formattedDate} ${formattedTime}`;
};
