import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join, extname, basename } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  // 只返回 .md 和 .mdx 文件名
  return fs.readdirSync(postsDirectory).filter(
    (file) => extname(file) === ".md" || extname(file) === ".mdx"
  );
}

export function getPostBySlug(slug: string) {
  // 支持 .md 和 .mdx
  let fileName = "";
  if (fs.existsSync(join(postsDirectory, `${slug}.mdx`))) {
    fileName = `${slug}.mdx`;
  } else if (fs.existsSync(join(postsDirectory, `${slug}.md`))) {
    fileName = `${slug}.md`;
  } else {
    throw new Error(`Post not found: ${slug}`);
  }
  const fullPath = join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs().map((file) => basename(file, extname(file)));
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
