/**
 * @description Format a timestamp to a string
 */
const formatTime = (timestamp: number) => {
  return new Date(timestamp).toISOString();
};

export { formatTime };