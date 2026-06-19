import { Chapter, Subject } from "@/types";

const chapters: Chapter[] = [
    {
        "id": "cs251-part-1",
        "name": "Part 1: Image Fundamentals",
        "description": "Photos, digital images, pixels, color depth, RGB values, and resolution.",
        "questions": [
            {
                "id": "CS251-pr1-q1",
                "text": "Which term is defined specifically as an image taken by a camera?",
                "options": [
                    "Digital Matrix",
                    "Photo",
                    "Graphic",
                    "Render"
                ],
                "correctIndex": 1,
                "explanation": "A 'Photo' is defined as an image taken specifically by a camera."
            },
            {
                "id": "CS251-pr1-q2",
                "text": "Which term is generally used in technical or digital contexts to refer to visual media, including file formats like JPG and PNG?",
                "options": [
                    "Picture",
                    "Photo",
                    "Image",
                    "Canvas"
                ],
                "correctIndex": 2,
                "explanation": "The term 'Image' is used in technical or digital contexts."
            },
            {
                "id": "CS251-pr1-q3",
                "text": "How is a digital image structurally represented in computing?",
                "options": [
                    "As a 1D sequence of bits",
                    "As a 2D array or matrix of rows and columns",
                    "As a 3D coordinate mesh",
                    "As a continuous analog signal"
                ],
                "correctIndex": 1,
                "explanation": "A digital image is represented as a 2-dimensional array (2D array) or matrix organized into a grid."
            },
            {
                "id": "CS251-pr1-q4",
                "text": "What is the smallest individual unit of a digital image?",
                "options": [
                    "Byte",
                    "Dot",
                    "Pixel",
                    "Vector"
                ],
                "correctIndex": 2,
                "explanation": "A pixel is the smallest unit of a digital image."
            },
            {
                "id": "CS251-pr1-q5",
                "text": "In a basic Black & White image model, how many bits are used to represent a single pixel?",
                "options": [
                    "1 bit",
                    "8 bits",
                    "16 bits",
                    "24 bits"
                ],
                "correctIndex": 0,
                "explanation": "Each pixel in a Black & White image is represented by only 1 bit (0 or 1)."
            },
            {
                "id": "CS251-pr1-q6",
                "text": "In a 1-bit Black & White image format, what colors do the values 0 and 1 represent, respectively?",
                "options": [
                    "White and Black",
                    "Black and White",
                    "Gray and White",
                    "Black and Gray"
                ],
                "correctIndex": 1,
                "explanation": "0 represents black and 1 represents white."
            },
            {
                "id": "CS251-pr1-q7",
                "text": "How much memory is typically used to represent a single pixel in a Grayscale image?",
                "options": [
                    "1 bit",
                    "1 byte (8 bits)",
                    "3 bytes (24 bits)",
                    "4 bytes (32 bits)"
                ],
                "correctIndex": 1,
                "explanation": "Each pixel in a Gray image is represented by 1 byte."
            },
            {
                "id": "CS251-pr1-q8",
                "text": "If a Grayscale image uses 1 byte per pixel, how many distinct shades of gray can it represent?",
                "options": [
                    "2",
                    "128",
                    "256",
                    "65536"
                ],
                "correctIndex": 2,
                "explanation": "1 byte equals 8 bits, allowing for 2^8 or 256 levels of gray (0 to 255)."
            },
            {
                "id": "CS251-pr1-q9",
                "text": "What primary colors make up the standard color model used for digital colored images?",
                "options": [
                    "Cyan, Magenta, Yellow",
                    "Red, Green, Blue",
                    "Red, Yellow, Blue",
                    "Hue, Saturation, Value"
                ],
                "correctIndex": 1,
                "explanation": "Colored images use the RGB (Red, Green, Blue) model."
            },
            {
                "id": "CS251-pr1-q10",
                "text": "If each color channel (Red, Green, Blue) requires 1 byte, what is the total bit depth required for one pixel in a standard colored image?",
                "options": [
                    "8 bits",
                    "16 bits",
                    "24 bits",
                    "32 bits"
                ],
                "correctIndex": 2,
                "explanation": "3 colors * 1 byte (8 bits) each = 3 bytes = 24 bits per pixel."
            },
            {
                "id": "CS251-pr1-q11",
                "text": "How many total possible colors can be represented in a 24-bit RGB image?",
                "options": [
                    "256",
                    "65,536",
                    "1,048,576",
                    "16,777,216"
                ],
                "correctIndex": 3,
                "explanation": "2^24 equals 16,777,216 total colors."
            },
            {
                "id": "CS251-pr1-q12",
                "text": "In digital imaging, 'Density of light' refers to the amount of light falling on a pixel. As this value approaches its maximum (e.g., 255 in an 8-bit scale), what happens to the pixel's appearance?",
                "options": [
                    "It becomes darker",
                    "It becomes completely transparent",
                    "It becomes lighter",
                    "It turns completely red"
                ],
                "correctIndex": 2,
                "explanation": "As the value approaches 255, the color becomes lighter."
            },
            {
                "id": "CS251-pr1-q13",
                "text": "As the density of light value on a pixel approaches 0, what happens to its appearance?",
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
                "id": "CS251-pr1-q14",
                "text": "In the RGB color model ranging from 0 to 255, what combination produces pure white?",
                "options": [
                    "RGB(0, 0, 0)",
                    "RGB(128, 128, 128)",
                    "RGB(255, 255, 255)",
                    "RGB(255, 0, 0)"
                ],
                "correctIndex": 2,
                "explanation": "RGB(255, 255, 255) represents pure white."
            },
            {
                "id": "CS251-pr1-q15",
                "text": "In the RGB color model ranging from 0 to 255, what combination produces pure black?",
                "options": [
                    "RGB(255, 255, 255)",
                    "RGB(0, 0, 0)",
                    "RGB(1, 1, 1)",
                    "RGB(0, 255, 0)"
                ],
                "correctIndex": 1,
                "explanation": "RGB(0, 0, 0) represents pure black."
            },
            {
                "id": "CS251-pr1-q16",
                "text": "How is the total resolution of an image fundamentally defined?",
                "options": [
                    "By its physical dimensions in inches",
                    "By the total number of pixels in the image",
                    "By the color depth of the image",
                    "By its refresh rate in Hertz"
                ],
                "correctIndex": 1,
                "explanation": "Resolution refers to the total number of pixels in an image."
            },
            {
                "id": "CS251-pr1-q17",
                "text": "What physical unit is commonly used to measure the density of pixels in printed or displayed media?",
                "options": [
                    "Frames Per Second (FPS)",
                    "Dots Per Inch (DPI)",
                    "Megabytes (MB)",
                    "Hertz (Hz)"
                ],
                "correctIndex": 1,
                "explanation": "DPI (Dots Per Inch) is the unit used to measure physical resolution."
            },
            {
                "id": "CS251-pr1-q18",
                "text": "Given that 1 inch equals 2.54 cm, what is the formula to convert a screen's diagonal length from centimeters to inches?",
                "options": [
                    "Length Diagonal (cm) * 2.54",
                    "Length Diagonal (cm) / 2.54",
                    "Length Diagonal (cm) + 2.54",
                    "2.54 / Length Diagonal (cm)"
                ],
                "correctIndex": 1,
                "explanation": "Screen size in inches = Length Diagonal (cm) / 2.54."
            },
            {
                "id": "CS251-pr1-q19",
                "text": "If a smartphone has a screen that measures exactly 12.7 cm diagonally, what is its screen size in inches? (Note: 1 inch = 2.54 cm)",
                "options": [
                    "4.0 inches",
                    "5.0 inches",
                    "6.0 inches",
                    "7.0 inches"
                ],
                "correctIndex": 1,
                "explanation": "12.7 / 2.54 = 5.0 inches."
            },
            {
                "id": "CS251-pr1-q20",
                "text": "If a tablet has a screen that measures 25.4 cm diagonally, what is its screen size in inches?",
                "options": [
                    "8.0 inches",
                    "10.0 inches",
                    "12.0 inches",
                    "14.0 inches"
                ],
                "correctIndex": 1,
                "explanation": "25.4 / 2.54 = 10.0 inches."
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
                "text": "What is the standard algebraic equation for a straight line used in linear regression models?",
                "options": [
                    "y = mx^2 + c",
                    "y = c^x + m",
                    "y = mx + c",
                    "x = my + c"
                ],
                "correctIndex": 2,
                "explanation": "The standard equation for a straight line is y = mx + c."
            },
            {
                "id": "CS251-pr2-q2",
                "text": "In the least squares method formulas, what does the variable 'n' represent?",
                "options": [
                    "The slope of the line",
                    "The number of data points",
                    "The y-intercept",
                    "The correlation coefficient"
                ],
                "correctIndex": 1,
                "explanation": "'n' represents the number of points in the dataset."
            },
            {
                "id": "CS251-pr2-q3",
                "text": "The common denominator 'D' used to find both slope and intercept in the least squares method is calculated as D = n*Sum(x^2) - (Sum x)^2. If n=5, Sum(x)=10, and Sum(x^2)=30, what is D?",
                "options": [
                    "50",
                    "100",
                    "150",
                    "200"
                ],
                "correctIndex": 0,
                "explanation": "D = 5*(30) - (10)^2 = 150 - 100 = 50."
            },
            {
                "id": "CS251-pr2-q4",
                "text": "The numerator for calculating the slope 'm' is n*Sum(xy) - Sum(x)*Sum(y). Given n=4, Sum(x)=10, Sum(y)=20, and Sum(xy)=60, what is the numerator?",
                "options": [
                    "20",
                    "40",
                    "60",
                    "80"
                ],
                "correctIndex": 1,
                "explanation": "Numerator = 4*(60) - (10)*(20) = 240 - 200 = 40."
            },
            {
                "id": "CS251-pr2-q5",
                "text": "If a least squares calculation yields a slope m=2 and the data averages are (Sum y / n) = 10 and (Sum x / n) = 3, what is the intercept 'c' using the formula c = (Sum y / n) - m*(Sum x / n)?",
                "options": [
                    "4",
                    "7",
                    "13",
                    "16"
                ],
                "correctIndex": 0,
                "explanation": "c = 10 - 2*(3) = 10 - 6 = 4."
            },
            {
                "id": "CS251-pr2-q6",
                "text": "For a dataset with n=5 points, Sum X = 22, and Sum X^2 = 114. What is the value of the denominator 'D' (where D = n*Sum(x^2) - (Sum x)^2)?",
                "options": [
                    "86",
                    "114",
                    "484",
                    "570"
                ],
                "correctIndex": 0,
                "explanation": "D = 5*(114) - (22)^2 = 570 - 484 = 86."
            },
            {
                "id": "CS251-pr2-q7",
                "text": "Using the line equation y = 1.5x + 2, what is the estimated value of y when x = 4?",
                "options": [
                    "6",
                    "8",
                    "10",
                    "12"
                ],
                "correctIndex": 1,
                "explanation": "y = 1.5(4) + 2 = 6 + 2 = 8."
            },
            {
                "id": "CS251-pr2-q8",
                "text": "Using the line equation y = -2x + 10, what is the estimated value of y when x = 3?",
                "options": [
                    "4",
                    "6",
                    "10",
                    "16"
                ],
                "correctIndex": 0,
                "explanation": "y = -2(3) + 10 = -6 + 10 = 4."
            },
            {
                "id": "CS251-pr2-q9",
                "text": "What does the Correlation Coefficient (r) measure in a dataset?",
                "options": [
                    "The sum of all variables",
                    "The strength and direction of a linear relationship",
                    "The exact slope of the best-fit line",
                    "The geometric distance between points"
                ],
                "correctIndex": 1,
                "explanation": "The correlation coefficient measures the strength and direction of a linear relationship."
            },
            {
                "id": "CS251-pr2-q10",
                "text": "What is the possible mathematical range of values for the Correlation Coefficient (r)?",
                "options": [
                    "0 to 1",
                    "0 to 100",
                    "-1 to 1",
                    "-infinity to infinity"
                ],
                "correctIndex": 2,
                "explanation": "The correlation coefficient always falls between -1 and 1."
            },
            {
                "id": "CS251-pr2-q11",
                "text": "What does it mean if the correlation coefficient of a dataset is exactly r = 0?",
                "options": [
                    "Perfect positive correlation",
                    "Perfect negative correlation",
                    "No linear correlation",
                    "A calculation error occurred"
                ],
                "correctIndex": 2,
                "explanation": "If r = 0, there is no linear correlation."
            },
            {
                "id": "CS251-pr2-q12",
                "text": "What does a correlation coefficient approaching 1 (e.g., r = 0.95) indicate about the data points?",
                "options": [
                    "Strong positive linear correlation",
                    "Strong negative linear correlation",
                    "Weak positive correlation",
                    "No correlation"
                ],
                "correctIndex": 0,
                "explanation": "Values near 1 indicate a strong positive linear correlation."
            },
            {
                "id": "CS251-pr2-q13",
                "text": "What does a correlation coefficient approaching -1 (e.g., r = -0.92) indicate about the data points?",
                "options": [
                    "Strong positive linear correlation",
                    "Strong negative linear correlation",
                    "Weak negative correlation",
                    "No correlation"
                ],
                "correctIndex": 1,
                "explanation": "Values near -1 indicate a strong negative linear correlation."
            },
            {
                "id": "CS251-pr2-q14",
                "text": "In the formula for the correlation coefficient (r), what operation is applied to the denominator variables Dx and Dy?",
                "options": [
                    "They are added together",
                    "They are divided by each other",
                    "They are multiplied, and then the square root is taken",
                    "They are squared and summed"
                ],
                "correctIndex": 2,
                "explanation": "The denominator for r is the square root of (Dx * Dy)."
            },
            {
                "id": "CS251-pr2-q15",
                "text": "The correlation formula uses a component Dx calculated as n*Sum(x^2) - (Sum x)^2. If a dataset has n=3, Sum(x)=6, and Sum(x^2)=14, what is the value of Dx?",
                "options": [
                    "6",
                    "12",
                    "18",
                    "24"
                ],
                "correctIndex": 0,
                "explanation": "Dx = 3*(14) - (6)^2 = 42 - 36 = 6."
            },
            {
                "id": "CS251-pr2-q16",
                "text": "The correlation formula uses a component Dy calculated as n*Sum(y^2) - (Sum y)^2. If a dataset has n=3, Sum(y)=9, and Sum(y^2)=31, what is the value of Dy?",
                "options": [
                    "12",
                    "18",
                    "24",
                    "30"
                ],
                "correctIndex": 0,
                "explanation": "Dy = 3*(31) - (9)^2 = 93 - 81 = 12."
            },
            {
                "id": "CS251-pr2-q17",
                "text": "If the numerator of the correlation coefficient is positive, what can you definitively say about the value of 'r' (assuming Dx and Dy are positive)?",
                "options": [
                    "r will be greater than 1",
                    "r will be negative",
                    "r will be positive",
                    "r will be exactly 0"
                ],
                "correctIndex": 2,
                "explanation": "If the numerator is positive and the denominator is positive, the result (r) will be positive, indicating positive correlation."
            },
            {
                "id": "CS251-pr2-q18",
                "text": "Which of the following scenarios would result in a negative slope (m) for a least squares line?",
                "options": [
                    "As x increases, y increases",
                    "As x increases, y decreases",
                    "y remains constant as x increases",
                    "x remains constant as y increases"
                ],
                "correctIndex": 1,
                "explanation": "A negative slope occurs when y decreases as x increases."
            },
            {
                "id": "CS251-pr2-q19",
                "text": "If all data points fall exactly on a straight line moving upward from left to right, what is the value of the correlation coefficient r?",
                "options": [
                    "-1",
                    "0",
                    "0.5",
                    "1"
                ],
                "correctIndex": 3,
                "explanation": "A perfect positive linear relationship yields r = 1."
            },
            {
                "id": "CS251-pr2-q20",
                "text": "In the least squares table layout, what is required to calculate the 'xy' column?",
                "options": [
                    "Squaring the x value",
                    "Multiplying the x value by the y value for each point",
                    "Adding the x and y values",
                    "Dividing x by y"
                ],
                "correctIndex": 1,
                "explanation": "The 'xy' column is generated by multiplying the individual x and y coordinates of each point."
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
                "text": "How is a singular point (or pixel) geometrically defined on a 2D plane?",
                "options": [
                    "By a single radius value",
                    "By coordinate pairs P(x, y)",
                    "By an angle theta",
                    "By an area calculation"
                ],
                "correctIndex": 1,
                "explanation": "A point is represented by coordinates P(x, y)."
            },
            {
                "id": "CS251-pr3-q2",
                "text": "Mathematically, what is the minimum number of distinct points (n) required to define a straight line?",
                "options": [
                    "n = 1",
                    "n = 2",
                    "n = 3",
                    "n = 4"
                ],
                "correctIndex": 1,
                "explanation": "A straight line connects points P(x1, y1) to P(x2, y2), meaning n >= 2."
            },
            {
                "id": "CS251-pr3-q3",
                "text": "What specific dimensional condition must be met for a general rectangle to be classified as a square?",
                "options": [
                    "Width is greater than Height",
                    "Height is greater than Width",
                    "Width equals Height (W = h)",
                    "The diagonal equals the Width"
                ],
                "correctIndex": 2,
                "explanation": "For a square, the width must equal the height (W = h)."
            },
            {
                "id": "CS251-pr3-q4",
                "text": "What dimensional relationship defines a 'Landscape' orientation for a rectangle?",
                "options": [
                    "Width is less than Height (W < H)",
                    "Width is greater than Height (W > H)",
                    "Width equals Height (W = H)",
                    "Height is twice the Width"
                ],
                "correctIndex": 1,
                "explanation": "A landscape rectangle is one where the Width is greater than the Height (W > H)."
            },
            {
                "id": "CS251-pr3-q5",
                "text": "What dimensional relationship defines a 'Portrait' orientation for a rectangle?",
                "options": [
                    "Height is greater than Width (H > W)",
                    "Width is greater than Height (W > H)",
                    "Height equals Width (H = W)",
                    "Width is twice the Height"
                ],
                "correctIndex": 0,
                "explanation": "A portrait rectangle is one where the Height is greater than the Width (H > W)."
            },
            {
                "id": "CS251-pr3-q6",
                "text": "What two key parameters define a circle geometrically?",
                "options": [
                    "Major and minor axes",
                    "Center point (c) and Radius (r)",
                    "Width and Height",
                    "Two focal points"
                ],
                "correctIndex": 1,
                "explanation": "A circle is defined by its center 'c' at coordinates (x,y) and its radius 'r'."
            },
            {
                "id": "CS251-pr3-q7",
                "text": "For an ellipse oriented horizontally, what is the relationship between its horizontal radius (rx) and vertical radius (ry)?",
                "options": [
                    "ry > rx",
                    "ry < rx",
                    "ry = rx",
                    "rx + ry = 1"
                ],
                "correctIndex": 1,
                "explanation": "In a horizontal ellipse, the vertical y-radius is less than the horizontal x-radius (ry < rx)."
            },
            {
                "id": "CS251-pr3-q8",
                "text": "For an ellipse oriented vertically, what is the relationship between its horizontal radius (rx) and vertical radius (ry)?",
                "options": [
                    "ry < rx",
                    "ry > rx",
                    "ry = rx",
                    "rx * ry = 1"
                ],
                "correctIndex": 1,
                "explanation": "In a vertical ellipse, the vertical y-radius is greater than the horizontal x-radius (ry > rx)."
            },
            {
                "id": "CS251-pr3-q9",
                "text": "Which basic geometric shape is drawn simply as an incomplete curved line segment?",
                "options": [
                    "Square",
                    "Ellipse",
                    "Arc",
                    "Circle"
                ],
                "correctIndex": 2,
                "explanation": "An Arc is depicted as a curved line segment."
            },
            {
                "id": "CS251-pr3-q10",
                "text": "To explicitly define the outer bounds of a rectangle using corner points, how many coordinate pairs are typically required?",
                "options": [
                    "One",
                    "Two",
                    "Three",
                    "Four"
                ],
                "correctIndex": 3,
                "explanation": "A basic rectangle or square diagram defines the bounds using four corner points P(x1,y1) through P(x4,y4)."
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
                "text": "Which category of 2D transformations includes Translation, Rotation, and Scaling?",
                "options": [
                    "Derived Geometrical",
                    "Fundamental Geometrical",
                    "Distortion Geometrical",
                    "Projection Geometrical"
                ],
                "correctIndex": 1,
                "explanation": "Translation, Rotation, and Scaling are listed as Fundamental Geometrical transformations."
            },
            {
                "id": "CS251-pr4-q2",
                "text": "Which category of 2D transformations includes Reflection and Shearing?",
                "options": [
                    "Fundamental Geometrical",
                    "Basic Matrix",
                    "Derived Geometrical",
                    "Complex Distortions"
                ],
                "correctIndex": 2,
                "explanation": "Reflection and Shearing are listed as Derived Geometrical transformations."
            },
            {
                "id": "CS251-pr4-q3",
                "text": "To find the new X coordinate (X') after translation, the formula X' = X + Tx is used. If a point at X=5 is translated by Tx=3, what is X'?",
                "options": [
                    "2",
                    "5",
                    "8",
                    "15"
                ],
                "correctIndex": 2,
                "explanation": "X' = 5 + 3 = 8."
            },
            {
                "id": "CS251-pr4-q4",
                "text": "To find the new Y coordinate (Y') after translation, the formula Y' = Y + Ty is used. If a point at Y=10 is translated by Ty=-4, what is Y'?",
                "options": [
                    "-40",
                    "6",
                    "10",
                    "14"
                ],
                "correctIndex": 1,
                "explanation": "Y' = 10 + (-4) = 6."
            },
            {
                "id": "CS251-pr4-q5",
                "text": "The algebraic equation for rotating a point's X coordinate counter-clockwise around the origin is X' = X*Cos(theta) - Y*Sin(theta). If a point is at (1, 0) and is rotated by 90 degrees (Cos 90=0, Sin 90=1), what is the new X'?",
                "options": [
                    "-1",
                    "0",
                    "1",
                    "90"
                ],
                "correctIndex": 1,
                "explanation": "X' = 1*0 - 0*1 = 0."
            },
            {
                "id": "CS251-pr4-q6",
                "text": "Which top-row matrix pattern corresponds to a counter-clockwise rotation?",
                "options": [
                    "[Cos(theta), Sin(theta), 0]",
                    "[Cos(theta), -Sin(theta), 0]",
                    "[1, 0, Tx]",
                    "[Sx, 0, 0]"
                ],
                "correctIndex": 1,
                "explanation": "The counter-clockwise rotation matrix uses [Cos(theta), -Sin(theta), 0] for its top row."
            },
            {
                "id": "CS251-pr4-q7",
                "text": "Which top-row matrix pattern corresponds to a clockwise rotation?",
                "options": [
                    "[Cos(theta), -Sin(theta), 0]",
                    "[Cos(theta), Sin(theta), 0]",
                    "[1, Shx, 0]",
                    "[0, Sy, 0]"
                ],
                "correctIndex": 1,
                "explanation": "The clockwise rotation matrix uses [Cos(theta), Sin(theta), 0] for its top row."
            },
            {
                "id": "CS251-pr4-q8",
                "text": "When rotating an object around a specific pivot point (Xr, Yr) rather than the origin, what must be subtracted from the original coordinates X and Y before applying the rotation functions?",
                "options": [
                    "The angle theta",
                    "The origin coordinates (0,0)",
                    "The pivot coordinates Xr and Yr respectively",
                    "The target coordinates X' and Y'"
                ],
                "correctIndex": 2,
                "explanation": "The formula subtracts the pivot point first: (X - Xr) and (Y - Yr)."
            },
            {
                "id": "CS251-pr4-q9",
                "text": "A point is scaled using the formulas X' = Sx * X and Y' = Sy * Y. If the original point is at (4, 6) and the scaling factors are Sx=0.5 and Sy=0.5, what is the new coordinate (X', Y')?",
                "options": [
                    "(2, 3)",
                    "(8, 12)",
                    "(4.5, 6.5)",
                    "(3.5, 5.5)"
                ],
                "correctIndex": 0,
                "explanation": "X' = 0.5 * 4 = 2, and Y' = 0.5 * 6 = 3. Result is (2, 3)."
            },
            {
                "id": "CS251-pr4-q10",
                "text": "What is the visual effect on an object if its scaling factors Sx and Sy are both between 0 and 1?",
                "options": [
                    "The size increases and it moves away from the origin",
                    "The size decreases and it moves closer to the origin",
                    "The shape is reflected across the axis",
                    "The shape slants diagonally"
                ],
                "correctIndex": 1,
                "explanation": "If Sx, Sy are between 0 and 1, the size decreases and points move closer to the origin."
            },
            {
                "id": "CS251-pr4-q11",
                "text": "What is the visual effect on an object if its scaling factors Sx and Sy are both greater than 1?",
                "options": [
                    "The size increases and it moves away from the origin",
                    "The size decreases and it moves closer to the origin",
                    "The object rotates",
                    "The object disappears"
                ],
                "correctIndex": 0,
                "explanation": "If Sx, Sy > 1, the size increases and points move away from the origin."
            },
            {
                "id": "CS251-pr4-q12",
                "text": "What term describes scaling when the x-axis factor (Sx) is exactly equal to the y-axis factor (Sy)?",
                "options": [
                    "Differential scaling",
                    "Shear scaling",
                    "Uniform scaling",
                    "Reflective scaling"
                ],
                "correctIndex": 2,
                "explanation": "When Sx = Sy, scaling is done uniformly."
            },
            {
                "id": "CS251-pr4-q13",
                "text": "A point at (10, 5) is reflected across the X-axis. Which of the following represents its new coordinates (X', Y') given the transformation negates the Y value?",
                "options": [
                    "(-10, 5)",
                    "(10, -5)",
                    "(-10, -5)",
                    "(5, 10)"
                ],
                "correctIndex": 1,
                "explanation": "Reflecting across the X-axis keeps X the same but negates Y, resulting in (10, -5)."
            },
            {
                "id": "CS251-pr4-q14",
                "text": "A point at (10, 5) is reflected across the Y-axis. Which of the following represents its new coordinates (X', Y') given the transformation negates the X value?",
                "options": [
                    "(-10, 5)",
                    "(10, -5)",
                    "(-10, -5)",
                    "(5, 10)"
                ],
                "correctIndex": 0,
                "explanation": "Reflecting across the Y-axis negates X but keeps Y the same, resulting in (-10, 5)."
            },
            {
                "id": "CS251-pr4-q15",
                "text": "A point at (10, 5) is reflected across the Origin. Which of the following represents its new coordinates (X', Y') given the transformation negates both X and Y?",
                "options": [
                    "(-10, 5)",
                    "(10, -5)",
                    "(-10, -5)",
                    "(5, 10)"
                ],
                "correctIndex": 2,
                "explanation": "Reflecting across the origin negates both X and Y, resulting in (-10, -5)."
            },
            {
                "id": "CS251-pr4-q16",
                "text": "Which 3x3 reflection matrix features diagonal elements of [-1, 1, 1]?",
                "options": [
                    "Reflection across the X-axis",
                    "Reflection across the Y-axis",
                    "Reflection across the Origin",
                    "Reflection across the line Y=X"
                ],
                "correctIndex": 1,
                "explanation": "Reflection across the y-axis negates the x coordinate, meaning the top-left matrix element is -1."
            },
            {
                "id": "CS251-pr4-q17",
                "text": "For a reflection across the line y = X, the coordinates are swapped (X' = Y, Y' = X). Where do the '1's appear in the top two rows of its transformation matrix?",
                "options": [
                    "Top row center, Middle row left",
                    "Top row left, Middle row center",
                    "Both in the center column",
                    "Both in the right column"
                ],
                "correctIndex": 0,
                "explanation": "The top row is [1] and the middle row is [1]."
            },
            {
                "id": "CS251-pr4-q18",
                "text": "The algebraic equation for shearing in the X direction is X' = X + Shx * Y. If a point is at (2, 4) and the shear factor Shx is 0.5, what is the new coordinate X'?",
                "options": [
                    "2",
                    "4",
                    "6",
                    "8"
                ],
                "correctIndex": 1,
                "explanation": "X' = 2 + (0.5 * 4) = 2 + 2 = 4."
            },
            {
                "id": "CS251-pr4-q19",
                "text": "The algebraic equation for shearing in the Y direction is Y' = Y + Shy * X. If a point is at (10, 5) and the shear factor Shy is 0.2, what is the new coordinate Y'?",
                "options": [
                    "2",
                    "5",
                    "7",
                    "10"
                ],
                "correctIndex": 2,
                "explanation": "Y' = 5 + (0.2 * 10) = 5 + 2 = 7."
            },
            {
                "id": "CS251-pr4-q20",
                "text": "How is the total transformation calculated when applying multiple sequential translations to an object?",
                "options": [
                    "By multiplying the individual translations",
                    "By summing the individual translations (e.g., Total Tx = Sum Txi)",
                    "By averaging the translations",
                    "By subtracting the final translation from the initial one"
                ],
                "correctIndex": 1,
                "explanation": "Multiple translations are combined by summing them: Total Tx = Sum(Txi) and Ty = Sum(Tyi)."
            }
        ]
    },
    {
        "id": "cs251-part-5",
        "name": "Part 5: Curves and Splines",
        "description": "Raster vs vector graphics, Bézier curves, parametric equations, and cubic splines.",
        "questions": [
            {
                "id": "CS251-pr5-q1",
                "text": "In computer graphics, what are Raster Graphics primarily composed of?",
                "options": [
                    "Mathematical equations",
                    "A set of geometric shapes",
                    "A grid of Pixels",
                    "Dynamic control points"
                ],
                "correctIndex": 2,
                "explanation": "Raster graphics (images) consist of Pixels."
            },
            {
                "id": "CS251-pr5-q2",
                "text": "In computer graphics, what are Vector Graphics primarily composed of?",
                "options": [
                    "A grid of Pixels",
                    "Resolution-dependent color blocks",
                    "A set of mathematical shapes",
                    "Individual light densities"
                ],
                "correctIndex": 2,
                "explanation": "Vector graphics consist of a set of shapes based on mathematical formulas."
            },
            {
                "id": "CS251-pr5-q3",
                "text": "How many total coordinate points are required to define a Quadratic Bézier Curve?",
                "options": [
                    "2 points",
                    "3 points (start, end, and 1 control point)",
                    "4 points",
                    "5 points"
                ],
                "correctIndex": 1,
                "explanation": "A quadratic Bézier curve uses 3 points to define the arc."
            },
            {
                "id": "CS251-pr5-q4",
                "text": "How many total coordinate points are required to define a Cubic Bézier Curve?",
                "options": [
                    "2 points",
                    "3 points",
                    "4 points (start, end, and 2 control points)",
                    "5 points"
                ],
                "correctIndex": 2,
                "explanation": "A cubic Bézier curve uses 4 points to define the arc."
            },
            {
                "id": "CS251-pr5-q5",
                "text": "In the general parametric equation for a Bézier Curve, what is the valid numerical range for the parameter 't' (or 'u') that draws the curve from start to end?",
                "options": [
                    "-1 <= t <= 1",
                    "0 <= t <= 1",
                    "0 <= t <= 100",
                    "1 <= t <= infinity"
                ],
                "correctIndex": 1,
                "explanation": "The parameter t (or u) is restricted to the range 0 <= t <= 1."
            },
            {
                "id": "CS251-pr5-q6",
                "text": "What is the correct mathematical expression for the X coordinate of a Quadratic Bézier curve parameter 'u'?",
                "options": [
                    "X = X1(1-u) + X2(u)",
                    "X = X1(1-u)^2 + 2X2 u(1-u) + X3 u^2",
                    "X = X1 u^2 + X2(1-u)^2",
                    "X = X1(1-u)^3 + 3X2 u(1-u)^2 + 3X3 u^2(1-u) + X4 u^3"
                ],
                "correctIndex": 1,
                "explanation": "The formula for a quadratic Bézier curve is X = X1(1-u)^2 + 2X2 u(1-u) + X3 u^2."
            },
            {
                "id": "CS251-pr5-q7",
                "text": "What is the correct mathematical expression for the X coordinate of a Cubic Bézier curve using parameter 'u'?",
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
                "text": "If a Cubic Bézier curve is defined by points P1(10, 10), P2(20, 40), P3(30, 40), and P4(40, 10), what are the coordinates of the curve exactly when the parameter u = 0?",
                "options": [
                    "(0, 0)",
                    "(10, 10)",
                    "(25, 25)",
                    "(40, 10)"
                ],
                "correctIndex": 1,
                "explanation": "When u=0, the curve is exactly at the starting point P1, which is (10, 10)."
            },
            {
                "id": "CS251-pr5-q9",
                "text": "If a Cubic Bézier curve is defined by points P1(10, 10), P2(20, 40), P3(30, 40), and P4(40, 10), what are the coordinates of the curve exactly when the parameter u = 1?",
                "options": [
                    "(10, 10)",
                    "(25, 25)",
                    "(30, 40)",
                    "(40, 10)"
                ],
                "correctIndex": 3,
                "explanation": "When u=1, the curve is exactly at the ending point P4, which is (40, 10)."
            },
            {
                "id": "CS251-pr5-q10",
                "text": "What is the standard polynomial equation format representing a Cubic Spline segment S(x)?",
                "options": [
                    "y = mx + c",
                    "y = a + bx + cx^2",
                    "y = a + bx + cx^2 + dx^3",
                    "y = a(1-x)^3 + bx^3"
                ],
                "correctIndex": 2,
                "explanation": "The cubic spline segment is given by y = a + bx + cx^2 + dx^3."
            },
            {
                "id": "CS251-pr5-q11",
                "text": "In the context of a cubic spline equation, what geometric property does the first derivative (y') represent?",
                "options": [
                    "Area",
                    "Slope",
                    "Curvature",
                    "Length"
                ],
                "correctIndex": 1,
                "explanation": "The first derivative y' represents the Slope (S)."
            },
            {
                "id": "CS251-pr5-q12",
                "text": "In the context of a cubic spline equation, what geometric property does the second derivative (y'') represent?",
                "options": [
                    "Area",
                    "Slope",
                    "Curvature",
                    "Length"
                ],
                "correctIndex": 2,
                "explanation": "The second derivative y'' represents the Curvature (C)."
            },
            {
                "id": "CS251-pr5-q13",
                "text": "Given the cubic spline equation y = a + bx + cx^2 + dx^3, what is the correct algebraic expression for its slope (y')?",
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
                "id": "CS251-pr5-q14",
                "text": "Given the cubic spline equation y = a + bx + cx^2 + dx^3, what is the correct algebraic expression for its curvature (y'')?",
                "options": [
                    "y'' = b + 2cx",
                    "y'' = 2c + 3dx",
                    "y'' = 2c + 6dx",
                    "y'' = 6d"
                ],
                "correctIndex": 2,
                "explanation": "Taking the second derivative of y gives y'' = 2c + 6dx."
            },
            {
                "id": "CS251-pr5-q15",
                "text": "A cubic spline segment defined by y = a + bx + cx^2 + dx^3 passes through point (x=0, y=7). What is the value of the coefficient 'a'?",
                "options": [
                    "0",
                    "1",
                    "7",
                    "-7"
                ],
                "correctIndex": 2,
                "explanation": "Substituting x=0 and y=7 yields 7 = a + 0 + 0 + 0, so a = 7."
            },
            {
                "id": "CS251-pr5-q16",
                "text": "The first derivative of a cubic spline is y' = b + 2cx + 3dx^2. If the slope is 4 exactly at x=0, what is the value of coefficient 'b'?",
                "options": [
                    "0",
                    "2",
                    "4",
                    "6"
                ],
                "correctIndex": 2,
                "explanation": "Substituting x=0 and y'=4 yields 4 = b + 0 + 0, so b = 4."
            },
            {
                "id": "CS251-pr5-q17",
                "text": "The second derivative of a cubic spline is y'' = 2c + 6dx. If the curvature is -1 exactly at x=0, what is the value of coefficient 'c'?",
                "options": [
                    "-1",
                    "-0.5",
                    "0.5",
                    "1"
                ],
                "correctIndex": 1,
                "explanation": "Substituting x=0 and y''=-1 yields -1 = 2c + 0, so c = -0.5."
            },
            {
                "id": "CS251-pr5-q18",
                "text": "Suppose a cubic spline equation is partially solved as y = 5 + 2x - 0.25x^2 + d*x^3. If the curve passes through the point (x=10, y=20), which setup will solve for the coefficient 'd'?",
                "options": [
                    "20 = 5 + 20 - 25 + d(1000)",
                    "10 = 5 + 40 - 25 + d(20)",
                    "20 = 5 + 2 - 0.25 + d",
                    "20 = 5 + 20 - 0.25 + d(10)"
                ],
                "correctIndex": 0,
                "explanation": "Substituting x=10 and y=20 gives 20 = 5 + 2(10) - 0.25(10^2) + d(10^3), which simplifies to 20 = 5 + 20 - 25 + d(1000)."
            },
            {
                "id": "CS251-pr5-q19",
                "text": "If a cubic spline equation evaluates to y = 5 + 2(10) - 0.25(100) + d(1000) = 20, what is the final value of the coefficient 'd'?",
                "options": [
                    "0.01",
                    "0.02",
                    "0.2",
                    "2"
                ],
                "correctIndex": 1,
                "explanation": "20 = 5 + 20 - 25 + 1000d. Therefore 20 = 0 + 1000d. Solving for d gives 20 / 1000 = 0.02."
            },
            {
                "id": "CS251-pr5-q20",
                "text": "In generating points for a parametric curve like a Bézier curve within a computer program, what is generally increased by small uniform steps (e.g., 0.1) from 0 to 1?",
                "options": [
                    "The final X coordinate",
                    "The final Y coordinate",
                    "The parameter 'u' (or 't')",
                    "The control points"
                ],
                "correctIndex": 2,
                "explanation": "To generate the curve, the parameter 'u' is stepped incremently (e.g., by 0.1) from 0 to 1 to calculate corresponding X and Y pairs."
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
