import { mockMenu } from '../../../mockData/mockData';

export const fetchMenu = jest.fn().mockImplementation(() => {
  return Promise.resolve({ mockMenu });
});