import Link from "next/link";
import { H1, P } from "@/features/shared/ui/typography/Typography";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="grid gap-y-6">
        <H1>404 - Page Not Found</H1>
        <P className="text-center">
          Sorry, the page you are looking for does not exist.
        </P>
        <P className="text-center">
          <Link href="/" className="text-primary-link-light hover:underline">
            Go back to the homepage
          </Link>
        </P>
      </div>
    </div>
  );
}
