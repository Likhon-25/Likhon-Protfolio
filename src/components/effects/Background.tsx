import Spotlight from "./Spotlight";

/**
 * Fixed background: grid + soft aurora orbs + mouse spotlight.
 * Content-এর পেছনে থাকে, তাই কোনো section এটা নিয়ে চিন্তা করতে হয় না।
 */
export default function Background() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-page"
      >
        <div className="bg-grid absolute inset-x-0 top-0 h-[900px]" />

        <div className="absolute -left-40 -top-48 h-[520px] w-[520px] animate-aurora rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute -right-32 top-[18%] h-[460px] w-[460px] animate-aurora rounded-full bg-accent2/10 blur-[130px] [animation-delay:-8s]" />
        <div className="absolute -bottom-32 left-[28%] h-[420px] w-[420px] animate-aurora rounded-full bg-accent3/10 blur-[140px] [animation-delay:-4s]" />
      </div>

      <Spotlight />
    </>
  );
}
