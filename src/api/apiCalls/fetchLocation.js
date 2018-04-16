import { apiKey2 } from "./apiKey";

export const fetchLocation = async () => {
  const root = "https://www.googleapis.com/geolocation/v1";
  const url = `${root}/geolocate?key=${apiKey2}`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
    const location = await response.json();
    return location.location;
  } catch (error) {
    throw new Error(`Error fetching location: ${error.message}`);
  }
};
