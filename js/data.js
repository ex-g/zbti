const qnaList = [
    {
        q: '1. 나는 휴일에',
        a: [
            { answer: 'a) 어디로 가는지 모르겠어도 일단 고민 보다 Go한다', type: 'P' },
            { answer: 'b) 언제 어디로 누구와 어떻게 왜 가는지 명확해야 한다 ', type: 'J' },
        ]
    },
    {
        q: '2. 나는 주말이나 휴일에 연인 혹은 친구와',
        a: [
            { answer: 'a) 보통 집에서 쉬거나 가까운 곳의 카페 등에서 만나 힐링하는 걸 선호한다', type: 'I' },
            { answer: 'b) 밖에 나가서 특정 장소를 방문하거나 활동을 하는 걸 선호한다', type: 'O' },
        ]
    },
    {
        q: '3. 나는 할 일이 생기면',
        a: [
            { answer: 'a) 거의 마지막까지 미루다가 하는 편이다', type: 'L' },
            { answer: 'b) 최대한 빠르게 일을 끝내야 마음이 편하다', type: 'E' },
        ]
    },
    {
        q: '4. 나는 친구와 음식을 먹기 전',
        a: [
            { answer: 'a) 사진을 찍지 않는다', type: 'M' },
            { answer: 'b) 예쁘게 찍으려고 한다', type: 'F' },
        ]
    },
    {
        q: '5. 나는 여행 계획을 세울 때',
        a: [
            { answer: 'a) 동선만 대강 정하고 융통성 있는 여행을 즐기는 편이다', type: 'P' },
            { answer: 'b) 시뮬레이션 처럼 어디 어디 갈지 다 정하고 플랜 B까지 만든다', type: 'J' },
        ]
    },
    {
        q: '6. 내가 더 좋아하는 건',
        a: [
            { answer: 'a) 카페, 도서관, 관람형 전시, 영화관', type: 'I' },
            { answer: 'b) 체험형 전시, 액티비티, 걷거나 돌아다니기(산책), 피크닉', type: 'O' },
        ]
    },
    {
        q: '7. 나의 일처리 방식은',
        a: [
            { answer: 'a) 벼락치기 전문', type: 'L' },
            { answer: 'b) 계획에 따른 순차적 접근 및 실행', type: 'E' },
        ]
    },
    {
        q: '8. 나는 여행을 가면',
        a: [
            { answer: 'a) 눈으로 풍경과 좋아하는 친구를 담는다.', type: 'M' },
            { answer: 'b) 남는 건 사진밖에 없어! 눈 말고 카메라 렌즈에 담는다', type: 'F' },
        ]
    },
    {
        q: '9. 여행 가서 식당을 찾을 때는',
        a: [
            { answer: 'a) 식당은 돌아다니다가 마음이 끌리는 곳으로 결정하는 편이다', type: 'P' },
            { answer: 'b) 평점, 후기를 고려한 맛집 리스트업 후 어디를 갈지 미리 정해둔다', type: 'J' },
        ]
    },
    {
        q: '10. 나는',
        a: [
            { answer: 'a) 집에서 할 게 진짜 많다', type: 'I' },
            { answer: 'b) 밖에서 어떤 활동이 재밌는지 많이 알고 있고 그걸 즐긴다', type: 'O' },
        ]
    },
    {
        q: '11. 2달 동안 페어와 함께하는 미션 24개가 주어지면',
        a: [
            { answer: 'a) 우연히 만났을 때 해결하거나 막바지에 몰아서 할 것 같다', type: 'L' },
            { answer: 'b) 만나는 날을 미리 정하고 만날 때마다 차근차근할 것 같다', type: 'E' },
        ]
    },
    {
        q: '12. 사진을 찍었는데 생각한 대로 나오지 않았다...',
        a: [
            { answer: 'a) 찍혔으면 된 거다~', type: 'M' },
            { answer: 'b) 마음에 들 때까지 다시 찍는다', type: 'F' },
        ]
    }
]

