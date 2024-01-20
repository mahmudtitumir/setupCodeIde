## Installation On Visual Studio Code

Create `main.cpp`, `input.txt`, and `output.txt` file.
You might additionally require [GCC](https://sourceforge.net/projects/gcc-win64/) to run the code
Install [C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools) Extension.

Create a `main.cpp` file containing your code, an `input.txt` file, which is what you will give, and an `output.txt` file, where the output of your code will be printed.

**Settings:**
`Menu bar` -> `Terminal` -> `Configure Tasks` -> `Create tasks.json file from template` -> `others`

After selecting others, you will see a new .vscode file and, in that, a `tasks.json` file, clear the current text in the json file and paste this.

**Windows User:**

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Compile and run",
      "type": "shell",
      "command": "",
      "args": [
        "copy",
        "\"${file}\"",
        "${workspaceFolder}\\jspwTest.cpp",
        "&&",
        "g++",
        "jspwTest.cpp",
        "-o",
        "jspwTest",
        "&&",
        "jspwTest",
        "<",
        "input.txt",
        ">",
        "output.txt",
        "&&",
        "del",
        "jspwTest.exe",
        "&&",
        "del",
        "jspwTest.cpp"
      ],
      "presentation": {
        "reveal": "never"
      },
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "problemMatcher": {
        "owner": "cpp",
        "fileLocation": ["relative", "${workspaceRoot}"],
        "pattern": {
          "regexp": "^(.*):(\\d+):(\\d+):\\s+(warning|error):\\s+(.*)$",
          "file": 1,
          "line": 2,
          "column": 3,
          "severity": 4,
          "message": 5
        }
      }
    }
  ]
}
```

**Linax User**

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Compile and run",
      "type": "shell",
      "command": "",
      "args": [
        "copy",
        "\"${file}\"",
        "${workspaceFolder}\\jspwTest.cpp",
        "&&",
        "g++",
        "jspwTest.cpp",
        "-o",
        "jspwTest",
        "&&",
        "jspwTest",
        "<",
        "input.txt",
        ">",
        "output.txt",
        "&&",
        "del",
        "jspwTest.exe",
        "&&",
        "del",
        "jspwTest.cpp"
      ],
      "presentation": {
        "reveal": "never"
      },
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "problemMatcher": {
        "owner": "cpp",
        "fileLocation": ["relative", "${workspaceRoot}"],
        "pattern": {
          "regexp": "^(.*):(\\d+):(\\d+):\\s+(warning|error):\\s+(.*)$",
          "file": 1,
          "line": 2,
          "column": 3,
          "severity": 4,
          "message": 5
        }
      }
    }
  ]
}
```

Writing a program in c++, press `ctrl+shift+B` for Windows/Linux to run the code and get the output.

![vs-code](./image/cpp-vscode.png)
