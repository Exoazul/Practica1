import Link from 'next/link';

export default function FirstPost() {
  return (
    <> hello <Link href="/post/first-post"></Link>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <br/>
      <br/>
      <img src="/descarga.png" alt="TutorialsPoint Logo" />
    </>
  );
}