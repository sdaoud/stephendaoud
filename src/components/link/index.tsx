/** @jsxImportSource theme-ui */
import { AnchorHTMLAttributes } from "react";
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby";
import { useThemeUI, get } from "theme-ui";

export interface Props
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    Omit<GatsbyLinkProps<Record<string, unknown>>, "ref"> {}

const Link: React.FC<Props> = ({ children, to }) => {
  const { theme } = useThemeUI();
  const linkStyle = get(theme, "styles.a");

  return (
    <GatsbyLink to={to} sx={linkStyle}>
      {children}
    </GatsbyLink>
  );
};

export default Link;
