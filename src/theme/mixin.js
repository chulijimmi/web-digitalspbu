export const transition = (property, duration) => ({
  webkitTransition: `${property} ${duration} ease`,
  mozTransition: `${property} ${duration} ease`,
  transition: `${property} ${duration} ease`,
});

export const rounded = (size) => ({
  webkitBorderRadius: size,
  mozBorderRadius: size,
  borderRadius: size,
});
