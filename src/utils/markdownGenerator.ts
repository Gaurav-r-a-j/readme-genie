import { skillsData } from '@/constans/skills';
import { FormDataType } from '@/types/readme-form';

// Template styles for different README profiles
export const templateStyles = {
  classic: 'Classic GitHub Profile',
  modern: 'Modern with GIFs and Stats',
  minimal: 'Clean and Minimal',
  creative: 'Creative with Animations',
  professional: 'Professional Corporate Style',
};

export function generateTemplateMarkdown(
  templateStyle: keyof typeof templateStyles,
  data: FormDataType
): string {
  switch (templateStyle) {
    case 'modern':
      return generateModernTemplate(data);
    case 'minimal':
      return generateMinimalTemplate(data);
    case 'creative':
      return generateCreativeTemplate(data);
    case 'professional':
      return generateProfessionalTemplate(data);
    default:
      return generateClassicTemplate(data);
  }
}

function generateModernTemplate(data: FormDataType): string {
  let markdown = '';

  // Header with animation and styling
  markdown += `<h1 align="center" style="font-family: cursive;">Hi 👋, I'm ${data.name || 'Developer'}</h1>\n`;

  if (data.title) {
    markdown += `<h3 align="center">${data.title}</h3>\n`;
  }

  // Right-aligned animated GIF
  markdown += `<img align="right" style="width:300px; border-radius:50px;" src="https://i.pinimg.com/originals/ab/68/e6/ab68e6d38452d78ac98687865281c5c8.gif" alt="Coding Animation">\n\n`;

  // Profile views and trophies
  if (data.github && data.showVisitors) {
    markdown += `<p align="left"> <img src="https://komarev.com/ghpvc/?username=${data.github}&label=Profile%20views&color=0e75b6&style=flat" alt="${data.github}" /> </p>\n\n`;
  }

  if (data.github && data.showTrophies) {
    markdown += `<p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=${data.github}" alt="${data.github}" /></a> </p>\n\n`;
  }

  // About section with bullet points
  const facts = [];
  if (data.currentWork) facts.push(`👨‍💻 ${data.currentWork}`);
  if (data.email) facts.push(`📫 How to reach me **${data.email}**`);
  if (data.portfolio)
    facts.push(`👨‍💻 All of my projects are available at ${data.portfolio}`);

  facts.forEach(fact => {
    markdown += `- ${fact}\n`;
  });
  markdown += '\n';

  // Social connections
  markdown += generateSocialSection(data);

  // Skills
  if (data.skills && data.skills.length > 0) {
    markdown += generateSkillsSection(data.skills);
  }

  // GitHub stats
  markdown += generateGitHubStatsSection(data);

  return markdown;
}

function generateMinimalTemplate(data: FormDataType): string {
  let markdown = '';

  markdown += `# ${data.name || 'Developer'}\n\n`;

  if (data.title) {
    markdown += `> ${data.title}\n\n`;
  }

  if (data.about) {
    markdown += `${data.about}\n\n`;
  }

  // Simple contact info
  if (data.email) {
    markdown += `📧 ${data.email}\n`;
  }

  if (data.portfolio) {
    markdown += `🌐 [Portfolio](${data.portfolio})\n`;
  }

  if (data.linkedin) {
    markdown += `💼 [LinkedIn](https://linkedin.com/in/${data.linkedin})\n`;
  }

  markdown += '\n';

  // Simple skills list
  if (data.skills && data.skills.length > 0) {
    markdown += `### Skills\n${data.skills.join(' • ')}\n\n`;
  }

  // Basic GitHub stats
  if (data.github && data.showStats) {
    markdown += `### GitHub Stats\n\n`;
    markdown += `![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${data.github}&show_icons=true&theme=minimal)\n\n`;
  }

  return markdown;
}

function generateCreativeTemplate(data: FormDataType): string {
  let markdown = '';

  // Creative header with emojis and styling
  markdown += `<div align="center">\n\n`;
  markdown += `# 🚀 Welcome to ${data.name || 'My'} Galaxy! 🌟\n\n`;

  if (data.title) {
    markdown += `### 💫 ${data.title} 💫\n\n`;
  }

  // Multiple animated elements
  markdown += `<img src="https://raw.githubusercontent.com/platane/snk/output/github-contribution-grid-snake.svg" alt="Snake animation" />\n\n`;

  if (data.github) {
    markdown += `<img src="https://github-readme-activity-graph.vercel.app/graph?username=${data.github}&theme=react-dark&hide_border=true" alt="Activity Graph" />\n\n`;
  }

  markdown += `</div>\n\n`;

  // Rest of the content
  markdown += generateAboutSection(data);
  markdown += generateSocialSection(data);

  if (data.skills && data.skills.length > 0) {
    markdown += generateSkillsSection(data.skills);
  }

  markdown += generateGitHubStatsSection(data);

  return markdown;
}

