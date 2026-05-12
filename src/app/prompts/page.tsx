import { getAllPrompts, getPromptBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Sparkles, Terminal } from "lucide-react";

export default async function PromptsPage() {
  const promptMetadata = getAllPrompts();
  
  // Load full content for each prompt to display in the list
  const promptsWithContent = await Promise.all(
    promptMetadata.map(async (meta) => {
      const data = await getPromptBySlug(meta.slug);
      return data;
    })
  );

  return (
    <div className="container mx-auto px-4 py-16 space-y-12">
      <div className="max-w-2xl space-y-4">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-3">
          <Terminal className="h-10 w-10 text-primary" />
          Prompt Gallery
        </h1>
        <p className="text-xl text-muted-foreground">
          Kumpulan prompt "sakti" untuk berbagai kebutuhan development. 
          Salin, modifikasi, dan gunakan di AI favorit Anda.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {promptsWithContent.map((item, i) => (
          item && (
            <div key={i} className="flex flex-col border rounded-2xl bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6 space-y-4 flex-1">
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
                  <Sparkles className="h-3 w-3" />
                  {item.metadata.category || "General"}
                </div>
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <MDXRemote source={item.content} />
                </div>
              </div>
              <div className="px-6 py-4 bg-muted/30 border-t flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Slug: {item.metadata.slug}</span>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}
