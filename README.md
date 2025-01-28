# CS-2450-Group-Project

The project creates a virtual machine that reads instruction files specified to it.

# Running Application Locally

specify route to program file to be executed
(I have put example program files in the ./programs folder)

```
node index.js <path to program>
```

### example

```
    node index.js ./programs/Test1.txt
```

# building

run

```
npm run build
```

The output will appear in a new folder called dist it should output each program for mac linux and windows

# notes

maybe we could consider using electron if needing to move forward for app gui

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

//get a location in memory
const temp = vm.memory.getLoc(23)
//set a location in memory
vm.memory.setLoc(23,1020)
```
