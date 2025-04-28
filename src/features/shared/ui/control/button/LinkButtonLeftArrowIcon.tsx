import Link from "next/link";

interface LinkButtonLeftArrowIconProps {
  text: string;
  to: string;
}

export function LinkButtonLeftArrowIcon({
  text,
  to,
}: LinkButtonLeftArrowIconProps) {
  return (
    <Link href={to} className="flex flex-row text-primary-text hover:underline">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-2 stroke-primary-text"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
      {text}
    </Link>
  );
}
