import React, { useState, useEffect } from 'react';

// --- ÍCONES (SVG) ---
// LISTA COMPLETA DE TODOS OS 26 ÍCONES
const Home = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const BookOpen = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
const Users = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const Search = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const ChevronDown = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>;
const Plus = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
const X = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const UserCheck = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>;
const Mail = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const PlusCircle = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>;
const MinusCircle = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg>;
const Cake = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-8a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v8Z"/><path d="M20 13V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M12 21v-8"/><path d="M12 13s-2-1-2-4 2-4 2-4 2 3 2 4-2 4-2 4Z"/><path d="M12 3v-1"/><path d="M22 17H2"/></svg>;
const Star = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const FileText = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>;
const ListTodo = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="6" height="6" rx="1"/><path d="m3 17 6 0"/><path d="m13 5 8 0"/><path d="m13 11 8 0"/><path d="m13 17 8 0"/></svg>;
const ClipboardList = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>;
const Archive = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/></svg>;
const Edit2 = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>;
const Save = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>;
const BookMarked = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V6H3v10.5A2.5 2.5 0 0 0 5.5 19H6"/><path d="M6 19v-3"/><path d="M14 6V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2"/></svg>;
const Trash2 = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>;
const UploadCloud = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/></svg>;
const File = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>;
const Mic = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>;
const ExternalLink = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>;


// --- DADOS MOCADOS GLOBAIS ---

// DADOS ATUALIZADOS PARA FILTROS (Com base na sua solicitação)
const globalMockFiltros = {
  niveis: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  palavrasChave: [
    '1st conditional', '2nd conditional', '3rd conditional', 'articles', 'cardinal numbers', 
    'causative sentences', 'cleft clauses', 'collective nouns', 'comparative mode', 
    'connectors', 'coordinating conjunctions', 'correlative conjunctions', 'definite articles', 
    'demonstrative pronouns', 'determiners', 'ellipsis', 'embedded questions', 'emphasis', 
    'future continuous', 'future in the past', 'future perfect', 'future perfect continuous', 
    'future simple', 'genitive case', 'greetings', 'have got', 'imperative mood', 
    'indefinite articles', 'indefinite pronouns', 'interpretation', 'inversion', 'mind map', 
    'mixed conditionals', 'modal verbs', 'non-reflexive verbs', 'noun modifiers', 
    'object pronouns', 'ordinal numbers', 'participle clauses', 'passive voice', 
    'past continuous', 'past modals', 'past perfect', 'past perfect continuous', 
    'possessive adjectives', 'possessive pronouns', 'prepositions', 'prepositions of place', 
    'prepositions of possession', 'prepositions of time', 'present continuous', 
    'present perfect', 'present perfect continuous', 'pronunciation', 'propositions', 
    'prosody', 'punctuation', 'question tags', 'question words', 'reciprocal pronouns', 
    'reflexive pronouns', 'reflexive verbs', 'relative pronouns', 'relative pronuns', 
    'reported speech', 'semi-modal verbs', 'simple past', 'simple present', 
    'split infinitives', 'subject pronouns', 'subject questions', 'subjunctive mood', 
    'subordinating conjunctions', 'superlative mode', 'used to', 'verb rather', 
    'verb there to be - future', 'verb there to be - past', 'verb there to be - present', 
    'verb to be - past', 'verb to be - present', 'verb to be born', 'verb to to be - past', 
    'zero article', 'zero conditional'
  ],
  arquivosInter: [
    'Black Friday', 'British Council', 'Business', 'Carnival', "Children's Day", 'Christmas', 
    'Disney', 'Easter', 'Festa Junina', "Father's Day", 'Friends', 'Game', 'Halloween', 
    'Holidays', 'Kids', 'Literature', "Mother's Day", 'Movie Scenes', 'Music', 
    'National Comic Book Day', "New Year's Day", 'Projeto de Leitura', 'Quiz', 
    'Shakespeare', 'Sports', 'Teenagers', 'Test', 'Thanksgiving', 'Toefl', 
    'Translation', 'Travel', 'TV Series', 'UFRGS', "Valentine's Day"
  ],
  vocabulario: [
    'Adjectives', 'Adverbs', 'Adverbs of Degree', 'Adverbs of Frequency', 'Adverbs of Manner', 
    'Adverbs of Possession', 'Adverbs of Time', 'Alphabet', 'Body Parts', 'Days of the Week', 
    'False Friends', 'Family Members', 'Frequency Adverbs', 'Hours', 'Idioms', 
    'Irregular Plurals', 'Linking Words', 'Metaphors', 'Personal Titles', 'Phrasal Verbs', 
    'Prefixos e Sufixos', 'Quotes', 'Som do Ed', 'Uncountable Nouns', 'Verb Wish', 'Quantifiers'
  ],
};

const globalMockAulas = [
  { id: 'aula_001', titulo: 'Gírias Brasileiras: Expressões do Dia a Dia', link: '#', imagemCapa: 'https://placehold.co/600x400/1e293b/94a3b8?text=Aula+1', competencias: 'Speaking, Vocabulário', nivel: 'B1' },
  { id: 'aula_002', titulo: 'Gramática Essencial: Simple Past vs. Present Perfect', link: '#', imagemCapa: 'https://placehold.co/600x400/1e293b/94a3b8?text=Aula+2', competencias: 'Grammar', nivel: 'A2' },
  { id: 'aula_003', titulo: 'Vocabulário de Negócios: Reuniões e E-mails', link: '#', imagemCapa: '', competencias: 'Vocabulary, Writing', nivel: 'B2' }, // Imagem vazia para teste
  { id: 'aula_004', titulo: 'Debate: O Futuro do Trabalho Remoto', link: '#', imagemCapa: 'https://placehold.co/600x400/1e293b/94a3b8?text=Aula+4', competencias: 'Speaking', nivel: 'C1' },
  { id: 'aula_005', titulo: 'Interpretando Artigos Acadêmicos', link: '#', imagemCapa: 'https://placehold.co/600x400/1e293b/94a3b8?text=Aula+5', competencias: 'Reading', nivel: 'C1' },
  { id: 'aula_006', titulo: 'Audição de Notícias: Sotaques Britânicos', link: '#', imagemCapa: 'https://placehold.co/600x400/1e293b/94a3b8?text=Aula+6', competencias: 'Listening', nivel: 'B2' },
];

const globalMockAlunos = [
  {
    id: '412382fa',
    nomeCompleto: 'Leonardo Victor Medeiros Gonçalves',
    tipoDeAula: 'Dupla',
    email1: 'leomedeiros.vic7or@gmail.com',
    nomeColega1: 'Thamires Estevam Vieira de Deus',
    email2: 'thamiresed22@gmail.com',
    nomeColega2: null,
    email3: null,
    telefone1: '(11) 98765-4321',
    telefone2: '(11) 91234-5678',
    telefone3: null,
    fotoUrl1: 'https://placehold.co/128x128/6366f1/ffffff?text=LV',
    fotoUrl2: 'https://placehold.co/128x128/f472b6/ffffff?text=TE',
    fotoUrl3: null,
    dataNascimento1: '2000-04-20',
    dataNascimento2: '1999-11-08', // Aniversário de teste
    dataNascimento3: null,
    linkContrato: 'https://drive.google.com/file/d/1tl3tEzSEfKyT7ktpD47aUe6eoNrHkJUI/view',
    creditos: 2,
    speaking: 'A2-B1', reading: 'A2-B1', listening: 'A2-B1', writing: 'A2', vocabulary: 'B1',
  },
  {
    id: '128950d1',
    nomeCompleto: 'Marcela Rezende Amaral',
    tipoDeAula: 'Individual',
    email1: 'mahr.amaral@gmail.com',
    nomeColega1: null, email2: null, nomeColega2: null, email3: null,
    telefone1: '(21) 91234-5678', telefone2: null, telefone3: null,
    fotoUrl1: null, fotoUrl2: null, fotoUrl3: null,
    dataNascimento1: '1995-10-10', dataNascimento2: null, dataNascimento3: null,
    linkContrato: 'https://drive.google.com/file/d/1F_fugNULh_AzbrFrQwNKXPQd-1pve9Hl/view?usp=drive_link',
    creditos: 0,
    speaking: 'A0', reading: 'A0', listening: 'A0', writing: 'A0', vocabulary: 'A0',
  },
  {
    id: 'trio_001',
    nomeCompleto: 'Aluno Teste Trio 1',
    tipoDeAula: 'Trio',
    email1: 'trio1@teste.com',
    nomeColega1: 'Aluno Teste Trio 2',
    email2: 'trio2@teste.com',
    nomeColega2: 'Aluno Teste Trio 3',
    email3: 'trio3@teste.com',
    telefone1: '(31) 95555-1234',
    telefone2: '(31) 95555-5678',
    telefone3: '(31) 95555-9012',
    fotoUrl1: 'https://placehold.co/128x128/2dd4bf/ffffff?text=T1',
    fotoUrl2: 'https://placehold.co/128x128/2dd4bf/ffffff?text=T2',
    fotoUrl3: 'https://placehold.co/128x128/2dd4bf/ffffff?text=T3',
    dataNascimento1: '2002-01-15',
    dataNascimento2: '2001-07-30',
    dataNascimento3: null,
    linkContrato: 'https://drive.google.com/file/d/1F_fugNULh_AzbrFrQwNKXPQd-1pve9Hl/view?usp=drive_link',
    creditos: 4,
    speaking: 'B2', reading: 'C1', listening: 'B2', writing: 'B1', vocabulary: 'B2',
  },
];

