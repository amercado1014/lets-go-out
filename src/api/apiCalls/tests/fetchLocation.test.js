import { fetchLocation } from "../fetchLocation";

describe("fetchLocation", () => {
  let mockLocationApiResponse;

  beforeEach(() => {
    mockLocationApiResponse = {
      location: {
        lat: 39.7047095, 
        lng: -105.08137339999999 
      }
    };

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockLocationApiResponse)
      })
    );
  });

  it("should call fetch", () => {
    fetchLocation();
    expect(window.fetch).toHaveBeenCalled();
  });

  it("should return fetched data", async () => {
    const expected = { 
      lat: 39.7047095, 
      lng: -105.08137339999999 
    };
    await expect(fetchLocation()).resolves.toEqual(expected);
  });

  it("should throw an error if fetch has an error", () => {
    const expected = Error("Error fetching location: ");
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        ok: false
      })
    );
    expect(fetchLocation()).rejects.toEqual(expected);
  });
});
