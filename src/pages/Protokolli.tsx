import { Download, ExternalLink, FileSpreadsheet } from "lucide-react";
import { protocolEntries, protocolTopics } from "@/data/protocols";

const Protokolli = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Protokolli</h1>
        <p className="text-muted-foreground">Dokumentet e protokolleve të grupuara sipas temës</p>
      </div>

      <div className="space-y-4">
        {protocolTopics.map((topic) => {
          const topicItems = protocolEntries.filter((entry) => entry.topic === topic);

          if (!topicItems.length) {
            return null;
          }

          return (
            <section key={topic} className="rounded-xl border bg-card p-5 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-card-foreground">{topic}</h2>
              <div className="space-y-3">
                {topicItems.map((document) => (
                  <div
                    key={document.id}
                    className="flex flex-col gap-3 rounded-lg border bg-background/60 p-3 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <FileSpreadsheet className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-card-foreground">{document.title}</span>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={document.fileUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Hap
                      </a>
                      <a
                        href={document.fileUrl}
                        download
                        className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90"
                      >
                        <Download className="h-3.5 w-3.5" />
                        Shkarko
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Protokolli;
