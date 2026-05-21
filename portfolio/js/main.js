// ─── TRANSLATIONS ───────────────────────────────────────────────────────────
const translations = {
  pt: {
    nav_inicio:'Início', nav_galeria:'Galeria', nav_projectos:'Projectos',
    nav_sobre:'Sobre Mim', nav_chat:'Chat', nav_curriculo:'Currículo',
    hero_tag:'Engenheiro Informático · Sebastião da Cruz Miranda',
    hero_name:'Sebastião Miranda',
    hero_subtitle:'Engenheiro de Informático & Analista de Software e Analista de Dados, Programador. Transformando visões em experiências digitais excepcionais.',
    hero_cta1:'Ver Projectos', hero_cta2:'Contactar',
    gal_label:'Galeria', gal_title:'Trabalhos em Destaque',
    gal_desc:'Uma curadoria dos meus trabalhos mais significativos, reflectindo a essência criativa e técnica de cada projecto.',
    gal_1:'Interface Digital · 2024', gal_2:'Marca Corporativa · 2024',
    gal_3:'App Mobile · 2023', gal_4:'Plataforma Web · 2023',
    gal_5:'Dashboard Analytics · 2024', gal_6:'E-Commerce · 2023',
    proj_label:'Projectos', proj_title:'Casos de Sucesso', proj_all:'Ver todos →',
    proj1_tag:'Fintech · Angola', proj1_name:'Plataforma Bancária Digital',
    proj1_desc:'Sistema completo de banca digital para o mercado angolano, com integração de pagamentos em Kwanza e multicanalidade.',
    proj2_tag:'E-Gov · Luanda', proj2_name:'Portal de Serviços Públicos',
    proj2_desc:'Portal integrado para acesso a serviços governamentais, com validação de BI e autenticação segura dos cidadãos angolanos.',
    proj3_tag:'Saúde · Nacional', proj3_name:'Sistema de Gestão Clínica',
    proj3_desc:'Plataforma de gestão clínica para hospitais e clínicas em Angola, com ficha do paciente e agendamento online.',
    about_label:'Sobre Mim', about_title:'Olá, Sou Sebastião',
    about_p1:'Sou um profissional motivado e apaixonado por tecnologia e análise de dados, sempre em busca de aprimoramento contínuo e inovação. Com uma sólida formação em Engenharia Informática, possuo habilidades técnicas avançadas que me permitem transformar dados em decisões estratégicas.',
    about_p2:'Com mais de 6 anos de experiência como Analista de Sistema & Programador, especializei-me em Laravel, Angular, PHP, Python e C#, colaborando com empresas públicas e privadas em Angola. A minha missão é democratizar o acesso à tecnologia em Angola.',
    about_cta:'Trabalhar Juntos',
    stat1:'Anos Exp.', stat2:'Projectos', stat3:'Clientes', stat4:'Prémios',
    narr_title:'Ouvir a minha história', narr_sub:'Narração automática disponível',
    cv_label:'Currículo', cv_title:'Experiência Profissional',
    chat_label:'Conversa', chat_title:'Fale Comigo',
    chat_name:'Sebastião Miranda', chat_status:'● Online agora',
    chat_placeholder:'Escreva uma mensagem...',
    chat_welcome:'Olá! 👋 Bem-vindo ao meu portfólio. Sou Sebastião Miranda, Engenheiro Informático. Como posso ajudá-lo hoje?',
    form_section_label:'Contacto', form_section_title:'Entre em Contacto',
    form_info_title:'Vamos Trabalhar Juntos',
    form_info_desc:'Preencha o formulário com os seus dados para que eu possa entrar em contacto consigo o mais brevemente possível.',
    form_title:'Formulário de Contacto',
    form_bi_label:'Número do Bilhete de Identidade', form_bi_btn:'Validar BI',
    form_nome:'Nome Completo', form_dob:'Data de Nascimento',
    form_provincia:'Província', form_naturalidade:'Naturalidade',
    form_email:'Endereço de E-mail', form_tel:'Telefone', form_assunto:'Assunto',
    form_msg:'Mensagem', form_submit:'Enviar Mensagem',
    form_success:'✓ Mensagem enviada com sucesso! Entrarei em contacto brevemente.',
    footer_copy:'© 2025 Sebastião da Cruz Miranda. Todos os direitos reservados. · Luanda, Angola',
    chat_replies:[
      'Obrigado pela sua mensagem! Responderei em breve.',
      'Claro, terei todo o prazer em ajudar com o seu projecto!',
      'Podemos marcar uma reunião para discutir os detalhes.',
      'Pode contactar-me também via LinkedIn ou por telefone.',
    ]
  },
  kik: {
    nav_inicio:'Ntangu', nav_galeria:'Galeria', nav_projectos:'Misalu',
    nav_sobre:'Mono Yandi', nav_chat:'Kusolula', nav_curriculo:'Kanda',
    hero_tag:'Mfundi wa Komputa · Sebastião Miranda',
    hero_name:'Sebastião Miranda',
    hero_subtitle:'Mfundi wa Software & Dizayina ya Nkama ya Luanda, Angola.',
    hero_cta1:'Luka Misalu', hero_cta2:'Benga',
    gal_label:'Galeria', gal_title:'Misalu ya Ntinu',
    gal_desc:'Misalu ya mono ya ntinu, wau mono ya nzala ya kanda.',
    proj_label:'Misalu', proj_title:'Misalu ya Nsuka', proj_all:'Luka yonso →',
    about_label:'Mono Yandi', about_title:'Mbote, Mono Sebastião',
    about_p1:'Mono mfundi wa software ya Angola, mu Luanda. Mono mono yandi misalu ya ntinu ya Africa.',
    about_p2:'Na mibu ya 6, mono mfundi wa software na dizayina ya ntinu.',
    about_cta:'Sala Kumosi',
    stat1:'Mibu ya Nsuka', stat2:'Misalu', stat3:'Bampangi', stat4:'Mikumba',
    narr_title:'Yoka nsamu wandi', narr_sub:'Kusolula kwa kanda',
    cv_label:'Kanda', cv_title:'Misalu ya Ntinu',
    chat_label:'Kusolula', chat_title:'Solula Na Mono',
    chat_name:'Sebastião Miranda', chat_status:'● Online',
    chat_placeholder:'Sonika mobu...',
    chat_welcome:'Mbote! 👋 Yei na portfolio wandi. Mono yandi kukubuya?',
    form_section_label:'Benga', form_section_title:'Benga Mono',
    form_title:'Fiche ya Benga',
    form_bi_label:'Nomero ya BI', form_bi_btn:'Matisa BI',
    form_nome:'Nkumbu ya Mpila', form_dob:'Lumbu ya Mbotama',
    form_provincia:'Provinsi', form_naturalidade:'Mbotama',
    form_email:'E-mail', form_tel:'Telefone', form_assunto:'Tina',
    form_msg:'Mobu', form_submit:'Tinda Mobu',
    form_success:'✓ Mobu tandidi na bwana!',
    footer_copy:'© 2025 Sebastião Miranda · Luanda, Angola',
    chat_replies:['Matondi na mobu wau!','Mono yandi kukusadisa!']
  },
  kim: {
    nav_inicio:'Utangu', nav_galeria:'Galeria', nav_projectos:'Mibulo',
    nav_sobre:'Meme Niame', nav_chat:'Kulongesa', nav_curriculo:'Citabu',
    hero_tag:'Mukubi wa Komputa · Sebastião Miranda',
    hero_name:'Sebastião Miranda',
    hero_subtitle:'Mukubi wa Software & Dizaini wa Luanda, Angola.',
    hero_cta1:'Mono Mibulo', hero_cta2:'Mbila',
    gal_label:'Galeria', gal_title:'Mibulo ya Nzole',
    gal_desc:'Mibulo ya meme ya nzole, kiyadi ca ukubi wa meme.',
    proj_label:'Mibulo', proj_title:'Mibulo ya Nkama', proj_all:'Mono yonso →',
    about_label:'Meme Niame', about_title:'Nzuzu, Meme Sebastião',
    about_p1:'Meme mukubi wa software wa Angola, mu Luanda.',
    about_p2:'Na miaka ya 6, meme mukubi wa software na dizaini ya nzole.',
    about_cta:'Kiumbi Kumosi',
    stat1:'Miaka ya Mono', stat2:'Mibulo', stat3:'Alungi', stat4:'Mbila ya Nzole',
    narr_title:'Yumba muimbo wandi', narr_sub:'Kulongesa kwa nkama',
    cv_label:'Citabu', cv_title:'Mibulo ya Nkama',
    chat_label:'Kulongesa', chat_title:'Longesa Na Meme',
    chat_name:'Sebastião Miranda', chat_status:'● Online',
    chat_placeholder:'Sonika mavi...',
    chat_welcome:'Nzuzu! 👋 Yei mu portfolio wame. Meme niame kukubika?',
    form_section_label:'Mbila', form_section_title:'Mbila Meme',
    form_title:'Fishi ya Mbila',
    form_bi_label:'Nambua ya BI', form_bi_btn:'Tondeka BI',
    form_nome:'Nkumbu ya Mpila', form_dob:'Siku ya Mbuwa',
    form_provincia:'Provinsi', form_naturalidade:'Mbuwa',
    form_email:'E-mail', form_tel:'Telefone', form_assunto:'Kua',
    form_msg:'Mavi', form_submit:'Tuma Mavi',
    form_success:'✓ Mavi tumwa na nkama!',
    footer_copy:'© 2025 Sebastião Miranda · Luanda, Angola',
    chat_replies:['Tundu na mavi wau!','Meme niame kukusadisa!']
  },
  umb: {
    nav_inicio:'Okutunga', nav_galeria:'Galeria', nav_projectos:'Ombulo',
    nav_sobre:'Ami Ngo', nav_chat:'Okuvhula', nav_curriculo:'Ocitabu',
    hero_tag:'Otyi wa Komputa · Sebastião Miranda',
    hero_name:'Sebastião Miranda',
    hero_subtitle:'Otyi wa Software & Dizaini woku Luanda, Angola.',
    hero_cta1:'Ombulo Yohe', hero_cta2:'Mbila',
    gal_label:'Galeria', gal_title:'Ombulo yo Nkama',
    gal_desc:'Ombulo yame yo nkama, okuvhula otyi wame.',
    proj_label:'Ombulo', proj_title:'Ombulo yo Nzole', proj_all:'Longa yohe →',
    about_label:'Ami Ngo', about_title:'Okuta, Ami Sebastião',
    about_p1:'Ami otyi wa software wa Angola, mu Luanda.',
    about_p2:'Na omiyaka ya 6, ami otyi wa software na dizaini yo nkama.',
    about_cta:'Okumba Kumosi',
    stat1:'Omiyaka', stat2:'Ombulo', stat3:'Alungi', stat4:'Ovilonga',
    narr_title:'Yumba ombaxi yame', narr_sub:'Okulonga kwa nkama',
    cv_label:'Ocitabu', cv_title:'Ombulo yo Nkama',
    chat_label:'Okuvhula', chat_title:'Vhula Na Ami',
    chat_name:'Sebastião Miranda', chat_status:'● Online',
    chat_placeholder:'Sonika ovilonga...',
    chat_welcome:'Okuta! 👋 Yei mu portfolio yame. Ami ngo okukubika?',
    form_section_label:'Mbila', form_section_title:'Mbila Ami',
    form_title:'Ocifo co Mbila',
    form_bi_label:'Onambua ya BI', form_bi_btn:'Tondeka BI',
    form_nome:'Olina lo Mpila', form_dob:'Osiku wo Mbuwa',
    form_provincia:'Omaprovinca', form_naturalidade:'Okulwa',
    form_email:'E-mail', form_tel:'Telefone', form_assunto:'Ocitena',
    form_msg:'Ovilonga', form_submit:'Tuma Ovilonga',
    form_success:'✓ Ovilonga tumbwa na nkama!',
    footer_copy:'© 2025 Sebastião Miranda · Luanda, Angola',
    chat_replies:['Tenda na ovilonga vyo!','Ami ngo okukulonga!']
  },
  chy: {
    nav_inicio:'Ntambo', nav_galeria:'Galeria', nav_projectos:'Misalu',
    nav_sobre:'Meme Kudi', nav_chat:'Kulombola', nav_curriculo:'Citabu',
    hero_tag:'Mfundi wa Komputa · Sebastião Miranda',
    hero_name:'Sebastião Miranda',
    hero_subtitle:'Mfundi wa Software & Dizaini wa Luanda, Angola.',
    hero_cta1:'Misalu yohe', hero_cta2:'Mulamba',
    gal_label:'Galeria', gal_title:'Misalu ya Nzole',
    gal_desc:'Misalu ya meme ya nzole, ukubi wa meme.',
    proj_label:'Misalu', proj_title:'Misalu ya Nkama', proj_all:'Mono yohe →',
    about_label:'Meme Kudi', about_title:'Ëë, Meme Sebastião',
    about_p1:'Meme mfundi wa software wa Angola, mu Luanda.',
    about_p2:'Na miaka 6, meme mfundi wa software na dizaini.',
    about_cta:'Sala Kumosi',
    stat1:'Miaka', stat2:'Misalu', stat3:'Bampangi', stat4:'Mikumba',
    narr_title:'Yoka nsamu wandi', narr_sub:'Kulombola kwa nkama',
    cv_label:'Citabu', cv_title:'Misalu ya Nkama',
    chat_label:'Kulombola', chat_title:'Lombola Na Meme',
    chat_name:'Sebastião Miranda', chat_status:'● Online',
    chat_placeholder:'Sonika mobu...',
    chat_welcome:'Ëë! 👋 Yei mu portfolio wame. Meme kudi kukubuya?',
    form_section_label:'Mulamba', form_section_title:'Mulamba Meme',
    form_title:'Fishi ya Mulamba',
    form_bi_label:'Nomero ya BI', form_bi_btn:'Tondeka BI',
    form_nome:'Nkumbu ya Mpila', form_dob:'Lumbu ya Mbotama',
    form_provincia:'Provinsi', form_naturalidade:'Mbotama',
    form_email:'E-mail', form_tel:'Telefone', form_assunto:'Kua',
    form_msg:'Mobu', form_submit:'Tinda Mobu',
    form_success:'✓ Mobu tandidi!',
    footer_copy:'© 2025 Sebastião Miranda · Luanda, Angola',
    chat_replies:['Matondi na mobu wau!','Meme kudi kukusadisa!']
  },
  lun: {
    nav_inicio:'Kutambu', nav_galeria:'Galeria', nav_projectos:'Milimo',
    nav_sobre:'Ami Mwendi', nav_chat:'Kulongana', nav_curriculo:'Citabu',
    hero_tag:'Mukubi wa Komputa · Sebastião Miranda',
    hero_name:'Sebastião Miranda',
    hero_subtitle:'Mukubi wa Software & Dizaini wa Luanda, Angola.',
    hero_cta1:'Milimo yose', hero_cta2:'Lila',
    gal_label:'Galeria', gal_title:'Milimo ya Nkama',
    gal_desc:'Milimo yami ya nkama, ukubi wa meme.',
    proj_label:'Milimo', proj_title:'Milimo ya Nzole', proj_all:'Mono yose →',
    about_label:'Ami Mwendi', about_title:'Natalamwi, Ami Sebastião',
    about_p1:'Ami mukubi wa software wa Angola, mu Luanda.',
    about_p2:'Na miaka ya 6, ami mukubi wa software na dizaini.',
    about_cta:'Kiumbi Kumosi',
    stat1:'Miaka', stat2:'Milimo', stat3:'Akumbi', stat4:'Milimo ya Nzole',
    narr_title:'Yumbu muimbo wandi', narr_sub:'Kulongana kwa nkama',
    cv_label:'Citabu', cv_title:'Milimo ya Nkama',
    chat_label:'Kulongana', chat_title:'Longana Na Ami',
    chat_name:'Sebastião Miranda', chat_status:'● Online',
    chat_placeholder:'Sonika mavi...',
    chat_welcome:'Natalamwi! 👋 Yei mu portfolio yami. Ami mwendi kukubika?',
    form_section_label:'Lila', form_section_title:'Lila Ami',
    form_title:'Fishi ya Lila',
    form_bi_label:'Nambua ya BI', form_bi_btn:'Tondeka BI',
    form_nome:'Nkumbu ya Mpila', form_dob:'Siku ya Mbuwa',
    form_provincia:'Omaprovinca', form_naturalidade:'Mbuwa',
    form_email:'E-mail', form_tel:'Telefone', form_assunto:'Kua',
    form_msg:'Mavi', form_submit:'Tuma Mavi',
    form_success:'✓ Mavi tumwa!',
    footer_copy:'© 2025 Sebastião Miranda · Luanda, Angola',
    chat_replies:['Tenda na mavi yako!','Ami mwendi kukusadisa!']
  }
};