const globalMockPlanejamento = [
  { id: 'p1', alunoId: '412382fa', tituloAula: globalMockAulas[0].titulo, link: globalMockAulas[0].link},
  { id: 'p2', alunoId: '412382fa', tituloAula: globalMockAulas[1].titulo, link: globalMockAulas[1].link},
  { id: 'p3', alunoId: '412382fa', tituloAula: globalMockAulas[2].titulo, link: globalMockAulas[2].link},
  { id: 'p4', alunoId: '412382fa', tituloAula: globalMockAulas[3].titulo, link: globalMockAulas[3].link},
  { id: 'p5', alunoId: '412382fa', tituloAula: globalMockAulas[4].titulo, link: globalMockAulas[4].link},
  { id: 'p6', alunoId: '128950d1', tituloAula: globalMockAulas[0].titulo, link: globalMockAulas[0].link},
  { id: 'p7', alunoId: 'trio_001', tituloAula: globalMockAulas[5].titulo, link: globalMockAulas[5].link},
];

const globalMockRegistrosDiario = [
  { id: 'd1', alunoId: '412382fa', dataAula: '2025-10-20', status: 'Presente', observacoes: 'Ótima participação. Foco em Simple Past.' },
  { id: 'd2', alunoId: '412382fa', dataAula: '2025-10-13', status: 'Falta', observacoes: 'Aluno avisou com antecedência.' },
  { id: 'd3', alunoId: '128950d1', dataAula: '2025-10-22', status: 'Presente', observacoes: 'Iniciamos o alfabeto e saudações.' },
  { id: 'd4', alunoId: 'trio_001', dataAula: '2025-10-23', status: 'Presente', observacoes: 'Grupo muito engajado no debate.' },
];
// --- FIM DOS DADOS GLOBAIS ---


// --- COMPONENTE PRINCIPAL (CORRIGIDO PARA REGRAS DO REACT HOOKS E LOGIN) ---
export default function App() {
  
  // --- REGRA DOS HOOKS: Todos os hooks devem ser chamados no topo ---
  // Hooks para o Login
  const [autenticado, setAutenticado] = useState(false);
  const [senha, setSenha] = useState("");
  // Hooks para o App Principal
  const [paginaAtiva, setPaginaAtiva] = useState('Biblioteca'); 

  // --- LÓGICA DE LOGIN ---
  const SENHA_CORRETA = "senha123"; // Troque pela sua senha

  const handleLogin = (e) => {
    e.preventDefault();
    if (senha === SENHA_CORRETA) {
      setAutenticado(true);
    } else {
      alert("Senha incorreta!");
    }
  };

  // --- LÓGICA DO APP (Também movida para cima) ---
  const renderizarPagina = () => {
    switch (paginaAtiva) {
      case 'Biblioteca':
        return <Biblioteca />;
      case 'Diarios':
        return <Diarios />;
      case 'Alunos':
        return <Alunos />;
      default:
        return <Biblioteca />;
    }
  };

  // --- RENDERIZAÇÃO CONDICIONAL ---

  // 1. Se NÃO estiver autenticado, mostra o login
  if (!autenticado) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-gray-900">
        <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-white text-2xl mb-6 text-center font-bold">Acesso Restrito</h2>
          <label className="block text-sm font-medium text-gray-300 mb-1">Senha</label>
          <input
            type="password"
            placeholder="Digite a senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 text-white text-sm rounded-lg p-2.5 mb-6 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors">
            Entrar
          </button>
        </form>
      </div>
    );
  }

  // 2. Se ESTIVER autenticado, mostra o app principal
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 font-inter">
      <Sidebar paginaAtiva={paginaAtiva} setPaginaAtiva={setPaginaAtiva} />
      <main className="flex-1 p-10 overflow-y-auto">
        {renderizarPagina()}
      </main>
    </div>
  );
}
// --- FIM DO COMPONENTE App ---


// --- BARRA LATERAL (Sidebar) ---
const Sidebar = ({ paginaAtiva, setPaginaAtiva }) => {
  // A função 'linkClass' estava faltando. Ela é necessária para o estilo dos botões.
  const linkClass = (pagina) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
      paginaAtiva === pagina
        ? 'bg-indigo-600 text-white'
        : 'text-gray-400 hover:bg-gray-700 hover:text-white'
    }`;
  
  return (
    <aside className="w-64 bg-gray-800 p-6 flex flex-col h-screen">
      <h1 className="text-2xl font-bold text-white mb-10">Sistema</h1>
      <nav className="flex flex-col gap-4">
        <button onClick={() => setPaginaAtiva('Biblioteca')} className={linkClass('Biblioteca')}>
          <BookOpen className="w-5 h-5" />
          Biblioteca
        </button>
        <button onClick={() => setPaginaAtiva('Diarios')} className={linkClass('Diarios')}>
          <BookMarked className="w-5 h-5" />
          Diários
        </button>
        <button onClick={() => setPaginaAtiva('Alunos')} className={linkClass('Alunos')}>
          <Users className="w-5 h-5" />
          Alunos
        </button>
      </nav>
    </aside>
  );
};

// --- PÁGINA: Biblioteca (O "Fileflix") (MODIFICADA) ---
const Biblioteca = () => {
  // Puxando dos filtros globais
  const filtros = globalMockFiltros;
  
  // MODIFICADO: Dois estados para os modais
  const [aulaSelecionada, setAulaSelecionada] = useState(null); // Para o novo modal de DETALHES
  const [aulaParaEditar, setAulaParaEditar] = useState(null);   // Para o modal de EDIÇÃO existente
  
  // NOVO: Estado para os dados das aulas (começa vazio)
  const [aulas, setAulas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // --- NOVO: Função para carregar e parsear o CSV ---
  // !! IMPORTANTE !! Troque esta URL pela sua URL de CSV "Publicado na Web"
  const URL_DA_SUA_PLANILHA_CSV = 'COLE_SEU_LINK_PUBLICADO_DO_GOOGLE_SHEETS_CSV_AQUI';

  const parseCSV = (text) => {
    const linhas = text.replace(/\r/g, "").split('\n');
    if (linhas.length < 2) return []; // Precisa de cabeçalho + dados
    
    // Pega os nomes das colunas da primeira linha (cabeçalho)
    const headers = linhas[0].split(',').map(h => h.trim());
    
    // Encontra os índices das colunas que queremos
    const indexId = headers.indexOf('ID Aula');
    const indexTitulo = headers.indexOf('Nome da Aula');
    const indexLink = headers.indexOf('LINK PDF');
    const indexImg = headers.indexOf('IMAGEM CAPA');
    const indexComp = headers.indexOf('COMPETÊNCIAS');
    const indexNivel = headers.indexOf('NÍVEIS');
    
    // Mapeia o restante das linhas
    return linhas.slice(1).map(linha => {
      const colunas = linha.split(',');
      if (colunas.length < headers.length) return null; // Ignora linhas malformadas
      
      return {
        id: colunas[indexId],
        titulo: colunas[indexTitulo] || 'Aula Sem Título',
        link: colunas[indexLink] || '#',
        imagemCapa: colunas[indexImg] || '',
        competencias: colunas[indexComp] || 'N/A',
        nivel: colunas[indexNivel] || 'N/A',
      };
    }).filter(aula => aula && aula.id); // Filtra linhas nulas ou sem ID
  };

  // --- NOVO: useEffect para buscar os dados na nuvem ---
  useEffect(() => {
    if (!URL_DA_SUA_PLANILHA_CSV.startsWith('http')) {
      console.warn("URL da planilha não configurada. Usando dados mocados.");
      setAulas(globalMockAulas); // Usa o fallback
      setCarregando(false);
      return;
    }
    
    setCarregando(true);
    fetch(URL_DA_SUA_PLANILHA_CSV)
      .then(response => {
        if (!response.ok) {
          throw new Error('Falha ao buscar dados da planilha');
        }
        return response.text();
      })
      .then(csvText => {
        const aulasParseadas = parseCSV(csvText);
        setAulas(aulasParseadas);
      })
      .catch(error => {
        console.error("Erro ao carregar dados da planilha:", error);
        setAulas(globalMockAulas); // Usa o fallback em caso de erro
      })
      .finally(() => {
        setCarregando(false);
      });
  }, []); // O array vazio [] garante que isso rode apenas uma vez

  
  // Funções para o modal de DETALHES
  const handleAbrirDetalhes = (aula) => {
    setAulaSelecionada(aula);
  };
  const handleFecharDetalhes = () => {
    setAulaSelecionada(null);
  };

  // Funções para o modal de EDIÇÃO
  const handleAbrirEditor = (aula) => {
    setAulaParaEditar(aula);
  };
  const handleFecharEditor = () => {
    setAulaParaEditar(null);
  };

  // NOVO: Função para "pular" do modal de detalhes para o de edição
  const handleAbrirEditorDeDetalhes = (aula) => {
    handleFecharDetalhes();  // Fecha o modal de detalhes
    handleAbrirEditor(aula); // Abre o modal de edição
  };
  
  const handleSalvarAula = (aulaEditada) => {
    console.log("Salvando Aula:", aulaEditada);
    // ATUALIZA O ESTADO LOCAL (para vermos a mudança)
    setAulas(prevAulas => 
      prevAulas.map(a => a.id === aulaEditada.id ? aulaEditada : a)
    );
    handleFecharEditor();
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-4">Biblioteca de Aulas</h2>
      <p className="text-gray-400 mb-8">Encontre o material perfeito para sua próxima aula.</p>
      
      {/* Container de Filtros (MODIFICADO) */}
      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Busca por Nome */}
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-gray-400 mb-2">Buscar por nome</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Digite o nome da aula..."
                className="w-full bg-gray-700 border border-gray-600 text-white text-sm rounded-lg p-2.5 pl-10"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
          {/* Novos Filtros */}
          <FiltroDropdown nome="Nível" opcoes={filtros.niveis} />
          <FiltroDropdown nome="Palavra-chave" opcoes={filtros.palavrasChave} />
          <FiltroDropdown nome="Arquivo Interdisciplinar" opcoes={filtros.arquivosInter} />
          <FiltroDropdown nome="Vocabulário" opcoes={filtros.vocabulario} />
        </div>
      </div>

      {/* Grid de Aulas (Cards) - MODIFICADO */}
      {carregando ? (
        <p className="text-gray-400">Carregando aulas da planilha...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {aulas.map(aula => (
            <CardAula 
              key={aula.id} 
              aula={aula}
              onCardClick={() => handleAbrirDetalhes(aula)} // Abre o modal de DETALHES
            />
          ))}
        </div>
      )}
      
      {/* NOVO: Modal de DETALHES da Aula */}
      {aulaSelecionada && (
        <ModalDetalhesAula
          aula={aulaSelecionada}
          onClose={handleFecharDetalhes}
          onAbrirEditor={handleAbrirEditorDeDetalhes} // Passa a função para abrir o editor
        />
      )}
      
      {/* Modal de EDIÇÃO de Aula (Existente) */}
      {aulaParaEditar && (
        <ModalEditarAula
          aula={aulaParaEditar}
          onClose={handleFecharEditor}
          onSave={handleSalvarAula}
        />
      )}
    </div>
  );
};

// --- Componente Auxiliar: Filtro Dropdown ---
const FiltroDropdown = ({ nome, opcoes }) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-400 mb-2">{nome}</label>
      <select className="w-full bg-gray-700 border border-gray-600 text-white text-sm rounded-lg p-2.5">
        <option>Todos</option>
        {opcoes.map((op, i) => <option key={i} value={op}>{op}</option>)}
      </select>
    </div>
  );
};

// --- Componente Auxiliar: Card da Aula (MODIFICADO) ---
const CardAula = ({ aula, onCardClick }) => {
  const placeholder = 'https://placehold.co/600x400/1e293b/94a3b8?text=Aula';
  
  return (
    // Agora é um <button> para abrir o modal de detalhes
    <button 
      onClick={onCardClick}
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden text-left transition-all duration-300 group relative text-left w-full
                 hover:shadow-indigo-500/30 transform hover:-translate-y-1"
    >
      {/* Imagem de Capa */}
      <div className="w-full h-40 bg-gray-700 overflow-hidden">
        <img 
          src={aula.imagemCapa || placeholder} 
          alt={`Capa da aula ${aula.titulo}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => e.target.src = placeholder}
        />
      </div>
      
      {/* Conteúdo do Card */}
      <div className="p-4">
        {/* Título não é mais um link, o card todo é o gatilho */}
        <h3 
          className="text-md font-semibold text-white mb-2 h-12 overflow-hidden group-hover:text-indigo-300"
          title={aula.titulo}
        >
          {aula.titulo}
        </h3>
        <p className="text-xs text-indigo-400 uppercase">{aula.competencias || 'N/A'}</p>
      </div>
    </button>
  );
};

