import Link from 'next/link'

type Color = "red"|"blu"

type PostProps = {
    id:string,
    slug:string,
    title:string
}

export default function PostList({ posts }:{posts:PostProps[]}) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}