function generateProfessionalTemplate(data: FormDataType): string {
  let markdown = '';

  // Professional header
  markdown += `# ${data.name || 'Professional Developer'}\n\n`;

  if (data.title) {
    markdown += `## ${data.title}\n\n`;
  }

  if (data.location) {
    markdown += `📍 **Location:** ${data.location}\n`;
  }

  if (data.email) {
    markdown += `📧 **Email:** ${data.email}\n`;
  }

  if (data.portfolio) {
    markdown += `🌐 **Portfolio:** [${data.portfolio}](${data.portfolio})\n`;
  }

  markdown += '\n---\n\n';

  // About section
  if (data.about) {
    markdown += `## About\n\n${data.about}\n\n`;
  }

  // Professional experience
  if (data.currentWork) {
    markdown += `## Current Role\n\n${data.currentWork}\n\n`;
  }

  if (data.education) {
    markdown += `## Education\n\n${data.education}\n\n`;
  }

  // Technical skills in organized format
  if (data.skills && data.skills.length > 0) {
    markdown += `## Technical Skills\n\n`;
    markdown += `\`\`\`\n${data.skills.join(', ')}\n\`\`\`\n\n`;
  }

  // Professional links
  const professionalLinks = [];
  if (data.linkedin)
    professionalLinks.push(
      `[LinkedIn](https://linkedin.com/in/${data.linkedin})`
    );
  if (data.github)
    professionalLinks.push(`[GitHub](https://github.com/${data.github})`);

  if (professionalLinks.length > 0) {
    markdown += `## Connect\n\n${professionalLinks.join(' | ')}\n\n`;
  }

  return markdown;
}

function generateClassicTemplate(data: FormDataType): string {
  return generateMarkdown(data); // Use existing function as classic template
}

export function generateMarkdown(data: FormDataType): string {
  // Use template system if templateStyle is specified
  if (data.templateStyle && data.templateStyle !== 'classic') {
    return generateTemplateMarkdown(
      data.templateStyle as keyof typeof templateStyles,
      data
    );
  }

  // Original logic for classic/standard generation
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

  // Header with cursive font like your example
  header += `<h1 align="center" style="font-family: cursive;">Hi 👋, I'm ${data.name || 'Developer'}</h1>\n`;

  if (data.title) {
    header += `<h3 align="center">${data.title}</h3>\n`;
  }

  // Add animated GIF with right alignment and rounded corners
  header += `<img align="right" style="width:300px; border-radius:50px;" src="https://i.pinimg.com/originals/ab/68/e6/ab68e6d38452d78ac98687865281c5c8.gif" alt="Coding Animation">\n\n`;

  // Profile views counter
  if (data.github && data.showVisitors) {
    header += `<p align="left"> <img src="https://komarev.com/ghpvc/?username=${data.github}&label=Profile%20views&color=0e75b6&style=flat" alt="${data.github}" /> </p>\n\n`;
  }

  // GitHub trophy
  if (data.github && data.showTrophies) {
    header += `<p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=${data.github}" alt="${data.github}" /></a> </p>\n\n`;
  }

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

  // Quick facts section with bullet points
  const facts = [];

  if (data.currentWork) {
    facts.push(`�‍💻 ${data.currentWork}`);
  }

  if (data.education) {
    facts.push(`🎓 ${data.education}`);
  }

  if (data.email) {
    facts.push(`📫 How to reach me **${data.email}**`);
  }

  if (data.portfolio) {
    facts.push(`👨‍� All of my projects are available at ${data.portfolio}`);
  }

  if (data.funFact) {
    facts.push(`⚡ Fun fact: ${data.funFact}`);
  }

  if (facts.length > 0) {
    facts.forEach(fact => {
      aboutSection += `- ${fact}\n`;
    });
    aboutSection += '\n';
  }

  // Main about section
  if (data.about) {
    aboutSection += `${data.about}\n\n`;
  }

  return aboutSection;
}

function generateSkillsSection(skills: string[]): string {
  let skillsSection = '';

  skillsSection += `<h3 align="left">Languages and Tools:</h3>\n`;
  skillsSection += `<p align="left"> `;

  skills.forEach((skillName: string) => {
    const skill = skillsData.find(s => s.name === skillName);
    if (skill) {
      skillsSection += `<a href="#" target="_blank" rel="noreferrer"> <img src="${skill.image}" alt="${skill.name}" width="40" height="40"/> </a> `;
    }
  });

  skillsSection += `</p>\n\n`;

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
  socialSection += `<h3 align="left">Connect with me:</h3>\n`;
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

    socialSection += `<a href="${url}" target="blank"><img align="center" src="${social.icon}" alt="${social.label}" height="30" width="40" /></a>\n`;
  });

  socialSection += `</p>\n\n`;
  return socialSection;
}

function generateGitHubStatsSection(data: FormDataType): string {
  if (!data.github) return '';

  let statsSection = '';

  // GitHub Stats - similar to your profile layout
  if (data.github && data.showStats) {
    // Top Languages (left aligned)
    statsSection += `<p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=${data.github}&show_icons=true&locale=en&layout=compact" alt="${data.github}" /></p>\n\n`;

    // GitHub Stats (center aligned)
    statsSection += `<p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=${data.github}&show_icons=true&locale=en" alt="${data.github}" /></p>\n\n`;
  }

  // GitHub Streak (center aligned)
  if (data.github && data.showStreak) {
    statsSection += `<p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=${data.github}&" alt="${data.github}" /></p>\n\n`;
  }

  return statsSection;
}
