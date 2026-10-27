const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function createFile() {
    rl.question("Enter file name: ", (fileName) => {
        rl.question("Enter file content: ", (content) => {
            fs.writeFile(fileName, content, (error) => {
                if (error) {
                    console.log("Error creating file:", error.message);
                } else {
                    console.log("File created successfully.");
                }
                showMenu();
            });
        });
    });
}

function readFile() {
    rl.question("Enter file name: ", (fileName) => {
        fs.readFile(fileName, "utf8", (error, data) => {
            if (error) {
                console.log("Error reading file:", error.message);
            } else {
                console.log("\nFile Content:");
                console.log(data);
            }
            showMenu();
        });
    });
}

function updateFile() {
    rl.question("Enter file name: ", (fileName) => {
        rl.question("Enter new content: ", (content) => {
            fs.writeFile(fileName, content, (error) => {
                if (error) {
                    console.log("Error updating file:", error.message);
                } else {
                    console.log("File updated successfully.");
                }
                showMenu();
            });
        });
    });
}

function deleteFile() {
    rl.question("Enter file name: ", (fileName) => {
        fs.unlink(fileName, (error) => {
            if (error) {
                console.log("Error deleting file:", error.message);
            } else {
                console.log("File deleted successfully.");
            }
            showMenu();
        });
    });
}

function showMenu() {
    console.log("\n===== File Manager =====");
    console.log("1. Create File");
    console.log("2. Read File");
    console.log("3. Update File");
    console.log("4. Delete File");
    console.log("5. Exit");

    rl.question("Enter your choice: ", (choice) => {
        switch (choice) {
            case "1":
                createFile();
                break;

            case "2":
                readFile();
                break;

            case "3":
                updateFile();
                break;

            case "4":
                deleteFile();
                break;

            case "5":
                console.log("Exiting File Manager...");
                rl.close();
                break;

            default:
                console.log("Invalid choice. Please try again.");
                showMenu();
        }
    });
}

showMenu();
