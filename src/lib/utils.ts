/**
 * Smoothly scrolls to the element with the given ID
 * @param elementId The ID of the element to scroll to
 * @param offset Optional offset from the top of the element
 */
export const scrollToElement = (
  elementId: string,
  offset: number = 80
): void => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

/**
 * Generates a deterministic "random" number based on an input value
 * This ensures the same value is generated on both server and client
 * to avoid hydration errors
 * @param seed A seed value (like an index) to base the randomness on
 * @param min Minimum value
 * @param max Maximum value
 */
export const deterministicRandom = (
  seed: number,
  min: number,
  max: number
): number => {
  // Simple deterministic function that appears random but is actually predictable
  const value = Math.abs(Math.sin(seed * 9999)) * (max - min) + min;
  return value;
};
