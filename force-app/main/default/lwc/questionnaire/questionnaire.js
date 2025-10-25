import { LightningElement, track } from "lwc";

export default class Questionnaire extends LightningElement {
  @track questions = [
    {
      id: 1,
      question: "What is 2+2 ?",
      choices: [
        { id: 0, ch: "4" },
        { id: 1, ch: "8" }
      ],
      answer: 0
    },
    {
      id: 2,
      question: "What is 4+4 ?",
      choices: [
        { id: 0, ch: "4" },
        { id: 1, ch: "8" }
      ],
      answer: 1
    }
  ];

  answer = [0, 1];
  userAnswer = new Array(this.questions.length).fill(-1);
  totalScore = 0;

  handleClick(event) {
    const qIndex = Number(event.currentTarget.dataset.qindex);
    const cIndex = Number(event.currentTarget.dataset.cindex);

    this.questions[qIndex].choices.forEach(
      (choice) => (choice.checked = false)
    );

    this.questions[qIndex].choices[cIndex].checked =
      this.userAnswer[qIndex] === cIndex ? false : true;

    this.userAnswer[qIndex] = this.userAnswer[qIndex] === cIndex ? -1 : cIndex;

    //! Use when not using @track, as nested components being modified reassigning is more reliable for re-render !!
    // this.questions = [...this.questions];
  }

  calculateScore() {
    let c = 0;
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].answer === this.userAnswer[i]) c++;
    }
    this.totalScore = c;
  }

  isChecked(event) {
    const qIndex = Number(event.currentTarget.dataset.qindex);
    const cIndex = Number(event.currentTarget.dataset.cindex);
    return this.userAnswer[qIndex] === cIndex;
  }
}
