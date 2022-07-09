import React from 'react';
import { shallow } from 'enzyme';
import About from '../../components/About';
import DataStub from '../../__stubs__/full_cv.json';

describe('<About />', () => {
  const phone = DataStub.phone;
  const address = DataStub.address;
  const email = DataStub.email;
  const webiste = DataStub.webiste;
  const profession = DataStub.profession;
  const about = shallow(
    <About
      profession={ profession }
      phone={ phone }
      address={ address }
      email={ email }
      website={ website }
    />
  );

  test('About render', () => {
    expect(about.length).toEqual(1);
  });

  test('About title', () => {
    expect(about.find('.About-title').length).toEqual(1);
  });

  test('About haves 3 items', () => {
    expect(about.find('.About-item').length).toBeGreaterThan(2);
  });

});
