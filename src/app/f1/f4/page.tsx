import Link from "next/link";
export default function F4() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">F4</h1>
      <Link href="/f1/f3">F3</Link>
      <Link href="/about">About</Link>
    </div>
  );
}
