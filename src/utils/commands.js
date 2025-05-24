// utils/commands.js - Updated with new help command including navigation
export const commands = {
  help: () => `Available commands:
╭─────────────────────────────────────────────────────────╮
│  Navigation Commands:                                   │
│  • home        - Go to home page                       │
│  • about       - View about section                    │
│  • projects    - View my projects                      │
│  • contact     - View contact information              │
│  • portfolio   - Switch to portfolio view              │
│                                                         │
│  System Commands:                                       │
│  • theme       - Toggle light/dark mode                │
│  • clear       - Clear terminal history                │
│  • close       - Close terminal                        │
│  • minimize    - Minimize terminal                      │
│  • maximize    - Toggle fullscreen                     │
│                                                         │
│  Information Commands:                                  │
│  • whoami      - Display user info                     │
│  • skills      - Show technical skills                 │
│  • experience  - Show work experience                  │
│  • date        - Show current date                     │
│                                                         │
│  Fun Commands:                                          │
│  • matrix      - Enter the matrix... 🕶️               │
│  • joke        - Tell a programming joke               │
╰─────────────────────────────────────────────────────────╯`,

  whoami: () => `User: visitor@portfolio.dev
Role: Potential collaborator, employer, or fellow developer
Status: Exploring an awesome portfolio 😎
Access Level: Guest (but welcome!)
Location: Currently browsing from the terminal`,

  skills: () => `Technical Skills:
╭─────────────────────────────────────────────────────────╮
│  Frontend: React, Vue.js, TypeScript, HTML5, CSS3      │
│  Backend: Node.js, Python, Java, Express.js            │
│  Database: MongoDB, PostgreSQL, MySQL                  │
│  Tools: Git, Docker, AWS, VS Code                      │
│  Other: REST APIs, GraphQL, Testing, CI/CD             │
╰─────────────────────────────────────────────────────────╯`,

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
┌─────────────────────────────────────┐
│ 01001000 01100101 01101100 01101100 │
│ 01101111 00100000 01010111 01101111 │
│ 01110010 01101100 01100100 00100001 │
└─────────────────────────────────────┘
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

  // Easter eggs
  coffee: () => `☕ Brewing fresh coffee... 
████████████████ 100%
Coffee ready! Perfect for coding sessions.`,

  music: () => `🎵 Now playing: "Coding in the Deep" by The Debug Brothers
♪ ♫ ♪ ♫ Debugging all night long ♪ ♫ ♪ ♫`,

  // Hidden commands
  konami: () => `🎮 KONAMI CODE ACTIVATED!
↑ ↑ ↓ ↓ ← → ← → B A
You've unlocked: Extra motivation for coding! 💪`,

  sudo: () => `sudo: command not found
Nice try! This isn't your server 😏
(But I appreciate the Linux knowledge!)`,
};