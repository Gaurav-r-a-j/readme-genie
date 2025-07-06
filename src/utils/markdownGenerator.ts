import { skillsData } from '@/constans/skills';
import { FormDataType } from '@/types/readme-form';

export function generateMarkdown(data: FormDataType): string {
  let markdown = '';

  // Header section with GitHub style
  if (data.layoutStyle === 'creative') {
    markdown += generateCreativeHeader(data);
  } else if (data.layoutStyle === 'compact') {
    markdown += generateCompactHeader(data);
  } else {
    markdown += generateStandardHeader(data);
  }

  // About section with bullet points
  markdown += generateAboutSection(data);

  // Skills section with icons
  if (data.skills && data.skills.length > 0) {
    markdown += generateSkillsSection(data.skills);
  }

  // Social connections
  markdown += generateSocialSection(data);

  // GitHub Stats and Streak
  markdown += generateGitHubStatsSection(data);

  return markdown.trim();
}

function generateCreativeHeader(data: FormDataType): string {
  let header = '';

  header += `<div align="center">\n\n`;
  header += `# Hi 👋, I'm ${data.name || 'Developer'}\n\n`;

  if (data.title) {
    header += `### ${data.title}\n\n`;
  }

  // Add animated GIF for creative layout
  header += `<img align="right" alt="Coding" width="400" src="https://raw.githubusercontent.com/adamalston/adamalston/master/animation.gif">\n\n`;

  // Profile views counter
  if (data.github && data.showVisitors) {
    header += `<img src="https://komarev.com/ghpvc/?username=${data.github}&label=Profile%20views&color=0e75b6&style=flat" alt="${data.github}" />\n\n`;
  }

  // GitHub trophy
  if (data.github && data.showTrophies) {
    header += `<a href="https://github.com/ryo-ma/github-profile-trophy">\n`;
    header += `  <img src="https://github-profile-trophy.vercel.app/?username=${data.github}" alt="${data.github}" />\n`;
    header += `</a>\n\n`;
  }

  header += `</div>\n\n`;
  return header;
}

function generateCompactHeader(data: FormDataType): string {
  let header = '';

  header += `# 👋 ${data.name || 'Developer'}\n\n`;

  if (data.title) {
    header += `**${data.title}**\n\n`;
  }

  if (data.location) {
    header += `📍 ${data.location}\n\n`;
  }

  return header;
}

function generateStandardHeader(data: FormDataType): string {
  let header = '';

  header += `<h1 align="center">Hi 👋, I'm ${data.name || 'Developer'}</h1>\n\n`;

  if (data.title) {
    header += `<h3 align="center">${data.title}</h3>\n\n`;
  }

  if (data.location) {
    header += `<p align="center">📍 ${data.location}</p>\n\n`;
  }

  return header;
}

function generateAboutSection(data: FormDataType): string {
  let aboutSection = '';

  // Main about section
  if (data.about) {
    aboutSection += `## 🚀 About Me\n\n`;
    aboutSection += `${data.about}\n\n`;
  }

  // Quick facts section
  const facts = [];

  if (data.currentWork) {
    facts.push(`🔭 ${data.currentWork}`);
  }

  if (data.education) {
    facts.push(`🎓 ${data.education}`);
  }

  if (data.funFact) {
    facts.push(`⚡ Fun fact: ${data.funFact}`);
  }

  if (data.email) {
    facts.push(`📫 Reach me at **${data.email}**`);
  }

  if (data.portfolio) {
    facts.push(`👨‍💻 Portfolio: [${data.portfolio}](${data.portfolio})`);
  }

  if (facts.length > 0) {
    aboutSection += `## 📋 Quick Facts\n\n`;
    facts.forEach(fact => {
      aboutSection += `- ${fact}\n`;
    });
    aboutSection += '\n';
  }

  return aboutSection;
}

function generateSkillsSection(skills: string[]): string {
  let skillsSection = '';

  skillsSection += `## 🛠️ Languages and Tools\n\n`;
  skillsSection += `<p align="left">\n`;

  skills.forEach((skillName: string, index: number) => {
    const skill = skillsData.find(s => s.name === skillName);
    if (skill) {
      skillsSection += `<a href="#" target="_blank" rel="noreferrer"> <img src="${skill.image}" alt="${skill.name}" width="40" height="40"/> </a>`;
      // Add space between icons for better row layout
      if (index < skills.length - 1) {
        skillsSection += ' ';
      }
    }
  });

  skillsSection += `\n</p>\n\n`;

  return skillsSection;
}

