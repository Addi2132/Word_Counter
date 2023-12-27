import inquirer from "inquirer";
async function wordCounter() {
    const userInput = await inquirer.prompt([
        {
            type: "input",
            name: "sentence",
            message: "Enter a sentence to count the words:"
        }
    ]);
    // Remove punctuation and extra spaces, then trim the sentence
    const formattedSentence = userInput.sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ").trim();
    const wordCount = formattedSentence.split(" ").length;
    // Display the word count
    console.log(`The sentence has ${wordCount} ${wordCount === 1 ? 'word' : 'words'}.`);
}
wordCounter();
