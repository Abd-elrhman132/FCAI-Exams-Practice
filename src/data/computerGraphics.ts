import { Chapter, Subject } from "@/types";

const chapters: Chapter[] = [
  {
    "id": "cs251-part-1",
    "name": "Part 1: Image Fundamentals",
    "description": "Photos, digital images, pixels, color depth, RGB values, and resolution.",
    "questions": [
      {
        "id": "CS251-pr1-q1",
        "text": "According to the notes, which term is used specifically for an image taken by a camera?",
        "options": [
          "Image",
          "Photo",
          "Picture",
          "Graphic"
        ],
        "correctIndex": 1,
        "explanation": "A 'Photo' is defined as an image taken specifically by a camera."
      },
      {
        "id": "CS251-pr1-q2",
        "text": "Which term is often used in technical or digital contexts and includes file formats like JPG and PNG?",
        "options": [
          "Photo",
          "Picture",
          "Image",
          "Matrix"
        ],
        "correctIndex": 2,
        "explanation": "The term 'Image' is often used in technical or digital contexts."
      },
      {
        "id": "CS251-pr1-q3",
        "text": "What is the structural representation of a digital image?",
        "options": [
          "A 1D array",
          "A 2D array or matrix consisting of rows and columns",
          "A 3D coordinate system",
          "A sequence of vectors"
        ],
        "correctIndex": 1,
        "explanation": "A digital image is represented as a 2-dimensional array (2D array) or matrix organized into a grid system."
      },
      {
        "id": "CS251-pr1-q4",
        "text": "What is the smallest unit of a digital image?",
        "options": [
          "Dot",
          "Byte",
          "Pixel",
          "Coordinate"
        ],
        "correctIndex": 2,
        "explanation": "A pixel is defined as the smallest unit of a digital image."
      },
      {
        "id": "CS251-pr1-q5",
        "text": "In which mathematical quadrant are digital images typically represented according to the notes?",
        "options": [
          "First Quadrant (Q1)",
          "Second Quadrant (Q2)",
          "Third Quadrant (Q3)",
          "Fourth Quadrant (Q4)"
        ],
        "correctIndex": 3,
        "explanation": "Digital images are represented in the Fourth Quadrant (Q4)."
      },
      {
        "id": "CS251-pr1-q6",
        "text": "How many bits are used to represent each pixel in a Black & White image?",
        "options": [
          "1 bit",
          "8 bits",
          "24 bits",
          "32 bits"
        ],
        "correctIndex": 0,
        "explanation": "Each pixel in a Black & White image is represented by only 1 bit (0 or 1)."
      },
      {
        "id": "CS251-pr1-q7",
        "text": "What does a pixel value of 0 and 1 represent in a Black & White image, respectively?",
        "options": [
          "White and Black",
          "Black and White",
          "Gray and White",
          "Black and Gray"
        ],
        "correctIndex": 1,
        "explanation": "In a Black & White image, 0 represents black and 1 represents white."
      },
      {
        "id": "CS251-pr1-q8",
        "text": "How much memory is used to represent a single pixel in a Grayscale image?",
        "options": [
          "1 bit",
          "1 byte (8 bits)",
          "3 bytes",
          "1 kilobyte"
        ],
        "correctIndex": 1,
        "explanation": "Each pixel in a Gray image is represented by 1 byte."
      },
      {
        "id": "CS251-pr1-q9",
        "text": "How many color levels exist in a Grayscale image?",
        "options": [
          "2",
          "128",
          "256",
          "16,777,216"
        ],
        "correctIndex": 2,
        "explanation": "A gray image ranges from 0 to 255, giving 256 levels of gray."
      },
      {
        "id": "CS251-pr1-q10",
        "text": "Which color model is used for colored images?",
        "options": [
          "CMYK",
          "HSV",
          "RGB",
          "Grayscale"
        ],
        "correctIndex": 2,
        "explanation": "Colored images use 3 colors (RGB)."
      },
      {
        "id": "CS251-pr1-q11",
        "text": "What is the total number of bits required for one pixel in a standard colored image?",
        "options": [
          "8 bits",
          "16 bits",
          "24 bits",
          "32 bits"
        ],
        "correctIndex": 2,
        "explanation": "Each color uses 1 byte, so 1 pixel requires 3 bytes, which equals 24 bits."
      },
      {
        "id": "CS251-pr1-q12",
        "text": "What is the total number of possible colors in a 24-bit RGB image?",
        "options": [
          "256",
          "65,536",
          "1,048,576",
          "16,777,216"
        ],
        "correctIndex": 3,
        "explanation": "A colored image can represent 2^24 or 16,777,216 total colors."
      },
      {
        "id": "CS251-pr1-q13",
        "text": "What does 'Density of light' represent?",
        "options": [
          "The physical size of the screen",
          "The amount of light falling on a pixel",
          "The number of pixels per inch",
          "The refresh rate of the monitor"
        ],
        "correctIndex": 1,
        "explanation": "Density of light is a value representing the amount of light falling on a pixel."
      },
      {
        "id": "CS251-pr1-q14",
        "text": "What happens to the color as the density of light value approaches 255?",
        "options": [
          "It becomes darker",
          "It becomes lighter",
          "It becomes transparent",
          "It becomes red"
        ],
        "correctIndex": 1,
        "explanation": "As the value approaches 255, the color becomes lighter."
      },
      {
        "id": "CS251-pr1-q15",
        "text": "What happens to the color as the density of light value approaches 0?",
        "options": [
          "It becomes lighter",
          "It becomes darker",
          "It turns blue",
          "It disappears"
        ],
        "correctIndex": 1,
        "explanation": "As the value approaches 0, the color becomes darker."
      },
      {
        "id": "CS251-pr1-q16",
        "text": "What is the RGB value for pure white?",
        "options": [
          "RGB(0,0,0)",
          "RGB(128,128,128)",
          "RGB(255,255,255)",
          "RGB(255,0,0)"
        ],
        "correctIndex": 2,
        "explanation": "RGB(255,255,255) represents white."
      },
      {
        "id": "CS251-pr1-q17",
        "text": "What is the RGB value for pure black?",
        "options": [
          "RGB(255,255,255)",
          "RGB(0,0,0)",
          "RGB(1,1,1)",
          "RGB(0,255,0)"
        ],
        "correctIndex": 1,
        "explanation": "RGB(0,0,0) represents black."
      },
      {
        "id": "CS251-pr1-q18",
        "text": "How is image resolution generally defined in the context of pixel count?",
        "options": [
          "The physical size of the screen",
          "The total number of pixels in an image",
          "The color depth of the image",
          "The refresh rate"
        ],
        "correctIndex": 1,
        "explanation": "Resolution refers to the total number of pixels in an image."
      },
      {
        "id": "CS251-pr1-q19",
        "text": "What unit is typically used to measure resolution physically?",
        "options": [
          "DPI (Dots Per Inch)",
          "FPS (Frames Per Second)",
          "Hz (Hertz)",
          "Bits"
        ],
        "correctIndex": 0,
        "explanation": "DPI (Dots Per Inch) is the unit used to measure physical resolution."
      },
      {
        "id": "CS251-pr1-q20",
        "text": "If a smartphone screen measures 16.5 cm diagonally, what is its approximate screen size in inches? (Given 1 Inch = 2.54 cm)",
        "options": [
          "5.5 inches",
          "6.0 inches",
          "6.5 inches",
          "7.0 inches"
        ],
        "correctIndex": 2,
        "explanation": "Screen size = Length Diagonal (cm) / 2.54. So, 16.5 / 2.54 = 6.5 inches."
      }
    ]
  },
  {
    "id": "cs251-part-2",
    "name": "Part 2: Lines and Correlation",
    "description": "Straight-line equations, least squares calculations, and correlation coefficients.",
    "questions": [
      {
        "id": "CS251-pr2-q1",
        "text": "What is the mathematical equation for a straight line?",
        "options": [
          "y = mx^2 + c",
          "y = mx + c",
          "y = c^x + m",
          "x = my + c"
        ],
        "correctIndex": 1,
        "explanation": "The standard equation for a straight line is y = mx + c."
      },
      {
        "id": "CS251-pr2-q2",
        "text": "In the least squares method, what is the formula for the denominator 'D'?",
        "options": [
          "n(Sum x^2) - (Sum x)^2",
          "n(Sum x) - (Sum y)^2",
          "(Sum x^2) - n(Sum x)^2",
          "n(Sum xy) - (Sum x)(Sum y)"
        ],
        "correctIndex": 0,
        "explanation": "The denominator D is given by n * Sum(x^2) - (Sum x)^2."
      },
      {
        "id": "CS251-pr2-q3",
        "text": "What is the numerator for calculating the slope 'm' in the least squares method?",
        "options": [
          "n(Sum x^2) - (Sum x)^2",
          "n(Sum xy) - (Sum x)(Sum y)",
          "Sum(y)Sum(x^2) - Sum(x)Sum(xy)",
          "Sum(x) - Sum(y)"
        ],
        "correctIndex": 1,
        "explanation": "The numerator for m is n * Sum(xy) - Sum(x) * Sum(y)."
      },
      {
        "id": "CS251-pr2-q4",
        "text": "Which of the following is a valid formula for calculating the intercept 'C'?",
        "options": [
          "(Sum y / n) - m(Sum x / n)",
          "n(Sum xy) / D",
          "(Sum x / n) + m(Sum y / n)",
          "Sum(x^2) / Sum(y)"
        ],
        "correctIndex": 0,
        "explanation": "C can be calculated using the formula: C = (Sum y / n) - m(Sum x / n)."
      },
      {
        "id": "CS251-pr2-q5",
        "text": "In the least squares example provided in the notes, what is the sum of X (Sum X)?",
        "options": [
          "15",
          "22",
          "59",
          "114"
        ],
        "correctIndex": 1,
        "explanation": "According to the table in the example, the sum of the X values is 22."
      },
      {
        "id": "CS251-pr2-q6",
        "text": "In the least squares example provided in the notes, what is the sum of Y (Sum Y)?",
        "options": [
          "22",
          "45",
          "59",
          "293.1"
        ],
        "correctIndex": 2,
        "explanation": "According to the table, the sum of the Y values is 59."
      },
      {
        "id": "CS251-pr2-q7",
        "text": "In the least squares example provided in the notes, what is the sum of XY (Sum XY)?",
        "options": [
          "114",
          "293.1",
          "59",
          "22"
        ],
        "correctIndex": 1,
        "explanation": "According to the table, the sum of the XY values is 293.1."
      },
      {
        "id": "CS251-pr2-q8",
        "text": "In the least squares example provided in the notes, what is the sum of X squared (Sum X^2)?",
        "options": [
          "22",
          "59",
          "114",
          "293.1"
        ],
        "correctIndex": 2,
        "explanation": "According to the table, the sum of X^2 is 114."
      },
      {
        "id": "CS251-pr2-q9",
        "text": "In the given example, what is the calculated value for the denominator 'D'?",
        "options": [
          "68",
          "86",
          "114",
          "293.1"
        ],
        "correctIndex": 1,
        "explanation": "D = 5(114) - (22)^2 = 570 - 484 = 86."
      },
      {
        "id": "CS251-pr2-q10",
        "text": "In the given example, what is the approximate calculated value for the slope 'm'?",
        "options": [
          "1.234",
          "1.948",
          "3.23",
          "5.0"
        ],
        "correctIndex": 1,
        "explanation": "m = (5 * 293.1 - 22 * 59) / 86 = 167.5 / 86, which is approximately 1.948."
      },
      {
        "id": "CS251-pr2-q11",
        "text": "In the given example, what is the approximate calculated value for the intercept 'c'?",
        "options": [
          "1.948",
          "2.5",
          "3.23",
          "5.5"
        ],
        "correctIndex": 2,
        "explanation": "c is calculated to be approximately 3.23."
      },
      {
        "id": "CS251-pr2-q12",
        "text": "Using the line equation y = 1.948x + 3.23 from the example, what is the estimated value of y when x = 5?",
        "options": [
          "10.5",
          "11.2",
          "12.97",
          "14.1"
        ],
        "correctIndex": 2,
        "explanation": "y = 1.948(5) + 3.23 = 9.74 + 3.23 = 12.97."
      },
      {
        "id": "CS251-pr2-q13",
        "text": "What does the Correlation Coefficient measure?",
        "options": [
          "The physical distance between two points",
          "The strength and direction of a linear relationship",
          "The exact slope of a curve",
          "The number of pixels in an image"
        ],
        "correctIndex": 1,
        "explanation": "The correlation coefficient measures the strength and direction of a linear relationship."
      },
      {
        "id": "CS251-pr2-q14",
        "text": "What is the possible range of values for the Correlation Coefficient (r)?",
        "options": [
          "0 to 1",
          "-1 to 1",
          "-100 to 100",
          "0 to 255"
        ],
        "correctIndex": 1,
        "explanation": "The correlation coefficient always falls between -1 and 1."
      },
      {
        "id": "CS251-pr2-q15",
        "text": "What does it mean if the correlation coefficient r = 0?",
        "options": [
          "Perfect positive correlation",
          "Perfect negative correlation",
          "No correlation",
          "An error in calculation"
        ],
        "correctIndex": 2,
        "explanation": "If r = 0, then there is no correlation."
      },
      {
        "id": "CS251-pr2-q16",
        "text": "What does a correlation coefficient approaching 1 (r ~ 1) indicate?",
        "options": [
          "Positive linear correlation",
          "Negative linear correlation",
          "No correlation",
          "Curved correlation"
        ],
        "correctIndex": 0,
        "explanation": "If r approaches 1, it indicates a positive linear correlation."
      },
      {
        "id": "CS251-pr2-q17",
        "text": "What does a correlation coefficient approaching -1 (r ~ -1) indicate?",
        "options": [
          "Positive linear correlation",
          "Negative linear correlation",
          "No correlation",
          "Infinite correlation"
        ],
        "correctIndex": 1,
        "explanation": "If r approaches -1, it indicates a negative linear correlation."
      },
      {
        "id": "CS251-pr2-q18",
        "text": "In the formula for the correlation coefficient (r), what is the denominator?",
        "options": [
          "D",
          "Dx + Dy",
          "Square root of (Dx * Dy)",
          "n"
        ],
        "correctIndex": 2,
        "explanation": "The denominator for r is the square root of (Dx * Dy)."
      },
      {
        "id": "CS251-pr2-q19",
        "text": "What is the formula for Dx in the correlation coefficient calculation?",
        "options": [
          "n(Sum y^2) - (Sum y)^2",
          "n(Sum x^2) - (Sum x)^2",
          "n(Sum xy) - (Sum x)(Sum y)",
          "Sum x^2 / n"
        ],
        "correctIndex": 1,
        "explanation": "Dx is calculated as n * Sum(x^2) - (Sum x)^2."
      },
      {
        "id": "CS251-pr2-q20",
        "text": "What is the formula for Dy in the correlation coefficient calculation?",
        "options": [
          "n(Sum x^2) - (Sum x)^2",
          "n(Sum xy) - (Sum x)(Sum y)",
          "n(Sum y^2) - (Sum y)^2",
          "Sum y / n"
        ],
        "correctIndex": 2,
        "explanation": "Dy is calculated as n * Sum(y^2) - (Sum y)^2."
      }
    ]
  },
  {
    "id": "cs251-part-3",
    "name": "Part 3: Geometric Shapes",
    "description": "Points, lines, rectangles, squares, circles, ellipses, and arcs.",
    "questions": [
      {
        "id": "CS251-pr3-q1",
        "text": "How is a point (or pixel) geometrically defined in the provided notes?",
        "options": [
          "By an angle and radius",
          "By coordinates P(x,y)",
          "By a matrix",
          "By a single scalar value"
        ],
        "correctIndex": 1,
        "explanation": "A point is represented by coordinates P(x, y)."
      },
      {
        "id": "CS251-pr3-q2",
        "text": "According to the geometric shapes section, how many points (n) are required to define a straight line?",
        "options": [
          "n = 1",
          "n >= 2",
          "n = 3",
          "n >= 4"
        ],
        "correctIndex": 1,
        "explanation": "A straight line connects points P(x1, y1) to P(x2, y2) where n >= 2 (n is number of points)."
      },
      {
        "id": "CS251-pr3-q3",
        "text": "What specific condition must be met for a rectangle to be classified as a square?",
        "options": [
          "Width > Height",
          "Height > Width",
          "Width = Height",
          "Area = Perimeter"
        ],
        "correctIndex": 2,
        "explanation": "For a square, the width must equal the height (W = h)."
      },
      {
        "id": "CS251-pr3-q4",
        "text": "What defines a 'Landscape' rectangle?",
        "options": [
          "Width is less than Height (W < H)",
          "Width is greater than Height (W > H)",
          "Width equals Height (W = H)",
          "It contains an image of nature"
        ],
        "correctIndex": 1,
        "explanation": "A landscape rectangle is one where the Width is greater than the Height (W > H)."
      },
      {
        "id": "CS251-pr3-q5",
        "text": "What defines a 'Portrait' rectangle?",
        "options": [
          "Height is greater than Width (H > W)",
          "Width is greater than Height (W > H)",
          "Height equals Width (H = W)",
          "It contains a face"
        ],
        "correctIndex": 0,
        "explanation": "A portrait rectangle is one where the Height is greater than the Width (H > W)."
      },
      {
        "id": "CS251-pr3-q6",
        "text": "What are the two defining properties of a circle mentioned in the notes?",
        "options": [
          "Major and minor axes",
          "Center (c) and Radius (r)",
          "Width and Height",
          "Focal points"
        ],
        "correctIndex": 1,
        "explanation": "A circle is defined by its center 'c' at coordinates (x,y) and its radius 'r'."
      },
      {
        "id": "CS251-pr3-q7",
        "text": "For a horizontal ellipse, what is the relationship between the x-radius (rx) and y-radius (ry)?",
        "options": [
          "ry > rx",
          "ry < rx",
          "ry = rx",
          "rx + ry = 1"
        ],
        "correctIndex": 1,
        "explanation": "In a horizontal ellipse, the y-radius is less than the x-radius (ry < rx)."
      },
      {
        "id": "CS251-pr3-q8",
        "text": "For a vertical ellipse, what is the relationship between the x-radius (rx) and y-radius (ry)?",
        "options": [
          "ry < rx",
          "ry > rx",
          "ry = rx",
          "rx * ry = 1"
        ],
        "correctIndex": 1,
        "explanation": "In a vertical ellipse, the y-radius is greater than the x-radius (ry > rx)."
      },
      {
        "id": "CS251-pr3-q9",
        "text": "Which geometric shape is visually represented simply as a curved line segment in the shapes list?",
        "options": [
          "Circle",
          "Ellipse",
          "Arc",
          "Square"
        ],
        "correctIndex": 2,
        "explanation": "An Arc is listed as a geometric shape, depicted as a curved line segment."
      },
      {
        "id": "CS251-pr3-q10",
        "text": "How many points define the basic square shown in the notes?",
        "options": [
          "Two",
          "Three",
          "Four",
          "Five"
        ],
        "correctIndex": 2,
        "explanation": "The square diagram explicitly labels four corner points: P(x1,y1) through P(x4,y4)."
      }
    ]
  },
  {
    "id": "cs251-part-4",
    "name": "Part 4: 2D Transformations",
    "description": "Translation, rotation, scaling, reflection, shearing, and transformation matrices.",
    "questions": [
      {
        "id": "CS251-pr4-q1",
        "text": "Which of the following belongs to the 'Fundamental Geometrical' 2D transformations?",
        "options": [
          "Reflection",
          "Shearing",
          "Translation",
          "Projection"
        ],
        "correctIndex": 2,
        "explanation": "Translation, Rotation, and Scaling are listed as Fundamental Geometrical transformations."
      },
      {
        "id": "CS251-pr4-q2",
        "text": "Which of the following belongs to the 'Derived Geometrical' 2D transformations?",
        "options": [
          "Translation",
          "Rotation",
          "Shearing",
          "Scaling"
        ],
        "correctIndex": 2,
        "explanation": "Reflection and Shearing are listed as Derived Geometrical transformations."
      },
      {
        "id": "CS251-pr4-q3",
        "text": "What is the algebraic equation for the new x-coordinate (X') after translation?",
        "options": [
          "X' = X * Tx",
          "X' = X + Tx",
          "X' = X - Ty",
          "X' = X * Cos(Tx)"
        ],
        "correctIndex": 1,
        "explanation": "The equation for translation is X' = X + Tx."
      },
      {
        "id": "CS251-pr4-q4",
        "text": "What are the algebraic equations for rotating a point by angle theta around the origin?",
        "options": [
          "X' = X + Cos(theta), Y' = Y + Sin(theta)",
          "X' = X Cos(theta) - Y Sin(theta), Y' = X Sin(theta) + Y Cos(theta)",
          "X' = X Cos(theta) + Y Sin(theta), Y' = -X Sin(theta) + Y Cos(theta)",
          "X' = X * Sx, Y' = Y * Sy"
        ],
        "correctIndex": 1,
        "explanation": "The rotation formulas are X' = X Cos(theta) - Y Sin(theta) and Y' = X Sin(theta) + Y Cos(theta)."
      },
      {
        "id": "CS251-pr4-q5",
        "text": "Which transformation matrix features [Cos(theta), -Sin(theta), 0] in its top row?",
        "options": [
          "Translation Matrix",
          "Scaling Matrix",
          "Counter-clockwise Rotation Matrix",
          "Clockwise Rotation Matrix"
        ],
        "correctIndex": 2,
        "explanation": "The counter-clockwise rotation matrix uses Cos(theta), -Sin(theta), 0 for its top row."
      },
      {
        "id": "CS251-pr4-q6",
        "text": "Which transformation matrix features [Cos(theta), Sin(theta), 0] in its top row?",
        "options": [
          "Translation",
          "Counter-clockwise Rotation",
          "Clockwise Rotation",
          "Shearing"
        ],
        "correctIndex": 2,
        "explanation": "The clockwise rotation matrix uses Cos(theta), Sin(theta), 0 for its top row."
      },
      {
        "id": "CS251-pr4-q7",
        "text": "In the proof for rotation, what do the original coordinates X and Y substitute to using polar coordinates (radius r and angle phi)?",
        "options": [
          "X = r Sin(phi), Y = r Cos(phi)",
          "X = r Cos(phi), Y = r Sin(phi)",
          "X = r + Cos(phi), Y = r + Sin(phi)",
          "X = Cos(phi)/r, Y = Sin(phi)/r"
        ],
        "correctIndex": 1,
        "explanation": "The proof uses X = r Cos(phi) and Y = r Sin(phi)."
      },
      {
        "id": "CS251-pr4-q8",
        "text": "What is the formula for calculating the new X coordinate (X') with a pivot point (Xr, Yr) for rotation?",
        "options": [
          "X' = Xr + (X-Xr)Cos(theta) - (Y-Yr)Sin(theta)",
          "X' = X Cos(theta) - Y Sin(theta) + Xr",
          "X' = (X+Xr)Cos(theta) - (Y+Yr)Sin(theta)",
          "X' = Xr Cos(theta) - Yr Sin(theta)"
        ],
        "correctIndex": 0,
        "explanation": "The formula with a pivot point is X' = Xr + (X-Xr)Cos(theta) - (Y-Yr)Sin(theta)."
      },
      {
        "id": "CS251-pr4-q9",
        "text": "What are the algebraic equations for scaling a point around the origin?",
        "options": [
          "X' = X + Sx, Y' = Y + Sy",
          "X' = X / Sx, Y' = Y / Sy",
          "X' = Sx * X, Y' = Sy * Y",
          "X' = Sx - X, Y' = Sy - Y"
        ],
        "correctIndex": 2,
        "explanation": "The scaling formulas are X' = Sx * X and Y' = Sy * Y."
      },
      {
        "id": "CS251-pr4-q10",
        "text": "What does it mean when scaling factors Sx and Sy are between 0 and 1?",
        "options": [
          "The size increases",
          "The size decreases (will be closer to original point)",
          "The shape is reflected",
          "The shape is translated"
        ],
        "correctIndex": 1,
        "explanation": "If Sx, Sy are between 0 and 1, the size decreases and points move closer."
      },
      {
        "id": "CS251-pr4-q11",
        "text": "What happens when the scaling factors Sx and Sy are greater than 1?",
        "options": [
          "The size increases (moves away from original point)",
          "The size decreases",
          "The shape disappears",
          "The shape rotates"
        ],
        "correctIndex": 0,
        "explanation": "If Sx, Sy > 1, the size increases and points move away."
      },
      {
        "id": "CS251-pr4-q12",
        "text": "What is the term used when the scaling factor Sx equals Sy?",
        "options": [
          "Differential scaling",
          "Uniform scaling",
          "Identity scaling",
          "Zero scaling"
        ],
        "correctIndex": 1,
        "explanation": "When Sx = Sy, scaling is done uniformly."
      },
      {
        "id": "CS251-pr4-q13",
        "text": "Which reflection matrix has the diagonal elements [1, -1, 1]?",
        "options": [
          "Reflection across the y-axis",
          "Reflection across the x-axis",
          "Reflection across the origin",
          "Reflection across y=x"
        ],
        "correctIndex": 1,
        "explanation": "Reflection across the x-axis negates the y coordinate, so the matrix diagonal is 1, -1, 1."
      },
      {
        "id": "CS251-pr4-q14",
        "text": "Which reflection matrix has the diagonal elements [-1, 1, 1]?",
        "options": [
          "Reflection across the x-axis",
          "Reflection across the y-axis",
          "Reflection across the origin",
          "Reflection across y=-x"
        ],
        "correctIndex": 1,
        "explanation": "Reflection across the y-axis negates the x coordinate, so the diagonal is -1, 1, 1."
      },
      {
        "id": "CS251-pr4-q15",
        "text": "Which reflection matrix has the diagonal elements [-1, -1, 1]?",
        "options": [
          "Reflection across the origin",
          "Reflection across the x-axis",
          "Reflection across the y-axis",
          "Reflection across y=x"
        ],
        "correctIndex": 0,
        "explanation": "Reflection across the origin negates both x and y, giving [-1, -1, 1] on the diagonal."
      },
      {
        "id": "CS251-pr4-q16",
        "text": "For a reflection across the line y = X, what does the matrix look like?",
        "options": [
          "Diagonal is [1, -1, 1]",
          "Diagonal is [-1, -1, 1]",
          "Top row is [0, 1, 0], middle row is [1, 0, 0]",
          "Top row is [0, -1, 0], middle row is [-1, 0, 0]"
        ],
        "correctIndex": 2,
        "explanation": "Reflection across y = x swaps x and y, so the first two rows are [0, 1, 0] and [1, 0, 0]."
      },
      {
        "id": "CS251-pr4-q17",
        "text": "What is the equation for shearing in the X direction?",
        "options": [
          "X' = X + Shx * Y",
          "X' = X * Shx",
          "Y' = Y + Shx * X",
          "X' = X + Shx"
        ],
        "correctIndex": 0,
        "explanation": "Shearing in the X direction uses the formula X' = X + Shx * Y."
      },
      {
        "id": "CS251-pr4-q18",
        "text": "What is the equation for shearing in the Y direction?",
        "options": [
          "X' = X + Shy * Y",
          "Y' = Y + Shy * X",
          "Y' = Y * Shy",
          "Y' = Y + Shy"
        ],
        "correctIndex": 1,
        "explanation": "Shearing in the Y direction uses the formula Y' = Y + Shy * X."
      },
      {
        "id": "CS251-pr4-q19",
        "text": "What is the top row of the transformation matrix for Shearing in the X direction?",
        "options": [
          "1  0  0",
          "0  1  0",
          "1  Shx  0",
          "Shx  1  0"
        ],
        "correctIndex": 2,
        "explanation": "The matrix for X-direction shearing has the top row [1, Shx, 0]."
      },
      {
        "id": "CS251-pr4-q20",
        "text": "How do you combine multiple translations (e.g., T1, T2, ... Tn)?",
        "options": [
          "Multiply them together",
          "Sum them together",
          "Subtract them",
          "Average them"
        ],
        "correctIndex": 1,
        "explanation": "Total translation Tx = Sum(Txi) and Ty = Sum(Tyi)."
      }
    ]
  },
  {
    "id": "cs251-part-5",
    "name": "Part 5: Curves and Splines",
    "description": "Raster and vector graphics, Bezier curves, and cubic spline equations.",
    "questions": [
      {
        "id": "CS251-pr5-q1",
        "text": "What do Raster Graphics consist of?",
        "options": [
          "Mathematical equations",
          "A set of mathematical shapes",
          "Pixels",
          "Control points"
        ],
        "correctIndex": 2,
        "explanation": "Raster graphics (images) consist of Pixels."
      },
      {
        "id": "CS251-pr5-q2",
        "text": "What do Vector Graphics consist of?",
        "options": [
          "Pixels",
          "A grid of colors",
          "A set of shapes",
          "A 3D mesh"
        ],
        "correctIndex": 2,
        "explanation": "Vector graphics consist of a set of shapes."
      },
      {
        "id": "CS251-pr5-q3",
        "text": "How many points define a Quadratic Bézier Curve?",
        "options": [
          "2 points",
          "3 points (a, b & single control point c)",
          "4 points",
          "5 points"
        ],
        "correctIndex": 1,
        "explanation": "A quadratic Bézier curve uses 3 points (start, end, and a single control point)."
      },
      {
        "id": "CS251-pr5-q4",
        "text": "How many points define a Cubic Bézier Curve?",
        "options": [
          "3 points",
          "4 points (a, b & two control points)",
          "5 points",
          "6 points"
        ],
        "correctIndex": 1,
        "explanation": "A cubic Bézier curve uses 4 points (start, end, and two control points)."
      },
      {
        "id": "CS251-pr5-q5",
        "text": "In the general equation for a Bézier Curve, what is the valid range for the parameter t (or u)?",
        "options": [
          "-1 <= t <= 1",
          "0 <= t <= 1",
          "0 <= t <= 100",
          "t > 0"
        ],
        "correctIndex": 1,
        "explanation": "The parameter t (or u) is restricted to the range 0 <= t <= 1."
      },
      {
        "id": "CS251-pr5-q6",
        "text": "What is the expression for the X coordinate in a Quadratic Bézier curve?",
        "options": [
          "X = X1(1-u) + X2(u)",
          "X = X1(1-u)^2 + 2X2 u(1-u) + X3 u^2",
          "X = X1 u^2 + X2(1-u)^2",
          "X = X1(1-u)^3 + 3X2 u(1-u)^2 + 3X3 u^2(1-u) + X4 u^3"
        ],
        "correctIndex": 1,
        "explanation": "The formula for the X coordinate of a quadratic Bézier curve is X = X1(1-u)^2 + 2X2 u(1-u) + X3 u^2."
      },
      {
        "id": "CS251-pr5-q7",
        "text": "What is the expression for the X coordinate in a Cubic Bézier curve?",
        "options": [
          "X = X1(1-u)^2 + 2X2 u(1-u) + X3 u^2",
          "X = X1(1-u)^3 + 3X2 u(1-u)^2 + 3X3 u^2(1-u) + X4 u^3",
          "X = X1 u^3 + X2 u^2 + X3 u + X4",
          "X = X1 + X2 u + X3 u^2 + X4 u^3"
        ],
        "correctIndex": 1,
        "explanation": "The cubic formula is X = X1(1-u)^3 + 3X2 u(1-u)^2 + 3X3 u^2(1-u) + X4 u^3."
      },
      {
        "id": "CS251-pr5-q8",
        "text": "In the Cubic Bézier example provided in the notes, what are the coordinates of the first point when u=0?",
        "options": [
          "(0, 0)",
          "(60, 20)",
          "(180, 100)",
          "(180, 50)"
        ],
        "correctIndex": 1,
        "explanation": "When u=0, the curve is at the first control point, which is (60, 20)."
      },
      {
        "id": "CS251-pr5-q9",
        "text": "In the Cubic Bézier example provided, what are the coordinates of the final point when u=1?",
        "options": [
          "(60, 20)",
          "(180, 100)",
          "(150, 90)",
          "(180, 50)"
        ],
        "correctIndex": 3,
        "explanation": "When u=1, the curve reaches the last control point, which is (180, 50)."
      },
      {
        "id": "CS251-pr5-q10",
        "text": "In the Cubic Bézier example table, what is the calculated X value when u=0.5?",
        "options": [
          "60",
          "102.2",
          "116.3",
          "144.6"
        ],
        "correctIndex": 2,
        "explanation": "According to the table, at u=0.5, the value of X is 116.3."
      },
      {
        "id": "CS251-pr5-q11",
        "text": "What is the standard polynomial equation format for a Cubic Spline segment S_0(x) starting at x=0?",
        "options": [
          "y = a + bx + cx^2 + dx^3",
          "y = mx + c",
          "y = a + bx + cx^2",
          "y = a(1-x)^3 + bx^3"
        ],
        "correctIndex": 0,
        "explanation": "The cubic spline segment is given by y = a + bx + cx^2 + dx^3."
      },
      {
        "id": "CS251-pr5-q12",
        "text": "What does the first derivative (y') of the cubic spline equation represent?",
        "options": [
          "Curvature",
          "Slope",
          "Area",
          "Length"
        ],
        "correctIndex": 1,
        "explanation": "The first derivative y' represents the Slope (S)."
      },
      {
        "id": "CS251-pr5-q13",
        "text": "What does the second derivative (y'') of the cubic spline equation represent?",
        "options": [
          "Slope",
          "Curvature",
          "Area",
          "Length"
        ],
        "correctIndex": 1,
        "explanation": "The second derivative y'' represents the Curvature (C)."
      },
      {
        "id": "CS251-pr5-q14",
        "text": "What is the algebraic expression for the slope (y') of the cubic spline y = a + bx + cx^2 + dx^3?",
        "options": [
          "y' = a + 2bx + 3cx^2",
          "y' = b + 2cx + 3dx^2",
          "y' = 2c + 6dx",
          "y' = b + cx + dx^2"
        ],
        "correctIndex": 1,
        "explanation": "Taking the derivative with respect to x gives y' = b + 2cx + 3dx^2."
      },
      {
        "id": "CS251-pr5-q15",
        "text": "What is the algebraic expression for the curvature (y'') of the cubic spline y = a + bx + cx^2 + dx^3?",
        "options": [
          "y'' = b + 2cx",
          "y'' = 2c + 3dx",
          "y'' = 2c + 6dx",
          "y'' = 6d"
        ],
        "correctIndex": 2,
        "explanation": "Taking the second derivative gives y'' = 2c + 6dx."
      },
      {
        "id": "CS251-pr5-q16",
        "text": "In the Cubic Spline example, we are given point A(0, 5). What does this establish for coefficient 'a'?",
        "options": [
          "a = 0",
          "a = 2",
          "a = 5",
          "a = -0.5"
        ],
        "correctIndex": 2,
        "explanation": "Substituting x=0 and y=5 into y = a + bx + cx^2 + dx^3 leaves 5 = a + 0 + 0 + 0, so a = 5."
      },
      {
        "id": "CS251-pr5-q17",
        "text": "In the Cubic Spline example, a slope of 2 at A(0,5) gives what value for coefficient 'b'?",
        "options": [
          "b = 5",
          "b = 2",
          "b = 0.5",
          "b = 0"
        ],
        "correctIndex": 1,
        "explanation": "Substituting x=0 and y'=2 into y' = b + 2cx + 3dx^2 leaves 2 = b + 0 + 0, so b = 2."
      },
      {
        "id": "CS251-pr5-q18",
        "text": "In the Cubic Spline example, a curvature of -0.5 at A(0,5) gives what value for coefficient 'c'?",
        "options": [
          "c = -0.5",
          "c = -0.25",
          "c = 2",
          "c = 0"
        ],
        "correctIndex": 1,
        "explanation": "Substituting x=0 and y''=-0.5 into y'' = 2c + 6dx leaves -0.5 = 2c + 0, so c = -0.25."
      },
      {
        "id": "CS251-pr5-q19",
        "text": "In the Cubic Spline example, the curve passes through B(10, 20). After finding a, b, and c, what is the calculated value for 'd'?",
        "options": [
          "d = 0.5",
          "d = 0.02",
          "d = -0.25",
          "d = 20"
        ],
        "correctIndex": 1,
        "explanation": "Substituting a=5, b=2, c=-0.25, x=10, y=20 into the main equation solves for d = 0.02."
      },
      {
        "id": "CS251-pr5-q20",
        "text": "What is the final derived equation for the cubic spline in the example?",
        "options": [
          "y = 5 + 2x - 0.25x^2 + 0.02x^3",
          "y = 2 + 5x - 0.5x^2 + 0.02x^3",
          "y = 5 - 0.25x + 2x^2 + 0.02x^3",
          "y = 5 + 2x^2 - 0.25x^3 + 0.02x^4"
        ],
        "correctIndex": 0,
        "explanation": "With a=5, b=2, c=-0.25, d=0.02, the final equation is y = 5 + 2x + (-0.25)x^2 + 0.02x^3."
      }
    ]
  }
];

export const computerGraphics: Subject = {
  id: "CS251",
  name: "Computer Graphics",
  icon: "Shapes",
  description: "Digital images, geometric primitives, transformations, curves, and splines.",
  color: "#F59E0B",
  professor: "Dr. Mohamed Salah",
  chapters,
  questions: chapters.flatMap((chapter) => chapter.questions),
};
