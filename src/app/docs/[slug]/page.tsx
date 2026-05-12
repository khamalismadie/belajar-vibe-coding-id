import { getDocBySlug, getDocsSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export async function generateStaticParams() {
  const slugs = getDocsSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx?$/, ""),
  }));
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = await getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const slugs = getDocsSlugs();
  const sidebarItems = slugs.map((slug) => ({
    name: slug.replace(/\.mdx?$/, "").replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    href: `/docs/${slug.replace(/\.mdx?$/, "")}`,
    slug: slug.replace(/\.mdx?$/, ""),
  }));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-4">
            <h4 className="font-bold mb-4 px-2">Dokumentasi</h4>
            <nav className="space-y-1">
              {sidebarItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-2 py-1.5 rounded-md text-sm transition-colors",
                    slug === item.slug
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <article className="flex-1 max-w-3xl prose prose-slate dark:prose-invert lg:prose-xl">
          <MDXRemote source={doc.content} />
        </article>
      </div>
    </div>
  );
}