const infoList = [
    {
        zbti: 'JOEF',
        nickname: '디테일 플래너',
        name: '꼼꼼한 여행 설계자',
        desc: '당신은 철저하게 계획을 세우는 것을 좋아하는 여행자예요. 여행 일정을 준비할 때 엑셀이나 앱을 활용해 세세하게 계획을 짜며, 하루의 모든 일정이 일정표에 빼곡히 들어있어야 마음이 편안하죠.\
                외부 활동을 선호하기 때문에 다양한 명소 탐방, 액티비티, 맛집 투어를 즐깁니다.\
                또한, 미리미리 준비하는 걸 좋아해 항공권, 숙소 예약, 필수 관광지 티켓 등 모든 준비가 완벽하죠.\
                게다가 여행 중 멋진 순간들을 꼼꼼히 사진으로 남기는 것을 중요하게 생각하는 스타일입니다. 여행이 끝난 후에도 사진 정리를 통해 추억을 되새기는 걸 좋아해요.',
        tip1: '시간에 쫓기지 않도록 여유 시간을 계획에 포함하세요.',
        tip2: '액티비티가 많더라도 체력 관리도 중요해요!',
        spot1: '일본 도쿄: 정교하게 짜인 도시에서 다양한 액티비티를 체험하며 사진 찍기 좋은 장소가 많아요.',
        spot2: '이탈리아 로마: 역사와 예술이 살아 숨 쉬는 명소들이 당신의 카메라에 담기기에 딱이에요.',
        spot3: '뉴질랜드 퀸스타운: 아웃도어 액티비티와 아름다운 자연 풍경이 완벽하게 어우러진 곳입니다.'
    },
    {
        zbti: 'JOEM',
        nickname: '스냅 플래너',
        name: '순간을 즐기는 계획자',
        desc: '당신은 여행을 철저히 계획하는 스타일이지만, 사진 찍는 것보다는 그 순간의 감정과 분위기를 즐기는 편이에요. 여행지를 방문할 때 시간과 동선을 완벽히 맞추는 것을 선호하지만, 기록보다는 오롯이 경험에 집중하는 모습을 보입니다. 관광 명소를 빠짐없이 돌아다니면서도 그 속에서 소소한 여유를 찾고, 지금 이 순간을 온전히 느끼는 것을 중요하게 생각합니다.',
        tip1: '주요 명소뿐만 아니라 계획에 작은 여유 시간을 포함해보세요.',
        tip2: '주변 사람들과의 대화를 통해 즉석에서 특별한 경험을 만들어보세요.',
        spot1: '스페인 바르셀로나: 예술과 낭만이 가득한 거리에서 특별한 순간을 만끽하세요.',
        spot2: '캐나다 몬트리올: 계획적으로 도시를 탐험하되, 여유롭게 문화를 체험할 수 있습니다.',
        spot3: '대한민국 여수: 밤바다를 보며 편안한 시간을 보낼 수 있는 최적의 여행지예요.'
    },
    {
        zbti: 'JOLF',
        nickname: '체계적인 여유자',
        name: '계획적인 여유 여행자',
        desc: '당신은 여행에서 충분한 준비와 계획을 중요시하는 동시에 여유를 즐기는 여행자입니다. 여행 전에 일정을 체계적으로 정리하지만, 그 일정 안에서 여유를 느끼고 싶은 스타일이에요. 외부 활동을 선호하지만, 사진보다는 그 순간을 기억하고 즐기려는 성향이 강합니다. 미리 계획하고 준비하지만, 그 과정에서 스트레스를 받지 않고 여유를 갖고 즐기려고 해요. 다양한 액티비티를 계획하면서도, 휴식의 순간도 놓치지 않는 여행을 선호합니다.',
        tip1: '여유 시간을 충분히 고려해, 일정에 유동성을 둬보세요.',
        tip2: '사진을 찍기보다는 여행지에서 느끼는 감각에 집중하세요.',
        spot1: '스위스 제네바: 기차로 유럽을 여행하며 여유로운 분위기를 즐기기에 완벽한 도시입니다.',
        spot2: '프랑스 니스: 해변과 고풍스러운 거리가 여행의 여유를 느낄 수 있는 곳입니다.',
        spot3: '캐나다 밴프: 자연을 즐기며 차분하게 여유를 즐길 수 있는 지역입니다.'
    },
    {
        zbti: 'JOLM',
        nickname: '완벽주의 계획자',
        name: '계획적인 순간 감상자',
        desc: '당신은 여행을 철저하게 계획하되, 그 과정에서 각 순간을 놓치지 않고 즐기려는 여행자입니다. 철저한 계획을 세우지만, 그 계획 안에서 여유를 찾고, 즉흥적인 순간도 즐기는 스타일이에요. 외부 활동을 선호하며, 액티비티에 집중하면서도 그 순간을 기억하고 사진으로 남기기보다는 마음에 담아두려 합니다. 모든 여행지에서 계획을 철저히 따르면서도, 그 속에서 개인적인 경험을 찾는 데 중점을 둡니다.',
        tip1: '계획 안에서 여유를 느낄 수 있는 시간을 마련해 보세요.',
        tip2: '여행 중 사진보다는 감각적으로 순간을 즐기는 걸 놓치지 마세요.',
        spot1: '프랑스 파리: 유명 관광지와 예술적 분위기를 동시에 즐길 수 있어요.',
        spot2: '영국 런던: 왕궁, 박물관, 그리고 차분한 공원에서 순간을 즐길 수 있습니다.',
        spot3: '이탈리아 베네치아: 고풍스러운 거리에서 계획을 따르되 여유를 갖고 탐방하기 좋아요.'
    },
    {
        zbti: 'JIEF',
        nickname: '철저한 촬영가',
        name: '계획적인 순간 기록자',
        desc: '당신은 여행에서 철저한 계획을 세우면서도, 그 순간을 완벽하게 기록하는 걸 중요하게 여기는 여행자입니다. 모든 일정을 미리 계획하고 준비하지만, 여행 중 만나는 순간을 놓치지 않기 위해 사진을 많이 찍는 스타일이에요. 여행의 전반적인 분위기와 순간을 정확하게 기록하며, 액티비티와 명소 탐방에서 느낀 감정을 사진으로 남깁니다. 이를 통해 여행 후에도 다시 그 순간을 되새기며 추억을 쌓습니다.',
        tip1: '일정을 짤 때 사진 촬영 시간을 충분히 고려하세요.',
        tip2: '여유로운 순간을 즐기면서도 사진을 놓치지 마세요.',
        spot1: '미국 뉴욕: 아이코닉한 장소에서 멋진 사진을 찍을 수 있어요.',
        spot2: '일본 교토: 고전적인 아름다움을 담기 좋은 고풍스러운 도시입니다.',
        spot3: '오스트리아 비엔나: 역사적인 건축물과 예술적인 순간을 담을 수 있어요.'
    },
    {
        zbti: 'JIEM',
        nickname: '여유로운 계획자',
        name: '계획적인 순간의 관찰자',
        desc: '당신은 여행에서 철저한 계획을 세우되, 계획 안에서 여유를 찾고 순간을 즐기는 여행자입니다. 모든 일정을 계획하지만, 그 안에서 자연스럽게 발생하는 순간에 집중하며 편안하게 여행을 즐기죠. 외부 활동을 선호하고, 여행 중 만나는 장소와 사람들을 편안하게 관찰하며 그 자체를 즐깁니다. 사진보다는 그 순간을 느끼고 기억하는 데 더 집중하는 스타일입니다.',
        tip1: '계획 안에 여유를 두고, 그 순간을 편안하게 즐기세요.',
        tip2: '여행의 여유로움을 즐기며 순간을 기억하세요.',
        spot1: '네덜란드 암스테르담: 여유롭고 평화로운 분위기를 느낄 수 있어요.',
        spot2: '아이슬란드: 자연의 아름다움 속에서 여유로운 시간을 보낼 수 있습니다.',
        spot3: '스위스 루체른: 고요한 호수와 산을 배경으로 여유롭게 여행할 수 있어요.'
    },
    {
        zbti: 'JILF',
        nickname: '체계적인 추억 촬영가',
        name: '완벽주의적인 여행 기록자',
        desc: '당신은 여행을 철저하게 계획하고, 그 순간들을 사진으로 기록하는 것을 중요하게 생각하는 여행자입니다. 계획을 세울 때, 여행의 각 순간을 어떻게 기록할지 고민하며, 외부 활동에서 만나는 멋진 장면을 사진으로 남기고 싶어합니다. 여행 중 만나는 감동적인 순간을 놓치지 않고 카메라로 담아내며, 나중에 사진을 통해 추억을 되새기길 좋아합니다.',
        tip1: '여행 전 촬영 장비와 준비물을 체크해 주세요.',
        tip2: '여행지에서 사진을 찍을 때, 순간을 놓치지 않도록 여유를 가지세요.',
        spot1: '프랑스 파리: 아이코닉한 명소에서 멋진 사진을 찍기에 완벽해요.',
        spot2: '뉴질랜드 퀸스타운: 자연의 아름다움을 사진으로 담을 수 있는 곳입니다.',
        spot3: '그리스 산토리니: 아름다운 섬에서 기억에 남을 순간을 기록할 수 있어요.'
    },
    {
        zbti: 'JILM',
        nickname: '여유 있는 여행 기록자',
        name: '계획적인 순간 감상자',
        desc: '당신은 여행을 철저히 계획하면서도, 그 순간을 자연스럽게 감상하고 즐기는 여행자입니다. 외부 활동을 즐기며 계획을 잘 세우지만, 여행 중 발생하는 순간들을 편안하게 기억하고 감상하는 스타일이에요. 사진을 찍기보다는 그 여행지에서의 감각적인 경험을 중요하게 여기며, 여행 중의 여유로운 순간을 마음에 담아두려 합니다.',
        tip1: '여행지에서의 순간을 편안히 감상하며 시간을 보내세요.',
        tip2: '일정을 짤 때 여유를 두고, 순간을 기억할 수 있는 시간을 만들어 보세요.',
        spot1: '이탈리아 로마: 역사와 문화를 느끼며 여유롭게 여행할 수 있는 곳이에요.',
        spot2: '포르투갈 리스본: 아름다운 거리를 걸으며 그 순간을 즐기기 좋아요.',
        spot3: '스페인 바르셀로나: 문화와 예술을 감상하며 여유로운 여행을 즐길 수 있는 도시입니다.'
    },
    {
        zbti: 'POEF',
        nickname: '즉흥적인 촬영가',
        name: '즉흥적인 여행 기록자',
        desc: '당신은 여행을 즉흥적으로 즐기면서, 그 순간을 사진으로 기록하는 여행자입니다. 여행지에서 일어나는 예상치 못한 상황과 순간을 즐기며, 그 순간을 카메라에 담는 것이 중요해요. 외부 활동을 선호하고, 여행지에서의 다양한 경험을 즉석에서 촬영하고 싶어합니다. 철저한 계획보다는 그 순간의 자연스러움을 담고, 기억에 남을 만한 장면을 놓치지 않기 위해 카메라를 듭니다.',
        tip1: '즉흥적인 순간을 즐기되, 사진을 찍을 때는 여유를 가지고 찍어 보세요.',
        tip2: '여행 중 새로운 경험을 적극적으로 시도해보세요.',
        spot1: '스페인 바르셀로나: 다채로운 건축물과 거리 예술이 넘쳐나는 곳입니다.',
        spot2: '모로코 마라케시: 즉흥적인 탐방과 촬영이 잘 어울리는 매력적인 도시입니다.',
        spot3: '페루 마추픽추: 멋진 풍경을 즉흥적으로 담을 수 있는 여행지입니다.'
    },
    {
        zbti: 'POEM',
        nickname: '즉흥적인 여유자',
        name: '즉흥적인 순간의 관찰자',
        desc: '당신은 여행 중 즉흥적인 순간을 즐기며 여유를 찾는 여행자입니다. 여행을 계획하기보다는 현장에서 발생하는 순간에 집중하며, 외부 활동을 선호합니다. 여행지에서의 경험을 즉흥적으로 즐기고, 그 순간을 편안하게 관찰하며 기억에 담는 스타일이에요. 사진보다는 그 순간을 머릿속에 담고, 여유를 갖고 그 분위기를 즐깁니다.',
        tip1: '여행 중 예기치 못한 순간을 즐기며 그 순간을 기억하세요.',
        tip2: '여유를 두고 새로운 장소를 탐방하며 즐길 수 있는 시간을 가져보세요.',
        spot1: '태국 방콕: 다양한 활동을 즉흥적으로 즐기기 좋은 곳입니다.',
        spot2: '미국 샌프란시스코: 여유롭고 자유로운 분위기에서 순간을 즐길 수 있습니다.',
        spot3: '브라질 리우데자네이루: 즉흥적인 활동을 즐기기 좋은 열정적인 도시입니다.'
    },
    {
        zbti: 'POLF',
        nickname: '즉흥적인 추억 촬영가',
        name: '즉흥적인 여행 기록자',
        desc: '당신은 여행 중 즉흥적인 순간을 즐기며, 그 순간을 사진으로 남기고 싶어하는 여행자입니다. 계획보다는 현장에서 느끼는 감정과 순간을 중요하게 생각하며, 이를 사진으로 기록하려 합니다. 외부 활동을 선호하며, 여행지에서의 다양한 경험을 즉흥적으로 담아내는 스타일입니다.',
        tip1: '사진을 찍을 때, 자연스러운 순간을 포착해보세요.',
        tip2: '즉흥적인 순간을 즐기고 기록하면서도 휴식을 취하는 시간을 가지세요.',
        spot1: '프랑스 파리: 멋진 건축물과 분위기를 즉흥적으로 담을 수 있습니다.',
        spot2: '이탈리아 로마: 역사적인 순간을 담을 수 있는 여행지입니다.',
        spot3: '네덜란드 암스테르담: 아름다운 풍경을 즉흥적으로 촬영하기 좋은 곳입니다.'
    },
    {
        zbti: 'POLM',
        nickname: '즉흥적인 여유자',
        name: '즉흥적인 순간 감상자',
        desc: '당신은 여행 중 즉흥적인 순간을 즐기고, 그 경험을 감상하는 것을 중요시하는 여행자입니다. 외부 활동을 선호하면서도, 사진을 찍기보다는 그 순간을 편안히 즐기며 기억하려 합니다. 여행지에서 일어나는 자연스러운 순간에 집중하고, 그 느낌을 소중히 간직하는 스타일입니다.',
        tip1: '여행지에서의 순간을 즐기고, 감각적으로 경험을 쌓아보세요.',
        tip2: '즉흥적인 탐방을 하면서도 여유를 잃지 마세요.',
        spot1: '스위스 루체른: 고요한 자연 속에서 여유로운 순간을 즐길 수 있습니다.',
        spot2: '일본 교토: 아름다운 사원과 전통적인 거리에서 여유로운 시간을 보낼 수 있습니다.',
        spot3: '포르투갈 리스본: 해변과 도시의 멋진 풍경을 즉흥적으로 즐기기 좋은 곳입니다.'
    },
    {
        zbti: 'PIEF',
        nickname: '철저한 촬영가',
        name: '계획적인 순간 기록자',
        desc: '당신은 여행에서 철저한 계획을 세우고, 그 순간을 사진으로 기록하는 여행자입니다. 모든 일정을 미리 준비하고, 여행지에서의 순간을 완벽하게 담기 위해 카메라를 준비합니다. 외부 활동을 선호하며, 여행지에서의 모든 감동적인 순간을 사진으로 담고, 이를 추억으로 간직하려고 합니다.',
        tip1: '일정에 맞춰 촬영 시간을 충분히 고려하고, 중요한 순간을 놓치지 마세요.',
        tip2: '여행 전 촬영 장비와 준비물을 체크해 주세요.',
        spot1: '프랑스 파리: 상징적인 명소에서 멋진 사진을 찍기에 이상적인 곳입니다.',
        spot2: '그리스 산토리니: 멋진 풍경을 담을 수 있는 여행지입니다.',
        spot3: '미국 뉴욕: 도시의 멋진 풍경과 랜드마크에서 사진을 촬영할 수 있습니다.'
    },
    {
        zbti: 'PIEM',
        nickname: '철저한 여유자',
        name: '계획적인 순간의 관찰자',
        desc: '당신은 철저하게 계획을 세우면서도, 여행 중에는 여유를 가지고 그 순간을 감상하는 여행자입니다. 외부 활동을 선호하고, 여행지에서 일어나는 순간을 머릿속에 담으며 감상합니다. 사진을 찍는 것보다 여행을 여유롭게 즐기는 것이 중요하고, 그 느낌을 기억하려 합니다.',
        tip1: '여유롭게 여행지에서의 순간을 즐기고, 그 감동을 기억하세요.',
        tip2: '계획을 세우되, 순간을 즐기는 시간을 놓치지 마세요.',
        spot1: '이탈리아 베네치아: 여유롭게 도시를 탐험하고, 그 순간을 즐기기 좋은 곳입니다.',
        spot2: '포르투갈 리스본: 편안하게 걷고 감상하며 여행을 즐길 수 있는 곳입니다.',
        spot3: '오스트리아 비엔나: 여유로운 분위기 속에서 문화와 예술을 즐길 수 있습니다.'
    },
    {
        zbti: 'PILF',
        nickname: '즉흥적인 추억 촬영가',
        name: '즉흥적인 여행 기록자',
        desc: '당신은 여행 중 즉흥적으로 일어나는 순간을 기록하며 즐기는 여행자입니다. 계획보다는 현장에서 만나는 순간을 중요하게 생각하고, 이를 카메라로 담으려고 합니다. 외부 활동을 즐기며, 새로운 경험을 촬영하고 그 순간을 기억하려 하는 스타일입니다.',
        tip1: '즉흥적인 순간을 놓치지 않도록 카메라는 항상 준비되어 있어야 해요.',
        tip2: '여행 중 새로운 장소를 발견하고, 그 순간을 촬영하면서 즐기세요.',
        spot1: '스페인 바르셀로나: 다채로운 거리와 예술이 넘치는 도시입니다.',
        spot2: '이탈리아 로마: 역사적인 순간을 기록하기 좋은 여행지입니다.',
        spot3: '영국 런던: 다양한 활동을 즐기면서 그 순간을 사진으로 담을 수 있어요.'
    },
    {
        zbti: 'PILM',
        nickname: '즉흥적인 여유자',
        name: '즉흥적인 순간 감상자',
        desc: '당신은 여행 중 즉흥적으로 발생하는 순간을 즐기고, 그 순간을 감상하는 여행자입니다. 외부 활동을 선호하며, 순간을 느끼고 기억하는 데 집중하는 스타일이에요. 사진을 찍기보다는 그 순간을 머릿속에 담고 여유를 가지며 감상합니다.',
        tip1: '즉흥적인 순간을 즐기되, 그 순간을 편안히 감상하는 시간을 가지세요.',
        tip2: '계획이 없더라도, 그 순간을 즐기고 기억할 수 있는 시간을 가져보세요.',
        spot1: '태국 방콕: 즉흥적으로 즐길 수 있는 거리와 문화가 많은 곳입니다.',
        spot2: '프랑스 파리: 여유롭게 거리를 걷고 분위기를 즐기기에 완벽한 도시입니다.',
        spot3: '뉴질랜드 퀸스타운: 아름다운 자연을 감상하며 여유를 가질 수 있는 곳입니다.'
    }
]