let currentLang = 'pt';

function toggleLang() {
  document.getElementById('langDropdown').classList.toggle('open');
}
document.addEventListener('click', function(e) {
  if(!e.target.closest('.lang-selector')) {
    document.getElementById('langDropdown').classList.remove('open');
  }
});

const langNames = { pt:'PT', kik:'KIK', kim:'KIM', umb:'UMB', chy:'CHY', lun:'LUN' };

function setLang(lang) {
  currentLang = lang;
  document.getElementById('currentLang').textContent = langNames[lang] || lang.toUpperCase();
  const t = translations[lang] || translations['pt'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(t[key]) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if(t[key]) el.placeholder = t[key];
  });
  const firstMsg = document.querySelector('#chatMessages .msg.bot .msg-bubble');
  if(firstMsg && t.chat_welcome) firstMsg.textContent = t.chat_welcome;
  document.querySelectorAll('.lang-dropdown button').forEach(b => b.classList.remove('selected'));
  event.target.classList.add('selected');
  document.getElementById('langDropdown').classList.remove('open');
}

// ─── NARRATOR ──────────────────────────────────────────────────────────────
let narratorUtterance = null;
let isNarrating = false;

function toggleNarrator() {
  const bar = document.getElementById('narratorBar');
  if(isNarrating) {
    window.speechSynthesis.cancel();
    isNarrating = false;
    bar.classList.remove('playing');
  } else {
    const t = translations[currentLang] || translations['pt'];
    const text = (t.about_p1 || '') + ' ' + (t.about_p2 || '');
    narratorUtterance = new SpeechSynthesisUtterance(text);
    narratorUtterance.lang = 'pt-PT';
    narratorUtterance.rate = 0.9;
    narratorUtterance.onend = () => { isNarrating = false; bar.classList.remove('playing'); };
    window.speechSynthesis.speak(narratorUtterance);
    isNarrating = true;
    bar.classList.add('playing');
  }
}

