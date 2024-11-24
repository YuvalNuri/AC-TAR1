var duckStr;

class Duck {
    constructor(Name, Color, Age, Weight, Picture) {
        this.Name = Name;
        this.Color = Color;
        this.Age = Number.parseFloat(Age);
        this.Weight = Number.parseFloat(Weight);
        this.Picture = Picture;
    }

    Show() {
        duckStr = "";
        for (let a in this) {
            console.log(`${a}: ${this[a]}`);
            duckStr += `${a}: ${this[a]} <br/>`;
        }
        UpdateP();
    }

    Quack() {
        var num = (this.Age * this.Weight) / 2;
        duckStr = "";
        for (let i = 0; i < num; i++) {
            console.log("Quack");
            duckStr += "Quack <br/>";
        }
        UpdateP();
        for (let i = 1; i <= 3; i++) {
            setTimeout(function () {
                let duckSound = new Audio('quack.mp3');
                duckSound.play();
            }, i * 500);
        }
    }
}

d = new Duck("bu", "green", 2.5, 4, "url");

function init() {
    document.getElementById("submitBTN").addEventListener("click", () => {
        document.getElementById("submitBTN").disabled = true;
        let Name = document.getElementById("nameIN").value;
        let Color = document.getElementById("colorIN").value;
        let Age = document.getElementById("ageIN").value;
        let Weight = document.getElementById("weightIN").value;
        let Picture = document.getElementById("pictureIN").value;
        d = new Duck(Name, Color, Age, Weight, Picture);

        $("#submitBTN").after('<button id="ShowBTN">Show</button>');
        $("#ShowBTN").click(function () {
            d.Show();
        });
        $("#ShowBTN").after('<button id="QuackBTN">Quack</button>');
        $("#QuackBTN").click(function () {
            d.Quack();
        });
    });
}

function UpdateP(){
    let p=document.getElementById("funP");
    if (p)
        p.innerHTML = `<p id="funP">${duckStr}</p>`;
    else
        $("table").after(`<p id="funP">${duckStr}</p>`);
}

