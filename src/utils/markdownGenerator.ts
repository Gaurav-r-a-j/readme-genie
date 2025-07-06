import { skillsData } from '@/constans/skills';
import { FormDataType } from '@/types/readme-form';

export function generateMarkdown(data: FormDataType): string {
  let markdown = '';

  // Title/Header based on layout style
  if (data.layoutStyle === 'creative') {
    markdown += `<div align="center">\n`;
    markdown += `<img src="https://readme-typing-svg.demolab.com?font=Architects+Daughter&color=${encodeURIComponent(data.bannerColor.substring(1))}&size=30&center=true&vCenter=true&width=600&height=60&lines=Hi+there!+I'm+${data.name || 'Developer'}+%F0%9F%91%8B;${data.title || ''}"/>\n`;

    if (data.github) {
      markdown += `<img src="https://img.shields.io/github/followers/${data.github}?style=social" alt="GitHub followers" />\n`;
    }

    markdown += `</div>\n\n`;

    if (data.about) {
      markdown += `<div align="center">\n`;
      markdown += `${data.about}\n`;
      markdown += `</div>\n\n`;
    }
  } else if (data.layoutStyle === 'compact') {
    markdown += `# 👋 Hi, I'm ${data.name || 'Developer'}\n`;
    if (data.title) {
      markdown += `### ${data.title}\n`;
    }
    markdown += '\n';

    if (data.about) {
      markdown += `${data.about}\n\n`;
    }
  } else {
    // Standard layout
    markdown += `# Hi there 👋, I'm ${data.name || 'Developer'}\n`;
    if (data.title) {
      markdown += `## ${data.title}\n`;
    }
    markdown += '\n';

    if (data.about) {
      markdown += `${data.about}\n\n`;
    }
  }

  // Quick info section
  const hasQuickInfo =
    data.currentWork || data.location || data.portfolio || data.funFact;

  if (hasQuickInfo) {
    if (data.layoutStyle === 'creative') {
      markdown += `## 🚀 Quick Facts\n\n`;
    }

    if (data.currentWork) {
      markdown += `🔭 I'm currently working on **${data.currentWork}**\n\n`;
    }

    if (data.location) {
      markdown += `🌍 I'm based in ${data.location}\n\n`;
    }

    if (data.portfolio) {
      markdown += `🌐 See my portfolio at [${data.portfolio.replace(/^https?:\/\//, '')}](${data.portfolio})\n\n`;
    }

    if (data.funFact) {
      markdown += `⚡ Fun fact: ${data.funFact}\n\n`;
    }

    if (data.education) {
      markdown += `🎓 ${data.education}\n\n`;
    }
  }

  // Skills with icons
  if (data.skills && data.skills.length > 0) {
    if (data.layoutStyle === 'creative') {
      markdown += `## 💻 Skills & Technologies\n\n`;
      markdown += `<div align="center">\n\n`;

      data.skills.forEach((skillName: string) => {
        const skill = skillsData.find(s => s.name === skillName);
        if (skill) {
          markdown += `<a href="#" title="${skill.name}"><img src="${skill.image}" alt="${skill.name}" width="40" height="40" style="margin:0 10px 10px 0;"/></a>`;
        }
      });

      markdown += `\n</div>\n\n`;
    } else if (data.layoutStyle === 'compact') {
      markdown += `## Skills\n\n`;
      markdown += `<p align="left">\n`;

      data.skills.forEach((skillName: string) => {
        const skill = skillsData.find(s => s.name === skillName);
        if (skill) {
          markdown += `<a href="#" title="${skill.name}"><img src="${skill.image}" alt="${skill.name}" width="36" height="36" style="margin:0 5px 5px 0;"/></a>`;
        }
      });

      markdown += `\n</p>\n\n`;
    } else {
      // Standard layout
      markdown += `## Skills\n\n`;

      // Group skills by category
      const skillsByCategory: { [key: string]: string[] } = {};

      data.skills.forEach((skillName: string) => {
        const skill = skillsData.find(s => s.name === skillName);
        if (skill) {
          if (!skillsByCategory[skill.category]) {
            skillsByCategory[skill.category] = [];
          }
          skillsByCategory[skill.category].push(skillName);
        }
      });

      Object.entries(skillsByCategory).forEach(([category, skills]) => {
        markdown += `### ${category}\n\n`;
        markdown += `<p align="left">\n`;

        skills.forEach(skillName => {
          const skill = skillsData.find(s => s.name === skillName);
          if (skill) {
            markdown += `<a href="#" title="${skill.name}"><img src="${skill.image}" alt="${skill.name}" width="36" height="36" style="margin:0 5px 5px 0;"/></a>`;
          }
        });

        markdown += `\n</p>\n\n`;
      });
    }
  }

  // Socials
  const hasSocials =
    data.github ||
    data.twitter ||
    data.linkedin ||
    data.email ||
    data.instagram ||
    data.facebook ||
    data.codepen ||
    data.dribbble ||
    data.dev ||
    data.medium ||
    data.stackoverflow ||
    data.youtube;

  if (hasSocials) {
    if (data.layoutStyle === 'creative') {
      markdown += `## 🌐 Connect With Me\n\n`;
      markdown += `<div align="center">\n`;
    } else {
      markdown += `## Connect With Me\n\n`;
      markdown += `<p align="left">\n`;
    }

    if (data.layoutStyle === 'creative') {
      if (data.github) {
        markdown += `<a href="https://github.com/${data.github}" target="_blank">
<img src="https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white" alt="github" style="margin-bottom: 5px;" />
</a>\n`;
      }

      if (data.twitter) {
        const twitterUsername = data.twitter.startsWith('@')
          ? data.twitter.substring(1)
          : data.twitter;
        markdown += `<a href="https://twitter.com/${twitterUsername}" target="_blank">
<img src="https://img.shields.io/badge/twitter-%2300acee.svg?&style=for-the-badge&logo=twitter&logoColor=white" alt="twitter" style="margin-bottom: 5px;" />
</a>\n`;
      }

      if (data.linkedin) {
        markdown += `<a href="https://linkedin.com/in/${data.linkedin}" target="_blank">
<img src="https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin" style="margin-bottom: 5px;" />
</a>\n`;
      }

      if (data.instagram) {
        markdown += `<a href="https://instagram.com/${data.instagram}" target="_blank">
<img src="https://img.shields.io/badge/instagram-%23E4405F.svg?&style=for-the-badge&logo=instagram&logoColor=white" alt="instagram" style="margin-bottom: 5px;" />
</a>\n`;
      }

      if (data.facebook) {
        markdown += `<a href="https://facebook.com/${data.facebook}" target="_blank">
<img src="https://img.shields.io/badge/facebook-%231877F2.svg?&style=for-the-badge&logo=facebook&logoColor=white" alt="facebook" style="margin-bottom: 5px;" />
</a>\n`;
      }

      if (data.codepen) {
        markdown += `<a href="https://codepen.io/${data.codepen}" target="_blank">
<img src="https://img.shields.io/badge/codepen-%23000000.svg?&style=for-the-badge&logo=codepen&logoColor=white" alt="codepen" style="margin-bottom: 5px;" />
</a>\n`;
      }

      if (data.dribbble) {
        markdown += `<a href="https://dribbble.com/${data.dribbble}" target="_blank">
<img src="https://img.shields.io/badge/dribbble-%23EA4C89.svg?&style=for-the-badge&logo=dribbble&logoColor=white" alt="dribbble" style="margin-bottom: 5px;" />
</a>\n`;
      }

      if (data.dev) {
        markdown += `<a href="https://dev.to/${data.dev}" target="_blank">
<img src="https://img.shields.io/badge/dev.to-%230A0A0A.svg?&style=for-the-badge&logo=dev.to&logoColor=white" alt="dev.to" style="margin-bottom: 5px;" />
</a>\n`;
      }

      if (data.medium) {
        markdown += `<a href="https://medium.com/@${data.medium}" target="_blank">
<img src="https://img.shields.io/badge/medium-%2312100E.svg?&style=for-the-badge&logo=medium&logoColor=white" alt="medium" style="margin-bottom: 5px;" />
</a>\n`;
      }

      if (data.stackoverflow) {
        markdown += `<a href="https://stackoverflow.com/users/${data.stackoverflow}" target="_blank">
<img src="https://img.shields.io/badge/stackoverflow-%23F48024.svg?&style=for-the-badge&logo=stackoverflow&logoColor=white" alt="stackoverflow" style="margin-bottom: 5px;" />
</a>\n`;
      }

      if (data.youtube) {
        markdown += `<a href="https://youtube.com/${data.youtube}" target="_blank">
<img src="https://img.shields.io/badge/youtube-%23FF0000.svg?&style=for-the-badge&logo=youtube&logoColor=white" alt="youtube" style="margin-bottom: 5px;" />
</a>\n`;
      }

      if (data.email) {
        markdown += `<a href="mailto:${data.email}" target="_blank">
<img src="https://img.shields.io/badge/email-%23000000.svg?&style=for-the-badge&logo=gmail&logoColor=white" alt="email" style="margin-bottom: 5px;" />
</a>\n`;
      }

      markdown += `</div>\n\n`;
    } else {
      // Standard or compact layout with icons
      const socialIcons: { [key: string]: string } = {
        github:
          'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg',
        twitter:
          'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg',
        linkedin:
          'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg',
        instagram:
          'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg',
        facebook:
          'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg',
        youtube:
          'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg',
        codepen:
          'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codepen.svg',
        stackoverflow:
          'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg',
        dribbble:
          'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/dribbble.svg',
        dev: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/devto.svg',
        medium:
          'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg',
      };

      if (data.github) {
        markdown += `<a href="https://github.com/${data.github}" target="_blank">
<img align="center" src="${socialIcons.github}" alt="github" height="30" width="40" />
</a>\n`;
      }

      if (data.twitter) {
        const twitterUsername = data.twitter.startsWith('@')
          ? data.twitter.substring(1)
          : data.twitter;
        markdown += `<a href="https://twitter.com/${twitterUsername}" target="_blank">
<img align="center" src="${socialIcons.twitter}" alt="twitter" height="30" width="40" />
</a>\n`;
      }

      if (data.linkedin) {
        markdown += `<a href="https://linkedin.com/in/${data.linkedin}" target="_blank">
<img align="center" src="${socialIcons.linkedin}" alt="linkedin" height="30" width="40" />
</a>\n`;
      }

      if (data.instagram) {
        markdown += `<a href="https://instagram.com/${data.instagram}" target="_blank">
<img align="center" src="${socialIcons.instagram}" alt="instagram" height="30" width="40" />
</a>\n`;
      }

      if (data.facebook) {
        markdown += `<a href="https://facebook.com/${data.facebook}" target="_blank">
<img align="center" src="${socialIcons.facebook}" alt="facebook" height="30" width="40" />
</a>\n`;
      }

      if (data.codepen) {
        markdown += `<a href="https://codepen.io/${data.codepen}" target="_blank">
<img align="center" src="${socialIcons.codepen}" alt="codepen" height="30" width="40" />
</a>\n`;
      }

      if (data.dribbble) {
        markdown += `<a href="https://dribbble.com/${data.dribbble}" target="_blank">
<img align="center" src="${socialIcons.dribbble}" alt="dribbble" height="30" width="40" />
</a>\n`;
      }

      if (data.stackoverflow) {
        markdown += `<a href="https://stackoverflow.com/users/${data.stackoverflow}" target="_blank">
<img align="center" src="${socialIcons.stackoverflow}" alt="stackoverflow" height="30" width="40" />
</a>\n`;
      }

      if (data.youtube) {
        markdown += `<a href="https://youtube.com/${data.youtube}" target="_blank">
<img align="center" src="${socialIcons.youtube}" alt="youtube" height="30" width="40" />
</a>\n`;
      }

      if (data.dev) {
        markdown += `<a href="https://dev.to/${data.dev}" target="_blank">
<img align="center" src="${socialIcons.dev}" alt="dev.to" height="30" width="40" />
</a>\n`;
      }

      if (data.medium) {
        markdown += `<a href="https://medium.com/@${data.medium}" target="_blank">
<img align="center" src="${socialIcons.medium}" alt="medium" height="30" width="40" />
</a>\n`;
      }

      if (data.email) {
        markdown += `<a href="mailto:${data.email}" target="_blank">
<img align="center" src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="email" height="30" />
</a>\n`;
      }

      markdown += `</p>\n\n`;
    }
  }

  // GitHub stats & trophies
  if ((data.showStats || data.showTrophies || data.showStreak) && data.github) {
    if (data.layoutStyle === 'creative') {
      markdown += `## 📊 GitHub Stats\n\n`;

      if (data.showTrophies) {
        markdown += `<div align="center">\n`;
        markdown += `<img src="https://github-profile-trophy.vercel.app/?username=${data.github}&theme=${data.darkMode ? 'onedark' : 'flat'}&column=7&margin-w=10" alt="github trophies" />\n`;
        markdown += `</div>\n\n`;
      }

      if (data.showStats) {
        markdown += `<div align="center">\n`;
        markdown += `<img src="https://github-readme-stats.vercel.app/api?username=${data.github}&show_icons=true&count_private=true&hide_border=true&title_color=${encodeURIComponent(data.bannerColor)}&icon_color=${encodeURIComponent(data.bannerColor)}&text_color=c9d1d9&bg_color=${data.darkMode ? '0d1117' : 'ffffff'}" align="center" style="width: 100%" />\n`;
        markdown += `</div>\n\n`;
      }

      if (data.showStreak) {
        markdown += `<div align="center">\n`;
        markdown += `<img src="https://github-readme-streak-stats.herokuapp.com/?user=${data.github}&stroke=c9d1d9&background=${data.darkMode ? '0d1117' : 'ffffff'}&ring=${encodeURIComponent(data.bannerColor.substring(1))}&fire=${encodeURIComponent(data.bannerColor.substring(1))}&currStreakNum=c9d1d9&currStreakLabel=c9d1d9&sideNums=c9d1d9&sideLabels=c9d1d9&dates=c9d1d9&hide_border=true" align="center" style="width: 100%" />\n`;
        markdown += `</div>\n\n`;
      }

      if (data.showStats) {
        markdown += `<div align="center">\n`;
        markdown += `<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${data.github}&hide_border=true&layout=compact&title_color=${encodeURIComponent(data.bannerColor)}&text_color=c9d1d9&bg_color=${data.darkMode ? '0d1117' : 'ffffff'}" align="center" style="width: 100%" />\n`;
        markdown += `</div>\n\n`;
      }
    } else {
      // Standard or compact layout
      const theme = data.darkMode ? 'radical' : 'default';

      markdown += `## GitHub Stats\n\n`;

      if (data.showTrophies) {
        markdown += `<div align="center">\n`;
        markdown += `<img src="https://github-profile-trophy.vercel.app/?username=${data.github}&theme=${data.darkMode ? 'onedark' : 'flat'}&column=7&margin-w=10" alt="github trophies" />\n`;
        markdown += `</div>\n\n`;
      }

      if (data.layoutStyle === 'compact') {
        if (data.showStats && data.showStreak) {
          markdown += `<div align="center">\n`;
          markdown += `<img src="https://github-readme-stats.vercel.app/api?username=${data.github}&show_icons=true&count_private=true&hide_border=true&theme=${theme}" width="48%" align="center" />\n`;
          markdown += `<img src="https://github-readme-streak-stats.herokuapp.com/?user=${data.github}&theme=${theme}&hide_border=true" width="48%" align="center" />\n`;
          markdown += `</div>\n\n`;

          if (data.showStats) {
            markdown += `<div align="center">\n`;
            markdown += `<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${data.github}&hide_border=true&layout=compact&theme=${theme}" align="center" />\n`;
            markdown += `</div>\n\n`;
          }
        } else {
          if (data.showStats) {
            markdown += `<div align="center">\n`;
            markdown += `<img src="https://github-readme-stats.vercel.app/api?username=${data.github}&show_icons=true&count_private=true&hide_border=true&theme=${theme}" align="center" />\n`;
            markdown += `</div>\n\n`;

            markdown += `<div align="center">\n`;
            markdown += `<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${data.github}&hide_border=true&layout=compact&theme=${theme}" align="center" />\n`;
            markdown += `</div>\n\n`;
          }

          if (data.showStreak) {
            markdown += `<div align="center">\n`;
            markdown += `<img src="https://github-readme-streak-stats.herokuapp.com/?user=${data.github}&theme=${theme}&hide_border=true" align="center" />\n`;
            markdown += `</div>\n\n`;
          }
        }
      } else {
        // Standard
        if (data.showStats) {
          markdown += `<div align="center">\n`;
          markdown += `<img src="https://github-readme-stats.vercel.app/api?username=${data.github}&show_icons=true&count_private=true&hide_border=true&theme=${theme}" align="center" />\n`;
          markdown += `</div>\n\n`;
        }

        if (data.showStreak) {
          markdown += `<div align="center">\n`;
          markdown += `<img src="https://github-readme-streak-stats.herokuapp.com/?user=${data.github}&theme=${theme}&hide_border=true" align="center" />\n`;
          markdown += `</div>\n\n`;
        }

        if (data.showStats) {
          markdown += `<div align="center">\n`;
          markdown += `<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${data.github}&hide_border=true&layout=compact&theme=${theme}" align="center" />\n`;
          markdown += `</div>\n\n`;
        }
      }
    }
  }

  // Profile visitors
  if (data.showVisitors && data.github) {
    if (data.layoutStyle === 'creative') {
      markdown += `## 👀 Visitors\n\n`;
      markdown += `<div align="center">\n`;
      markdown += `<img src="https://profile-counter.glitch.me/${data.github}/count.svg" align="center" />\n`;
      markdown += `</div>\n\n`;
    } else {
      markdown += `## Visitors\n\n`;
      markdown += `<div align="center">\n`;
      markdown += `<img src="https://profile-counter.glitch.me/${data.github}/count.svg" align="center" />\n`;
      markdown += `</div>\n\n`;
    }
  }

  // Support buttons (Buy Me a Coffee / Ko-fi)
  if (data.buymeacoffee || data.kofi) {
    markdown += `## Support Me\n\n`;
    markdown += `<div align="center">\n`;

    if (data.buymeacoffee) {
      markdown += `<a href="https://www.buymeacoffee.com/${data.buymeacoffee}" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>\n`;
    }

    if (data.kofi) {
      markdown += `<a href="https://ko-fi.com/${data.kofi}" target="_blank"><img src="https://storage.ko-fi.com/cdn/kofi2.png?v=3" alt="Ko-fi" style="height: 50px !important;width: 200px !important;" ></a>\n`;
    }

    markdown += `</div>\n\n`;
  }

  // Add a footer note if using creative layout
  if (data.layoutStyle === 'creative') {
    markdown += `---\n\n`;
    markdown += `<div align="center">Thanks for visiting my profile! Don't forget to star your favorite repositories!</div>\n`;

    // Add animated wave
    markdown += `\n<img src="https://raw.githubusercontent.com/trinib/trinib/82213791fa9ff58d3ca768ddd6de2489ec23ffca/images/footer.svg" width="100%">\n`;
  }

  return markdown;
}
