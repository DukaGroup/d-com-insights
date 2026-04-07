import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Ju lutem plotësoni të gjitha fushat");
      return;
    }

    const success = login(email, password);
    if (!success) setError("Kredencialet janë të gabuara");
  };

  return (
    <div className="min-h-screen bg-background lg:grid lg:grid-cols-[1.08fr,1fr]">
      <section className="relative hidden overflow-hidden border-r border-sidebar-border/50 bg-sidebar px-12 py-10 lg:flex lg:flex-col">
        <div className="pointer-events-none absolute inset-0">
          <img src="/branding/dcom-background.jpg" alt="" className="h-full w-full object-cover opacity-[0.12]" />
          <div className="absolute inset-0 bg-gradient-to-b from-sidebar/95 via-sidebar/92 to-sidebar" />
          <div className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -right-24 bottom-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
        </div>

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="w-full max-w-md rounded-xl border border-sidebar-border/40 bg-white p-3 shadow-sm">
            <img src="/branding/dcom-logo-clean.png" alt="D-COM logo" className="h-14 w-full object-contain" />
          </div>

          <div className="max-w-xl space-y-6">
            <div className="h-1 w-16 rounded-full bg-primary" />
            <h2 className="text-5xl font-bold leading-[1.05] tracking-tight text-sidebar-foreground">
              Portali Intern
              <br />
              <span className="text-sidebar-foreground/70">D-COM Distribution</span>
            </h2>
            <p className="max-w-lg text-2xl leading-relaxed text-sidebar-foreground/75">
              Menaxhoni dyqanet, stafin, arritjet e targeteve dhe raportet financiare nga një vend i vetëm.
            </p>
          </div>

          <p className="text-base text-sidebar-foreground/50">© 2026 D-COM. Të gjitha të drejtat e rezervuara.</p>
        </div>
      </section>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-10 sm:px-10">
        <div className="pointer-events-none absolute inset-0">
          <img src="/branding/dcom-background.jpg" alt="" className="h-full w-full object-cover opacity-[0.08]" />
          <div className="absolute inset-0 bg-background/90" />
          <div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-md rounded-3xl border border-border/70 bg-card/95 p-7 shadow-xl backdrop-blur-md sm:p-9">
          <div className="mb-7 lg:hidden">
            <div className="w-full rounded-xl border border-border/60 bg-white p-2.5">
              <img src="/branding/dcom-logo-clean.png" alt="D-COM logo" className="h-10 w-full object-contain" />
            </div>
          </div>

          <div className="space-y-1">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">Mirë se vini</h1>
            <p className="text-base text-muted-foreground">Hyni në portalin tuaj intern</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="space-y-2.5">
              <Label htmlFor="email" className="text-sm font-semibold text-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="emri@dcom.al"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
              />
            </div>

            <div className="space-y-2.5">
              <Label htmlFor="password" className="text-sm font-semibold text-foreground">Fjalëkalimi</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12"
              />
            </div>

            {error && <p className="text-sm font-medium text-destructive">{error}</p>}

            <Button type="submit" className="h-12 w-full text-base font-semibold">
              Hyr
            </Button>
          </form>

          <p className="mt-7 text-center text-sm text-muted-foreground">
            Përdorni çdo email dhe fjalëkalim për qasje demo
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
