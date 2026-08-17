import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDir = path.join(process.cwd(), "posts");

function toSlug(frontmatterPath) {
  return (frontmatterPath || "").replace(/^\//, "");
}

// Frontmatter and inline HTML reference images as ../images/x.jpg;
// the static site serves them from /images/x.jpg (public/images).
function fixImagePath(p) {
  if (!p) return null;
  return p.replace(/^(\.\.\/)?images\//, "/images/");
}

function readAll() {
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(postsDir, file), "utf8");
      return matter(raw);
    });
}

export function getAllPosts() {
  return readAll()
    .map(({ data }) => ({
      slug: toSlug(data.path),
      title: data.title || "",
      date: data.date ? new Date(data.date).toISOString() : null,
      imgMain: fixImagePath(data.imgMain),
    }))
    .filter((p) => p.slug && p.title.length > 0)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug) {
  for (const { data, content } of readAll()) {
    if (toSlug(data.path) !== slug) continue;
    const processed = await remark()
      .use(html, { sanitize: false })
      .process(content);
    return {
      slug,
      title: data.title || "",
      date: data.date ? new Date(data.date).toISOString() : null,
      contentHtml: processed.toString().replace(/\.\.\/images\//g, "/images/"),
    };
  }
  return null;
}
