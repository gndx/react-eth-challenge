/**
 * Concat dates into an unique string
 * @param {string} startDate
 * @param {string} endDate
 * @returns string
 */
const dateFormat = (startDate, endDate) => {
  return `${startDate}-${endDate}`;
};

export default dateFormat;
