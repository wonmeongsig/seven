const questions = [
    ["1. 다른 사람들과 함께 있는 것이 더 편한가요?", 'E', 'I'],
    ["2. 계획을 세우는 것이 더 좋다고 생각하나요?", 'J', 'P'],
    ["3. 감정적인 이야기를 듣는 것이 더 편한가요?", 'F', 'T'],
    ["4. 새로운 경험을 시도하는 것이 좋은가요?", 'S', 'N'],
    ["5. 문제를 해결할 때 논리적으로 접근하는 것이 좋다고 생각하나요?", 'T', 'F'],
    ["6. 일할 때 미리 계획을 세우는 것을 선호하나요?", 'J', 'P'],
    ["7. 친구와의 깊은 대화를 좋아하나요?", 'E', 'I'],
    ["8. 세부사항에 주의하는 편인가요?", 'S', 'N'],
    ["9. 즉흥적으로 행동하는 것이 더 편한가요?", 'P', 'J'],
    ["10. 혼자 있는 시간이 필요하다고 느끼나요?", 'I', 'E'],
    ["11. 다른 사람들의 감정을 고려하며 행동하나요?", 'F', 'T'],
    ["12. 새로운 아이디어를 생각하는 것을 좋아하나요?", 'N', 'S'],
    ["13. 여러 가지 일을 동시에 처리하는 것이 더 좋다고 생각하나요?", 'P', 'J'],
    ["14. 규칙을 따르는 것을 선호하나요?", 'J', 'P'],
    ["15. 자신의 감정을 다른 사람에게 잘 표현하나요?", 'F', 'T'],
    ["16. 상황에 따라 유연하게 대처하는 것을 좋아하나요?", 'P', 'J']
];

const form = document.getElementById('mbti-form');
const questionsContainer = document.getElementById('questions-container');

if (questionsContainer) {
    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
            <p>${question[0]}</p>
            <label><input type="radio" name="question_${index}" value="a"> 예</label>
            <label><input type="radio" name="question_${index}" value="b"> 아니오</label>
        `;
        questionsContainer.appendChild(questionElement);
    });
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const results = {'E': 0, 'I': 0, 'S': 0, 'N': 0, 'T': 0, 'F': 0, 'J': 0, 'P': 0};

    questions.forEach((_, index) => {
        const answer = document.querySelector(`input[name="question_${index}"]:checked`);
        if (answer) {
            const choice = answer.value === 'a' ? 0 : 1;
            const type = questions[index][1 + choice];
            results[type] += 1;
        }
    });

    const mbtiType = 
        (results['E'] > results['I'] ? 'E' : 'I') +
        (results['S'] > results['N'] ? 'S' : 'N') +
        (results['T'] > results['F'] ? 'T' : 'F') +
        (results['J'] > results['P'] ? 'J' : 'P');

    window.location.href = `result.html?mbti=${mbtiType}`;
});
