// 1,2,Mari,4,Berkarya,Mari,7,8,Mari,Berkarya,11,Mari,13,14,Mari Berkarya, 16,17,Mari,19,Berkarya,Mari,22,23,Mari,Berkarya,26,Mari,28,29,Mari Berkarya, 31,32,Mari,34,Berkarya,Mari,37,38,Mari,Berkarya,41,Mari,43,44,Mari Berkarya, 46,47,Mari,49,Berkarya,Mari,52,53,Mari,Berkarya,56,Mari,58,59,Mari Berkarya, 61,62,Mari,64,Berkarya,Mari,67,68,Mari,Berkarya,71,Mari,73,74,Mari Berkarya, 76,77,Mari,79,Berkarya,Mari,82,83,Mari,Berkarya,86,Mari,88,89,Mari Berkarya, 91,92,Mari,94,Berkarya,Mari,97,98,Mari,Berkarya

const total = 100;
const result = []
for (let i = 1; i <= total; i++) {

    if (i % 15 == 0) {
        result.push('Mari Berkarya');
        continue;
    }

    if (i % 3 == 0){
        result.push('Mari');
        continue;
    } 
    if (i % 5 == 0) {
        result.push('Berkarya');
        continue;
    }

    result.push(i);
}

console.log(result);