import React, { useState } from "react";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Wrench, 
  Car, 
  Languages, 
  Heart, 
  AlignCenter,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
const screenshot = '/1756513790684.jpg';
const placeholder = '/poza_profil.jpg';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 font-sans text-slate-800 flex justify-center">
      {/* CV Container */}
      <div className="w-full max-w-[210mm] min-h-[297mm] bg-white shadow-2xl overflow-hidden print:overflow-visible flex flex-col md:flex-row print:shadow-none print:m-0 print:p-0">
        
        {/* LEFT SIDEBAR */}
        <aside className="w-full md:w-[32%] bg-slate-900 border-r border-slate-800 p-8 flex flex-col gap-8 print:w-[32%] print:bg-slate-900 print:text-white">
          {/* Profile Section */}
          <div className="flex flex-col items-center text-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-slate-800 shadow-xl mb-4">
              <ImageWithFallback 
                src={placeholder}
                alt="Profile Photo"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h1 className="text-2xl font-bold text-blue-400 leading-tight">
              Lungu<br />
              Cătălin-Gabriel
            </h1>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-3 text-sm text-slate-300">
            <SectionTitle icon={<Phone className="w-5 h-5" />} title="Contact" />
            <ContactItem icon={<Mail className="w-4 h-4" />} text="lungu.ctlin33@gmail.com" link="mailto:lungu.ctlin33@gmail.com" />
            <ContactItem icon={<Phone className="w-4 h-4" />} text="(+40) 730 398 247" link="tel:+40730398247" />
            <ContactItem icon={<MapPin className="w-4 h-4" />} text="Brașov, România" />
            <ContactItem icon={<Linkedin className="w-4 h-4" />} text="linkedin.com/in/catalin-gabriel-lungu" link="https://www.linkedin.com/in/catalin-gabriel-lungu-527445343/" />
            <ContactItem icon={<Github className="w-4 h-4" />} text="github.com/Catalin22L" link="https://github.com/Catalin22L" />
          </div>

          {/* Skills Section */}
          <div className="flex flex-col gap-3">
            <SectionTitle icon={<Code2 className="w-5 h-5" />} title="Abilități Tehnice" />
            <SkillCategory title="Limbaje de programare">
              C++, C, Java, Kotlin, JavaScript, HTML/CSS
            </SkillCategory>
            <SkillCategory title="Tehnologii & Instrumente">
              Git, Figma, Clean Architecture, UI/UX Design
            </SkillCategory>
            <SkillCategory title="Hardware & IoT">
              Arduino, senzori, robotică de bază
            </SkillCategory>
            <SkillCategory title="Altele">
              Editare foto (Photoshop), Asamblare sisteme PC, MS Office
            </SkillCategory>
          </div>

          {/* Languages Section */}
          <div className="flex flex-col gap-3">
            <SectionTitle icon={<Languages className="w-5 h-5" />} title="Limbi Străine" />
            <LanguageItem lang="Română" level="Nativ" />
            <LanguageItem lang="Engleză" level="B2 - Intermediar Avansat" />
            <LanguageItem lang="Franceză" level="A2 - Începător" />
          </div>

          {/* Hobbies Section */}
          <div className="flex flex-col gap-3">
            <SectionTitle icon={<Heart className="w-5 h-5" />} title="Hobby-uri" />
            <div className="flex flex-wrap gap-2 text-xs">
              <Badge text="Programare" />
              <Badge text="Hardware & IoT" />
              <Badge text="Asamblare PC" />
              <Badge text="Editare Foto" />
              <Badge text="Podcast-uri" />
              <Badge text="Fotbal" />
              <Badge text="Drumeții" />
              <Badge text="Călătorii" />
            </div>
          </div>

          {/* Driving License */}
          {/* Driving License */}
          <div className="flex flex-col gap-3">
            <SectionTitle icon={<Car className="w-5 h-5" />} title="Permis de conducere" />
          <p className="text-sm text-slate-300 font-medium">Categoria AM, B1, B</p>
          </div>
          </aside>

        {/* RIGHT MAIN CONTENT */}
        <main className="w-full md:w-[68%] p-8 md:pl-10 flex flex-col gap-8 print:w-[68%]">
          
          <section>
            <p className="text-sm text-slate-600 leading-relaxed italic">
              Student pasionat de tehnologie, cu un interes puternic atât pentru dezvoltarea software cât și pentru zona de hardware/IoT. Dornic să învăț, să construiesc soluții practice și să mă implic în proiecte inovatoare care aduc plus valoare.
            </p>
          </section>

          {/* Experience Section */}
          <section className="flex flex-col gap-5">
            <MainSectionTitle icon={<Briefcase className="w-6 h-6" />} title="Experiență Profesională & Voluntariat" />
            
            <ExperienceItem 
              title="Practică în Dezvoltare Software"
              company="Pentalog"
              location="Brașov, România"
              date="01 Iul 2025 - 25 Iul 2025"
            >
              <ul className="list-disc list-outside ml-4 mt-2 text-sm text-slate-600 space-y-1">
                <li>Efectuarea și dezvoltarea unei aplicații <strong>ToDoList</strong> utilizând limbajul de programare <strong>Kotlin</strong>.</li>
                <li>Implementarea structurii codului bazată pe principiile <strong>Clean Architecture</strong>, asigurând un cod modular și ușor de menținut.</li>
                
                {/* AICI ESTE ZONA REPARATĂ PENTRU IMAGINE */}
                <li className="pt-2 list-none" style={{ pageBreakInside: 'avoid' }}>
  <a 
    href="https://github.com/Catalin22L/pregatit" 
    className="text-blue-600 hover:underline font-medium flex items-center gap-1 inline-flex mb-3"
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Github className="w-3 h-3" /> Vezi proiectul pe GitHub
  </a>
  
  <div className="print-force-show" style={{ display: 'block', width: '100%', marginTop: '10px' }}>
    <img 
      src={screenshot} 
      alt="Pentalog ToDoList Screenshot" 
      onClick={() => setShowModal(true)}
      loading="eager"
      className="cursor-pointer rounded-md border border-slate-200 shadow-sm"
      style={{ 
        display: 'block', 
        visibility: 'visible', 
        opacity: 1, 
        
        /* MĂRIMEA IMAGINII (Mai mare) */
        width: '450px', 
        maxWidth: '100%', 
        height: 'auto',
        minHeight: '250px', /* Obligă browserul să țină spațiul */
        
        /* ALINIEREA (Dreaptă/Corectă) */
        /* Dacă o vrei lipită de marginea din stânga, sub text: lasă '15px 0' */
        /* Dacă o vrei centrată: pune '15px auto' */
        /* Dacă o vrei în partea dreaptă de tot: pune '15px 0 15px auto' */
        margin: '15px 0', 
        
        WebkitPrintColorAdjust: 'exact',
        printColorAdjust: 'exact'
      }} 
    />
  </div>
