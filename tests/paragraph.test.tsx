import * as React from 'react'
import renderer from 'react-test-renderer'

import UParagraph from '../src/components/paragraph'

it(`renders correctly`, () => {
  const tree = renderer.create(<UParagraph>Snapshot test!</UParagraph>).toJSON()

  expect(tree).toMatchSnapshot()
})
