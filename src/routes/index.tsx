import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Instagram, Menu, MessageCircle, Sparkles, X } from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const WHATSAPP = "https://wa.me/5511979940067?text=Ol%C3%A1%20Camila%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20psicol%C3%B3gico.";
const INSTAGRAM = "https://www.instagram.com/psicologiacamilanunesmagalhaes/";

const faqs = [
  ["Como funciona o primeiro contato?", "Você pode me chamar pelo WhatsApp. Conversamos brevemente sobre o que você busca, tiro suas dúvidas e explico os próximos passos do atendimento."],
  ["O atendimento é online?", "Sim. O atendimento psicológico é realizado online, permitindo que você tenha um espaço de cuidado com praticidade e privacidade, de onde estiver."],
  ["Preciso saber exatamente o que estou sentindo?", "Não. Você não precisa chegar com tudo organizado. A terapia também pode ajudar a nomear, compreender e organizar aquilo que hoje parece difícil de explicar."],
  ["Como faço para agendar?", "É só clicar em qualquer botão de contato do site e falar comigo pelo WhatsApp. Vou orientar você sobre disponibilidade e próximos passos."],
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const closeMenu = () => setMenuOpen(false);
  const Logo = () => <img className="brand-logo" src="/favicon.ico" alt="" aria-hidden="true" />;

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Camila Nunes Psicóloga — início">
            <Logo />
            <span><strong>Camila Nunes</strong><small>Psicóloga</small></span>
          </a>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
            <a href="#inicio" onClick={closeMenu}>Início</a>
            <a href="#sobre" onClick={closeMenu}>Sobre mim</a>
            <a href="#atendimento" onClick={closeMenu}>Atendimento</a>
            <a href="#processo" onClick={closeMenu}>Como funciona</a>
            <a href="#faq" onClick={closeMenu}>Dúvidas</a>
            <a className="nav-cta" href={WHATSAPP} target="_blank" rel="noreferrer" onClick={closeMenu}>Agendar conversa</a>
          </nav>
          <button className="menu-button" type="button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-orb orb-one" aria-hidden="true" /><div className="hero-orb orb-two" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><Sparkles size={14} /> Psicologia com acolhimento e presença</p>
              <h1>Um espaço para <em>olhar para você</em> com mais gentileza.</h1>
              <p className="hero-text">A terapia pode ser um lugar de pausa, escuta e compreensão. Um espaço para você se ouvir, entender o que sente e construir caminhos possíveis.</p>
              <div className="hero-actions">
                <a className="button button-primary" href={WHATSAPP} target="_blank" rel="noreferrer">Quero conversar <ArrowRight size={17} /></a>
                <a className="text-link" href="#sobre">Conheça meu trabalho <span>↓</span></a>
              </div>
              <div className="hero-meta"><span className="meta-line" /><span>Atendimento psicológico individual</span><span className="meta-dot" /><span>Online</span></div>
            </div>
            <div className="hero-visual">
              <div className="photo-backdrop" aria-hidden="true" />
              <div className="photo-frame"><img src="/camila-nunes.png" alt="Camila Nunes, psicóloga" /></div>
              <div className="photo-caption"><span className="caption-kicker">CAMILA NUNES</span><strong>Psicóloga</strong><span>Escuta, presença e cuidado.</span></div>
            </div>
          </div>
          <div className="hero-bottom"><div className="container hero-bottom-inner"><span>Um processo construído no seu ritmo</span><span className="hero-bottom-rule" /><span>Com respeito à sua história</span></div></div>
        </section>

        <section className="intro section" id="sobre">
          <div className="container intro-grid">
            <div className="section-index"><span>01</span><small>Sobre mim</small></div>
            <div className="intro-copy">
              <p className="eyebrow">Prazer, eu sou a Camila</p>
              <h2>Você não precisa ter todas as respostas para começar.</h2>
              <div className="intro-columns">
                <p>Sou psicóloga e acredito na terapia como um encontro de cuidado, escuta e autoconhecimento. Um lugar onde você pode desacelerar e olhar para o que está vivendo com mais clareza.</p>
                <p>Meu trabalho respeita a singularidade de cada pessoa. Não existe uma fórmula pronta para uma história humana: o processo é construído com presença, ética e acolhimento.</p>
              </div>
              <div className="signature"><span>Camila Nunes</span><small>Psicóloga</small></div>
            </div>
          </div>
        </section>

        <section className="values">
          <div className="container values-grid">
            <div><span>01</span><strong>Escuta</strong><p>Um espaço para falar sem precisar se encaixar.</p></div>
            <div><span>02</span><strong>Presença</strong><p>Um acompanhamento atento ao que você vive hoje.</p></div>
            <div><span>03</span><strong>Singularidade</strong><p>Seu processo respeita seu tempo e sua história.</p></div>
          </div>
        </section>

        <section className="services section" id="atendimento">
          <div className="container">
            <div className="section-heading"><p className="eyebrow">Atendimento</p><h2>Um cuidado que começa por você.</h2><p>Informações claras para você entender como posso acompanhar o seu momento.</p></div>
            <div className="service-layout">
              <article className="service-main"><span className="service-number">01</span><div><p className="service-kicker">PSICOTERAPIA</p><h3>Psicoterapia individual</h3><p>Um espaço de escuta e reflexão para compreender emoções, padrões, relações, escolhas e aquilo que pede atenção na sua vida.</p><a className="inline-link" href={WHATSAPP} target="_blank" rel="noreferrer">Quero saber mais <ArrowRight size={16} /></a></div></article>
              <div className="service-side">
                <article className="service-small"><span>02</span><div><h3>Atendimento online</h3><p>Cuidado psicológico com a praticidade de estar onde você estiver.</p><a href={WHATSAPP} target="_blank" rel="noreferrer">Falar comigo <ArrowRight size={15} /></a></div></article>
                <article className="service-small"><span>03</span><div><h3>Autoconhecimento</h3><p>Um processo para ampliar a percepção sobre sentimentos, necessidades e escolhas.</p><a href={WHATSAPP} target="_blank" rel="noreferrer">Começar conversa <ArrowRight size={15} /></a></div></article>
              </div>
            </div>
          </div>
        </section>

        <section className="process section" id="processo">
          <div className="container process-grid">
            <div className="process-copy"><p className="eyebrow">02 — Como funciona</p><h2>Começar pode ser mais simples do que parece.</h2><p>O primeiro passo não exige que você saiba exatamente o que fazer. Você só precisa sentir que gostaria de conversar.</p><a className="button button-dark" href={WHATSAPP} target="_blank" rel="noreferrer">Agendar uma conversa <ArrowRight size={17} /></a></div>
            <div className="steps">
              <div className="step"><span>01</span><div><h3>Você entra em contato</h3><p>Fale comigo pelo WhatsApp e conte, do seu jeito, o que está buscando.</p></div></div>
              <div className="step"><span>02</span><div><h3>Conhecemos o processo</h3><p>Conversamos sobre o atendimento, formato e disponibilidade para encontrar o melhor caminho.</p></div></div>
              <div className="step"><span>03</span><div><h3>Construímos o acompanhamento</h3><p>As sessões se tornam um espaço contínuo de escuta, reflexão e cuidado.</p></div></div>
            </div>
          </div>
        </section>

        <section className="statement"><div className="container statement-inner"><span className="statement-line" /><p>“Cuidar de si também é aprender a se escutar.”</p><span className="statement-line" /></div></section>

        <section className="faq section" id="faq">
          <div className="container faq-grid">
            <div className="faq-copy"><p className="eyebrow">Perguntas frequentes</p><h2>Antes de começar, é natural ter dúvidas.</h2><p>Se a sua pergunta não estiver aqui, fale comigo. Posso explicar como funciona o atendimento e os próximos passos.</p><a className="text-link" href={WHATSAPP} target="_blank" rel="noreferrer">Falar pelo WhatsApp <ArrowRight size={16} /></a></div>
            <div className="faq-list">{faqs.map(([question, answer], index) => <div className="faq-item" key={question}><button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown className={openFaq === index ? "faq-chevron open" : "faq-chevron"} size={19} /></button>{openFaq === index && <div className="faq-answer"><p>{answer}</p></div>}</div>)}</div>
          </div>
        </section>

        <section className="contact-cta"><div className="container contact-cta-inner"><div><p className="eyebrow">Seu próximo passo</p><h2>Talvez este seja o momento de começar.</h2><p>Quando sentir que faz sentido, estou à disposição para uma primeira conversa.</p></div><div className="cta-actions"><a className="button button-light" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Falar com a Camila</a><a className="social-link" href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={17} /> Instagram</a></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-grid"><div><a className="brand footer-brand" href="#inicio"><Logo /><span><strong>Camila Nunes</strong><small>Psicóloga</small></span></a><p>Psicologia com acolhimento, presença e respeito à sua história.</p></div><div className="footer-column"><span>Menu</span><a href="#sobre">Sobre mim</a><a href="#atendimento">Atendimento</a><a href="#processo">Como funciona</a><a href="#faq">Dúvidas</a></div><div className="footer-column"><span>Contato</span><a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={15} /> +55 11 97994-0067</a><a href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Camila Nunes Psicóloga</span><span>Todos os direitos reservados.</span></div></footer>
      <a className="whatsapp-float" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar com Camila pelo WhatsApp"><MessageCircle size={22} /></a>
    </div>
  );
}
