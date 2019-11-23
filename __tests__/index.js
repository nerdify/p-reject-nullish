import test from 'ava';

import pRejectNullish from '../src';

test(`reject`, async t => {
  try {
    await pRejectNullish(null);
  } catch (error) {
    t.is(error, null);
  }

  try {
    await pRejectNullish(undefined);
  } catch (error) {
    t.is(error, undefined);
  }
});

test(`resolve`, async t => {
  t.is(await pRejectNullish(2), 2);
});
