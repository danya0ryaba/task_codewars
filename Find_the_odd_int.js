function findOdd(A) {
   for (let i = 0; i < A.length; i++) {
        let count = 0;
        let elem = A[i];
        for (let k = 0; k < A.length; k++) {
            if (elem === A[k]) count++;
        }
        if (count % 2 === 1) return elem;
    }
}
