import styled from 'react-emotion';
import { lighten } from 'polished';
import { colors } from '../styles/styles';

const height = 35;
export default styled('button')({
  // display: 'inline',
  minWidth: 14,
  maxWidth:15,
  height,
  // margin: '0 auto',
  padding: 10,
  border: 'none',
  borderRadius: height / 2,
  fontFamily: 'inherit',
  fontSize: 18,
  lineHeight: 1,
  fontWeight: 700,
  color: 'blue',
  textTransform: 'uppercase',
  backgroundColor: colors.grey,
  cursor: 'pointer',
  outline: 'none',
  ':hover': {
    backgroundColor: lighten(0.1, colors.accent),
  },
  ':active': {
    backgroundColor: lighten(0.2, colors.accent),
  },
});
