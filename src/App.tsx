import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  GraduationCap, 
  BookOpen, 
  Target, 
  Dumbbell, 
  Trophy, 
  MessageSquare, 
  Globe, 
  ChevronRight, 
  Image as ImageIcon,
  Menu,
  X,
  Download,
  Key
} from 'lucide-react';

// --- Types ---
interface Activity {
  title: string;
  areaId: string;
  subjectId?: string; // Specific for technical Area
  description: string;
  longDescription?: string;
  image?: string;
  skills: string[];
  trimestre: 1 | 2 | 3;
  externalLink?: string;
  embed?: string;
}

interface Area {
  id: string;
  title: string;
  content: string;
  icon: React.ReactNode;
}

interface TechSubject {
  id: string;
  title: string;
}

// --- Data ---
const AREAS: Area[] = [
  { id: 'codes', title: 'Linguagens', content: 'Exploração da comunicação, literatura e artes como ferramentas de expressão e impacto.', icon: <BookOpen className="w-5 h-5" /> },
  { id: 'nature', title: 'Natureza', content: 'Estudo do mundo físico e biológico, focando em sustentabilidade e avanços científicos.', icon: <Target className="w-5 h-5" /> },
  { id: 'human', title: 'Humanas', content: 'Análise da sociedade, história e comportamento humano para entender o presente.', icon: <User className="w-5 h-5" /> },
  { id: 'math', title: 'Matemática', content: 'Raciocínio lógico e resolução de problemas aplicados à realidade e tecnologia.', icon: <Trophy className="w-5 h-5" /> },
  { id: 'ppe', title: 'PPE', content: 'Planejamento e Pesquisa Educacional voltado para o desenvolvimento de competências integradas.', icon: <Dumbbell className="w-5 h-5" /> },
  { id: 'tech', title: 'Técnico', content: 'Conhecimento técnico especializado voltado para o mercado de trabalho e inovação.', icon: <GraduationCap className="w-5 h-5" /> },
];

const TECH_SUBJECTS: TechSubject[] = [
  { id: 'db', title: 'Banco de Dados' },
  { id: 'modeling', title: 'Modelagem de Sistemas' },
  { id: 'iot', title: 'IoT' },
];

