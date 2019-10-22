const sampleSentence = "|/-\|/-\\";

const mystery = (sentence, index = 0) => {
    
    process.stdout.write(sentence[index % sentence.length] + '\r');

    setTimeout(() => {
      mystery(sentence, index+1);
    }, 300);
    
}

mystery(sampleSentence);