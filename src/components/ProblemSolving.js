import React from 'react'

const ProblemSolving = () => {
    return (
        <>
        <div className='container'>
            ProblemSolving (Check Console)
        </div>
        </>
        
    )
}
function solveProblem(arr) {
            const charCount = {};
            let maxChar = arr[0];
            let maxCount = 1;
        
            for (const char of arr) {
                charCount[char] = (charCount[char] || 0) + 1;
        
                if (charCount[char] > maxCount) {
                    maxChar = char;
                    maxCount = charCount[char];
                }
            }
            const result = { [maxChar]: maxCount };
            console.log(result);
}


solveProblem(['a', 'a', 'b', 'b', 'a', 'b', 'c', 'c', 'a', 'c', 'a', 'a']) 
solveProblem(['3', '1', '1', '2', '1', '1', '2', '2', '2', '2', '2', '1', '3', '3', '1', '2'])
solveProblem(['a', 'a', 'b', 'b', 'a', 'b', 'c', 'c', 'a', 'c', 'a', 'a', 'a', 'a', 'b', 'b', 'a',
    'b', 'c', 'c', 'a', 'c', 'a', 'a', 'a', 'a', 'b', 'b', 'a', 'b', 'c', 'c', 'a', 'c', 'a', 'a', 'a', 'a',
    'b', 'b', 'a', 'b', 'c', 'c', 'a', 'c', 'a', 'a',])


export default ProblemSolving



























    // if (!arr || arr.length === 0) {
    //             console.log("Input array is empty");
    //             return;
    //         }