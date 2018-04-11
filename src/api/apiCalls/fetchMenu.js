import { apiKey } from "./apiKey";

export const fetchMenu = async menuKey => {
  const root = "https://api.eatstreet.com/publicapi/v1";
  const url = `${root}/restaurant/${menuKey}/menu?includeCustomizations=false`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { "X-Access-Token": apiKey }
    });
    const menu = await response.json();
    return menu;
  } catch (error) {
    throw new Error("Error fetching menu: ", error);
  }
};
