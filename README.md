# CS-2450-Group-Project

The project creates a virtual machine that reads instruction files specified to it.

# Running Application Locally

1. Install nvm for node version mananger or install npm and node.
2. Use nvm to install node version v20.14.0. (You could run with a different version but it is not recommended)
3. Clone repository onto computer.
4. Move into repository and install dependencies.
```

npm run init

```

5. Run the application
```

npm run start

```

OR Start the development react server by running
```

npm run dev

```

# Usage

Once the program is running, sample files are automatically loaded into the files section.

Click on one of the programs in the files section, it will load it into memory.
You can run the entire program or go through it in steps.

When the program needs user input it will move focus to the input box and say "Waiting for input..."

When running tests, tests will execute automatically and notify the user of the results in the console.

To change the color of each module background (the primary color), click and then select the color you want to change it to.

You can also change the header color (the secondary color) the same way.

# Building

To convert the project into an application run the following:
```

npm run build

```

The output will appear in a new folder called dist.

Mac:

**app-macos**

Linux:

**app-linux**

Windows:

**app-win.exe**

# Functions

Each function is passed a reference to the virtual machine object that is executing the program.
It is the first parameter of every function call.

You can access values of the virtual machine such as the register or memory by specifying:
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

Tests are done by running
```

npm test

```
The testing framework will run automatically

```
