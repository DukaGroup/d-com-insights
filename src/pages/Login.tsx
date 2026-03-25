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
    <div className="flex min-h-screen">
      {/* Left - Branding */}
      <div className="hidden w-1/2 flex-col justify-between bg-primary p-12 lg:flex">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/20 text-xl font-bold text-primary-foreground">
              D
            </div>
            <span className="text-2xl font-bold text-primary-foreground">D-COM</span>
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-bold leading-tight text-primary-foreground">
            Portali Intern<br />
            <span className="text-primary-foreground/70">i D-COM</span>
          </h2>
          <p className="mt-4 max-w-md text-primary-foreground/60">
            Dealer i autorizuar i One Telecommunications. Menaxhoni dyqanet, stafin dhe performancën nga një vend i vetëm.
          </p>
        </div>
        <p className="text-sm text-primary-foreground/40">© 2026 D-COM. Të gjitha të drejtat e rezervuara.</p>
      </div>

      {/* Right - Login Form */}
      <div className="flex w-full flex-col items-center justify-center px-6 lg:w-1/2">
        <div className="w-full max-w-sm">
          <div className="mb-8 lg:hidden">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-lg font-bold text-primary-foreground">
                D
              </div>
              <span className="text-xl font-bold text-foreground">D-COM</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-foreground">Mirë se vini</h1>
          <p className="mt-1 text-sm text-muted-foreground">Hyni në portalin tuaj intern</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="emri@dcom.al"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Fjalëkalimi</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" className="w-full">
              Hyr
            </Button>
          </form>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Përdorni çdo email dhe fjalëkalim për qasje demo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
