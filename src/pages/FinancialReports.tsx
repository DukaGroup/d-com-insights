import { useEffect, useRef, useState } from "react";
import { Download, ExternalLink, FileText, Paperclip } from "lucide-react";
import { financialReports, type FinancialDocument } from "@/data/financialReports";

const FinancialReports = () => {
  const [attachedByMonth, setAttachedByMonth] = useState<Record<string, FinancialDocument[]>>({});
  const [selectedMonth, setSelectedMonth] = useState(
    financialReports[financialReports.length - 1]?.month || ""
  );
  const inputRef = useRef<HTMLInputElement | null>(null);
  const objectUrlsRef = useRef<string[]>([]);

  useEffect(() => {
    return () => {
      objectUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  const openFilePicker = () => {
    inputRef.current?.click();
  };

  const onFileAttach = (month: string, files: FileList | null) => {
    if (!files || files.length === 0) {
      return;
    }

    const addedDocs = Array.from(files).map((file, index) => {
      const fileUrl = URL.createObjectURL(file);
      objectUrlsRef.current.push(fileUrl);

      return {
        id: `attached-${month}-${Date.now()}-${index}`,
        title: file.name,
        fileUrl,
      };
    });

    setAttachedByMonth((prev) => ({
      ...prev,
      [month]: [...(prev[month] || []), ...addedDocs],
    }));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Raportet Financiar</h1>
          <p className="text-muted-foreground">Pasqyrat financiare dhe raportet mujore të kompanisë</p>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="rounded-md border bg-card px-3 py-1.5 text-xs font-medium text-card-foreground"
          >
            {financialReports.map((entry) => (
              <option key={entry.month} value={entry.month}>
                {entry.month}
              </option>
            ))}
          </select>
          <input
            ref={inputRef}
            type="file"
            accept=".xlsx,.xls,.pdf"
            multiple
            className="hidden"
            onChange={(e) => {
              onFileAttach(selectedMonth, e.target.files);
              e.currentTarget.value = "";
            }}
          />
          <button
            onClick={openFilePicker}
            className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted"
          >
            <Paperclip className="h-3.5 w-3.5" />
            Bashkangjit Pasqyrë
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {financialReports.map((entry) => {
          const monthDocuments = [...entry.documents, ...(attachedByMonth[entry.month] || [])];

          return (
            <section key={entry.month} className="rounded-xl border bg-card p-5 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-card-foreground">{entry.month}</h2>

              <div className="space-y-3">
                {monthDocuments.map((document) => (
                  <div
                    key={document.id}
                    className="flex flex-col gap-3 rounded-lg border bg-background/60 p-3 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
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

export default FinancialReports;
