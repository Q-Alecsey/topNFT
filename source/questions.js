
export function answersToQuestions(){

    const QuestionsPool = document.querySelectorAll(".questions__pool-pattern");

    QuestionsPool.forEach((item) =>{

        const button = item.querySelector(".questions__pool-pattern__button");
        const absoluteText = item.querySelector(".questions__pool-pattern__response");
        
        button.addEventListener("click", () =>{

            absoluteText.classList.toggle("questions__pool-pattern__button--visibled");
        });
        
    })
    
}