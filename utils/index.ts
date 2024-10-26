import { colors } from "@/constants";

export const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
