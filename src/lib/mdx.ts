import fs from "fs";
import path from "path";
import matter from "gray-matter";

const DOCS_PATH = path.join(process.cwd(), "docs");
const PROMPTS_PATH = path.join(process.cwd(), "prompts");

export interface PostMetadata {
  title?: string;
  description?: string;
  category?: string;
  slug: string;
}

export function getDocsSlugs() {
  return fs.readdirSync(DOCS_PATH).filter((path) => /\.mdx?$/.test(path));
}

export function getPromptsSlugs() {
  return fs.readdirSync(PROMPTS_PATH).filter((path) => /\.mdx?$/.test(path));
}

export function getDocBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx?$/, "");
  const fullPath = path.join(DOCS_PATH, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    // Try .mdx if .md doesn't exist
    const mdxPath = path.join(DOCS_PATH, `${realSlug}.mdx`);
    if (fs.existsSync(mdxPath)) {
      const fileContents = fs.readFileSync(mdxPath, "utf8");
      const { data, content } = matter(fileContents);
      return { metadata: { ...data, slug: realSlug } as PostMetadata, content };
    }
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { metadata: { ...data, slug: realSlug } as PostMetadata, content };
}

export function getPromptBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx?$/, "");
  const fullPath = path.join(PROMPTS_PATH, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    const mdxPath = path.join(PROMPTS_PATH, `${realSlug}.mdx`);
    if (fs.existsSync(mdxPath)) {
      const fileContents = fs.readFileSync(mdxPath, "utf8");
      const { data, content } = matter(fileContents);
      return { metadata: { ...data, slug: realSlug } as PostMetadata, content };
    }
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { metadata: { ...data, slug: realSlug } as PostMetadata, content };
}

export function getAllPrompts() {
  const slugs = getPromptsSlugs();
  const prompts = slugs.map((slug) => {
    const { metadata } = getPromptBySlug(slug)!;
    return metadata;
  });
  return prompts;
}
