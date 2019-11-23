export default function pRejectNullish(value) {
  // eslint-disable-next-line eqeqeq, no-eq-null
  if (value == null) {
    return Promise.reject(value);
  }

  return Promise.resolve(value);
}
