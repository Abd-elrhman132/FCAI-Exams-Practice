import { Subject } from "@/types";

const chapters = [
  {
    "id": "hu121-chapter-1",
    "name": "Chapter 1: Computer Crime and Cybersecurity",
    "description": "Computer crime, insider threats, software bugs, passwords, firewalls, honeypots, and safe online behavior.",
    "questions": [
      {
        "id": "hu121-ch1-q1",
        "text": "What is computer crime?",
        "options": [
          "Repairing a computer",
          "Using a computer for illegal ends",
          "Upgrading software",
          "Buying hardware"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch1-q2",
        "text": "Which of the following is a legal consequence of computer crime?",
        "options": [
          "Anxiety",
          "Fines and lawsuits",
          "Depression",
          "Loss of friends"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch1-q3",
        "text": "The \"SKRAM\" model by Donn Parker explains which type of threat?",
        "options": [
          "The Insider Threat",
          "External Hackers",
          "Hardware Failure",
          "Natural Disasters"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch1-q4",
        "text": "What does the \"S\" in SKRAM stand for?",
        "options": [
          "Security",
          "Skills",
          "Software",
          "System"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch1-q5",
        "text": "Which is a limitation of international coordination against cybercrime?",
        "options": [
          "Too many laws",
          "Lack of trust among countries",
          "Fast internet",
          "Cheap computers"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch1-q6",
        "text": "How many bugs are estimated to be in 100 lines of production code?",
        "options": [
          "1",
          "10",
          "50",
          "100"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch1-q7",
        "text": "The risk of a software bug is calculated by its probability multiplied by its:",
        "options": [
          "Size",
          "Cost",
          "Impact",
          "Color"
        ],
        "correctIndex": 2
      },
      {
        "id": "hu121-ch1-q8",
        "text": "Which of the following is a type of software bug?",
        "options": [
          "Mouse bug",
          "Screen bug",
          "Syntax bug",
          "Keyboard bug"
        ],
        "correctIndex": 2
      },
      {
        "id": "hu121-ch1-q9",
        "text": "What is a full-service internet security suite used for?",
        "options": [
          "Graphic design",
          "Comprehensive protection for devices",
          "Typing documents",
          "Playing games"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch1-q10",
        "text": "Keeping software updated helps to:",
        "options": [
          "Make the computer heavier",
          "Prevent or fix vulnerabilities",
          "Reduce battery life",
          "Change the screen color"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch1-q11",
        "text": "What is usually your computer's first line of defense?",
        "options": [
          "Anti-spyware",
          "Firewall",
          "Keyboard",
          "Monitor"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch1-q12",
        "text": "How long should a good password be?",
        "options": [
          "1-3 characters",
          "4-6 characters",
          "8-10 characters",
          "12-14 characters"
        ],
        "correctIndex": 3
      },
      {
        "id": "hu121-ch1-q13",
        "text": "What should you avoid using in a password?",
        "options": [
          "Uppercase letters",
          "Numbers",
          "Personal information like your birthdate",
          "Symbols"
        ],
        "correctIndex": 2
      },
      {
        "id": "hu121-ch1-q14",
        "text": "What is a passphrase?",
        "options": [
          "A single short word",
          "A string of seemingly random words",
          "A 4-digit PIN",
          "A blank password"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch1-q15",
        "text": "What tool can help you securely store and manage your passwords?",
        "options": [
          "A word processor",
          "A password manager",
          "A spreadsheet",
          "A social media account"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch1-q16",
        "text": "BugTraq is best described as:",
        "options": [
          "A mailing list reporting software vulnerabilities",
          "An anti-virus software",
          "A hardware firewall",
          "A video game"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch1-q17",
        "text": "What are honeypots used for in cybersecurity?",
        "options": [
          "Storing passwords",
          "Decoy systems to monitor illicit activity",
          "Sending emails",
          "Creating websites"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch1-q18",
        "text": "Are honeypots hardware-based or virtual?",
        "options": [
          "Only hardware-based",
          "Only virtual",
          "They can be either virtual or hardware-based",
          "Neither"
        ],
        "correctIndex": 2
      },
      {
        "id": "hu121-ch1-q19",
        "text": "How should you manage your social media settings to stay safe?",
        "options": [
          "Make profiles public",
          "Share all personal data",
          "Set profiles to private",
          "Never use passwords"
        ],
        "correctIndex": 2
      },
      {
        "id": "hu121-ch1-q20",
        "text": "Which software prevents viruses from infecting your computer?",
        "options": [
          "Word processor",
          "Anti-virus software",
          "Presentation software",
          "Media player"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch1-q21",
        "text": "Cybercrime can cause psychological impacts like stress and anxiety.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch1-q22",
        "text": "Organizations do not need to educate employees about security.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch1-q23",
        "text": "Cybercriminals cannot hide their identities and locations.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch1-q24",
        "text": "Improving critical infrastructure security reduces cyber attacks.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch1-q25",
        "text": "Even bug-free software can be dangerous if poorly designed.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch1-q26",
        "text": "Using the same password for multiple accounts is highly recommended.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch1-q27",
        "text": "A strong password includes a mix of uppercase, lowercase, numbers, and symbols.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch1-q28",
        "text": "Passphrases are often up to 100 characters in length.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch1-q29",
        "text": "You should share your passwords with trusted colleagues.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch1-q30",
        "text": "BugTraq provides reliable information about software vulnerabilities.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "hu121-chapter-2",
    "name": "Chapter 2: Workplace Diversity and Inclusion",
    "description": "Diversity, affirmative action, glass ceiling, glass cliff, gender roles, age stereotypes, and fair hiring.",
    "questions": [
      {
        "id": "hu121-ch2-q1",
        "text": "What does diversity in the workplace mean?",
        "options": [
          "Everyone having the same skills",
          "Having people who are different in culture, gender, and age",
          "Working in different buildings",
          "Wearing different clothes"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch2-q2",
        "text": "Which of the following is an advantage of workplace diversity?",
        "options": [
          "Slower working pace",
          "Broader perspectives and better decision-making",
          "Lower performance",
          "Increased discrimination"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch2-q3",
        "text": "What is a common challenge to achieving diversity?",
        "options": [
          "Better customer service",
          "Unconscious bias and stereotypes",
          "High profits",
          "Innovation"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch2-q4",
        "text": "How can organizations promote diversity?",
        "options": [
          "By stopping recruitment",
          "By offering diversity training",
          "By hiring only one age group",
          "By lowering wages"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch2-q5",
        "text": "What is Affirmative Action?",
        "options": [
          "A policy to promote equal opportunities",
          "A software program",
          "A business tax",
          "A hiring freeze"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch2-q6",
        "text": "In which decade did Affirmative Action start in the United States?",
        "options": [
          "1920s",
          "1940s",
          "1960s",
          "1990s"
        ],
        "correctIndex": 2
      },
      {
        "id": "hu121-ch2-q7",
        "text": "What is a potential disadvantage of Affirmative Action?",
        "options": [
          "It increases creativity",
          "It can be seen as reverse discrimination",
          "It stops unconscious bias",
          "It guarantees business success"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch2-q8",
        "text": "What is the \"Glass Ceiling\"?",
        "options": [
          "A literal ceiling made of glass",
          "An invisible barrier preventing minorities from advancing",
          "A type of office window",
          "A safety hazard"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch2-q9",
        "text": "When was the Glass Ceiling Commission launched by the U.S. Department of Labor?",
        "options": [
          "1960",
          "1985",
          "1991",
          "2005"
        ],
        "correctIndex": 2
      },
      {
        "id": "hu121-ch2-q10",
        "text": "What is the \"Glass Cliff\"?",
        "options": [
          "Promoting women to leadership roles during crises with high risk of failure",
          "Breaking office windows",
          "An outdoor team-building exercise",
          "Refusing to hire minorities"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch2-q11",
        "text": "Who broke the glass ceiling by becoming the first female U.S. Treasury Secretary in 2021?",
        "options": [
          "Kamala Harris",
          "Janet Yellen",
          "Ada Lovelace",
          "Edith Clarke"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch2-q12",
        "text": "Does the glass ceiling still exist today?",
        "options": [
          "No, it has been completely eliminated",
          "Yes, in many industries",
          "Only in the technology sector",
          "Only in government jobs"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch2-q13",
        "text": "Which is considered a traditional personality trait expectation for women?",
        "options": [
          "Dominance",
          "Competitiveness",
          "Nurturing and kind",
          "Physical strength"
        ],
        "correctIndex": 2
      },
      {
        "id": "hu121-ch2-q14",
        "text": "Which occupation is traditionally seen as a \"Helping Profession\"?",
        "options": [
          "Nursing",
          "Engineering",
          "Construction",
          "Executive CEO"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch2-q15",
        "text": "What is a traditional role expected of men?",
        "options": [
          "Homemaker",
          "Caregiver",
          "Independence and strength",
          "Secretarial work"
        ],
        "correctIndex": 2
      },
      {
        "id": "hu121-ch2-q16",
        "text": "Why do younger workers usually earn less than older workers?",
        "options": [
          "They work fewer hours",
          "They have less experience",
          "They are not allowed to earn more",
          "They do not want money"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch2-q17",
        "text": "What is a common stereotype about older workers?",
        "options": [
          "They are more energetic than young workers",
          "They are resistant to change",
          "They learn new software instantly",
          "They never make mistakes"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch2-q18",
        "text": "What does reality show about changing careers at an older age?",
        "options": [
          "It is impossible after 40",
          "It is a myth that you can change careers",
          "People can successfully change careers even after age 60",
          "It is illegal"
        ],
        "correctIndex": 2
      },
      {
        "id": "hu121-ch2-q19",
        "text": "Why do some companies organize outreach efforts?",
        "options": [
          "To reach more diverse candidates",
          "To fire current employees",
          "To save money",
          "To hide job openings"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch2-q20",
        "text": "What is the ultimate goal of diversity and inclusion?",
        "options": [
          "To make workplaces fair, equal, and respectful",
          "To ensure everyone thinks exactly the same way",
          "To reduce the number of employees",
          "To make the workplace chaotic"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch2-q21",
        "text": "Diversity only includes differences in age and gender.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch2-q22",
        "text": "Studies show that diverse companies generally perform better.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch2-q23",
        "text": "Lack of representation is an obstacle to diversity.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch2-q24",
        "text": "Affirmative action aims to give everyone a fair chance in education and employment.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch2-q25",
        "text": "Affirmative action works by decreasing diversity in society.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch2-q26",
        "text": "Men continue to dominate most executive positions and roles of power today.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch2-q27",
        "text": "Gender stereotypes include expectations about physical appearance.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch2-q28",
        "text": "Older workers always earn less than younger workers.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch2-q29",
        "text": "Stereotypes about older workers being less productive are always true.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch2-q30",
        "text": "Fair hiring policies are a part of affirmative action efforts.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "hu121-chapter-3",
    "name": "Chapter 3: Workforce Diversity and Training",
    "description": "Age and income patterns, older workers, women in the labor force, diversity benefits, and diversity training.",
    "questions": [
      {
        "id": "hu121-ch3-q1",
        "text": "Around what age do income levels generally stabilize?",
        "options": [
          "Late 20s",
          "Late 40s",
          "Early 60s",
          "Late 70s"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch3-q2",
        "text": "For ages 45-54, the median income exceeds:",
        "options": [
          "$20,000",
          "$40,000",
          "$60,000",
          "$100,000"
        ],
        "correctIndex": 2
      },
      {
        "id": "hu121-ch3-q3",
        "text": "Does age solely determine income?",
        "options": [
          "Yes, older people always earn the most",
          "No, it also depends on saving and borrowing ability",
          "Yes, younger people always earn the most",
          "No, age has absolutely no relation to income"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch3-q4",
        "text": "What is a characteristic of older workers?",
        "options": [
          "They have more \"bad days\"",
          "They are highly reliable and consistent",
          "They have lower productivity",
          "They cannot use technology"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch3-q5",
        "text": "At what age does job satisfaction generally increase according to the text?",
        "options": [
          "After age 25",
          "After age 40",
          "After age 52",
          "After age 60"
        ],
        "correctIndex": 2
      },
      {
        "id": "hu121-ch3-q6",
        "text": "Which of the following is a type of diversity mentioned in Chapter 3?",
        "options": [
          "Cognitive diversity",
          "Software diversity",
          "Hardware diversity",
          "Network diversity"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch3-q7",
        "text": "Why does diversity matter in a team?",
        "options": [
          "It makes decision-making slower",
          "It enhances creativity and innovation",
          "It creates conflict",
          "It reduces company reputation"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch3-q8",
        "text": "Workforce diversity today is broader than just:",
        "options": [
          "Skills and education",
          "Gender and race",
          "Age and religion",
          "Personality and identity"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch3-q9",
        "text": "A key advantage of diversity is:",
        "options": [
          "Decreasing revenue",
          "Attracting top talent",
          "Reducing innovation",
          "Making all employees identical"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch3-q10",
        "text": "What is the labor force participation rate for women compared to men (67%) mentioned in the text?",
        "options": [
          "20%",
          "50%",
          "80%",
          "90%"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch3-q11",
        "text": "Empowering women helps to:",
        "options": [
          "Reduce poverty",
          "Increase discrimination",
          "Weaken the economy",
          "Decrease family health"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch3-q12",
        "text": "What percentage of the current workforce are women?",
        "options": [
          "20.5%",
          "46.6%",
          "75.0%",
          "90.2%"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch3-q13",
        "text": "In what year did the workforce participation peak before recent changes?",
        "options": [
          "2000",
          "2010",
          "2019",
          "2022"
        ],
        "correctIndex": 2
      },
      {
        "id": "hu121-ch3-q14",
        "text": "Women and minorities make up what percentage of *new* workers?",
        "options": [
          "15%",
          "50%",
          "85%",
          "100%"
        ],
        "correctIndex": 2
      },
      {
        "id": "hu121-ch3-q15",
        "text": "What is the purpose of diversity training?",
        "options": [
          "To teach people how to use software",
          "To improve employee retention",
          "To reduce employee salaries",
          "To discourage teamwork"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch3-q16",
        "text": "Diversity training programs should be designed to:",
        "options": [
          "Fit employee needs",
          "Be exactly the same for every company",
          "Be as long as possible",
          "Focus only on executives"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch3-q17",
        "text": "What tool can be used to improve diversity training?",
        "options": [
          "Calculators",
          "Surveys",
          "Firewalls",
          "Compilers"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch3-q18",
        "text": "When hiring, what should a company focus on most?",
        "options": [
          "Demographics only",
          "Best talent and skills",
          "The applicant's age",
          "The applicant's gender"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch3-q19",
        "text": "Diversity in the workplace includes:",
        "options": [
          "Only physical abilities",
          "Only mental health",
          "Mental health, physical abilities, and ethnodiversity",
          "Only computer skills"
        ],
        "correctIndex": 2
      },
      {
        "id": "hu121-ch3-q20",
        "text": "Job satisfaction for older workers is often linked to:",
        "options": [
          "Less pay",
          "Better pay and job changes",
          "Working longer hours",
          "Demotions"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch3-q21",
        "text": "Wealth inequality always increases with an aging population.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch3-q22",
        "text": "Older workers are generally considered more reliable with fewer bad days.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch3-q23",
        "text": "Cognitive diversity is a recognized type of workplace diversity.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch3-q24",
        "text": "Diversity prevents a lack of perspectives in problem-solving.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch3-q25",
        "text": "Diversity has a negative impact on a company's reputation.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch3-q26",
        "text": "Empowering women gives them a stronger voice in decisions.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch3-q27",
        "text": "Diversity training has no impact on employee retention.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch3-q28",
        "text": "Companies should hire based strictly on demographics rather than skills.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch3-q29",
        "text": "Diversity helps a company attract top talent.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch3-q30",
        "text": "Women participation in the workforce supports development and family health.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "hu121-chapter-4",
    "name": "Chapter 4: Networking and Digital Communication",
    "description": "Computer networking, hardware sharing, email, messaging, video calling, VoIP, and online communication tools.",
    "questions": [
      {
        "id": "hu121-ch4-q1",
        "text": "What is the main purpose of networking computers?",
        "options": [
          "To make computers heavier",
          "To exchange data and communicate efficiently",
          "To increase the cost of hardware",
          "To isolate users"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch4-q2",
        "text": "Sharing hardware in a network, such as a printer, helps to:",
        "options": [
          "Reduce the cost of purchasing hardware",
          "Increase paper waste",
          "Slow down the computers",
          "Print in lower quality"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch4-q3",
        "text": "What is a major disadvantage of networking?",
        "options": [
          "Ability to share files",
          "Breakdowns of the server causing network failure",
          "Cheaper software",
          "Easy communication"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch4-q4",
        "text": "What does email stand for?",
        "options": [
          "Emergency mail",
          "Electronic mail",
          "Electrical mail",
          "External mail"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch4-q5",
        "text": "Email is considered what type of communication?",
        "options": [
          "Synchronous",
          "Asynchronous",
          "Real-time audio",
          "Holographic"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch4-q6",
        "text": "Text messaging uses which of the following to determine the recipient?",
        "options": [
          "A physical address",
          "An email address",
          "A phone number",
          "A MAC address"
        ],
        "correctIndex": 2
      },
      {
        "id": "hu121-ch4-q7",
        "text": "Image and video messaging require different programs because:",
        "options": [
          "They use pictures and sound",
          "They are text-only",
          "They do not use the internet",
          "They only work on broken networks"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch4-q8",
        "text": "Video calling allows users to talk in:",
        "options": [
          "Asynchronous time",
          "Real time",
          "Slow motion",
          "Text format only"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch4-q9",
        "text": "What does IRC stand for?",
        "options": [
          "Internet Relay Chat",
          "Internal Router Connection",
          "International Radio Communication",
          "Interconnected Reality Code"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch4-q10",
        "text": "Which is a positive effect of social media?",
        "options": [
          "Starting arguments",
          "Building relationships and staying connected",
          "Untreated mental health issues",
          "Identity theft"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch4-q11",
        "text": "How can social media be used for learning and education?",
        "options": [
          "By blocking all websites",
          "By finding mentors and watching tutorials on YouTube",
          "By avoiding all text",
          "By deleting user accounts"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch4-q12",
        "text": "What is a potential negative effect of social media on children mentioned in the text?",
        "options": [
          "Better grades",
          "Inability to deal with parents well (social disconnect)",
          "Enhanced physical strength",
          "Earning more money"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch4-q13",
        "text": "Following travel or fitness accounts on Instagram can sometimes lead to:",
        "options": [
          "Guaranteed physical fitness",
          "Feeling worthless or inadequate",
          "Immediate wealth",
          "Better computer skills"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch4-q14",
        "text": "Untreated mental health issues exacerbated by social media can lead to:",
        "options": [
          "Finding new jobs easily",
          "Self-medicating and wreaking havoc across life",
          "Better network security",
          "Faster internet speeds"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch4-q15",
        "text": "What is an advantage of anonymity on the internet?",
        "options": [
          "It makes identity theft impossible",
          "It allows normally anti-social people to express their thoughts",
          "It guarantees the information is true",
          "It prevents spammers"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch4-q16",
        "text": "What is a disadvantage of anonymity?",
        "options": [
          "It stops digital vandalism",
          "People can easily distort facts or fake their identities",
          "It makes the internet completely secure",
          "It reveals everyone's true name"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch4-q17",
        "text": "Improper use of social media can lead to new or worsening:",
        "options": [
          "Hardware upgrades",
          "Depression and loneliness",
          "Network connectivity",
          "Server breakdowns"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch4-q18",
        "text": "The future of networked communications is expected to include personalized experiences enhanced by:",
        "options": [
          "Black and white monitors",
          "VR and AR",
          "Floppy disks",
          "Typewriters"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch4-q19",
        "text": "Social media offers convenience for:",
        "options": [
          "Washing clothes",
          "Banking and bill pay at our fingertips",
          "Cooking food physically",
          "Building physical houses"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch4-q20",
        "text": "Current research on the internet's implications focuses on inequality, often called the:",
        "options": [
          "Digital divide",
          "Cyber gap",
          "Tech wall",
          "Information boundary"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch4-q21",
        "text": "A computer network is a group of interconnected computers for sharing data.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch4-q22",
        "text": "Networkable versions of software are usually more expensive than individual licenses.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch4-q23",
        "text": "A server breakdown in a network can lead to the loss of important data.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch4-q24",
        "text": "Text messaging is considered synchronous communication.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch4-q25",
        "text": "IRC allows individuals to hold real-time online conversations.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch4-q26",
        "text": "Social media cannot be used by businesses to advertise their services.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch4-q27",
        "text": "Anonymity online can support spammers, hackers, and digital vandalism.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch4-q28",
        "text": "Diversity, equity, and empathy are expected to be sought-after digital marketing values in the future.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch4-q29",
        "text": "Social media always guarantees that people reveal their true selves.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch4-q30",
        "text": "The \"digital divide\" refers to inequality in internet implications.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "hu121-chapter-5",
    "name": "Chapter 5: The Web, Internet Access, and Automation",
    "description": "Web 1.0 through Web 3.0, internet governance, digital divide, intellectual property, P2P, BGP, security, and automation.",
    "questions": [
      {
        "id": "hu121-ch5-q1",
        "text": "Who pioneered the early development of Web 1.0 in 1990?",
        "options": [
          "Ada Lovelace",
          "Berners-Lee",
          "Bill Gates",
          "Steve Jobs"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch5-q2",
        "text": "Which version of the web is characterized by interactivity and user-generated content?",
        "options": [
          "Web 1.0",
          "Web 2.0",
          "Web 3.0",
          "Web 4.0"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch5-q3",
        "text": "Web 3.0 represents a paradigm shift that includes:",
        "options": [
          "Only HTML pages",
          "Artificial intelligence (AI) and machine learning",
          "The invention of the telegraph",
          "Disconnecting all computers"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch5-q4",
        "text": "The internet is completely owned and controlled by:",
        "options": [
          "The United Nations",
          "Google and Facebook exclusively",
          "No single entity or organization",
          "One specific government"
        ],
        "correctIndex": 2
      },
      {
        "id": "hu121-ch5-q5",
        "text": "What limits what citizens can access online in some countries?",
        "options": [
          "Strict censorship laws",
          "Weather conditions",
          "The age of the computer",
          "Screen size"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch5-q6",
        "text": "The gap between those who have high-speed internet and those who do not is called:",
        "options": [
          "The Cyber Hole",
          "The Digital Divide",
          "The Web Barrier",
          "The Network Gap"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch5-q7",
        "text": "Which of the following is an ingredient required to access the internet?",
        "options": [
          "A microwave oven",
          "An Internet Service Provider (ISP)",
          "A television antenna",
          "A printer"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch5-q8",
        "text": "Ethical considerations in research and online practice include:",
        "options": [
          "Hardware and software",
          "Privacy, IPR, Accuracy, and Security",
          "HTML and CSS",
          "Routers and switches"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch5-q9",
        "text": "What is a Peer-to-Peer (P2P) network?",
        "options": [
          "A network with one central server",
          "A distributed application architecture that partitions tasks between peers",
          "A network with no computers",
          "A single stand-alone PC"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch5-q10",
        "text": "Which is an example of a P2P application?",
        "options": [
          "Microsoft Word",
          "BitTorrent",
          "A physical calculator",
          "A printed newspaper"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch5-q11",
        "text": "What is an Autonomous System (AS) that acts as a link between two or more external systems?",
        "options": [
          "Stub",
          "Transit",
          "Single-homed",
          "Isolated"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch5-q12",
        "text": "How do autonomous systems exchange network traffic directly?",
        "options": [
          "Through mailing physical letters",
          "Through a process called peering",
          "By using Bluetooth only",
          "By guessing IP addresses"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch5-q13",
        "text": "What is an IXP?",
        "options": [
          "Internet Exchange Point",
          "Internal XML Protocol",
          "Internet X-ray Provider",
          "Integrated X-axis Plot"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch5-q14",
        "text": "Private peering happens when:",
        "options": [
          "Networks connect through a public hub",
          "Two or more networks agree to exchange traffic at a private facility",
          "Traffic is routed through a third party",
          "The internet goes down"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch5-q15",
        "text": "One benefit of peering is:",
        "options": [
          "Higher costs",
          "Lower performance",
          "Lower costs and higher performance",
          "Increased latency"
        ],
        "correctIndex": 2
      },
      {
        "id": "hu121-ch5-q16",
        "text": "What does BGP stand for conceptually in networking routing?",
        "options": [
          "Basic Graphic Protocol",
          "Border Gateway Protocol (routing based on policy attributes)",
          "Big Gigabit Provider",
          "Binary Gate Process"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch5-q17",
        "text": "Internal BGP is used when neighbors belong to:",
        "options": [
          "Different autonomous systems",
          "The same autonomous system",
          "No autonomous system",
          "A physical router only"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch5-q18",
        "text": "Which of the following is a threat to internet security?",
        "options": [
          "Phishing",
          "HTML",
          "A web browser",
          "A modem"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch5-q19",
        "text": "The presentation of information on a website is influenced by:",
        "options": [
          "The user's chair",
          "Website layout, content, and navigation",
          "The computer's fan speed",
          "The physical location of the server only"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch5-q20",
        "text": "Automation processes involve raw materials, a process, and:",
        "options": [
          "A final product",
          "A broken machine",
          "A lost connection",
          "A manual override"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch5-q21",
        "text": "Web 1.0 consisted mostly of static HTML pages.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch5-q22",
        "text": "Corporations like Google and Facebook have absolutely no influence over content shown to users.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch5-q23",
        "text": "The digital divide can be caused by location, income level, or lack of infrastructure.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch5-q24",
        "text": "Cybersecurity is only a concern for large organizations, not individuals.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch5-q25",
        "text": "IPR stands for Intellectual Property Rights.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch5-q26",
        "text": "P2P networks require a centralized server to function.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch5-q27",
        "text": "A single-homed (stub) AS interconnects with only one external AS.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch5-q28",
        "text": "Peering can reduce the risk of data leakage because it provides a direct connection.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch5-q29",
        "text": "BGP chooses best paths based solely on bandwidth or delay, not policies.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch5-q30",
        "text": "A web browser is required to access websites on the internet.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "hu121-chapter-6",
    "name": "Chapter 6: Women, Bias, and Computing Careers",
    "description": "Representation in computing, algorithmic bias, Ada Lovelace, Edith Clarke, Grace Hopper, stereotypes, AWC, and parental controls.",
    "questions": [
      {
        "id": "hu121-ch6-q1",
        "text": "A lack of diversity in the computing industry can lead to:",
        "options": [
          "Faster software development",
          "Biases in product development and narrow perspectives",
          "Cheaper hardware",
          "Perfect algorithms"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch6-q2",
        "text": "Women in computing often face a hostile work environment, which can include:",
        "options": [
          "Free lunches",
          "Harassment and discrimination",
          "Guaranteed promotions",
          "Excessive vacation time"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch6-q3",
        "text": "An example of gender bias in algorithms is facial recognition technology that is:",
        "options": [
          "Perfectly accurate for everyone",
          "Less accurate on women and people of color",
          "Only able to recognize animals",
          "Faster for women than men"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch6-q4",
        "text": "Who is recognized for writing the first algorithm with which a machine works (in the 1840s)?",
        "options": [
          "Grace Hopper",
          "Edith Clarke",
          "Augusta Ada Byron (Ada Lovelace)",
          "Marie Curie"
        ],
        "correctIndex": 2
      },
      {
        "id": "hu121-ch6-q5",
        "text": "Ada Lovelace's name was given to which of the following in 1979?",
        "options": [
          "A programming language",
          "A computer brand",
          "A network protocol",
          "An operating system"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch6-q6",
        "text": "Who became the first female electrical engineer in the world?",
        "options": [
          "Grace Hopper",
          "Augusta Ada Byron",
          "Edith Clarke",
          "Kamala Harris"
        ],
        "correctIndex": 2
      },
      {
        "id": "hu121-ch6-q7",
        "text": "Edith Clarke led a group of women known as \"human computers\" during which event?",
        "options": [
          "The Cold War",
          "World War I",
          "The Vietnam War",
          "The American Civil War"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch6-q8",
        "text": "Who was a pioneer of computer programming that invented one of the first linkers?",
        "options": [
          "Grace Hopper",
          "Edith Clarke",
          "Ada Lovelace",
          "Janet Yellen"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch6-q9",
        "text": "Grace Hopper helped program an electromechanical computer during:",
        "options": [
          "World War I",
          "World War II",
          "The 1990s",
          "The 2000s"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch6-q10",
        "text": "What is an example of a gender-related judicial integrity issue?",
        "options": [
          "Equal pay",
          "Sextortion or sexual discrimination",
          "Fair hiring",
          "Diversity training"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch6-q11",
        "text": "According to Chapter 6, shifting cultural perceptions on women's ability to own land was an initiative in which country?",
        "options": [
          "Japan",
          "Tanzania",
          "United States",
          "Germany"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch6-q12",
        "text": "In the video game industry, CS graduates can work as game programmers to develop:",
        "options": [
          "Game mechanics, graphics, and artificial intelligence",
          "The plastic cases for game discs",
          "The marketing posters only",
          "The physical consoles only"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch6-q13",
        "text": "What is a stereotype?",
        "options": [
          "A guaranteed fact about a group",
          "A preconceived, often unfair notion that all people with a characteristic are the same",
          "A type of computer hardware",
          "A network routing protocol"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch6-q14",
        "text": "How can one avoid stereotyping others?",
        "options": [
          "Make snap judgments",
          "Isolate oneself",
          "Develop empathy and get to know people who appear different",
          "Refuse to learn about other cultures"
        ],
        "correctIndex": 2
      },
      {
        "id": "hu121-ch6-q15",
        "text": "What is the stereotype of \"Sex appeal at the job\"?",
        "options": [
          "The belief that coding is attractive",
          "The belief that physically attractive people are more successful in the workplace",
          "The belief that older workers are best",
          "The belief that hardware engineers earn more"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch6-q16",
        "text": "Studies show that corporations with women at the helm tend to be more successful due to:",
        "options": [
          "Uniform thinking",
          "Diverse perspectives and collaboration",
          "Lower employee satisfaction",
          "Poor financial performance"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch6-q17",
        "text": "What does AWC stand for?",
        "options": [
          "Association for Women in Computing",
          "American Women in Construction",
          "Alliance of Web Creators",
          "Advanced Wireless Connection"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch6-q18",
        "text": "When was the AWC established?",
        "options": [
          "1950",
          "1978",
          "1995",
          "2010"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch6-q19",
        "text": "What is a primary purpose of the AWC?",
        "options": [
          "To sell software",
          "To encourage women to pursue careers in computer science",
          "To build computer hardware",
          "To regulate the internet"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch6-q20",
        "text": "How can parents protect their kids regarding internet use?",
        "options": [
          "By removing the computer screen",
          "By using built-in parental control software and internet blockers",
          "By never letting them use technology",
          "By giving them admin access to everything"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch6-q21",
        "text": "Women make up a very large majority of the computing workforce today.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch6-q22",
        "text": "Gender bias in algorithms can lead to wrongful arrests.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch6-q23",
        "text": "Ada Lovelace predicted that computers could translate music and pictures into digital images.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch6-q24",
        "text": "Edith Clarke was the first woman named as a Fellow of the AIEE (now IEEE).",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch6-q25",
        "text": "Grace Hopper was the first to devise the theory of machine-independent programming languages.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch6-q26",
        "text": "Traditional and cultural norms have no impact on women's access to land in developing nations.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch6-q27",
        "text": "The video game industry currently has perfect equal representation of men and women.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch6-q28",
        "text": "Physical appearance should be a major factor in determining an individual's success in the workplace.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch6-q29",
        "text": "Stereotypes can be based on gender, age, racism, or religious affiliation.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch6-q30",
        "text": "Parental controls can include web content filtering software.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "hu121-chapter-7",
    "name": "Chapter 7: Global IT, Cybercrime, and Green Computing",
    "description": "Cultural factors in IT, Asian technology markets, access barriers, cybercrime laws and attacks, cyber warfare, physical security, and environmental standards.",
    "questions": [
      {
        "id": "hu121-ch7-q1",
        "text": "How might IT decisions be made in Japan according to cultural differences?",
        "options": [
          "Rapidly with high risk",
          "Through a collaborative process with a focus on long-term planning",
          "By one single person only",
          "Without any planning"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch7-q2",
        "text": "In the West, IT decisions often place a greater emphasis on:",
        "options": [
          "Avoiding all risk",
          "Innovation and risk-taking",
          "Slow collaborative consensus",
          "Ignoring new technologies"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch7-q3",
        "text": "When implementing IT solutions globally, it is critical to consider:",
        "options": [
          "Only the cost of cables",
          "Cultural factors and norms",
          "The color of the computers",
          "Only the weather"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch7-q4",
        "text": "Which of the following is a major IT sector fueled by digital payments in Asia?",
        "options": [
          "Agriculture",
          "E-commerce",
          "Mining",
          "Construction"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch7-q5",
        "text": "Which social media platforms are widely used in Asia to connect consumers?",
        "options": [
          "Only email",
          "Facebook and WeChat",
          "BugTraq",
          "P2P Networks"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch7-q6",
        "text": "What is a major user of IT products and services in Asia for managing logistics?",
        "options": [
          "E-commerce platforms like Alibaba",
          "Local bakeries",
          "Traditional farmers",
          "Paper manufacturers"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch7-q7",
        "text": "Which factor is crucial and may deter people from using IT in developing countries?",
        "options": [
          "Too many websites",
          "The high monthly cost of connection",
          "Too fast internet",
          "Too much electricity"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch7-q8",
        "text": "How does education influence IT use?",
        "options": [
          "Educated people use IT less",
          "Education decreases understanding of IT",
          "More educated people are likely to have better access and understanding of IT",
          "Education makes IT irrelevant"
        ],
        "correctIndex": 2
      },
      {
        "id": "hu121-ch7-q9",
        "text": "Identity theft involves stealing personal information to:",
        "options": [
          "Send friendly emails",
          "Commit fraud",
          "Buy software licenses legally",
          "Repair computers"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch7-q10",
        "text": "What does CFAA stand for in the context of cybercrime laws?",
        "options": [
          "Computer Fraud and Abuse Act",
          "Cyber Force Action Agency",
          "Central Firewall and Antivirus Association",
          "Criminal Fraud and Access Act"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch7-q11",
        "text": "What is an SQL injection?",
        "options": [
          "Injecting a physical virus into a server",
          "A cyber-criminal embedding harmful code into a webpage to access data",
          "A tool used to clean databases",
          "An update to an operating system"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch7-q12",
        "text": "A Man-in-the-Middle attack occurs when a criminal:",
        "options": [
          "Breaks a computer screen",
          "Intercepts data transfer between a victim and a service",
          "Steals a physical keyboard",
          "Unplugs the router"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch7-q13",
        "text": "Financial attacks are aimed at earning financial benefit through acts like:",
        "options": [
          "Reading public news",
          "Identity fraud and ransomware attacks",
          "Playing video games",
          "Donating to charity"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch7-q14",
        "text": "The Digital Battlefield refers to:",
        "options": [
          "A popular video game",
          "Modern warfare utilizing cyber warfare to compromise national security",
          "A physical war over computer parts",
          "Arguing on social media"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch7-q15",
        "text": "Who shares the responsibility for a secure digital environment?",
        "options": [
          "Only the military",
          "Only IT professionals",
          "Society as a whole",
          "Only the government"
        ],
        "correctIndex": 2
      },
      {
        "id": "hu121-ch7-q16",
        "text": "What is a \"Grudge Attack\"?",
        "options": [
          "A random virus sent to everyone",
          "An attack carried out by someone with a personal or professional vendetta",
          "An attack on a computer's power supply",
          "A friendly hacking competition"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch7-q17",
        "text": "Which of the following is a physical security measure?",
        "options": [
          "Antivirus software",
          "Access controls and surveillance systems",
          "Firewalls",
          "Encryption"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch7-q18",
        "text": "What is the Energy Star program?",
        "options": [
          "A space exploration program",
          "A federal regulation setting standards for energy efficiency in computing",
          "A video game rating system",
          "A social media influencer program"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch7-q19",
        "text": "What does the RoHS directive restrict?",
        "options": [
          "The speed of the internet",
          "The amount of hazardous substances used in electronic products",
          "The number of websites a user can visit",
          "The length of passwords"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch7-q20",
        "text": "What is EPEAT?",
        "options": [
          "A tool that provides guidance on reducing the environmental impact of computing",
          "A new type of computer mouse",
          "A hacker group",
          "A software development method"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch7-q21",
        "text": "Effective communication and cultural sensitivity are essential for IT projects in diverse organizations.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch7-q22",
        "text": "Esports and gaming are minor, unpopular industries in Asia.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch7-q23",
        "text": "Financial institutions rely heavily on IT to manage transactions and analyze data.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch7-q24",
        "text": "The cost of connection has no impact on internet adoption in developing countries.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch7-q25",
        "text": "Identity theft can be carried out through phishing and hacking.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch7-q26",
        "text": "Cyber-attacks like ransomware have no real financial impact on businesses.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch7-q27",
        "text": "In the modern era, sensitive national data like troop deployments are prime targets for hackers.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch7-q28",
        "text": "Grudge attacks are typically random and not targeted at any specific victim.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 1
      },
      {
        "id": "hu121-ch7-q29",
        "text": "Access controls limit physical access to sensitive areas by requiring credentials like biometrics.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      },
      {
        "id": "hu121-ch7-q30",
        "text": "The federal government has established regulations on the disposal of electronic waste.",
        "options": [
          "True",
          "False"
        ],
        "correctIndex": 0
      }
    ]
  }
];

export const socialContextOfComputing: Subject = {
  id: "hu121",
  name: "Social Context of Computing",
  icon: "Globe",
  description:
    "Impact of computing on society, ethics, diversity, cybersecurity, and digital culture.",
  color: "#4F46E5",
  professor: "Noha Shabriya",
  chapters,
  questions: chapters.flatMap((chapter) => chapter.questions),
};