// --- NOVO COMPONENTE: Modal de DETALHES da Aula ---
const ModalDetalhesAula = ({ aula, onClose, onAbrirEditor }) => {
  const placeholder = 'https://placehold.co/600x400/1e293b/94a3b8?text=Aula';
  
  const handleEditarClick = () => {
    onAbrirEditor(aula); // Fecha este modal e abre o outro
  };
  
  return (
    // Overlay (Fundo escuro) - Animação idêntica ao ModalDetalhesAluno
    <div 
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
      onClick={onClose} 
    >
      {/* Conteúdo do Modal */}
      <div
        className="bg-gray-800 w-full max-w-md rounded-lg shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()} 
      >
        {/* Imagem da Capa */}
        <div className="w-full h-48 bg-gray-700">
          <img 
            src={aula.imagemCapa || placeholder}
            alt={`Capa da aula ${aula.titulo}`}
            className="w-full h-full object-cover"
            onError={(e) => e.target.src = placeholder}
          />
        </div>
        
        {/* Conteúdo */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-4">{aula.titulo}</h2>
          
          {/* Ações */}
          <div className="flex flex-col gap-3">
            <a
              href={aula.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-lg"
            >
              <ExternalLink className="w-5 h-5" />
              Ir para a Aula
            </a>
            <button
              onClick={handleEditarClick}
              className="flex items-center justify-center gap-2 w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-2.5 px-4 rounded-lg"
            >
              <Edit2 className="w-5 h-5" />
              Editar Aula
            </button>
          </div>
        </div>
        
        {/* Botão de Fechar no canto */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-300 bg-black/30 rounded-full p-1.5 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

// --- Componente: Modal de EDIÇÃO de Aula ---
const ModalEditarAula = ({ aula, onClose, onSave }) => {
  const [titulo, setTitulo] = useState(aula.titulo);
  const [imagemCapa, setImagemCapa] = useState(aula.imagemCapa || '');
  
  const handleSalvar = () => {
    onSave({
      ...aula,
      titulo: titulo,
      imagemCapa: imagemCapa,
    });
  };
  
  return (
    // Z-index maior para sobrepor o modal de detalhes (se houver)
    <div 
      className="fixed inset-0 bg-black/70 z-[60] flex items-center justify-center p-4" 
      onClick={onClose} 
    >
      <div
        className="bg-gray-800 w-full max-w-lg rounded-lg shadow-2xl p-8"
        onClick={e => e.stopPropagation()} 
      >
        {/* Cabeçalho */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <Edit2 className="w-7 h-7 text-indigo-400" />
            Editar Aula
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Formulário de Edição */}
        <form className="space-y-4">
          <FormInput
            label="Nome da Aula"
            name="titulo"
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
          <FormInput
            label="URL da Imagem de Capa"
            name="imagemCapa"
            type="text"
            value={imagemCapa}
            onChange={(e) => setImagemCapa(e.target.value)}
            placeholder="https://link-da-imagem.com/capa.png"
          />
        </form>
        
        {/* Botões de Ação */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-600 text-white font-medium py-2 px-5 rounded-lg hover:bg-gray-700"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={handleSalvar}
            className="bg-indigo-600 text-white font-medium py-2 px-5 rounded-lg hover:bg-indigo-700"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

// --- PÁGINA: Diários (Sem alteração) ---
const Diarios = () => {
  
  // Estado para o formulário
  const initialState = {
    alunoId: '',
    dataAula: '',
    status: 'Presente', // Default
    teveAtraso: 'Não',
    tempoAtraso: '',
    motivoAtraso: '',
    aulaId: '',
    continuarAula: 'Não',
    paginaContinua: '',
    erros: '',
    vocabulario: '',
    // Novos campos para "Falta"
    motivoFalta: '',
    provaFaltaImg: null,
    provaFaltaAudio: null,
  };
  
  const [formState, setFormState] = useState(initialState);
  
  // --- NOVOS ESTADOS PARA CRÉDITOS ---
  const [creditosAluno, setCreditosAluno] = useState(null); // Armazena os créditos do aluno selecionado
  const [avisoCredito, setAvisoCredito] = useState('');     // Mensagem de aviso do limite
  
  // Lida com a mudança de qualquer campo do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  // --- MODIFICADO: Lida com a seleção nos componentes de busca ---
  const handleSelect = (name, id) => {
    setFormState(prev => ({ ...prev, [name]: id }));
    
    // --- LÓGICA DE CRÉDITOS ---
    if (name === 'alunoId') {
      const aluno = globalMockAlunos.find(a => a.id === id);
      if (aluno) {
        setCreditosAluno(aluno.creditos); // Armazena os créditos atuais
      } else {
        setCreditosAluno(null); // Limpa se o aluno for desmarcado
      }
      setAvisoCredito(''); // Limpa o aviso
    }
    // --- FIM DA LÓGICA DE CRÉDITOS ---
  };

  // --- NOVA FUNÇÃO: Lógica para adicionar/remover créditos ---
  const handleCreditosChange = (amount) => {
    setCreditosAluno(prev => {
      const novoValor = prev + amount;
      if (novoValor < 0) {
        setAvisoCredito(''); // Limpa aviso se tentar ir abaixo de 0
        return 0;
      }
      if (novoValor >= 4) {
        setAvisoCredito('Limite de 4 créditos atingido!'); // Define o aviso
        return 4; // Trava em 4
      }
      setAvisoCredito(''); // Limpa o aviso se estiver dentro do limite
      return novoValor;
    });
    // No futuro, aqui chamaremos a função de update do Firebase
  };
  
  // Resetar o formulário após o envio
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Diário Cadastrado:", formState);
    if (formState.status === 'Falta') {
      console.log("Créditos atualizados para:", creditosAluno);
    }
    
    // Reseta o formulário
    setFormState(initialState);
    setCreditosAluno(null); // Reseta os créditos
    setAvisoCredito('');    // Reseta o aviso
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-4">Novo Registro de Diário</h2>
      <p className="text-gray-400 mb-8">Preencha os campos abaixo para registrar a aula.</p>
      
      <form 
        onSubmit={handleSubmit} 
        className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl space-y-8"
      >
        
        {/* --- Seção Aluno e Aula (Sempre visível) --- */}
        <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BuscaComFiltro
            label="Nome do Aluno"
            placeholder="Pesquisar aluno..."
            opcoes={globalMockAlunos}
            displayField="nomeCompleto"
            valueField="id"
            selectedId={formState.alunoId}
            onSelect={(id) => handleSelect('alunoId', id)} // MODIFICADO
            obrigatorio={true}
          />
          {/* Se "Falta", não precisa selecionar a aula */}
          {formState.status === 'Presente' && (
            <BuscaComFiltro
              label="Aula Utilizada"
              placeholder="Pesquisar aula..."
              opcoes={globalMockAulas}
              displayField="titulo"
              valueField="id"
              selectedId={formState.aulaId}
              onSelect={(id) => handleSelect('aulaId', id)} // MODIFICADO
              obrigatorio={true}
            />
          )}
        </fieldset>

        {/* --- Seção Detalhes da Aula (Sempre visível) --- */}
        <fieldset className="p-4 border border-gray-700 rounded-lg">
          <legend className="px-2 font-medium text-indigo-400">Detalhes da Aula</legend>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormInput
              label="Data da Aula"
              name="dataAula"
              type="date"
              value={formState.dataAula}
              onChange={handleChange}
              required
            />
            <FormSelect
              label="Status"
              name="status"
              value={formState.status}
              onChange={handleChange}
              opcoes={['Presente', 'Falta']}
            />
            {/* Campo "Houve Atraso?" só aparece se for "Presente" */}
            {formState.status === 'Presente' && (
              <FormSelect
                label="Houve Atraso?"
                name="teveAtraso"
                value={formState.teveAtraso}
                onChange={handleChange}
                opcoes={['Não', 'Sim']}
              />
            )}
          </div>
          
          {/* Campos Condicionais de Atraso (Só para "Presente" E "Sim") */}
          {formState.status === 'Presente' && formState.teveAtraso === 'Sim' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <FormInput
                label="Tempo de Atraso (min)"
                name="tempoAtraso"
                type="number"
                placeholder="Ex: 15"
                value={formState.tempoAtraso}
                onChange={handleChange}
              />
              <div className="md:col-span-2">
                <FormInput
                  label="Motivo do Atraso (Opcional)"
                  name="motivoAtraso"
                  type="text"
                  placeholder="Aluno(a) mencionou..."
                  value={formState.motivoAtraso}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}
        </fieldset>
        
        {/* --- SEÇÃO "PRESENTE" (Feedback e Continuação) --- */}
        {formState.status === 'Presente' && (
          <fieldset className="p-4 border border-gray-700 rounded-lg">
            <legend className="px-2 font-medium text-indigo-400">Feedback e Planejamento</legend>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormSelect
                label="Irá continuar a aula?"
                name="continuarAula"
                value={formState.continuarAula}
                onChange={handleChange}
                opcoes={['Não', 'Sim']}
              />
              {formState.continuarAula === 'Sim' && (
                <FormInput
                  label="A partir de qual página?"
                  name="paginaContinua"
                  type="text"
                  placeholder="Ex: Página 3"
                  value={formState.paginaContinua}
                  onChange={handleChange}
                />
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <FormTextarea
                label="Lista de Erros Cometidos"
                name="erros"
                placeholder="Listar erros de pronúncia, gramática, etc..."
                value={formState.erros}
                onChange={handleChange}
                required
                rows={5}
              />
              <FormTextarea
                label="Vocabulário Aprendido"
                name="vocabulario"
                placeholder="Listar novas palavras, expressões, gírias..."
                value={formState.vocabulario}
                onChange={handleChange}
                required
                rows={5}
              />
            </div>
          </fieldset>
        )}
        
        {/* --- NOVA SEÇÃO "FALTA" (Motivo, Prova e Créditos) --- */}
        {formState.status === 'Falta' && (
          <fieldset className="p-4 border border-gray-700 rounded-lg">
            <legend className="px-2 font-medium text-red-400">Registro de Falta</legend>
            
            <FormTextarea
              label="Motivo da Falta"
              name="motivoFalta"
              placeholder="Descreva o motivo da falta..."
              value={formState.motivoFalta}
              onChange={handleChange}
              required
              rows={4}
              className="mb-6"
            />
            
            <label className="block text-sm font-medium text-gray-300 mb-2">Prova de Falta (Opcional)</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <FormUploadButton
                label="Carregar Imagem"
                name="provaFaltaImg"
                icon={<File className="w-5 h-5" />}
                onChange={(e) => setFormState(prev => ({ ...prev, provaFaltaImg: e.target.files[0] }))}
              />
              <FormUploadButton
                label="Carregar Áudio"
                name="provaFaltaAudio"
                icon={<Mic className="w-5 h-5" />}
                onChange={(e) => setFormState(prev => ({ ...prev, provaFaltaAudio: e.target.files[0] }))}
              />
            </div>
            
            {/* Lógica de Créditos (só aparece se um aluno estiver selecionado) */}
            {creditosAluno !== null && (
              <div className="pt-6 border-t border-gray-700">
                <label className="text-sm font-medium text-gray-400 mt-6 mb-2 block text-center">Adicionar Crédito de Reposição (Máx: 4)</label>
                <div className="flex items-center justify-center gap-4">
                  <button
                    type="button" // Impede o submit do formulário
                    onClick={() => handleCreditosChange(-1)}
                    disabled={creditosAluno === 0}
                    className="bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600 disabled:opacity-50"
                  >
                    <MinusCircle className="w-6 h-6" />
                  </button>
                  <span className={`text-2xl font-bold w-10 text-center ${creditosAluno >= 4 ? 'text-red-500' : 'text-white'}`}>
                    {creditosAluno}
                  </span>
                  <button
                    type="button" // Impede o submit do formulário
                    onClick={() => handleCreditosChange(1)}
                    disabled={creditosAluno === 4}
                    className="bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600 disabled:opacity-50"
                  >
                    <PlusCircle className="w-6 h-6" />
                  </button>
                </div>
                {/* Aviso de Limite */}
                {avisoCredito && (
                  <p className="text-red-500 text-center text-sm mt-3">{avisoCredito}</p>
                )}
              </div>
            )}
            
          </fieldset>
        )}

        {/* Botão de Cadastrar */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Cadastrar Diário
          </button>
        </div>
        
      </form>
    </div>
  );
};

// --- NOVO Componente: Busca com Filtro ---
const BuscaComFiltro = ({ label, placeholder, opcoes, displayField, valueField, selectedId, onSelect, obrigatorio }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const filteredOpcoes = opcoes.filter(op => 
    op[displayField].toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const selectedNome = opcoes.find(op => op[valueField] === selectedId)?.[displayField] || '';

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-300 mb-1">
        {label} {obrigatorio && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input 
          type="text" 
          placeholder={placeholder}
          className="w-full bg-gray-700 border border-gray-600 text-white text-sm rounded-lg p-2.5 pl-10"
          value={searchTerm || selectedNome}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            onSelect(''); // Limpa o ID se o usuário começar a digitar
            setDropdownOpen(true);
          }}
          onFocus={() => {
            setSearchTerm(''); // Limpa a busca ao focar
            setDropdownOpen(true);
          }}
          onBlur={() => setTimeout(() => setDropdownOpen(false), 200)} // Delay para permitir o clique
        />
        <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
      </div>
      
      {dropdownOpen && (
        <div className="absolute z-10 w-full mt-1 bg-gray-700 border border-gray-600 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {filteredOpcoes.length > 0 ? (
            filteredOpcoes.map(op => (
              <button
                type="button"
                key={op[valueField]}
                className="block w-full text-left px-4 py-2 text-white hover:bg-indigo-600"
                onClick={() => {
                  onSelect(op[valueField]); // Devolvendo apenas o ID
                  setSearchTerm(op[displayField]);
                  setDropdownOpen(false);
                }}
              >
                {op[displayField]}
              </button>
            ))
          ) : (
            <span className="block px-4 py-2 text-gray-400">Nenhum resultado</span>
          )}
        </div>
      )}
    </div>
  );
};

// --- PÁGINA: Alunos (Limpa) ---
const Alunos = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [alunoSelecionado, setAlunoSelecionado] = useState(null);

  return (
    <div>
      {/* Cabeçalho com Título e Botão de Cadastrar */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white">Alunos</h2>
          {/* TEXTO REMOVIDO DAQUI */}
        </div>
        <button 
          onClick={() => setMostrarModal(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-5 rounded-lg flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Cadastrar Aluno
        </button>
      </div>
      
      {/* TEXTO REMOVIDO DAQUI */}
      
      {/* Grid de Alunos (Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {globalMockAlunos.map(aluno => (
          <AlunoCard 
            key={aluno.id} 
            aluno={aluno} 
            onCardClick={() => setAlunoSelecionado(aluno)} 
          />
        ))}
      </div>

      {/* Modal de Cadastro (para NOVO aluno) */}
      {mostrarModal && (
        <ModalCadastroAluno onClose={() => setMostrarModal(false)} />
      )}

      {/* NOVO MODAL: Modal de Detalhes (para aluno EXISTENTE) */}
      {alunoSelecionado && (
        <ModalDetalhesAluno 
          aluno={alunoSelecionado} 
          onClose={() => setAlunoSelecionado(null)} 
          // Lendo dos dados GLOBAIS
          registros={globalMockRegistrosDiario.filter(r => r.alunoId === alunoSelecionado.id)}
          planejamento={globalMockPlanejamento.filter(p => p.alunoId === alunoSelecionado.id)}
        />
      )}
    </div>
  );
};

// --- Componente: Card do Aluno ---
const AlunoCard = ({ aluno, onCardClick }) => { 
  
  // Helper para pegar o primeiro nome
  const getPrimeiroNome = (nome) => {
    if (!nome) return '';
    return nome.split(' ')[0];
  };

  // Lógica para gerar o nome do display (D) Nome e Nome
  const getNomeDisplay = () => {
    const pNome1 = getPrimeiroNome(aluno.nomeCompleto);
    
    if (aluno.tipoDeAula === 'Dupla') {
      const pNome2 = getPrimeiroNome(aluno.nomeColega1);
      return `(D) ${pNome1} & ${pNome2}`;
    }
    if (aluno.tipoDeAula === 'Trio') {
      const pNome2 = getPrimeiroNome(aluno.nomeColega1);
      const pNome3 = getPrimeiroNome(aluno.nomeColega2);
      return `(T) ${pNome1}, ${pNome2} & ${pNome3}`;
    }
    return pNome1; // Individual
  };

  // Lógica para o placeholder da foto (iniciais)
  const getIniciais = (nome) => {
    if (!nome) return '?';
    const partes = nome.split(' ');
    if (partes.length > 1) {
      return `${partes[0][0]}${partes[partes.length - 1][0]}`.toUpperCase();
    }
    return `${partes[0][0]}`.toUpperCase();
  };
  
  const placeholderUrl = `https://placehold.co/128x128/6366f1/ffffff?text=${getIniciais(aluno.nomeCompleto)}`;
  
  return (
    <button 
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden text-left transition-all duration-300 transform hover:-translate-y-1 hover:shadow-indigo-500/30 group"
      onClick={onCardClick} // O card inteiro é clicável
    >
      <div className="h-32 bg-gray-700 relative">
        {/* Imagem do Aluno */}
        <img 
          src={aluno.fotoUrl1 || placeholderUrl} 
          alt={`Foto de ${aluno.nomeCompleto}`}
          className="w-full h-full object-cover" 
          onError={(e) => e.target.src = placeholderUrl} // Fallback
        />
        {/* Badge de Créditos */}
        <span 
          className={`absolute top-3 right-3 text-white text-xs font-bold px-3 py-1 rounded-full ${aluno.creditos >= 4 ? 'bg-red-500' : 'bg-indigo-600'}`}
        >
          {aluno.creditos} Crédito(s)
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white truncate group-hover:text-indigo-300">
          {getNomeDisplay()}
        </h3>
        <p className="text-sm text-gray-400">{aluno.tipoDeAula}</p>
      </div>
    </button> 
  );
};


// --- Componentes Auxiliares para o Formulário ---
const FormInput = ({ label, name, className = '', ...props }) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
      <input 
        id={name}
        name={name}
        className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-2.5 text-sm focus:ring-indigo-500 focus:border-indigo-500" 
        {...props} 
      />
    </div>
  );
};

const FormSelect = ({ label, name, value, onChange, opcoes, className = '' }) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
      <select 
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-2.5 text-sm focus:ring-indigo-500 focus:border-indigo-500"
      >
        {opcoes.map(op => <option key={op} value={op}>{op}</option>)}
      </select>
    </div>
  );
};

// --- NOVO Componente: FormTextarea ---
const FormTextarea = ({ label, name, className = '', ...props }) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-1">
        {label} {props.required && <span className="text-red-500">*</span>}
      </label>
      <textarea 
        id={name}
        name={name}
        className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-2.5 text-sm focus:ring-indigo-500 focus:border-indigo-500" 
        {...props} 
      />
    </div>
  );
};

// --- NOVO Componente: FormUploadButton ---
const FormUploadButton = ({ label, name, icon, onChange }) => {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('');
    }
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="w-full">
      <label 
        htmlFor={name} 
        className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600 transition-colors"
      >
        <div className="flex items-center gap-3 text-gray-400">
          {icon}
          <span className="text-sm font-medium">{fileName || label}</span>
        </div>
        <input id={name} name={name} type="file" className="hidden" onChange={handleFileChange} />
      </label>
    </div>
  );
};


// --- Helper de Aniversário ---
const verificarAniversario = (dataString) => {
  if (!dataString) return false;
  try {
    const hoje = new Date();
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();
    
    // Corrige o fuso horário pegando a data como UTC
    const dataNiver = new Date(`${dataString}T00:00:00`);
    const mesNiver = dataNiver.getUTCMonth(); // Usar UTC para evitar problemas de fuso
    const diaNiver = dataNiver.getUTCDate();
    
    return mesAtual === mesNiver && diaAtual === diaNiver;
  } catch (e) {
    console.error("Erro ao verificar aniversário:", e);
    return false;
  }
};

// --- Componente: Modal de DETALHES do Aluno (MODIFICADO) ---
const ModalDetalhesAluno = ({ aluno, onClose, registros, planejamento }) => {
  // Estado para os créditos
  const [creditos, setCreditos] = useState(aluno.creditos);
  
  // Estados para Edição
  const [isEditing, setIsEditing] = useState(false);
  
  const [editNivelamento, setEditNivelamento] = useState({
    speaking: aluno.speaking,
    reading: aluno.reading,
    listening: aluno.listening,
    writing: aluno.writing,
    vocabulary: aluno.vocabulary,
  });
  
  const [editPlanejamento, setEditPlanejamento] = useState(planejamento);

  const [editFotoUrls, setEditFotoUrls] = useState({
    fotoUrl1: aluno.fotoUrl1,
    fotoUrl2: aluno.fotoUrl2,
    fotoUrl3: aluno.fotoUrl3,
  });
  
  const [detalheDiarioVisivel, setDetalheDiarioVisivel] = useState(null); // Guarda o registro selecionado
  
  // NOVO ESTADO: para guardar os diários durante a edição
  const [editRegistros, setEditRegistros] = useState(registros);

  // Atualiza os estados de edição se o aluno (prop) mudar
  useEffect(() => {
    setCreditos(aluno.creditos);
    setEditNivelamento({
      speaking: aluno.speaking,
      reading: aluno.reading,
      listening: aluno.listening,
      writing: aluno.writing,
      vocabulary: aluno.vocabulary,
    });
    setEditPlanejamento(planejamento);
    setEditRegistros(registros); // NOVO: Reseta os diários
    setEditFotoUrls({
      fotoUrl1: aluno.fotoUrl1,
      fotoUrl2: aluno.fotoUrl2,
      fotoUrl3: aluno.fotoUrl3,
    });
  }, [aluno, planejamento, registros]); // Adicionado 'registros'
  // --- FIM DOS NOVOS ESTADOS ---


  // Helper para pegar o primeiro nome
  const getPrimeiroNome = (nome) => {
    if (!nome) return '';
    return nome.split(' ')[0];
  };
  
  // Lógica da foto
  const getIniciais = (nome) => {
    if (!nome) return '?';
    const partes = nome.split(' ');
    if (partes.length > 1) {
      return `${partes[0][0]}${partes[partes.length - 1][0]}`.toUpperCase();
    }
    return `${partes[0][0]}`.toUpperCase();
  };
  
  // MODIFICADO: Usa a foto do estado de edição
  const getFotoAtual = (numAluno) => {
    const fotoUrl = isEditing ? editFotoUrls[`fotoUrl${numAluno}`] : aluno[`fotoUrl${numAluno}`];
    const nome = numAluno === 1 ? aluno.nomeCompleto : (numAluno === 2 ? aluno.nomeColega1 : aluno.nomeColega2);
    const placeholderUrl = `https://placehold.co/128x128/6366f1/ffffff?text=${getIniciais(nome)}`;
    return fotoUrl || placeholderUrl;
  };


  // Lógica para *Primeiros Nomes* (para o bloco da foto)
  const getPrimeirosNomesDisplay = () => {
    const pNome1 = getPrimeiroNome(aluno.nomeCompleto);
    
    if (aluno.tipoDeAula === 'Dupla') {
      const pNome2 = getPrimeiroNome(aluno.nomeColega1);
      return `${pNome1} & ${pNome2}`;
    }
    if (aluno.tipoDeAula === 'Trio') {
      const pNome2 = getPrimeiroNome(aluno.nomeColega1);
      const pNome3 = getPrimeiroNome(aluno.nomeColega2);
      return `${pNome1}, ${pNome2} & ${pNome3}`;
    }
    return pNome1; // Individual
  };

  // Lógica para o botão "Enviar Homework"
  const handleEnviarHomework = () => {
    const emails = [aluno.email1, aluno.email2, aluno.email3].filter(Boolean); // Filtra nulos/undefined
    const mailtoLink = `mailto:${emails.join(',')}`;
    window.location.href = mailtoLink;
  };

  // Lógica para adicionar/remover créditos
  const handleCreditosChange = (amount) => {
    setCreditos(prev => {
      const novoValor = prev + amount;
      if (novoValor < 0) return 0;
      if (novoValor > 4) return 4;
      return novoValor;
    });
    // No futuro, aqui chamaremos a função de update do Firebase
  };

  // Lógica para formatar a data de nascimento (ex: 20 de abril)
  const formatarData = (dataString) => {
    if (!dataString) return null;
    try {
      // Adiciona T00:00:00 para garantir que seja interpretado como data local
      const data = new Date(`${dataString}T00:00:00`);
      return data.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', timeZone: 'UTC' });
    } catch (e) {
      console.error("Erro ao formatar data:", e);
      return null;
    }
  };

  // Lógica para formatar data do diário (ex: 20/10/2025)
  const formatarDataDiario = (dataString) => {
    if (!dataString) return null;
    try {
      const data = new Date(`${dataString}T00:00:00`);
      return data.toLocaleDateString('pt-BR', { timeZone: 'UTC' }); // Formato dd/MM/yyyy
    } catch (e) {
      return null;
    }
  };

  // --- NOVAS FUNÇÕES DE EDIÇÃO ---
  
  // Salva as alterações (no futuro, enviará ao Firebase)
  const handleSalvarEdicao = () => {
    console.log("Salvando dados:", editNivelamento);
    console.log("Salvando planejamento:", editPlanejamento);
    console.log("Salvando fotos URL:", editFotoUrls); // Salva as fotos
    console.log("Salvando diários:", editRegistros); // Salva os diários
    // Aqui é onde você chamaria o Firebase
    setIsEditing(false); 
  };
  
  // Cancela a edição
  const handleCancelarEdicao = () => {
    // Reseta os dados para os valores originais do 'aluno'
    setEditNivelamento({
      speaking: aluno.speaking,
      reading: aluno.reading,
      listening: aluno.listening,
      writing: aluno.writing,
      vocabulary: aluno.vocabulary,
    });
    setEditPlanejamento(planejamento);
    setEditRegistros(registros); // NOVO: Reseta os diários
    setEditFotoUrls({ // Reseta todas as fotos
      fotoUrl1: aluno.fotoUrl1,
      fotoUrl2: aluno.fotoUrl2,
      fotoUrl3: aluno.fotoUrl3,
    });
    setIsEditing(false);
  };

  // Atualiza o estado de nivelamento
  const handleNivelamentoChange = (e) => {
    const { name, value } = e.target;
    setEditNivelamento(prev => ({ ...prev, [name]: value }));
  };
  
  // Atualiza o estado das fotos
  const handleFotoUrlChange = (e) => {
    const { name, value } = e.target;
    setEditFotoUrls(prev => ({ ...prev, [name]: value }));
  };

  // Remove uma aula do planejamento (apenas no estado de edição)
  const handleRemoverAulaPlanejada = (aulaId) => {
    setEditPlanejamento(prev => prev.filter(aula => aula.id !== aulaId));
  };

  // --- NOVA FUNÇÃO ---
  // Remove um diário (apenas no estado de edição)
  const handleApagarDiario = (registroId) => {
    setEditRegistros(prev => prev.filter(reg => reg.id !== registroId));
    // No futuro, chamaria a exclusão do Firebase
    console.log(`Simulando exclusão do diário: ${registroId}`);
  };

  // --- NOVA FUNÇÃO ---
  // Apaga o perfil (simulado)
  const handleApagarPerfil = () => {
    // !! IMPORTANTE !!
    // No futuro, isso deve abrir um *segundo modal* de confirmação.
    // NUNCA use window.confirm()
    console.warn(`Simulando exclusão do aluno: ${aluno.nomeCompleto} (ID: ${aluno.id})`);
    // Lógica de exclusão do Firebase entraria aqui...
    onClose(); // Fecha o modal principal
  };
  
  // --- NOVA LÓGICA: Encontra aniversariantes ---
  const getAniversariantes = () => {
    const aniversariantes = [];
    if (verificarAniversario(aluno.dataNascimento1)) {
      aniversariantes.push(getPrimeiroNome(aluno.nomeCompleto));
    }
    if (aluno.nomeColega1 && verificarAniversario(aluno.dataNascimento2)) {
      aniversariantes.push(getPrimeiroNome(aluno.nomeColega1));
    }
    if (aluno.nomeColega2 && verificarAniversario(aluno.dataNascimento3)) {
      aniversariantes.push(getPrimeiroNome(aluno.nomeColega2));
    }
    return aniversariantes;
  };
  
  const aniversariantesHoje = getAniversariantes();
  // --- FIM DAS NOVAS FUNÇÕES ---


  return (
    // Overlay (fundo escuro)
    <div 
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
      onClick={isEditing ? handleCancelarEdicao : onClose} // Cancela edição se clicar fora
    >
      {/* Conteúdo do Modal */}
      <div
        className="bg-gray-800 w-full max-w-4xl rounded-lg shadow-2xl p-8 overflow-y-auto max-h-[90vh]"
        onClick={e => e.stopPropagation()} // Impede que o clique no modal feche-o
      >
        {/* Cabeçalho do Modal */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <UserCheck className="w-7 h-7 text-indigo-400" />
            Detalhes do Aluno
          </h2>
          <div className="flex gap-3">
            {/* Botão de Editar / Salvar */}
            <button
              onClick={isEditing ? handleSalvarEdicao : () => setIsEditing(true)}
              className="bg-gray-700 p-2 rounded-lg text-indigo-400 hover:text-indigo-300"
            >
              {isEditing ? <Save className="w-6 h-6" /> : <Edit2 className="w-6 h-6" />}
            </button>
            
            {/* Botão de Fechar / Cancelar */}
            <button 
              onClick={isEditing ? handleCancelarEdicao : onClose} 
              className="text-gray-400 hover:text-white bg-gray-700 p-2 rounded-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* --- NOVO: Banner de Aniversário --- */}
        {aniversariantesHoje.length > 0 && !isEditing && (
          <div className="bg-yellow-200 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-lg mb-6 shadow-lg">
            {aniversariantesHoje.map(nome => (
              <p key={nome} className="font-bold text-lg text-center">
                Happy Birthday {nome}! 🥳🎉
              </p>
            ))}
          </div>
        )}
        {/* --- FIM DO BANNER --- */}


        {/* --- Grid Principal de Detalhes --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* === COLUNA DA ESQUERDA (Foto, Ações) === */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            
            {/* Bloco: Foto e Nomes (MODIFICADO: Com campo de edição) */}
            <div className="flex flex-col items-center bg-gray-900 p-6 rounded-lg">
              {/* Foto Aluno 1 */}
              <img 
                src={getFotoAtual(1)}
                alt={`Foto de ${aluno.nomeCompleto}`}
                className="w-32 h-32 rounded-full object-cover border-4 border-indigo-400 mx-auto" 
                onError={(e) => e.target.src = `https://placehold.co/128x128/6366f1/ffffff?text=${getIniciais(aluno.nomeCompleto)}`}
              />
              
              {/* Campo de edição da foto 1 */}
              {isEditing && (
                <FormInput
                  label="URL da Foto (Aluno 1)"
                  name="fotoUrl1"
                  value={editFotoUrls.fotoUrl1 || ''}
                  onChange={handleFotoUrlChange}
                  placeholder="https://link-da-foto.com/imagem.png"
                  className="w-full mt-4"
                />
              )}
              
              {/* Fotos Aluno 2 e 3 (condicional) */}
              {aluno.tipoDeAula !== 'Individual' && (
                <div className="flex justify-center gap-4 mt-4">
                  {/* Foto Aluno 2 */}
                  {aluno.nomeColega1 && (
                    <img 
                      src={getFotoAtual(2)}
                      alt={`Foto de ${aluno.nomeColega1}`}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-500" 
                      onError={(e) => e.target.src = `https://placehold.co/128x128/6366f1/ffffff?text=${getIniciais(aluno.nomeColega1)}`}
                    />
                  )}
                  {/* Foto Aluno 3 */}
                  {aluno.nomeColega2 && (
                    <img 
                      src={getFotoAtual(3)}
                      alt={`Foto de ${aluno.nomeColega2}`}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-500" 
                      onError={(e) => e.target.src = `https://placehold.co/128x128/6366f1/ffffff?text=${getIniciais(aluno.nomeColega2)}`}
                    />
                  )}
                </div>
              )}
              
              {/* Campos de edição fotos 2 e 3 */}
              {isEditing && aluno.nomeColega1 && (
                 <FormInput
                  label={`URL da Foto (${getPrimeiroNome(aluno.nomeColega1)})`}
                  name="fotoUrl2"
                  value={editFotoUrls.fotoUrl2 || ''}
                  onChange={handleFotoUrlChange}
                  placeholder="https://link-da-foto.com/imagem.png"
                  className="w-full mt-4"
                />
              )}
              {isEditing && aluno.nomeColega2 && (
                <>
                  <FormInput
                    label={`URL da Foto (${getPrimeiroNome(aluno.nomeColega2)})`}
                    name="fotoUrl3"
                    value={editFotoUrls.fotoUrl3 || ''}
                    onChange={handleFotoUrlChange}
                    placeholder="https://link-da-foto.com/imagem.png"
                    className="w-full mt-4"
                  />
                </>
              )}
              
              <h3 className="text-xl font-semibold mt-4 text-center">
                {getPrimeirosNomesDisplay()}
              </h3>
              <p className="text-sm text-gray-400">{aluno.tipoDeAula}</p>
            </div>

            {/* Bloco: Ações (Homework e Créditos) (MODIFICADO) */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-indigo-400 mb-4">Ações</h4>
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleEnviarHomework}
                  disabled={isEditing}
                  className="flex items-center justify-center gap-2 w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg disabled:opacity-50"
                >
                  <Mail className="w-5 h-5" />
                  Enviar Homework
                </button>
                {aluno.linkContrato && (
                  <a
                    href={aluno.linkContrato}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg ${isEditing ? 'opacity-50 pointer-events-none' : ''}`}
                  >
                    <FileText className="w-5 h-5" />
                    Ver Contrato
                  </a>
                )}
                
                {/* --- NOVO: Botão Apagar Perfil --- */}
                {isEditing && (
                  <button
                    onClick={handleApagarPerfil}
                    className="flex items-center justify-center gap-2 w-full bg-red-800 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg mt-2"
                  >
                    <Trash2 className="w-5 h-5" />
                    Apagar Perfil
                  </button>
                )}
              </div>
              
              {/* Controles de Crédito */}
              <label className="text-sm font-medium text-gray-400 mt-6 mb-2 block text-center">Créditos (Máx: 4)</label>
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => handleCreditosChange(-1)}
                  disabled={isEditing || creditos === 0}
                  className="bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600 disabled:opacity-50"
                >
                  <MinusCircle className="w-6 h-6" />
                </button>
                <span className={`text-2xl font-bold w-10 text-center ${creditos >= 4 ? 'text-red-500' : 'text-white'}`}>
                  {creditos}
                </span>
                <button
                  onClick={() => handleCreditosChange(1)}
                  disabled={isEditing || creditos === 4}
                  className="bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600 disabled:opacity-50"
                >
                  <PlusCircle className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
          
          {/* === COLUNA DA DIREITA (Infos, Nivelamento, Planejamento, Diário) === */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Bloco: Nivelamento (MODIFICADO: Agora editável) */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-indigo-400 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Nivelamento Geral
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {isEditing ? (
                  <>
                    <FormInput label="Speaking" name="speaking" value={editNivelamento.speaking} onChange={handleNivelamentoChange} />
                    <FormInput label="Reading" name="reading" value={editNivelamento.reading} onChange={handleNivelamentoChange} />
                    <FormInput label="Listening" name="listening" value={editNivelamento.listening} onChange={handleNivelamentoChange} />
                    <FormInput label="Writing" name="writing" value={editNivelamento.writing} onChange={handleNivelamentoChange} />
                    <FormInput label="Vocabulary" name="vocabulary" value={editNivelamento.vocabulary} onChange={handleNivelamentoChange} />
                  </>
                ) : (
                  <>
                    <DetalheItem label="Speaking" value={aluno.speaking || 'N/A'} />
                    <DetalheItem label="Reading" value={aluno.reading || 'N/A'} />
                    <DetalheItem label="Listening" value={aluno.listening || 'N/A'} />
                    <DetalheItem label="Writing" value={aluno.writing || 'N/A'} />
                    <DetalheItem label="Vocabulary" value={aluno.vocabulary || 'N/A'} />
                  </>
                )}
              </div>
            </div>

            {/* Bloco: Informações Pessoais (MODIFICADO) */}
            <div className={`bg-gray-900 p-6 rounded-lg ${isEditing ? 'opacity-60' : ''}`}>
              <h4 className="text-lg font-semibold text-indigo-400 mb-4">Informações Pessoais</h4>
              
              {/* Aluno 1 */}
              <div className="mb-4">
                <h5 className="text-md font-semibold text-white mb-2 pb-1 border-b border-gray-700">
                  {aluno.nomeCompleto} (Aluno 1)
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <DetalheItem label="Email" value={aluno.email1} />
                  <DetalheItem label="Telefone" value={aluno.telefone1 || 'N/A'} />
                  <DetalheItem 
                    label="Aniversário" 
                    value={aluno.dataNascimento1 ? formatarData(aluno.dataNascimento1) : `Falta aniversário de ${getPrimeiroNome(aluno.nomeCompleto)}`} 
                  />
                </div>
              </div>

              {/* Aluno 2 (Condicional) */}
              {aluno.nomeColega1 && (
                <div className="mb-4 pt-4 border-t border-gray-700">
                  <h5 className="text-md font-semibold text-white mb-2 pb-1 border-b border-gray-700">
                    {aluno.nomeColega1} (Aluno 2)
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <DetalheItem label="Email" value={aluno.email2 || 'N/A'} />
                    <DetalheItem label="Telefone" value={aluno.telefone2 || 'N/A'} />
                    <DetalheItem 
                      label="Aniversário" 
                      value={aluno.dataNascimento2 ? formatarData(aluno.dataNascimento2) : `Falta aniversário de ${getPrimeiroNome(aluno.nomeColega1)}`} 
                    />
                  </div>
                </div>
              )}

              {/* Aluno 3 (Condicional) */}
              {aluno.nomeColega2 && (
                <div className="pt-4 border-t border-gray-700">
                  <h5 className="text-md font-semibold text-white mb-2 pb-1 border-b border-gray-700">
                    {aluno.nomeColega2} (Aluno 3)
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <DetalheItem label="Email" value={aluno.email3 || 'N/A'} />
                    <DetalheItem label="Telefone" value={aluno.telefone3 || 'N/A'} />
                    <DetalheItem 
                      label="Aniversário" 
                      value={aluno.dataNascimento3 ? formatarData(aluno.dataNascimento3) : `Falta aniversário de ${getPrimeiroNome(aluno.nomeColega2)}`} 
                    />
                  </div>
                </div>
              )}
            </div>
            
            {/* Bloco: Planejamento de Aulas (MODIFICADO) */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold text-indigo-400 flex items-center gap-2">
                  <ListTodo className="w-5 h-5" />
                  Planejamento de Aulas
                </h4>
                <button className="flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 disabled:opacity-50" disabled={isEditing}>
                  <Plus className="w-4 h-4" />
                  Adicionar Aula
                </button>
              </div>
              <div className="flex flex-col gap-3 max-h-48 overflow-y-auto pr-2">
                {editPlanejamento && editPlanejamento.length > 0 ? (
                  editPlanejamento.map(aula => (
                    <div key={aula.id} className="flex items-center justify-between gap-2 bg-gray-700 p-3 rounded-md">
                      <a 
                        href={aula.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-white hover:text-indigo-300 transition-colors flex-1 truncate"
                      >
                        <Archive className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span className="truncate">{aula.tituloAula}</span>
                      </a>
                      {isEditing && (
                        <button 
                          onClick={() => handleRemoverAulaPlanejada(aula.id)}
                          className="p-1 text-red-500 hover:text-red-400 hover:bg-gray-600 rounded-full flex-shrink-0"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400">{isEditing ? 'Adicione aulas pela Biblioteca.' : 'Nenhuma aula planejada.'}</p>
                )}
              </div>
            </div>

            {/* Bloco: Histórico de Diários (MODIFICADO: Destaque de Falta) */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold text-indigo-400 flex items-center gap-2">
                  <ClipboardList className="w-5 h-5" />
                  Histórico de Diários
                </h4>
                <button className="flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 disabled:opacity-50" disabled={isEditing}>
                  <Plus className="w-4 h-4" />
                  Adicionar Diário
                </button>
              </div>
              <div className="flex flex-col gap-4 max-h-48 overflow-y-auto pr-2">
                {/* Lendo do NOVO estado 'editRegistros' */}
                {editRegistros && editRegistros.length > 0 ? (
                  editRegistros.map(reg => (
                    <div key={reg.id} className="flex items-center justify-between gap-2 pb-2 border-b border-gray-700 last:border-b-0">
                      {/* Botão de Detalhes (agora envolve o conteúdo) */}
                      <button 
                        onClick={() => setDetalheDiarioVisivel(reg)}
                        disabled={isEditing}
                        className="flex-1 text-left w-full disabled:opacity-60"
                      >
                        <div className="flex justify-between items-center mb-1">
                          {/* --- MODIFICAÇÃO APLICADA AQUI --- */}
                          <span className={`font-semibold ${reg.status === 'Falta' ? 'text-red-400' : 'text-white'}`}>
                            {formatarDataDiario(reg.dataAula)}
                          </span>
                          <StatusBadge status={reg.status} />
                        </div>
                        <p className="text-sm text-gray-300 truncate">{reg.observacoes}</p>
                      </button>
                      
                      {/* NOVO: Botão de Apagar Diário */}
                      {isEditing && (
                        <button 
                          onClick={() => handleApagarDiario(reg.id)}
                          className="p-1 text-red-500 hover:text-red-400 hover:bg-gray-600 rounded-full flex-shrink-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400">Nenhum registro no diário.</p>
                )}
              </div>
            </div>
            
          </div>
        </div>

      </div>
      
      {/* Modal de Detalhe do Diário */}
      {detalheDiarioVisivel && (
        <ModalDetalhesDiario
          registro={detalheDiarioVisivel}
          onClose={() => setDetalheDiarioVisivel(null)}
          formatarData={formatarDataDiario}
        />
      )}
    </div>
  );
};

// --- NOVO COMPONENTE: Modal de Detalhes do Diário ---
const ModalDetalhesDiario = ({ registro, onClose, formatarData }) => {
  return (
    // Overlay (fundo escuro, com z-index maior para ficar sobre o outro modal)
    <div 
      className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4"
      onClick={onClose} 
    >
      {/* Conteúdo do Modal */}
      <div
        className="bg-gray-800 w-full max-w-lg rounded-lg shadow-2xl p-8"
        onClick={e => e.stopPropagation()} 
      >
        {/* Cabeçalho */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <BookMarked className="w-7 h-7 text-indigo-400" />
            Detalhe do Diário
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Conteúdo */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <DetalheItem label="Data" value={formatarData(registro.dataAula)} />
            <StatusBadge status={registro.status} />
          </div>
          {/* Adicionando 'whitespace-pre-wrap' para respeitar quebras de linha */}
          <DetalheItem label="Observações" value={registro.observacoes} className="whitespace-pre-wrap" /> 
        </div>

        {/* Botões de Ação (futuros) */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            type="button"
            onClick={onClose}
            className="bg-indigo-600 text-white font-medium py-2 px-5 rounded-lg hover:bg-indigo-700"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};


// --- Componente Auxiliar: Badge de Status ---
const StatusBadge = ({ status }) => {
  const isPresente = status === 'Presente';
  const bgColor = isPresente ? 'bg-green-600' : 'bg-red-600';
  const textColor = 'text-white';
  
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor}`}>
      {status}
    </span>
  );
};

// --- Componente Auxiliar: Item de Detalhe ---
const DetalheItem = ({ label, value, className = '' }) => {
  return (
    <div className={className}>
      <p className="text-sm font-medium text-gray-400">{label}</p>
      <p className="text-md font-semibold text-white">{value}</p>
    </div>
  );
};


// --- Componente: Modal de Cadastro de Aluno ---
const ModalCadastroAluno = ({ onClose }) => {
  const [tipoDeAula, setTipoDeAula] = useState('Individual');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envio do formulário (no futuro, para o Firebase)
    console.log("Formulário enviado");
    onClose(); // Fecha o modal após enviar
  };

  return (
    // Overlay (fundo escuro)
    <div 
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
      onClick={onClose} // Fecha o modal ao clicar no fundo
    >
      {/* Conteúdo do Modal */}
      <div
        className="bg-gray-800 w-full max-w-3xl rounded-lg shadow-2xl p-8 overflow-y-auto max-h-[90vh]"
        onClick={e => e.stopPropagation()} // Impede que o clique no modal feche-o
      >
        {/* Cabeçalho do Modal */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <Users className="w-7 h-7 text-indigo-400" />
            Cadastrar Novo Aluno
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Formulário de Cadastro */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Seletor de Tipo de Aula */}
          <FormSelect 
            label="Tipo de Aula"
            name="tipoDeAula"
            value={tipoDeAula}
            onChange={(e) => setTipoDeAula(e.target.value)}
            opcoes={['Individual', 'Dupla', 'Trio']}
          />

          {/* Dados do Aluno 1 (Principal) */}
          <fieldset className="p-4 border border-gray-700 rounded-lg">
            <legend className="px-2 font-medium text-indigo-400">Aluno 1 (Principal)</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput label="Nome Completo" name="nomeCompleto1" type="text" placeholder="Nome do Aluno 1" required />
              <FormInput label="Email" name="email1" type="email" placeholder="email@aluno1.com" required />
              <FormInput label="Foto (URL)" name="fotoUrl1" type="text" placeholder="https://link-da-foto.com/imagem.png" />
              <FormInput label="Créditos Iniciais" name="creditos" type="number" defaultValue={0} />
              <FormInput label="Telefone" name="telefone1" type="tel" placeholder="(11) 98765-4321" />
              <FormInput label="Link do Contrato" name="linkContrato" type="text" placeholder="https://link-do-contrato..." />
              <FormInput label="Data de Nascimento" name="dataNascimento1" type="date" />
            </div>
          </fieldset>
          
          {/* Nivelamento Inicial */}
          <fieldset className="p-4 border border-gray-700 rounded-lg">
            <legend className="px-2 font-medium text-indigo-400">Nivelamento Inicial</legend>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <FormInput label="Speaking" name="speaking" type="text" placeholder="A2-B1" />
              <FormInput label="Reading" name="reading" type="text" placeholder="A2-B1" />
              <FormInput label="Listening" name="listening" type="text" placeholder="A2-B1" />
              <FormInput label="Writing" name="writing" type="text" placeholder="A2" />
              <FormInput label="Vocabulary" name="vocabulary" type="text" placeholder="B1" />
            </div>
          </fieldset>

          {/* Dados do Colega 1 (para Dupla ou Trio) */}
          {(tipoDeAula === 'Dupla' || tipoDeAula === 'Trio') && (
            <fieldset className="p-4 border border-gray-700 rounded-lg">
              <legend className="px-2 font-medium text-indigo-400">Aluno 2</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput label="Nome Completo (Aluno 2)" name="nomeCompleto2" type="text" placeholder="Nome do Aluno 2" />
                <FormInput label="Email (Aluno 2)" name="email2" type="email" placeholder="email@aluno2.com" />
                <FormInput label="Telefone (Aluno 2)" name="telefone2" type="tel" placeholder="(11) 91234-5678" />
                <FormInput label="Foto (URL) (Aluno 2)" name="fotoUrl2" type="text" placeholder="https://link-da-foto.com/imagem.png" />
                <FormInput label="Data de Nascimento (Aluno 2)" name="dataNascimento2" type="date" />
              </div>
            </fieldset>
          )}
          
          {/* Dados do Colega 2 (apenas para Trio) */}
          {tipoDeAula === 'Trio' && (
            <fieldset className="p-4 border border-gray-700 rounded-lg">
              <legend className="px-2 font-medium text-indigo-400">Aluno 3</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput label="Nome Completo (Aluno 3)" name="nomeCompleto3" type="text" placeholder="Nome do Aluno 3" />
                <FormInput label="Email (Aluno 3)" name="email3" type="email" placeholder="email@aluno3.com" />
                <FormInput label="Telefone (Aluno 3)" name="telefone3" type="tel" placeholder="(11) 95555-4321" />
                <FormInput label="Foto (URL) (Aluno 3)" name="fotoUrl3" type="text" placeholder="https://link-da-foto.com/imagem.png" />
                <FormInput label="Data de Nascimento (Aluno 3)" name="dataNascimento3" type="date" />
              </div>
            </fieldset>
          )}

          {/* Botões de Ação */}
          <div className="flex justify-end gap-4 mt-8">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-600 text-white font-medium py-2 px-5 rounded-lg hover:bg-gray-700"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-indigo-600 text-white font-medium py-2 px-5 rounded-lg hover:bg-indigo-700"
            >
              Cadastrar Aluno
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};