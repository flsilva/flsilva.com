import type { MDXComponents } from "mdx/types";

import { Code } from "./features/shared/ui/code/Code";
import { InlineCode } from "./features/shared/ui/code/InlineCode";
import {
  A,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Strong,
  UL,
  OL,
  LI,
  SmallText,
} from "./features/shared/ui/typography/Typography";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props: React.HTMLProps<HTMLHeadingElement>) => <H1 {...props} />,
    h2: (props: React.HTMLProps<HTMLHeadingElement>) => <H2 {...props} />,
    h3: (props: React.HTMLProps<HTMLHeadingElement>) => <H3 {...props} />,
    h4: (props: React.HTMLProps<HTMLHeadingElement>) => <H4 {...props} />,
    h5: (props: React.HTMLProps<HTMLHeadingElement>) => <H5 {...props} />,
    h6: (props: React.HTMLProps<HTMLHeadingElement>) => <H6 {...props} />,
    p: (props: React.HTMLProps<HTMLParagraphElement>) => <P {...props} />,
    strong: (props: React.HTMLProps<HTMLParagraphElement>) => (
      <Strong {...props} />
    ),
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <A {...props} />
    ),
    small: (props: React.HTMLProps<HTMLLIElement>) => <SmallText {...props} />,
    ul: (props: React.HTMLProps<HTMLUListElement>) => <UL {...props} />,
    ol: (props: React.HTMLProps<HTMLUListElement>) => <OL {...props} />,
    li: (props: React.HTMLProps<HTMLLIElement>) => <LI {...props} />,
    Code,
    InlineCode,
  };
}
