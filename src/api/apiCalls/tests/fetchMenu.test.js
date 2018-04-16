import { fetchMenu } from '../fetchMenu';
import { mockMenu } from '../../../mockData/mockData';

describe("fetchMenu", () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockMenu)
      })
    );
  });

  it("should call fetch", () => {
    fetchMenu();
    expect(window.fetch).toHaveBeenCalled();
  });

  it("should return fetched data", async () => {
    const expected = mockMenu;
    await expect(fetchMenu()).resolves.toEqual(expected);
  });

  it("should throw an error if fetch has an error", async () => {
    const expected = Error("Error fetching menu: Error");
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        details: "Error"
      })
    );
    await expect(fetchMenu()).rejects.toEqual(expected);
  });
});
