export const programSamples = [
  { name: "sample1", content: `+1009` },
  {
    name: "test1",
    content: `+1090.5
+4300`,
  },
  {
    name: "sample2",
    content: `+1009
+1010
+2009
+3110
+4107
+1109
+4300
+1110
+4300
+0000
+0000
-99999
`,
  },
  {
    name: "Test1.txt",
    content: `+1007
+4300`,
  },
  {
    name: "uvSimTests.test",
    content: `Read File Into Memory 1
15
Test1.txt
7
10 7,READ,43 0,HALT

Read File Into Memory 2
9
Kevin
-1
Error: File DNE: Kevin

Read Word Into Memory 1
5
+1010
+4300
10
10 10,READ,43 0,HALT

Read Word Into Memory 2
7
+1090.5
+4300
90.5
Failed to load program: Invalid instruction on line 0: 1090.5

Load/Store Value Into Acc 1
10
+1010
+2010
+2111
+4300
11
10 10,READ,20 10,LOAD,21 11,STORE,43 0,HALT

Load/Store Value Into Acc 2
21
+1021
+2021
+2132
+4300
32
10 21,READ,20 21,LOAD,21 32,STORE,43 0,HALT

Load/Store Value Into Acc 3
50
+1050
+2050
+21101
+4300
101
10 50,READ,20 50,LOAD,Invalid opcode

Load/Store Value Into Acc 4
10101
+1053
+2053
+2185
+4300
-1
10 53,READ,Out of Bounds Value: 10101

Execute Commands 1
5 5 2
+1050
+1051
+1052
+3050
+3051
+3352
+2163
+4300
63
10 50,READ,10 51,READ,10 52,READ,30 50,ADD,30 51,ADD,33 52,MULTIPLY,21 63,STORE,43 0,HALT

Execute Commands 2
5
+1110
+1010
+4300
-1
11 10,WRITE,0,10 10,READ,43 0,HALT

Opcodes 1
-1
404 Operator Not Found
-1
Error: File DNE: 404 Operator Not Found

Opcodes 2
-1
+4400
-1
44 0,Out Of Bounds: 100

Program Halts
-1
+4300
+2000
-1
43 0,HALT

Branch Test
-1
+4004
+3020
+2100
+2000
+4300
-1
40 4,BRANCH,43 0,HALT

Branch Neg Test 1
-1
+4104
+3020
+2100
+2000
+4300
-1
41 4,BRANCHNEG,30 20,ADD,21 0,STORE,20 0,LOAD,43 0,HALT

Branch Neg Test 2
-1
+3105
+4104
+2100
+2000
+4300
+10
-1
31 5,SUBTRACT,41 4,BRANCHNEG,43 0,HALT

Branch Zero Test 1
-1
+3105
+4204
+2100
+2000
+4300
+20
-1
31 5,SUBTRACT,42 4,BRANCHZERO,21 0,STORE,20 0,LOAD,43 0,HALT

Branch Zero Test 2
-1
+4203
+2100
+2000
+4300
-1
42 3,BRANCHZERO,43 0,HALT

Counter exceeds threshold
-1
+1010
-1
10 10,READ,0 -1,Out Of Bounds: 100

Add Value to Accumulator
9
+1040
+2040
+3005
+2141
+4300
+1
41
10 40,READ,20 40,LOAD,30 5,ADD,21 41,STORE,43 0,HALT

Subtract Value from Accumulator
9
+1040
+2040
+3105
+2141
+4300
+1
41
10 40,READ,20 40,LOAD,31 5,SUBTRACT,21 41,STORE,43 0,HALT

Multiply Value to Accumulator
9
+1040
+2040
+3305
+2141
+4300
+2
41
10 40,READ,20 40,LOAD,33 5,MULTIPLY,21 41,STORE,43 0,HALT

Divide Value from Accumulator
14
+1040
+2040
+3205
+2141
+4300
+7
41
10 40,READ,20 40,LOAD,32 5,DIVIDE,21 41,STORE,43 0,HALT

Write to Console 1
-1
+1102
+4300
+735
-1
11 2,WRITE,735,43 0,HALT

Write To Console 2
-1
+1169
+4300
-1
11 69,WRITE,0,43 0,HALT`,
  },
];
