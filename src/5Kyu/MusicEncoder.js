function MusicEncoder(array) {
    let range = {}
    let step = {}
    let mul = {}

    let stepCount = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i + 1] - array[i] === 1) {
            range[array[i]] = {
                "start": i,
                "end": i + 1
            }
        } else if (array[i + 1] - array[i] === 2) {
            step[array[i]] = {
                "start": i,
                "end": i + 1
            }
         } //else if (array[i + 1] - array[i] === 2) {
        //     mul[array[i]] = {
        //         "start": i,
        //         "end": i + 1
        //     }
        // }
    }
    console.log("Range Obj", range,"Steo Obj", step,"Mul Obj", mul)
}

MusicEncoder([0, 2, 4, 5, 7, 6, 5, 5, 5, 5, 5])