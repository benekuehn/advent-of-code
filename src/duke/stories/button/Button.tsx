import * as stylex from '@stylexjs/stylex';
import { colors } from '../../tokens/colors.stylex';

const styles = stylex.create({
  base: {
    fontSize: 16,
    lineHeight: 1.5,
    backgroundColor: colors.accentColor,
    // color: colors.primaryText,
    borderStyle: 'none',
    borderRadius: 8,
    padding: '8px 12px',
  },
});

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      {...stylex.props(styles.base)}
      {...props}
    >
      {label}
    </button>
  );
};
