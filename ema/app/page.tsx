import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button";

export default function Home() {
  return (
    <main>
      <div>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/blog/1">Blog 1</Link>
        <Link href="/blog/2">Blog 2</Link>
        <Link href="/blog/3">Blog 3</Link>
      </div>
      <div>
        <Button
          style={{
            backgroundColor: "red",
            fontSize: 20,
          }}
        > click me</Button>
      </div>
    </main>
  );
}
