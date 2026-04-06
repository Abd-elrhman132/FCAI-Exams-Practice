import { Subject, Chapter } from "@/types";

const chapters: Chapter[] = [
  {
    id: "cs211-lec1",
    name: "Lecture 1: Introduction to Data Structures",
    description:
      "Fundamental concepts of data organization, primitive vs non-primitive types, and time/space complexity.",
    questions: [
      {
        id: "cs211-lec1-q1",
        text: "Which of the following is considered a primitive data type?",
        options: ["Array", "Linked List", "Boolean", "Stack"],
        correctIndex: 2,
        explanation:
          "The primitive data types include int, double, char, float, and Boolean [1].",
      },
      {
        id: "cs211-lec1-q2",
        text: "What is a primary purpose of a data structure?",
        options: [
          "Only to store data types before usage",
          "To define a way of organizing data items considering their elements and relationships",
          "To replace algorithmic processing completely",
          "To convert non-primitive types to primitive types",
        ],
        correctIndex: 1,
        explanation:
          "A data structure defines a way of organizing all data items that considers not only the elements stored but also their relationship to each other [1].",
      },
      {
        id: "cs211-lec1-q3",
        text: "Which of the following is NOT listed as a standard operation in data structures?",
        options: ["Access", "Insert", "Compile", "Search"],
        correctIndex: 2,
        explanation:
          "The core operations in data structures are Access, Insert, Delete, and Search [2].",
      },
      {
        id: "cs211-lec1-q4",
        text: "The efficiency of a program depends on which two measurements?",
        options: [
          "Time and Space complexity",
          "Input and Output size",
          "Hardware and Software speeds",
          "Primitive and Non-primitive structures",
        ],
        correctIndex: 0,
        explanation:
          "The efficiency of a program depends on two measurements: Space complexity and Time complexity [3].",
      },
      {
        id: "cs211-lec1-q5",
        text: "What is the time complexity of an algorithm that simply swaps the values of two variables?",
        options: ["O(n)", "O(n^2)", "O(1)", "O(log n)"],
        correctIndex: 2,
        explanation:
          "The swap algorithm performs only three operations to exchange values, so its time complexity is constant, which is O(1) [3, 4].",
      },
      {
        id: "cs211-lec1-q6",
        text: "What is the space complexity of an algorithm that finds the maximum of 'n' given numbers in an array?",
        options: ["O(n)", "O(1)", "O(n^2)", "O(log n)"],
        correctIndex: 1,
        explanation:
          "The algorithm to find the maximum of 'n' given numbers only needs space to store the maximum value temporarily, making its space complexity O(1) [4, 5].",
      },
      {
        id: "cs211-lec1-q7",
        text: "In a linear search algorithm, what represents the worst-case scenario for time complexity?",
        options: [
          "Searching for an element at the first index",
          "Searching for an element at the last index",
          "Calculating the average time of all possible cases",
          "Having an empty array",
        ],
        correctIndex: 1,
        explanation:
          "The worst-case scenario occurs when searching for an element present at the last index, resulting in an O(n) time complexity [6].",
      },
      {
        id: "cs211-lec1-q8",
        text: "How are Physical Data Structures defined?",
        options: [
          "By how data is conceptualized independently of memory",
          "By the hierarchical relationships of data",
          "By how data is actually stored in memory",
          "By the mathematical operations allowed",
        ],
        correctIndex: 2,
        explanation:
          "Physical data structures describe how data is actually stored in memory, such as through Contiguous or Non-Contiguous allocation [7].",
      },
      {
        id: "cs211-lec1-q9",
        text: "Which of the following is an advantage of Contiguous (Sequential) Allocation like arrays?",
        options: [
          "Dynamic sizing capabilities",
          "Easy and cheap insertion and deletion",
          "No need for index mapping",
          "Cache friendly",
        ],
        correctIndex: 3,
        explanation:
          "Advantages of contiguous allocation include easy access using an index, simple implementation, and being cache friendly [8].",
      },
      {
        id: "cs211-lec1-q10",
        text: "Which data structure is a primary example of Non-Contiguous (Linked) Allocation?",
        options: [
          "Arrays",
          "Linked Lists",
          "Contiguous Stacks",
          "Primitive Booleans",
        ],
        correctIndex: 1,
        explanation:
          "Linked Lists are an example of non-contiguous allocation where elements are stored in different memory locations and connected using pointers [8].",
      },
      {
        id: "cs211-lec1-q11",
        text: "What is a major disadvantage of Non-Contiguous (Linked) Allocation?",
        options: [
          "Fixed predetermined size",
          "Costly to insert and delete items",
          "Extra memory required for pointers",
          "Inability to hold anything but integers",
        ],
        correctIndex: 2,
        explanation:
          "Disadvantages of linked allocation include slower access (no direct indexing) and requiring extra memory to store pointers [9].",
      },
      {
        id: "cs211-lec1-q12",
        text: "Which characteristic best describes Linear Data Structures?",
        options: [
          "Multiple simultaneous traversal paths",
          "Each element has a unique predecessor and successor",
          "Elements are arranged in a hierarchical network structure",
          "They naturally utilize many-to-many relationships",
        ],
        correctIndex: 1,
        explanation:
          "In linear data structures, elements are arranged in sequential order, meaning each element (except the first and last) has a unique predecessor and successor [9].",
      },
      {
        id: "cs211-lec1-q13",
        text: "Which of the following is considered a Non-Linear Data Structure?",
        options: ["Queues", "Linked Lists", "Stacks", "Trees"],
        correctIndex: 3,
        explanation:
          "Examples of non-linear data structures include Trees and Graphs, where elements are arranged in a hierarchical or network structure [9].",
      },
      {
        id: "cs211-lec1-q14",
        text: "What two core components does an Abstract Data Type (ADT) combine?",
        options: [
          "Primitive types and non-primitive algorithms",
          "An organized data object and a set of operations",
          "Space complexity rules and time constraints",
          "Physical memory locations and logical paths",
        ],
        correctIndex: 1,
        explanation:
          "An ADT is defined as an organized data object combined with a set of operations used to manipulate it [10].",
      },
      {
        id: "cs211-lec1-q15",
        text: "What does it mean when we say an ADT enforces encapsulation?",
        options: [
          "It allows the user to see exactly how memory addresses are allocated",
          "It restricts data strictly to a sequential physical layout",
          "It hides the implementation details and how data is stored in memory",
          "It prevents the user from using primitive data types",
        ],
        correctIndex: 2,
        explanation:
          "An ADT enforces encapsulation by hiding the implementation details of the algorithms and the way data values are actually stored in the main memory [10].",
      },
      {
        id: "cs211-lec1-q16",
        text: "The 'undo' button in a computer application typically functions using which policy?",
        options: [
          "First-In-First-Out (FIFO)",
          "Last-In-First-Out (LIFO)",
          "Random Network Access",
          "Hierarchical Minimum Traversal",
        ],
        correctIndex: 1,
        explanation:
          "The undo button is an example of a Stack data structure, which applies a Last-In-First-Out (LIFO) policy [11].",
      },
      {
        id: "cs211-lec1-q17",
        text: "Waiting in a checkout line at a supermarket is a real-life example of a:",
        options: ["Stack", "Tree", "Queue", "Graph"],
        correctIndex: 2,
        explanation:
          "A queue applies a First-In-First-Out (FIFO) policy, much like waiting in line at a library or supermarket, or sending jobs to a printer [11].",
      },
      {
        id: "cs211-lec1-q18",
        text: "Which condition is an absolute requirement for a tree to be classified as a Binary Tree?",
        options: [
          "Cycles must be present to connect the leaves",
          "Each node can have up to three children",
          "Each node has one parent, except the root",
          "It must be organized contiguously in memory",
        ],
        correctIndex: 2,
        explanation:
          "A binary tree must satisfy conditions such as: each node having at most two children, no cycles being allowed, and each node having one parent, except the root [12].",
      },
      {
        id: "cs211-lec1-q19",
        text: "What type of tree structure is specifically optimized to find maximum or minimum key values in a single operation?",
        options: ["Binary Search Tree (BST)", "Graph", "Heap", "Queue"],
        correctIndex: 2,
        explanation:
          "A Heap is a tree structure used to find the maximum or minimum key values in a single operation [12].",
      },
      {
        id: "cs211-lec1-q20",
        text: "Which data structure is conceptualized as a collection of nodes linked by arcs, often used to model social network connections?",
        options: ["Graph", "Array", "Stack", "Binary Tree"],
        correctIndex: 0,
        explanation:
          "A Graph data structure consists of a collection of nodes that are linked by arcs, making it ideal for representing complex networks like social connections [13].",
      },
    ],
  },
  {
    id: "cs211-lec2",
    name: "Lecture 2: Arrays and Sorting Algorithms",
    description:
      "In-depth look at array operations, searching techniques (Linear and Binary), and various sorting algorithms (Selection, Insertion, Bubble, Merge, and Quick Sort).",
    questions: [
      {
        id: "cs211-lec2-q1",
        text: "How is an array defined in the provided material?",
        options: [
          "A collection of different types of data.",
          "A data structure that represents a collection of the same types of data.",
          "A linked structure of nodes.",
          "A method for sorting elements.",
        ],
        correctIndex: 1,
        explanation:
          "An array is a data structure that represents a collection of the same types of data.",
      },
      {
        id: "cs211-lec2-q2",
        text: "Which of the following is a correct way to declare an array variable of type double with 10 elements?",
        options: [
          "double myList(10);",
          "double myList = new double[10];",
          "double[] myList = new double[10];",
          "double myList[10];",
        ],
        correctIndex: 2,
        explanation:
          "The proper syntax in most modern languages (like Java or C#) to declare an array variable is double[] myList = new double[10].",
      },
      {
        id: "cs211-lec2-q3",
        text: "How many steps does it take to find the maximum number in an array of n elements?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        correctIndex: 2,
        explanation:
          "If the array has n elements, it takes n steps to find the maximum, resulting in a time complexity of O(n).",
      },
      {
        id: "cs211-lec2-q4",
        text: "What is the process of looking for a specific element in an array called?",
        options: ["Searching", "Sorting", "Merging", "Dividing"],
        correctIndex: 0,
        explanation:
          "Searching is the process of looking for a specific element in an array.",
      },
      {
        id: "cs211-lec2-q5",
        text: "How does the linear search approach find a key?",
        options: [
          "By dividing the array in half repeatedly.",
          "By comparing the key element sequentially with each element in the array list.",
          "By picking a pivot and partitioning the array.",
          "By inserting elements into a new sorted list.",
        ],
        correctIndex: 1,
        explanation:
          "The linear search approach compares the key element sequentially with each element in the array list.",
      },
      {
        id: "cs211-lec2-q6",
        text: "What does the linear search function return if no match is found?",
        options: ["0", "1", "-1", "null"],
        correctIndex: 2,
        explanation: "If no match is found, the linear search returns -1.",
      },
      {
        id: "cs211-lec2-q7",
        text: "What is the time complexity of linear search?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        correctIndex: 1,
        explanation:
          "The time complexity of comparing a key with elements sequentially in linear search is O(n).",
      },
      {
        id: "cs211-lec2-q8",
        text: "What condition must be met for binary search to work?",
        options: [
          "The array must be empty.",
          "The array must contain only integers.",
          "The elements in the array must already be ordered.",
          "The array must have an even number of elements.",
        ],
        correctIndex: 2,
        explanation:
          "For binary search to work, the elements in the array must already be ordered.",
      },
      {
        id: "cs211-lec2-q9",
        text: "What is the first step of binary search?",
        options: [
          "It compares the key with the first element of the array.",
          "It compares the key with the element in the middle of the array.",
          "It compares the key with the last element of the array.",
          "It divides the array into three parts.",
        ],
        correctIndex: 1,
        explanation:
          "The binary search first compares the key with the element in the middle of the array.",
      },
      {
        id: "cs211-lec2-q10",
        text: "In binary search, if the key is less than the middle element, what happens next?",
        options: [
          "You only need to search the key in the first half of the array.",
          "You only need to search the key in the second half of the array.",
          "The search ends with a match.",
          "The array is expanded.",
        ],
        correctIndex: 0,
        explanation:
          "If the key is less than the middle element, you only need to search the key in the first half of the array.",
      },
      {
        id: "cs211-lec2-q11",
        text: "What is the best-case scenario and time complexity for binary search?",
        options: [
          "Searching for a key at the beginning of the list, resulting in O(n).",
          "Searching for a key at the end of the list, resulting in O(log n).",
          "Searching for a key in the middle of the list, resulting in O(1).",
          "Searching for a key that is not in the list, resulting in O(n^2).",
        ],
        correctIndex: 2,
        explanation:
          "The best case is searching for a key in the middle of the list, which results in O(1).",
      },
      {
        id: "cs211-lec2-q12",
        text: "What is the worst-case scenario and time complexity for binary search?",
        options: [
          "Searching for a key that is not in the list, resulting in O(log n).",
          "Searching for a key in the middle of the list, resulting in O(1).",
          "Searching for a key at the first index, resulting in O(n).",
          "Searching for a key in an unsorted list, resulting in O(n^2).",
        ],
        correctIndex: 0,
        explanation:
          "The worst case is searching for a key that is not in the list, resulting in a time complexity of O(log n).",
      },
      {
        id: "cs211-lec2-q13",
        text: "Which two factors determine the performance of a sorting algorithm?",
        options: [
          "The number of loops and the number of variables.",
          "The number of comparisons and the number of movements.",
          "The size of the array and the data type.",
          "The programming language and the compiler used.",
        ],
        correctIndex: 1,
        explanation:
          "Two factors determine algorithm performance: the number of comparisons and the number of movements.",
      },
      {
        id: "cs211-lec2-q14",
        text: "How does selection sort place elements in the correct position?",
        options: [
          "It compares adjacent items and swaps them if they are in the wrong order.",
          "It divides the array into halves and sorts them recursively.",
          "It repeatedly selects the smallest element from the unsorted part and places it in the sorted part.",
          "It picks a pivot and partitions the list.",
        ],
        correctIndex: 2,
        explanation:
          "Selection sort repeatedly selects the smallest (or largest) element from the unsorted part of the array and places it in the correct position in the sorted part.",
      },
      {
        id: "cs211-lec2-q15",
        text: "What is the time complexity of selection sort in its best case?",
        options: ["O(1)", "O(n)", "O(n log n)", "O(n^2)"],
        correctIndex: 3,
        explanation:
          "The number of comparisons in selection sort always results in O(n^2), even in the best case when the array is already sorted.",
      },
      {
        id: "cs211-lec2-q16",
        text: "What is the time complexity of selection sort in its worst case?",
        options: ["O(1)", "O(n)", "O(n log n)", "O(n^2)"],
        correctIndex: 3,
        explanation:
          "The worst-case time complexity of selection sort when the array is in reverse order is O(n^2).",
      },
      {
        id: "cs211-lec2-q17",
        text: "Does selection sort recognize if an array is already sorted?",
        options: [
          "Yes, it stops early if the array is sorted.",
          "No, selection sort does not recognize the order of data.",
          "Yes, it switches to O(n) complexity.",
          "No, it scrambles the data first.",
        ],
        correctIndex: 1,
        explanation: "Selection sort does not recognize the order of data.",
      },
      {
        id: "cs211-lec2-q18",
        text: "Which real-life scenario is insertion sort compared to?",
        options: [
          "Stacking books on a shelf.",
          "Sorting playing cards in your hands.",
          "Organizing files in a cabinet.",
          "Waiting in a line at the bank.",
        ],
        correctIndex: 1,
        explanation:
          "Insertion sort is a simple sorting algorithm that works similarly to how you might sort playing cards in your hands.",
      },
      {
        id: "cs211-lec2-q19",
        text: "What is the best-case time complexity of insertion sort?",
        options: ["O(1)", "O(n)", "O(n log n)", "O(n^2)"],
        correctIndex: 1,
        explanation:
          "In the best case where the inner loop is not executed and there are no shifts, the time complexity of insertion sort is O(n).",
      },
      {
        id: "cs211-lec2-q20",
        text: "What is the worst-case time complexity of insertion sort?",
        options: ["O(1)", "O(n)", "O(n log n)", "O(n^2)"],
        correctIndex: 3,
        explanation:
          "In the worst case, the number of key comparisons and moves both result in O(n^2).",
      },
      {
        id: "cs211-lec2-q21",
        text: "How does bubble sort reorder items?",
        options: [
          "By repeatedly selecting the smallest element and moving it to the front.",
          "By dividing the list into smaller sub-lists.",
          "By repeatedly stepping through the list, comparing adjacent items, and swapping them if they are in the wrong order.",
          "By selecting a pivot and organizing items around it.",
        ],
        correctIndex: 2,
        explanation:
          "Bubble sort works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items, and swapping them if they are in the wrong order.",
      },
      {
        id: "cs211-lec2-q22",
        text: "What is the worst-case time complexity of bubble sort?",
        options: ["O(1)", "O(n)", "O(n log n)", "O(n^2)"],
        correctIndex: 3,
        explanation:
          "In the worst case, the comparisons, swaps, and moves in bubble sort result in a time complexity of O(n^2).",
      },
      {
        id: "cs211-lec2-q23",
        text: "How can bubble sort achieve a best-case time complexity of O(n)?",
        options: [
          "By always choosing the smallest pivot.",
          "By stopping early if no swaps occur during a pass.",
          "By skipping the first element.",
          "By using an auxiliary array.",
        ],
        correctIndex: 1,
        explanation:
          "Bubble sort can be improved to an O(n) best-case time complexity by stopping early if no swaps occur during a pass.",
      },
      {
        id: "cs211-lec2-q24",
        text: "Which design method does the merge sort algorithm closely follow?",
        options: [
          "The divide-and-conquer method.",
          "The dynamic programming method.",
          "The greedy method.",
          "The backtracking method.",
        ],
        correctIndex: 0,
        explanation:
          "The merge sort algorithm closely follows the divide-and-conquer method.",
      },
      {
        id: "cs211-lec2-q25",
        text: "In merge sort, what does the 'Divide' step do?",
        options: [
          "Divides the subarray into two adjacent subarrays, each of half the size (n/2).",
          "Divides the array into three equal parts.",
          "Divides the array based on a randomly chosen pivot.",
          "Divides the elements into even and odd arrays.",
        ],
        correctIndex: 0,
        explanation:
          "The divide step divides the subarray to be sorted into two adjacent subarrays, each of half the size (n/2).",
      },
      {
        id: "cs211-lec2-q26",
        text: "What is the time complexity of merge sort?",
        options: ["O(1)", "O(n)", "O(n log n)", "O(n^2)"],
        correctIndex: 2,
        explanation:
          "The time complexity of the merge sort algorithm is O(n log n).",
      },
      {
        id: "cs211-lec2-q27",
        text: "What is the element chosen to reorder the list around in quick sort called?",
        options: ["A key", "A pivot", "A root", "A leaf"],
        correctIndex: 1,
        explanation:
          "In quick sort, you pick an element called a pivot from the list.",
      },
      {
        id: "cs211-lec2-q28",
        text: "In quick sort, what happens during the partition operation?",
        options: [
          "The list is divided into identical halves.",
          "The list is reordered so elements less than the pivot come before it, and greater elements come after it.",
          "The pivot is swapped with the first element continuously.",
          "The array is reversed.",
        ],
        correctIndex: 1,
        explanation:
          "The partition operation reorders the list so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it.",
      },
      {
        id: "cs211-lec2-q29",
        text: "What is the worst-case running time of quick sort?",
        options: ["O(1)", "O(n)", "O(n log n)", "O(n^2)"],
        correctIndex: 3,
        explanation:
          "The worst case for quick sort, where the partition produces one subproblem with (n-1) elements and one with 0 elements, runs in O(n^2) time.",
      },
      {
        id: "cs211-lec2-q30",
        text: "According to the lecture, roughly how long does it take insertion sort to sort a million items compared to merge sort?",
        options: [
          "Insertion sort takes roughly 40 seconds, while merge sort takes roughly 70 hours.",
          "Insertion sort takes roughly 70 hours, while merge sort takes roughly 40 seconds.",
          "Both take roughly 40 seconds.",
          "Both take roughly 70 hours.",
        ],
        correctIndex: 1,
        explanation:
          "When sorting a million items, insertion sort takes roughly 70 hours, whereas merge sort takes roughly 40 seconds.",
      },
    ],
  },
  {
    id: "cs211-lec3",
    name: "Lecture 3: Linked List",
    description:
      "a fundamental data structure composed of a sequence of nodes where each node contains data and a reference to the next node. It begins by contrasting Arrays and Linked Lists.",
    questions: [
      {
        id: "cs211-ch2-q1",
        text: "What is a linked list?",
        options: [
          "A contiguous memory structure",
          "A sequence of elements where each node contains data and a reference to the next node",
          "A fixed-size array of pointers",
          "A collection of elements accessed only by index",
        ],
        correctIndex: 1,
        explanation:
          "A linked list is a data structure in computer science that consists of a sequence of elements, called nodes, where each node contains both data and a reference to the next node.",
      },
      {
        id: "cs211-ch2-q2",
        text: "How does memory allocation differ between arrays and linked lists?",
        options: [
          "Arrays use non-contiguous memory, linked lists use contiguous memory",
          "Both use contiguous memory",
          "Arrays use contiguous memory, linked lists use non-contiguous memory",
          "Both use non-contiguous memory",
        ],
        correctIndex: 2,
        explanation:
          "Arrays require contiguous memory locations, whereas linked lists have non-contiguous memory allocation.",
      },
      {
        id: "cs211-ch2-q3",
        text: "What is the access time complexity for an element in a Linked List?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        correctIndex: 2,
        explanation:
          "The access time for a linked list is O(n) due to sequential traversal, unlike arrays which have O(1) direct indexing.",
      },
      {
        id: "cs211-ch2-q4",
        text: "Which operations are expensive in an Array but easy in a Linked List?",
        options: [
          "Direct indexing and traversal",
          "Memory allocation",
          "Insertion and deletion",
          "Searching for an element",
        ],
        correctIndex: 2,
        explanation:
          "Insertion and deletion are expensive in arrays because shifting elements is needed, whereas they are easy in linked lists by merely changing pointers.",
      },
      {
        id: "cs211-ch2-q5",
        text: "What defines a Doubly Linked List?",
        options: [
          "Each node contains data and a reference to the next node only",
          "The last node's next reference points back to the first node",
          "Each node contains data and references to both the next and previous nodes",
          "Two separate singly linked lists connected at the tail",
        ],
        correctIndex: 2,
        explanation:
          "In a Doubly Linked List, each node contains data and references to both the next and previous nodes.",
      },
      {
        id: "cs211-ch2-q6",
        text: "What defines a Circular Linked List?",
        options: [
          "The head points to the tail",
          "Each node contains references to both previous and next nodes",
          "The last node's next reference points back to the first node",
          "The list automatically sorts elements in a circle",
        ],
        correctIndex: 2,
        explanation:
          "A Circular Linked List is like a singly or doubly linked list, but the last node's next reference points back to the first node in a circular fashion.",
      },
      {
        id: "cs211-ch2-q7",
        text: "In a linked list, what does the 'Head' variable primarily store?",
        options: [
          "The size of the list",
          "The address of the first node",
          "The address of the last node",
          "The data of the first node",
        ],
        correctIndex: 1,
        explanation:
          "The 'Head' stores the address of the first node in a linked list.",
      },
      {
        id: "cs211-ch2-q8",
        text: "Assuming current is a pointer to a node, what happens when current = current->link executes?",
        options: [
          "It deletes the current node",
          "It copies the value of the next node's address into current, moving the pointer forward",
          "It returns the data of the current node",
          "It resets the current pointer to the head of the list",
        ],
        correctIndex: 1,
        explanation:
          "This statement copies the value of current->link into current, effectively advancing the pointer to the next node.",
      },
      {
        id: "cs211-ch2-q9",
        text: "Based on the provided IntSLLNode class, what are its main internal variables?",
        options: [
          "int info, IntSLLNode *next",
          "int info, IntSLLNode *prev",
          "IntSLLNode *head, IntSLLNode *tail",
          "int data, int index",
        ],
        correctIndex: 0,
        explanation:
          "The SLL Node Class is defined with 'int info' for the data item and 'IntSLLNode *next' for the next node in the list.",
      },
      {
        id: "cs211-ch2-q10",
        text: "What is the correct loop condition shown to traverse a Singly Linked List from head to the end?",
        options: [
          "for (IntSLLNode *pt = head; pt == 0; pt = pt->next)",
          "for (IntSLLNode *pt = head; pt != 0; pt = pt->prev)",
          "for (IntSLLNode pt = head; pt != 0; pt = pt->next)",
          "for (IntSLLNode pt = 0; pt != head; pt = pt->next)",
        ],
        correctIndex: 2,
        explanation:
          "To traverse the list, a pointer is initialized to head and the loop continues as long as pt != 0, incrementing with pt = pt->next.",
      },
      {
        id: "cs211-ch2-q11",
        text: "Why is the tail pointer useful in a singly linked list?",
        options: [
          "It prevents the list from making circular references",
          "It points to the last node, keeping track of the end of the list alongside the head",
          "It stores the total count of nodes in the list",
          "It acts as a direct backup for the head pointer",
        ],
        correctIndex: 1,
        explanation:
          "For a linked list to be useful, there is a head variable pointing to the first node and another variable called tail that points to the last node.",
      },
      {
        id: "cs211-ch2-q12",
        text: "What is the time complexity of a Head Insertion operation in a Singly Linked List?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        correctIndex: 0,
        explanation:
          "Head insertion in a singly linked list operates in constant time, O(1).",
      },
      {
        id: "cs211-ch2-q13",
        text: "What is the first step when performing a Head Insertion in a Singly Linked List?",
        options: [
          "head = newNode",
          "newNode->next = head",
          "Create newNode",
          "tail = head",
        ],
        correctIndex: 2,
        explanation:
          "The very first step listed for Head Insertion in an SLL is to create the newNode.",
      },
      {
        id: "cs211-ch2-q14",
        text: "During Tail Insertion in a Singly Linked List, what must be done if tail == null?",
        options: [
          "Set tail->next = newNode",
          "Set head = tail = newNode",
          "Set tail = newNode",
          "Delete tail",
        ],
        correctIndex: 1,
        explanation:
          "If the tail is null, indicating the list is empty, both the head and tail pointers must be set to the newNode.",
      },
      {
        id: "cs211-ch2-q15",
        text: "What is the time complexity of a Middle Insertion operation in a Singly Linked List?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        correctIndex: 2,
        explanation:
          "Inserting an element in the middle of a singly linked list requires traversal, making its time complexity O(n).",
      },
      {
        id: "cs211-ch2-q16",
        text: "What is the time complexity of deleting a node from the head of a Singly Linked List?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        correctIndex: 0,
        explanation:
          "Head deletion in a singly linked list operates in O(1) constant time.",
      },
      {
        id: "cs211-ch2-q17",
        text: "Why is deleting from the tail of a Singly Linked List an O(n) operation?",
        options: [
          "Because the tail pointer must be securely deleted from system memory",
          "Because it requires traversing the list from the head to find the predecessor of the tail",
          "Because all remaining elements must be shifted",
          "Because the tail is automatically hidden in a Singly Linked List",
        ],
        correctIndex: 1,
        explanation:
          "Tail deletion is O(n) because a pointer must traverse the list to get to the location right before the tail (its predecessor) in order to update the new tail.",
      },
      {
        id: "cs211-ch2-q18",
        text: "In Tail Deletion for a Singly Linked List, what loop condition is used to find the predecessor?",
        options: [
          "while (tmp->next != head)",
          "while (tmp->info != tail->info)",
          "while (tmp->next != tail)",
          "while (tmp != 0)",
        ],
        correctIndex: 2,
        explanation:
          "To find the predecessor of the tail, the list is traversed using the condition while (tmp-> next != tail).",
      },
      {
        id: "cs211-ch2-q19",
        text: "What happens if you try to delete a node with an element that is not present in the list?",
        options: [
          "The program generates a run-time error",
          "The head and tail pointers are set to null",
          "The last node is arbitrarily deleted",
          "The function does nothing and exists",
        ],
        correctIndex: 3,
        explanation:
          "According to Case 6, deleting a node with a number that is not in the list means you simply do nothing.",
      },
      {
        id: "cs211-ch2-q20",
        text: "What is the time complexity of the Search operation in a Singly Linked List?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        correctIndex: 2,
        explanation:
          "Searching for an item requires traversing nodes one by one until the item is found, resulting in an O(n) time complexity.",
      },
      {
        id: "cs211-ch2-q21",
        text: "Which of the following is a primary advantage of linked lists over arrays?",
        options: [
          "They allow direct indexing in O(1) time",
          "They have less memory overhead per element",
          "Singly linked lists can traverse in both directions natively",
          "They use exactly as much memory space as needed and can be dynamically expanded",
        ],
        correctIndex: 3,
        explanation:
          "An advantage of linked lists over arrays is that they use exactly as much memory space as needed and can be expanded dynamically.",
      },
      {
        id: "cs211-ch2-q22",
        text: "What is a major limitation of a singly-linked list?",
        options: [
          "It requires strictly contiguous memory",
          "It can only be traversed in the forward direction and removing a node requires a reference to the previous node",
          "It cannot grow in size dynamically beyond its initial limit",
          "Insertion at the head requires O(n) time to shift elements",
        ],
        correctIndex: 1,
        explanation:
          "Limitations of a singly-linked list are that we can traverse it only in the forward direction, and removing a node requires a reference to the previous node.",
      },
      {
        id: "cs211-ch2-q23",
        text: "In a Doubly Linked List, what references does each node natively store?",
        options: [
          "Only the next reference and data",
          "Only the previous and next references",
          "Both the previous and next nodes in the list, along with data",
          "An array index and data",
        ],
        correctIndex: 2,
        explanation:
          "Each list node in a Doubly Linked List stores both the previous and next nodes in the list along with the data item.",
      },
      {
        id: "cs211-ch2-q24",
        text: "What is a significant advantage of a Doubly Linked List over a Singly Linked List?",
        options: [
          "It avoids extra memory overhead completely",
          "It can be traversed in both forward and backward directions",
          "It forces memory allocation to be contiguous",
          "It strictly eliminates the need for a head pointer",
        ],
        correctIndex: 1,
        explanation:
          "A Doubly Linked List can be traversed in both forward and backward directions, giving it an advantage over singly linked lists.",
      },
      {
        id: "cs211-ch2-q25",
        text: "What is a specific disadvantage of doubly linked lists mentioned in the text?",
        options: [
          "Traversing backwards becomes impossible after insertion",
          "Every time you insert or delete a node you must deal with four references instead of two",
          "They have a strict, fixed size limit",
          "Insertion at the tail is forced to be an O(n) operation",
        ],
        correctIndex: 1,
        explanation:
          "The disadvantage of doubly linked lists is that every time you insert or delete a node, you must deal with four references instead of two.",
      },
      {
        id: "cs211-ch2-q26",
        text: "What is the time complexity of Tail Insertion in a Doubly Linked List?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        correctIndex: 0,
        explanation:
          "Tail Insertion in a Doubly Linked List has an O(1) time complexity.",
      },
      {
        id: "cs211-ch2-q27",
        text: "What is the time complexity of Tail Deletion in a Doubly Linked List?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        correctIndex: 0,
        explanation:
          "Unlike a singly linked list, Tail Deletion in a Doubly Linked List is efficient and operates in O(1) time.",
      },
      {
        id: "cs211-ch2-q28",
        text: "Why is Tail Deletion O(1) in a Doubly Linked List but O(n) in a Singly Linked List?",
        options: [
          "Because the Doubly Linked List maintains an exact node count",
          "Because Doubly Linked Lists do not use tails at all",
          "Because the tail node's previous reference natively points to its predecessor, eliminating the need to traverse from the head",
          "Because elements in Doubly Linked Lists are contiguous",
        ],
        correctIndex: 2,
        explanation:
          "In a doubly linked list, we can quickly get the previous node using the previous reference (tail->prev), avoiding the O(n) search required in singly linked lists.",
      },
      {
        id: "cs211-ch2-q29",
        text: "What is a practical use case for Circular Linked Lists mentioned in the source?",
        options: [
          "Storing static multidimensional arrays",
          "Round-robin scheduling in operating systems",
          "Generating secure random integers",
          "Implementing non-repeating queues",
        ],
        correctIndex: 1,
        explanation:
          "Uses of Circular Linked Lists include round-robin scheduling in operating systems and applications where the process repeats continuously.",
      },
      {
        id: "cs211-ch2-q30",
        text: "When inserting a node at the tail of a circular singly linked list, what does the new tail's next pointer point to?",
        options: [
          "NULL",
          "The new tail itself indefinitely",
          "The node directly previous to the tail",
          "The first node (the head) of the list",
        ],
        correctIndex: 3,
        explanation:
          "In a circular linked list, the code tail->next = new IntSLLNode(el, tail->next) sets the new node's next pointer to the old tail's next, which points back to the head of the list.",
      },
    ],
  },
  {
    id: "cs211-lec4",
    name: "Lecture 4: Stacks",
    description:
      " provides a comprehensive overview of the stack data structure",
    questions: [
      {
        id: "cs211-lec4-q1",
        text: "Which of the following best defines a stack sequence?",
        options: [
          "First-In-First-Out (FIFO)",
          "Last-In-First-Out (LIFO)",
          "First-In-Last-Out (FILO)",
          "Random Access",
        ],
        correctIndex: 1,
        explanation:
          "A stack is defined as a last-in-first-out (LIFO) sequence of elements.",
      },
      {
        id: "cs211-lec4-q2",
        text: "Where can elements be added and removed in a stack?",
        options: [
          "At both ends",
          "Only at the bottom",
          "Only at one end (the top)",
          "At any position",
        ],
        correctIndex: 2,
        explanation:
          "Elements can be added and removed only at one end of the stack, which is referred to as the top.",
      },
      {
        id: "cs211-lec4-q3",
        text: "Is the Stack data structure built into C++ and Java by default as a primitive type?",
        options: [
          "Yes, it is a built-in primitive type.",
          "No, it is an Abstract Data Type (ADT) that must be defined.",
          "Yes, but only in C++.",
          "Yes, but only in Java.",
        ],
        correctIndex: 1,
        explanation:
          "Stack is an Abstract Data Type (ADT) and is NOT built into C++/JAVA; developers must define them and their behaviors.",
      },
      {
        id: "cs211-lec4-q4",
        text: "Which operation is used to add a new piece of data to the top of the stack?",
        options: ["Pop", "Peek", "Push", "Clear"],
        correctIndex: 2,
        explanation:
          "The 'push' operation adds a new piece of data on top of the stack.",
      },
      {
        id: "cs211-lec4-q5",
        text: "Which operation is used to look at the top piece of data without removing it?",
        options: ["Peek", "Pop", "Push", "Size"],
        correctIndex: 0,
        explanation:
          "The 'Peek' (or top) operation allows you to look at the top piece of data without removing it.",
      },
      {
        id: "cs211-lec4-q6",
        text: "What error occurs if an attempt is made to remove an element from an empty stack?",
        options: [
          "Stack Overflow",
          "Stack Underflow",
          "Memory Leak",
          "Null Pointer Exception",
        ],
        correctIndex: 1,
        explanation:
          "A Stack Underflow error is an attempt to remove an element from an empty stack.",
      },
      {
        id: "cs211-lec4-q7",
        text: "What is a common application of stacks?",
        options: [
          "Scheduling processes in operating systems",
          "Web Browser History",
          "Shortest path algorithms",
          "Database indexing",
        ],
        correctIndex: 1,
        explanation:
          "Web Browser History is a classic application of a stack, storing pages in a LIFO manner.",
      },
      {
        id: "cs211-lec4-q8",
        text: "Which of the following is an application of a memory stack?",
        options: [
          "Storing function activation records",
          "Garbage collection",
          "Caching web pages",
          "Managing network packets",
        ],
        correctIndex: 0,
        explanation:
          "A memory stack is commonly used for storing function activation records.",
      },
      {
        id: "cs211-lec4-q9",
        text: "Why are stacks useful for checking bracket delimiters in compilers?",
        options: [
          "Because compilers only use parentheses.",
          "Because they sort the delimiters.",
          "Because they can store opening delimiters and match them with closing ones in reverse order.",
          "Because delimiters evaluate to arithmetic expressions.",
        ],
        correctIndex: 2,
        explanation:
          "Stacks store opening brackets and match them with incoming closing brackets, failing if a popped bracket does not match the current closing one.",
      },
      {
        id: "cs211-lec4-q10",
        text: "In the bracket delimiters checking algorithm, what happens when an opening bracket like '{' is encountered?",
        options: [
          "It is popped from the stack.",
          "It is pushed onto the stack.",
          "It triggers a failure.",
          "It is ignored.",
        ],
        correctIndex: 1,
        explanation:
          "If the character is an opening bracket like '(', '[', or '{', it is pushed onto the stack.",
      },
      {
        id: "cs211-lec4-q11",
        text: "What defines the structure of an Infix notation?",
        options: [
          "operand1 operand2 operator",
          "operator operand1 operand2",
          "operand1 operator operand2",
          "operand operator",
        ],
        correctIndex: 2,
        explanation:
          "Infix notation follows the structure: operand1 operator operand2 (e.g., A+B).",
      },
      {
        id: "cs211-lec4-q12",
        text: "Which notation is also known as Reverse Polish notation?",
        options: [
          "Prefix notation",
          "Infix notation",
          "Postfix notation",
          "Algebraic notation",
        ],
        correctIndex: 2,
        explanation:
          "Postfix notation is also referred to as Reverse Polish notation.",
      },
      {
        id: "cs211-lec4-q13",
        text: "Which of the following is a benefit of using Postfix notation over Infix notation?",
        options: [
          "It is easier for humans to read.",
          "It requires fewer operators.",
          "It removes ambiguity without the need for parentheses.",
          "It eliminates the need for operands.",
        ],
        correctIndex: 2,
        explanation:
          "Postfix notation removes ambiguity without parentheses, avoiding operator precedence and associativity rules.",
      },
      {
        id: "cs211-lec4-q14",
        text: "When converting Infix to Postfix expression, what should you do when you encounter an operand?",
        options: [
          "Push it onto the stack.",
          "Go directly to the output.",
          "Pop the stack.",
          "Discard it.",
        ],
        correctIndex: 1,
        explanation:
          "According to the conversion rules, an operand goes directly to the output.",
      },
      {
        id: "cs211-lec4-q15",
        text: "During Infix to Postfix conversion, if the stack has an operator with equal or higher precedence than the current operator, what is the correct action?",
        options: [
          "Push the current operator immediately.",
          "Pop it and add it to the output before pushing the current operator.",
          "Discard both operators.",
          "Halt the algorithm with an error.",
        ],
        correctIndex: 1,
        explanation:
          "If the operator at the top of the stack has equal or higher precedence, you must pop it and add it to the output before pushing the current operator.",
      },
      {
        id: "cs211-lec4-q16",
        text: "During Infix to Postfix conversion, what happens when a closing bracket ')' is encountered?",
        options: [
          "Push it onto the stack.",
          "Pop all operands to the output.",
          "Pop operators to the output until the opening bracket '(' is reached.",
          "Ignore it.",
        ],
        correctIndex: 2,
        explanation:
          "When a closing bracket is found, pop the operators out of the stack and add them to the output until the matching opening bracket is reached.",
      },
      {
        id: "cs211-lec4-q17",
        text: "What is the final step after scanning the entire infix expression during conversion to postfix?",
        options: [
          "Empty the output.",
          "Pop all remaining operators from the stack and append them to the postfix expression.",
          "Push an end-of-file marker to the stack.",
          "Evaluate the expression.",
        ],
        correctIndex: 1,
        explanation:
          "After scanning the entire infix expression, pop all remaining operators from the stack and append them to the postfix expression.",
      },
      {
        id: "cs211-lec4-q18",
        text: "In evaluating a postfix expression using a stack, what do you do when you read an operand?",
        options: [
          "Push it onto the stack.",
          "Pop it from the stack.",
          "Add it to a sum.",
          "Multiply it by the top of the stack.",
        ],
        correctIndex: 0,
        explanation:
          "When evaluating postfix expressions, if the character read is an operand, you push it onto the stack.",
      },
      {
        id: "cs211-lec4-q19",
        text: "In evaluating a postfix expression, what happens when an operator is encountered?",
        options: [
          "Push the operator onto the stack.",
          "Pop two operands, perform the operation, and push the result onto the stack.",
          "Pop one operand, apply the operator, and push the result.",
          "Clear the stack.",
        ],
        correctIndex: 1,
        explanation:
          "If the character is an operator, pop two operands, perform the appropriate operation, and then push the result onto the stack.",
      },
      {
        id: "cs211-lec4-q20",
        text: "Based on the array stack implementation provided, what is the initial value of the top index variable when a stack is created?",
        options: ["0", "1", "-1", "maxSize"],
        correctIndex: 2,
        explanation:
          "In the constructor ArrayStack(int s), the top index is initialized to -1.",
      },
      {
        id: "cs211-lec4-q21",
        text: "In the array implementation of a stack, what condition checks if the stack is full?",
        options: [
          "top == 0",
          "top == maxSize",
          "top == maxSize - 1",
          "top == -1",
        ],
        correctIndex: 2,
        explanation:
          "The isFull() method returns true if (top == maxSize - 1).",
      },
      {
        id: "cs211-lec4-q22",
        text: "What happens in the push(int el) function if the stack is already full?",
        options: [
          "It prints 'Stack overflow' and returns.",
          "It prints 'Stack underflow' and returns.",
          "It resizes the array.",
          "It replaces the top element.",
        ],
        correctIndex: 0,
        explanation:
          "If isFull() is true, the push method outputs 'Stack overflow' and returns.",
      },
      {
        id: "cs211-lec4-q23",
        text: "What is the time complexity of the push operation in the provided array stack implementation?",
        options: ["O(n)", "O(1)", "O(log n)", "O(n^2)"],
        correctIndex: 1,
        explanation:
          "The push operation inserts the element using array indexing, which has a constant time complexity of O(1).",
      },
      {
        id: "cs211-lec4-q24",
        text: "In the array stack implementation, what is the exact statement used to insert a new element during a push?",
        options: [
          "myStack[top++] = el;",
          "myStack[++top] = el;",
          "myStack[top] = el++;",
          "myStack[--top] = el;",
        ],
        correctIndex: 1,
        explanation:
          "The element is added using myStack[++top] = el;, which increments the top index first, then places the element.",
      },
      {
        id: "cs211-lec4-q25",
        text: "In the array stack implementation, what does the pop() method return if the stack is empty?",
        options: ["0", "null", "-1", "an Exception object"],
        correctIndex: 2,
        explanation:
          "If isEmpty() is true, the pop() method outputs 'Stack underflow' and returns -1.",
      },
      {
        id: "cs211-lec4-q26",
        text: "In the array stack implementation, what is the exact statement used to return the top element during a pop operation?",
        options: [
          "return myStack[top--];",
          "return myStack[--top];",
          "return myStack[top++];",
          "return myStack[++top];",
        ],
        correctIndex: 0,
        explanation:
          "The element is returned and removed using return myStack[top--];, which returns the current top then decrements the index.",
      },
      {
        id: "cs211-lec4-q27",
        text: "How does the array implementation calculate the current size of the stack?",
        options: ["top", "maxSize - top", "top + 1", "maxSize"],
        correctIndex: 2,
        explanation: "The size() method returns top + 1.",
      },
      {
        id: "cs211-lec4-q28",
        text: "What action does the clear() method perform in the array stack implementation?",
        options: [
          "Deletes the array from memory.",
          "Sets top to -1.",
          "Fills the array with zeros.",
          "Sets top to maxSize.",
        ],
        correctIndex: 1,
        explanation:
          "The clear() method empties the stack by simply setting top = -1;.",
      },
      {
        id: "cs211-lec4-q29",
        text: "What are the two common implementations of a stack mentioned in the text?",
        options: [
          "Arrays and Linked Lists",
          "Queues and Trees",
          "Graphs and Hash Tables",
          "Heaps and Arrays",
        ],
        correctIndex: 0,
        explanation:
          "The two common implementations of a stack discussed are using arrays and linked lists.",
      },
      {
        id: "cs211-lec4-q30",
        text: "What is the final evaluated result of the reverse-Polish expression: 1 2 3 + 4 5 6 * - 7 * + -",
        options: ["178", "-178", "30", "-26"],
        correctIndex: 0,
        explanation:
          "Following the evaluation algorithm in the text, the final result popped from the stack for this expression is 178.",
      },
    ],
  },
  {
    id: "cs211-lec5",
    name: "Lecture 5: Queues",
    description:
      " fundamental concepts of queues, defining them as a first-in first-out (FIFO) data structure where new elements are added to the rear (EnQueue).",
    questions: [
      {
        id: "cs211-lec5-q1",
        text: "What does FIFO stand for in the context of queues?",
        options: [
          "First-In First-Out",
          "Fast-In First-Out",
          "First-In Last-Out",
          "Fast-In Fast-Out",
        ],
        correctIndex: 0,
        explanation:
          "A queue is a first-in first-out (FIFO) sequence of elements [1].",
      },
      {
        id: "cs211-lec5-q2",
        text: "Where are new entries added in a standard queue?",
        options: [
          "At the front",
          "At the end (rear)",
          "In the middle",
          "At a random position",
        ],
        correctIndex: 1,
        explanation:
          "A queue grows by adding elements to its end, an operation known as EnQueue [1].",
      },
      {
        id: "cs211-lec5-q3",
        text: "Which operation is used to delete an entry from the front of the queue?",
        options: ["EnQueue", "DeQueue", "Push", "Pop"],
        correctIndex: 1,
        explanation:
          "Deleting an entry at the front of a queue is called DeQueue [1].",
      },
      {
        id: "cs211-lec5-q4",
        text: "Which of the following is a real-life example of a queue?",
        options: [
          "Stacking plates",
          "Task Scheduling in Operating Systems",
          "Reversing a string",
          "A folder hierarchy",
        ],
        correctIndex: 1,
        explanation:
          "Task Scheduling in Operating Systems is a real-life example of queues, alongside print spooling and supermarket checkouts [1].",
      },
      {
        id: "cs211-lec5-q5",
        text: "What is the purpose of the 'clear' operation in a queue?",
        options: [
          "To return the front item",
          "To add a new element",
          "To remove an element from the front",
          "To clear the queue",
        ],
        correctIndex: 3,
        explanation:
          "The clear operation is utilized to clear the queue collection [2].",
      },
      {
        id: "cs211-lec5-q6",
        text: "If a queue 'Q' is initially empty, what are its contents after the operations enqueue(5) and enqueue(3)?",
        options: ["(3, 5)", "(5, 3)", "(5)", "(3)"],
        correctIndex: 1,
        explanation:
          "According to the queue example, enqueuing 5 and then 3 results in the queue contents being (5, 3) [2].",
      },
      {
        id: "cs211-lec5-q7",
        text: "What problem arises in a standard linear array implementation of a queue?",
        options: [
          "The array has unlimited size",
          "The rear reaches the end of the array even if there is free space at the front",
          "The array cannot hold integers",
          "Dequeuing takes O(1) time",
        ],
        correctIndex: 1,
        explanation:
          "An array has limited size, so a problem arises when the rear is at the end of the array and a new item comes in [2].",
      },
      {
        id: "cs211-lec5-q8",
        text: "Why is shifting all items in the array during a dequeue operation not an ideal solution?",
        options: [
          "It uses too much memory",
          "It changes the order of elements",
          "It is too costly",
          "It requires a doubly linked list",
        ],
        correctIndex: 2,
        explanation:
          "Shifting all items in the array when a dequeue operation occurs is considered too costly [2, 3].",
      },
      {
        id: "cs211-lec5-q9",
        text: "How does a Circular Queue solve the array implementation problem?",
        options: [
          "By shifting all elements dynamically",
          "By wrapping the First and Last arrows around to the beginning of the array",
          "By increasing the array size automatically",
          "By using a priority system",
        ],
        correctIndex: 1,
        explanation:
          "A Circular Queue solves this by wrapping around, meaning the First and Last arrows wrap around to the beginning of the array [3].",
      },
      {
        id: "cs211-lec5-q10",
        text: "In the provided ArrayQueue class, what is the data type of the 'myQueue' variable that holds the items?",
        options: ["int", "int", "bool", "float"],
        correctIndex: 1,
        explanation:
          "The ArrayQueue class uses a pointer to an integer, 'int myQueue', to represent the array that holds the items [3].",
      },
      {
        id: "cs211-lec5-q11",
        text: "What is the initial value of 'last' set in the ArrayQueue constructor?",
        options: ["0", "1", "maxSize", "-1"],
        correctIndex: 3,
        explanation:
          "In the ArrayQueue constructor, since there are no items yet, the 'last' variable is initialized to -1 [4].",
      },
      {
        id: "cs211-lec5-q12",
        text: "What is the initial value of 'first' set in the ArrayQueue constructor?",
        options: ["-1", "1", "0", "maxSize"],
        correctIndex: 2,
        explanation:
          "In the constructor, the 'first' variable is initialized to 0 [4].",
      },
      {
        id: "cs211-lec5-q13",
        text: "How does the 'isEmpty()' method determine if the ArrayQueue is empty?",
        options: [
          "It returns (queueSize == maxSize)",
          "It returns (queueSize == 0)",
          "It returns (first == last)",
          "It returns (first == -1)",
        ],
        correctIndex: 1,
        explanation:
          "The 'isEmpty()' method checks if the queue is empty by returning true if 'queueSize == 0' [4].",
      },
      {
        id: "cs211-lec5-q14",
        text: "How does the 'isFull()' method check if the ArrayQueue is full?",
        options: [
          "It returns (queueSize == maxSize)",
          "It returns (queueSize == 0)",
          "It returns (last == maxSize)",
          "It returns (first == 0)",
        ],
        correctIndex: 0,
        explanation:
          "The 'isFull()' method checks if the queue is full by returning true if 'queueSize == maxSize' [4].",
      },
      {
        id: "cs211-lec5-q15",
        text: "What variables are reset when the 'clear()' method is called in the ArrayQueue class?",
        options: [
          "Only the myQueue array is deleted",
          "first is set to 0, last to -1, and queueSize to 0",
          "first is set to -1 and last to -1",
          "The front element is removed",
        ],
        correctIndex: 1,
        explanation:
          "The 'clear()' method resets the queue by setting first to 0, last to -1, and queueSize to 0 [4].",
      },
      {
        id: "cs211-lec5-q16",
        text: "What message is printed if you attempt to enqueue an element into a full ArrayQueue?",
        options: [
          "Queue Underflow",
          "Queue is empty",
          "Queue Overflow",
          "Error: Full",
        ],
        correctIndex: 2,
        explanation:
          "If 'isFull()' is true during the enqueue method, the program outputs 'Queue Overflow' [5].",
      },
      {
        id: "cs211-lec5-q17",
        text: "In the 'enqueue' method, how is the 'last' index mathematically updated to ensure circular behavior?",
        options: [
          "last = last + 1;",
          "last = (last + 1) % maxSize;",
          "last = (last % maxSize) + 1;",
          "last = last % maxSize;",
        ],
        correctIndex: 1,
        explanation:
          "To wrap around, the 'last' index is updated using the modulo operator: 'last = (last + 1) % maxSize;' [5].",
      },
      {
        id: "cs211-lec5-q18",
        text: "What happens to the 'queueSize' variable during a successful 'enqueue' operation?",
        options: [
          "It decreases by 1",
          "It stays the same",
          "It increases by 1",
          "It is multiplied by 2",
        ],
        correctIndex: 2,
        explanation:
          "During a successful enqueue operation, the 'queueSize' is incremented using 'queueSize++;' [5].",
      },
      {
        id: "cs211-lec5-q19",
        text: "What message is printed if you attempt to dequeue from an empty ArrayQueue?",
        options: [
          "Queue Underflow",
          "Queue Overflow",
          "Queue is full",
          "Index out of bounds",
        ],
        correctIndex: 0,
        explanation:
          "If 'isEmpty()' is true during the dequeue method, the program outputs 'Queue Underflow' [5].",
      },
      {
        id: "cs211-lec5-q20",
        text: "What integer value does the 'dequeue' method return if the queue is empty?",
        options: ["0", "1", "-1", "null"],
        correctIndex: 2,
        explanation:
          "The 'dequeue' method returns -1 if the queue is empty [5].",
      },
      {
        id: "cs211-lec5-q21",
        text: "In the 'dequeue' method, how is the 'first' index updated to maintain the circular array?",
        options: [
          "first = first + 1;",
          "first = (first + 1) % maxSize;",
          "first = first - 1;",
          "first = maxSize - 1;",
        ],
        correctIndex: 1,
        explanation:
          "The 'first' index is updated using 'first = (first + 1) % maxSize;' to maintain the circular array [6].",
      },
      {
        id: "cs211-lec5-q22",
        text: "What does the 'front()' method do in the ArrayQueue implementation?",
        options: [
          "Removes and returns the front item",
          "Returns the front item without removing it",
          "Adds an item to the front",
          "Returns the index of the front item",
        ],
        correctIndex: 1,
        explanation:
          "The 'front()' method simply returns 'myQueue[first]' without modifying the size or pointers, provided the queue is not empty [6].",
      },
      {
        id: "cs211-lec5-q23",
        text: "Which data structure provides a natural queue implementation where enqueuing and dequeuing execute in constant time O(1)?",
        options: [
          "Singly linked list",
          "Doubly linked list",
          "Dynamic array",
          "Binary tree",
        ],
        correctIndex: 1,
        explanation:
          "A natural queue implementation is a doubly linked list, where enqueuing and dequeuing can be executed in constant time O(1) [7].",
      },
      {
        id: "cs211-lec5-q24",
        text: "What is the defining characteristic of a Priority Queue?",
        options: [
          "It processes elements strictly randomly",
          "It arranges elements based on their priority values",
          "It processes the newest elements first",
          "It operates on a Last-In First-Out basis",
        ],
        correctIndex: 1,
        explanation:
          "A priority queue is a type of queue that arranges elements based on their priority values [7].",
      },
      {
        id: "cs211-lec5-q25",
        text: "Which of the following operations is a real-world application of priority queues?",
        options: [
          "Print spooling",
          "Supermarket checkout lines",
          "Network packet scheduling",
          "Reversing an array",
        ],
        correctIndex: 2,
        explanation:
          "Examples of priority queues in use include operating system task scheduling and network packet scheduling [8].",
      },
      {
        id: "cs211-lec5-q26",
        text: "In a Priority Queue, where is a newly inserted item placed if it has the highest priority?",
        options: [
          "At the back",
          "In the middle",
          "At the front",
          "It replaces the lowest priority item",
        ],
        correctIndex: 2,
        explanation:
          "If the newly inserted item is of the highest priority, then it is inserted at the front [8].",
      },
      {
        id: "cs211-lec5-q27",
        text: "Which Priority Queue operation retrieves and removes the highest priority item?",
        options: ["front", "enqueue", "dequeue", "clear"],
        correctIndex: 2,
        explanation:
          "The dequeue operation removes the highest priority item, which is typically available at the front [9].",
      },
      {
        id: "cs211-lec5-q28",
        text: "When representing a Priority Queue using a linked list, what is the time complexity of adding a new element in its proper position?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        correctIndex: 2,
        explanation:
          "In a linked list representation of a priority queue, adding an element takes O(n) time [9].",
      },
      {
        id: "cs211-lec5-q29",
        text: "When representing a Priority Queue using a linked list, what is the time complexity of taking (removing) an element?",
        options: ["Immediate or O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correctIndex: 0,
        explanation:
          "In such a linked list representation, taking an element is immediate [9].",
      },
      {
        id: "cs211-lec5-q30",
        text: "In the Priority Queue example where higher numbers have higher priority, what is the state of the queue 'pq' after inserting '1' and then '5'?",
        options: ["1, 5", "5, 1", "1", "5"],
        correctIndex: 1,
        explanation:
          "After 'enqueue(1)', the queue is '1'. Following 'enqueue(5)', since 5 is a higher priority, it moves to the front making the queue '5, 1' [10].",
      },
    ],
  },
];

export const dataStructures: Subject = {
  id: "cs211",
  name: "Data Structures",
  icon: "Database",
  description: "Fundamental concepts of data organization and management.",
  color: "#3B82F6",
  professor: "Dr. Noha Yehia",
  chapters,
  questions: chapters.flatMap((chapter) => chapter.questions),
};
