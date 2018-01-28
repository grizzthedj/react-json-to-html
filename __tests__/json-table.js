import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { mount, shallow, render } from 'enzyme';
import nock from 'nock';
import JsonTable from '../src/JsonTable';

it('Basic JsonTable should mount', function() {
  const json = {
    "key": "value"
  }
  const jsonTable = shallow(
    <JsonTable json={json} />
  );
  expect(jsonTable).not.toBe.undefined;
});

// TODO: Write more tests