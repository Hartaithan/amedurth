import { Item } from "../models/item";

const generateItems = (count: number): Item[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    title: `Title ${index + 1}`,
    description: `Description ${index + 1}`,
    image_url: "https://placehold.co/240x240",
    earned_at: "2022-02-02T07:50:40Z",
  }));
};

export const items: Item[] = generateItems(10);
