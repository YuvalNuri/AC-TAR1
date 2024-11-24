var numbersStr;

class Counter {
    constructor() {
        this.Count = 0;
    }

    Initialize(value) {
        var intVal = parseInt(value);
        if (Number.isInteger(intVal)) {
            this.Count = intVal;
            console.log(this.Count);
        }
        else
            console.error("Please insert integer");
    }

    Increment() {
        this.Count += 1;
    }

    Go() {
        numbersStr = "";
        for (let i = 0; i <= this.Count; i++) {
            console.log(i);
            numbersStr += `${i}<br/>`;
        }
    }
}

const c1 = new Counter();

function init() {
    document.getElementById("startBTN").addEventListener("click", () => {
        c1.Initialize(document.getElementById("numIN").value);
        console.log(c1.Count);
    });

    document.getElementById("plusBTN").addEventListener("click", () => {
        c1.Increment();
        document.getElementById("numIN").value = c1.Count;
    });

    document.getElementById("goBTN").addEventListener("click", () => {
        c1.Go();
        if (document.getElementById("numbersP")) {
            document.getElementById("numbersP").innerHTML = numbersStr;
        }
        else
            $("#numIN").after(`<p id="numbersP">${numbersStr}</p>`);
    });
}