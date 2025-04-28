import { highlight, Inline, RawCode } from "codehike/code";

export async function InlineCode({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, "github-from-css");
  return (
    <Inline
      className="font-geist-mono text-sm rounded-sm py-0.5 px-1 wrap-anywhere group-[.h]:[font-size:inherit]"
      code={highlighted}
      style={highlighted.style}
    />
  );
}
