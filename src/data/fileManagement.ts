
import { Subject } from "@/types";

const chapters = [
  // ============================
  // CHAPTER 1
  // ============================
  {
    id: "is231-chapter-1",
    name: "Chapter 1: Introduction to File Management & Storage Hierarchy",
    description:
      "RAM limitations, physical vs. logical files, storage hierarchy (HDD, SSD, tape), the Golden Rule of file processing, and index structures (B-trees, B+ trees, hashing).",
    questions: [
      {
        id: "is231-ch1-q1",
        text: "Variables, arrays, and linked lists live in main memory (RAM), which has two big problems: it is limited and _____.",
        options: ["Slow", "Volatile", "Permanent", "Non-volatile"],
        correctIndex: 1
      },
      {
        id: "is231-ch1-q2",
        text: "To the operating system, a file is simply seen as a _____.",
        options: [
          "Collection of fields and records",
          "Sequence of bytes",
          "Binary tree",
          "Logical stream"
        ],
        correctIndex: 1
      },
      {
        id: "is231-ch1-q3",
        text: "To the programmer, real applications impose a structure on files which includes _____.",
        options: [
          "Keyboards and screens",
          "Fields, records, blocks, and indexes",
          "Volatile memory arrays",
          "Hierarchical paths"
        ],
        correctIndex: 1
      },
      {
        id: "is231-ch1-q4",
        text: "What is the approximate access time of a magnetic hard disk (HDD)?",
        options: ["100 ns", "0.1 ms", "10 ms", "100 ms"],
        correctIndex: 2
      },
      {
        id: "is231-ch1-q5",
        text: "Which of the following is a main reason we use disks despite their slow speed?",
        options: [
          "They are smaller in physical size",
          "They are volatile",
          "They are non-volatile and cheap",
          "They are faster than SSDs"
        ],
        correctIndex: 2
      },
      {
        id: "is231-ch1-q6",
        text: "According to the \"Golden Rule\" of file processing, what should we minimize?",
        options: [
          "The use of RAM",
          "The number of disk accesses",
          "The size of the file",
          "The number of logical files"
        ],
        correctIndex: 1
      },
      {
        id: "is231-ch1-q7",
        text: "In the storage hierarchy, which device has the largest capacity but the slowest access time?",
        options: [
          "Main memory (RAM)",
          "Solid-state drive (SSD)",
          "Magnetic hard disk (HDD)",
          "Magnetic tape (archival)"
        ],
        correctIndex: 3
      },
      {
        id: "is231-ch1-q8",
        text: "Which file structure was designed in 1972 specifically to be balanced and shallow for disks?",
        options: [
          "Sequential files",
          "AVL trees",
          "B-trees",
          "Hashing"
        ],
        correctIndex: 2
      },
      {
        id: "is231-ch1-q9",
        text: "What structures are at the heart of modern systems like MySQL, Oracle, and NTFS today?",
        options: [
          "Sequential files and simple indexes",
          "AVL trees and binary trees",
          "B+ trees and hashing",
          "Tape archives"
        ],
        correctIndex: 2
      },
      {
        id: "is231-ch1-q10",
        text: "What is a \"logical file\"?",
        options: [
          "The actual collection of bytes stored on the disk",
          "A file managed directly by the operating system",
          "The channel or stream object the program uses to talk to the file",
          "The hierarchical directory path"
        ],
        correctIndex: 2
      },
      {
        id: "is231-ch1-tf1",
        text: "When a program ends or the power goes off, all data stored in the main memory (RAM) is lost.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch1-tf2",
        text: "To the operating system, a file has a complex structure consisting of fields, records, and indexes.",
        options: ["True", "False"],
        correctIndex: 1
      },
      {
        id: "is231-ch1-tf3",
        text: "A solid-state drive (SSD) is faster than a magnetic hard disk (HDD) but still much slower than main memory (RAM).",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch1-tf4",
        text: "One of the main reasons to use disks is that the cost per gigabyte on disk is far lower than RAM.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch1-tf5",
        text: "Magnetic tape provides the fastest access time and the smallest capacity in the storage hierarchy.",
        options: ["True", "False"],
        correctIndex: 1
      },
      {
        id: "is231-ch1-tf6",
        text: "There is a single perfect file structure that is best for everything, including search speed and update speed.",
        options: ["True", "False"],
        correctIndex: 1
      },
      {
        id: "is231-ch1-tf7",
        text: "Sequential files were designed during the tape era to read one record after another in order.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch1-tf8",
        text: "A physical file is managed by the operating system and has a name in the directory, such as students.dat.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch1-tf9",
        text: "A C++ program touches the physical bytes on the disk directly without using a logical stream.",
        options: ["True", "False"],
        correctIndex: 1
      },
      {
        id: "is231-ch1-tf10",
        text: "The Open operation is responsible for connecting a logical file to a physical file.",
        options: ["True", "False"],
        correctIndex: 0
      }
    ]
  },

  // ============================
  // CHAPTER 2
  // ============================
  {
    id: "is231-chapter-2",
    name: "Chapter 2: Disks, Physical Organization & Performance Calculations",
    description:
      "Platters, cylinders, sectors, capacity calculations, seek time, rotational delay, access time, fragmentation, and clusters.",
    questions: [
      {
        id: "is231-ch2-q1",
        text: "What is a cylinder on a magnetic disk?",
        options: [
          "A set of tracks with the same number across all surfaces",
          "A stack of platters attached to the spindle",
          "A set of sectors arranged around one track",
          "A group of tracks located on only one surface"
        ],
        correctIndex: 0
      },
      {
        id: "is231-ch2-q2",
        text: "A disk has 4 platters, 50,000 cylinders, 400 sectors per track, and 512 bytes per sector. What is its capacity in bytes?",
        options: [
          "409,600,000,000",
          "10,240,000,000",
          "81,920,000,000",
          "204,800,000,000"
        ],
        correctIndex: 2,
        explanation: "4 platters = 8 surfaces. Capacity = 8 surfaces × 50,000 cylinders × 400 sectors/track × 512 bytes = 81,920,000,000 bytes."
      },
      {
        id: "is231-ch2-q3",
        text: "A disk spins at 10,000 revolutions per minute. What is its average rotational delay?",
        options: ["3 ms", "10 ms", "1 ms", "6 ms"],
        correctIndex: 0,
        explanation: "10,000 RPM = 1 rev per 6 ms. Average rotational delay = 0.5 × 6 ms = 3 ms."
      },
      {
        id: "is231-ch2-q4",
        text: "A disk has an average seek time of 8 ms and spins at 7,200 RPM. Reading one sector takes 0.02 ms of transfer time. What is the approximate total access time?",
        options: [
          "8.02 ms",
          "16.33 ms",
          "10.19 ms",
          "12.19 ms"
        ],
        correctIndex: 3,
        explanation: "7,200 RPM -> 1 rev = 8.33 ms -> average rotational delay = 4.17 ms. Total access time = 8 ms + 4.17 ms + 0.02 ms ≈ 12.19 ms."
      },
      {
        id: "is231-ch2-q5",
        text: "Which storage device is best suited to inexpensive, large-scale backup when access may take seconds or minutes?",
        options: [
          "Magnetic tape",
          "RAM",
          "Solid-state drive",
          "Hard disk drive"
        ],
        correctIndex: 0
      },
      {
        id: "is231-ch2-q6",
        text: "Why is reading data located within the same cylinder much faster than reading across cylinders on a hard disk drive?",
        options: [
          "Data within the same cylinder does not require rotating the platters.",
          "Switching between read/write heads is electronic and requires no mechanical arm movement.",
          "Each cylinder has a dedicated read/write head for every single sector.",
          "Data in the same cylinder is automatically copied into the disk cache."
        ],
        correctIndex: 1
      },
      {
        id: "is231-ch2-q7",
        text: "What type of storage fragmentation occurs when a 1-byte file is allocated to a 4 KB cluster?",
        options: [
          "External fragmentation",
          "Dynamic fragmentation",
          "Internal fragmentation",
          "Sector fragmentation"
        ],
        correctIndex: 2
      },
      {
        id: "is231-ch2-q8",
        text: "On average, approximately how far does the disk arm travel across the cylinders during a seek operation?",
        options: [
          "One-half of the disk",
          "The entire disk width",
          "One-third of the disk",
          "One-tenth of the disk"
        ],
        correctIndex: 2
      },
      {
        id: "is231-ch2-q9",
        text: "Which of the following correctly orders storage devices from fastest typical access time to slowest?",
        options: [
          "SSD → RAM → HDD → Tape",
          "RAM → HDD → SSD → Tape",
          "RAM → SSD → HDD → Tape",
          "Tape → HDD → SSD → RAM"
        ],
        correctIndex: 2
      },
      {
        id: "is231-ch2-q10",
        text: "A file consists of 20,000 records of 256 bytes each. If stored on a disk with 512-byte sectors where records cannot cross sector boundaries, how many sectors are required to store the file?",
        options: [
          "5,000 sectors",
          "20,000 sectors",
          "10,000 sectors",
          "40,000 sectors"
        ],
        correctIndex: 2,
        explanation: "Each 512-byte sector holds 512 / 256 = 2 records. 20,000 records / 2 records per sector = 10,000 sectors."
      },
      {
        id: "is231-ch2-tf1",
        text: "The platters in a magnetic disk drive spin together on the central spindle.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch2-tf2",
        text: "Each read/write head moves independently to a different cylinder.",
        options: ["True", "False"],
        correctIndex: 1
      },
      {
        id: "is231-ch2-tf3",
        text: "On average, rotational delay is half the time required for one revolution.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch2-tf4",
        text: "Seek time is the time spent waiting for the desired sector to rotate under the head.",
        options: ["True", "False"],
        correctIndex: 1
      },
      {
        id: "is231-ch2-tf5",
        text: "RAM is volatile, while SSDs and hard disk drives are nonvolatile.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch2-tf6",
        text: "An SSD has moving platters and a mechanical arm that create its seek time.",
        options: ["True", "False"],
        correctIndex: 1
      },
      {
        id: "is231-ch2-tf7",
        text: "Solid State Drives (SSDs) provide significantly faster random read access compared to conventional Hard Disk Drives (HDDs).",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch2-tf8",
        text: "Large clusters result in fewer seeks and faster sequential reading.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch2-tf9",
        text: "Small clusters lead to more internal fragmentation compared to large clusters.",
        options: ["True", "False"],
        correctIndex: 1
      },
      {
        id: "is231-ch2-tf10",
        text: "Small clusters require a larger allocation table and result in more extents.",
        options: ["True", "False"],
        correctIndex: 0
      }
    ]
  },

  // ============================
  // CHAPTER 3
  // ============================
  {
    id: "is231-chapter-3",
    name: "Chapter 3: I/O Operations, Buffering & Buffer Management",
    description:
      "File manager, system I/O buffers, DMA, disk controller, buffering, double buffering, LRU, buffer pools, scatter/gather I/O, and buffered data access modes.",
    questions: [
      {
        id: "is231-ch3-q1",
        text: "What is the first component involved when a program writes a byte to a file?",
        options: [
          "Disk Controller",
          "File Manager",
          "I/O Processor",
          "Hard Disk"
        ],
        correctIndex: 1
      },
      {
        id: "is231-ch3-q2",
        text: "What is the main purpose of a system I/O buffer?",
        options: [
          "To permanently store data",
          "To make the CPU faster",
          "To temporarily hold data during I/O operations",
          "To replace the disk controller"
        ],
        correctIndex: 2
      },
      {
        id: "is231-ch3-q3",
        text: "What does DMA stand for?",
        options: [
          "Direct Memory Access",
          "Data Management Application",
          "Disk Memory Allocation",
          "Direct Machine Algorithm"
        ],
        correctIndex: 0
      },
      {
        id: "is231-ch3-q4",
        text: "What is the role of the disk controller?",
        options: [
          "To write C++ programs",
          "To manage the physical interaction with the disk",
          "To decide which file the user opens",
          "To replace the system buffer"
        ],
        correctIndex: 1
      },
      {
        id: "is231-ch3-q5",
        text: "Why do we need buffers?",
        options: [
          "To eliminate the need for files",
          "To reduce the performance difference between the CPU and I/O devices",
          "To increase the size of the hard disk",
          "To prevent all program errors"
        ],
        correctIndex: 1
      },
      {
        id: "is231-ch3-q6",
        text: "What is double buffering mainly used for?",
        options: [
          "To delete duplicate files",
          "To allow processing and I/O to overlap",
          "To double the disk's storage capacity",
          "To stop the CPU while data is transferred"
        ],
        correctIndex: 1
      },
      {
        id: "is231-ch3-q7",
        text: "What does LRU stand for?",
        options: [
          "Last Read Unit",
          "Least Recently Used",
          "Longest Running Utility",
          "Lowest Resource Usage"
        ],
        correctIndex: 1
      },
      {
        id: "is231-ch3-q8",
        text: "In buffering, what is a buffer pool?",
        options: [
          "A collection of buffers available for use",
          "A type of disk controller",
          "A list of files permanently stored in memory",
          "A program that manages CPU instructions"
        ],
        correctIndex: 0
      },
      {
        id: "is231-ch3-q9",
        text: "A program reads 10 blocks from a disk. Each block takes 10 ms to read, and processing each block takes 8 ms. Assuming no overlap, what is the total time required to read and process all 10 blocks?",
        options: ["80 ms", "100 ms", "180 ms", "200 ms"],
        correctIndex: 2,
        explanation: "Reading time = 10 × 10 = 100 ms. Processing time = 10 × 8 = 80 ms. Since there is no overlap, total time = 100 + 80 = 180 ms."
      },
      {
        id: "is231-ch3-q10",
        text: "What is the purpose of scatter/gather I/O?",
        options: [
          "To shut down the I/O processor",
          "To move data only one byte at a time",
          "To transfer data between a device and multiple memory regions",
          "To clear all buffers before reading"
        ],
        correctIndex: 2
      },
      {
        id: "is231-ch3-tf1",
        text: "A buffer temporarily stores data while it is being transferred between components.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch3-tf2",
        text: "The disk controller and the I/O processor perform exactly the same role.",
        options: ["True", "False"],
        correctIndex: 1
      },
      {
        id: "is231-ch3-tf3",
        text: "Buffering can improve I/O performance by reducing the number of direct interactions with a slow device.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch3-tf4",
        text: "Single buffering uses two buffers to overlap processing and I/O.",
        options: ["True", "False"],
        correctIndex: 1
      },
      {
        id: "is231-ch3-tf5",
        text: "Double buffering can allow one buffer to be processed while the other is being filled.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch3-tf6",
        text: "LRU stands for Least Recently Used and considers how recently a buffer or item was used.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch3-tf7",
        text: "'\\n' and endl always behave identically because both only insert a newline.",
        options: ["True", "False"],
        correctIndex: 1
      },
      {
        id: "is231-ch3-tf8",
        text: "A buffer pool contains multiple buffers that can be allocated when needed.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch3-tf9",
        text: "Move mode and locate mode are two approaches related to accessing buffered data.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch3-tf10",
        text: "In double buffering, reading data and processing data can overlap, reducing the total execution time.",
        options: ["True", "False"],
        correctIndex: 0
      }
    ]
  },

  // ============================
  // CHAPTER 4
  // ============================
  {
    id: "is231-chapter-4",
    name: "Chapter 4: Stream Files, Fields, Records & Record Organization",
    description:
      "Stream files, fields, records, field-separation methods, fixed-length fields, length indicators, delimiters, keyword=value expressions, fixed-length records, direct access, and RRN.",
    questions: [
      {
        id: "is231-ch4-q1",
        text: "What is a stream file, as described in Chapter 4?",
        options: [
          "A sequence of bytes without built-in field boundaries.",
          "A table where every column has a fixed type.",
          "A file that contains only text characters.",
          "An index containing byte offsets for every record."
        ],
        correctIndex: 0
      },
      {
        id: "is231-ch4-q2",
        text: "Which statement correctly defines a field?",
        options: [
          "A group of complete records stored together.",
          "The smallest meaningful unit of data, such as a ZIP code.",
          "A byte offset used to locate a record.",
          "A marker that always ends a file."
        ],
        correctIndex: 1
      },
      {
        id: "is231-ch4-q3",
        text: "Which list contains the four field-separation methods from the lecture?",
        options: [
          "Fixed-length, length indicator, delimiter, keyword=value",
          "Fixed-length, B+ tree, hashing, newline",
          "CSV, XML, JSON, binary",
          "Index, RRN, padding, endianness"
        ],
        correctIndex: 0
      },
      {
        id: "is231-ch4-q4",
        text: "What is a record in the chapter's example?",
        options: [
          "One byte in the field",
          "A delimiter between two fields",
          "A set of related fields describing one person",
          "A separate index file"
        ],
        correctIndex: 2
      },
      {
        id: "is231-ch4-q5",
        text: "In fixed-length fields, what happens when a value is shorter than its allocated field size?",
        options: [
          "The next field starts immediately after the value",
          "The field is padded with blanks",
          "The record is automatically deleted",
          "A length indicator is always inserted"
        ],
        correctIndex: 1
      },
      {
        id: "is231-ch4-q6",
        text: "A record has fields sized 10, 10, 15, 15, 2, and 9 bytes. What is its total size?",
        options: ["59 bytes", "60 bytes", "61 bytes", "62 bytes"],
        correctIndex: 2,
        explanation: "Total record size = 10 + 10 + 15 + 15 + 2 + 9 = 61 bytes."
      },
      {
        id: "is231-ch4-q7",
        text: "In the length-indicator method, what does the reader do first for each field?",
        options: [
          "Search for a newline",
          "Read the field's length, then read that many bytes",
          "Look up the field in an external index",
          "Assume every field has 10 bytes"
        ],
        correctIndex: 1
      },
      {
        id: "is231-ch4-q8",
        text: "Why is a blank space a poor field delimiter for an address such as '123 Maple'?",
        options: [
          "Blanks cannot be stored in text files",
          "It would split the address into multiple pieces",
          "A blank always occupies two bytes",
          "It prevents records from having variable length"
        ],
        correctIndex: 1
      },
      {
        id: "is231-ch4-q9",
        text: "Which record organization allows direct access by record number using a simple calculation?",
        options: [
          "Record delimiter",
          "Fixed number of fields",
          "Fixed-length records",
          "Length indicator at the start of each record"
        ],
        correctIndex: 2
      },
      {
        id: "is231-ch4-q10",
        text: "What does RRN stand for in the fixed-length Student example?",
        options: [
          "Record Reference Name",
          "Relative Record Number",
          "Read Record Node",
          "Record Retrieval Network"
        ],
        correctIndex: 1
      },
      {
        id: "is231-ch4-tf1",
        text: "A stream file is a sequence of bytes without built-in field boundaries.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch4-tf2",
        text: "A field is the smallest meaningful unit of data, such as a ZIP code.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch4-tf3",
        text: "A record groups related fields together.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch4-tf4",
        text: "The four field-separation methods include fixed-length fields, length indicators, delimiters, and keyword=value expressions.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch4-tf5",
        text: "In fixed-length fields, values shorter than the allocated size are padded with blanks.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch4-tf6",
        text: "The length-indicator method requires the reader to guess the length of each field.",
        options: ["True", "False"],
        correctIndex: 1
      },
      {
        id: "is231-ch4-tf7",
        text: "A blank space is always a good delimiter for addresses because addresses never contain spaces.",
        options: ["True", "False"],
        correctIndex: 1
      },
      {
        id: "is231-ch4-tf8",
        text: "Fixed-length records can support direct access by calculating the record's byte offset.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch4-tf9",
        text: "In a newline-delimited text file, the newline character marks the end of a record.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch4-tf10",
        text: "RRN stands for Record Retrieval Network.",
        options: ["True", "False"],
        correctIndex: 1
      }
    ]
  },

  // ============================
  // CHAPTER 5
  // ============================
  {
    id: "is231-chapter-5",
    name: "Chapter 5: Keys, Searching, Blocking & File Organization",
    description:
      "Primary keys, secondary keys, canonical form, sequential search, time complexity, blocking factor, disk blocks, direct access using RRN, file headers, magic fields, and hashed file organization.",
    questions: [
      {
        id: "is231-ch5-q1",
        text: "What is the main purpose of a primary key?",
        options: [
          "To identify multiple records with the same value",
          "To uniquely identify each record",
          "To determine the record size",
          "To store file metadata"
        ],
        correctIndex: 1
      },
      {
        id: "is231-ch5-q2",
        text: "Which of the following is an example of a secondary key?",
        options: [
          "Student ID",
          "National ID number",
          "Department",
          "Generated unique ID"
        ],
        correctIndex: 2
      },
      {
        id: "is231-ch5-q3",
        text: "What is the purpose of canonical form?",
        options: [
          "To increase the file size",
          "To convert keys into a standard form before storing or searching",
          "To sort records by physical location",
          "To delete duplicate records automatically"
        ],
        correctIndex: 1
      },
      {
        id: "is231-ch5-q4",
        text: "What is the time complexity of sequential search?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctIndex: 2
      },
      {
        id: "is231-ch5-q5",
        text: "A file contains 4,000 records, with 16 records per block. How many blocks are required?",
        options: ["16", "125", "250", "2000"],
        correctIndex: 2,
        explanation: "Number of blocks = Total records / Records per block = 4,000 / 16 = 250 blocks."
      },
      {
        id: "is231-ch5-q6",
        text: "What is the main advantage of blocking?",
        options: [
          "It changes sequential search to O(1).",
          "It allows multiple records to be read in one disk access.",
          "It eliminates the need for keys.",
          "It makes all records variable-length."
        ],
        correctIndex: 1
      },
      {
        id: "is231-ch5-q7",
        text: "What is the blocking factor of a file?",
        options: [
          "The number of records stored in one block.",
          "The total number of blocks in the file.",
          "The size of the file header.",
          "The number of keys in each record."
        ],
        correctIndex: 0
      },
      {
        id: "is231-ch5-q8",
        text: "A file has a 32-byte header, and each record is 128 bytes. What is the byte offset of the record with RRN 10?",
        options: [
          "1280 bytes",
          "1312 bytes",
          "1408 bytes",
          "160 bytes"
        ],
        correctIndex: 1,
        explanation: "Using A = H + N × R: A = 32 + (10 × 128) = 32 + 1280 = 1312 bytes."
      },
      {
        id: "is231-ch5-q9",
        text: "What does the magic field in a file header identify?",
        options: [
          "The number of records",
          "The size of each record",
          "The file format or signature",
          "The first reusable slot"
        ],
        correctIndex: 2
      },
      {
        id: "is231-ch5-q10",
        text: "Which file organization is most suitable for exact-match searches using a key-to-bucket mapping?",
        options: [
          "Variable-length",
          "Hashed",
          "Sorted only",
          "Sequential only"
        ],
        correctIndex: 1
      },
      {
        id: "is231-ch5-tf1",
        text: "Two records can share the same primary key.",
        options: ["True", "False"],
        correctIndex: 1
      },
      {
        id: "is231-ch5-tf2",
        text: "A good primary key should be unique and stable.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch5-tf3",
        text: "Canonical form can convert \"ames\", \"AMES\", and \"Ames \" into the same key.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch5-tf4",
        text: "Sequential search examines records one by one until it finds the target or reaches the end.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch5-tf5",
        text: "The time complexity of sequential search is O(1), regardless of the number of records.",
        options: ["True", "False"],
        correctIndex: 1
      },
      {
        id: "is231-ch5-tf6",
        text: "Blocking improves search performance but does not change the O(n) growth of sequential search.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch5-tf7",
        text: "Direct access by RRN requires scanning every preceding record.",
        options: ["True", "False"],
        correctIndex: 1
      },
      {
        id: "is231-ch5-tf8",
        text: "The direct-access formula A = H + N × R works for fixed-length records.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch5-tf9",
        text: "In the lecture's header structure, availHead = -1 means every slot is full.",
        options: ["True", "False"],
        correctIndex: 0
      },
      {
        id: "is231-ch5-tf10",
        text: "File organization and file access refer to exactly the same concept.",
        options: ["True", "False"],
        correctIndex: 1
      }
    ]
  }
];

export const fileManagement: Subject = {
  id: "IS231",
  name: "File Management and Processing",
  icon: "HardDrive",
  description:
    "Storage media, secondary storage hierarchy, physical vs. logical files, buffering, indexing, B-trees, B+ trees, and hashing techniques.",
  color: "#10B981",
  professor: "Dr. Hager Mohammed",
  chapters,
  questions: chapters.flatMap((chapter) => chapter.questions)
};