const ACTIVITIES: Activity[] = [
  // --- Linguagens ---
  {
    trimestre: 1,
    areaId: 'codes',
    title: 'Revisão de Escolas Literárias',
    description: 'Criação de um jogo digital interativo para revisão do conteúdo de Escolas Literárias Brasileiras.',
    longDescription: 'Nessa atividade, criamos um jogo digital no Wordwall para revisar as escolas literárias brasileiras, do Quinhentismo ao Simbolismo. Cada grupo ficou responsável por uma escola e desenvolveu perguntas e desafios sobre o tema. O objetivo foi revisar o conteúdo de forma interativa e criativa. Depois, os jogos foram compartilhados com a turma para que todos pudessem jogar e avaliar.',
    skills: ['H4', 'H14'],
    image: 'https://images.unsplash.com/photo-1513001900722-370f803f498d?q=80&w=1974&auto=format&fit=crop',
    externalLink: 'https://noitenocemiterio.lovable.app',
    embed: 'https://www.canva.com/design/DAHCO4c9Zbw/0iXQbzjtIetcwFiNrq0E7g/view?embed'
  },
  {
    trimestre: 1,
    areaId: 'codes',
    title: 'A Paixão Segundo G.H.',
    description: 'Análise literária e antropológica da obra de Clarice Lispector.',
    longDescription: 'Nessa atividade, lemos A Paixão Segundo G.H. e analisamos a obra por diferentes áreas. Meu grupo ficou com Antropologia, estudando como a cultura define o que é “humano” e “não humano”, além de conceitos como tabu, pureza e impureza. Relacionamos isso com a cena da barata, discutindo por que ela é vista como “imunda” e como a atitude da personagem rompe limites culturais. Depois, apresentamos uma mini aula e produzi um mapa conceitual sobre a obra.',
    skills: ['H4', 'H22'],
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1974&auto=format&fit=crop',
    embed: 'https://www.canva.com/design/DAHFntsq5aQ/FPh5wUPXeWU8LwBjqxRw2w/view?embed'
  },
  // --- Natureza ---
  {
    trimestre: 1,
    areaId: 'nature',
    title: 'Meme sobre Evolucionismo',
    description: 'Criação de um meme explicativo sobre os conceitos de evolucionismo e teorias da evolução.',
    longDescription: 'Nessa atividade, criamos um meme sobre evolucionismo, utilizando os conceitos estudados em aula. Além do meme, fizemos uma descrição explicando as ideias científicas aplicadas na construção, relacionando com a teoria da evolução. O objetivo foi aprender o conteúdo de forma criativa e prática.',
    skills: ['C3', 'H15', 'H18'],
    embed: 'https://imgur.com/a/eLTRm2J/embed?pub=true',
    externalLink: 'https://docs.google.com/document/d/17ex2TY1okTDW4VvYSPXJwjJABjSzbOe3IbOiyg1gbx4/edit?usp=sharing'
  },
  {
    trimestre: 1,
    areaId: 'nature',
    title: 'Dependência de Combustíveis Fósseis',
    description: 'Análise crítica sobre a matriz energética global e os desafios da transição energética.',
    longDescription: 'Nessa atividade, meu grupo analisou a dependência global de combustíveis fósseis, discutindo se o mundo consegue funcionar sem eles atualmente. Estudamos os setores que mais dependem dessa energia, explicamos conceitos como poder calorífico e densidade energética, e refletimos sobre os impactos e dificuldades de uma transição para outras fontes. Ao final, apresentamos uma posição crítica sobre o tema, considerando consequências e possíveis soluções.',
    skills: ['C1', 'H1', 'C2', 'H9', 'H11'],
    image: 'https://images.unsplash.com/photo-1473642345152-ed8724d277d3?q=80&w=2070&auto=format&fit=crop',
    embed: 'https://www.canva.com/design/DAHH_HkoDGU/sr4motR45mmNERImtPOP2A/view?embed'
  },
  {
    trimestre: 1,
    areaId: 'nature',
    title: 'Experimento de Eletrização',
    description: 'Análise prática de fenômenos de eletricidade estática e materiais.',
    longDescription: 'Nessa atividade, analisamos um experimento de eletrização, explicando por que o metal foi escolhido e atraído pelo cano eletrizado. Estudamos como o cano ficou carregado, a diferença entre materiais e como a quantidade de carga pode variar dependendo do processo de eletrização. O objetivo foi compreender, na prática, conceitos de eletricidade estática.',
    skills: ['C1', 'H1', 'C2', 'H7', 'H9', 'H11', 'H12'],
    image: 'https://images.unsplash.com/photo-1576086213369-97a306dca665?q=80&w=2080&auto=format&fit=crop',
    embed: 'https://docs.google.com/document/d/1JOb-sgNPtYK7t77LdW59m6QHNTwrgyDQ9UWEUOsF3g8/preview'
  },
  // --- Humanas ---
  {
    trimestre: 1,
    areaId: 'human',
    title: 'Propaganda Soviética (1914–1945)',
    description: 'Análise de cartaz de propaganda soviético e sua simbologia histórica.',
    longDescription: 'Nessa atividade, analisei um cartaz de propaganda soviético (1914–1945), criando uma arte no Canva com a imagem e sua interpretação. Expliquei a simbologia, o uso das cores, a tradução do texto, os detalhes artísticos e o contexto histórico do período. O objetivo foi entender como a arte era usada como forma de propaganda.',
    skills: ['C2 - H8', 'H10', 'H12'],
    image: 'https://images.unsplash.com/photo-1547101147-380be525790a?q=80&w=1974&auto=format&fit=crop',
    externalLink: 'https://www.canva.com/design/DAHHG3DKSWc/ITr9f99couakJvb8grRNMA/view',
    embed: 'https://www.canva.com/design/DAHHG3DKSWc/ITr9f99couakJvb8grRNMA/view?embed'
  },
  {
    trimestre: 1,
    areaId: 'human',
    title: 'Análise de País: Espanha',
    description: 'Estudo geopolítico e socioeconômico detalhado sobre a Espanha.',
    longDescription: 'Desenvolvi, em dupla, uma apresentação sobre um país escolhido, com o objetivo de analisar suas características e compreender sua realidade geopolítica. A atividade envolveu pesquisa de informações confiáveis sobre aspectos como cultura, economia, geografia e organização social, além da criação de slides para apresentação em sala. O trabalho contribuiu para ampliar a visão sobre as diferenças entre os países e entender melhor como fatores históricos, políticos e econômicos influenciam cada nação.',
    skills: ['C1', 'H1', 'H2', 'H3', 'H4', 'H5'],
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=2070&auto=format&fit=crop',
    externalLink: 'https://www.canva.com/design/DAHB2zdFpyA/kbiZ6kS8NNTSrVSUeIgdCg/view',
    embed: 'https://www.canva.com/design/DAHB2zdFpyA/kbiZ6kS8NNTSrVSUeIgdCg/view?embed'
  },
  {
    trimestre: 1,
    areaId: 'human',
    title: 'Jornal do Século XX',
    description: 'Criação de um jornal histórico sobre a Primeira Guerra Mundial e Revolução Russa.',
    longDescription: 'Nessa atividade, produzi um jornal inspirado no início do século XX, assumindo o papel de um jornalista que analisava os conflitos da Primeira Guerra Mundial e da Revolução Russa. Escrevi uma matéria principal e outras secundárias com base em fatos históricos reais, considerando o contexto político, econômico e cultural da época. Depois, organizei tudo em um modelo de jornal no Canva, seguindo o estilo dos periódicos antigos.',
    skills: ['C3', 'H15', 'H16', 'H20', 'C6', 'H39'],
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop',
    externalLink: 'https://www.canva.com/design/DAHFn4COv9E/njH3qukCDKxKDlCfHna4nw/view',
    embed: 'https://www.canva.com/design/DAHFn4COv9E/njH3qukCDKxKDlCfHna4nw/view?embed'
  },
  // --- Matemática ---
  {
    trimestre: 1,
    areaId: 'math',
    title: 'Quebrando a Banca: Probabilidade',
    description: 'Análise do filme e aplicação de conceitos de probabilidade e estatística.',
    longDescription: 'Nessa atividade, analisamos o filme Quebrando a Banca, respondendo questões sobre sua mensagem, motivações dos personagens e estratégias utilizadas no jogo. Relacionei o conteúdo com conceitos matemáticos, principalmente probabilidade e estatística, presentes nas decisões da equipe. Também desenvolvi uma proposta de roteiro envolvendo Matemática, estimulando a criatividade e a aplicação prática dos conteúdos estudados.',
    skills: ['C5', 'H31', 'H32'],
    image: 'https://images.unsplash.com/photo-1511119253450-48227092994e?q=80&w=2070&auto=format&fit=crop',
    embed: 'https://docs.google.com/document/d/1A-_-QcgPu59zfr9i0TpcyWtQ0q7h_dxsIRJEC8qVK8k/preview'
  },
  {
    trimestre: 1,
    areaId: 'math',
    title: 'Jogo: Quebrando a Banca',
    description: 'Desenvolvimento de jogo com aplicação de análise combinatória e probabilidade.',
    longDescription: 'Nessa atividade, desenvolvemos um jogo inspirado no filme Quebrando a Banca, aplicando conceitos de análise combinatória e probabilidade. Criamos regras, definimos estratégias baseadas em chances e testamos o protótipo com outros grupos. Ao final, apresentamos o jogo e participamos de uma competição, colocando em prática os conceitos matemáticos de forma interativa.',
    skills: ['C5', 'H30', 'H31'],
    image: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=2070&auto=format&fit=crop',
    embed: 'https://docs.google.com/document/d/1_PDhqp1vpatN21p4GF3L1llSEGDQfh0rFnkDeRnfgNY/preview'
  },
  {
    trimestre: 2,
    areaId: 'math',
    title: 'Geometria Espacial',
    description: 'Aplicação de volumes e áreas em projetos arquitetônicos modernos.',
    skills: ['H3', 'H7'],
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4822edb?q=80&w=2070&auto=format&fit=crop'
  },
  // --- Técnico ---
  {
    trimestre: 1,
    areaId: 'tech',
    title: 'Grand Prix SENAI de Inovação 2026',
    description: 'Competição de inovação para criar soluções reais para a indústria.',
    longDescription: 'O Grand Prix SENAI de Inovação 2026 é uma competição onde alunos formam equipes (escuderias) para criar soluções inovadoras para problemas reais da indústria. O evento envolve etapas como inscrição, formação de equipes, desenvolvimento de ideias e apresentação do projeto. No link externo, você encontrará toda a documentação do Grand Prix, incluindo o Pitch, vídeo técnico e o Lean Canvas.',
    skills: ['Inovação', 'Trabalho em Equipe', 'Pitch', 'Lean Canvas'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    externalLink: 'https://drive.google.com/drive/u/3/folders/1h0LCm0bYmLi1brd47TQ4fyZmn3-kkPMK'
  },
  {
    trimestre: 2,
    areaId: 'tech',
    subjectId: 'db',
    title: 'Queries Avançadas',
    description: 'Uso de Joins complexos e otimização de consultas SQL.',
    skills: ['H4', 'H5'],
    image: 'https://images.unsplash.com/photo-1544383335-c51717208768?q=80&w=2012&auto=format&fit=crop'
  },
  {
    trimestre: 2,
    areaId: 'tech',
    subjectId: 'iot',
    title: 'Sensores com ESP32',
    description: 'Integração de sensores de temperatura e umidade em rede Wi-Fi.',
    skills: ['H6', 'H7'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop'
  }
];

// --- Components ---

const EditorialStat = ({ label, value }: { label: string, value: string }) => (
  <div className="flex flex-col">
    <div className="text-3xl md:text-4xl font-display text-white">{value}</div>
    <div className="text-[10px] text-white/30 uppercase tracking-widest font-bold">{label}</div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="floating-nav">
      <div className="flex items-center gap-3">
        <div className="bg-white p-1.5 rounded">
           <GraduationCap className="text-black w-4 h-4" />
        </div>
        <span className="font-display text-xl tracking-wider text-white">KAUÃ <span className="opacity-50">SANTOS</span></span>
      </div>
      
      <div className="hidden md:flex gap-10">
        {['Sobre', 'CV', 'Áreas', 'Anteriores'].map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">
            {item}
          </a>
        ))}
      </div>

      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-20 left-0 w-full bg-black/90 backdrop-blur-2xl p-8 flex flex-col gap-6 rounded-2xl border border-white/10 z-50"
          >
            {['Sobre', 'CV', 'Áreas', 'Anteriores'].map((item) => (
              <a key={item} onClick={() => setIsOpen(false)} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-lg font-display uppercase tracking-widest text-white">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionTitle = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="text-center max-w-3xl mx-auto mb-20 px-6">
    <h2 className="text-6xl md:text-8xl text-white font-display uppercase tracking-tighter mb-6 leading-none">
      {title}
    </h2>
    <p className="text-lg md:text-xl text-white/40 font-medium leading-relaxed">
      {subtitle}
    </p>
  </div>
);

export default function App() {
  const [activeAreaId, setActiveAreaId] = useState(AREAS[0].id);
  const [trimestre, setTrimestre] = useState<1 | 2 | 3>(1);
  const [showEvidenceView, setShowEvidenceView] = useState(false);
  const [portfolioYear, setPortfolioYear] = useState<'2024' | '2025'>('2025');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(TECH_SUBJECTS[0].id);

  const selectedArea = AREAS.find(a => a.id === activeAreaId);
  
  const currentActivities = ACTIVITIES.filter(a => {
    if (a.areaId !== activeAreaId) return false;
    if (a.trimestre !== trimestre) return false;
    if (activeAreaId === 'tech' && trimestre !== 1 && a.subjectId !== selectedSubjectId) return false;
    return true;
  });

  return (
    <div className={`min-h-screen bg-dark-bg selection:bg-white selection:text-black text-text-secondary ${showEvidenceView ? 'overflow-hidden' : ''}`}>
      <Navbar />

      <AnimatePresence>
        {showEvidenceView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-pitch-black overflow-y-auto pt-32 pb-20"
          >
            <div className="container mx-auto px-6 max-w-6xl">
              <button 
                onClick={() => setShowEvidenceView(false)}
                className="fixed top-8 right-8 z-[110] bg-white text-black p-4 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center gap-2 font-bold uppercase text-[10px] tracking-widest"
              >
                <X size={20} /> FECHAR
              </button>

              <div className="mb-20 space-y-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-white/40 uppercase tracking-[0.3em] font-bold text-xs">
                    {selectedArea?.icon}
                    <span>{selectedArea?.title}</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl text-white font-display uppercase tracking-tighter">Trabalhos</h2>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                  {activeAreaId === 'tech' && trimestre !== 1 && (
                    <div className="flex flex-wrap gap-3 p-2 bg-white/5 rounded-2xl border border-white/10">
                      {TECH_SUBJECTS.map((subject) => (
                        <button
                          key={subject.id}
                          onClick={() => setSelectedSubjectId(subject.id)}
                          className={`px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${
                            selectedSubjectId === subject.id 
                            ? 'bg-white text-black' 
                            : 'text-white/40 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {subject.title}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-4 p-2 bg-white/5 rounded-full border border-white/10 w-fit">
                    {[1, 2, 3].map((t) => (
                      <button
                        key={t}
                        onClick={() => setTrimestre(t as 1 | 2 | 3)}
                        className={`w-12 h-12 rounded-full font-black text-xs transition-all ${
                          trimestre === t 
                          ? 'bg-white text-black' 
                          : 'text-white/40 hover:text-white'
                        }`}
                      >
                        T{t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-32">
                {currentActivities.length > 0 ? (
                  currentActivities.map((act, i) => (
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={act.title}
                      className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                      <div className={`space-y-8 ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                        <h3 className="text-4xl md:text-6xl text-white font-display uppercase leading-tight">{act.title}</h3>
                        <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
                          {act.longDescription || act.description}
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                          {act.skills.map(skill => (
                            <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded text-[10px] font-black uppercase tracking-widest text-white/40">
                              Habilidade {skill}
                            </span>
                          ))}
                        </div>
                        {act.externalLink && (
                          <a 
                            href={act.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={act.title.includes('Grand Prix') 
                              ? "inline-flex items-center justify-center gap-3 w-full px-8 py-5 bg-white text-black text-xs font-black uppercase tracking-[0.2em] rounded-xl hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
                              : "inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white border-b border-white pb-1 hover:opacity-50 transition-all w-fit"
                            }
                          >
                            {act.title.includes('Grand Prix') ? 'ACESSAR DOCUMENTAÇÃO COMPLETA' : act.title.includes('Meme') || act.title.includes('Eletrização') ? 'ACESSAR EXPLICAÇÃO' : act.title.includes('Literárias') ? 'VISITAR JOGO' : 'VISITAR LINK EXTERNO'} <Globe size={act.title.includes('Grand Prix') ? 18 : 14} />
                          </a>
                        )}
                      </div>
                      
                      <div className={`space-y-6 ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                        {act.embed ? (
                          <div className="aspect-video w-full rounded-3xl overflow-hidden glass-card border-white/10 shadow-2xl relative group">
                            <iframe 
                              src={act.embed}
                              className="w-full h-full bg-white/5"
                              allowFullScreen
                              allow="fullscreen"
                              loading="lazy"
                              title={act.title}
                            />
                          </div>
                        ) : (
                          <div className="aspect-video rounded-3xl overflow-hidden glass-card border-white/10 relative group">
                             {act.image ? (
                               <img src={act.image} alt={act.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                             ) : (
                               <div className="w-full h-full flex items-center justify-center text-white/10">
                                 <ImageIcon size={48} />
                               </div>
                             )}
                             <div className="absolute inset-0 bg-gradient-to-t from-pitch-black to-transparent opacity-40" />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="py-20 text-center">
                    <p className="text-2xl text-white/20 font-display uppercase">
                      {activeAreaId === 'ppe' ? 'Esse aluno não precisou de PPE' : 'Nenhum trabalho cadastrado para este trimestre.'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <section id="início" className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent z-10" />
          <div className="absolute inset-0 bg-pitch-black opacity-70 z-10" />
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center filter grayscale opacity-50" />
        </div>

        <div className="relative z-20 max-w-5xl text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="text-[10px] md:text-xs font-bold tracking-[0.6em] text-white uppercase mb-8 opacity-60">
              ESTUDANTE SESI • PROJETO DE VIDA 2026
            </div>
            <h1 className="text-7xl md:text-[9rem] leading-[0.8] mb-12 uppercase font-display text-white tracking-tighter">
              PORTFÓLIO<br />
              <span className="opacity-40">ESTUDANTIL</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/50 leading-relaxed mb-20 max-w-3xl mx-auto font-light">
              Uma jornada de disciplina, ambição e resultados reais. Moldando o futuro através do foco incansável na evolução contínua e no sucesso pessoal.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <motion.a 
                href="#sobre" 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="btn-primary flex items-center gap-3 scale-110 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >
                COMEÇAR AGORA <ChevronRight size={16} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.a 
          href="#sobre" 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/20 hover:text-white transition-colors cursor-pointer group"
        >
           <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-white transition-colors">
              <ChevronRight className="rotate-90" size={14} />
           </div>
        </motion.a>
      </section>

      {/* --- SOBRE MIM --- */}
      <section id="sobre" className="py-40 bg-pitch-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionTitle 
            title="Sobre Mim" 
            subtitle="Uma visão clara sobre os objetivos e a mentalidade por trás de cada conquista."
          />
          <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
            <div className="flex-1 space-y-8 pr-4">
              <p className="text-2xl md:text-3xl leading-relaxed text-white/90 font-light max-w-2xl">
                Meu nome é <span className="text-white font-bold">Kauã Santos</span>, tenho 17 anos e moro em Florianópolis. Do sonho do futebol à academia e dinheiro.
              </p>
              <p className="text-lg leading-relaxed text-white/40 max-w-2xl">
                Aos 17 anos (projeção 2026), já alcancei resultados que poucos adultos conseguem: fazendo salários mensais através da internet que poucos adultos fazem. Minha trajetória é definida por disciplina e ambição agressiva por resultados.
              </p>
              <p className="text-lg leading-relaxed text-white/40 max-w-2xl">
                Apesar de não ser muito dedicado aos estudos escolares tradicionais, mantenho-me sempre acima da média focando no que realmente gera valor. Meu maior objetivo é o sucesso financeiro e o corpo ideal antes dos 20 anos, construindo um legado real ao lado do meu melhor amigo Júlio.
              </p>
              <div className="pt-10 flex gap-8 flex-wrap border-t border-white/5">
                 <EditorialStat label="Idade" value="17" />
                 <EditorialStat label="Foco" value="Digital" />
                 <EditorialStat label="Local" value="Floripa" />
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-[3/4] w-64 bg-white/5 border border-white/10 rounded-2xl overflow-hidden relative group shrink-0 mt-2"
            >
              <img 
                src="https://i.imgur.com/V44T6HF.jpeg" 
                alt="Kauã Santos" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pitch-black to-transparent opacity-40" />
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-1 mt-12">
            <div className="glass-card p-10 space-y-8 rounded-3xl border-white/5 max-w-2xl">
               <h4 className="text-2xl font-display uppercase tracking-widest text-white">DADOS DO PERFIL</h4>
               <ul className="space-y-6">
                 {[
                   { label: 'Paixão', value: 'Academia & Treino', icon: <Dumbbell className="w-5 h-5" /> },
                   { label: 'Sonho', value: 'Sucesso Financeiro < 20', icon: <Trophy className="w-5 h-5" /> },
                   { label: 'Mentalidade', value: 'Hiper-Foco e Resultados', icon: <Target className="w-5 h-5" /> },
                   { label: 'Social', value: 'Extrovertido & Leal', icon: <User className="w-5 h-5" /> },
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-6">
                     <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white">{item.icon}</div>
                     <div>
                       <div className="text-[10px] uppercase font-bold text-white/30 tracking-widest">{item.label}</div>
                       <div className="text-white font-medium">{item.value}</div>
                     </div>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- CURRÍCULO VITAE --- */}
      <section id="cv" className="py-40">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionTitle 
            title="Currículo Vitae" 
            subtitle="Estrutura profissional dedicada a mostrar a evolução técnica e comportamental ao longo dos anos."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <a 
              href="https://docs.google.com/document/d/1zXeWwtTdZmNBNWfLm7F8xdQialZyjkgddh-Ed6Ru6UM/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-12 space-y-8 group hover:border-white/20 transition-all cursor-pointer block"
            >
               <div className="w-12 h-12 bg-white flex items-center justify-center rounded-xl">
                 <Globe className="text-black" />
               </div>
               <h3 className="text-4xl text-white font-display uppercase">Versão Português</h3>
               <p className="text-white/40 leading-relaxed">Reflexão estruturada sobre experiências, habilidades sociais e conquistas acadêmicas no SESI Florianópolis.</p>
               
               <div className="aspect-[4/3] w-full bg-white/5 rounded-lg overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors">
                 <iframe 
                   src="https://docs.google.com/document/d/1zXeWwtTdZmNBNWfLm7F8xdQialZyjkgddh-Ed6Ru6UM/preview" 
                   className="w-full h-full pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity"
                   title="Preview Versão Português"
                 />
               </div>

               <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white border-b border-white pb-2 w-fit">ACESSAR ARQUIVO <Download size={14} /></div>
            </a>
            <a 
              href="https://docs.google.com/document/d/1BT3ytwmYx7zm-n74TigtUneu83DD5z4Cb08ANzCmiWY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-12 space-y-8 group hover:border-white/20 transition-all cursor-pointer block"
            >
               <div className="w-12 h-12 border border-white/20 flex items-center justify-center rounded-xl">
                 <MessageSquare className="text-white/40" />
               </div>
               <h3 className="text-4xl text-white font-display uppercase">English Version</h3>
               <p className="text-white/40 leading-relaxed">International presentation of skills, focus on results and professional ambition built in Brazil.</p>
               
               <div className="aspect-[4/3] w-full bg-white/5 rounded-lg overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors">
                 <iframe 
                   src="https://docs.google.com/document/d/1BT3ytwmYx7zm-n74TigtUneu83DD5z4Cb08ANzCmiWY/preview" 
                   className="w-full h-full pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity"
                   title="Preview English Version"
                 />
               </div>

               <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white border-b border-white pb-2 w-fit">DOWNLOAD EN-US <Download size={14} /></div>
            </a>
          </div>
        </div>
      </section>

      {/* --- ÁREAS --- */}
      <section id="áreas" className="py-40 bg-pitch-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionTitle 
            title="Áreas de Domínio" 
            subtitle="O conhecimento multidisciplinar é a base para qualquer estratégia de sucesso duradouro."
          />
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="grid grid-cols-2 gap-4">
              {AREAS.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setActiveAreaId(area.id)}
                  className={`p-8 text-left border rounded-2xl transition-all ${
                    activeAreaId === area.id 
                    ? 'bg-white border-white text-black' 
                    : 'bg-white/5 border-white/5 text-white/40 hover:border-white/20'
                  }`}
                >
                  <div className="mb-4">{area.icon}</div>
                  <div className="font-display text-2xl uppercase leading-tight">{area.title}</div>
                </button>
              ))}
            </div>
            <div className="glass-card p-12 min-h-[440px] flex flex-col justify-center rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeAreaId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-8"
                >
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                    {AREAS.find(a => a.id === activeAreaId)?.icon}
                  </div>
                  <h3 className="text-5xl text-white font-display uppercase">{AREAS.find(a => a.id === activeAreaId)?.title}</h3>
                  <p className="text-2xl text-white/40 leading-relaxed font-light italic">
                    "{AREAS.find(a => a.id === activeAreaId)?.content}"
                  </p>
                  <div className="pt-8 flex gap-4">
                    <button 
                      onClick={() => setShowEvidenceView(true)}
                      className="bg-white/10 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-all"
                    >
                      Ver Trabalhos
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIOS ANTERIORES & ARQUIVOS --- */}
      <section id="anteriores" className="py-40 bg-pitch-black">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="grid md:grid-cols-2 gap-20 items-center">
             <div className="space-y-12 text-center md:text-left">
               <h3 className="text-6xl text-white font-display uppercase tracking-tighter mb-4">Portfólios<br/>Anteriores</h3>
               <p className="text-xl text-white/40 leading-relaxed italic border-l border-white/10 pl-8">
                 "Documentar o progresso é garantir que a evolução seja constante. Meus portfólios passados são os degraus para o sucesso de amanhã."
               </p>
               
               <div className="space-y-6">
                 <div className="flex gap-4 p-2 bg-white/5 rounded-xl border border-white/10 w-fit mx-auto md:mx-0">
                    {['2024', '2025'].map((year) => (
                      <button
                        key={year}
                        onClick={() => setPortfolioYear(year as '2024' | '2025')}
                        className={`px-8 py-3 rounded-lg font-black text-xs transition-all ${
                          portfolioYear === year 
                          ? 'bg-white text-black' 
                          : 'text-white/40 hover:text-white'
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                 </div>
                 
                 <a 
                   href={portfolioYear === '2025' ? "https://sites.google.com/estudante.sesisenai.org.br/portiflio-2025?usp=sharing" : "https://www.canva.com/design/DAF-jQmzMgY/p-gml3cn3jo6n24mmqCBuw/view?utm_content=DAF-jQmzMgY&utm_campaign=designshare&utm_medium=embeds&utm_source=link"}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="btn-primary w-full md:w-auto shadow-[0_0_30px_rgba(255,255,255,0.1)] inline-block text-center"
                 >
                   ACESSAR PORTFÓLIO {portfolioYear}
                 </a>
               </div>
             </div>
             <div className="w-full">
                {portfolioYear === '2025' ? (
                  <div className="aspect-[3/4] w-full glass-card flex flex-col items-center justify-center p-8 text-center border-white/10 rounded-3xl">
                    <p className="text-white/40 mb-6 uppercase text-[10px] font-black tracking-widest leading-relaxed">O Google Sites restringe a incorporação direta.<br/>Acesse através do botão ao lado.</p>
                    <div className="w-12 h-[1px] bg-white/10 mb-6"></div>
                    <a 
                      href="https://sites.google.com/estudante.sesisenai.org.br/portiflio-2025?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white border-b border-white pb-1 hover:opacity-50 transition-all uppercase text-[10px] font-black"
                    >
                      Ver Portfólio 2025
                    </a>
                  </div>
                ) : (
                  <div className="aspect-video w-full glass-card overflow-hidden rounded-3xl border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)]">
                    <iframe 
                      src="https://www.canva.com/design/DAF-jQmzMgY/p-gml3cn3jo6n24mmqCBuw/view?embed" 
                      className="w-full h-full bg-white/5"
                      title="Portfolio 2024"
                      allowFullScreen
                      allow="fullscreen"
                      loading="lazy"
                    />
                  </div>
                )}
             </div>
           </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 bg-dark-bg border-t border-white/5 text-center">
        <div className="container mx-auto px-6 space-y-12">
          <div className="flex flex-col items-center gap-6">
            <div className="bg-white p-2 rounded">
               <GraduationCap className="text-black w-6 h-6" />
            </div>
            <p className="font-display text-5xl text-white uppercase tracking-tighter">KAUÃ SANTOS <span className="opacity-30">2026</span></p>
          </div>
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.6em]">
            &copy; 2026 Todos os direitos reservados • SESI SC
          </p>
          <div className="flex justify-center gap-10">
            {['Instagram', 'LinkedIn'].map(social => (
              <a key={social} href="#" className="text-[10px] font-bold text-white/20 hover:text-white transition-colors uppercase tracking-widest">{social}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
