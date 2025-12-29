import jsPDF from 'jspdf';
import logoImage from '../assets/images/imagelogo.png';

// Define resume data structure
interface ResumeData {
  name: string;
  title: string;
  contact: {
    phone: string;
    email: string;
    location: string;
    website: string;
  };
  profile: string;
  projects: Array<{
    title: string;
    link: string;
  }>;
  skills: string[];
  experience: Array<{
    role: string;
    company: string;
    period: string;
    description: string[];
  }>;
}

export const generatePDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Layout constants
  const margin = 15;
  const leftColumnWidth = 65;
  const rightColumnX = margin + leftColumnWidth + 8;
  const rightColumnWidth = pageWidth - rightColumnX - margin;
  
  // Colors
  const darkColor: [number, number, number] = [30, 30, 30];
  const grayColor: [number, number, number] = [100, 100, 100];
  const accentColor: [number, number, number] = [37, 99, 235];

  // Profile sections
  const profileIntro = 'My name is Amir Hosein Safari. I began my programming career in 2020 by learning JavaScript, React, and TypeScript, and later expanded my expertise to include Angular, Kotlin, and React Native. Early in my professional journey, I joined the Braingomo team as a Frontend Developer, where I contributed to the design and implementation of their website. Following that, I collaborated with the same team on developing the Virgobit website and related exhibition platforms.';
  
  const profileCareerGrowth = 'In 2023, I joined the Asa division at Agah Brokerage Company as a Frontend Developer, where my professional growth accelerated significantly. During this time, I also designed and developed several personal websites, mobile applications, and collaborative team projects.';
  
  const profileSkillAdvancement = 'To advance my skills as a Frontend and Mobile Developer aiming toward a senior level, I focused on learning various libraries, packages, and testing methodologies within these fields. Later, I became interested in backend development, particularly in Python and Node.js, and began actively learning and practicing them to broaden my technical capabilities.';

  // Resume Data
  const resumeData: ResumeData = {
    name: 'AMIR HOSEIN SAFARI',
    title: 'Full Stack Developer',
    contact: {
      phone: '+98 912 311 9976',
      email: 'amirhoseinsafari42@gmail.com',
      location: 'Tehran, Iran',
      website: 'github.com/Amirhosein-st'
    },
    profile: `${profileIntro}\n\n ${profileCareerGrowth}\n\n ${profileSkillAdvancement}`,
    projects: [
      {
        title: 'Braingomo',
        link: 'https://braingomo.com/home'
      },
      {
        title: 'Virgobit',
        link: 'https://virgobit.com/'
      },
      {
        title: 'Booth Virgobit',
        link: 'https://virgobit.com/digitalbooth.html'
      },
      {
        title: 'Mobile App (Spotify Clone)',
        link: ''
      },
      {
        title: 'Karyar Panel',
        link: ''
      },
      {
        title: 'Personal Website (Shahab)',
        link: ''
      },
      {
        title: 'Library Website',
        link: ''
      }
    ],
    skills: [
      'JavaScript & TypeScript',
      'React & React Native',
      'Angular Framework',
      'Node.js & Python',
      'Tailwind & Bootstrap CSS',
      'Git & CI/CD',
      'UI/UX Design',
      'Problem-solving skills',
      'Team collaboration',
      'Agile methodologies'
    ],
    experience: [
      {
        role: 'Frontend Developer',
        company: 'Agah Group Company (ASA)',
        period: '2023 - Present',
        description: [
          'Developed and maintained complex web applications',
          'Built monitoring panels to display backend errors and analytics',
          'Created comprehensive trading panels with real-time data',
          'Collaborated with cross-functional teams for product delivery',
          'Implemented responsive designs and optimized performance',
          'Participated in code reviews and mentored junior developers'
        ]
      },
      {
        role: 'Frontend Developer',
        company: 'BrainGomo Team (Germany)',
        period: '2021 - Present',
        description: [
          'Designed and developed BrainGomo.com platform',
          'Built and maintained Virgobit.com cryptocurrency exchange',
          'Created interactive digital booth exhibition websites',
          'Implemented modern UI/UX designs using Angular and React',
          'Worked remotely with international team members',
          'Managed client communications and project deliverables'
        ]
      },
      {
        role: 'Teaching Assistant & Instructor',
        company: 'Karyar',
        period: '2021 - 2024',
        description: [
          'Taught web development courses (HTML, CSS, JavaScript, React)',
          'Provided one-on-one mentorship to students',
          'Developed course materials and coding exercises',
          'Assisted students in debugging and problem-solving',
          'Evaluated student projects and provided constructive feedback'
        ]
      }
    ]
  };

  // Helper function to add section title (left column style)
  const addLeftSectionTitle = (title: string, y: number) => {
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...darkColor);
    doc.text(title.toUpperCase(), margin, y, { align: 'left', charSpace: 0.5 });
    doc.setLineWidth(0.5);
    doc.setDrawColor(...darkColor);
    doc.line(margin, y + 1.5, margin + leftColumnWidth, y + 1.5);
    return y + 7;
  };

  // Helper function to add section title (right column style)
  const addRightSectionTitle = (title: string, y: number) => {
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...darkColor);
    doc.text(title.toUpperCase(), rightColumnX, y, { align: 'left', charSpace: 0.5 });
    doc.setLineWidth(0.5);
    doc.setDrawColor(...darkColor);
    doc.line(rightColumnX, y + 1.5, pageWidth - margin, y + 1.5);
    return y + 7;
  };

  // ===== HEADER =====
  let leftY = margin;
  let rightY = margin;
  
  // Name
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...darkColor);
  doc.text(resumeData.name, margin, leftY, { align: 'left', charSpace: 0.3 });
  leftY += 7;
  
  // Title
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...grayColor);
  doc.text(resumeData.title, margin, leftY, { align: 'left', charSpace: 0 });
  leftY += 10;
  rightY = leftY;

  // ===== LEFT COLUMN =====
  
  // Add circular logo image above CONTACT
  const imageSize = 60; // Diameter of circular image
  const imageX = margin + (leftColumnWidth - imageSize) / 2; // Center in left column
  const imageY = leftY;
  
  const centerX = imageX + imageSize / 2;
  const centerY = imageY + imageSize / 2;
  const radius = imageSize / 2;
  
  // Save graphics state and create circular clipping path
  doc.saveGraphicsState();
  
  // Set clipping path for circular mask (smaller to leave room for borders)
  const clipRadius = radius - 3.5;
  doc.circle(centerX, centerY, clipRadius, 'S');
  
  // Add the image within the circular clipping path
  doc.addImage(logoImage, 'PNG', imageX, imageY, imageSize, imageSize);
  doc.restoreGraphicsState();
  
  // Draw thick white border (middle ring)
  doc.setDrawColor(255, 255, 255);
  doc.setLineWidth(3);
  doc.circle(centerX, centerY, radius - 2, 'S');
  
  // Draw dark outer ring
  doc.setDrawColor(75, 85, 99);
  doc.setLineWidth(1.5);
  doc.circle(centerX, centerY, radius - 0.75, 'S');
  
  leftY += imageSize + 8; // Add spacing after image
  
  // CONTACT
  leftY = addLeftSectionTitle('CONTACT', leftY);
  doc.setFontSize(9.5);
  doc.setFont('helvetica', 'normal');
  
  // Phone (clickable)
  doc.setTextColor(...accentColor);
  doc.text(resumeData.contact.phone, margin, leftY, { align: 'left', charSpace: 0 });
  const phoneWidth = doc.getTextWidth(resumeData.contact.phone);
  doc.link(margin, leftY - 3, phoneWidth, 4, { url: `tel:${resumeData.contact.phone.replace(/\s/g, '')}` });
  leftY += 5.5;
  
  // Email (clickable)
  doc.setTextColor(...accentColor);
  const emailLines = doc.splitTextToSize(resumeData.contact.email, leftColumnWidth);
  doc.text(emailLines, margin, leftY, { align: 'left', maxWidth: leftColumnWidth, charSpace: 0 });
  const emailWidth = doc.getTextWidth(resumeData.contact.email);
  doc.link(margin, leftY - 3, emailWidth, 4, { url: `mailto:${resumeData.contact.email}` });
  leftY += emailLines.length * 5.5;
  
  // Location (not clickable)
  doc.setTextColor(...darkColor);
  doc.text(resumeData.contact.location, margin, leftY, { align: 'left', charSpace: 0 });
  leftY += 5.5;
  
  // Website (clickable)
  doc.setTextColor(...accentColor);
  doc.text(resumeData.contact.website, margin, leftY, { align: 'left', charSpace: 0 });
  const websiteWidth = doc.getTextWidth(resumeData.contact.website);
  doc.link(margin, leftY - 3, websiteWidth, 4, { url: `https://${resumeData.contact.website}` });
  leftY += 10;

  // PROJECTS
  leftY = addLeftSectionTitle('PROJECTS', leftY);
  doc.setFontSize(9.5);
  doc.setFont('helvetica', 'normal');
  
  resumeData.projects.forEach((project) => {
    // Set color based on whether project has a link
    if (project.link) {
      doc.setTextColor(...accentColor); // Blue color for links
    } else {
      doc.setTextColor(...darkColor); // Normal color for projects without links
    }
    
    doc.text('•', margin, leftY, { align: 'left', charSpace: 0 });
    const projectLines = doc.splitTextToSize(project.title, leftColumnWidth - 5);
    doc.text(projectLines, margin + 4, leftY, { align: 'left', maxWidth: leftColumnWidth - 5, charSpace: 0 });
    
    // Add clickable link only if link exists
    if (project.link) {
      const textWidth = doc.getTextWidth(project.title);
      doc.link(margin + 4, leftY - 3, textWidth, 4, { url: project.link });
    }
    
    leftY += projectLines.length * 4.5 + 1;
  });
  leftY += 5;

  // SKILLS
  leftY = addLeftSectionTitle('SKILLS', leftY);
  doc.setFontSize(9.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...darkColor);
  
  resumeData.skills.forEach((skill) => {
    doc.text('•', margin, leftY, { align: 'left', charSpace: 0 });
    const skillLines = doc.splitTextToSize(skill, leftColumnWidth - 5);
    doc.text(skillLines, margin + 4, leftY, { align: 'left', maxWidth: leftColumnWidth - 5, charSpace: 0 });
    leftY += skillLines.length * 4.5 + 1;
  });

  // ===== RIGHT COLUMN =====
  
  // ABOUT ME
  rightY = addRightSectionTitle('ABOUT ME', rightY);
  doc.setFontSize(9.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...darkColor);
  
  // Split profile into paragraphs
  const profileParagraphs = resumeData.profile.split('\n\n');
  profileParagraphs.forEach((paragraph, index) => {
    const profileLines = doc.splitTextToSize(paragraph, rightColumnWidth);
    doc.text(profileLines, rightColumnX, rightY, { align: 'left', maxWidth: rightColumnWidth, charSpace: 0 });
    rightY += profileLines.length * 4.5 + (index < profileParagraphs.length - 1 ? 4 : 8);
  });

  // WORK EXPERIENCE
  rightY = addRightSectionTitle('WORK EXPERIENCE', rightY);
  
  resumeData.experience.forEach((exp) => {
    // Role (bold)
    doc.setFontSize(10.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...darkColor);
    doc.text(exp.role, rightColumnX, rightY, { align: 'left', charSpace: 0 });
    rightY += 4.5;
    
    // Company and Period
    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(...grayColor);
    doc.text(`${exp.company} | ${exp.period}`, rightColumnX, rightY, { align: 'left', charSpace: 0 });
    rightY += 5.5;
    
    // Description bullets
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...darkColor);
    doc.setFontSize(9.5);
    
    exp.description.forEach((item) => {
      doc.text('•', rightColumnX, rightY, { align: 'left', charSpace: 0 });
      const lines = doc.splitTextToSize(item, rightColumnWidth - 5);
      doc.text(lines, rightColumnX + 4, rightY, { align: 'left', maxWidth: rightColumnWidth - 5, charSpace: 0 });
      rightY += lines.length * 4.5 + 0.5;
    });
    
    rightY += 4;
  });

  // Save the PDF
  doc.save('Amir_Hosein_Safari_CV.pdf');
};

