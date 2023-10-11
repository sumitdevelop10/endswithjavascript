const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// Expected output: true

console.log(str1.endsWith('best', 17));
// Expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// Expected output: false

const str3 = 'did i get the job!';

console.log(str3.endsWith('job!'));

console.log(str3.endsWith('job', 4));