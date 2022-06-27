module.exports = async (client) => {
  let statuses = [
    "Shiro.help",
    "Music",
    "https://discord.gg/UFTXkxRrWT",
    "https://github.com/Uunkn0wnN ",
    "shiro music",
    "https://shiroweb-dashboard.221447.repl.co",
    "YOU",
    "my self",
    "nazarick clan",
    "スマイル",
    "MODERN WARSHIP: sea battle online",
    "bacot",
    "anjing",		
    "https://Shiro-music.221447.repl.co"
  ]

  setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(status, {
      type: "WATCHING",
    });
  }, 1000);
  
  console.log(`[API] Logged in as ${client.user.username}`);
};
