const url = 'https://zbti.pages.dev/'

function setShare() {
    var resultImg = document.querySelector('.resultImg');
    var resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = 'BUDDY 여행 성향 테스트 결과';
    const shareDesc = infoList[resultAlt].nickname;
    const shareImage = url + 'img/result/' + resultAlt + '.jpg';
    const shareURL = url + 'result_page/result-' + resultAlt + '.html';

    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
        title: shareTitle,
        description: shareDesc,
        imageUrl:
            shareImage,
        link: {
            mobileWebUrl: shareURL,
            webUrl: shareURL,
        },
        },
        buttons: [
        {
            title: '결과 확인하기',
            link: {
            mobileWebUrl: shareURL,
            webUrl: shareURL,
            },
        },
        ],
    });
}