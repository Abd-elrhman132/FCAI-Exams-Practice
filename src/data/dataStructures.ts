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
  {
    id: "cs211-lec6",
    name: "Lecture 6: Trees",
    description:
      "Hierarchical data structures, binary trees, binary search trees (BST), and tree traversals.",
    questions: [
      {
        id: "cs211-lec6-q1",
        text: "Which of the following is classified as a non-linear data structure?",
        options: ["Array", "Linked List", "Stack", "Tree"],
        correctIndex: 3,
        explanation:
          "Trees and Graphs are considered non-linear data structures, whereas Arrays, Linked Lists, Stacks, and Queues are linear [1].",
      },
      {
        id: "cs211-lec6-q2",
        text: "What is the topmost node in a tree called?",
        options: ["Leaf", "Root", "Parent", "Sibling"],
        correctIndex: 1,
        explanation:
          "The topmost node in a hierarchical tree structure is defined as the root [2].",
      },
      {
        id: "cs211-lec6-q3",
        text: "How are nodes with no children referred to in a tree?",
        options: ["Ancestors", "Roots", "Leaves", "Descendants"],
        correctIndex: 2,
        explanation: "Nodes that have no children are referred to as leaves [2].",
      },
      {
        id: "cs211-lec6-q4",
        text: "What is the term used for nodes that share the same parent?",
        options: ["Ancestors", "Siblings", "Descendants", "Leaves"],
        correctIndex: 1,
        explanation:
          "Nodes that share the exact same parent node are defined as siblings [2].",
      },
      {
        id: "cs211-lec6-q5",
        text: "How is the degree of a node defined?",
        options: [
          "The number of its parents",
          "The length of the path from the root",
          "The number of its children",
          "The maximum height of the tree",
        ],
        correctIndex: 2,
        explanation:
          "The degree of a node specifically refers to the number of children it possesses [2].",
      },
      {
        id: "cs211-lec6-q6",
        text: "What is the term for the number of edges that must be traversed to get from one node to another?",
        options: ["Level", "Degree", "Path length", "Height"],
        correctIndex: 2,
        explanation:
          "The number of edges that must be traversed to move from one node to another is known as the path length [3].",
      },
      {
        id: "cs211-lec6-q7",
        text: "What does the length of the path from the root to a specific node indicate?",
        options: [
          "The node's height",
          "The node's level or depth",
          "The node's degree",
          "The node's number of descendants",
        ],
        correctIndex: 1,
        explanation:
          "The length of the path from the root down to a given node represents its level or depth [3].",
      },
      {
        id: "cs211-lec6-q8",
        text: "How is the height of a non-empty tree determined?",
        options: [
          "By counting the total number of nodes",
          "By calculating the maximum level of a node in the tree",
          "By counting the number of leaves",
          "By the degree of the root node",
        ],
        correctIndex: 1,
        explanation:
          "The height of a non-empty tree is defined as the maximum level of any node within that tree [3].",
      },
      {
        id: "cs211-lec6-q9",
        text: "What is the defined height of an empty tree?",
        options: ["0", "1", "-1", "Undefined"],
        correctIndex: 2,
        explanation:
          "By definition, the height of an empty tree is represented as -1 [4].",
      },
      {
        id: "cs211-lec6-q10",
        text: "What is the height of a tree consisting of only a single node?",
        options: ["-1", "0", "1", "2"],
        correctIndex: 1,
        explanation:
          "A tree consisting of a single node (where the root is also a leaf) has a height of 0 [4].",
      },
      {
        id: "cs211-lec6-q11",
        text: "What is the maximum possible height of a tree containing N nodes?",
        options: ["N", "N+1", "N-1", "Log2 N"],
        correctIndex: 2,
        explanation:
          "The maximum possible height for a tree containing exactly N nodes is N-1 [4].",
      },
      {
        id: "cs211-lec6-q12",
        text: "Which condition strictly defines a binary tree?",
        options: [
          "Each node must have exactly two children.",
          "Nodes have at most two children per node.",
          "Nodes can have any number of children.",
          "It must be perfectly balanced.",
        ],
        correctIndex: 1,
        explanation:
          "A binary tree is defined as a tree where every node has at most two children [4].",
      },
      {
        id: "cs211-lec6-q13",
        text: "A binary tree where all levels are full except possibly the lowest (which is filled from left to right) is known as a:",
        options: [
          "Perfect binary tree",
          "Binary search tree",
          "Complete binary tree",
          "Balanced binary tree",
        ],
        correctIndex: 2,
        explanation:
          "A complete binary tree has all its levels full except the lowest level, which is populated strictly from left to right [4].",
      },
      {
        id: "cs211-lec6-q14",
        text: "What is the height of a complete binary tree that contains N nodes?",
        options: ["N-1", "Log2 N", "N/2", "N"],
        correctIndex: 1,
        explanation:
          "The mathematical height of a complete binary tree containing N nodes is Log2 N [5].",
      },
      {
        id: "cs211-lec6-q15",
        text: "Which of the following conditions must a perfect binary tree satisfy?",
        options: [
          "All levels are full and all leaves are at the same level.",
          "It contains only one child per node.",
          "The left subtree is always larger than the right.",
          "Nodes are added exclusively to the right subtree.",
        ],
        correctIndex: 0,
        explanation:
          "A perfect binary tree requires all levels to be entirely full and all leaves to be situated at the same level [5].",
      },
      {
        id: "cs211-lec6-q16",
        text: "How many terminal nodes (leaves) exist in a perfect binary tree of height i?",
        options: ["2^i", "2*i", "2^i - 1", "i^2"],
        correctIndex: 0,
        explanation:
          "For a perfect binary tree with a height of i, the total number of leaves (terminal nodes) is 2^i [5].",
      },
      {
        id: "cs211-lec6-q17",
        text: "What is the total number of nodes in a perfect binary tree with height i?",
        options: ["2^i", "2^i - 1", "2^(i+1) - 1", "i^2 + 1"],
        correctIndex: 2,
        explanation:
          "A perfect binary tree with height i contains a total of 2^(i+1) - 1 nodes [6].",
      },
      {
        id: "cs211-lec6-q18",
        text: "In a Binary Search Tree (BST), what rule applies to the values in a node's left subtree?",
        options: [
          "They are greater than the node's value.",
          "They are greater than or equal to the node's value.",
          "They are exactly equal to the node's value.",
          "They are less than the node's value.",
        ],
        correctIndex: 3,
        explanation:
          "In a binary search tree, all values stored in the left subtree of a given node must be less than that node's value [6].",
      },
      {
        id: "cs211-lec6-q19",
        text: "In a Binary Search Tree (BST), what rule applies to the values in a node's right subtree?",
        options: [
          "They are less than the node's value.",
          "They are less than or equal to the node's value.",
          "They are greater than or equal to the node's value.",
          "They must be perfectly balanced with the left subtree.",
        ],
        correctIndex: 2,
        explanation:
          "In a binary search tree, all values stored in the right subtree must be greater than or equal to the value stored in the node [6].",
      },
      {
        id: "cs211-lec6-q20",
        text: "What is the best-case time complexity for searching in a Binary Search Tree (BST)?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correctIndex: 0,
        explanation:
          "The best-case complexity is O(1), which occurs when the targeted key is immediately found at the root [7].",
      },
      {
        id: "cs211-lec6-q21",
        text: "For a balanced Binary Search Tree (BST), what is the average-case time complexity for searching?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        correctIndex: 1,
        explanation:
          "Searching through a balanced BST has an average-case mathematical complexity of O(log n) [7].",
      },
      {
        id: "cs211-lec6-q22",
        text: "What is the worst-case time complexity when searching in a completely unbalanced Binary Search Tree (BST)?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correctIndex: 2,
        explanation:
          "When a BST is completely unbalanced (acting much like a linear list), the worst-case search complexity degrades to O(n) [7].",
      },
      {
        id: "cs211-lec6-q23",
        text: "What happens if a user attempts to insert a duplicate node into a standard Binary Search Tree (BST) according to the lecture's algorithm?",
        options: [
          "It is inserted into the left subtree.",
          "It is inserted into the right subtree.",
          "The new node is simply discarded.",
          "An error is thrown, crashing the program.",
        ],
        correctIndex: 2,
        explanation:
          "During insertion, if the key equals the current node's data, it indicates a duplicate, and the new node is simply discarded [8].",
      },
      {
        id: "cs211-lec6-q24",
        text: "When deleting a leaf node from a Binary Search Tree (Case 1), what is the appropriate procedure?",
        options: [
          "The rightmost node in the left subtree replaces it.",
          "The parent's pointer is set to null and the node is disposed of.",
          "The tree's root replaces the leaf.",
          "The leaf is swapped with its sibling.",
        ],
        correctIndex: 1,
        explanation:
          "To delete a leaf node, the parent's specific pointer to that leaf is set to null, and the node is then deleted to free space [9].",
      },
      {
        id: "cs211-lec6-q25",
        text: "When deleting a node that has exactly one child from a BST (Case 2), how is the tree structured afterward?",
        options: [
          "The parent's pointer is reset to point to the node's child.",
          "The parent's pointer is set to null.",
          "The single child is deleted along with the parent.",
          "A new root node is created.",
        ],
        correctIndex: 0,
        explanation:
          "In Case 2 (one child), the parent’s pointer is updated and reset to bypass the deleted node and point directly to its child [9].",
      },
      {
        id: "cs211-lec6-q26",
        text: "Which strategy is used to delete a BST node that has two children (Case 3)?",
        options: [
          "Setting both the parent's left and right pointers to null.",
          "Deleting the entire left subtree.",
          "Replacing the node entirely with a new root.",
          "Copying the key from the rightmost node in the left subtree (predecessor) or leftmost in the right subtree.",
        ],
        correctIndex: 3,
        explanation:
          "For nodes with two children, the value is replaced by copying the key from its predecessor (rightmost in the left subtree) or successor (leftmost in the right subtree), and then that predecessor/successor is removed [10].",
      },
      {
        id: "cs211-lec6-q27",
        text: "How does a breadth-first traversal visit the nodes of a tree?",
        options: [
          "Going as deep as possible and then backtracking.",
          "Randomly visiting nodes.",
          "Starting from the lowest or highest level and moving level by level.",
          "Visiting all leaves before visiting the root.",
        ],
        correctIndex: 2,
        explanation:
          "Breadth-first traversal involves visiting each node starting from the lowest or highest level and systematically moving level by level [11].",
      },
      {
        id: "cs211-lec6-q28",
        text: "Which data structure is typically used to implement a breadth-first tree traversal?",
        options: ["Stack", "Queue", "Array", "Graph"],
        correctIndex: 1,
        explanation:
          "A breadth-first traversal can be efficiently implemented using a queue data structure to hold nodes as they are discovered [11].",
      },
      {
        id: "cs211-lec6-q29",
        text: "In a depth-first traversal, what ordering sequence defines a Preorder traversal?",
        options: [
          "LVR (Left, Visit, Right)",
          "LRV (Left, Right, Visit)",
          "VLR (Visit, Left, Right)",
          "RVL (Right, Visit, Left)",
        ],
        correctIndex: 2,
        explanation:
          "Preorder traversal follows the sequence VLR, meaning it Visits the node, traverses the Left subtree, then traverses the Right subtree [12].",
      },
      {
        id: "cs211-lec6-q30",
        text: "In a depth-first traversal, what ordering sequence defines an Inorder traversal?",
        options: [
          "VLR (Visit, Left, Right)",
          "LVR (Left, Visit, Right)",
          "LRV (Left, Right, Visit)",
          "VRL (Visit, Right, Left)",
        ],
        correctIndex: 1,
        explanation:
          "Inorder traversal follows the sequence LVR, meaning it traverses the Left subtree, Visits the node, and then traverses the Right subtree [12].",
      },
    ],
  },
  {
    id: "cs211-lec7",
    name: "Lecture 7: AVL Trees",
    description: "Self-balancing binary search trees and rotation operations.",
    questions: [
      {
        id: "cs211-lec7-q1",
        text: "What are the two arguments presented in favor of trees over linked lists?",
        options: [
          "They use less memory and have smaller nodes.",
          "They represent hierarchical structures well and offer much faster search processes.",
          "They allow O(1) insertion time and delete time.",
          "They are perfectly balanced by default.",
        ],
        correctIndex: 1,
        explanation:
          "Two arguments were presented in favor of trees: they are well suited to represent hierarchical structures, and the search process is much faster using trees instead of linked lists.",
      },
      {
        id: "cs211-lec7-q2",
        text: "What is a major disadvantage of an ordinary binary search tree mentioned in the text?",
        options: [
          "Its search process is slower than a linked list.",
          "It cannot store duplicate values.",
          "Its height can be as large as n-1.",
          "It requires continuous restructuring.",
        ],
        correctIndex: 2,
        explanation:
          "The disadvantage of a binary search tree is that its height can be as large as n-1.",
      },
      {
        id: "cs211-lec7-q3",
        text: "In the worst case, what is the time complexity of insertion and deletion in an ordinary binary search tree?",
        options: ["O(1)", "O(log n)", "O(n log n)", "O(n)"],
        correctIndex: 3,
        explanation:
          "Insertion and deletion and many other operations can be O(n) in the worst case for a binary search tree.",
      },
      {
        id: "cs211-lec7-q4",
        text: "When is a binary tree considered 'balanced'?",
        options: [
          "When all leaves are exactly on the same level.",
          "When the difference in height of both subtrees of any node in the tree is either zero or one.",
          "When the number of nodes in the left and right subtrees is equal.",
          "When the tree is perfectly symmetrical.",
        ],
        correctIndex: 1,
        explanation:
          "A binary tree is balanced if the difference in height of both subtrees of any node in the tree is either zero or one.",
      },
      {
        id: "cs211-lec7-q5",
        text: "What condition must be met for a binary tree to be considered 'perfectly balanced'?",
        options: [
          "It must be balanced and all leaves are to be found on one level.",
          "Every node must have exactly two children.",
          "The balance factor of the root must be exactly 0.",
          "It must have a height of O(log n) with no empty subtrees.",
        ],
        correctIndex: 0,
        explanation:
          "A binary tree is considered perfectly balanced if it is balanced and all leaves are to be found on one level.",
      },
      {
        id: "cs211-lec7-q6",
        text: "What is the primary goal regarding the height of a Binary Search Tree (BST) when using balanced trees?",
        options: [
          "To keep the height O(1).",
          "To keep the height exactly equal to the number of nodes.",
          "To keep the height O(log n).",
          "To keep the height O(n).",
        ],
        correctIndex: 2,
        explanation: "Our goal is to keep the height of the BST O(log n).",
      },
      {
        id: "cs211-lec7-q7",
        text: "What technique is used to maintain a balanced tree?",
        options: [
          "Preventing the insertion of elements that would unbalance it.",
          "Continuously restructuring the tree when new elements arrive that cause imbalance.",
          "Deleting the root and rebuilding the tree from scratch.",
          "Converting the tree into a linked list temporarily.",
        ],
        correctIndex: 1,
        explanation:
          "The technique is to continuously restructure the tree when new elements arrive that cause imbalance in the tree, so we always keep the tree balanced.",
      },
      {
        id: "cs211-lec7-q8",
        text: "Which of the following are examples of balanced trees?",
        options: [
          "Spanning tree and B-tree",
          "AVL tree and red-black tree",
          "Min-heap and Max-heap",
          "Binary search tree and linked list",
        ],
        correctIndex: 1,
        explanation:
          "Examples of balanced trees are AVL tree and red-black tree.",
      },
      {
        id: "cs211-lec7-q9",
        text: "What does an AVL tree do after an insertion or deletion to maintain balance?",
        options: [
          "It globally recalculates all nodes.",
          "It locally changes the tree to rebalance it.",
          "It ignores the imbalance until it reaches a depth of n-1.",
          "It transforms into a red-black tree.",
        ],
        correctIndex: 1,
        explanation:
          "AVL is a self balancing BST, locally change the tree to rebalance it after an insertion or deletion.",
      },
      {
        id: "cs211-lec7-q10",
        text: "Who proposed the classical method for AVL trees?",
        options: [
          "Alan Turing and Von Neumann",
          "Adel’son-Vel’skii and Landis",
          "Dijkstra and Prim",
          "Kruskal and Bellman",
        ],
        correctIndex: 1,
        explanation:
          "AVL is a classical method proposed by Adel’son-Vel’skii and Landis.",
      },
      {
        id: "cs211-lec7-q11",
        text: "In an AVL tree, what is the maximum allowed difference between the height of the left and right subtrees of every node?",
        options: ["Zero", "One", "Two", "Three"],
        correctIndex: 1,
        explanation:
          "An AVL tree is one in which the height of the left and right subtrees of every node differ by at most one.",
      },
      {
        id: "cs211-lec7-q12",
        text: "What is the time complexity for basic operations in an AVL Tree?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        correctIndex: 2,
        explanation:
          "AVL Tree Complexity is O(log n) for the basic operations.",
      },
      {
        id: "cs211-lec7-q13",
        text: "How is the balance factor of a node calculated in an AVL tree?",
        options: [
          "Height of left subtree minus height of right subtree.",
          "Number of right children minus number of left children.",
          "Height of the right subtree minus the height of the left subtree.",
          "Depth of node minus height of tree.",
        ],
        correctIndex: 2,
        explanation:
          "Balance factor of any node is the height of the right subtree minus the height of the left subtree.",
      },
      {
        id: "cs211-lec7-q14",
        text: "When must an AVL tree be rebalanced?",
        options: [
          "When the absolute value of the balance factor becomes greater than 1.",
          "When the balance factor becomes exactly 1.",
          "When the absolute value of the balance factor is less than 1.",
          "When a node has no children.",
        ],
        correctIndex: 0,
        explanation:
          "If |balance factor| becomes > 1, then the tree has to be rebalanced.",
      },
      {
        id: "cs211-lec7-q15",
        text: "What is the first step when inserting a new key into an AVL tree?",
        options: [
          "Perform a rotation at the root.",
          "Calculate the balance factor of all nodes.",
          "Insert the new key as a new leaf just as in ordinary binary search tree.",
          "Delete the largest node to make room.",
        ],
        correctIndex: 2,
        explanation:
          "First, insert the new key as a new leaf just as in ordinary binary search tree.",
      },
      {
        id: "cs211-lec7-q16",
        text: "After inserting a new leaf in an AVL tree, what path must be traced to check for balance?",
        options: [
          "From the root to the new leaf.",
          "From the new leaf towards the root.",
          "From the left-most node to the right-most node.",
          "From the root down all subtrees.",
        ],
        correctIndex: 1,
        explanation:
          "Then trace the path from the new leaf towards the root.",
      },
      {
        id: "cs211-lec7-q17",
        text: "During insertion, if a node 'x' is checked and the heights of left(x) and right(x) differ by at most 1, what is the immediate next step?",
        options: [
          "Restructure the tree by rotation.",
          "Proceed to parent(x).",
          "Stop the insertion process entirely.",
          "Delete node x.",
        ],
        correctIndex: 1,
        explanation: "If yes, proceed to parent(x).",
      },
      {
        id: "cs211-lec7-q18",
        text: "If a rotation is performed at node 'x' during an AVL insertion, how many additional rotations are needed at the ancestors of 'x'?",
        options: [
          "One additional rotation.",
          "Rotations up to the root.",
          "No rotations are needed at any ancestor of x.",
          "It depends on the height of the tree.",
        ],
        correctIndex: 2,
        explanation:
          "For insertion, once we perform a rotation at a node x, we won’t need to perform any rotation at any ancestor of x.",
      },
      {
        id: "cs211-lec7-q19",
        text: "How many situations can cause an AVL tree to become out of balance?",
        options: ["Two", "Three", "Four", "Five"],
        correctIndex: 2,
        explanation:
          "An AVL tree can become out of balance in four situations.",
      },
      {
        id: "cs211-lec7-q20",
        text: "Which condition corresponds to an 'RR' situation that causes imbalance?",
        options: [
          "Inserting a node in the right subtree of the left child.",
          "Inserting a node in the right subtree of the right child.",
          "Inserting a node in the left subtree of the right child.",
          "Inserting a node in the left subtree of the left child.",
        ],
        correctIndex: 1,
        explanation:
          "Inserting a node in the right subtree of the right child corresponds to an RR situation.",
      },
      {
        id: "cs211-lec7-q21",
        text: "Which condition corresponds to an 'RL' situation that causes imbalance?",
        options: [
          "Inserting a node in the right subtree of the left child.",
          "Inserting a node in the left subtree of the left child.",
          "Inserting a node in the left subtree of the right child.",
          "Inserting a node in the right subtree of the right child.",
        ],
        correctIndex: 2,
        explanation:
          "Inserting a node in the left subtree of the right child corresponds to an RL situation.",
      },
      {
        id: "cs211-lec7-q22",
        text: "Which condition corresponds to an 'LL' situation that causes imbalance?",
        options: [
          "Inserting a node in the left subtree of the left child.",
          "Inserting a node in the right subtree of the left child.",
          "Inserting a node in the left subtree of the right child.",
          "Inserting a node in the right subtree of the right child.",
        ],
        correctIndex: 0,
        explanation:
          "Inserting a node in the left subtree of the left child corresponds to an LL situation.",
      },
      {
        id: "cs211-lec7-q23",
        text: "Which condition corresponds to an 'LR' situation that causes imbalance?",
        options: [
          "Inserting a node in the left subtree of the left child.",
          "Inserting a node in the right subtree of the left child.",
          "Inserting a node in the left subtree of the right child.",
          "Inserting a node in the right subtree of the right child.",
        ],
        correctIndex: 1,
        explanation:
          "Inserting a node in the right subtree of the left child corresponds to an LR situation.",
      },
      {
        id: "cs211-lec7-q24",
        text: "What action is taken to transform the tree and restore the AVL tree property?",
        options: ["Re-hashing", "Rotation", "Duplication", "Level-order traversal"],
        correctIndex: 1,
        explanation:
          "Transform the tree to restore the AVL tree property is done by Rotation.",
      },
      {
        id: "cs211-lec7-q25",
        text: "What are the two types of rotations mentioned for AVL trees?",
        options: [
          "Forward rotations and backward rotations.",
          "Inner rotations and outer rotations.",
          "Single rotations and double rotations.",
          "Binary rotations and unified rotations.",
        ],
        correctIndex: 2,
        explanation: "Two types of rotations: single rotations and double rotations.",
      },
      {
        id: "cs211-lec7-q26",
        text: "What is the time complexity of rotation operations designed to restore balance in an AVL tree?",
        options: ["O(n)", "O(1)", "O(log n)", "O(n log n)"],
        correctIndex: 1,
        explanation:
          "Rotations are designed to restore balance in O(1) time while ensuring the overall time complexity remains O(log n).",
      },
      {
        id: "cs211-lec7-q27",
        text: "An 'RL Rotation' is a double rotation composed of which single rotations?",
        options: [
          "LL rotation followed by RR rotation.",
          "RR rotation followed by LL rotation.",
          "Two consecutive LL rotations.",
          "Two consecutive RR rotations.",
        ],
        correctIndex: 0,
        explanation: "RL Rotation = LL rotation + RR rotation.",
      },
      {
        id: "cs211-lec7-q28",
        text: "An 'LR Rotation' is a double rotation composed of which single rotations?",
        options: [
          "LL rotation followed by RR rotation.",
          "RR rotation followed by LL rotation.",
          "Two RR rotations.",
          "Two LL rotations.",
        ],
        correctIndex: 1,
        explanation: "LR Rotation = RR rotation + LL rotation.",
      },
      {
        id: "cs211-lec7-q29",
        text: "During an 'RL Rotation', where is the LL rotation performed first?",
        options: [
          "On the full tree.",
          "On the subtree.",
          "On the root node exclusively.",
          "On the newly inserted leaf node.",
        ],
        correctIndex: 1,
        explanation:
          "In an RL rotation, LL rotation is performed on subtree and then RR rotation is performed on full tree.",
      },
      {
        id: "cs211-lec7-q30",
        text: "In the provided AVL Balancing Example, inserting nodes 'H', 'I', and 'J' in that sequence triggers which type of rotation?",
        options: ["LL Rotation", "LR Rotation", "RR Rotation", "RL Rotation"],
        correctIndex: 2,
        explanation: "Inserting H, I, J results in an RR Rotation to balance the tree.",
      },
    ],
  },
  {
    id: "cs211-lec8",
    name: "Lecture 8: Heap Trees and Heap Sort",
    description: "Binary heaps, max-heaps, min-heaps, and the heapsort algorithm.",
    questions: [
      {
        id: "cs211-lec8-q1",
        text: "What type of tree structure defines a heap?",
        options: [
          "A complete binary tree",
          "A binary search tree",
          "An AVL tree",
          "A B-tree",
        ],
        correctIndex: 0,
        explanation:
          "A heap is a complete binary tree where all levels are full, except possibly the last one, which is filled from left to right.",
      },
      {
        id: "cs211-lec8-q2",
        text: "What defines the heap property for a Max Heap?",
        options: [
          "For any node x, Parent(x) <= x",
          "For any node x, Parent(x) == x",
          "For any node x, Parent(x) >= x",
          "The root is the minimum element",
        ],
        correctIndex: 2,
        explanation:
          "For a Max Heap, the heap property states that for any node x, the parent of x must be greater than or equal to x.",
      },
      {
        id: "cs211-lec8-q3",
        text: "In a Min Heap, what is the required relationship between a node and its parent?",
        options: [
          "Parent(x) >= x",
          "Parent(x) <= x",
          "Parent(x) == x",
          "Parent(x) > x",
        ],
        correctIndex: 1,
        explanation:
          "For a Min Heap, the heap property states that for any node x, the parent of x must be less than or equal to x.",
      },
      {
        id: "cs211-lec8-q4",
        text: "Where is the maximum element located in a Max Heap?",
        options: [
          "At the last leaf node",
          "At the rightmost child",
          "At the root",
          "At the leftmost child",
        ],
        correctIndex: 2,
        explanation: "For a Max heap, the root is always the maximum element of the heap.",
      },
      {
        id: "cs211-lec8-q5",
        text: "If a heap is stored in an array A, what is the index of the root?",
        options: ["A", "A", "A[n]", "A[n-1]"],
        correctIndex: 1,
        explanation:
          "When representing a heap as an array, the root of the tree is stored at index A.",
      },
      {
        id: "cs211-lec8-q6",
        text: "For a node at index i in an array representation of a heap, what is the formula to find its left child?",
        options: ["A[2i + 2]", "A[(i-1)/2]", "A[2i]", "A[2i + 1]"],
        correctIndex: 3,
        explanation: "The left child of a node at index i is found at A[2i + 1].",
      },
      {
        id: "cs211-lec8-q7",
        text: "For a node at index i in an array representation of a heap, what is the formula to find its right child?",
        options: ["A[2i + 1]", "A[2i + 2]", "A[(i-1)/2]", "A[i + 2]"],
        correctIndex: 1,
        explanation: "The right child of a node at index i is found at A[2i + 2].",
      },
      {
        id: "cs211-lec8-q8",
        text: "For a node at index i, what formula gives the index of its parent?",
        options: ["A[2i + 1]", "A[i / 2]", "A[(i-1) / 2]", "A[2i - 1]"],
        correctIndex: 2,
        explanation:
          "The parent of a node at index i is calculated using the formula A[(i-1)/2].",
      },
      {
        id: "cs211-lec8-q9",
        text: "In an array of length n representing a heap, which indices contain the leaf nodes?",
        options: [
          "A[0 .. (n/2)]",
          "A[(n/2) .. (n-1)]",
          "A[1 .. n]",
          "A[(n/4) .. (n/2)]",
        ],
        correctIndex: 1,
        explanation:
          "The elements in the subarray A[(n/2) .. (n-1)] are the leaves of the heap.",
      },
      {
        id: "cs211-lec8-q10",
        text: "Where are new nodes inserted when adding to a heap tree?",
        options: [
          "At the root",
          "At the top level from right to left",
          "At the bottom level from left to right",
          "At the bottom level from right to left",
        ],
        correctIndex: 2,
        explanation:
          "New nodes are always inserted at the bottom level of the heap from left to right.",
      },
      {
        id: "cs211-lec8-q11",
        text: "From where are nodes removed when deleting from a heap tree?",
        options: [
          "From the root only",
          "From the bottom level, right to left",
          "From the bottom level, left to right",
          "From any random leaf node",
        ],
        correctIndex: 1,
        explanation:
          "Nodes are removed from the bottom level of the heap from right to left.",
      },
      {
        id: "cs211-lec8-q12",
        text: "What is the main purpose of the MAX-HEAPIFY operation?",
        options: [
          "To sort an array in place",
          "To insert a new node into the heap",
          "To maintain or restore the max-heap property",
          "To create a max-heap from an unordered array",
        ],
        correctIndex: 2,
        explanation:
          "MAX-HEAPIFY is the operation used to maintain and restore the max-heap property.",
      },
      {
        id: "cs211-lec8-q13",
        text: "What must be true about the left and right subtrees of a node 'i' before calling MAX-HEAPIFY on it?",
        options: [
          "They must be empty",
          "They must violate the heap property",
          "They must be max-heaps",
          "They must contain only leaf nodes",
        ],
        correctIndex: 2,
        explanation:
          "MAX-HEAPIFY supposes that the Left and Right subtrees of node i are already max-heaps.",
      },
      {
        id: "cs211-lec8-q14",
        text: "What is the running time of the MAX-HEAPIFY operation?",
        options: ["O(1)", "O(n)", "O(n lg n)", "O(lg n)"],
        correctIndex: 3,
        explanation:
          "The running time of MAX-HEAPIFY is O(lg n), which can also be written in terms of the heap's height as O(h).",
      },
      {
        id: "cs211-lec8-q15",
        text: "During MAX-HEAPIFY, if a node is smaller than its children, what is the first step to eliminate the violation?",
        options: [
          "Exchange it with its parent",
          "Exchange it with the larger child",
          "Exchange it with the smaller child",
          "Delete the node",
        ],
        correctIndex: 1,
        explanation:
          "To eliminate the violation in MAX-HEAPIFY, the node is exchanged with its larger child before moving down the tree.",
      },
      {
        id: "cs211-lec8-q16",
        text: "Which operation is responsible for creating a max-heap from an unordered array?",
        options: ["MAX-HEAPIFY", "HEAPSORT", "EXTRACT-MAX", "BUILD-MAX-HEAP"],
        correctIndex: 3,
        explanation:
          "The operation used to create a max-heap from an unordered array is BUILD-MAX-HEAP.",
      },
      {
        id: "cs211-lec8-q17",
        text: "In the BUILD-MAX-HEAP algorithm, what is the range of the loop that calls MAX-HEAPIFY?",
        options: [
          "From 0 up to n/2-1",
          "From n-1 down to 0",
          "From floor(n/2 - 1) down to 0",
          "From 1 up to n",
        ],
        correctIndex: 2,
        explanation:
          "The BUILD-MAX-HEAP algorithm loops for 'i' starting from floor(n/2 - 1) down to 0, applying MAX-HEAPIFY.",
      },
      {
        id: "cs211-lec8-q18",
        text: "What is the running time of the BUILD-MAX-HEAP operation?",
        options: ["O(lg n)", "O(n)", "O(n lg n)", "O(n^2)"],
        correctIndex: 1,
        explanation:
          "The running time of BUILD-MAX-HEAP is O(n), as the cost of HEAPIFY on a node is proportional to its height.",
      },
      {
        id: "cs211-lec8-q19",
        text: "What is the first step in the Heapsort algorithm?",
        options: [
          "Swap the root with the last element",
          "Call MAX-HEAPIFY on the root",
          "Decrease the heap size",
          "Build a max-heap from the array",
        ],
        correctIndex: 3,
        explanation: "The first step of Heapsort is to build a max-heap from the given array.",
      },
      {
        id: "cs211-lec8-q20",
        text: "During Heapsort, after swapping the root with the last element in the array, what is the next step?",
        options: [
          "Call BUILD-MAX-HEAP again",
          "Increase the heap size",
          "Discard the last node by decreasing the heap size",
          "Return the sorted array",
        ],
        correctIndex: 2,
        explanation:
          "After swapping the root with the last element, Heapsort \"discards\" this last node by decreasing the heap size.",
      },
      {
        id: "cs211-lec8-q21",
        text: "In Heapsort, which function is called on the new root after the heap size is decreased?",
        options: ["BUILD-MAX-HEAP", "MAX-HEAPIFY", "EXTRACT-MAX", "INSERT"],
        correctIndex: 1,
        explanation:
          "After the root is swapped and the heap size decreased, Heapsort calls MAX-HEAPIFY on the new root.",
      },
      {
        id: "cs211-lec8-q22",
        text: "What is the worst-case running time of the Heapsort algorithm?",
        options: ["O(n^2)", "O(n)", "O(n * log n)", "O(log n)"],
        correctIndex: 2,
        explanation:
          "The comparison of sorting algorithms shows that Heapsort has a worst-case running time of O(n * log n).",
      },
      {
        id: "cs211-lec8-q23",
        text: "How does the worst-case running time of Heapsort compare to that of Quicksort?",
        options: [
          "Heapsort is O(n^2) and Quicksort is O(n * log n)",
          "Both are O(n * log n)",
          "Heapsort is O(n * log n) and Quicksort is O(n^2)",
          "Both are O(n^2)",
        ],
        correctIndex: 2,
        explanation:
          "Heapsort has a worst-case of n * log n, whereas Quicksort has a worst-case of n^2.",
      },
      {
        id: "cs211-lec8-q24",
        text: "Which data structure provides an excellent way to implement a priority queue?",
        options: ["A linked list", "A stack", "A heap", "A hash table"],
        correctIndex: 2,
        explanation: "A heap is an excellent way to implement a priority queue.",
      },
      {
        id: "cs211-lec8-q25",
        text: "Because a heap is a perfectly balanced tree, reaching a leaf requires how many searches?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
        correctIndex: 1,
        explanation:
          "Because a heap is a perfectly balanced tree, reaching a leaf requires O(log n) searches.",
      },
      {
        id: "cs211-lec8-q26",
        text: "What does the EXTRACT-MAX operation do in a max-priority queue?",
        options: [
          "Returns the largest element without removing it",
          "Inserts a new maximum element into the heap",
          "Removes and returns the element with the largest key",
          "Increases the key of the maximum element",
        ],
        correctIndex: 2,
        explanation:
          "EXTRACT-MAX(H) removes and returns the element of H with the largest key.",
      },
      {
        id: "cs211-lec8-q27",
        text: "What is the first step when executing the EXTRACT-MAX operation?",
        options: [
          "Call MAX-HEAPIFY",
          "Decrease the size of the heap by 1",
          "Exchange the root element with the last element",
          "Delete the root completely",
        ],
        correctIndex: 2,
        explanation:
          "The first step of EXTRACT-MAX is to exchange the root element with the last element.",
      },
      {
        id: "cs211-lec8-q28",
        text: "What is the running time of the HEAP-EXTRACT-MAX operation?",
        options: ["O(1)", "O(n)", "O(lg n)", "O(n lg n)"],
        correctIndex: 2,
        explanation: "The algorithm for HEAP-EXTRACT-MAX operates in O(lg n) time.",
      },
      {
        id: "cs211-lec8-q29",
        text: "In the INCREASE-KEY operation, how is the max-heap property restored if it is violated after increasing a key?",
        options: [
          "By calling BUILD-MAX-HEAP",
          "By traversing a path toward the root and exchanging with the parent",
          "By swapping the node with the last element",
          "By applying MAX-HEAPIFY on the node's children",
        ],
        correctIndex: 1,
        explanation:
          "If the max-heap property does not hold in INCREASE-KEY, it traverses a path toward the root to find the proper place for the newly increased key, exchanging with the parent.",
      },
      {
        id: "cs211-lec8-q30",
        text: "During the INSERT operation in a max-heap, what initial key value is given to the newly expanded element before setting its correct value?",
        options: ["0", "The maximum value in the heap", "-∞", "+∞"],
        correctIndex: 2,
        explanation:
          "The INSERT operation starts by expanding the max-heap with a new element whose key is -∞, and then calls HEAP-INCREASE-KEY.",
      },
    ],
  },
  {
    id: "cs211-lec9",
    name: "Lecture 9: Graphs",
    description: "Graph terminology, representations, and traversal algorithms.",
    questions: [
      {
        id: "cs211-lec9-q1",
        text: "Which of the following best describes the relationship representation in a graph compared to a tree?",
        options: [
          "Graphs are 1:n structures.",
          "Graphs are restricted to parent-child relations.",
          "Graphs are n:n structures.",
          "Trees can represent relations between any two nodes directly.",
        ],
        correctIndex: 2,
        explanation:
          "Graphs are generalizations of trees that are not restricted to parent-child relations and act as n:n data structures.",
      },
      {
        id: "cs211-lec9-q2",
        text: "What does a simple graph NOT contain?",
        options: [
          "Vertices and edges",
          "Directed edges and weights",
          "Multiple edges between the same pair of vertices and self-loops",
          "Connected components",
        ],
        correctIndex: 2,
        explanation:
          "Simple graph properties include having no multiple edges between the same pair of vertices and no self-loops.",
      },
      {
        id: "cs211-lec9-q3",
        text: "A graph in which two vertices can be joined by multiple edges but without self-loops is called a:",
        options: ["Simple graph", "Multigraph", "Pseudograph", "Complete graph"],
        correctIndex: 1,
        explanation:
          "A multigraph allows multiple edges between the same pair of vertices but contains no self-loops.",
      },
      {
        id: "cs211-lec9-q4",
        text: "Which type of graph allows both multiple edges between the same vertices and self-loops?",
        options: ["Simple graph", "Directed graph", "Multigraph", "Pseudograph"],
        correctIndex: 3,
        explanation:
          "A pseudograph is a multigraph with the condition vi ≠ vj removed, allowing both multiple edges and self-loops.",
      },
      {
        id: "cs211-lec9-q5",
        text: "In graph terminology, what is a circuit?",
        options: [
          "A path where no edges are repeated and the start and end vertices are the same.",
          "A path where all vertices are different.",
          "A graph with no cycles.",
          "A path that passes through a vertex only once.",
        ],
        correctIndex: 0,
        explanation:
          "If the starting vertex equals the ending vertex (v1 = vn) and no edges are repeated, then the path is called a circuit.",
      },
      {
        id: "cs211-lec9-q6",
        text: "What is the main difference between a circuit and a cycle?",
        options: [
          "Every cycle is a circuit, but not every circuit is a cycle.",
          "Every circuit is a cycle, but not every cycle is a circuit.",
          "A cycle cannot have repeating edges, but a circuit can.",
          "There is no difference.",
        ],
        correctIndex: 0,
        explanation:
          "If all vertices in a circuit are different, then it’s called a cycle, meaning every cycle is a circuit, but not every circuit is a cycle.",
      },
      {
        id: "cs211-lec9-q7",
        text: "What does DAG stand for in graph theory?",
        options: [
          "Directed Adjacent Graph",
          "Directed Acyclic Graph",
          "Disconnected Acyclic Graph",
          "Disconnected Adjacent Graph",
        ],
        correctIndex: 1,
        explanation:
          "A Directed Acyclic Graph (DAG) is a type of directed graph having no cycles.",
      },
      {
        id: "cs211-lec9-q8",
        text: "If the degree of a vertex v is 0 (deg(v) = 0), what is it called?",
        options: [
          "Complete vertex",
          "Adjacent vertex",
          "Isolated vertex",
          "Incident vertex",
        ],
        correctIndex: 2,
        explanation:
          "If deg(v) = 0, meaning there are no edges incident with v, then v is an isolated vertex.",
      },
      {
        id: "cs211-lec9-q9",
        text: "A graph where there is an edge between each pair of distinct vertices is known as a:",
        options: [
          "Connected graph",
          "Complete graph",
          "Directed graph",
          "Bipartite graph",
        ],
        correctIndex: 1,
        explanation:
          "A complete graph has an edge between each pair of distinct vertices.",
      },
      {
        id: "cs211-lec9-q10",
        text: "The space complexity of an Adjacency Matrix for a graph with N vertices is:",
        options: ["O(N)", "O(N + |E|)", "O(N^2)", "O(log N)"],
        correctIndex: 2,
        explanation: "The space complexity for storing an Adjacency Matrix is O(N^2).",
      },
      {
        id: "cs211-lec9-q11",
        text: "The space complexity of an Adjacency List for a graph with N vertices and |E| edges is:",
        options: ["O(N^2)", "O(N + |E|)", "O(N * |E|)", "O(|E|^2)"],
        correctIndex: 1,
        explanation:
          "The space complexity for an Adjacency List is O(N x Dmax) or O(N + |E|).",
      },
      {
        id: "cs211-lec9-q12",
        text: "In an Adjacency Matrix, what is the time complexity to find if two nodes are connected?",
        options: ["O(1)", "O(N)", "O(V + E)", "O(log N)"],
        correctIndex: 0,
        explanation:
          "Finding if two nodes are connected in an Adjacency Matrix takes O(1) time complexity.",
      },
      {
        id: "cs211-lec9-q13",
        text: "What property holds true for the adjacency matrix of an undirected graph?",
        options: [
          "It is always sparse.",
          "It is symmetric across the diagonal.",
          "All diagonal elements are 1.",
          "It contains negative values.",
        ],
        correctIndex: 1,
        explanation:
          "The Adjacency matrix of an undirected graph is symmetric across the diagonal.",
      },
      {
        id: "cs211-lec9-q14",
        text: "An incidence matrix for a graph G = (V, E) has the dimensions:",
        options: ["|V| x |V|", "|E| x |E|", "|V| x |E|", "|V+E| x 1"],
        correctIndex: 2,
        explanation: "An incidence matrix for a graph G = (V,E) is a |V| x |E| matrix.",
      },
      {
        id: "cs211-lec9-q15",
        text: "Why cannot simple traversal algorithms used for trees be applied directly to graphs?",
        options: [
          "Graphs are always directed.",
          "Graphs cannot have weights.",
          "Graphs may have cycles resulting in infinite loops.",
          "Trees have more vertices than graphs.",
        ],
        correctIndex: 2,
        explanation:
          "Unlike trees, a graph may have cycles, so tree traversal algorithms would result in infinite loops.",
      },
      {
        id: "cs211-lec9-q16",
        text: "What is the time complexity of the Depth-First Search (DFS) algorithm?",
        options: ["O(V)", "O(E)", "O(V * E)", "O(V + E)"],
        correctIndex: 3,
        explanation:
          "DFS time complexity is O(V + E) since it visits each vertex once and explores its adjacency list.",
      },
      {
        id: "cs211-lec9-q17",
        text: "What is the time complexity of Breadth-First Search (BFS)?",
        options: ["O(V + E)", "O(V^2)", "O(E log V)", "O(V log E)"],
        correctIndex: 0,
        explanation: "The BFS Algorithm operates with a time complexity of O(V + E).",
      },
      {
        id: "cs211-lec9-q18",
        text: "Which algorithm finds an optimal sequence of choices to reach a certain goal state with the least time or effort?",
        options: [
          "Hopcroft and Tarjan Algorithm",
          "Depth-First Search",
          "Breadth-First Search",
          "Dijkstra’s Algorithm",
        ],
        correctIndex: 3,
        explanation:
          "Dijkstra's Algorithm is a shortest path algorithm designed to find an optimal sequence of choices to reach a goal state with the least effort.",
      },
      {
        id: "cs211-lec9-q19",
        text: "What is the total time complexity of Dijkstra’s Algorithm when using a Simple Array?",
        options: ["O(E log V)", "O(V^2)", "O(V + E)", "O(log V)"],
        correctIndex: 1,
        explanation:
          "When using a Simple Array, searching for the minimum distance for all vertices yields a total complexity of O(V^2).",
      },
      {
        id: "cs211-lec9-q20",
        text: "What is the total time complexity of Dijkstra’s Algorithm when using a Min Heap (Priority Queue)?",
        options: ["O(V^2)", "O(E log V)", "O(V + E)", "O(V^3)"],
        correctIndex: 1,
        explanation:
          "Using a Min Heap (Priority Queue), the extract-min and decrease-key operations yield a total complexity of approximately O(E log V).",
      },
      {
        id: "cs211-lec9-q21",
        text: "In an Adjacency List, what is the time complexity to find the neighbors of a node?",
        options: ["O(1)", "O(N)", "O(Dmax)", "O(N^2)"],
        correctIndex: 2,
        explanation:
          "Finding neighbors in an adjacency list takes O(Dmax) time complexity, where Dmax is the Maximum Degree.",
      },
      {
        id: "cs211-lec9-q22",
        text: "An edge connecting two vertices is said to be ________ with them.",
        options: ["Adjacent", "Incident", "Isolated", "Complete"],
        correctIndex: 1,
        explanation: "An edge connecting to vertices is incident with them.",
      },
      {
        id: "cs211-lec9-q23",
        text: "A graph is considered connected if:",
        options: [
          "It has no cycles.",
          "It has no self-loops.",
          "There is an edge between every pair of vertices.",
          "There is a path from any vertex to any other vertex in the graph.",
        ],
        correctIndex: 3,
        explanation:
          "A graph G is connected if there is a path from any vertex to any other vertex in the graph.",
      },
      {
        id: "cs211-lec9-q24",
        text: "When modeling connectivity in a computer network using graphs, what do the vertices and edges represent?",
        options: [
          "Vertices represent distances and edges represent network connections.",
          "Vertices represent computers and edges represent network connections.",
          "Vertices represent network connections and edges represent computers.",
          "Only directed graphs can represent computer networks.",
        ],
        correctIndex: 1,
        explanation:
          "In network modeling, vertices represent computers and edges represent network connections between them.",
      },
      {
        id: "cs211-lec9-q25",
        text: "During Depth-First Graph Traversal, what happens if the current vertex has no adjacent vertex or all adjacent vertices are visited?",
        options: [
          "The algorithm terminates immediately.",
          "Backtrack to the predecessor of the vertex.",
          "Restart from an isolated vertex.",
          "Switch to Breadth-First Traversal.",
        ],
        correctIndex: 1,
        explanation:
          "If a vertex has no adjacent vertex or all of its adjacent vertices are visited, the DFS algorithm backtracks to the predecessor of that vertex.",
      },
      {
        id: "cs211-lec9-q26",
        text: "What happens in DFS if we backtrack to the first node and there are still unvisited vertices?",
        options: [
          "It means the graph has cycles.",
          "Pick another unvisited vertex and start over.",
          "Terminate the algorithm.",
          "Remove the unvisited vertices.",
        ],
        correctIndex: 1,
        explanation:
          "If there are still unvisited vertices upon returning to the start node (indicating a disconnected graph), DFS will pick another unvisited vertex and start over.",
      },
      {
        id: "cs211-lec9-q27",
        text: "Who developed the Depth-first search algorithm mentioned in the lecture?",
        options: ["Dijkstra", "Hopcroft and Tarjan", "Bellman and Ford", "Prim and Kruskal"],
        correctIndex: 1,
        explanation:
          "The Depth-first search algorithm was developed by Hopcroft and Tarjan.",
      },
      {
        id: "cs211-lec9-q28",
        text: "Which of the following is an application of graphs but NOT necessarily a shortest path application?",
        options: [
          "Finding the shortest road from a city to another on Google Maps.",
          "Directing a data packet between two computers.",
          "Finding an acceptable order for finishing subtasks in a complex activity.",
          "Routing a phone call between two mobile phones.",
        ],
        correctIndex: 2,
        explanation:
          "Finding an acceptable order for finishing subtasks is an application of graphs, whereas finding routes, maps, and directing data packets directly rely on shortest path algorithms.",
      },
      {
        id: "cs211-lec9-q29",
        text: "A graph whose edges are directed from one node 'i' to another node 'j', with no edge from 'j' to 'i' on that same connection, is a:",
        options: ["Weighted graph", "Multigraph", "Directed graph (digraph)", "Pseudograph"],
        correctIndex: 2,
        explanation:
          "A directed graph (digraph) is a graph whose edges are directed from one node i to another one j and there is no edge from j to i.",
      },
      {
        id: "cs211-lec9-q30",
        text: "What defines a simple path in a graph?",
        options: [
          "It must start and end at the same vertex.",
          "It passes through a vertex only once.",
          "It contains multiple edges between the same vertices.",
          "It visits every edge in the graph.",
        ],
        correctIndex: 1,
        explanation: "A simple path is defined as a path that passes through a vertex only once.",
      },
    ],
  },
  {
    id: "cs211-lec10",
    name: "Lecture 10: Hashing",
    description: "Hash functions, hash tables, and collision resolution techniques.",
    questions: [
      {
        id: "cs211-lec10-q1",
        text: "What is the time complexity of a sequential search algorithm?",
        options: ["O(1)", "O(log2n)", "O(n)", "O(n^2)"],
        correctIndex: 2,
        explanation:
          "Sequential search searches the list by comparing the target element with list elements, resulting in a time complexity of O(n).",
      },
      {
        id: "cs211-lec10-q2",
        text: "What is a prerequisite for using a binary search algorithm?",
        options: [
          "The array must be empty",
          "The array must be sorted",
          "The array must contain only integers",
          "The array must have an even number of elements",
        ],
        correctIndex: 1,
        explanation:
          "Binary search has a time complexity of O(log2n) and requires a sorted array.",
      },
      {
        id: "cs211-lec10-q3",
        text: "If a search algorithm has an order less than log2n, what characteristic must it possess?",
        options: [
          "It must be comparison-based",
          "It cannot be comparison-based",
          "It must use a linked list",
          "It requires a sorted array",
        ],
        correctIndex: 1,
        explanation:
          "Devising a search algorithm with order less than log2n means it cannot be comparison-based.",
      },
      {
        id: "cs211-lec10-q4",
        text: "In the context of hashing, what is the array structure where data is saved called?",
        options: ["Binary Tree", "Linked List", "Hash Table", "Data Array"],
        correctIndex: 2,
        explanation:
          "Data is saved in an array structure called a Hash Table to be able to insert and retrieve data efficiently.",
      },
      {
        id: "cs211-lec10-q5",
        text: "What is the field of a record that determines its place in a hash table called?",
        options: ["Index", "Key", "Hash", "Pointer"],
        correctIndex: 1,
        explanation:
          "The place of each record in the table depends on a chosen field of that record called the Key.",
      },
      {
        id: "cs211-lec10-q6",
        text: "What is the role of a hash function?",
        options: [
          "To sort the data in the array",
          "To map each key into a number in the range from 0 to TableSize - 1",
          "To resolve collisions automatically",
          "To compress the size of the array",
        ],
        correctIndex: 1,
        explanation:
          "Each key is mapped into some number in the range from 0 to TableSize - 1, and this mapping process is called a hash function.",
      },
      {
        id: "cs211-lec10-q7",
        text: "What occurs when a hashing function generates the same index value for two different keys?",
        options: ["Truncation", "Folding", "Chaining", "Collision"],
        correctIndex: 3,
        explanation:
          "If a hashing function generates the same value twice this is called a Collision.",
      },
      {
        id: "cs211-lec10-q8",
        text: "Which of the following is NOT listed as a property of a good hash function?",
        options: [
          "It should minimize collisions",
          "It must always use linked lists",
          "It should be efficiently computable",
          "It must return a number from 0 to table-size",
        ],
        correctIndex: 1,
        explanation:
          "Properties of good hash functions include returning a number from 0 to table-size, being efficiently computable, and minimizing collisions.",
      },
      {
        id: "cs211-lec10-q9",
        text: "Which hash function method ignores part of the key and uses the remaining part as the index?",
        options: ["Truncation", "Folding", "Modular Arithmetic", "Chaining"],
        correctIndex: 0,
        explanation:
          "Truncation is a method where you ignore part of the key and use the remaining part directly as the index.",
      },
      {
        id: "cs211-lec10-q10",
        text: "What is a disadvantage of the Truncation hashing method?",
        options: [
          "It is computationally very slow",
          "It requires complex multiplication",
          "It often fails to distribute keys evenly through the table",
          "It causes primary clustering",
        ],
        correctIndex: 2,
        explanation:
          "Truncation is a very fast method, but it often fails to distribute the keys evenly through the table.",
      },
      {
        id: "cs211-lec10-q11",
        text: "Which hash function method partitions the key into several parts and combines them using addition or multiplication?",
        options: ["Modular Arithmetic", "Folding", "Truncation", "Probing"],
        correctIndex: 1,
        explanation:
          "Folding partitions the key into several parts and combines the parts in a convenient way (often using addition or multiplication) to obtain the index.",
      },
      {
        id: "cs211-lec10-q12",
        text: "Why does the Folding method often achieve a better spread of indices than Truncation?",
        options: [
          "Because it ignores the middle digits",
          "Because it is easier to compute",
          "Because all information in the key can affect the value of the function",
          "Because it uses primary clustering",
        ],
        correctIndex: 2,
        explanation:
          "Since all information in the key can affect the value of the function, folding often achieves a better spread of indices than does truncation by itself.",
      },
      {
        id: "cs211-lec10-q13",
        text: "If a hash function is defined as h(key) = Key % TableSize, which method is being used?",
        options: ["Folding", "Truncation", "Modular Arithmetic", "Quadratic Probing"],
        correctIndex: 2,
        explanation:
          "Modular Arithmetic defines the index to be the modulo arithmetic of the search value with some fix number, such as h(key) = Key % TableSize.",
      },
      {
        id: "cs211-lec10-q14",
        text: "Using Modular Arithmetic where TableSize is 701, what is the hash value for the key 580625685?",
        options: ["1", "2", "3", "4"],
        correctIndex: 2,
        explanation:
          "A typical way to create a hash value is (Key mod TableSize). For 580625685 mod 701, the hash value is 3.",
      },
      {
        id: "cs211-lec10-q15",
        text: "In the Chaining method for collision resolution, where are elements that hash to the same slot stored?",
        options: [
          "In the next available empty spot in the array",
          "In a linked list",
          "In a separate hash table",
          "They overwrite the existing element",
        ],
        correctIndex: 1,
        explanation: "Chaining stores all elements that hash to the same slot in a linked list.",
      },
      {
        id: "cs211-lec10-q16",
        text: "Where is the pointer to the head of the linked list stored when using the Chaining method?",
        options: [
          "In the key itself",
          "At the end of the array",
          "In the hash table slot",
          "In a secondary array",
        ],
        correctIndex: 2,
        explanation:
          "In Chaining, you store a pointer to the head of the linked list in the hash table slot.",
      },
      {
        id: "cs211-lec10-q17",
        text: "Which collision resolution strategy stores all elements directly within the hash table itself?",
        options: ["Chaining", "Open Addressing", "Folding", "Truncation"],
        correctIndex: 1,
        explanation: "In Open Addressing, all elements are stored in the hash table itself.",
      },
      {
        id: "cs211-lec10-q18",
        text: "What is the simplest method of Open Addressing that performs a sequential search for an empty location?",
        options: ["Quadratic Probing", "Chaining", "Folding", "Linear Probing"],
        correctIndex: 3,
        explanation:
          "Linear Probing is the simplest method to resolve a collision; it starts with the hash address and does a sequential search through the table for an empty location.",
      },
      {
        id: "cs211-lec10-q19",
        text: "What happens in Linear Probing if the search for an empty location reaches the last index of the table?",
        options: [
          "The program throws an error",
          "The table size is doubled automatically",
          "The search proceeds to the first location of the table",
          "The key is discarded",
        ],
        correctIndex: 2,
        explanation:
          "In Linear Probing, the table should be considered circular, so that when the last location is reached, the search proceeds to the first location of the table.",
      },
      {
        id: "cs211-lec10-q20",
        text: "What negative effect is commonly caused by Linear Probing when blocks of occupied cells start forming?",
        options: ["Secondary clustering", "Primary clustering", "Hash fragmentation", "Pointer overhead"],
        correctIndex: 1,
        explanation:
          "In Linear Probing, even if the table is relatively empty, blocks of occupied cells start forming. This effect is known as primary clustering.",
      },
      {
        id: "cs211-lec10-q21",
        text: "How does primary clustering impact the performance of inserting new keys?",
        options: [
          "It requires keys to be linked together in lists",
          "It forces the hash function to change",
          "It requires several attempts to resolve collisions for keys hashing into the cluster",
          "It causes the table to shrink in size",
        ],
        correctIndex: 2,
        explanation:
          "Primary clustering means that any key that hashes into the cluster will require several attempts to resolve the collision, and then it will add to the cluster.",
      },
      {
        id: "cs211-lec10-q22",
        text: "Which collision resolution method is specifically used to eliminate the primary clustering problem of linear probing?",
        options: ["Chaining", "Truncation", "Modular Arithmetic", "Quadratic Probing"],
        correctIndex: 3,
        explanation:
          "Quadratic probing is a collision resolution method that eliminates the primary clustering problem of linear probing.",
      },
      {
        id: "cs211-lec10-q23",
        text: "What is the popular formula used in Quadratic Probing to resolve collisions (where 'i' is the iteration number)?",
        options: [
          "f(key) = hash(key) + i",
          "f(key) = hash(key) * i",
          "f(key) = hash(key) + i^2",
          "f(key) = hash(key) % i",
        ],
        correctIndex: 2,
        explanation:
          "The popular choice for quadratic probing is f(key) = hash(key) + i^2, where i is the iteration number to resolve the collision.",
      },
      {
        id: "cs211-lec10-q24",
        text: "If a key maps to index 3 and it is occupied, what index is checked on the 2nd iteration of Quadratic Probing?",
        options: ["4", "5", "7", "12"],
        correctIndex: 2,
        explanation:
          "For the 2nd iteration of quadratic probing, you try hash(key) + 2^2, which is 3 + 4 = 7.",
      },
      {
        id: "cs211-lec10-q25",
        text: "When searching for a key using open addressing, when should the sequential search stop?",
        options: [
          "When the key is found or you reach an empty spot",
          "When you have checked exactly 10 slots",
          "When you reach the end of the array without looping",
          "Only when the key is found",
        ],
        correctIndex: 0,
        explanation:
          "When searching for a key, you keep moving forward until you find the key, or you reach an empty spot.",
      },
      {
        id: "cs211-lec10-q26",
        text: "When deleting a record from a hash table using open addressing, why must the location NOT be left as an ordinary empty spot?",
        options: [
          "Because it wastes memory",
          "Because it could interfere with searches",
          "Because the compiler will throw an error",
          "Because it prevents new insertions entirely",
        ],
        correctIndex: 1,
        explanation:
          "When a record is deleted, the location must not be left as an ordinary 'empty spot' since that could interfere with searches.",
      },
      {
        id: "cs211-lec10-q27",
        text: "How is a deleted record's spot handled in open addressing to preserve search integrity?",
        options: [
          "All subsequent elements are shifted backwards",
          "The spot is filled with a random number",
          "The location is marked in a special way",
          "The table size is reduced by one",
        ],
        correctIndex: 2,
        explanation:
          "The location must be marked in some special way so that a search can tell that the spot used to have something in it.",
      },
      {
        id: "cs211-lec10-q28",
        text: "What is the average time complexity for search, insertion, and deletion operations in a hash table?",
        options: ["O(1)", "O(log2n)", "O(n)", "O(n^2)"],
        correctIndex: 0,
        explanation:
          "Hash tables perform search, insertion, and deletion in O(1) time on average, meaning operations are very fast under normal conditions.",
      },
      {
        id: "cs211-lec10-q29",
        text: "In the worst case scenario where many collisions occur, how long can search, insertion, and deletion operations take?",
        options: ["O(1)", "O(log2n)", "O(n)", "O(n^2)"],
        correctIndex: 2,
        explanation:
          "In the worst case where many collisions occur, these operations can take up to O(n) time.",
      },
      {
        id: "cs211-lec10-q30",
        text: "When designing a hash table, what are the three main things a developer needs to decide on?",
        options: [
          "Data type, Table size, Node structure",
          "Hashing function, Table size, Collision resolution method",
          "Truncation method, Folding method, Array size",
          "Linked list type, Hash function, Key type",
        ],
        correctIndex: 1,
        explanation:
          "When using a hash table, we need to decide on: Hashing function, Table size, and Collision resolution method.",
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
