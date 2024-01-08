import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>main page</h1>
      <Link href="page1">Page 1</Link>
      <img src="image.jpg" />
    </div>
  );
}
