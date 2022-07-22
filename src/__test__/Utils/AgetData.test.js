import getData from '../../utils/getData';
import dataCv from '../../../data.json';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Test API', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: dataCv }));

    getData('https://google.com').then((res) => {
      expect(res.data).toEqual(dataCv);
    });
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
