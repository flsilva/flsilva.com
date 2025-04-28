import Link from "next/link";

interface LogoProps {
  readonly onClick?: () => void;
}

export const Logo = ({ onClick }: LogoProps) => (
  <h1 className="bg-primary-text rounded-md flex w-12 h-12 relative m-0">
    <Link
      className="text-primary-bg text-[1.75rem] font-medium leading-7.5 absolute top-2 left-2 no-underline hover:no-underline"
      href="/"
      onClick={onClick}
    >
      fls
    </Link>
  </h1>
);
