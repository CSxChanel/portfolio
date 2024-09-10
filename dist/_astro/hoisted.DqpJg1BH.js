import"./ToggleDarkBtn.astro_astro_type_script_index_0_lang.DAnGLcmk.js";import"https://code.iconify.design/iconify-icon/2.0.0/iconify-icon.min.js";import"./Header.astro_astro_type_script_index_0_lang.CD8oHzLf.js";const e=[{imgSrc:"../ccp/movie.jpg",titulo:"Movie-Search",skills:["React","Tailwind","JavaScript"],descripcion:"Sebuah aplikasi pencarian film yang memungkinkan pengguna mencari informasi tentang film, termasuk detail seperti tanggal rilis, bahasa asli, ulasan, dan popularitas.",demoURL:"https://cpsudrajat-movie.vercel.app/",repoURL:"https://github.com/CSxChanel/Movie-Search.git",anim:"fade-right"},{imgSrc:"../ccp/indihome.jpg",titulo:"Next-Area",skills:["JavaScript","Next","Tailwind"],descripcion:" Proyek berbasis Next.js yang mengeksplorasi pembuatan halaman dinamis dan rendering sisi server (SSR).",demoURL:"https://indihome-area.com",repoURL:"https://github.com/CSxChanel/Next-Area.git",anim:"fade-up"},{imgSrc:"../ccp/bot.jpg",titulo:"My-Bot",skills:["JavaScript","Node"],descripcion:"Bot WhatsApp yang terintegrasi dengan API OpenAI dan Google Gemini untuk merespons pesan otomatis dan memproses gambar.",demoURL:"#",repoURL:"https://github.com/CSxChanel/bot-app.git",anim:"fade-left"},{imgSrc:"../ccp/portfolio.jpg",titulo:"My Portfolio",skills:["Astro","React","JavaScript"],descripcion:"Just the repository of my portfolio on GitHub.",demoURL:"https://cpsudrajat-movie.vercel.app/autor",repoURL:"https://github.com/CSxChanel/portfolio",anim:"fade-right"},{imgSrc:"../img/portfolio_img/SASS.webp",titulo:"Eco Store",skills:["Sass","JavaScript"],descripcion:"Made with sass for the,Sass fundamentals course",demoURL:"#",repoURL:"https://github.com/CSxChanel",anim:"fade-up"},{imgSrc:"../img/portfolio_img/BooststrapCurso.webp",titulo:"fruto & Fruta",skills:["Bootstrap","JavaScript"],descripcion:"Made with Bootstrap for the, Bootstrap  course",demoURL:"#",repoURL:"https://github.com/CSxChanel",anim:"fade-left"},{imgSrc:"../img/portfolio_img//encriptador_mensajes_dark.webp",titulo:"Message Encryptor",skills:["JavaScript","CSS"],descripcion:"Message Encryptor for the first Alura Latam Challenge: Programming Logic.",demoURL:"#",repoURL:"https://github.com/CSxChanel",anim:"fade-up"}],s={JavaScript:"skill-icons:javascript",Tailwind:"skill-icons:tailwindcss-dark",React:"skill-icons:react-dark",Next:"skill-icons:nextjs-dark",Astro:"skill-icons:astro",CSS:"skill-icons:css",Node:"skill-icons:nodejs-dark",Sass:"skill-icons:sass",StyledComponents:"skill-icons:styledcomponents",Bootstrap:"devicon:bootstrap"},p=document.querySelectorAll("[data-skill]"),r=document.querySelector(".cards__container"),d=document.querySelector("[data-All]");function l(){const a=e.map(o=>`
        <div class="portafolio__tarjeta" >
            <div class="portafolio__cara faceA card__content caja__dark__portafolio">
                <div class="img__container">
                    <img
                        class="portafolio__img"
                        src="${o.imgSrc}"
                        alt="${o.titulo}"
                    />
                </div>
                <div class="container__info">
                    <h3 class="portafolio__subtitulo titulo__dark">
                        ${o.titulo}
                    </h3>
                    <div class="skills__used">
                        ${o.skills.map(t=>`
                            <div class="tecnology" >
                                <iconify-icon
                                    icon="${s[t]||""}"
                                    width="22"
                                />
                            </div>
                        `).join("")}
                    </div>
                </div>
            </div>
            <div class="portafolio__cara faceB  caja__dark__portafolio">
                <p class="portafolio__descripcion titulo__dark">
                    ${o.descripcion}
                </p>
                <div class="portafolio__botobnes">
                    <a
                        class="portafolio__btn boton titulo__dark"
                        href="${o.demoURL}"
                        target="_blank"
                        rel="nofollow noreferrer noopener"
                    >
                        <span data-section="portafolio" data-value="demo">
                            View Demo
                        </span>
                    </a>
                    <a
                        class="portafolio__btn boton titulo__dark"
                        href="${o.repoURL}"
                        target="_blank"
                        rel="nofollow noreferrer noopener"
                    >
                        <span data-section="portafolio" data-value="repo">
                            View Repo
                        </span>
                    </a>
                </div>
            </div>
        </div>
    `).join("");r.innerHTML=a}l();p.forEach(a=>{a.addEventListener("click",()=>{const o=a.getAttribute("data-skill"),n=e.filter(i=>i.skills.includes(o)).map(i=>`
          <div class="portafolio__tarjeta" >
              <div class="portafolio__cara faceA card__content caja__dark__portafolio">
                  <div class="img__container">
                      <img
                          class="portafolio__img"
                          src="${i.imgSrc}"
                          alt="${i.titulo}"
                      />
                  </div>
                  <div class="container__info">
                      <h3 class="portafolio__subtitulo titulo__dark">
                          ${i.titulo}
                      </h3>
                      <div class="skills__used">
                          ${i.skills.map(c=>`
                              <div class="tecnology" >
                                  <iconify-icon
                                      icon="${s[c]||""}"
                                      width="22"
                                  />
                              </div>
                          `).join("")}
                      </div>
                  </div>
              </div>
              <div class="portafolio__cara faceB  caja__dark__portafolio">
                  <p class="portafolio__descripcion titulo__dark">
                      ${i.descripcion}
                  </p>
                  <div class="portafolio__botobnes">
                      <a
                          class="portafolio__btn boton titulo__dark"
                          href="${i.demoURL}"
                          target="_blank"
                          rel="nofollow noreferrer noopener"
                      >
                          <span data-section="portafolio" data-value="demo">
                              View Demo
                          </span>
                      </a>
                      <a
                          class="portafolio__btn boton titulo__dark"
                          href="${i.repoURL}"
                          target="_blank"
                          rel="nofollow noreferrer noopener"
                      >
                          <span data-section="portafolio" data-value="repo">
                              View Repo
                          </span>
                      </a>
                  </div>
              </div>
          </div>
      `).join("");r.innerHTML=n})});d.addEventListener("click",()=>{l()});
