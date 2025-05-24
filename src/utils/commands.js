export const commands = {
  help: () => `Available commands:
╭─────────────────────────────────────────────────────────╮
│  Navigation Commands:                                   │
│  • home        - Go to home page                        │
│  • about       - View about section                     │
│  • skills      - View technical skills & expertise      │
│  • projects    - View my projects                       │
│  • contact     - View contact information               │
│  • portfolio   - Switch to portfolio view               │
│                                                         │
│  System Commands:                                       │
│  • theme       - Toggle light/dark mode                 │
│  • clear       - Clear terminal history                 │
│  • close       - Close terminal                         │
│  • changeSize  - Change Size                            │
│                                                         │
│                                                         │
│  Information Commands:                                  │
│  • whoami      - Display user info                      │
│  • showSkills  - Show technical skills                  │
│  • experience  - Show work experience                   │
│  • date        - Show current date                      │
│  • music       - Show current music status              │
│                                                         │
│  Fun Commands:                                          │
│  • matrix      - Enter the matrix...                    │
│  • joke        - Tell a programming joke                │
╰─────────────────────────────────────────────────────────╯`,

  whoami: () => `User: visitor@portfolio.dev
Role: Potential collaborator, employer, or fellow developer
Status: Exploring an awesome portfolio 😎
Access Level: Guest (but welcome!)
Location: Currently browsing from the terminal`,

  showskills: () => `Technical Skills:
╭─────────────────────────────────────────────────────────╮
│  Frontend: React, Vue.js, TypeScript, HTML5, CSS3      │
│  Backend: Node.js, Python, Java, Express.js            │
│  Database: MongoDB, PostgreSQL, MySQL                  │
│  Tools: Git, Docker, AWS, VS Code                      │
│  Other: REST APIs, GraphQL, Testing, CI/CD             │
╰─────────────────────────────────────────────────────────╯

💡 Tip: Use the command 'skills' (navigation) to view the full Skills page with detailed information and interactive elements!`,

  experience: () => `Work Experience:
╭─────────────────────────────────────────────────────────╮
│  🚀 Senior Developer - Tech Corp (2022-Present)        │
│     • Led development of React applications            │
│     • Mentored junior developers                       │
│                                                         │
│  💻 Full Stack Developer - StartupXYZ (2020-2022)      │
│     • Built scalable web applications                  │
│     • Implemented CI/CD pipelines                      │
│                                                         │
│  🎓 Junior Developer - DevAgency (2018-2020)           │
│     • Developed responsive websites                    │
│     • Learned modern web technologies                  │
╰─────────────────────────────────────────────────────────╯`,

  date: () => `Current date: ${new Date().toLocaleString()}
Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}
Uptime: ${Math.floor(Math.random() * 24)}h ${Math.floor(Math.random() * 60)}m`,

  matrix: () => `Wake up, Neo... 🕶️
The Matrix has you...
Follow the white rabbit 🐰
┌─────────────────────────────────────────────────────────┐
│ 01001000 01100101 01101100 01101100 │
│ 01101111 00100000 01010111 01101111 │
│ 01110010 01101100 01100100 00100001 │
└─────────────────────────────────────────────────────────┘
Knock, knock, Neo.`,

  joke: () => {
    const jokes = [
      "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
      "How many programmers does it take to change a light bulb? None, that's a hardware problem! 💡",
      "Why don't programmers like nature? It has too many bugs! 🌿",
      "A SQL query goes into a bar, walks up to two tables and asks: 'Can I join you?' 🍺",
      "Why did the programmer quit his job? He didn't get arrays! 📊"
    ];
    return jokes[Math.floor(Math.random() * jokes.length)];
  },

  // Dynamic music command - will be overridden by Terminal component
  music: () => `🎵 Music Player Status:
No music is currently playing.
Open the music player from the navbar to start listening! 🎶`,

  // Easter eggs
  coffee: () => `☕ Brewing fresh coffee... 
████████████████ 100%
Coffee ready! Perfect for coding sessions.`,

  // Hidden commands
  konami: () => `🎮 KONAMI CODE ACTIVATED!
↑ ↑ ↓ ↓ ← → ← → B A
You've unlocked: Extra motivation for coding! 💪`,

  sudo: () => `sudo: command not found
Nice try! This isn't your server 😏
(But I appreciate the Linux knowledge!)`,
};