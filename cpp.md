# Installation On Visual Studio Code

## File Creation

Create a new folder and open it in Visual Studio Code.
Create `main.cpp`, `input.txt`, and `output.txt` file in the folder.
Create a `main.cpp` file containing your code, an `input.txt` file, which is what you will give, and an `output.txt` file, where the output of your code will be printed.

## Setting Up in Visual Studio Code

1. Open Visual Studio Code: Launch Visual Studio Code.
2. Open the Command Palette: Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS).
3. Configure tasks.json: Type Tasks: Configure Task and select tasks.json.
4. Create tasks.json file from template: Select Others.
5. Replace existing content: Replace any existing content with the JSON configuration provided above.
6. Save and Use: Save (`Ctrl+S`) the file. Now, whenever you have a cpp file open, you can run the task using `Ctrl+Shift+B` (or `Cmd+Shift+B` on macOS), which will compile and run your cpp program according to the configured settings.

-   You might additionally require [GCC Compiler](https://sourceforge.net/projects/gcc-win64/) download to run the code on your local machine.
-   This configuration assumes you have [C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools) Extension installed and g++(windows) or g++(mac/linux) commands are accessible from the terminal. Adjust paths and filenames (input.txt, output.txt) as per your project's requirements.

**Settings: (In Short)**
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
                "ccpp",
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
                "ccpp",
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

**macOS user**

```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "compile",
            "type": "shell",
            "command": "g++",
            "args": [
                "-std=c++17",
                "-o",
                "${fileBasenameNoExtension}",
                "${file}"
            ],
            "group": {
                "kind": "build",
                "isDefault": false
            }
        },
        {
            "label": "compile and run",
            "type": "shell",
            "command": "g++ -std=c++17 -o ${fileBasenameNoExtension} ${file} && ./${fileBasenameNoExtension} < input.txt > output.txt",
            "group": {
                "kind": "build",
                "isDefault": true
            }
        }
    ]
}
```

Writing a program in c++, press `ctrl+shift+B` for Windows/Linux to run the code and get the output.

![vs-code](./image/cpp-vscode.png)
