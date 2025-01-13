const intro = document.querySelector("#intro");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 12;
const zbti_score = {
    "J" : 0, "P" : 0,
    "O" : 0, "I" : 0,
    "E" : 0, "L" : 0,
    "F" : 0, "M" : 0
    }

// result 페이지에서 URL 복사하기
function copy() {
    navigator.clipboard.writeText("https://zbti.pages.dev/");
}

// intro에서 '시작하기' 버튼 클릭 시 begin() 함수 실행
function begin() {
    intro.style.WebkitAnimation = "fadeOut 1s";
    intro.style.animation = "fadeOut 1s";
    setTimeout(() => {
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        setTimeout(() => {
            intro.style.display = "none";
            qna.style.display = "block";
        }, 450)
        let qIdx = 0; 
        goNext(qIdx);
    }, 450)   
}

// qna 페이지의 답변란
function addAnswer(answerText, qIdx, aIdx) {
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('Button');
    answer.classList.add('answerList');

    qnaURL = './img/question/'

    if (aIdx == 0) {
        pic_url = qnaURL + qIdx + 'A.png';
    } else {
        pic_url = qnaURL + qIdx + 'B.png';
    }

    answer.style.background = answer.style.background = 'url(' + pic_url + ') no-repeat';
    answer.style.backgroundSize = 'cover';
    answer.style.width = '150px';
    answer.style.height = '257px';
    a.appendChild(answer);
    answer.innerHTML = answerText;

    // 답변 중 하나가 클릭되었을 때
    answer.addEventListener("click", function() {
        var children = document.querySelectorAll('.answerList');
        for (let i = 0; i < children.length; i++) {
            children[i].disablaed = true;
            children[i].style.WebkitAnimation = "fadeOut 0.5s";
            children[i].style.animation = "fadeOut 0.5s";
        }
        setTimeout(() => {
            // 답변과 관련된 타입 순서에 1 증가시킴
            var target = qnaList[qIdx].a[aIdx].type;
            zbti_score[target] += 1;

            // 답변 다 안 보이게 처리
            for (let i = 0; i < children.length; i++) {
                children[i].style.display = 'none';
            }
            goNext(++qIdx);
        }, 450)
    }, false);
}

// 질문 바꾸기
function goNext(qIdx) {
    if (qIdx === endPoint) {
        var infoBox = document.querySelector('.infoBox');
        var info = document.querySelector('.info');
        infoBox.disablaed = true;
        infoBox.style.WebkitAnimation = "fadeOut 0.5s";
        infoBox.style.animation = "fadeOut 0.5s";
        info.disablaed = true;
        info.style.WebkitAnimation = "fadeOut 0.5s";
        info.style.animation = "fadeOut 0.5s";
        goResult();
        return;
    }
    var q = document.querySelector(".qBox");
    q.innerHTML = qnaList[qIdx].q;

    var status = document.querySelector('.statusBar');
    status.style.width = (100 / endPoint) * (qIdx + 1) + '%';

    var info = document.querySelector(".info");
    info.innerHTML = qnaList[qIdx].i;

    for (let i in qnaList[qIdx].a) {
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }
}

// 결괏값 계산하기
function calResult() {
    var zbti = [];

    // # zbti 정의
    zbti_score["J"] >= 2 ? zbti.push("J") : zbti.push("P")
    zbti_score["O"] >= 2 ? zbti.push("O") : zbti.push("I") 
    zbti_score["E"] >= 2 ? zbti.push("E") : zbti.push("L") 
    zbti_score["F"] >= 2 ? zbti.push("F") : zbti.push("M") 

    zbti = zbti.join('');
    return zbti;
}

zbti_number_lst = {
    "JOEF" : 0, "JOEM" : 1, "JOLF" : 2, "JOLM" : 3,
    "JIEF" : 4, "JIEM" : 5, "JILF" : 6, "JILM" : 7,
    "POEF" : 8, "POEM" : 9, "POLF" : 10, "POLM" : 11,
    "PIEF" : 12, "PIEM" : 13, "PILF" : 14, "PILM" : 15
}


function setResult() {
    const zbti = calResult();
    const zbti_number = zbti_number_lst[zbti];
    const zbti_info = infoList[zbti_number];

    const resultNickname = document.querySelector('.resultNickname');
    resultNickname.innerHTML = zbti_info.nickname;

    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = zbti_info.name;

    // const resultImg = document.querySelector('.resultImg');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = './img/result/' + zbti_number + '.jpg';
    // var imgURL = './img/result/0.jpg';
    imgDiv.src = imgURL;
    // resultImg.pushChild(imgDiv);

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = zbti_info.desc;

    const resultTip1 = document.querySelector('.resultTip1');
    resultTip1.innerHTML = zbti_info.tip1;

    const resultTip2 = document.querySelector('.resultTip2');
    resultTip2.innerHTML = zbti_info.tip2;

    const resultSpot1 = document.querySelector('.resultSpot1');
    resultSpot1.innerHTML = zbti_info.spot1;

    const resultSpot2 = document.querySelector('.resultSpot2');
    resultSpot2.innerHTML = zbti_info.spot2;

    const resultSpot3 = document.querySelector('.resultSpot3');
    resultSpot3.innerHTML = zbti_info.spot3;
}

// 결과 페이지로 넘어가기
function goResult() {
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block";
        }, 450)
        setResult();
    })
}