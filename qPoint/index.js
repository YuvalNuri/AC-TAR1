class Point {
    constructor(X, Y) {
        this.X = this.ValidatePoint(X);
        this.Y = this.ValidatePoint(Y);
    }

    ValidatePoint(value) {
        var intVal = parseInt(value);
        if (Number.isInteger(intVal)) {
            return intVal;
        }
        else{
            console.error("Please insert integer");
        }
    }

    Show() {
        console.log(`(${this.X},${this.Y})`);
        return `(${this.X},${this.Y})`;
    }

    Equals(p) {
        return (p.X == this.X && p.Y == this.Y);
    }
}

//q2:
function ExistXY(x,y, points){
    p=new Point(x,y);
    for(let i=0;i<points.length;i++){
        if(p.Equals(points[i]))
            return true;
    }
    return false;
}

//q3:
function ExistPoint(p, points){
    for(let i=0;i<points.length;i++){
        if(p.Equals(points[i]))
            return true;
    }
    return false;
}

//q4:
function RouteDistance(points){
    dis=0;
    for(let i=0;i<points.length-1;i++){
        dis+=Math.sqrt(Math.pow(points[i].X-points[i+1].X,2)+Math.pow(points[i].Y-points[i+1].Y,2));
    }
    return dis;
}

function init(){
//prepare parameters for later
ps=[new Point(1,2),new Point(-2,5),new Point(0,4),new Point(-1,-1)];
xT=-2;
yT=5;
xF=7;
yF=2;
pT=new Point(xT,yT);
pF=new Point(xF,yF);

//q2:
document.getElementById("q2").innerHTML+=`<span>${new Point(xT,yT).Show()} || ${ExistXY(xT,yT,ps)}</span><br/>`;
document.getElementById("q2").innerHTML+=`<span>${new Point(xF,yF).Show()} || ${ExistXY(xF,yF,ps)}</span>`;

//q3:
document.getElementById("q3").innerHTML+=`<span>${pT.Show()} || ${ExistPoint(pT,ps)}</span><br/>`;
document.getElementById("q3").innerHTML+=`<span>${pF.Show()} || ${ExistPoint(pF,ps)}</span>`;


ps1=[new Point(1,2),new Point(2,5),new Point(0,4),new Point(1,1)];

str="";
for(let i=0;i<ps1.length;i++){
    str+=`<span>${ps1[i].Show()}</span><br/>`;
}
str+=`Total distance: ${RouteDistance(ps1)}`;

document.getElementById("q4").innerHTML+=str;
}