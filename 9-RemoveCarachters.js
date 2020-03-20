/* 9. Remove characters
Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
Output: 'Bttl f th Vwls: Hw vs. Grzny'
*/

function remove(str, charToRemove){
    let result = '';
    for(let i =0; i<=str.length; i++){
        if(str.charAt[i] != charToRemove){
            result += str.charAt[i];
            console.log(result)
        }
    }
    console.log(result)
}

