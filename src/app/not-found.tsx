import Link from "next/link";
import Icon from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <div className="section-shell flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-main sm:text-5xl">
        This page went missing.
      </h1>
      <p className="mt-3 max-w-md text-[15px] leading-7 text-muted">
        The link may be outdated, but the good stuff is still on the home page.
      </p>
      <Link href="/" className="btn btn-primary mt-7">
        Back to home
        <Icon name="arrowRight" />
      </Link>
    </div>
  );
}
