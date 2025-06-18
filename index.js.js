import { client } from '../lib/sanity'
import Image from 'next/image'

export async function getStaticProps() {
  const projects = await client.fetch(`*[_type == "project"]{title, description, slug, image{asset->{url}}}`)
  return { props: { projects } }
}

export default function Home({ projects }) {
  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Meine Projekte</h1>
      {projects.map((project) => (
        <div key={project.slug.current} style={{ marginBottom: 30 }}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          {project.image?.asset?.url && (
            <Image
              src={project.image.asset.url}
              alt={project.title}
              width={600}
              height={400}
            />
          )}
        </div>
      ))}
    </div>
  )
}