const About = () => {
  return (
    <div className="max-w-3xl space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Rreth D-COM</h1>
        <p className="text-muted-foreground">Historia dhe misioni ynë</p>
      </div>

      <div className="space-y-6 rounded-xl border bg-card p-8 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-3xl font-bold text-primary-foreground">
            D
          </div>
          <div>
            <h2 className="text-xl font-bold text-card-foreground">D-COM</h2>
            <p className="text-sm text-muted-foreground">Dealer i Autorizuar i One Telecommunications</p>
          </div>
        </div>

        <div className="space-y-4 text-card-foreground leading-relaxed">
          <p>
            D-COM është një nga dealerët më të mëdhenj dhe më të besueshëm të autorizuar të 
            <strong> One Telecommunications</strong> në Shqipëri. Me një rrjet prej mbi 
            <strong> 44 dyqanesh</strong> të shpërndara në të gjithë vendin, D-COM ofron shërbime 
            telekomunikacioni të klasit të parë për mijëra klientë çdo ditë.
          </p>
          <p>
            I themeluar me vizionin për të sjellë teknologjinë më të re pranë çdo qytetari shqiptar, 
            D-COM ka ndërtuar një ekip të dedikuar profesionistësh që punojnë çdo ditë për të ofruar 
            eksperiencën më të mirë të mundshme për klientët tanë.
          </p>
          <p>
            Rrjeti ynë mbulon qytete të mëdha si Tiranë, Durrës, Fier, Vlorë, Gjirokastër, si dhe 
            shumë qytete dhe zona të tjera në të gjithë Shqipërinë. Çdo dyqan operohet nga një ekip 
            i trajnuar mirë, i drejtuar nga Store Managers me përvojë dhe i mbështetur nga Sales 
            Representatives dhe Internet Experts të kualifikuar.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg bg-muted p-4 text-center">
            <p className="text-3xl font-bold text-primary">44+</p>
            <p className="mt-1 text-sm text-muted-foreground">Dyqane</p>
          </div>
          <div className="rounded-lg bg-muted p-4 text-center">
            <p className="text-3xl font-bold text-primary">60+</p>
            <p className="mt-1 text-sm text-muted-foreground">Punonjës</p>
          </div>
          <div className="rounded-lg bg-muted p-4 text-center">
            <p className="text-3xl font-bold text-primary">15+</p>
            <p className="mt-1 text-sm text-muted-foreground">Qytete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
