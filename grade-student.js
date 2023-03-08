'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    
    let grade = 0;
    let result = [];
    let n = grades.length;
  
    for (let i = 0; i <= n; i++) {
        if (grades[i] >= 0 && grades[i] <= 100) {
            if (grades[i] >= 38) {
                if (grades[i] % 5 !== 0 && grades[i] % 5 >= 3) {
                    grade = Math.floor(grades[i] / 5) * 5 + 5;
                    result.push(grade) + "\n";
                    }

                if (grades[i] % 5 !== 0 && grades[i] % 5 < 3) {
                    result.push(grades[i]);
                    }
                }
             if (grades[i] < 38) {
                result.push(grades[i]);
            }
            
            if (grades[i] % 5 === 0) {
              result.push(grades[i]);
            }
        }
      }
      return (result.join('\r\n'));
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
