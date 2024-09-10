const portafolioData = [
    {
        imgSrc: "../ccp/movie.jpg",
        titulo: "Movie-Search",
        skills: ["React", "Tailwind", "JavaScript"],
        descripcion:
            "Sebuah aplikasi pencarian film yang memungkinkan pengguna mencari informasi tentang film, termasuk detail seperti tanggal rilis, bahasa asli, ulasan, dan popularitas.",
        demoURL: "https://cpsudrajat-movie.vercel.app/",
        repoURL: "https://github.com/CSxChanel/Movie-Search.git",
        anim: "fade-right"
    },
    {
        imgSrc: "../ccp/indihome.jpg",
        titulo: "Next-Area",
        skills: ["JavaScript", "Next", "Tailwind"],
        descripcion:
            " Proyek berbasis Next.js yang mengeksplorasi pembuatan halaman dinamis dan rendering sisi server (SSR).",
        demoURL: "https://indihome-area.com",
        repoURL: "https://github.com/CSxChanel/Next-Area.git",
        anim: "fade-up"
    },
    {
        imgSrc: "../ccp/bot.jpg",
        titulo: "My-Bot",
        skills: ["JavaScript", "Node"],
        descripcion:
            "Bot WhatsApp yang terintegrasi dengan API OpenAI dan Google Gemini untuk merespons pesan otomatis dan memproses gambar.",
        demoURL: "#",
        repoURL: "https://github.com/CSxChanel/bot-app.git",
        anim: "fade-left"
    },
    {
        imgSrc: "../ccp/portfolio.jpg",
        titulo: "My Portfolio",
        skills: ["Astro", "React", "JavaScript"],
        descripcion: "Just the repository of my portfolio on GitHub.",
        demoURL: "https://cpsudrajat-movie.vercel.app/autor",
        repoURL: "https://github.com/CSxChanel/portfolio",
        anim: "fade-right"
    },
    {
        imgSrc: "../img/portfolio_img/SASS.webp",
        titulo: "Eco Store",
        skills: ["Sass", "JavaScript"],
        descripcion: "Made with sass for the,Sass fundamentals course",
        demoURL: "#",
        repoURL: "https://github.com/CSxChanel",
        anim: "fade-up"
    },
    {
        imgSrc: "../img/portfolio_img/BooststrapCurso.webp",
        titulo: "fruto & Fruta",
        skills: ["Bootstrap", "JavaScript"],
        descripcion: "Made with Bootstrap for the, Bootstrap  course",
        demoURL: "#",
        repoURL: "https://github.com/CSxChanel",
        anim: "fade-left"
    },

    {
        imgSrc: "../img/portfolio_img//encriptador_mensajes_dark.webp",
        titulo: "Message Encryptor",
        skills: ["JavaScript", "CSS"],
        descripcion:
            "Message Encryptor for the first Alura Latam Challenge: Programming Logic.",
        demoURL: "#",
        repoURL: "https://github.com/CSxChanel",
        anim: "fade-up"
    }
];

const skillIcons = {
    JavaScript: "skill-icons:javascript",
    Tailwind: "skill-icons:tailwindcss-dark",
    React: "skill-icons:react-dark",
    Next: "skill-icons:nextjs-dark",
    Astro: "skill-icons:astro",
    CSS: "skill-icons:css",
    Node: "skill-icons:nodejs-dark",
    Sass: "skill-icons:sass",
    StyledComponents: "skill-icons:styledcomponents",
    Bootstrap: "devicon:bootstrap"
    /*  Tailwind: "skill-icons:tailwindcss-dark", */
};

export { portafolioData, skillIcons };
