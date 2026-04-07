import { useEffect, useRef, useState } from "react";
import { annualLeaves } from "@/data/annualLeaves";
import { Download, ExternalLink, FileSpreadsheet, Paperclip } from "lucide-react";

type AttachedExcel = {
  name: string;
  fileUrl: string;
};

const AnnualLeaves = () => {
  const [attachedExcel, setAttachedExcel] = useState<AttachedExcel | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    return () => {
      if (attachedExcel?.fileUrl) {
        URL.revokeObjectURL(attachedExcel.fileUrl);
      }
    };
  }, [attachedExcel]);

  const onAttachExcel = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const file = files[0];
    const fileUrl = URL.createObjectURL(file);

    setAttachedExcel((prev) => {
      if (prev?.fileUrl) {
        URL.revokeObjectURL(prev.fileUrl);
      }

      return {
        name: file.name,
        fileUrl,
      };
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Lejet Vjetore</h1>
          <p className="text-muted-foreground">Përmbledhje e lejeve vjetore të stafit</p>
        </div>

        <div>
          <input
            ref={inputRef}
            type="file"
            accept=".xlsx,.xls"
            className="hidden"
            onChange={(e) => {
              onAttachExcel(e.target.files);
              e.currentTarget.value = "";
            }}
          />
          <button
            onClick={() => inputRef.current?.click()}
            className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted"
          >
            <Paperclip className="h-3.5 w-3.5" />
            Bashkangjit Excel
          </button>
        </div>
      </div>

      {attachedExcel && (
        <section className="rounded-xl border bg-card p-4 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <FileSpreadsheet className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-card-foreground">{attachedExcel.name}</span>
            </div>
            <div className="flex gap-2">
              <a
                href={attachedExcel.fileUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Hap
              </a>
              <a
                href={attachedExcel.fileUrl}
                download={attachedExcel.name}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90"
              >
                <Download className="h-3.5 w-3.5" />
                Shkarko
              </a>
            </div>
          </div>
        </section>
      )}

      <section className="overflow-hidden rounded-xl border bg-card shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Punonjësi</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Pozicioni</th>
              <th className="px-4 py-3 text-right font-medium text-muted-foreground">Totali</th>
              <th className="px-4 py-3 text-right font-medium text-muted-foreground">Përdorur</th>
              <th className="px-4 py-3 text-right font-medium text-muted-foreground">Të Mbetura</th>
            </tr>
          </thead>
          <tbody>
            {annualLeaves.map((leave) => (
              <tr key={leave.id} className="border-b last:border-0">
                <td className="px-4 py-3 font-medium text-card-foreground">{leave.employeeName}</td>
                <td className="px-4 py-3 text-muted-foreground">{leave.position}</td>
                <td className="px-4 py-3 text-right text-muted-foreground">{leave.totalDays}</td>
                <td className="px-4 py-3 text-right text-muted-foreground">{leave.usedDays}</td>
                <td className="px-4 py-3 text-right">
                  <span className="inline-flex rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">
                    {leave.remainingDays}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AnnualLeaves;
