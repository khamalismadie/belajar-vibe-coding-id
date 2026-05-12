export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Belajar Vibe Coding ID. Community Project.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/khamal/belajar-vibe-coding-id"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="/docs/vibe-coding-101"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
            </a>
            <a
              href="/prompts"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Prompts
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