</li>
              </ul>
            </ExperienceItem>

            <ExperienceItem 
              title="Membru Voluntar"
              company="BEST Brașov"
              location="Brașov, România"
              date="10 Mar 2024 - Prezent"
            >
              <ul className="list-disc list-outside ml-4 mt-2 text-sm text-slate-600 space-y-1">
                <li>Implicare activă în evenimentele BEST</li>
              </ul>
            </ExperienceItem>
          </section>

          {/* Education Section */}
          <section className="flex flex-col gap-5">
            <MainSectionTitle icon={<GraduationCap className="w-6 h-6" />} title="Educație" />
            
            <ExperienceItem 
              title="Automatică și Informatică Aplicată"
              company="Universitatea Transilvania din Brașov"
              location="Facultatea de Inginerie Electrică și Știința Calculatoarelor"
              date="Oct 2023 - Prezent"
            />
            
            <ExperienceItem 
              title="Tehnician în Activități Economice"
              company="Colegiul Economic Ion Ghica"
              location="Brăila"
              date="Sep 2019 - Mai 2023"
            >
              <ul className="list-disc list-outside ml-4 mt-1 text-sm text-slate-600 space-y-1">
                <li><strong>Atestat profesional în Economie</strong> obținut la finalizarea studiilor liceale.</li>
              </ul>
            </ExperienceItem>
          </section>

          {/* Projects Section */}
          <section className="flex flex-col gap-5">
            <MainSectionTitle icon={<Wrench className="w-6 h-6" />} title="Proiecte Personale" />
            
            <ProjectItem 
              title="Robot - Mașină de pompieri autonomă"
              tags={["Hardware", "Robotică", "Senzori"]}
            >
              <p className="text-sm text-slate-600 mb-2">Dezvoltarea și asamblarea unui robot capabil să detecteze autonom surse de foc și să navigheze spre ele pentru a le stinge.</p>
              <div className="flex gap-4 text-xs font-medium text-blue-600">
                <a href="https://imgur.com/a/hTgBYT3" className="hover:underline flex items-center gap-1">Galerie Foto & Video Demo</a>
              </div>
            </ProjectItem>

            <ProjectItem 
              title="Platformă Web - Kinetoterapie Alpha Kinetic One"
              tags={["Software", "Web Development", "HTML/CSS"]}
            >
              <p className="text-sm text-slate-600 mb-2">Am realizat un site web dedicat clinicii Alpha Kinetic One, structurat pentru a facilita gestionarea pacienților și a programărilor într-un mod eficient.</p>
              <div className="flex gap-4 text-xs font-medium text-blue-600">
                <a href="https://github.com/Catalin22L/alpha_clinic/tree/main" className="hover:underline flex items-center gap-1">
                  <Github className="w-3 h-3"/> Fisiere Sursă (GitHub)
                </a>
              </div>
            </ProjectItem>

            <ProjectItem 
              title="Lampă Smart cu senzor de mișcare"
              tags={["Hardware", "DIY"]}
            >
              <p className="text-sm text-slate-600 mb-2">Proiect hardware practic - o lampă destinată zonelor întunecate (dressing, debara, șifonier) care se activează automat la detecția mișcării. Proiect realizat fără cod utilizând 3 baterii RL6, un convertor DC-DC, un senzor PIR și o bandă LED.</p>
              <div className="flex gap-4 text-xs font-medium text-blue-600">
                <a href="https://github.com/Catalin22L/Lamp-Smart-cu-senzor-de-miscare" className="hover:underline flex items-center gap-1">
                  <Github className="w-3 h-3"/> Documentație Proiect Online(GitHub)
                </a>
              </div>
            </ProjectItem>
          </section>
        </main>
      </div>

      {/* Modal for Screenshot - LinkedIn Style */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50" onClick={() => setShowModal(false)}>
          <div className="relative max-w-[95vw] max-h-[95vh]">
            <img src={screenshot} alt="Pentalog ToDoList Screenshot Full" className="max-w-full max-h-full rounded-lg shadow-2xl" />
            <button 
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// --- Helper Components ---
function SectionTitle({ icon, title }: { icon: React.ReactNode, title: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-slate-700 pb-1 mb-2 text-white">
      <span className="text-blue-400">{icon}</span>
      <h2 className="font-bold uppercase tracking-wider text-xs">{title}</h2>
    </div>
  );
}

function MainSectionTitle({ icon, title }: { icon: React.ReactNode, title: string }) {
  return (
    <div className="flex items-center gap-3 border-b-2 border-slate-100 pb-2 mb-2 text-slate-900">
      <span className="text-blue-600 bg-blue-50 p-2 rounded-lg">{icon}</span>
      <h2 className="font-bold text-xl tracking-tight">{title}</h2>
    </div>
  );
}

function ContactItem({ icon, text, link }: { icon: React.ReactNode, text: string, link?: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-slate-400">{icon}</span>
      {link ? (
        <a href={link} target="_blank" rel="noreferrer" className="hover:text-blue-400 hover:underline transition-colors truncate">
          {text}
        </a>
      ) : (
        <span className="truncate">{text}</span>
      )}
    </div>
  );
}

function SkillCategory({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="mb-2 last:mb-0">
      <h3 className="text-xs font-bold text-slate-200 mb-1">{title}</h3>
      <p className="text-xs text-slate-400 leading-relaxed">{children}</p>
    </div>
  );
}

function LanguageItem({ lang, level }: { lang: string, level: string }) {
  return (
    <div className="flex justify-between items-start text-sm gap-2 mb-1">
      {/* shrink-0 împiedică numele limbii să fie micșorat sau tăiat */}
      <span className="font-semibold text-slate-200 shrink-0">{lang}</span>
      
      {/* text-right face ca textul să se alinieze frumos la dreapta dacă trece pe rândul 2 */}
      {/* leading-tight reduce spațiul dintre rânduri ca să nu ocupe prea mult loc */}
      <span className="text-slate-400 text-xs text-right leading-tight mt-0.5">
        {level}
      </span>
    </div>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span className="bg-slate-800 border border-slate-700 text-slate-300 px-2 py-1 rounded-md text-xs font-medium">
      {text}
    </span>
  );
}

function ExperienceItem({ title, company, location, date, children }: { title: string, company: string, location: string, date: string, children?: React.ReactNode }) {
  return (
    <div className="relative pl-4 border-l-2 border-slate-200">
      <div className="absolute w-3 h-3 bg-white border-2 border-blue-500 rounded-full -left-[7px] top-1"></div>
      <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
        <h3 className="font-bold text-slate-900 text-base">{title}</h3>
        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded shrink-0 sm:ml-4">{date}</span>
      </div>
      <div className="text-sm font-medium text-slate-700 mb-1">
        {company} <span className="text-slate-400 font-normal">| {location}</span>
      </div>
      {children}
    </div>
  );
}

function ProjectItem({ title, tags, children }: { title: string, tags: string[], children: React.ReactNode }) {
  return (
    <div className="bg-slate-50 border border-slate-100 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2 gap-2">
        <h3 className="font-bold text-slate-900">{title}</h3>
        <div className="flex flex-wrap gap-1">
          {tags.map(tag => (
            <span key={tag} className="bg-white border border-slate-200 text-slate-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
}