// ─── CHAT ──────────────────────────────────────────────────────────────────
function chatKeyPress(e) { if(e.key === 'Enter') sendChatMessage(); }

function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if(!msg) return;
  addChatMsg(msg, 'user');
  input.value = '';
  showTyping();
  setTimeout(() => {
    hideTyping();
    const t = translations[currentLang] || translations['pt'];
    const replies = t.chat_replies || translations.pt.chat_replies;
    const reply = replies[Math.floor(Math.random() * replies.length)];
    addChatMsg(reply, 'bot');
  }, 1200 + Math.random() * 800);
}

function addChatMsg(text, type) {
  const container = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = `msg ${type}`;
  div.innerHTML = `<div class="msg-avatar">${type==='bot'?'S':'V'}</div><div class="msg-bubble">${text}</div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

let typingEl = null;
function showTyping() {
  const container = document.getElementById('chatMessages');
  typingEl = document.createElement('div');
  typingEl.className = 'msg bot';
  typingEl.innerHTML = `<div class="msg-avatar">S</div><div class="msg-bubble"><div class="chat-typing show"><span></span><span></span><span></span></div></div>`;
  container.appendChild(typingEl);
  container.scrollTop = container.scrollHeight;
}
function hideTyping() { if(typingEl) { typingEl.remove(); typingEl=null; } }

// ─── BI VALIDATION ─────────────────────────────────────────────────────────
const provincias = {
  'LA':'Luanda','BE':'Benguela','HA':'Huambo','HI':'Huíla',
  'CB':'Cabinda','CC':'Cuando Cubango','CN':'Cunene','CS':'Cuanza Sul',
  'LN':'Lunda Norte','LS':'Lunda Sul','ML':'Malanje','MB':'Moxico',
  'NA':'Namibe','UI':'Uíge','ZA':'Zaire','KW':'Kwanza Norte','BI':'Bié'
};

function onBIInput(input) {
  input.value = input.value.toUpperCase().replace(/[^A-Z0-9]/g,'');
  const hint = document.getElementById('biHint');
  hint.textContent = ''; hint.className = 'form-hint';
  input.classList.remove('valid','invalid');
  clearAutoFilled();
}

function validateBI() {
  const bi = document.getElementById('biNumber').value.trim();
  if(!bi) { showHint('biHint','Por favor insira o número do BI','error'); return; }
  const biRegex = /^(\d{9})([A-Z]{2})(\d{3})$/;
  const match = bi.match(biRegex);
  if(!match) {
    document.getElementById('biNumber').classList.add('invalid');
    showHint('biHint','Formato inválido. Use: 000000000XX000 (9 dígitos + 2 letras + 3 dígitos)','error');
    clearAutoFilled(); return;
  }
  showHint('biHint','A validar...','loading');
  setTimeout(() => {
    const [, digits, provCode, seq] = match;
    const provName = provincias[provCode] || 'Angola';
    const angolaMales = ['António João','Francisco Manuel','Paulo da Silva','Carlos Alberto','João Baptista','Miguel Afonso','Pedro Sebastião','Luís Filipe','Eduardo Mbende','Domingos Chimuco'];
    const angolaFemales = ['Maria da Conceição','Ana Paula','Filomena Santos','Isabel Luzia','Sofia Ferreira','Catarina Neto','Fernanda Kanda','Josefa Nkosi','Beatriz Damba','Lurdes Chipindo'];
    const namePool = parseInt(digits[0]) % 2 === 0 ? angolaMales : angolaFemales;
    const name = namePool[parseInt(seq) % namePool.length];
    const year = 1970 + (parseInt(digits.slice(0,2)) % 35);
    const month = (parseInt(digits.slice(2,4)) % 12) + 1;
    const day = (parseInt(digits.slice(4,6)) % 28) + 1;
    const dob = `${String(day).padStart(2,'0')}/${String(month).padStart(2,'0')}/${year}`;
    document.getElementById('biNumber').classList.add('valid');
    document.getElementById('fullName').value = name;
    document.getElementById('dob').value = dob;
    document.getElementById('provincia').value = provName;
    document.getElementById('naturalidade').value = provName;
    showHint('biHint','✓ BI válido · Dados preenchidos automaticamente','success');
  }, 1500);
}

function clearAutoFilled() {
  ['fullName','dob','provincia','naturalidade'].forEach(id => {
    document.getElementById(id).value = '';
  });
}

// ─── EMAIL VALIDATION ───────────────────────────────────────────────────────
let emailTimer;
function onEmailInput(input) {
  clearTimeout(emailTimer);
  input.classList.remove('valid','invalid');
  document.getElementById('emailHint').textContent='';
  emailTimer = setTimeout(()=>validateEmail(input), 800);
}

function validateEmail(input) {
  const email = input.value.trim();
  if(!email) return;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if(!emailRegex.test(email)) {
    input.classList.add('invalid');
    showHint('emailHint','Formato de e-mail inválido','error'); return;
  }
  showHint('emailHint','A verificar e-mail...','loading');
  setTimeout(() => {
    const domain = email.split('@')[1].toLowerCase();
    const blocked = ['temp.com','trash.com','mailinator.com','guerrillamail.com','10minutemail.com'];
    const knownDomains = ['gmail.com','yahoo.com','hotmail.com','outlook.com','ao','co.ao','gov.ao','net.ao'];
    if(blocked.includes(domain)) {
      input.classList.add('invalid');
      showHint('emailHint','E-mail temporário não é permitido','error');
    } else if(knownDomains.some(d=>domain.endsWith(d)) || Math.random()>0.1) {
      input.classList.add('valid');
      showHint('emailHint','✓ E-mail verificado e válido','success');
    } else {
      input.classList.add('invalid');
      showHint('emailHint','Domínio não reconhecido. Verifique o endereço.','error');
    }
  }, 1000);
}

function showHint(id, text, type) {
  const el = document.getElementById(id);
  el.textContent = text; el.className = `form-hint ${type}`;
}

// ─── FORM SUBMIT ────────────────────────────────────────────────────────────
function submitForm() {
  const email = document.getElementById('emailInput');
  const bi = document.getElementById('biNumber');
  const msg = document.getElementById('message').value.trim();
  if(!bi.value || !email.value || !msg) {
    alert('Por favor preencha todos os campos obrigatórios.'); return;
  }
  if(!bi.classList.contains('valid')) {
    alert('Por favor valide o Bilhete de Identidade primeiro.'); return;
  }
  if(!email.classList.contains('valid')) {
    alert('Por favor verifique o endereço de e-mail.'); return;
  }
  const btn = document.querySelector('.form-submit');
  btn.disabled = true; btn.textContent = 'A enviar...';
  setTimeout(() => {
    document.getElementById('formSuccess').style.display='block';
    btn.style.display='none';
  }, 1500);
}

// ─── SKILL BARS ANIMATION ────────────────────────────────────────────────────
function animateSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill');
  bars.forEach(bar => {
    const target = bar.getAttribute('data-width');
    bar.style.width = target;
  });
}

// ─── NAV ACTIVE ─────────────────────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if(window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });

  // Trigger skill bars when CV section is in view
  const cvSection = document.getElementById('curriculo');
  if(cvSection) {
    const rect = cvSection.getBoundingClientRect();
    if(rect.top < window.innerHeight * 0.8) {
      animateSkillBars();
    }
  }
});
