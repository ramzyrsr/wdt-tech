function character(str) {
    const seen = new Set();
    let result = ""

    for (let i = str.length; i > 0; i--) {
        const char = str.charAt(i);

        if (seen.has(char)) {
            continue;
        }
        seen.add(char);
        result = char;
    }
    
    return result;
}

console.log(character("the quick brown fox jumps  then quickly blow air"))