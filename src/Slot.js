/**
 * Slot replacer implementation.
 */
export default function (props) {
  const { $slots, name, ...others } = props;
  const getEl = $slots[name];
  return typeof getEl === 'function' ? getEl(others) : null;
}
