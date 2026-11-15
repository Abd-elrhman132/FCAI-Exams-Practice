import { Subject } from "@/types";

const chapters = [
  {
    "id": "mm304-lecture-1",
    "name": "Lecture 1: Introduction to Multimedia",
    "description": "Multimedia definitions, modalities, authoring tools, XR (AR/VR/MR), e-learning, animation, hypermedia, and multimedia history.",
    "questions": [
      {
        "id": "mm304-l1-q1",
        "text": "According to the lecture, which of the following best defines Multimedia from a Computer Science student's viewpoint?",
        "options": [
          "An application that uses only text and images.",
          "Applications that use multiple modalities such as text, images, animation, video, sound, and interactivity.",
          "Software designed exclusively for video editing.",
          "A system that combines computer hardware and operating systems."
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l1-q2",
        "text": "Which of the following is NOT listed as a type of media used in multimedia applications?",
        "options": [
          "Text",
          "Audio",
          "Video",
          "Operating system"
        ],
        "correctIndex": 3
      },
      {
        "id": "mm304-l1-q3",
        "text": "What is a multimedia application?",
        "options": [
          "Interactive software that combines several types of media at once.",
          "Software that processes text documents only.",
          "A hardware device used to display images.",
          "A programming language designed for animation."
        ],
        "correctIndex": 0
      },
      {
        "id": "mm304-l1-q4",
        "text": "What is the primary purpose of multimedia authoring?",
        "options": [
          "To compress multimedia files.",
          "To connect computers through networks.",
          "To collect, structure, and present information in one or more media.",
          "To manufacture multimedia hardware."
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l1-q5",
        "text": "What do Multimedia Authoring Tools primarily provide?",
        "options": [
          "A framework for organizing and editing multimedia project elements.",
          "A method for replacing computer operating systems.",
          "A network protocol for transferring multimedia.",
          "A database for storing user passwords."
        ],
        "correctIndex": 0
      },
      {
        "id": "mm304-l1-q6",
        "text": "Which of the following is an example of a multimedia authoring tool mentioned in the lecture?",
        "options": [
          "Android",
          "Adobe Captivate",
          "Skype",
          "YouTube"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l1-q7",
        "text": "What does XR stand for?",
        "options": [
          "Extended Reality",
          "Experimental Rendering",
          "External Representation",
          "Expressive Reality"
        ],
        "correctIndex": 0
      },
      {
        "id": "mm304-l1-q8",
        "text": "Which three technologies are included under the XR umbrella?",
        "options": [
          "HTML, XML, and XSL.",
          "2D, 3D, and 4D animation.",
          "AR, MR, and VR.",
          "Text, audio, and video."
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l1-q9",
        "text": "What is Virtual Reality (VR)?",
        "options": [
          "A technology that inserts digital information into the real world.",
          "A computer-simulated environment that can simulate physical presence in real or imagined places.",
          "A system used only for video conferencing.",
          "A technology designed exclusively for 3D animation."
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l1-q10",
        "text": "What does Augmented Reality (AR) mean according to the lecture?",
        "options": [
          "Replacing the real world completely with a virtual environment.",
          "Creating a computer-generated environment without real-world elements.",
          "Inserting digital information into the real world.",
          "Converting 2D images into 3D animations."
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l1-q11",
        "text": "What is E-learning?",
        "options": [
          "Learning exclusively through printed books.",
          "Delivering learning and training through digital resources.",
          "Teaching only through video games.",
          "Learning without using electronic devices."
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l1-q12",
        "text": "What is the main characteristic of traditional 2D animation mentioned in the lecture?",
        "options": [
          "Characters are generated automatically through virtual reality.",
          "Objects are animated using 3D models.",
          "Animation is created using motion-capture devices only.",
          "Everything is hand-drawn frame by frame."
        ],
        "correctIndex": 3
      },
      {
        "id": "mm304-l1-q13",
        "text": "Which of the following correctly describes the relationship between Multimedia and Computer Science?",
        "options": [
          "Multimedia is connected only to database systems.",
          "Multimedia is independent of other Computer Science disciplines.",
          "Multimedia is related to areas such as Graphics, HCI, Visualization, Computer Vision, Data Compression, Networking, and Database Systems.",
          "Multimedia is exclusively a branch of computer networking."
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l1-q14",
        "text": "A developer is creating an educational multimedia project. They need a tool that supports editing, scripting, playback, and project organization. Which category of software should they use?",
        "options": [
          "Multimedia authoring tools.",
          "Operating systems.",
          "Database management systems.",
          "Network monitoring tools."
        ],
        "correctIndex": 0
      },
      {
        "id": "mm304-l1-q15",
        "text": "A company wants its software and hardware products to coexist remotely at a large scale through an Internet-based data center. Which concept best describes this environment?",
        "options": [
          "Virtual Reality.",
          "Multimedia authoring.",
          "Traditional animation.",
          "Cloud Multimedia Platform."
        ],
        "correctIndex": 3
      },
      {
        "id": "mm304-l1-q16",
        "text": "Which statement correctly explains the meaning of the letter \"X\" in XR?",
        "options": [
          "It represents only experimental technology.",
          "It is a variable that can stand for any letter.",
          "It refers exclusively to three-dimensional graphics.",
          "It represents external computer resources."
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l1-q17",
        "text": "A student uses a virtual environment to experience an imagined location and interact with simulated sensory experiences. Which technology is being used?",
        "options": [
          "Hypermedia.",
          "Augmented Reality.",
          "Virtual Reality.",
          "Mixed Reality."
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l1-q18",
        "text": "A mobile application displays digital information over the user's actual surroundings. Which technology does this represent?",
        "options": [
          "VR.",
          "AR.",
          "MR.",
          "2D Animation."
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l1-q19",
        "text": "A shopping application allows customers to visualize how furniture or room painting would look in their actual environment. Which application of AR does this represent?",
        "options": [
          "Cloud-based gaming.",
          "Virtual teleconferencing.",
          "Traditional 2D animation.",
          "Creating a new environment through room painting and furniture visualization."
        ],
        "correctIndex": 3
      },
      {
        "id": "mm304-l1-q20",
        "text": "What is the key difference between Mixed Reality and basic Augmented Reality according to the lecture?",
        "options": [
          "MR aims to provide a more interactive experience than basic AR applications.",
          "MR removes all real-world elements.",
          "MR is limited to displaying static text.",
          "MR is exclusively concerned with audio processing."
        ],
        "correctIndex": 0
      },
      {
        "id": "mm304-l1-q21",
        "text": "Why does multimedia integration help improve learner engagement in E-learning?",
        "options": [
          "It removes the need for electronic devices.",
          "It replaces all learning materials with text.",
          "It integrates images, videos, audio, and graphics to keep learners engaged.",
          "It prevents learners from interacting with digital resources."
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l1-q22",
        "text": "Which statement about games and entertainment is supported by the lecture?",
        "options": [
          "Games are designed exclusively for educational purposes.",
          "Entertainment games can sometimes be used by educators for teaching purposes.",
          "Games cannot combine multiple media types.",
          "Educational games must be independent of commercial gaming."
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l1-q23",
        "text": "What distinguishes video teleconferencing from ordinary one-way video transmission?",
        "options": [
          "It uses only audio transmission.",
          "It communicates through text messages.",
          "It allows only one location to participate.",
          "It enables two or more locations to communicate through simultaneous two-way video and audio transmissions."
        ],
        "correctIndex": 3
      },
      {
        "id": "mm304-l1-q24",
        "text": "During a video conference, a system considers participants' gaze direction and attention. Which channel is specifically involved?",
        "options": [
          "Visual channel.",
          "Audio channel.",
          "Text channel.",
          "Animation channel."
        ],
        "correctIndex": 0
      },
      {
        "id": "mm304-l1-q25",
        "text": "Which statement correctly compares traditional 2D animation with 3D animation?",
        "options": [
          "Both are created exclusively by hand-drawing every frame.",
          "2D animation requires virtual reality, while 3D animation requires AR.",
          "Traditional 2D animation is hand-drawn frame by frame, whereas 3D animation involves animating characters and objects in a 3D environment.",
          "3D animation is limited to static images."
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l1-q26",
        "text": "A business promotes its products through radio, newspaper advertisements, direct mail, email, mobile devices, and social media. Which concept does this describe?",
        "options": [
          "Multimedia authoring.",
          "Multimedia marketing.",
          "Virtual reality.",
          "Video teleconferencing."
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l1-q27",
        "text": "What is the defining characteristic of a hypertext system?",
        "options": [
          "It must contain video and audio.",
          "It can only be read from beginning to end.",
          "It is designed exclusively for multimedia games.",
          "It allows nonlinear reading by following links to other parts of a document or other documents."
        ],
        "correctIndex": 3
      },
      {
        "id": "mm304-l1-q28",
        "text": "What makes Hypermedia different from traditional text-based hypertext?",
        "options": [
          "Hypermedia can include graphics, images, sound, and video in addition to text.",
          "Hypermedia only supports written documents.",
          "Hypermedia does not use links.",
          "Hypermedia is limited to static images."
        ],
        "correctIndex": 0
      },
      {
        "id": "mm304-l1-q29",
        "text": "Which statement correctly describes the role of HTML and XML in the World Wide Web?",
        "options": [
          "HTML defines custom user tags, while XML is used exclusively for styling.",
          "Both HTML and XML are designed exclusively for video playback.",
          "HTML is used for publishing Hypermedia on the WWW, while XML allows users or applications to define tags.",
          "HTML and XML are both multimedia authoring applications."
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l1-q30",
        "text": "Which technology is described as basically CSS for XML?",
        "options": [
          "SMIL.",
          "XSL.",
          "HTML.",
          "XR."
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l1-q31",
        "text": "Consider a web-based multimedia presentation that combines video, audio, graphics, and user input, with synchronization between different media types. Which technology from the lecture is specifically designed to support this?",
        "options": [
          "XML.",
          "XSL.",
          "HTML.",
          "SMIL."
        ],
        "correctIndex": 3
      },
      {
        "id": "mm304-l1-q32",
        "text": "A student claims that every XR application must completely replace the real environment with a computer-generated one. Based on the lecture, what is the most accurate evaluation of this claim?",
        "options": [
          "The claim is incorrect because XR is an umbrella category that includes AR, MR, and VR, which represent different forms of computer-altered reality.",
          "The claim is correct because XR is another name for VR.",
          "The claim is correct because AR and MR are not included in XR.",
          "The claim is incorrect because XR refers only to traditional animation."
        ],
        "correctIndex": 0
      },
      {
        "id": "mm304-l1-q33",
        "text": "A developer creates an application that extracts real-world people or objects in real time and immerses them into a virtual environment, where they interact naturally with digital elements. Which AR example from the lecture does this describe?",
        "options": [
          "Indoor AR navigation.",
          "Room painting and furniture visualization.",
          "Holographic Augmented Reality.",
          "AR shopping."
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l1-q34",
        "text": "Which sequence correctly matches the historical developments mentioned in the lecture?",
        "options": [
          "2003: YouTube created; 2004: Skype launched; 2005: Facebook founded.",
          "2003: Skype; 2004: Web 2.0; 2005: YouTube.",
          "2003: Facebook; 2004: YouTube; 2005: Android.",
          "2003: Android; 2004: Google Maps; 2005: Twitter."
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l1-q35",
        "text": "Which event was associated with the year 2006 in the lecture?",
        "options": [
          "Apple launched the iPhone.",
          "Google launched Android.",
          "YouTube was created.",
          "Amazon launched its cloud computing platform."
        ],
        "correctIndex": 3
      },
      {
        "id": "mm304-l1-q36",
        "text": "Which combination correctly describes the major developments in 2007?",
        "options": [
          "Apple launched the iPhone running iOS, and Google launched Android.",
          "Microsoft introduced Kinect, and HTML5 replaced HTML4.",
          "The first LTE network was established, and Avatar was released.",
          "Twitter introduced Vine, and Sony released PlayStation 4."
        ],
        "correctIndex": 0
      },
      {
        "id": "mm304-l1-q37",
        "text": "What was the significance of the first LTE network mentioned in the 2009 timeline?",
        "options": [
          "It introduced the first social networking platform.",
          "It replaced the need for multimedia authoring tools.",
          "It represented an important step toward 4G wireless networking.",
          "It enabled the first virtual reality environment."
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l1-q38",
        "text": "Which statement accurately describes Microsoft's Kinect as introduced in 2010?",
        "options": [
          "It was a cloud-based gaming service offering streamed games.",
          "It was a device for Xbox 360 featuring full-body 3D motion capture, facial recognition, and voice recognition.",
          "It was a mobile application for creating short video clips.",
          "It was a wireless network standard developed for smartphones."
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l1-q39",
        "text": "According to the lecture, what was an important capability of HTML5 mentioned in 2012?",
        "options": [
          "It was designed exclusively for desktop computers.",
          "It replaced XML and XSL completely.",
          "It was limited to publishing static text documents.",
          "It could run on low-powered devices such as smartphones and tablets."
        ],
        "correctIndex": 3
      },
      {
        "id": "mm304-l1-q40",
        "text": "Which set of developments is correctly associated with 2013?",
        "options": [
          "Vine, PlayStation 4 with integration with Gaikai, and 4K TVs becoming available in the consumer market.",
          "Facebook, Flickr, and the first commercial 3G network.",
          "Kinect, the iPhone, and Android.",
          "Skype, YouTube, and HTML5."
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "mm304-lecture-2",
    "name": "Lecture 2: Multimedia Software Tools & Graphics Data Representation",
    "description": "Multimedia software categories (audio, graphics, video, animation), future trends (AI, immersive media), and digital image representation (vector vs raster, bit depth, LUT, color models).",
    "questions": [
      {
        "id": "mm304-l2-q1",
        "text": "Which of the following represents one of the five main categories of multimedia software tools mentioned in the lecture?",
        "options": [
          "Database Management",
          "Digital Audio",
          "Operating Systems",
          "Network Security"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l2-q2",
        "text": "Which software is described as a powerful and popular digital audio toolkit that includes digital signal processing effects?",
        "options": [
          "Sound Forge",
          "Pro Tools",
          "Cool Edit",
          "Adobe Premiere"
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l2-q3",
        "text": "Which software is specifically described as a PC-based program for editing WAV files?",
        "options": [
          "Sound Forge",
          "Adobe Photoshop",
          "Final Cut Pro",
          "Blender"
        ],
        "correctIndex": 0
      },
      {
        "id": "mm304-l2-q4",
        "text": "Which of the following is described as a high-end integrated audio production and editing environment?",
        "options": [
          "Cool Edit",
          "Adobe Illustrator",
          "Adobe After Effects",
          "Pro Tools"
        ],
        "correctIndex": 3
      },
      {
        "id": "mm304-l2-q5",
        "text": "Which Adobe software uses vector graphics and allows graphics to be exported to the Web?",
        "options": [
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Adobe Premiere",
          "Adobe Freehand"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l2-q6",
        "text": "Which software is described as the standard tool for graphics, image processing, and manipulation?",
        "options": [
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Sound Forge",
          "Final Cut Pro"
        ],
        "correctIndex": 0
      },
      {
        "id": "mm304-l2-q7",
        "text": "Which software is described as a text and web graphics editing tool that supports bitmap formats such as GIF, PNG, and JPEG?",
        "options": [
          "Adobe Premiere",
          "Adobe Illustrator",
          "Adobe Freehand",
          "Pro Tools"
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l2-q8",
        "text": "Which software is described as a simple video editing tool used to put video clips into any order?",
        "options": [
          "Adobe After Effects",
          "Final Cut Pro",
          "Softimage XSI",
          "Adobe Premiere"
        ],
        "correctIndex": 3
      },
      {
        "id": "mm304-l2-q9",
        "text": "Which video editing software enables users to add and change existing movies using effects such as lighting, shadows, motion blurring, and layers?",
        "options": [
          "Adobe After Effects",
          "Adobe Premiere",
          "Sound Forge",
          "Adobe Illustrator"
        ],
        "correctIndex": 0
      },
      {
        "id": "mm304-l2-q10",
        "text": "Which video editing tool is developed by Apple and works on Macintosh only, according to the lecture?",
        "options": [
          "Adobe Premiere",
          "Final Cut Pro",
          "Adobe After Effects",
          "Cool Edit"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l2-q11",
        "text": "Which API is used by Java to construct and render 3D graphics?",
        "options": [
          "DirectX",
          "OpenGL",
          "Java3D",
          "GIF Animation Packages"
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l2-q12",
        "text": "Which API is described as highly portable and the most popular 3D API?",
        "options": [
          "Java3D",
          "DirectX",
          "Adobe Illustrator",
          "OpenGL"
        ],
        "correctIndex": 3
      },
      {
        "id": "mm304-l2-q13",
        "text": "Which API is specifically designed for Windows and supports video, images, audio, and 3D animation?",
        "options": [
          "DirectX",
          "Java3D",
          "OpenGL",
          "Softimage XSI"
        ],
        "correctIndex": 0
      },
      {
        "id": "mm304-l2-q14",
        "text": "Which rendering tool includes professional tools for character animation, game development, and visual effects production?",
        "options": [
          "Adobe Freehand",
          "Sound Forge",
          "3D Studio Max",
          "Cool Edit"
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l2-q15",
        "text": "Which package is used for modeling, animation, and rendering, particularly for special effects in films and games?",
        "options": [
          "Adobe Premiere",
          "Softimage XSI",
          "Pro Tools",
          "Final Cut Pro"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l2-q16",
        "text": "What is the main advantage of GIF Animation Packages mentioned in the lecture?",
        "options": [
          "They provide high-end professional 3D modeling.",
          "They support advanced audio production.",
          "They are exclusively used for video editing.",
          "They allow quick development of effective small animations for the Web."
        ],
        "correctIndex": 3
      },
      {
        "id": "mm304-l2-q17",
        "text": "Which of the following is mentioned as a future trend in multimedia?",
        "options": [
          "Eliminating interactive content.",
          "AI-powered creation for video production, audio editing, and graphic design.",
          "Replacing all digital media with printed materials.",
          "Restricting multimedia to desktop applications."
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l2-q18",
        "text": "What does the lecture mean by the dominance of short-form video?",
        "options": [
          "Video content will become exclusively educational.",
          "Long-form videos will completely replace short videos.",
          "Short-form video will continue to be prominent, with personalized content delivered through algorithms.",
          "Video content will no longer use personalization."
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l2-q19",
        "text": "What is the main purpose of micro-communities in future multimedia?",
        "options": [
          "Creating random content for everyone",
          "Providing personalized niche content based on data and customer preferences",
          "Replacing all social media platforms",
          "Reducing multimedia quality"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l2-q20",
        "text": "Which technologies allow users to search using spoken words or images?",
        "options": [
          "Blockchain and 5G",
          "Voice and visual search",
          "Animation and rendering",
          "Vector and raster graphics"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l2-q21",
        "text": "What does cross-platform integration aim to achieve?",
        "options": [
          "Using different content on every platform",
          "Preventing users from accessing content",
          "Maintaining consistent content across different platforms",
          "Eliminating multimedia applications"
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l2-q22",
        "text": "What is Emotional AI?",
        "options": [
          "AI that creates only animated images",
          "Machines interpreting and responding to human emotions",
          "Software used only for video editing",
          "A technique for compressing audio files"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l2-q23",
        "text": "Which technologies are used in immersive journalism?",
        "options": [
          "VR and AR",
          "JPEG and PNG",
          "HTML and XML",
          "Photoshop and Illustrator"
        ],
        "correctIndex": 0
      },
      {
        "id": "mm304-l2-q24",
        "text": "What does gamification mean in educational multimedia?",
        "options": [
          "Removing interaction from learning",
          "Using game elements in educational content",
          "Converting videos into images",
          "Using only printed materials"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l2-q25",
        "text": "How are vector graphics represented?",
        "options": [
          "As a collection of pixels only",
          "Through mathematical expressions describing geometric primitives",
          "As audio samples",
          "Through a sequence of video frames"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l2-q26",
        "text": "Which of the following is a common raster graphics format?",
        "options": [
          "JPEG",
          "Java3D",
          "OpenGL",
          "DirectX"
        ],
        "correctIndex": 0
      },
      {
        "id": "mm304-l2-q27",
        "text": "What does image resolution refer to?",
        "options": [
          "The number of colors in an image",
          "The number of pixels in an image",
          "The file extension",
          "The image editing software"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l2-q28",
        "text": "What is a pixel?",
        "options": [
          "A type of animation",
          "The smallest picture element in a digital image",
          "A video editing tool",
          "A color model"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l2-q29",
        "text": "What is the function of a frame buffer?",
        "options": [
          "Storing audio effects",
          "Holding the bitmap in RAM that is sent to the display",
          "Compressing video files",
          "Creating vector shapes"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l2-q30",
        "text": "What does color depth describe?",
        "options": [
          "The physical size of the screen",
          "The number of bits used to represent a pixel's color",
          "The brightness of the monitor only",
          "The number of images in a video"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l2-q31",
        "text": "A designer needs to create a company logo that can be resized without losing quality. Which graphics type should be used?",
        "options": [
          "Raster graphics",
          "Bitmap graphics",
          "Vector graphics",
          "Grayscale graphics"
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l2-q32",
        "text": "What is the approximate storage size of a 640 × 480 image using 1 bit per pixel?",
        "options": [
          "37.5 KB",
          "300 KB",
          "600 KB",
          "921.6 KB"
        ],
        "correctIndex": 0
      },
      {
        "id": "mm304-l2-q33",
        "text": "What is the approximate storage size of a 640 × 480 grayscale image using 8 bits per pixel?",
        "options": [
          "37.5 KB",
          "150 KB",
          "300 KB",
          "921.6 KB"
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l2-q34",
        "text": "In an 8-bit color image that uses a Look-Up Table (LUT), what does each pixel value represent?",
        "options": [
          "A complete 24-bit color value",
          "An index referring to a color in the LUT",
          "The brightness of the monitor",
          "The pixel's physical position"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l2-q35",
        "text": "If a pixel has a value of 25 in an indexed-color image, what does this value indicate?",
        "options": [
          "The pixel is 25 bits deep",
          "The pixel refers to entry number 25 in the LUT",
          "The image contains 25 pixels",
          "The pixel has 25 different colors"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l2-q36",
        "text": "What is the main storage difference between 8-bit and 24-bit images of the same dimensions?",
        "options": [
          "8-bit images use three bytes per pixel",
          "24-bit images use one byte per pixel",
          "24-bit images use three bytes per pixel, while 8-bit images use one",
          "Both use the same number of bytes per pixel"
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l2-q37",
        "text": "How many different colors can a 24-bit RGB image represent?",
        "options": [
          "256",
          "65,536",
          "1,024",
          "16,777,216"
        ],
        "correctIndex": 3
      },
      {
        "id": "mm304-l2-q38",
        "text": "What information is commonly stored in the additional 8 bits of a 32-bit image?",
        "options": [
          "Audio information",
          "Alpha information, such as transparency",
          "Image resolution",
          "Pixel coordinates"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l2-q39",
        "text": "Which statement correctly describes complementary, analogous, and split-complementary color schemes?",
        "options": [
          "Complementary colors are adjacent on the color wheel",
          "Analogous colors are opposite on the color wheel",
          "Split-complementary uses a main color and two colors beside its complement",
          "All three schemes use only black and white"
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l2-q40",
        "text": "What is the main characteristic of multispectral and hyperspectral images?",
        "options": [
          "They contain only black and white pixels",
          "They use more than three color channels or spectral bands",
          "They are always vector images",
          "They contain only 8-bit grayscale data"
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "mm304-lecture-3",
    "name": "Lecture 3: Image Formats, Color Science & Color Models",
    "description": "Popular image formats (GIF, JPEG, TIFF, PNG, PostScript, PDF), nature of light and reflection, additive (RGB) and subtractive (CMY/CMYK) color models.",
    "questions": [
      {
        "id": "mm304-l3-q1",
        "text": "Which of the following is one of the most important historical image formats because of its connection to the WWW and HTML?",
        "options": [
          "TIFF",
          "GIF",
          "PDF",
          "JPEG"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l3-q2",
        "text": "Which image format is currently considered the most important common file format according to the lecture?",
        "options": [
          "GIF",
          "TIFF",
          "JPEG",
          "PS"
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l3-q3",
        "text": "What does GIF stand for?",
        "options": [
          "Graphics Image Format",
          "Graphics Interchange Format",
          "General Image File",
          "Graphical Internet Format"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l3-q4",
        "text": "Which companies devised the GIF format?",
        "options": [
          "Microsoft and Apple",
          "Adobe and Microsoft",
          "UNISYS Corp. and CompuServe",
          "Google and IBM"
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l3-q5",
        "text": "Which compression algorithm does GIF use?",
        "options": [
          "JPEG",
          "Lempel-Ziv Welch (LZW)",
          "RGB",
          "CMYK"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l3-q6",
        "text": "What is the maximum color depth supported by GIF according to the lecture?",
        "options": [
          "1-bit",
          "4-bit",
          "8-bit",
          "24-bit"
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l3-q7",
        "text": "Which GIF version supports simple animation?",
        "options": [
          "GIF85",
          "GIF87a",
          "GIF89a",
          "GIF99a"
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l3-q8",
        "text": "What is JPEG mainly designed for?",
        "options": [
          "Audio compression",
          "Photographic image compression",
          "Vector graphics creation",
          "Simple animation"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l3-q9",
        "text": "Which type of compression does JPEG use?",
        "options": [
          "Lossless compression",
          "Lossy compression",
          "No compression",
          "Audio compression"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l3-q10",
        "text": "Which image format can store monochrome, grayscale, 8-bit RGB, and 24-bit RGB images?",
        "options": [
          "GIF",
          "TIFF",
          "JPEG",
          "PS"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l3-q11",
        "text": "Which format supports variable transparency through Alpha Channels?",
        "options": [
          "GIF",
          "JPEG",
          "PNG",
          "PS"
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l3-q12",
        "text": "What is one major shortcoming of PNG mentioned in the lecture?",
        "options": [
          "It does not support grayscale",
          "It does not support animation",
          "It cannot compress images",
          "It only supports 1-bit images"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l3-q13",
        "text": "What was the original purpose of developing GIF?",
        "options": [
          "Printing high-quality documents",
          "Transmitting graphical images over phone lines using modems",
          "Editing video files",
          "Creating 3D graphics"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l3-q14",
        "text": "What does interlacing mean in the context of GIF?",
        "options": [
          "A method of image encoding",
          "A method of audio compression",
          "A technique for adding transparency",
          "A method of converting RGB to CMY"
        ],
        "correctIndex": 0
      },
      {
        "id": "mm304-l3-q15",
        "text": "How does JPEG achieve high compression rates?",
        "options": [
          "By removing all image colors",
          "By taking advantage of limitations in the human visual system",
          "By converting images into vector graphics",
          "By storing images as audio data"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l3-q16",
        "text": "What does JPEG allow users to control?",
        "options": [
          "The number of animation frames",
          "The desired level of image quality and compression",
          "The number of Alpha Channels",
          "The image's physical dimensions only"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l3-q17",
        "text": "Which statement about TIFF is correct?",
        "options": [
          "It only supports 8-bit images",
          "It is always a lossy format",
          "It supports attaching additional information called tags",
          "It is mainly designed for simple animation"
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l3-q18",
        "text": "When is TIFF considered a lossless format according to the lecture?",
        "options": [
          "When using JPEG compression",
          "When not utilizing the JPEG tag",
          "When converting to GIF",
          "When using only 8-bit color"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l3-q19",
        "text": "What was the main design goal of PNG?",
        "options": [
          "To replace GIF and, to some extent, TIFF",
          "To replace all video formats",
          "To replace RGB color models",
          "To replace PDF documents"
        ],
        "correctIndex": 0
      },
      {
        "id": "mm304-l3-q20",
        "text": "What is the purpose of Gamma Correction in PNG?",
        "options": [
          "Adding animation",
          "Controlling image brightness across different platforms",
          "Increasing the number of pixels",
          "Converting images into sound"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l3-q21",
        "text": "How does PNG's interlacing differ from GIF's interlacing?",
        "options": [
          "PNG uses 1-D, while GIF uses 2-D",
          "PNG uses 2-D, while GIF uses 1-D",
          "Both use only 1-D interlacing",
          "Neither format supports interlacing"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l3-q22",
        "text": "According to the lecture, how much better can PNG compression be compared to GIF?",
        "options": [
          "1–5%",
          "5–25%",
          "30–50%",
          "60–80%"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l3-q23",
        "text": "Which three main image types does PNG support?",
        "options": [
          "Truecolor, grayscale, and palette-based",
          "Monochrome, audio, and video",
          "RGB, CMYK, and animation",
          "Vector, audio, and grayscale"
        ],
        "correctIndex": 0
      },
      {
        "id": "mm304-l3-q24",
        "text": "What does a PostScript (PS) file contain?",
        "options": [
          "Audio and video only",
          "Text, vector/structured graphics, and bit-mapped images",
          "Only compressed photographs",
          "Only animated images"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l3-q25",
        "text": "What is one disadvantage of PostScript mentioned in the lecture?",
        "options": [
          "It does not support text",
          "It does not provide compression, so files are often large",
          "It supports only grayscale images",
          "It cannot contain vector graphics"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l3-q26",
        "text": "What does PDF stand for?",
        "options": [
          "Portable Document Format",
          "Personal Data File",
          "Printed Document Function",
          "Portable Digital Frame"
        ],
        "correctIndex": 0
      },
      {
        "id": "mm304-l3-q27",
        "text": "Approximately how fast does light travel according to the lecture?",
        "options": [
          "30,000 km/s",
          "150,000 km/s",
          "300,000 km/s",
          "500,000 km/s"
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l3-q28",
        "text": "How many times can light travel around the world in one second, approximately?",
        "options": [
          "2 times",
          "4 times",
          "8 times",
          "20 times"
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l3-q29",
        "text": "How long does sunlight take to travel the average distance from the Sun to Earth?",
        "options": [
          "1 minute",
          "8 minutes and 17 seconds",
          "15 minutes",
          "30 minutes"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l3-q30",
        "text": "Why do we see objects that do not produce their own light?",
        "options": [
          "Because they absorb all light",
          "Because they reflect light into our eyes",
          "Because they produce sound waves",
          "Because they block all light"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l3-q31",
        "text": "Which statement correctly distinguishes luminous and non-luminous objects?",
        "options": [
          "Both produce their own light",
          "Luminous objects reflect light, while non-luminous objects produce light",
          "Luminous objects produce light, while non-luminous objects reflect light",
          "Neither type interacts with light"
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l3-q32",
        "text": "What is a shadow according to the lecture?",
        "options": [
          "A place where light is reflected",
          "A place where light is blocked",
          "A place where light is produced",
          "A place where light changes color"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l3-q33",
        "text": "According to the Law of Reflection, what is the relationship between the angle of incidence and the angle of reflection?",
        "options": [
          "The angle of incidence is twice the angle of reflection",
          "The angle of reflection is always zero",
          "Both angles are equal",
          "Both angles are always different"
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l3-q34",
        "text": "What happens in additive color mixing when two light beams combine?",
        "options": [
          "Their colors are subtracted",
          "Their colors are added",
          "Both colors disappear",
          "They always produce black"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l3-q35",
        "text": "What color is produced when red and green light are combined in the additive color model?",
        "options": [
          "Blue",
          "Cyan",
          "Yellow",
          "Magenta"
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l3-q36",
        "text": "Which color model uses Cyan, Magenta, and Yellow as its primary colors?",
        "options": [
          "RGB",
          "CMY",
          "CMYK",
          "HSV"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l3-q37",
        "text": "In the subtractive color model, how is Cyan represented using the normalized RGB values?",
        "options": [
          "C = W + R",
          "C = W − R",
          "C = W − G",
          "C = W − B"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l3-q38",
        "text": "If an RGB color is represented by normalized values (R, G, B) = (0.2, 1, 0.5), what are its corresponding CMY values?",
        "options": [
          "(0.2, 1, 0.5)",
          "(0.8, 0, 0.5)",
          "(0.8, 1, 0.5)",
          "(0, 0.2, 0.5)"
        ],
        "correctIndex": 1,
        "explanation": "C = 1 − R = 0.8, M = 1 − G = 0, Y = 1 − B = 0.5."
      },
      {
        "id": "mm304-l3-q39",
        "text": "Why is black ink (K) added to the CMY system in CMYK?",
        "options": [
          "To increase image resolution",
          "Because mixing equal amounts of CMY usually produces dark brown instead of true black",
          "To create animation",
          "To convert images into grayscale"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l3-q40",
        "text": "Why are RGB inks not used for printing on white paper, according to the lecture?",
        "options": [
          "Because paper emits light like a monitor",
          "Because paper reflects light, so printing requires subtracting light components from white",
          "Because RGB cannot represent colors",
          "Because RGB only works with animation"
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "mm304-lecture-4",
    "name": "Lecture 4: Lossless Compression & Information Theory",
    "description": "Lossless vs. lossy compression, compression ratio, entropy and self-information, Run-Length Coding (RLC), Shannon-Fano algorithm, and Huffman/Adaptive Huffman coding.",
    "questions": [
      {
        "id": "mm304-l4-q1",
        "text": "Why are compression methods important in multimedia applications?",
        "options": [
          "They increase file size",
          "They reduce storage and bandwidth requirements",
          "They improve screen resolution",
          "They eliminate the need for media files"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l4-q2",
        "text": "What is data compression?",
        "options": [
          "Increasing the number of bits used to represent information",
          "Reducing the total number of bits needed to represent information",
          "Converting images into audio",
          "Increasing video frame rates"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l4-q3",
        "text": "When is a compression scheme considered lossless?",
        "options": [
          "When some information is removed",
          "When decompression produces less information",
          "When no information is lost during compression and decompression",
          "When the compressed file is larger than the original"
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l4-q4",
        "text": "When is a compression scheme considered lossy?",
        "options": [
          "When no information is lost",
          "When compression and decompression cause information loss",
          "When the file is converted into binary",
          "When the compression ratio equals zero"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l4-q5",
        "text": "What does B0 represent in the compression ratio formula?",
        "options": [
          "Number of bits after compression",
          "Number of bits before compression",
          "Number of pixels",
          "Number of symbols"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l4-q6",
        "text": "What does B1 represent in the compression ratio formula?",
        "options": [
          "Number of bits before compression",
          "Number of bits after compression",
          "Number of bytes in memory",
          "Number of video frames"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l4-q7",
        "text": "What is the formula for compression ratio?",
        "options": [
          "B1 / B0",
          "B0 × B1",
          "B0 / B1",
          "B0 − B1"
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l4-q8",
        "text": "What is the lower bound on the number of bits needed to encode a media source?",
        "options": [
          "Resolution",
          "Entropy",
          "Compression ratio",
          "Frame rate"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l4-q9",
        "text": "What is the self-information of an event A?",
        "options": [
          "P(A)",
          "-log2 P(A)",
          "P(A)^2",
          "log2 P(A)"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l4-q10",
        "text": "What does P(A) represent in the self-information formula?",
        "options": [
          "The size of event A",
          "The probability of event A",
          "The number of bits in event A",
          "The frequency of the entire source"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l4-q11",
        "text": "Which event carries more self-information?",
        "options": [
          "An event with higher probability",
          "An event with lower probability",
          "Both always carry equal information",
          "An event with probability 1"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l4-q12",
        "text": "What is a memoryless source?",
        "options": [
          "A source where the current symbol depends on previous symbols",
          "A source where symbols are independently distributed",
          "A source that stores all previous symbols",
          "A source that produces only binary data"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l4-q13",
        "text": "What is the main idea behind Run-Length Coding (RLC)?",
        "options": [
          "It ignores repeated symbols",
          "It exploits memory present in the information source",
          "It converts all symbols into equal-length codes",
          "It increases the number of pixels"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l4-q14",
        "text": "What is the main difference between a memoryless source and the source exploited by Run-Length Coding?",
        "options": [
          "A memoryless source has independent symbols, while RLC exploits dependencies or runs in the source",
          "Both assume all symbols are independent",
          "RLC works only with audio",
          "A memoryless source always produces longer files"
        ],
        "correctIndex": 0
      },
      {
        "id": "mm304-l4-q15",
        "text": "In binary image compression using Run-Length Coding, what do the letters 'b' and 'w' represent in a code such as 2b 8w?",
        "options": [
          "Blue and white",
          "Black and white",
          "Binary and word",
          "Brightness and width"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l4-q16",
        "text": "In the lecture's binary image compression example, what is the encoded sequence?",
        "options": [
          "2b 8w 2b 4b 8w",
          "8b 2w 4b 2w",
          "2w 8b 2w 4w",
          "4b 4w 4b 4w"
        ],
        "correctIndex": 0
      },
      {
        "id": "mm304-l4-q17",
        "text": "Why can the black and white information be removed from the RLC code in the lecture's example?",
        "options": [
          "Because the image contains no colors",
          "Because the colors can be understood from the sequence order",
          "Because all pixels are identical",
          "Because RLC only stores white pixels"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l4-q18",
        "text": "What does VLC stand for?",
        "options": [
          "Variable-Length Coding",
          "Visual Level Compression",
          "Video Lossless Conversion",
          "Variable Logic Code"
        ],
        "correctIndex": 0
      },
      {
        "id": "mm304-l4-q19",
        "text": "Which approach does the Shannon-Fano algorithm use?",
        "options": [
          "Bottom-up approach",
          "Top-down approach",
          "Random approach",
          "Pixel-based approach"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l4-q20",
        "text": "What is the first step in the Shannon-Fano algorithm?",
        "options": [
          "Combine the two smallest probabilities",
          "Sort symbols according to their frequency counts",
          "Assign the same code to all symbols",
          "Remove the least frequent symbol"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l4-q21",
        "text": "In Shannon-Fano coding, how are symbols divided?",
        "options": [
          "Into two parts with approximately equal frequency counts",
          "Into groups based on alphabetical order only",
          "Into groups with completely random counts",
          "Into groups containing exactly three symbols"
        ],
        "correctIndex": 0
      },
      {
        "id": "mm304-l4-q22",
        "text": "In the word \"HELLO\", which symbol has the highest frequency?",
        "options": [
          "H",
          "E",
          "L",
          "O"
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l4-q23",
        "text": "What is the frequency count of the letter L in \"HELLO\"?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l4-q24",
        "text": "According to one Shannon-Fano result shown in the lecture, what code is assigned to L in \"HELLO\"?",
        "options": [
          "10",
          "110",
          "111",
          "0"
        ],
        "correctIndex": 3
      },
      {
        "id": "mm304-l4-q25",
        "text": "What is the total number of bits used in the first Shannon-Fano coding result for \"HELLO\"?",
        "options": [
          "5 bits",
          "8 bits",
          "10 bits",
          "12 bits"
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l4-q26",
        "text": "What is the main principle of Huffman Coding?",
        "options": [
          "Assign more bits to frequent symbols",
          "Assign fewer bits to frequent symbols and more bits to less frequent symbols",
          "Assign equal-length codes to all symbols",
          "Ignore symbol probabilities"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l4-q27",
        "text": "What is the first step in the Huffman Coding algorithm?",
        "options": [
          "Combine all symbols into one node",
          "Make a leaf node for each code symbol and assign its probability",
          "Delete the least frequent symbol",
          "Assign random binary codes"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l4-q28",
        "text": "Which two nodes are combined during each step of Huffman Coding?",
        "options": [
          "The two nodes with the highest probabilities",
          "The two nodes with the smallest probabilities",
          "Any two random nodes",
          "The first two nodes alphabetically"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l4-q29",
        "text": "How is the probability of a newly created Huffman node calculated?",
        "options": [
          "By subtracting the probabilities of its children",
          "By multiplying the probabilities of its children",
          "By adding the probabilities of its two connected nodes",
          "By dividing the probabilities by two"
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l4-q30",
        "text": "Is there only one possible Huffman code for a given source?",
        "options": [
          "Yes, there is always exactly one",
          "No, multiple Huffman codes can exist, and they have the same average code length",
          "Yes, but only for binary sources",
          "No, and every code has a different average length"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l4-q31",
        "text": "A source produces two symbols: 0 with probability 0.25 and 1 with probability 0.75. What is the self-information when symbol 0 is received?",
        "options": [
          "0.4150 bits",
          "0.75 bits",
          "1 bit",
          "2 bits"
        ],
        "correctIndex": 3,
        "explanation": "I(0) = -log2(0.25) = 2 bits."
      },
      {
        "id": "mm304-l4-q32",
        "text": "Using the same source, what is the self-information when symbol 1 is received?",
        "options": [
          "0.4150 bits",
          "1 bit",
          "2 bits",
          "3 bits"
        ],
        "correctIndex": 0,
        "explanation": "I(1) = -log2(0.75) ≈ 0.4150 bits."
      },
      {
        "id": "mm304-l4-q33",
        "text": "What is the entropy of a source where P(0) = 0.25 and P(1) = 0.75?",
        "options": [
          "0.4150 bits",
          "0.8113 bits",
          "1.0000 bits",
          "2.0000 bits"
        ],
        "correctIndex": 1,
        "explanation": "H(S) = 0.25 × 2 + 0.75 × 0.4150 ≈ 0.8113 bits."
      },
      {
        "id": "mm304-l4-q34",
        "text": "What does the entropy value of 0.8113 bits per symbol indicate in the previous example?",
        "options": [
          "Every symbol must use exactly 2 bits",
          "At least 0.8113 bits per symbol are needed for encoding",
          "The source contains 0.8113 symbols",
          "The compression ratio is 0.8113"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l4-q35",
        "text": "What happens to the self-information when the probability of an event decreases?",
        "options": [
          "Self-information decreases",
          "Self-information increases",
          "Self-information becomes zero",
          "Self-information remains constant"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l4-q36",
        "text": "Two independent symbols are received. How is their combined self-information calculated?",
        "options": [
          "By multiplying their individual self-information values",
          "By subtracting their individual self-information values",
          "By adding their individual self-information values",
          "By dividing one value by the other"
        ],
        "correctIndex": 2
      },
      {
        "id": "mm304-l4-q37",
        "text": "In Adaptive Huffman Coding, when are statistics gathered and updated?",
        "options": [
          "Only before the data stream starts",
          "Dynamically as the data stream arrives",
          "Only after the entire file is received",
          "Only when the file is decompressed"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l4-q38",
        "text": "What are the two main operations performed by update_tree(c) in Adaptive Huffman Coding?",
        "options": [
          "Compressing the file and deleting symbols",
          "Incrementing symbol frequency counts and updating the tree configuration",
          "Sorting symbols alphabetically and resetting probabilities",
          "Encoding and decoding the entire file"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l4-q39",
        "text": "What is the sibling property in an Adaptive Huffman Tree?",
        "options": [
          "All nodes must have equal counts",
          "All nodes, internal and leaf, must be arranged in increasing order of counts",
          "All leaf nodes must have zero counts",
          "The tree must contain only two nodes"
        ],
        "correctIndex": 1
      },
      {
        "id": "mm304-l4-q40",
        "text": "In Adaptive Huffman Coding, what happens when a new symbol is transmitted for the first time?",
        "options": [
          "It is ignored by the encoder",
          "It must be preceded by a special symbol called NEW",
          "It is assigned the highest frequency immediately",
          "It is always encoded using three bits"
        ],
        "correctIndex": 1,
        "explanation": "According to the lecture, NEW has an initial code of 0, and its count remains zero."
      }
    ]
  }
];

export const introToMultimedia: Subject = {
  id: "MM304",
  name: "Intro to Multimedia",
  icon: "Film",
  description:
    "Multimedia modalities, authoring tools, XR technologies, hypermedia, web standards, and digital media history.",
  color: "#8B5CF6",
  professor: "Dr. Hossam Moftah",
  chapters,
  questions: chapters.flatMap((chapter) => chapter.questions),
};
