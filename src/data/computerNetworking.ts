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
  {
    id: "networking-chapter-6",
    name: "Chapter 6: Network Performance and Delays",
    description: "End-to-End Delay, Transmission Delay, Propagation Delay, and Traffic Intensity.",
    questions: [
      {
        id: "it351-ch6-q1",
        text: "What are the four distinct components that sum up to the total End-to-End Delay?",
        options: [
          "Processing, Routing, Switching, and Forwarding",
          "Transmission, Propagation, Broadcasting, and Receiving",
          "Processing, Queuing, Transmission, and Propagation",
          "Queuing, Forwarding, Switching, and Transmitting",
        ],
        correctIndex: 2,
        explanation:
          "End-to-End Delay is the total time required for a packet to travel from the source application to the destination application. It is the sum of four distinct components: Processing, Queuing, Transmission, and Propagation.",
      },
      {
        id: "it351-ch6-q2",
        text: "Which of the following correctly defines Transmission Delay?",
        options: [
          "The time required for a single bit to travel the physical distance of the link.",
          "The time required to push all bits of a packet onto the transmission link.",
          "The time a packet spends waiting in a buffer inside a router.",
          "The time a router takes to examine a packet's header.",
        ],
        correctIndex: 1,
        explanation:
          "Transmission Delay is defined as the time required to push all bits of a packet onto the transmission link.",
      },
      {
        id: "it351-ch6-q3",
        text: "Which of the following correctly defines Propagation Delay?",
        options: [
          "The time required for a single bit to travel from one end of the physical link to the other.",
          "The time required to push all bits of a packet onto the transmission link.",
          "The maximum theoretical data rate of a link.",
          "The time taken to check a packet for bit-level errors.",
        ],
        correctIndex: 0,
        explanation:
          "Propagation Delay is the time required for a single bit to travel from one end of the physical link to the other.",
      },
      {
        id: "it351-ch6-q4",
        text: "What does a router's Processing Delay typically involve?",
        options: [
          "Pushing bits onto the physical link.",
          "Waiting in a buffer until the link is available.",
          "Examining the packet header, determining the outgoing link, and checking for errors.",
          "Traveling across the physical medium to the next node.",
        ],
        correctIndex: 2,
        explanation:
          "Inside the router, the Processing Zone examines the header, determines the outgoing link, and checks for errors. This delay is typically very small (microseconds).",
      },
      {
        id: "it351-ch6-q5",
        text: "Under what circumstance does Queuing Delay occur?",
        options: [
          "When the physical distance between two nodes is exceptionally long.",
          "When packets arrive at a router faster than they can be transmitted, forcing them to wait in a buffer.",
          "When the packet size exceeds the maximum transmission unit.",
          "When the router's CPU is checking the packet for errors.",
        ],
        correctIndex: 1,
        explanation:
          "Queuing Delay happens when packets wait in a buffer because they arrive faster than they can be transmitted out of the router.",
      },
      {
        id: "it351-ch6-q6",
        text: "Which of the following statements about Transmission Delay is true?",
        options: [
          "It completely dominates in satellite links.",
          "It heavily depends on the physical distance between the sender and receiver.",
          "It does NOT depend on physical distance, only on packet size and link speed.",
          "It measures the maximum theoretical data rate of a link.",
        ],
        correctIndex: 2,
        explanation:
          "Crucially, Transmission Delay does NOT depend on distance. It depends solely on packet size and the transmission rate (link speed).",
      },
      {
        id: "it351-ch6-q7",
        text: "Which of the following statements about Propagation Delay is true?",
        options: [
          "It depends on the packet size and link speed.",
          "It does NOT depend on packet size, only on physical distance and signal speed.",
          "It measures the actual achieved end-to-end data rate.",
          "It happens only inside a router's buffer.",
        ],
        correctIndex: 1,
        explanation:
          "Crucially, Propagation Delay does NOT depend on packet size. It depends entirely on the physical distance and the propagation speed of the signal.",
      },
      {
        id: "it351-ch6-q8",
        text: "What is the correct formula to calculate Traffic Intensity (ρ)?",
        options: [
          "ρ = (L × a) / R",
          "ρ = L / R",
          "ρ = d / s",
          "ρ = Bandwidth × Propagation Delay",
        ],
        correctIndex: 0,
        explanation:
          "Traffic Intensity (ρ) is calculated as (L × a) / R, where L is packet size, a is arrival rate, and R is transmission rate.",
      },
      {
        id: "it351-ch6-q9",
        text: "What happens to the router's queue if the Traffic Intensity (ρ) is strictly less than 1 (ρ < 1)?",
        options: [
          "The system drops all packets.",
          "The queue grows indefinitely.",
          "The system is stable.",
          "The transmission rate decreases.",
        ],
        correctIndex: 2,
        explanation:
          "If ρ < 1, packets are transmitted faster than they arrive on average, meaning the system is stable.",
      },
      {
        id: "it351-ch6-q10",
        text: "What happens to the router's queue if the Traffic Intensity (ρ) is greater than or equal to 1 (ρ ≥ 1)?",
        options: [
          "The system remains perfectly balanced.",
          "The queue grows indefinitely.",
          "The packet size shrinks automatically.",
          "The propagation delay increases.",
        ],
        correctIndex: 1,
        explanation:
          "If ρ ≥ 1, packets arrive faster than or at the exact same rate they can be transmitted, causing the queue to grow indefinitely.",
      },
      {
        id: "it351-ch6-q11",
        text: "How is 'Bandwidth' defined in the context of network performance analysis?",
        options: [
          "The actual achieved end-to-end data rate.",
          "The percentage of network capacity used.",
          "The maximum theoretical data rate of a link.",
          "The total time it takes for a packet to reach its destination.",
        ],
        correctIndex: 2,
        explanation:
          "Bandwidth is defined as the maximum theoretical data rate of a link.",
      },
      {
        id: "it351-ch6-q12",
        text: "How is 'Throughput' defined in network performance analysis?",
        options: [
          "The actual achieved end-to-end data rate.",
          "The theoretical maximum data capacity.",
          "The percentage of network capacity used.",
          "The distance divided by the speed of light.",
        ],
        correctIndex: 0,
        explanation:
          "Throughput is defined as the actual achieved end-to-end data rate.",
      },
      {
        id: "it351-ch6-q13",
        text: "What does 'Utilization' measure in network performance?",
        options: [
          "How long it takes to push a packet onto the link.",
          "The actual achieved data rate.",
          "The percentage of network capacity used.",
          "The maximum volume of data physically in transit.",
        ],
        correctIndex: 2,
        explanation:
          "Utilization is the percentage of network capacity used.",
      },
      {
        id: "it351-ch6-q14",
        text: "In a multi-link path, what entirely dictates the maximum end-to-end throughput?",
        options: [
          "The fastest link in the path.",
          "The bottleneck link (the slowest link).",
          "The sum of all link bandwidths.",
          "The total physical distance of the path.",
        ],
        correctIndex: 1,
        explanation:
          "In a multi-link path, the maximum end-to-end throughput is dictated entirely by the bottleneck link, which is the slowest link in the path.",
      },
      {
        id: "it351-ch6-q15",
        text: "What does the Bandwidth-Delay Product (BDP) measure?",
        options: [
          "The total delay experienced by a packet across all routers.",
          "The ratio of lost packets to successfully transmitted packets.",
          "The maximum volume of data that can be actively traveling on the link at any given moment before the first bit reaches the destination.",
          "The time it takes for a router to process a queue of packets.",
        ],
        correctIndex: 2,
        explanation:
          "BDP measures the maximum volume of data that can be actively traveling on the link at any given moment before the first bit reaches the destination.",
      },
      {
        id: "it351-ch6-q16",
        text: "What is the standard formula for Transmission Delay?",
        options: [
          "d / s",
          "L / R",
          "(L × a) / R",
          "Bandwidth × Propagation Delay",
        ],
        correctIndex: 1,
        explanation:
          "The formula for Transmission Delay is L / R, where L is packet size and R is the transmission rate.",
      },
      {
        id: "it351-ch6-q17",
        text: "What is the standard formula for Propagation Delay?",
        options: [
          "d / s",
          "L / R",
          "(L × a) / R",
          "N × (Transmission + Propagation)",
        ],
        correctIndex: 0,
        explanation:
          "The formula for Propagation Delay is d / s, where d is the distance and s is the propagation speed.",
      },
      {
        id: "it351-ch6-q18",
        text: "In a store-and-forward network with N links, assuming no queuing delay, what is the formula for the Total Multi-Link End-to-End Delay?",
        options: [
          "Total Delay = Transmission + Propagation + Processing",
          "Total Delay = N × [Transmission + Propagation + Processing]",
          "Total Delay = N × [Transmission] + Propagation",
          "Total Delay = Transmission + (N × Propagation)",
        ],
        correctIndex: 1,
        explanation:
          "Because a packet must be fully received at each router before being transmitted to the next, the delay repeats N times. The formula is N × [Transmission + Propagation + Processing] + Total Queuing.",
      },
      {
        id: "it351-ch6-q19",
        text: "When analyzing a satellite link, which type of delay completely dominates the overall delay?",
        options: [
          "Processing Delay",
          "Queuing Delay",
          "Transmission Delay",
          "Propagation Delay",
        ],
        correctIndex: 3,
        explanation:
          "Propagation delay completely dominates in satellite links due to the extreme physical distances involved (e.g., 36,000 km), overshadowing transmission delay.",
      },
      {
        id: "it351-ch6-q20",
        text: "PROBLEM: Calculate the Transmission Delay for a 5 MB file over a 10 Mbps link.",
        options: [
          "0.5 seconds",
          "2 seconds",
          "4 seconds",
          "8 seconds",
        ],
        correctIndex: 2,
        explanation:
          "Step 1: Convert 5 MB to bits (5 × 8 = 40 Megabits, or 40 × 10^6 bits). Step 2: Transmission Delay = L/R = (40 × 10^6) / (10 × 10^6) = 4 seconds.",
      },
      {
        id: "it351-ch6-q21",
        text: "PROBLEM: Calculate the Propagation Delay for a 1500 km fiber link. Assume a propagation speed of 2 × 10^8 m/s.",
        options: [
          "0.75 milliseconds",
          "7.5 milliseconds",
          "75 milliseconds",
          "7.5 seconds",
        ],
        correctIndex: 1,
        explanation:
          "Step 1: Convert 1500 km to meters (1,500,000 meters). Step 2: Propagation Delay = d/s = 1,500,000 / (2 × 10^8) = 0.0075 seconds, which is 7.5 milliseconds.",
      },
      {
        id: "it351-ch6-q22",
        text: "PROBLEM: In a satellite link with a distance of 36,000 km, calculate the propagation delay. Assume a propagation speed of 2 × 10^8 m/s.",
        options: [
          "18 milliseconds",
          "180 milliseconds",
          "1.8 seconds",
          "18 seconds",
        ],
        correctIndex: 1,
        explanation:
          "Step 1: Convert 36,000 km to meters (36,000,000 m). Step 2: Propagation Delay = d/s = 36,000,000 / (2 × 10^8) = 0.18 seconds, which is 180 milliseconds.",
      },
      {
        id: "it351-ch6-q23",
        text: "PROBLEM: Calculate the Transmission Delay for a 1000-byte packet being sent over a 1 Gbps satellite link.",
        options: [
          "1 microsecond",
          "8 microseconds",
          "80 microseconds",
          "8 milliseconds",
        ],
        correctIndex: 1,
        explanation:
          "Step 1: Convert 1000 bytes to bits (8000 bits). Step 2: Convert 1 Gbps to bps (10^9 bps). Transmission Delay = L/R = 8000 / 10^9 = 0.000008 seconds, which is 8 microseconds.",
      },
      {
        id: "it351-ch6-q24",
        text: "PROBLEM: Packets of 8000 bits arrive at a rate of 100 packets/sec on a 1 Mbps link. Calculate the Traffic Intensity (ρ) and determine the system's stability.",
        options: [
          "ρ = 0.8; The system is stable.",
          "ρ = 0.8; The queue grows indefinitely.",
          "ρ = 1.25; The system is stable.",
          "ρ = 1.25; The queue grows indefinitely.",
        ],
        correctIndex: 0,
        explanation:
          "Traffic Intensity ρ = (L × a) / R. ρ = (8000 bits × 100 pkts/sec) / 1,000,000 bps = 800,000 / 1,000,000 = 0.8. Since ρ < 1, the system is stable.",
      },
      {
        id: "it351-ch6-q25",
        text: "PROBLEM: Packets of 12,000 bits arrive at a rate of 120 packets/sec on a 1 Mbps link. Calculate the Traffic Intensity (ρ) and determine the system's stability.",
        options: [
          "ρ = 0.69; The system is stable.",
          "ρ = 1.0; The queue size remains perfectly static.",
          "ρ = 1.44; The queue grows indefinitely.",
          "ρ = 1.44; The system drops older packets to remain stable.",
        ],
        correctIndex: 2,
        explanation:
          "Traffic Intensity ρ = (L × a) / R. ρ = (12,000 bits × 120 pkts/sec) / 1,000,000 bps = 1,440,000 / 1,000,000 = 1.44. Since ρ > 1, the queue grows indefinitely.",
      },
      {
        id: "it351-ch6-q26",
        text: "PROBLEM: A network path consists of four sequential links with transmission rates of 5 Mbps, 5 Mbps, 10 Mbps, and 2 Mbps. What is the maximum end-to-end throughput of this path?",
        options: [
          "10 Mbps",
          "5 Mbps",
          "2.5 Mbps",
          "2 Mbps",
        ],
        correctIndex: 3,
        explanation:
          "The maximum end-to-end throughput is entirely dictated by the bottleneck link, which is the link with the minimum rate. The minimum link rate here is 2 Mbps.",
      },
      {
        id: "it351-ch6-q27",
        text: "PROBLEM: A 2000-byte packet travels across 3 identical links. Each link has a rate of 5 Mbps, a distance of 400 km, and a processing delay of 1 ms. Assume no queuing and a propagation speed of 2 × 10^8 m/s. Calculate the total end-to-end delay.",
        options: [
          "6.2 ms",
          "12.4 ms",
          "18.6 ms",
          "24.8 ms",
        ],
        correctIndex: 2,
        explanation:
          "Step 1: Convert (2000 bytes = 16,000 bits; 400 km = 400,000 m). Step 2: Base Delays for one link -> Transmission: 16,000 / (5 × 10^6) = 3.2 ms. Propagation: 400,000 / (2 × 10^8) = 2 ms. Step 3: Total per link = 3.2 + 2 + 1 (Processing) = 6.2 ms. Step 4: End-to-End for 3 links = 3 × 6.2 = 18.6 ms.",
      },
      {
        id: "it351-ch6-q28",
        text: "PROBLEM: Calculate the Transmission Delay for a 1000 byte packet on a 2 Mbps link.",
        options: [
          "0.5 ms",
          "2 ms",
          "4 ms",
          "8 ms",
        ],
        correctIndex: 2,
        explanation:
          "Step 1: Convert 1000 bytes to bits (1000 × 8 = 8000 bits). Step 2: Apply formula L/R -> 8000 / 2,000,000 = 0.004 seconds, which is 4 ms.",
      },
      {
        id: "it351-ch6-q29",
        text: "PROBLEM: Calculate the Propagation Delay for an 800 km link with a propagation speed of 2 × 10^8 m/s.",
        options: [
          "2 ms",
          "4 ms",
          "8 ms",
          "16 ms",
        ],
        correctIndex: 1,
        explanation:
          "Step 1: Convert 800 km to meters (800,000 meters). Step 2: Apply formula d/s -> 800,000 / (2 × 10^8) = 0.004 seconds, which is 4 ms.",
      },
      {
        id: "it351-ch6-q30",
        text: "PROBLEM: Calculate the Bandwidth-Delay Product (BDP) for a 20 Mbps link over a 1000 km distance. Assume propagation speed is 2 × 10^8 m/s.",
        options: [
          "10,000 bits",
          "50,000 bits",
          "100,000 bits",
          "200,000 bits",
        ],
        correctIndex: 2,
        explanation:
          "Step 1: Calculate Propagation Delay = 1,000,000 / (2 × 10^8) = 0.005 seconds. Step 2: BDP = Bandwidth × Propagation Delay = 20,000,000 × 0.005 = 100,000 bits.",
      },
    ],
  },
  {
    id: "networking-chapter-7",
    name: "Chapter 7: Reliable Communication and Error Detection",
    description: "Bit Error Rate, Error Detection vs Correction, Parity, Checksum, CRC, and ARQ Protocols.",
    questions: [
      {
        id: "it351-ch7-q1",
        text: "Why is reliable communication described as an engineered achievement rather than a natural state?",
        options: [
          "Because physical media are naturally perfect and do not require modification.",
          "Because physical media are inherently flawed, causing bits to arrive differently than sent due to physical disruptions.",
          "Because networking protocols naturally adapt to all errors without human intervention.",
          "Because digital data cannot be transmitted over physical cables.",
        ],
        correctIndex: 1,
        explanation:
          "Reliable communication is engineered because physical media are inherently flawed. Bits do not arrive exactly as sent due to physical disruptions.",
      },
      {
        id: "it351-ch7-q2",
        text: "Which of the following physical culprits can cause bit errors in communication media?",
        options: [
          "Software bugs, routing loops, and IP conflicts.",
          "Data compression, encryption algorithms, and slow processors.",
          "Thermal noise, electromagnetic interference, signal attenuation, crosstalk, and impulse noise.",
          "Protocol mismatches, port blocking, and firewall restrictions.",
        ],
        correctIndex: 2,
        explanation:
          "The culprits of physical disruptions that cause bit errors include Thermal Noise, Electromagnetic Interference, Signal Attenuation, Crosstalk, and Impulse Noise.",
      },
      {
        id: "it351-ch7-q3",
        text: "What does the Bit Error Rate (BER) quantify?",
        options: [
          "The total number of packets dropped by a router per minute.",
          "The speed at which bits travel over a physical medium.",
          "The probability that any single transmitted bit is received incorrectly.",
          "The amount of redundancy added to a frame for error correction.",
        ],
        correctIndex: 2,
        explanation:
          "The Bit Error Rate (BER) quantifies the probability that any single transmitted bit is received incorrectly.",
      },
      {
        id: "it351-ch7-q4",
        text: "Which formula is used to calculate the Bit Error Rate (BER)?",
        options: [
          "Total Transmitted Bits / Number of Error Bits",
          "Number of Error Bits / Total Transmitted Bits",
          "Number of Error Bits * Total Transmitted Bits",
          "(Number of Error Bits + Total Transmitted Bits) / 2",
        ],
        correctIndex: 1,
        explanation:
          "BER is calculated as the Number of Error Bits divided by the Total Transmitted Bits.",
      },
      {
        id: "it351-ch7-q5",
        text: "If a system has a BER of 10^-5 and it transmits 3,000,000 bits, how many error bits are expected to occur?",
        options: [
          "3",
          "10",
          "30",
          "300",
        ],
        correctIndex: 2,
        explanation:
          "Using the BER formula, 10^-5 * 3,000,000 transmitted bits results in an expected 30 error bits.",
      },
      {
        id: "it351-ch7-q6",
        text: "What is the fundamental difference between a single-bit error and a burst error?",
        options: [
          "Single-bit errors affect multiple consecutive bits, while burst errors affect only one bit.",
          "Single-bit errors affect one isolated bit, while burst errors corrupt multiple consecutive bits.",
          "Single-bit errors only occur in wireless networks, while burst errors occur in wired networks.",
          "Single-bit errors are impossible to detect, whereas burst errors are easily corrected.",
        ],
        correctIndex: 1,
        explanation:
          "A single-bit error is when only one isolated bit is flipped, whereas a burst error occurs when multiple consecutive bits are corrupted.",
      },
      {
        id: "it351-ch7-q7",
        text: "Which error pattern is the most common in real-world communication systems?",
        options: [
          "Single-bit errors",
          "Continuous synchronization errors",
          "Burst errors",
          "Framing errors",
        ],
        correctIndex: 2,
        explanation:
          "Burst errors are the most common error pattern in real-world systems, while single-bit errors are rare in modern high-speed transmission.",
      },
      {
        id: "it351-ch7-q8",
        text: "According to the 'Strategic Divide', what is the main operational difference between Error Detection and Error Correction?",
        options: [
          "Error Detection fixes errors immediately, while Error Correction relies on retransmissions.",
          "Error Detection requires high overhead, while Error Correction is lightweight.",
          "Error Detection relies on the sender to retransmit the data, while Error Correction fixes the error immediately without retransmission.",
          "Error Detection is only used for burst errors, while Error Correction is only used for single-bit errors.",
        ],
        correctIndex: 2,
        explanation:
          "Error Detection identifies that an error occurred and relies on retransmission, whereas Error Correction fixes the error immediately without needing retransmission.",
      },
      {
        id: "it351-ch7-q9",
        text: "Why is Error Correction NOT typically used as the standard in Ethernet and TCP/IP, despite fixing errors immediately?",
        options: [
          "It has high overhead and is generally reserved for specialized environments.",
          "It cannot detect burst errors.",
          "It requires a constant physical connection.",
          "It violates the layered network architecture.",
        ],
        correctIndex: 0,
        explanation:
          "Error Correction has high overhead and is used in specialized environments, making Error Detection the standard for Ethernet and TCP/IP.",
      },
      {
        id: "it351-ch7-q10",
        text: "How does the basic one-dimensional even parity bit mechanism work?",
        options: [
          "It appends a random bit to the end of the data.",
          "It appends an extra bit to ensure the total number of '1's in the data is strictly even.",
          "It appends an extra bit to ensure the total number of '0's is strictly even.",
          "It duplicates the entire data string for verification.",
        ],
        correctIndex: 1,
        explanation:
          "The even parity mechanism appends an extra bit to ensure the total number of '1's is strictly even.",
      },
      {
        id: "it351-ch7-q11",
        text: "Given the binary data sequence '1 0 1 1 0 0 1', what even parity bit should be appended?",
        options: [
          "0",
          "1",
          "It depends on the CRC polynomial.",
          "Parity cannot be calculated for this sequence.",
        ],
        correctIndex: 0,
        explanation:
          "The sequence '1 0 1 1 0 0 1' has four '1's. Since four is already an even number, a '0' is appended to keep the total number of '1's strictly even.",
      },
      {
        id: "it351-ch7-q12",
        text: "What is the critical vulnerability of using a single one-dimensional parity bit?",
        options: [
          "It requires excessive computational power.",
          "It cannot be used over long distances.",
          "If two bits flip, the parity remains correct, and the error sneaks through.",
          "It relies on the receiver retransmitting the data automatically.",
        ],
        correctIndex: 2,
        explanation:
          "The vulnerability of a single parity bit is that if two bits flip, the parity check remains correct and the error goes undetected.",
      },
      {
        id: "it351-ch7-q13",
        text: "How does two-dimensional parity upgrade the capabilities of basic parity?",
        options: [
          "It completely eliminates the need for ARQ protocols.",
          "It reduces overhead while increasing transmission speed.",
          "It allows for burst error detection and single-bit correction.",
          "It converts single-bit errors into continuous data streams.",
        ],
        correctIndex: 2,
        explanation:
          "Applying parity to both rows and columns (Two-Dimensional Parity) allows for burst error detection and single-bit correction at the cost of increased overhead.",
      },
      {
        id: "it351-ch7-q14",
        text: "What are the three main algorithmic steps taken to calculate the standard Internet Checksum?",
        options: [
          "Multiply, Divide, Remainder",
          "Split, Sum, Invert",
          "Encrypt, Hash, Sign",
          "Buffer, Shift, XOR",
        ],
        correctIndex: 1,
        explanation:
          "The Internet Checksum is calculated by Splitting data into 16-bit words, Summing the words, and Inverting the result (taking the one's complement).",
      },
      {
        id: "it351-ch7-q15",
        text: "During the receiver check for an Internet Checksum, what must the sum of all words plus the checksum equal for the packet to be accepted?",
        options: [
          "All 0s",
          "A specific generator polynomial",
          "All 1s",
          "The original parity bit",
        ],
        correctIndex: 2,
        explanation:
          "The receiver check requires that all words plus the Checksum must equal all 1s. If any 0 appears, the packet is rejected.",
      },
      {
        id: "it351-ch7-q16",
        text: "Which of the following describes a flaw or limitation of the Internet Checksum?",
        options: [
          "It requires polynomial division.",
          "It cannot detect single-bit errors.",
          "It is not mathematically perfect against complex burst errors.",
          "It has a 32-bit overhead cost.",
        ],
        correctIndex: 2,
        explanation:
          "While fast and simple, the Internet Checksum is not mathematically perfect against complex burst errors, making its burst error catch rate 'moderate'.",
      },
      {
        id: "it351-ch7-q17",
        text: "What type of arithmetic does the Cyclic Redundancy Check (CRC) Core Engine rely upon?",
        options: [
          "Binary arithmetic with carry wraparound",
          "Polynomial arithmetic over binary fields (XOR subtraction)",
          "Standard floating-point arithmetic",
          "One's complement addition",
        ],
        correctIndex: 1,
        explanation:
          "The CRC Core Engine is based on polynomial arithmetic over binary fields, specifically using division via XOR subtraction.",
      },
      {
        id: "it351-ch7-q18",
        text: "What is the first step of the CRC algorithm before division occurs?",
        options: [
          "Invert all the bits in the data block.",
          "Append zeros equal to the generator polynomial's degree.",
          "Split the data into 16-bit segments.",
          "Calculate the even parity bit.",
        ],
        correctIndex: 1,
        explanation:
          "The first step of the CRC algorithm is to append zeros equal to the generator degree to the data block.",
      },
      {
        id: "it351-ch7-q19",
        text: "If a CRC generator polynomial has a degree of 4, how many zeros should initially be appended to the data block before division?",
        options: [
          "2 zeros",
          "3 zeros",
          "4 zeros",
          "5 zeros",
        ],
        correctIndex: 2,
        explanation:
          "According to the CRC algorithm, you append zeros equal to the generator's degree. Therefore, a degree of 4 requires 4 zeros.",
      },
      {
        id: "it351-ch7-q20",
        text: "According to the Ethernet standard, what errors does the CRC algorithm perfectly catch?",
        options: [
          "Only single-bit errors.",
          "ALL single-bit errors, ALL double-bit errors, and ALL burst errors shorter than the generator degree.",
          "Any burst error regardless of length.",
          "Only errors occurring in the checksum header.",
        ],
        correctIndex: 1,
        explanation:
          "The Ethernet Standard CRC perfectly catches ALL single-bit errors, ALL double-bit errors, and ALL burst errors shorter than the generator degree.",
      },
      {
        id: "it351-ch7-q21",
        text: "Comparing the mathematical complexity of Parity, Checksum, and CRC, which has the highest complexity?",
        options: [
          "Parity",
          "Checksum",
          "CRC",
          "They all have equal mathematical complexity.",
        ],
        correctIndex: 2,
        explanation:
          "CRC has 'High (Polynomial Division)' mathematical complexity, compared to Parity ('Very Low') and Checksum ('Low (Addition)').",
      },
      {
        id: "it351-ch7-q22",
        text: "Which detection mechanism is best suited for catching burst errors, and what is its typical overhead cost?",
        options: [
          "Parity; 1 bit overhead",
          "Checksum; 16 bits overhead",
          "CRC; typically 16-32 bits overhead",
          "Stop-and-Wait; variable overhead",
        ],
        correctIndex: 2,
        explanation:
          "CRC has an 'Excellent' burst error catch rate and a typical overhead cost that varies between 16 to 32 bits.",
      },
      {
        id: "it351-ch7-q23",
        text: "Why is an error detection checkpoint considered useless without an Automatic Repeat reQuest (ARQ) protocol?",
        options: [
          "Because error detection algorithms cannot run without ARQ synchronization.",
          "Because detecting an error is useless if we cannot recover the lost data by asking for a retransmission.",
          "Because ARQ generates the polynomial used in CRC.",
          "Because routers discard packets without an ARQ header.",
        ],
        correctIndex: 1,
        explanation:
          "The reality check is that detecting an error is useless if we cannot recover the lost data. ARQ protocols provide the solution by governing how devices ask for a 'do-over'.",
      },
      {
        id: "it351-ch7-q24",
        text: "What is the fundamental mechanism behind the Stop-and-Wait ARQ protocol?",
        options: [
          "Send multiple frames simultaneously and wait for a single acknowledgment.",
          "Send one frame, stop, and wait for an Acknowledgment (ACK). If timeout, retransmit.",
          "Send frames continuously and only pause if a Negative Acknowledgment (NACK) is received.",
          "Send a frame and immediately close the connection without waiting for an ACK.",
        ],
        correctIndex: 1,
        explanation:
          "The Stop-and-Wait mechanism is: Send one frame. Stop. Wait for Acknowledgment (ACK). If ACK arrives, send the next. If timeout, retransmit.",
      },
      {
        id: "it351-ch7-q25",
        text: "What is the specific formula used to calculate the efficiency of a Stop-and-Wait protocol?",
        options: [
          "Efficiency = T_p / (T_p + 2T_t)",
          "Efficiency = T_t / (T_t + 2T_p)",
          "Efficiency = 2T_p / T_t",
          "Efficiency = T_t * 2T_p",
        ],
        correctIndex: 1,
        explanation:
          "The Efficiency Formula for Stop-and-Wait ARQ is Efficiency = T_t / (T_t + 2T_p).",
      },
      {
        id: "it351-ch7-q26",
        text: "In a Stop-and-Wait ARQ system over a 1,000 km distance with 1 Mbps bandwidth, link utilization plummets to 44%. Why does this protocol become a bottleneck for long-distance links?",
        options: [
          "Because long-distance links introduce continuous burst errors.",
          "Because the required sender-side memory buffer is too large.",
          "Because the sender spends most of its time idle, waiting for an ACK, limiting throughput.",
          "Because polynomial division takes too long over large distances.",
        ],
        correctIndex: 2,
        explanation:
          "Stop-and-Wait creates a bottleneck because of the 'Waiting Time / Idle Link' period where the sender does nothing while waiting for the ACK, severely limiting throughput on high-latency links.",
      },
      {
        id: "it351-ch7-q27",
        text: "How does the Go-Back-N (Pipelining) protocol resolve the bandwidth utilization bottleneck of Stop-and-Wait?",
        options: [
          "By skipping error detection entirely to speed up transmission.",
          "By continuously transmitting multiple frames without waiting for individual ACKs.",
          "By compressing the data frames to be much smaller.",
          "By calculating the checksum locally instead of transmitting it.",
        ],
        correctIndex: 1,
        explanation:
          "Go-Back-N maximizes bandwidth utilization because the sender transmits multiple frames continuously (Window = N) without waiting for individual ACKs.",
      },
      {
        id: "it351-ch7-q28",
        text: "In a Go-Back-N ARQ setup, if Frame 1 arrives successfully but Frame 2 fails, what happens to subsequently transmitted Frames 3 and 4?",
        options: [
          "The receiver buffers Frames 3 and 4 while waiting for Frame 2.",
          "The receiver discards all subsequent frames (Frames 3 and 4), and the sender must go back and re-transmit from Frame 2.",
          "The receiver processes Frames 3 and 4 and only requests a retransmission for Frame 2.",
          "The connection is terminated immediately.",
        ],
        correctIndex: 1,
        explanation:
          "The 'Catch' of Go-Back-N is that if one frame fails, the receiver discards all subsequent frames. The sender must 'go back' and re-transmit all N frames from the point of failure.",
      },
      {
        id: "it351-ch7-q29",
        text: "Which of the following correctly compares the memory footprints of Stop-and-Wait ARQ versus Go-Back-N ARQ?",
        options: [
          "Both require massive memory footprints.",
          "Stop-and-Wait requires large sender-side buffering, while Go-Back-N requires minimal buffering.",
          "Stop-and-Wait requires minimal memory buffer, while Go-Back-N requires large sender-side buffering to store unacknowledged frames.",
          "Neither protocol requires a memory footprint.",
        ],
        correctIndex: 2,
        explanation:
          "Stop-and-Wait requires a minimal memory footprint/buffer. Go-Back-N has a large memory footprint because it requires sender-side buffering for multiple continuous frames.",
      },
      {
        id: "it351-ch7-q30",
        text: "According to the 'Architecture of Reliability', what are the three distinct layers that guarantee file delivery?",
        options: [
          "Layer 1: Encryption, Layer 2: Compression, Layer 3: Routing",
          "Layer 1: Application, Layer 2: Transport, Layer 3: Physical",
          "Layer 1: Physical Medium / BER, Layer 2: Mathematical Detection (CRC/Checksum), Layer 3: ARQ Protocols (The System)",
          "Layer 1: Parity, Layer 2: Ethernet, Layer 3: Wi-Fi",
        ],
        correctIndex: 2,
        explanation:
          "The Architecture of Reliability consists of Layer 1 (The Reality): Physical Medium/BER, Layer 2 (The Math): Mathematical Detection like CRC/Checksum, and Layer 3 (The System): ARQ Protocols.",
      }
    ],
  },
  {
    id: "networking-chapter-8",
    name: "Chapter 8: Data Link Layer and Multiple Access",
    description: "LLC and MAC sublayers, ALOHA protocols, CSMA/CD, Ethernet frames, and collision domains.",
    questions: [
      {
        id: "it351-ch8-q1",
        text: "What are the two sublayers of the Data Link Layer mentioned in the material?",
        options: [
          "Logical Link Control (LLC) and Medium Access Control (MAC)",
          "Network Control and Physical Link",
          "Static Allocation and Dynamic Allocation",
          "Collision Control and Broadcast Control",
        ],
        correctIndex: 0,
        explanation:
          "According to the Data Link Layer hierarchy slide, it is divided into the Logical Link Control (LLC) and Medium Access Control (MAC) sublayers.",
      },
      {
        id: "it351-ch8-q2",
        text: "What is the primary responsibility of the Medium Access Control (MAC) sublayer?",
        options: [
          "Encrypting data over the network",
          "Regulating access to the shared medium",
          "Routing packets to different networks",
          "Converting digital signals to analog",
        ],
        correctIndex: 1,
        explanation:
          "The MAC sublayer is described as the traffic controller, strictly responsible for regulating access to the shared medium.",
      },
      {
        id: "it351-ch8-q3",
        text: "If N nodes share a channel with a capacity of R bps, what is the data rate per node under perfect scheduling?",
        options: [
          "R * N bps",
          "N / R bps",
          "R / N bps",
          "R + N bps",
        ],
        correctIndex: 2,
        explanation:
          "The multiple access problem slide states that perfect scheduling yields R/N bps per node.",
      },
      {
        id: "it351-ch8-q4",
        text: "Which of the following is a major disadvantage of Static Channel Allocation (like TDMA) under low traffic?",
        options: [
          "It causes too many collisions.",
          "It is highly inefficient and wastes capacity.",
          "It forces continuous retransmissions.",
          "It requires a random backoff time.",
        ],
        correctIndex: 1,
        explanation:
          "Static channel allocation wastes capacity and forces delays, making efficiency plummet under low traffic. It is highly inefficient for bursty modern network traffic.",
      },
      {
        id: "it351-ch8-q5",
        text: "What is the transmission rule for Pure ALOHA?",
        options: [
          "Nodes transmit only at slot boundaries.",
          "Nodes transmit immediately when data is ready.",
          "Nodes listen to the channel before transmitting.",
          "Nodes wait for a token before transmitting.",
        ],
        correctIndex: 1,
        explanation:
          "In Pure ALOHA, nodes transmit immediately when data is ready.",
      },
      {
        id: "it351-ch8-q6",
        text: "What is the throughput formula for Pure ALOHA?",
        options: [
          "S = G * e^(-G)",
          "S = G * e^(-2G)",
          "S = 2G * e^(-G)",
          "S = e^(-2G)",
        ],
        correctIndex: 1,
        explanation:
          "The throughput formula for Pure ALOHA is S = G * e^(-2G), where G is average transmission attempts per frame time.",
      },
      {
        id: "it351-ch8-q7",
        text: "At what value of G does Pure ALOHA achieve maximum throughput?",
        options: [
          "G = 0.184",
          "G = 0.5",
          "G = 1",
          "G = 2",
        ],
        correctIndex: 1,
        explanation:
          "Calculus dictates that the maximum throughput for Pure ALOHA occurs when G = 0.5.",
      },
      {
        id: "it351-ch8-q8",
        text: "Problem: In Pure ALOHA, if G = 0.5 and e^(-1) is approximately 0.368, calculate the maximum efficiency (throughput S).",
        options: [
          "18.4%",
          "36.8%",
          "50.0%",
          "80.0%",
        ],
        correctIndex: 0,
        explanation:
          "S = 0.5 * e^(-1) = 0.5 * 0.368 = 0.184, which means the maximum efficiency is 18.4%.",
      },
      {
        id: "it351-ch8-q9",
        text: "What is the primary difference in the transmission rule of Slotted ALOHA compared to Pure ALOHA?",
        options: [
          "Nodes must listen to the medium first.",
          "Nodes can transmit only at slot boundaries.",
          "Nodes never retransmit after a collision.",
          "Nodes use a collision detection mechanism.",
        ],
        correctIndex: 1,
        explanation:
          "In Slotted ALOHA, nodes can transmit only at slot boundaries, whereas in Pure ALOHA they transmit whenever data is ready.",
      },
      {
        id: "it351-ch8-q10",
        text: "What is the throughput formula for Slotted ALOHA?",
        options: [
          "S = G * e^(-2G)",
          "S = G * e^(-G)",
          "S = 2G * e^(-G)",
          "S = G^2 * e^(-G)",
        ],
        correctIndex: 1,
        explanation:
          "The Slotted ALOHA formula is S = G * e^(-G).",
      },
      {
        id: "it351-ch8-q11",
        text: "At what value of G is Slotted ALOHA maximized, and what is its peak efficiency?",
        options: [
          "G = 0.5, peaking at 18.4%",
          "G = 1, peaking at 36.8%",
          "G = 1.2, peaking at 36.1%",
          "G = 2, peaking at 50%",
        ],
        correctIndex: 1,
        explanation:
          "Slotted ALOHA is maximized at G = 1, capping its peak efficiency at 36.8%.",
      },
      {
        id: "it351-ch8-q12",
        text: "Problem: For Slotted ALOHA, if G = 1.2, compute the throughput S (assume e^(-1.2) = 0.301).",
        options: [
          "0.184",
          "0.301",
          "0.361",
          "1.200",
        ],
        correctIndex: 2,
        explanation:
          "Using the formula S = G * e^(-G): S = 1.2 * e^(-1.2) = 1.2 * 0.301 = 0.361.",
      },
      {
        id: "it351-ch8-q13",
        text: "What principle does Carrier Sense Multiple Access (CSMA) introduce to reduce collisions?",
        options: [
          "Listen before transmitting to check channel status.",
          "Permanently divide the channel into fixed time slots.",
          "Only transmit at exact clock ticks.",
          "Transmit simultaneously on multiple frequencies.",
        ],
        correctIndex: 0,
        explanation:
          "CSMA requires a node to listen before transmitting to check channel status (e.g., 1-persistent, Non-persistent).",
      },
      {
        id: "it351-ch8-q14",
        text: "In CSMA, what is considered the \"Vulnerable Period\" during which a false empty channel might be sensed?",
        options: [
          "Random Backoff Time",
          "Transmission Time",
          "Propagation Delay",
          "Frame Inter-Arrival Time",
        ],
        correctIndex: 2,
        explanation:
          "The vulnerable period in CSMA is strictly tied to the Propagation Delay; a node might falsely sense an empty channel before the other node's wave reaches it.",
      },
      {
        id: "it351-ch8-q15",
        text: "In the CSMA/CD protocol, what happens immediately after a collision is detected?",
        options: [
          "The node continues transmitting to ensure data delivery.",
          "The node aborts immediately and sends a Jam Signal.",
          "The node waits for the receiver to send an acknowledgment.",
          "The node switches to a different transmission frequency.",
        ],
        correctIndex: 1,
        explanation:
          "In CSMA/CD, upon detecting a collision, the node aborts immediately, sends a Jam Signal, and then waits a random backoff time.",
      },
      {
        id: "it351-ch8-q16",
        text: "To guarantee reliable collision detection in CSMA/CD, what is the required relationship between transmission time (Tt) and propagation delay (Tp)?",
        options: [
          "Tt >= Tp",
          "Tt <= 2 * Tp",
          "Tt >= 2 * Tp",
          "Tt = Tp",
        ],
        correctIndex: 2,
        explanation:
          "The physics of CSMA/CD dictates that transmission time must be at least twice the propagation delay: Tt >= 2 * Tp.",
      },
      {
        id: "it351-ch8-q17",
        text: "What is the formula to calculate the minimum packet size (Lmin) to ensure collision detection?",
        options: [
          "Lmin = Tp * R",
          "Lmin = 2 * Tp / R",
          "Lmin = 2 * Tp * R",
          "Lmin = R / (2 * Tp)",
        ],
        correctIndex: 2,
        explanation:
          "Since Tt = L/R and Tt >= 2 * Tp, substituting gives Lmin = 2 * Tp * R.",
      },
      {
        id: "it351-ch8-q18",
        text: "Problem: A network runs at a rate (R) of 100 Mbps with a propagation delay (Tp) of 2 μs. Calculate the minimum frame size (Lmin) in bits.",
        options: [
          "100 bits",
          "200 bits",
          "400 bits",
          "800 bits",
        ],
        correctIndex: 2,
        explanation:
          "Lmin = 2 * (2 * 10^-6) * (100 * 10^6) = 400 bits.",
      },
      {
        id: "it351-ch8-q19",
        text: "Problem: Following the previous calculation where Lmin = 400 bits, what is the minimum frame size in bytes?",
        options: [
          "25 bytes",
          "50 bytes",
          "64 bytes",
          "100 bytes",
        ],
        correctIndex: 1,
        explanation:
          "400 bits divided by 8 bits/byte equals 50 bytes.",
      },
      {
        id: "it351-ch8-q20",
        text: "What is the minimum frame size of a standard Ethernet frame?",
        options: [
          "46 bytes",
          "50 bytes",
          "64 bytes",
          "1518 bytes",
        ],
        correctIndex: 2,
        explanation:
          "The Anatomy of an Ethernet Frame specifies that the Minimum Frame Size is 64 bytes.",
      },
      {
        id: "it351-ch8-q21",
        text: "What is the maximum frame size of a standard Ethernet frame?",
        options: [
          "64 bytes",
          "1500 bytes",
          "1518 bytes",
          "2048 bytes",
        ],
        correctIndex: 2,
        explanation:
          "The Anatomy of an Ethernet Frame specifies that the Maximum Frame Size is 1518 bytes.",
      },
      {
        id: "it351-ch8-q22",
        text: "In an Ethernet frame, how many bytes are allocated to the Source MAC address?",
        options: [
          "2 bytes",
          "4 bytes",
          "6 bytes",
          "7 bytes",
        ],
        correctIndex: 2,
        explanation:
          "The Ethernet frame structure diagram shows the Source MAC address is 6 bytes long (same as the Destination MAC).",
      },
      {
        id: "it351-ch8-q23",
        text: "How large is the Preamble in an Ethernet Frame?",
        options: [
          "2 bytes",
          "4 bytes",
          "6 bytes",
          "7 bytes",
        ],
        correctIndex: 3,
        explanation:
          "The Ethernet frame structure diagram shows the Preamble is 7 bytes long.",
      },
      {
        id: "it351-ch8-q24",
        text: "What is the size range of the Data field inside an Ethernet frame?",
        options: [
          "0-1500 bytes",
          "46-1500 bytes",
          "64-1518 bytes",
          "46-1518 bytes",
        ],
        correctIndex: 1,
        explanation:
          "The Data field inside the standard Ethernet frame ranges from 46 to 1500 bytes.",
      },
      {
        id: "it351-ch8-q25",
        text: "How does a Hub manage collision domains?",
        options: [
          "Each port operates as a separate collision domain.",
          "It represents one single collision domain for all connected devices.",
          "It separates broadcast domains.",
          "It operates entirely collision-free.",
        ],
        correctIndex: 1,
        explanation:
          "The Domain Matrix slide illustrates that a Hub forms \"One single Collision Domain\".",
      },
      {
        id: "it351-ch8-q26",
        text: "How does a Switch handle collision domains?",
        options: [
          "All ports share one single collision domain.",
          "It separates broadcast domains completely.",
          "Each port is a separate collision domain.",
          "It acts as a Hub logically.",
        ],
        correctIndex: 2,
        explanation:
          "The Domain Matrix slide specifies that for a Switch, \"Each port is a separate Collision Domain.\"",
      },
      {
        id: "it351-ch8-q27",
        text: "What is the primary domain-separation function of a Router?",
        options: [
          "It combines multiple collision domains into one.",
          "It separates Broadcast Domains.",
          "It acts identically to a switch.",
          "It combines broadcast domains.",
        ],
        correctIndex: 1,
        explanation:
          "The Domain Matrix slide notes that \"Routers separate Broadcast Domains.\"",
      },
      {
        id: "it351-ch8-q28",
        text: "What is the exact definition of a Collision Domain?",
        options: [
          "All devices that receive a broadcast frame.",
          "An area where frame collisions can occur.",
          "A permanent division of a channel into fixed time slots.",
          "A network segment without any hubs.",
        ],
        correctIndex: 1,
        explanation:
          "The domain matrix slide defines a Collision Domain as the \"Area where frame collisions can occur.\"",
      },
      {
        id: "it351-ch8-q29",
        text: "How do modern Ethernet environments solve the multiple access problem regarding collisions?",
        options: [
          "By strictly enforcing pure ALOHA protocol rules.",
          "By using static channel allocation for all data.",
          "By operating completely collision-free using Full-Duplex paths.",
          "By shortening frame sizes.",
        ],
        correctIndex: 2,
        explanation:
          "Modern Ethernet operates completely collision-free by utilizing Full-Duplex Switching with dedicated transmit and receive links.",
      },
      {
        id: "it351-ch8-q30",
        text: "What is the consequence of utilizing Full-Duplex Switching on the CSMA/CD protocol?",
        options: [
          "It renders CSMA/CD entirely obsolete.",
          "It makes CSMA/CD highly essential.",
          "It forces CSMA/CD to use Slotted ALOHA.",
          "It requires CSMA/CD to increase random backoff times.",
        ],
        correctIndex: 0,
        explanation:
          "Because full-duplex paths make collisions physically impossible, it renders CSMA/CD entirely obsolete in modern environments.",
      }
    ],
  },
  {
    id: "networking-chapter-9",
    name: "Chapter 9: Transport Layer and TCP",
    description: "Transport layer principles, multiplexing, UDP, TCP reliability, flow control, and congestion control.",
    questions: [
      {
        id: "it351-ch9-q1",
        text: "What does the Transport Layer primarily ensure between application processes?",
        options: [
          "Physical connection establishment and signal conversion",
          "Reliable, ordered, and efficient end-to-end communication",
          "Routing of packets through the shortest path across routers",
          "Translation of IP addresses to MAC addresses",
        ],
        correctIndex: 1,
        explanation:
          "The Transport Layer acts as a bridge between applications and the network, ensuring reliable, ordered, and efficient end-to-end communication between application processes.",
      },
      {
        id: "it351-ch9-q2",
        text: "Which mechanism enables multiple applications to operate simultaneously on a network device?",
        options: [
          "Pipelining",
          "Congestion Avoidance",
          "Multiplexing via Port Numbers",
          "Bandwidth-Delay Product",
        ],
        correctIndex: 2,
        explanation:
          "Multiplexing uses Port Numbers to share the network, enabling multiple applications (like Web, Email, Database) to operate simultaneously.",
      },
      {
        id: "it351-ch9-q3",
        text: "According to the Transport Layer principles, what constitutes a Connection Identity?",
        options: [
          "[Source MAC, Dest MAC] + [Source IP, Dest IP]",
          "[Source IP, Source Port] + [Dest IP, Dest Port]",
          "Window Size + RTT",
          "EstimatedRTT + DevRTT",
        ],
        correctIndex: 1,
        explanation:
          "A Connection Identity is defined as the combination of [Source IP, Source Port] and [Dest IP, Dest Port].",
      },
      {
        id: "it351-ch9-q4",
        text: "Which application typically operates over Port 80?",
        options: [
          "Email",
          "Database",
          "Web",
          "DNS",
        ],
        correctIndex: 2,
        explanation:
          "Port 80 is specifically designated for Web traffic during port multiplexing.",
      },
      {
        id: "it351-ch9-q5",
        text: "Which of the following is a key characteristic of the User Datagram Protocol (UDP)?",
        options: [
          "Connection-oriented",
          "Reliable and ordered delivery",
          "High precision",
          "Connectionless with no reliability",
        ],
        correctIndex: 3,
        explanation:
          "UDP is connectionless, has no reliability, no congestion control, and features low overhead.",
      },
      {
        id: "it351-ch9-q6",
        text: "Which of the following is a key characteristic of the Transmission Control Protocol (TCP)?",
        options: [
          "Low overhead",
          "Connectionless",
          "Flow and Congestion Control",
          "No reliability",
        ],
        correctIndex: 2,
        explanation:
          "TCP is a connection-oriented protocol that provides reliable and ordered delivery, flow and congestion control, and high precision.",
      },
      {
        id: "it351-ch9-q7",
        text: "What is the correct sequence of messages exchanged during establishing reliability in TCP?",
        options: [
          "ACK -> SYN -> SYN-ACK",
          "SYN -> SYN-ACK -> ACK",
          "SYN-ACK -> ACK -> SYN",
          "SYN -> ACK -> SYN-ACK",
        ],
        correctIndex: 1,
        explanation:
          "The TCP 3-Way Handshake starts with the Client sending a SYN, the Server responding with a SYN-ACK, and the Client concluding with an ACK.",
      },
      {
        id: "it351-ch9-q8",
        text: "What is the primary purpose of the TCP 3-Way Handshake?",
        options: [
          "To prevent overwhelming the network",
          "To calculate the Bandwidth-Delay Product",
          "To establish Initial Sequence Numbers and guarantee bidirectional communication",
          "To switch from exponential to linear growth",
        ],
        correctIndex: 2,
        explanation:
          "The 3-Way Handshake establishes Initial Sequence Numbers and guarantees bidirectional communication before any real data flows.",
      },
      {
        id: "it351-ch9-q9",
        text: "How does the Sliding Window mechanism improve network efficiency?",
        options: [
          "By replacing TCP with UDP to lower overhead",
          "By transmitting multiple segments without waiting for individual ACKs",
          "By dropping packets to slow down the sender",
          "By multiplexing multiple IPs into one port",
        ],
        correctIndex: 1,
        explanation:
          "The Sliding Window allows TCP to transmit multiple segments without waiting for individual ACKs, significantly improving efficiency through pipelining.",
      },
      {
        id: "it351-ch9-q10",
        text: "What is the formula used to estimate network throughput based on the sliding window?",
        options: [
          "Bandwidth × Delay",
          "Window Size / RTT",
          "min(rwnd, cwnd)",
          "EstimatedRTT + 4 × DevRTT",
        ],
        correctIndex: 1,
        explanation:
          "Throughput is calculated by dividing the Window Size by the Round Trip Time (RTT).",
      },
      {
        id: "it351-ch9-q11",
        text: "Problem: If the Sliding Window size is 64 KB and the RTT is 100 ms, what is the approximate throughput? (Assume 1 KB = 1024 bytes)",
        options: [
          "0.655 MB/s",
          "6.55 MB/s",
          "640 KB/s",
          "0.065 MB/s",
        ],
        correctIndex: 0,
        explanation:
          "Convert 64 KB to 65,536 bytes. Divide by 0.1s (100ms) to get 655,360 bytes/s, which is approximately 0.655 MB/s.",
      },
      {
        id: "it351-ch9-q12",
        text: "Problem: Calculate the throughput if the Window Size is 128 KB and the RTT is 100 ms. (Assume 1 KB = 1024 bytes)",
        options: [
          "0.655 MB/s",
          "1.31 MB/s",
          "2.62 MB/s",
          "13.1 MB/s",
        ],
        correctIndex: 1,
        explanation:
          "Convert 128 KB to 131,072 bytes. Divide by 0.1s to get 1,310,720 bytes/s, which is approximately 1.31 MB/s.",
      },
      {
        id: "it351-ch9-q13",
        text: "What is the primary difference between Flow Control and Congestion Control?",
        options: [
          "Flow control uses UDP; Congestion control uses TCP.",
          "Flow control prevents overwhelming the receiver; Congestion control prevents overwhelming the network.",
          "Flow control modifies the port numbers; Congestion control modifies the IP addresses.",
          "Flow control is handled by routers; Congestion control is handled by switches.",
        ],
        correctIndex: 1,
        explanation:
          "Flow control prevents overwhelming the receiver using a buffer, while Congestion control prevents overwhelming the broader network.",
      },
      {
        id: "it351-ch9-q14",
        text: "Which variable specifically controls Flow Control?",
        options: [
          "cwnd",
          "ssthresh",
          "rwnd",
          "DevRTT",
        ],
        correctIndex: 2,
        explanation:
          "Flow Control is controlled by the receiver window variable, rwnd.",
      },
      {
        id: "it351-ch9-q15",
        text: "Which variable specifically controls Congestion Control?",
        options: [
          "rwnd",
          "cwnd",
          "ssthresh",
          "SampleRTT",
        ],
        correctIndex: 1,
        explanation:
          "Congestion Control is controlled by the congestion window variable, cwnd.",
      },
      {
        id: "it351-ch9-q16",
        text: "How is the Effective Window mathematically defined to ensure neither the network nor the receiver is overwhelmed?",
        options: [
          "rwnd + cwnd",
          "max(rwnd, cwnd)",
          "min(rwnd, cwnd)",
          "rwnd × cwnd",
        ],
        correctIndex: 2,
        explanation:
          "The Effective Window limits unacknowledged data and is calculated as min(rwnd, cwnd).",
      },
      {
        id: "it351-ch9-q17",
        text: "What are the four phases of TCP Congestion Control in the correct order?",
        options: [
          "Fast Retransmit, Slow Start, Congestion Avoidance, Fast Recovery",
          "Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery",
          "Congestion Avoidance, Fast Recovery, Slow Start, Fast Retransmit",
          "Slow Start, Fast Recovery, Congestion Avoidance, Fast Retransmit",
        ],
        correctIndex: 1,
        explanation:
          "The 4 phases are: 1. Slow Start, 2. Congestion Avoidance, 3. Fast Retransmit, 4. Fast Recovery.",
      },
      {
        id: "it351-ch9-q18",
        text: "What type of mathematical growth characterizes Phase 1 (Slow Start) of TCP Congestion Control?",
        options: [
          "Linear growth",
          "Logarithmic growth",
          "Exponential growth",
          "Constant growth",
        ],
        correctIndex: 2,
        explanation:
          "Phase 1: Slow Start relies on initial exponential probing, resulting in exponential growth of the congestion window.",
      },
      {
        id: "it351-ch9-q19",
        text: "During Slow Start, how does the congestion window (cwnd) size change after every RTT?",
        options: [
          "It increases by 1 MSS.",
          "It is cut in half.",
          "It doubles.",
          "It resets to 1 MSS.",
        ],
        correctIndex: 2,
        explanation:
          "In Slow Start, the connection begins with cwnd = 1 MSS and the window doubles after every RTT (1 -> 2 -> 4 -> 8...).",
      },
      {
        id: "it351-ch9-q20",
        text: "Problem: In TCP Slow Start, if the initial cwnd is 1 MSS, what will the window size be after 4 RTTs?",
        options: [
          "4 MSS",
          "8 MSS",
          "16 MSS",
          "32 MSS",
        ],
        correctIndex: 2,
        explanation:
          "The formula is Initial cwnd × 2^RTTs. After 4 RTTs: 1 × 2^4 = 16 MSS.",
      },
      {
        id: "it351-ch9-q21",
        text: "What does the AIMD principle stand for in Phase 2 of TCP Congestion Control?",
        options: [
          "Additive Increase, Multiplicative Decrease",
          "Automatic Increase, Manual Decrease",
          "Asynchronous Insertion, Multiplexed Delivery",
          "Acknowledged Increase, Multiplicative Delivery",
        ],
        correctIndex: 0,
        explanation:
          "AIMD stands for Additive Increase, Multiplicative Decrease, which governs the Congestion Sawtooth pattern.",
      },
      {
        id: "it351-ch9-q22",
        text: "Under the AIMD principle, what happens to the congestion window (cwnd) during the additive increase phase?",
        options: [
          "cwnd is doubled per RTT.",
          "cwnd = cwnd + 1 MSS per RTT.",
          "cwnd remains static until an ACK is received.",
          "ssthresh is added to cwnd.",
        ],
        correctIndex: 1,
        explanation:
          "During Additive Increase, cautious linear growth occurs where cwnd = cwnd + 1 MSS per RTT.",
      },
      {
        id: "it351-ch9-q23",
        text: "Under the AIMD principle, what occurs upon detecting packet loss (Multiplicative Decrease)?",
        options: [
          "ssthresh is cut in half.",
          "cwnd drops to 0.",
          "The connection resets entirely.",
          "rwnd is doubled.",
        ],
        correctIndex: 0,
        explanation:
          "Upon packet loss, Multiplicative Decrease dictates that ssthresh is halved.",
      },
      {
        id: "it351-ch9-q24",
        text: "What is the standard formula for calculating the EstimatedRTT using the Exponential Weighted Moving Average (EWMA)?",
        options: [
          "EstimatedRTT = α(EstimatedRTT) + (1 - α)(SampleRTT)",
          "EstimatedRTT = (1 - α)EstimatedRTT + α(SampleRTT)",
          "EstimatedRTT = Window Size / Throughput",
          "EstimatedRTT = EstimatedRTT + 4 × DevRTT",
        ],
        correctIndex: 1,
        explanation:
          "EstimatedRTT = (1 - α)EstimatedRTT + α(SampleRTT), where α is typically 0.125.",
      },
      {
        id: "it351-ch9-q25",
        text: "Problem: Given an EstimatedRTT of 100ms, a SampleRTT of 120ms, and α = 0.125, what is the new EstimatedRTT?",
        options: [
          "100 ms",
          "102.5 ms",
          "110 ms",
          "112.5 ms",
        ],
        correctIndex: 1,
        explanation:
          "Calculation: 0.875(100) + 0.125(120) = 87.5 + 15 = 102.5 ms.",
      },
      {
        id: "it351-ch9-q26",
        text: "Problem: Given an EstimatedRTT of 200ms, a SampleRTT of 240ms, and α = 0.125, what is the new EstimatedRTT?",
        options: [
          "205 ms",
          "210 ms",
          "220 ms",
          "225 ms",
        ],
        correctIndex: 0,
        explanation:
          "Calculation: 0.875(200) + 0.125(240) = 175 + 30 = 205 ms.",
      },
      {
        id: "it351-ch9-q27",
        text: "What is the formula used to calculate the TCP Timeout interval?",
        options: [
          "Timeout = EstimatedRTT + SampleRTT",
          "Timeout = EstimatedRTT + α × DevRTT",
          "Timeout = EstimatedRTT + 4 × DevRTT",
          "Timeout = 2 × EstimatedRTT",
        ],
        correctIndex: 2,
        explanation:
          "The Timeout is calculated as EstimatedRTT + 4 × DevRTT to determine when to give up waiting for an ACK.",
      },
      {
        id: "it351-ch9-q28",
        text: "In the context of Maximum Utilization, what does the Bandwidth-Delay Product (BDP) represent?",
        options: [
          "The error rate of a given physical medium",
          "The total area of the network topology",
          "The number of routers between source and destination",
          "The volume of the pipe, or how large the window must be to fully utilize a link",
        ],
        correctIndex: 3,
        explanation:
          "BDP represents the 'Volume' of the pipe (Bandwidth × Delay). It indicates how large the sliding window must be to fully utilize a link without pausing.",
      },
      {
        id: "it351-ch9-q29",
        text: "Problem: Calculate the Bandwidth-Delay Product (BDP) in bits for a link with a Bandwidth of 50 Mbps and an RTT of 50 ms.",
        options: [
          "2.5 × 10^6 bits",
          "25 × 10^6 bits",
          "2.5 × 10^3 bits",
          "250 × 10^3 bits",
        ],
        correctIndex: 0,
        explanation:
          "Calculation: 50 × 10^6 bits/s × 0.05 seconds = 2.5 × 10^6 bits.",
      },
      {
        id: "it351-ch9-q30",
        text: "In a Congestion Window Trace, if the initial cwnd is 1 MSS and ssthresh is 16 MSS, what happens to the growth rate after RTT 5 (when cwnd hits 16)?",
        options: [
          "The window size drops to 1 MSS.",
          "The window size doubles to 32 MSS in RTT 6.",
          "The window size transitions to linear growth, becoming 17 MSS in RTT 6.",
          "The window size remains strictly at 16 MSS.",
        ],
        correctIndex: 2,
        explanation:
          "Once cwnd hits the ssthresh (16 MSS at RTT 5), the system exits the exponential Slow Start phase and enters Congestion Avoidance, leading to linear growth (+1 MSS per RTT), making it 17 at RTT 6.",
      }
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
