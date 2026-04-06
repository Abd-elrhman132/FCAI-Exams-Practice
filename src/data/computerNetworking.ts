import { Subject } from "@/types";

const chapters = [
  {
    id: "networking-chapter-1",
    name: "Chapter 1: Introduction to Computer Networks",
    description:
      "Network fundamentals, hosts and server roles, IP and MAC addressing, DNS, and basic network commands.",
    questions: [
      {
        id: "it351-ch2-q1",
        text: "What is the core concept of a network?",
        options: [
          "Storage only",
          "Connections between components",
          "Single device",
          "No interaction",
        ],
        correctIndex: 1,
        explanation:
          "A network is fundamentally based on connections between components that allow them to communicate and interact.",
      },
      {
        id: "it351-ch2-q2",
        text: "Which of the following is a type of network?",
        options: [
          "Neural Network",
          "Food Network",
          "Water Network",
          "Energy Device",
        ],
        correctIndex: 0,
        explanation:
          "Neural Network is explicitly mentioned as a type of network in the material.",
      },
      {
        id: "it351-ch2-q3",
        text: "Which is NOT a general characteristic of networks?",
        options: [
          "Communication",
          "Resource Sharing",
          "Isolation",
          "Scalability",
        ],
        correctIndex: 2,
        explanation:
          "Networks are built on communication and sharing, not isolation.",
      },
      {
        id: "it351-ch2-q4",
        text: "A computer network is used to:",
        options: [
          "Isolate devices",
          "Share data and resources",
          "Delete data",
          "Run only software",
        ],
        correctIndex: 1,
        explanation:
          "Computer networks connect devices to share data and resources.",
      },
      {
        id: "it351-ch2-q5",
        text: "Computer networks can be:",
        options: [
          "Only local",
          "Only global",
          "Local or wide-area",
          "Personal only",
        ],
        correctIndex: 2,
        explanation: "Networks can be local (LAN) or wide-area (WAN).",
      },
      {
        id: "it351-ch2-q6",
        text: "Which is NOT a use of computer networks?",
        options: [
          "Communication",
          "Entertainment",
          "Data storage",
          "Device destruction",
        ],
        correctIndex: 3,
        explanation:
          "Networks are used for communication, entertainment, and storage—not destruction.",
      },
      {
        id: "it351-ch2-q7",
        text: "What is a Host?",
        options: [
          "Only a server",
          "Device that sends or receives traffic",
          "Only a router",
          "Only a computer",
        ],
        correctIndex: 1,
        explanation:
          "A host is any device that can send or receive data over a network.",
      },
      {
        id: "it351-ch2-q8",
        text: "Which of the following is a host?",
        options: ["Refrigerator", "Smart watch", "Printer", "All of the above"],
        correctIndex: 3,
        explanation:
          "All listed devices can act as hosts if they send or receive data.",
      },
      {
        id: "it351-ch2-q9",
        text: "A client:",
        options: [
          "Responds to requests",
          "Initiates requests",
          "Stores data only",
          "Controls network",
        ],
        correctIndex: 1,
        explanation: "A client initiates requests to a server.",
      },
      {
        id: "it351-ch2-q10",
        text: "A server:",
        options: [
          "Initiates requests",
          "Responds to requests",
          "Has no software",
          "Is not a computer",
        ],
        correctIndex: 1,
        explanation: "A server responds to requests made by clients.",
      },
      {
        id: "it351-ch2-q11",
        text: "What is an IP address?",
        options: [
          "Device name",
          "Identity of each host",
          "Type of cable",
          "Network speed",
        ],
        correctIndex: 1,
        explanation:
          "An IP address uniquely identifies each host on a network.",
      },
      {
        id: "it351-ch2-q12",
        text: "IPv4 address length is:",
        options: ["16 bits", "32 bits", "64 bits", "128 bits"],
        correctIndex: 1,
        explanation: "IPv4 addresses are 32 bits long.",
      },
      {
        id: "it351-ch2-q13",
        text: "Each octet ranges from:",
        options: ["0–100", "0–255", "1–500", "10–1000"],
        correctIndex: 1,
        explanation: "Each octet in an IPv4 address ranges from 0 to 255.",
      },
      {
        id: "it351-ch2-q14",
        text: "Public IP address is:",
        options: [
          "Used only locally",
          "Assigned by router",
          "Global and unique",
          "Same for all devices",
        ],
        correctIndex: 2,
        explanation:
          "Public IP addresses are globally unique and used on the internet.",
      },
      {
        id: "it351-ch2-q15",
        text: "Private IP address is:",
        options: [
          "Global",
          "Unique worldwide",
          "Used inside local network",
          "Assigned by ISP",
        ],
        correctIndex: 2,
        explanation:
          "Private IP addresses are used within local networks only.",
      },
      {
        id: "it351-ch2-q16",
        text: "MAC address length is:",
        options: ["32 bits", "48 bits", "64 bits", "128 bits"],
        correctIndex: 1,
        explanation: "MAC addresses are 48 bits long.",
      },
      {
        id: "it351-ch2-q17",
        text: "DNS is used to:",
        options: [
          "Store data",
          "Translate domain names to IP",
          "Speed internet",
          "Block users",
        ],
        correctIndex: 1,
        explanation: "DNS translates domain names into IP addresses.",
      },
      {
        id: "it351-ch2-q18",
        text: "ping command is used to:",
        options: [
          "Show IP config",
          "Test connectivity",
          "Show MAC address",
          "Change IP",
        ],
        correctIndex: 1,
        explanation:
          "Ping tests the connectivity between devices on a network.",
      },
      {
        id: "it351-ch2-q19",
        text: "ipconfig command shows:",
        options: ["MAC address only", "IP configuration", "DNS only", "Speed"],
        correctIndex: 1,
        explanation: "ipconfig displays IP configuration details of a device.",
      },
      {
        id: "it351-ch2-q20",
        text: "tracert command is used to:",
        options: [
          "Show MAC",
          "Trace route of packets",
          "Change DNS",
          "Restart network",
        ],
        correctIndex: 1,
        explanation:
          "tracert shows the path that packets take to reach a destination.",
      },
    ],
  },
  {
    id: "networking-chapter-2",
    name: "Chapter 2: Network Devices and Transmission Media",
    description:
      "Network devices, switching and routing, transmission media, and cable categories.",
    questions: [
      {
        id: "it351-ch2-q1",
        text: "Which device converts digital data from a computer into an analog signal for transmission over telephone lines?",
        options: ["Router", "Modem", "Switch", "Bridge"],
        correctIndex: 1,
        explanation:
          "A modem converts digital data from a computer into an analog signal so it can be transmitted over telephone lines or cable systems.",
      },
      {
        id: "it351-ch2-q2",
        text: "What is the main function of a Network Interface Card (NIC)?",
        options: [
          "Connects different networks",
          "Connects a computer to a network",
          "Filters network traffic",
          "Converts signals",
        ],
        correctIndex: 1,
        explanation:
          "A Network Interface Card (NIC) allows a computer to connect to a network, either through a wired or wireless connection.",
      },
      {
        id: "it351-ch2-q3",
        text: "Which device extends the range of a network by amplifying and retransmitting signals?",
        options: ["Bridge", "Router", "Repeater", "Switch"],
        correctIndex: 2,
        explanation:
          "A repeater regenerates and amplifies signals so they can travel longer distances in a network.",
      },
      {
        id: "it351-ch2-q4",
        text: "Which device connects and filters traffic between two network segments?",
        options: ["Bridge", "Router", "Hub", "Access Point"],
        correctIndex: 0,
        explanation:
          "A bridge connects two network segments and filters traffic to reduce unnecessary data transmission.",
      },
      {
        id: "it351-ch2-q5",
        text: "At which OSI layer does a Switch operate?",
        options: ["Layer 1", "Layer 2", "Layer 3", "Layer 4"],
        correctIndex: 1,
        explanation:
          "A switch operates at Layer 2 (Data Link Layer) and forwards data using MAC addresses.",
      },
      {
        id: "it351-ch2-q6",
        text: "Which device connects different networks together?",
        options: ["Router", "Hub", "Switch", "Repeater"],
        correctIndex: 0,
        explanation:
          "A router connects different networks and forwards data packets based on IP addresses.",
      },
      {
        id: "it351-ch2-q7",
        text: "Which device operates at the Physical Layer and connects multiple devices in a network?",
        options: ["Hub", "Router", "Switch", "Gateway"],
        correctIndex: 0,
        explanation:
          "A hub operates at the Physical Layer (Layer 1) and broadcasts data to all connected devices.",
      },
      {
        id: "it351-ch2-q8",
        text: "Which device allows wireless devices to connect to a wired network using Wi-Fi?",
        options: ["Router", "Switch", "Access Point", "Bridge"],
        correctIndex: 2,
        explanation:
          "An Access Point (AP) enables wireless devices to connect to a wired network through Wi-Fi.",
      },
      {
        id: "it351-ch2-q9",
        text: "Which device protects a network by controlling incoming and outgoing traffic?",
        options: ["Firewall", "Router", "Hub", "Bridge"],
        correctIndex: 0,
        explanation:
          "A firewall monitors and controls incoming and outgoing network traffic to protect the network from unauthorized access.",
      },
      {
        id: "it351-ch2-q10",
        text: "Which cable type consists of pairs of insulated copper wires twisted together?",
        options: [
          "Coaxial cable",
          "Fiber optic",
          "Twisted pair cable",
          "Infrared cable",
        ],
        correctIndex: 2,
        explanation:
          "Twisted pair cables contain pairs of copper wires twisted together to reduce electromagnetic interference.",
      },
      {
        id: "it351-ch2-q11",
        text: "Which device uses MAC addresses to transfer data within a network?",
        options: ["Router", "Hub", "Switch", "Repeater"],
        correctIndex: 2,
        explanation:
          "A switch forwards frames using MAC addresses to deliver data to the correct device within a network.",
      },
      {
        id: "it351-ch2-q12",
        text: "Which device uses IP addresses to transfer data between networks?",
        options: ["Router", "Hub", "Switch", "Repeater"],
        correctIndex: 0,
        explanation:
          "Routers use IP addresses to determine the best path for data between different networks.",
      },
      {
        id: "it351-ch2-q13",
        text: "Which device is considered a broadcast device?",
        options: ["Router", "Switch", "Hub", "Gateway"],
        correctIndex: 2,
        explanation:
          "A hub sends incoming data to all connected devices, which is why it is considered a broadcast device.",
      },
      {
        id: "it351-ch2-q14",
        text: "Which device translates data between different protocols?",
        options: ["Switch", "Gateway", "Repeater", "Hub"],
        correctIndex: 1,
        explanation:
          "A gateway translates data between different network protocols so that different networks can communicate.",
      },
      {
        id: "it351-ch2-q15",
        text: "What is the main purpose of a firewall?",
        options: [
          "Increase signal strength",
          "Connect devices",
          "Protect network traffic",
          "Translate protocols",
        ],
        correctIndex: 2,
        explanation:
          "A firewall protects a network by filtering and monitoring traffic based on security rules.",
      },
      {
        id: "it351-ch2-q16",
        text: "What is the main purpose of routing?",
        options: [
          "Move data within the same network",
          "Move data between networks",
          "Convert signals",
          "Amplify signals",
        ],
        correctIndex: 1,
        explanation:
          "Routing is the process of directing data packets from one network to another.",
      },
      {
        id: "it351-ch2-q17",
        text: "What is the main purpose of switching?",
        options: [
          "Move data between networks",
          "Move data within the same network",
          "Convert signals",
          "Amplify signals",
        ],
        correctIndex: 1,
        explanation:
          "Switching transfers data between devices within the same local network.",
      },
      {
        id: "it351-ch2-q18",
        text: "What is a transmission medium?",
        options: [
          "A network device",
          "The physical path used to transmit data",
          "A network protocol",
          "A firewall system",
        ],
        correctIndex: 1,
        explanation:
          "A transmission medium is the physical path through which data travels, such as cables or wireless signals.",
      },
      {
        id: "it351-ch2-q19",
        text: "Which of the following is an example of guided media?",
        options: ["Radio waves", "Microwave", "Copper cable", "Infrared"],
        correctIndex: 2,
        explanation:
          "Guided media uses a physical path such as copper cables or fiber optic cables to transmit data.",
      },
      {
        id: "it351-ch2-q20",
        text: "Which technology transmits data using light through thin strands of glass or plastic?",
        options: [
          "Coaxial cable",
          "Fiber optic",
          "Twisted pair",
          "Radio waves",
        ],
        correctIndex: 1,
        explanation:
          "Fiber optic cables transmit data as light signals through very thin strands of glass or plastic.",
      },
      {
        id: "it351-ch2-q21",
        text: "Which cable type has a central conductor, insulating layer, and metallic shield?",
        options: [
          "Fiber optic",
          "Coaxial cable",
          "Twisted pair",
          "Ethernet cable",
        ],
        correctIndex: 1,
        explanation:
          "Coaxial cable contains a central conductor surrounded by insulation and a metallic shield to reduce interference.",
      },
      {
        id: "it351-ch1-q22",
        text: "What is the main advantage of twisted pair cables?",
        options: [
          "Transmit light signals",
          "Reduce electromagnetic interference",
          "Increase broadcast traffic",
          "Convert signals",
        ],
        correctIndex: 1,
        explanation:
          "The twisted structure helps reduce electromagnetic interference (EMI).",
      },
      {
        id: "it351-ch1-q23",
        text: "What does EMI stand for?",
        options: [
          "Electronic Media Interface",
          "Electromagnetic Interference",
          "External Media Integration",
          "Ethernet Media Input",
        ],
        correctIndex: 1,
        explanation:
          "EMI stands for Electromagnetic Interference, which can disrupt signal transmission.",
      },
      {
        id: "it351-ch1-q24",
        text: "Which twisted pair cable category supports speeds up to 1 Gbps?",
        options: ["CAT3", "CAT4", "CAT5e", "CAT1"],
        correctIndex: 2,
        explanation: "CAT5e cables support speeds up to 1 Gigabit per second.",
      },
      {
        id: "it351-ch1-q25",
        text: "Which cable category can support up to 10 Gbps?",
        options: ["CAT2", "CAT3", "CAT6", "CAT1"],
        correctIndex: 2,
        explanation:
          "CAT6 cables can support speeds up to 10 Gbps under certain conditions.",
      },
      {
        id: "it351-ch1-q26",
        text: "Which cable category supports speeds up to 40 Gbps?",
        options: ["CAT5", "CAT6", "CAT7", "CAT8"],
        correctIndex: 3,
        explanation:
          "CAT8 cables can support speeds up to 40 Gbps in high-performance networks.",
      },
      {
        id: "it351-ch1-q27",
        text: "Which of the following is an example of unguided transmission media?",
        options: [
          "Fiber optic",
          "Twisted pair",
          "Radio waves",
          "Coaxial cable",
        ],
        correctIndex: 2,
        explanation:
          "Unguided media transmits signals through the air, such as radio waves, Wi-Fi, and microwave signals.",
      },
      {
        id: "it351-ch1-q28",
        text: "Which device regenerates signals in a network?",
        options: ["Router", "Repeater", "Switch", "Gateway"],
        correctIndex: 1,
        explanation:
          "A repeater regenerates weak signals to extend the distance a network can cover.",
      },
      {
        id: "it351-ch1-q29",
        text: "What is a host in a network?",
        options: [
          "A network cable",
          "Any device that sends or receives traffic",
          "A router",
          "A firewall",
        ],
        correctIndex: 1,
        explanation:
          "A host is any device connected to a network that can send or receive data, such as computers, phones, or servers.",
      },
      {
        id: "it351-ch2-q30",
        text: "What identifies each host on a network?",
        options: ["MAC address", "IP address", "Port number", "Protocol"],
        correctIndex: 1,
        explanation:
          "An IP address uniquely identifies a host on a network so it can communicate with other devices.",
      },
    ],
  },
  {
    id: "networking-chapter-3",
    name: "Chapter 3: Network Types, Architectures, and Topologies",
    description:
      "Client-server and peer-to-peer models, network types, transmission modes, topologies, and simulators.",
    questions: [
      {
        id: "it351-ch3-q1",
        text: "Which network architecture consists of computers that act as both client and server?",
        options: ["Client-Server", "Peer-to-Peer", "LAN", "WAN"],
        correctIndex: 1,
        explanation:
          "In a Peer-to-Peer architecture, each computer can act as both a client and a server, meaning it can request services and also provide services to other devices without relying on a central server.",
      },
      {
        id: "it351-ch3-q2",
        text: "In which architecture does a central server provide services to clients?",
        options: ["Peer-to-Peer", "Client-Server", "PAN", "MAN"],
        correctIndex: 1,
        explanation:
          "In the Client-Server architecture, a central server provides services or resources, while other computers (clients) request those services.",
      },
      {
        id: "it351-ch3-q3",
        text: "Which network type typically covers a range of about 10 meters?",
        options: ["LAN", "PAN", "MAN", "WAN"],
        correctIndex: 1,
        explanation:
          "PAN (Personal Area Network) covers a very small range around a person, usually about 10 meters, such as Bluetooth connections between devices.",
      },
      {
        id: "it351-ch3-q4",
        text: "Which network connects computers within a building or office?",
        options: ["WAN", "MAN", "LAN", "PAN"],
        correctIndex: 2,
        explanation:
          "LAN (Local Area Network) connects computers within a limited area such as a building, office, or school.",
      },
      {
        id: "it351-ch3-q5",
        text: "Which network covers a city?",
        options: ["PAN", "LAN", "MAN", "SAN"],
        correctIndex: 2,
        explanation:
          "MAN (Metropolitan Area Network) is designed to cover a city or a large metropolitan area.",
      },
      {
        id: "it351-ch3-q6",
        text: "Which network covers a very large geographical area like countries?",
        options: ["LAN", "WAN", "PAN", "CAN"],
        correctIndex: 1,
        explanation:
          "WAN (Wide Area Network) spans very large geographical areas such as countries or continents. The Internet is a good example.",
      },
      {
        id: "it351-ch3-q7",
        text: "What is the largest WAN in the world?",
        options: ["LAN", "Internet", "Bluetooth", "SAN"],
        correctIndex: 1,
        explanation:
          "The Internet is the largest WAN because it connects networks across the entire world.",
      },
      {
        id: "it351-ch3-q8",
        text: "What does SAN stand for?",
        options: [
          "System Area Network",
          "Storage Area Network",
          "Secure Access Network",
          "Server Access Network",
        ],
        correctIndex: 1,
        explanation:
          "SAN stands for Storage Area Network, which is a specialized network that connects servers to storage devices.",
      },
      {
        id: "it351-ch3-q9",
        text: "In Simplex transmission mode, communication is:",
        options: [
          "Two directions simultaneously",
          "One direction only",
          "Both directions but not simultaneously",
          "Random directions",
        ],
        correctIndex: 1,
        explanation:
          "Simplex communication allows data to travel in only one direction, such as radio broadcasting.",
      },
      {
        id: "it351-ch3-q10",
        text: "In Half-Duplex mode, communication:",
        options: [
          "Occurs in one direction only",
          "Occurs simultaneously in both directions",
          "Occurs in both directions but not at the same time",
          "Cannot occur",
        ],
        correctIndex: 2,
        explanation:
          "Half-Duplex communication allows data to move in both directions, but not at the same time, like walkie-talkies.",
      },
      {
        id: "it351-ch3-q11",
        text: "In Full-Duplex mode, communication occurs:",
        options: [
          "One direction only",
          "Two directions simultaneously",
          "One device only",
          "No communication",
        ],
        correctIndex: 1,
        explanation:
          "Full-Duplex allows devices to send and receive data at the same time, such as in telephone conversations.",
      },
      {
        id: "it351-ch3-q12",
        text: "What is Network Topology?",
        options: [
          "Type of network cable",
          "Arrangement of nodes and connections in a network",
          "Network protocol",
          "Network speed",
        ],
        correctIndex: 1,
        explanation:
          "Network topology refers to the layout or arrangement of devices (nodes) and how they are connected within a network.",
      },
      {
        id: "it351-ch3-q13",
        text: "Which topology connects two nodes directly?",
        options: ["Bus", "Point-to-Point", "Star", "Ring"],
        correctIndex: 1,
        explanation:
          "Point-to-Point topology directly connects two devices with a single dedicated link.",
      },
      {
        id: "it351-ch3-q14",
        text: "Which topology uses a single central cable?",
        options: ["Bus", "Star", "Ring", "Mesh"],
        correctIndex: 0,
        explanation:
          "Bus topology uses a single backbone cable to which all devices are connected.",
      },
      {
        id: "it351-ch3-q15",
        text: "Which topology connects devices in a circular structure?",
        options: ["Star", "Bus", "Ring", "Tree"],
        correctIndex: 2,
        explanation:
          "In a Ring topology, each device is connected to two others, forming a circular data path.",
      },
      {
        id: "it351-ch3-q16",
        text: "Which topology has a central node connecting all devices?",
        options: ["Ring", "Bus", "Star", "Mesh"],
        correctIndex: 2,
        explanation:
          "In Star topology, all devices are connected to a central device such as a switch or hub.",
      },
      {
        id: "it351-ch3-q17",
        text: "Which topology combines multiple topologies together?",
        options: ["Hybrid", "Star", "Bus", "Ring"],
        correctIndex: 0,
        explanation:
          "Hybrid topology combines two or more different network topologies in a single network.",
      },
      {
        id: "it351-ch3-q18",
        text: "Which topology connects every device to every other device?",
        options: ["Tree", "Mesh", "Bus", "Ring"],
        correctIndex: 1,
        explanation:
          "In Mesh topology, every device is connected directly to every other device, providing high reliability.",
      },
      {
        id: "it351-ch3-q19",
        text: "What is a network diagram tool used for?",
        options: [
          "Sending data",
          "Creating visual network representations",
          "Repairing networks",
          "Installing networks",
        ],
        correctIndex: 1,
        explanation:
          "Network diagram tools help create visual representations of network structures and connections.",
      },
      {
        id: "it351-ch3-q20",
        text: "Which of the following is a network diagram tool?",
        options: ["SmartDraw", "Chrome", "Word", "VLC"],
        correctIndex: 0,
        explanation:
          "SmartDraw is a tool used for creating network diagrams and other technical visualizations.",
      },
      {
        id: "it351-ch3-q21",
        text: "What is a network simulator?",
        options: [
          "Real network hardware",
          "Software that simulates networks",
          "Cable testing device",
          "Router configuration tool",
        ],
        correctIndex: 1,
        explanation:
          "A network simulator is software that imitates the behavior of real networks for learning and testing.",
      },
      {
        id: "it351-ch3-q22",
        text: "Network simulators allow testing networks without:",
        options: ["Internet", "Software", "Physical hardware", "Protocols"],
        correctIndex: 2,
        explanation:
          "Network simulators allow users to test and design networks without needing real physical devices.",
      },
      {
        id: "it351-ch3-q23",
        text: "Which simulator was developed by Cisco?",
        options: ["Wireshark", "Packet Tracer", "GNS3", "VMware"],
        correctIndex: 1,
        explanation:
          "Cisco Packet Tracer is a network simulation tool developed by Cisco for educational purposes.",
      },
      {
        id: "it351-ch3-q24",
        text: "Packet Tracer is mainly used for:",
        options: [
          "Gaming",
          "Network education and training",
          "Video editing",
          "Database management",
        ],
        correctIndex: 1,
        explanation:
          "Packet Tracer is mainly used by students and instructors to learn and practice networking concepts.",
      },
      {
        id: "it351-ch3-q25",
        text: "Which simulator is also known as Graphical Network Simulator-3?",
        options: ["GNS3", "Packet Tracer", "Cisco IOS", "Wireshark"],
        correctIndex: 0,
        explanation:
          "GNS3 stands for Graphical Network Simulator-3, which is a powerful network simulation platform.",
      },
      {
        id: "it351-ch3-q26",
        text: "Packet Tracer allows students to configure:",
        options: [
          "Printers",
          "Routers and switches",
          "Cameras",
          "Mobile phones",
        ],
        correctIndex: 1,
        explanation:
          "Packet Tracer allows users to configure networking devices such as routers and switches.",
      },
      {
        id: "it351-ch3-q27",
        text: "Which feature of Packet Tracer allows simulation of network traffic?",
        options: [
          "Security",
          "Traffic Simulation",
          "Monitoring",
          "Routing Table",
        ],
        correctIndex: 1,
        explanation:
          "The Traffic Simulation feature allows users to visualize and analyze how data packets travel through a network.",
      },
      {
        id: "it351-ch3-q28",
        text: "Which feature allows multiple users to work together in Packet Tracer?",
        options: ["Collaboration", "Routing", "Switching", "Security"],
        correctIndex: 0,
        explanation:
          "The Collaboration feature allows multiple users to connect and work on the same network simulation.",
      },
      {
        id: "it351-ch3-q29",
        text: "What is the main purpose of network simulators?",
        options: [
          "Build hardware",
          "Simulate and test networks",
          "Replace routers",
          "Send emails",
        ],
        correctIndex: 1,
        explanation:
          "The main purpose of network simulators is to design, simulate, and test networks in a virtual environment.",
      },
      {
        id: "it351-ch3-q30",
        text: "Which command mode allows full configuration of a switch?",
        options: [
          "User Exec",
          "Privileged Exec",
          "Global Configuration",
          "Disable mode",
        ],
        correctIndex: 2,
        explanation:
          "Global Configuration Mode allows administrators to make full configuration changes to a network device.",
      },
    ],
  },
  {
    id: "networking-chapter-4",
    name: "Chapter 4: Layered Models, Protocols, and Routing",
    description:
      "Layered architecture concepts, OSI and TCP/IP models, core network protocols, IP addressing, and routing fundamentals.",
    questions: [
      {
        id: "it351-ch4-q1",
        text: "What is the main aim of layered architecture?",
        options: [
          "To increase network complexity",
          "To divide the design into smaller manageable parts",
          "To remove protocols from networking",
          "To reduce network security",
        ],
        correctIndex: 1,
        explanation:
          "Layered architecture divides a complex networking system into smaller manageable layers, making design, implementation, and troubleshooting easier.",
      },
      {
        id: "it351-ch4-q2",
        text: "What does a service represent in layered architecture?",
        options: [
          "A hardware component",
          "A set of actions provided to the higher layer",
          "A routing algorithm",
          "A cable standard",
        ],
        correctIndex: 1,
        explanation:
          "A service represents the functions and operations that a lower layer provides to the layer above it.",
      },
      {
        id: "it351-ch4-q3",
        text: "What does a protocol define in networking?",
        options: [
          "A type of hardware",
          "A set of rules for communication between entities",
          "A network topology",
          "A physical connection",
        ],
        correctIndex: 1,
        explanation:
          "A protocol defines the rules and formats that systems use to exchange data across a network.",
      },
      {
        id: "it351-ch4-q4",
        text: "Which organization developed the OSI model?",
        options: ["IEEE", "ISO", "Cisco", "Microsoft"],
        correctIndex: 1,
        explanation:
          "The OSI model was developed by the International Organization for Standardization (ISO) in 1984.",
      },
      {
        id: "it351-ch4-q5",
        text: "How many layers are in the OSI model?",
        options: ["4", "5", "7", "8"],
        correctIndex: 2,
        explanation:
          "The OSI model consists of seven layers, each responsible for specific networking functions.",
      },
      {
        id: "it351-ch4-q6",
        text: "Which OSI layer is closest to the end user?",
        options: [
          "Application Layer",
          "Transport Layer",
          "Network Layer",
          "Physical Layer",
        ],
        correctIndex: 0,
        explanation:
          "The Application layer interacts directly with user applications and provides network services to them.",
      },
      {
        id: "it351-ch4-q7",
        text: "Which layer is responsible for data translation, compression, and encryption?",
        options: [
          "Session Layer",
          "Presentation Layer",
          "Network Layer",
          "Data Link Layer",
        ],
        correctIndex: 1,
        explanation:
          "The Presentation layer ensures that data is properly formatted, encrypted, or compressed for communication.",
      },
      {
        id: "it351-ch4-q8",
        text: "Which OSI layer establishes and manages communication sessions?",
        options: [
          "Transport Layer",
          "Session Layer",
          "Network Layer",
          "Physical Layer",
        ],
        correctIndex: 1,
        explanation:
          "The Session layer establishes, manages, and terminates sessions between communicating systems.",
      },
      {
        id: "it351-ch4-q9",
        text: "Which OSI layer ensures reliable end-to-end data transfer?",
        options: [
          "Transport Layer",
          "Network Layer",
          "Data Link Layer",
          "Application Layer",
        ],
        correctIndex: 0,
        explanation:
          "The Transport layer provides reliable end-to-end communication and controls data flow.",
      },
      {
        id: "it351-ch4-q10",
        text: "At the transport layer, data is divided into units called:",
        options: ["Packets", "Segments", "Frames", "Bits"],
        correctIndex: 1,
        explanation:
          "The Transport layer divides data into segments to ensure efficient and reliable delivery.",
      },
      {
        id: "it351-ch4-q11",
        text: "Which OSI layer is responsible for routing packets?",
        options: [
          "Transport Layer",
          "Network Layer",
          "Session Layer",
          "Physical Layer",
        ],
        correctIndex: 1,
        explanation:
          "The Network layer determines the best path for data transmission across networks.",
      },
      {
        id: "it351-ch4-q12",
        text: "Which device mainly operates at the Network layer?",
        options: ["Switch", "Router", "Hub", "Repeater"],
        correctIndex: 1,
        explanation:
          "Routers operate at the Network layer and are responsible for routing packets between networks.",
      },
      {
        id: "it351-ch4-q13",
        text: "Which OSI layer is responsible for transferring frames between devices on the same network?",
        options: [
          "Network Layer",
          "Data Link Layer",
          "Transport Layer",
          "Session Layer",
        ],
        correctIndex: 1,
        explanation:
          "The Data Link layer ensures reliable frame transmission and error detection within the same network.",
      },
      {
        id: "it351-ch4-q14",
        text: "Which layer is responsible for transmitting raw bits over the physical medium?",
        options: [
          "Network Layer",
          "Data Link Layer",
          "Physical Layer",
          "Transport Layer",
        ],
        correctIndex: 2,
        explanation:
          "The Physical layer transmits raw binary data (bits) over the physical communication channel.",
      },
      {
        id: "it351-ch4-q15",
        text: "How many layers are there in the TCP/IP model?",
        options: ["3", "4", "5", "7"],
        correctIndex: 1,
        explanation:
          "The TCP/IP model consists of four layers: Application, Transport, Internet, and Network Interface.",
      },
      {
        id: "it351-ch4-q16",
        text: "Which protocol provides reliable communication with acknowledgment?",
        options: ["UDP", "TCP", "IP", "ICMP"],
        correctIndex: 1,
        explanation:
          "TCP ensures reliable communication using acknowledgments, error detection, and flow control.",
      },
      {
        id: "it351-ch4-q17",
        text: "Which protocol is faster but does not guarantee delivery?",
        options: ["TCP", "UDP", "FTP", "HTTP"],
        correctIndex: 1,
        explanation:
          "UDP is faster because it does not use connection establishment or acknowledgments.",
      },
      {
        id: "it351-ch4-q18",
        text: "Which protocol is used for transferring web pages?",
        options: ["FTP", "HTTP", "SMTP", "SSH"],
        correctIndex: 1,
        explanation:
          "HTTP is used for communication between web browsers and web servers.",
      },
      {
        id: "it351-ch4-q19",
        text: "Which protocol is designed for transferring files?",
        options: ["FTP", "SMTP", "DNS", "HTTP"],
        correctIndex: 0,
        explanation:
          "FTP (File Transfer Protocol) is specifically designed for file transfer between computers.",
      },
      {
        id: "it351-ch4-q20",
        text: "Which protocol is mainly used for sending email messages?",
        options: ["SMTP", "HTTP", "FTP", "IP"],
        correctIndex: 0,
        explanation:
          "SMTP (Simple Mail Transfer Protocol) is used to send email messages between servers.",
      },
      {
        id: "it351-ch4-q21",
        text: "What is a network protocol?",
        options: [
          "A physical cable",
          "A set of communication rules",
          "A routing table",
          "A network device",
        ],
        correctIndex: 1,
        explanation:
          "A network protocol defines the rules for formatting and processing data during communication.",
      },
      {
        id: "it351-ch4-q22",
        text: "Which layer is responsible for logical addressing such as IP addresses?",
        options: [
          "Transport Layer",
          "Network Layer",
          "Session Layer",
          "Physical Layer",
        ],
        correctIndex: 1,
        explanation:
          "The Network layer handles logical addressing and routing functions.",
      },
      {
        id: "it351-ch4-q23",
        text: "A host in networking is also known as:",
        options: ["Router", "End System", "Gateway", "Bridge"],
        correctIndex: 1,
        explanation: "A host refers to an end system connected to the network.",
      },
      {
        id: "it351-ch4-q24",
        text: "The boundary between a host and a network link is called:",
        options: ["Port", "Interface", "Protocol", "Node"],
        correctIndex: 1,
        explanation:
          "An interface connects a host or router to the network link.",
      },
      {
        id: "it351-ch4-q25",
        text: "An IP address consists of which two main parts?",
        options: [
          "Network ID and Host ID",
          "Packet ID and Frame ID",
          "Port ID and Link ID",
          "Router ID and Switch ID",
        ],
        correctIndex: 0,
        explanation: "An IP address is divided into Network ID and Host ID.",
      },
      {
        id: "it351-ch4-q26",
        text: "Routing is defined as:",
        options: [
          "Encrypting network traffic",
          "Selecting the best path for data transfer",
          "Compressing packets",
          "Blocking network traffic",
        ],
        correctIndex: 1,
        explanation:
          "Routing is the process of selecting the optimal path to send packets from source to destination.",
      },
      {
        id: "it351-ch4-q27",
        text: "Which device performs routing?",
        options: ["Hub", "Switch", "Router", "Repeater"],
        correctIndex: 2,
        explanation:
          "Routers determine the best path and forward packets between networks.",
      },
      {
        id: "it351-ch4-q28",
        text: "Which metric may be used by routing protocols?",
        options: ["Hop Count", "Delay", "Bandwidth", "All of the above"],
        correctIndex: 3,
        explanation:
          "Routing protocols evaluate multiple metrics such as hop count, delay, and bandwidth.",
      },
      {
        id: "it351-ch4-q29",
        text: "What does bandwidth represent?",
        options: [
          "The number of routers",
          "The capacity of a communication link",
          "The number of packets",
          "The number of hosts",
        ],
        correctIndex: 1,
        explanation:
          "Bandwidth refers to the maximum data transfer capacity of a network link.",
      },
      {
        id: "it351-ch4-q30",
        text: "Which routing method automatically learns routes using protocols?",
        options: [
          "Static Routing",
          "Dynamic Routing",
          "Manual Routing",
          "Direct Routing",
        ],
        correctIndex: 1,
        explanation:
          "Dynamic routing uses routing protocols such as RIP or OSPF to automatically learn routes.",
      },
    ],
  },
  {
    id: "networking-chapter-5",
    name: "Chapter 5: Physical, Data Link, and Network Layer Fundamentals",
    description:
      "Physical-layer encoding, data-link error detection and correction, ARP, and network-layer routing concepts and algorithms.",
    questions: [
      {
        id: "it351-ch5-q1",
        text: "What is the main functionality of the physical layer?",
        options: [
          "To route packets across the network",
          "To transmit individual bits from one node to another",
          "To detect and correct transmission errors",
          "To associate IP addresses with MAC addresses",
        ],
        correctIndex: 1,
        explanation:
          "The main functionality of the physical layer is to transmit the individual bits from one node to another node.",
      },
      {
        id: "it351-ch5-q2",
        text: "Which of the following best describes digital-to-digital encoding?",
        options: [
          "Translating analog signals into digital data",
          "Translating digital information into a digital signal",
          "Translating digital signals into analog signals",
          "Encrypting digital messages for secure transmission",
        ],
        correctIndex: 1,
        explanation:
          "Digital-to-digital encoding is the representation of digital information by a digital signal.",
      },
      {
        id: "it351-ch5-q3",
        text: "In unipolar encoding, how are binary 1s and 0s typically represented?",
        options: [
          "1s are a positive value and 0s are a negative value",
          "1s are alternating positive and negative values, and 0s are zero",
          "1s are represented as a positive value and 0s are represented as a zero value",
          "Both 1s and 0s are represented by changing signal frequencies",
        ],
        correctIndex: 2,
        explanation:
          "In unipolar encoding, 1s are represented as a positive value and 0s are represented as a zero value.",
      },
      {
        id: "it351-ch5-q4",
        text: "What is the main advantage of Polar encoding over Unipolar encoding?",
        options: [
          "It requires less bandwidth",
          "It completely eliminates transmission errors",
          "It uses three voltage levels instead of two",
          "It alleviates the DC component problem",
        ],
        correctIndex: 3,
        explanation:
          "By using two voltage levels in polar encoding, the average voltage level is reduced, and the DC component problem of the unipolar encoding scheme is alleviated.",
      },
      {
        id: "it351-ch5-q5",
        text: "Which voltage levels are used in the Bipolar encoding scheme?",
        options: [
          "Positive and zero",
          "Positive and negative",
          "Positive, negative, and zero",
          "High, medium, and low positive voltages",
        ],
        correctIndex: 2,
        explanation:
          "The bipolar encoding scheme represents three voltage levels: positive, negative, and zero.",
      },
      {
        id: "it351-ch5-q6",
        text: "In the NRZ-I encoding scheme, how is a binary 1 represented?",
        options: [
          "By a neutral zero voltage",
          "By an inversion of the voltage level",
          "By a lack of transition in the voltage level",
          "By returning to zero halfway through the bit interval",
        ],
        correctIndex: 1,
        explanation:
          "NRZ-I is an inversion of the voltage level that represents 1 bit, meaning a transition occurs between positive and negative voltage.",
      },
      {
        id: "it351-ch5-q7",
        text: "Why does RZ (Return to Zero) encoding ensure better clock recovery at the receiver end?",
        options: [
          "It uses a single voltage level",
          "It encrypts the clock signal into the data",
          "Due to the presence of signal transitions at the midpoint of each bit interval",
          "It limits the maximum length of a frame",
        ],
        correctIndex: 2,
        explanation:
          "RZ encoding ensures better clock recovery at the receiver end due to the presence of signal transitions at the midpoint of each bit interval.",
      },
      {
        id: "it351-ch5-q8",
        text: "Manchester coding is a combination of which two encoding schemes?",
        options: [
          "NRZ-L and RZ",
          "NRZ-I and RZ",
          "AMI and NRZ-L",
          "Unipolar and Bipolar",
        ],
        correctIndex: 0,
        explanation:
          "Manchester coding consists of combining the NRZ-L and RZ schemes.",
      },
      {
        id: "it351-ch5-q9",
        text: "In Differential Manchester coding, what determines the level at the beginning of the symbol?",
        options: [
          "The length of the cable",
          "The symbol value",
          "The routing algorithm",
          "The parity bit",
        ],
        correctIndex: 1,
        explanation:
          "In Differential Manchester coding, the level at the beginning of the symbol is determined by the symbol value.",
      },
      {
        id: "it351-ch5-q10",
        text: "According to the rules of AMI (Alternate Mark Inversion), how is a 1 bit represented?",
        options: [
          "By a neutral zero voltage",
          "By alternating positive and negative voltage",
          "By a constant positive voltage",
          "By a constant negative voltage",
        ],
        correctIndex: 1,
        explanation:
          "In AMI, a 1 bit is represented by alternating positive and negative voltage.",
      },
      {
        id: "it351-ch5-q11",
        text: "Which OSI layer contains the Logical Link Control Layer and Media Access Control Layer?",
        options: [
          "Physical Layer",
          "Network Layer",
          "Data-Link Layer",
          "Transport Layer",
        ],
        correctIndex: 2,
        explanation:
          "The Data-Link Layer contains two sub-layers: Logical Link Control Layer and Media Access Control Layer.",
      },
      {
        id: "it351-ch5-q12",
        text: "What defines a Burst Error?",
        options: [
          "When only one bit of a given data unit is changed",
          "When the receiver drops the entire packet",
          "When two or more bits are changed from 0 to 1 or from 1 to 0",
          "When the sender transmits data too fast",
        ],
        correctIndex: 2,
        explanation:
          "A Burst Error is known as when two or more bits are changed from 0 to 1 or from 1 to 0.",
      },
      {
        id: "it351-ch5-q13",
        text: "What is the primary goal of the Single Parity Check technique?",
        options: [
          "To correct up to two bit errors",
          "To generate a total number of 1s that is even",
          "To compress the data before transmission",
          "To encrypt the data payload",
        ],
        correctIndex: 1,
        explanation:
          "The Single Parity Check technique generates the total number of 1s to be even, which is why it is known as even-parity checking.",
      },
      {
        id: "it351-ch5-q14",
        text: "How does the Two-Dimensional Parity Check improve upon the Single Parity Check?",
        options: [
          "By using cryptographic hashes",
          "By transforming data into an analog signal",
          "By organizing the data in the form of a table and computing parities for each row and column",
          "By automatically correcting any burst error",
        ],
        correctIndex: 2,
        explanation:
          "Performance is improved by using Two-Dimensional Parity Check which organizes the data in the form of a table, computing parity check bits for each row and column.",
      },
      {
        id: "it351-ch5-q15",
        text: "A Checksum is an error detection technique based primarily on the concept of:",
        options: ["Redundancy", "Attenuation", "Encryption", "Routing"],
        correctIndex: 0,
        explanation:
          "A Checksum is an error detection technique based on the concept of redundancy.",
      },
      {
        id: "it351-ch5-q16",
        text: "Which mathematical operation is primarily used in the division process of a Cyclic Redundancy Check (CRC)?",
        options: ["Addition", "Multiplication", "XOR (Exclusive OR)", "AND"],
        correctIndex: 2,
        explanation:
          "The Cyclic Redundancy Check (CRC) division process relies on the XOR operation.",
      },
      {
        id: "it351-ch5-q17",
        text: "Error Correction can generally be handled in two ways. What are they?",
        options: [
          "Internal and External",
          "Backward and Forward error correction",
          "Hardware and Software",
          "Synchronous and Asynchronous",
        ],
        correctIndex: 1,
        explanation:
          "Error Correction can be handled in two ways: Backward error correction and Forward error correction.",
      },
      {
        id: "it351-ch5-q18",
        text: "What is the formula used in Hamming Code to determine the number of redundant bits 'r' for 'd' data bits?",
        options: [
          "2^d >= d + r + 1",
          "2^r >= d + r + 1",
          "r^2 >= d + 1",
          "d^2 >= r + 1",
        ],
        correctIndex: 1,
        explanation:
          "The formula used to relate data bits 'd' and redundant bits 'r' in Hamming Code is 2^r >= d + r + 1.",
      },
      {
        id: "it351-ch5-q19",
        text: "In a Hamming Code, where are the 'r' redundant bits placed?",
        options: [
          "At the very end of the data stream",
          "At the very beginning of the data stream",
          "In positions that are powers of two (1, 2, 4, 8...)",
          "Randomly throughout the data unit",
        ],
        correctIndex: 2,
        explanation:
          "The 'r' bits are placed in the positions 1, 2, ..... 2^(k-1), which correspond to powers of two.",
      },
      {
        id: "it351-ch5-q20",
        text: "Which OSI layer is responsible for determining the best path to move data from source to destination?",
        options: [
          "Physical Layer",
          "Data-Link Layer",
          "Network Layer",
          "Transport Layer",
        ],
        correctIndex: 2,
        explanation:
          "The Network Layer is responsible for routing and forwarding packets, determining the best path to move data from source to destination.",
      },
      {
        id: "it351-ch5-q21",
        text: "Routers operate primarily at which layer of the OSI model?",
        options: ["Layer 1", "Layer 2", "Layer 3", "Layer 4"],
        correctIndex: 2,
        explanation:
          "Routers are Layer 3 devices, specified in the Network Layer to provide routing services.",
      },
      {
        id: "it351-ch5-q22",
        text: "What is the purpose of the Address Resolution Protocol (ARP)?",
        options: [
          "To resolve domain names to IP addresses",
          "To associate an IP address with a MAC address",
          "To secure routing tables",
          "To check for single-bit errors in a frame",
        ],
        correctIndex: 1,
        explanation:
          "ARP stands for Address Resolution Protocol and is used to associate an IP address with the MAC address.",
      },
      {
        id: "it351-ch5-q23",
        text: "What happens if a device's ARP cache is empty when trying to find a MAC address?",
        options: [
          "It drops the packet immediately",
          "It broadcasts the message to the entire network",
          "It sends an error message to the user",
          "It uses a default MAC address of 00:00:00:00:00:00",
        ],
        correctIndex: 1,
        explanation:
          "If the ARP cache is empty, the device broadcasts the message to the entire network asking each device for a matching MAC address.",
      },
      {
        id: "it351-ch5-q24",
        text: "Which command utility can be used to view the IP to MAC address associations on a computer?",
        options: ["ping", "ipconfig", "arp -a", "tracert"],
        correctIndex: 2,
        explanation:
          "The arp -a command is used to view the list of internet addresses and their corresponding physical MAC addresses.",
      },
      {
        id: "it351-ch5-q25",
        text: "What characterizes a dynamic entry in an ARP cache?",
        options: [
          "It is manually entered by a network administrator",
          "It is permanent and survives device reboots",
          "It is created automatically and removed periodically",
          "It maps multiple IP addresses to a single MAC address",
        ],
        correctIndex: 2,
        explanation:
          "A dynamic entry is created automatically when the sender broadcasts a message, is not permanent, and is removed periodically.",
      },
      {
        id: "it351-ch5-q26",
        text: "Routing algorithms are generally divided into which two main categories?",
        options: [
          "Static and Dynamic",
          "Adaptive and Non-adaptive",
          "Distance Vector and Link State",
          "Internal and External",
        ],
        correctIndex: 1,
        explanation:
          "The Routing algorithm is divided into two categories: Adaptive Routing algorithm and Non-adaptive Routing algorithm.",
      },
      {
        id: "it351-ch5-q27",
        text: "In Distance Vector Routing, routers compute their tables using an algorithm that is:",
        options: [
          "Centralized, Static, and Synchronous",
          "Distributed, Iterative, and Asynchronous",
          "Hierarchical, Event-triggered, and Synchronous",
          "Global, Non-adaptive, and Centralized",
        ],
        correctIndex: 1,
        explanation:
          "The Distance vector algorithm is a dynamic algorithm described as Distributed, Iterative, and Asynchronous.",
      },
      {
        id: "it351-ch5-q28",
        text: "Which routing protocol allows each router to learn the entire network topology?",
        options: [
          "Distance Vector Routing",
          "Path-Vector Routing",
          "Link-State Routing",
          "Static Routing",
        ],
        correctIndex: 2,
        explanation:
          "Link-State routing uses link-state routers to exchange messages that allow each router to learn the entire network topology.",
      },
      {
        id: "it351-ch5-q29",
        text: "What algorithm does Link State routing use to compute the shortest path?",
        options: [
          "Bredford Algorithm",
          "Bellman-Ford Algorithm",
          "Dijkstra-algorithm",
          "Hamming Algorithm",
        ],
        correctIndex: 2,
        explanation:
          "Link State routing uses the Dijkstra-algorithm for calculating the shortest path.",
      },
      {
        id: "it351-ch5-q30",
        text: "When comparing Distance Vector and Link State protocols, which of the following is true regarding convergence?",
        options: [
          "Distance Vector is fast, Link State is slow",
          "Distance Vector is slow, Link State is fast",
          "Both are slow",
          "Both are fast",
        ],
        correctIndex: 1,
        explanation:
          "In terms of convergence, the Distance Vector protocol is slow, whereas the Link State protocol is fast.",
      },
    ],
  },
];

export const computerNetworking: Subject = {
  id: "it351",
  name: "Computer Networking",
  icon: "Network",
  description: "Network protocols, architectures, and data communication.",
  color: "#10B981",
  professor: "Dr. Eissa Sabry",
  chapters,
  questions: chapters.flatMap((chapter) => chapter.questions),
};
