import Link from "next/link";

interface LinkButtonRightArrowIconProps {
  text: string;
  to: string;
}

export function LinkButtonRightArrowIcon({
  text,
  to,
}: LinkButtonRightArrowIconProps) {
  return (
    <Link href={to} className="flex flex-row text-primary-text hover:underline">
      {text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ml-2 stroke-primary-text"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </Link>
  );
}
