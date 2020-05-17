export function titleCase(sentence) {
    return sentence
        .split(' ')
        .map(word => {
            if (word.trim() !== '') {
                return word.replace(word[0], word[0].toUpperCase());
            }
            return word;
        })
        .join(' ');
}

export function arr2KeyValue(array) {
    const keyValueArr =
        array.map((task, i) => (
            { id: i, text: task }
        ));
    return keyValueArr
}

export function keyValue2Arr(array) {
    let a = []
    array.map(task => (
        a.push(task.text)
    ))
    return a;
}