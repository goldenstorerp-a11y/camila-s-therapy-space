import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronDown, Instagram, Menu, MessageCircle, Sparkles, X } from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const WHATSAPP = "https://wa.me/5511979940067?text=Ol%C3%A1%20Camila%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20psicol%C3%B3gico.";
const INSTAGRAM = "https://www.instagram.com/psicologiacamilanunesmagalhaes/";

const faqs = [
  ["Como funciona a primeira conversa?", "É um momento inicial para você conhecer meu jeito de trabalhar, contar brevemente o que está vivendo e entender se o processo terapêutico faz sentido para você."],
  ["O atendimento é online?", "Sim. O atendimento pode ser realizado de forma online, com privacidade e acolhimento, para que você possa cuidar de si de onde estiver."],
  ["Preciso saber exatamente o que estou sentindo?", "Não. Você não precisa chegar com tudo organizado ou saber explicar perfeitamente o que acontece. A terapia também é um espaço para construir essa compreensão aos poucos."],
  ["Como agendo um horário?", "É só clicar em um dos botões de contato do site e falar comigo pelo WhatsApp. Vou orientar você sobre os próximos passos e a disponibilidade de horários."],
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Camila Nunes Psicóloga - início">
          <span className="brand-mark">ψ</span>
          <span><strong>Camila Nunes</strong><small>Psicóloga</small></span>
        </a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
          <a href="#inicio" onClick={closeMenu}>Início</a>
          <a href="#sobre" onClick={closeMenu}>Sobre mim</a>
          <a href="#atendimento" onClick={closeMenu}>Atendimento</a>
          <a href="#processo" onClick={closeMenu}>Como funciona</a>
          <a href="#faq" onClick={closeMenu}>Dúvidas</a>
          <a className="nav-cta" href={WHATSAPP} target="_blank" rel="noreferrer" onClick={closeMenu}>Agendar conversa</a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen((v) => !v)} aria-label="Abrir menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><Sparkles size={15} /> Psicologia com acolhimento e presença</p>
              <h1>Um espaço seguro para <em>olhar para você</em> com mais gentileza.</h1>
              <p className="hero-text">A terapia pode ser o começo de uma relação mais consciente com seus sentimentos, escolhas e com a própria história.</p>
              <div className="hero-actions">
                <a className="button button-primary" href={WHATSAPP} target="_blank" rel="noreferrer">Quero conversar <ArrowRight size={18} /></a>
                <a className="text-link" href="#sobre">Conheça meu trabalho <span>↓</span></a>
              </div>
              <div className="hero-note"><span className="note-dot" /> Atendimento psicológico individual • Online</div>
            </div>
            <div className="hero-visual">
              <div className="photo-frame"><img src="/camila-nunes.png" alt="Camila Nunes, psicóloga" /></div>
              <div className="floating-card"><span className="quote-mark">“</span><p>Você não precisa atravessar tudo sozinha.</p><small>Camila Nunes</small></div>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-grid">
            <div><strong>Escuta sem julgamentos</strong><span>Um espaço para você ser quem é.</span></div>
            <div><strong>Ritmo respeitado</strong><span>Cada processo tem seu próprio tempo.</span></div>
            <div><strong>Cuidado individualizado</strong><span>Seu momento é o ponto de partida.</span></div>
          </div>
        </section>

        <section className="about section" id="sobre">
          <div className="container about-grid">
            <div className="section-label"><span>01</span> Sobre mim</div>
            <div className="about-content">
              <p className="eyebrow">Prazer, eu sou a Camila</p>
              <h2>Mais do que encontrar respostas, <em>vamos construir novas perguntas.</em></h2>
              <p>Sou psicóloga e acredito na terapia como um encontro de cuidado, escuta e autoconhecimento. Um lugar em que você pode desacelerar, compreender o que sente e encontrar caminhos possíveis para a vida real.</p>
              <p>Meu trabalho parte do respeito à sua singularidade. Não existe uma fórmula pronta para uma história humana — por isso, cada acompanhamento é construído com presença, ética e acolhimento.</p>
              <div className="signature">Camila Nunes <small>Psicóloga</small></div>
            </div>
          </div>
        </section>

        <section className="services section" id="atendimento">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow">Um cuidado pensado para você</p>
              <h2>Como posso te acompanhar</h2>
              <p>O processo terapêutico é construído a partir daquilo que você vive hoje e do que deseja transformar.</p>
            </div>
            <div className="service-grid">
              <article className="service-card featured"><span className="card-number">01</span><h3>Psicoterapia individual</h3><p>Um espaço de escuta e reflexão para compreender emoções, padrões, relações e escolhas com mais clareza.</p><a href={WHATSAPP} target="_blank" rel="noreferrer">Conhecer o atendimento <ArrowRight size={17} /></a></article>
              <article className="service-card"><span className="card-number">02</span><h3>Atendimento online</h3><p>Uma experiência acolhedora e reservada, com a praticidade de cuidar da sua saúde emocional de onde estiver.</p><a href={WHATSAPP} target="_blank" rel="noreferrer">Falar comigo <ArrowRight size={17} /></a></article>
              <article className="service-card"><span className="card-number">03</span><h3>Autoconhecimento</h3><p>Um processo para reconhecer necessidades, limites, sentimentos e possibilidades com mais consciência.</p><a href={WHATSAPP} target="_blank" rel="noreferrer">Começar conversa <ArrowRight size={17} /></a></article>
            </div>
          </div>
        </section>

        <section className="process section" id="processo">
          <div className="container process-grid">
            <div className="process-intro"><p className="eyebrow">03 — Como funciona</p><h2>Você não precisa ter tudo resolvido para começar.</h2><p>Dar o primeiro passo pode ser simples. A partir do contato inicial, vamos entender juntos se este é o momento e o formato de acompanhamento que faz sentido para você.</p><a className="button button-dark" href={WHATSAPP} target="_blank" rel="noreferrer">Agendar uma conversa <ArrowRight size={18} /></a></div>
            <div className="steps">
              <div className="step"><span>01</span><div><h3>Primeiro contato</h3><p>Você me chama pelo WhatsApp e conversamos sobre sua necessidade e disponibilidade.</p></div></div>
              <div className="step"><span>02</span><div><h3>Conhecemos o processo</h3><p>Na primeira conversa, você conhece meu trabalho e podemos alinhar como será o acompanhamento.</p></div></div>
              <div className="step"><span>03</span><div><h3>Construímos o caminho</h3><p>As sessões se tornam um espaço contínuo de escuta, elaboração e cuidado.</p></div></div>
            </div>
          </div>
        </section>

        <section className="manifesto">
          <div className="container manifesto-inner"><span className="manifesto-line" /><p>“Cuidar da mente também é aprender a se escutar.”</p><span className="manifesto-line" /></div>
        </section>

        <section className="faq section" id="faq">
          <div className="container faq-grid">
            <div><p className="eyebrow">Perguntas frequentes</p><h2>Talvez sua dúvida já esteja aqui.</h2><p className="faq-intro">E se não estiver, fique à vontade para me chamar. Será um prazer conversar com você.</p><a className="text-link" href={WHATSAPP} target="_blank" rel="noreferrer">Tirar uma dúvida pelo WhatsApp <ArrowRight size={17} /></a></div>
            <div className="faq-list">
              {faqs.map(([question, answer], index) => (
                <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={question}>
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span><ChevronDown size={20} /></button>
                  <div className="faq-answer"><p>{answer}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta-inner"><div><p className="eyebrow">Seu primeiro passo pode ser hoje</p><h2>Vamos conversar?</h2><p>Se você sente que é hora de olhar com mais cuidado para o que está vivendo, estou aqui para te ouvir.</p></div><a className="button button-light" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Falar com a Camila</a></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div><a className="brand footer-brand" href="#inicio"><span className="brand-mark">ψ</span><span><strong>Camila Nunes</strong><small>Psicóloga</small></span></a><p>Um espaço de acolhimento, escuta e cuidado.</p></div>
          <div className="footer-links"><a href="#sobre">Sobre mim</a><a href="#atendimento">Atendimento</a><a href="#processo">Como funciona</a><a href="#faq">Dúvidas</a></div>
          <div className="footer-contact"><a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={17} /> +55 11 97994-0067</a><a href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={17} /> Instagram</a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Camila Nunes Psicóloga. Todos os direitos reservados.</span><span className="footer-legal"><Check size={14} /> Atendimento com privacidade e respeito</span></div>
      </footer>
    </div>
  );
}