function generateSocialSection(data: FormDataType): string {
  const socialLinks = [
    {
      name: 'linkedin',
      url: data.linkedin,
      icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg',
      label: 'LinkedIn',
    },
    {
      name: 'twitter',
      url: data.twitter,
      icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg',
      label: 'Twitter',
    },
    {
      name: 'instagram',
      url: data.instagram,
      icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg',
      label: 'Instagram',
    },
    {
      name: 'youtube',
      url: data.youtube,
      icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg',
      label: 'YouTube',
    },
    {
      name: 'codepen',
      url: data.codepen,
      icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codepen.svg',
      label: 'CodePen',
    },
    {
      name: 'dev',
      url: data.dev,
      icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/devto.svg',
      label: 'Dev.to',
    },
    {
      name: 'medium',
      url: data.medium,
      icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg',
      label: 'Medium',
    },
    {
      name: 'facebook',
      url: data.facebook,
      icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg',
      label: 'Facebook',
    },
    {
      name: 'stackoverflow',
      url: data.stackoverflow,
      icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg',
      label: 'Stack Overflow',
    },
  ];

  const activeSocials = socialLinks.filter(
    social => social.url && social.url.trim() !== ''
  );

  if (activeSocials.length === 0) return '';

  let socialSection = '';
  socialSection += `## 🌐 Connect with me\n\n`;
  socialSection += `<p align="left">\n`;

  activeSocials.forEach(social => {
    let url = social.url;

    // Format URLs properly
    if (!url.startsWith('http')) {
      switch (social.name) {
        case 'linkedin':
          url = `https://linkedin.com/in/${url}`;
          break;
        case 'twitter':
          url = `https://twitter.com/${url}`;
          break;
        case 'instagram':
          url = `https://instagram.com/${url}`;
          break;
        case 'youtube':
          url = `https://youtube.com/c/${url}`;
          break;
        case 'codepen':
          url = `https://codepen.io/${url}`;
          break;
        case 'dev':
          url = `https://dev.to/${url}`;
          break;
        case 'medium':
          url = `https://medium.com/@${url}`;
          break;
        case 'facebook':
          url = `https://facebook.com/${url}`;
          break;
        case 'stackoverflow':
          url = `https://stackoverflow.com/users/${url}`;
          break;
      }
    }

    socialSection += `  <a href="${url}" target="blank">\n`;
    socialSection += `    <img align="center" src="${social.icon}" alt="${social.label}" height="30" width="40" />\n`;
    socialSection += `  </a>\n`;
  });

  socialSection += `</p>\n\n`;
  return socialSection;
}

function generateGitHubStatsSection(data: FormDataType): string {
  if (!data.github) return '';

  let statsSection = '';

  if (data.showStats || data.showStreak) {
    statsSection += `## 📊 GitHub Stats\n\n`;
  }

  // GitHub Stats
  if (data.github && data.showStats) {
    statsSection += `<div align="center">\n\n`;
    statsSection += `![${data.github}'s GitHub stats](https://github-readme-stats.vercel.app/api?username=${data.github}&show_icons=true&theme=default)\n\n`;
    statsSection += `![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=${data.github}&layout=compact&theme=default)\n\n`;
    statsSection += `</div>\n\n`;
  }

  // GitHub Streak
  if (data.github && data.showStreak) {
    statsSection += `<div align="center">\n\n`;
    statsSection += `![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=${data.github}&theme=default)\n\n`;
    statsSection += `</div>\n\n`;
  }

  // Contact section
  if (data.email || data.portfolio) {
    statsSection += `---\n\n`;
    statsSection += `<div align="center">\n`;

    if (data.email) {
      statsSection += `  📧 [${data.email}](mailto:${data.email}) • `;
    }

    if (data.portfolio) {
      statsSection += `🌐 [Portfolio](${data.portfolio})`;
    }

    statsSection += `\n</div>\n\n`;
    statsSection += `<div align="center">\n`;
    statsSection += `  <p>Thanks for visiting my profile! 😊</p>\n`;
    statsSection += `</div>\n`;
  }

  return statsSection;
}
