import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Test API', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    getData('https://sergiogval.github.io/jsonapi/data.json')
      .then((response) => {
        expect(response.data).toEqual('12345');
      });
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual('https://sergiogval.github.io/jsonapi/data.json');
  });
});
