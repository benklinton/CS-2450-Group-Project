# CS-2450-Group-Project

The project creates a virtual machine that reads instruction files specified to it.

# Running Application Locally

1. Install nvm for node version mananger or install npm and node.
2. Use nvm to install node version v20.14.0. (You could run with a different version but it is not recommended)
3. Clone repository onto computer.
4. Move into repository and install dependencies.
   npm run init

5. Run the application
   npm run start

```
OR Start the development react server by running

```

npm run dev

```

# Usage

Once the program is running, sample files are automatically loaded into the files section

Click on one of the programs in the files section, once it is opened it will load it into memory
you can step forward one step at a time or just run

When the program needs user input it will move the cursor to the input box and say waiting for user input...

When running tests tests will run automatically and notify the user of the results in the console.

To change the color of each module background (the primary color)
click and then select the color you want to change it to
You can also change the header color (the secondary color) the same
way.

# Building

To convert the project into an application run the following


```

npm run build

```

The output will appear in a new folder called dist it should output a program for Mac:

**app-macos**

Linux:

**app-linux**

Windows:

**app-win.exe**

# Functions

Each function is passed an reference to the virtual machine object that is executing the program.
It is the first parameter of every function call

You can access values of the virtual machine such as the register or memory by specifying

```

//gets the accumulator register value
vm.r.acc
//sets the accumulator register value
vm.r.acc = 0;

//get the pointer counter
vm.r.pc
//sets the pointer counter
vm.r.pc = 0;

//get a location in memory
const temp = vm.memory.getLoc(213)
//set a location in memory
vm.memory.setLoc(213,1020)

```

# Testing

Tests are done by running the application

```

npm run start

```

within the "programs" directory.

Tests are created in UVSimTests.txt (found automatically in the files section). They are seperated by two newline characters.
A test passes if it matches the output of the program after being fed the test.
Each test is based on the following format:
Title - 1 line - Name of the test

```

Example:
My Test 1

```

Arguments - 1 line - A list of arguments for the READ operator.
Each is seperated by a space. If you dont want one, put -1.

```

Example:
15 7 2

```

There are two ways to write the "Program" part of a test.
Program Option 1 - 1 line - Path to file with program. CD is the programs folder.

```

Example:
Test1.txt

```

Program Option 2 - 1+ line - A list of lines of code to run. These are seperated by new line characters.

```

Example:
+10010
+43010

```

Memory Location - 1 line - A location in memory to load from. This will be added to the programs output
If you dont want to load from memory, put -1.

```

Example:
45

```

Expected Result - 1 line - The expected result of the program. Each console log/error is seperated by comma.
Generally they follow this format:
OPCODE OPERAND,FUNCTIONNAME,OPCODE2 OPERAND2,FUNCTIONNAME2...Memory Read
However errors may be included as an output.

```

Example:
10 7,READ,43 0,HALT,15

```

If an operator would write to the screen, such as WRITE, the value it is
writing will come directly after its name in the output.
```
