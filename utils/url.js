export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

/**
 * return url for a given image
 * @param {any} image
 */

export const fromImgToUrl = (image) => {
  if (!image) return "/vercel.svg";
  if (image.url.indexOf("/") === 0) return `${API_URL}${image.url}`;
  return image.url;
};
