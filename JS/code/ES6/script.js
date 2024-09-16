class radhikaInstitute
{
    glamour; isGood; isDanger;
    constructor(a,b,c)
    {
        this.glamour = a;
        this.isDanger = b;
        this.isGood = c;
    }
    cheat ()
    {
        console.log(" yes, i can cheat")
    }
}
class Lilly extends radhikaInstitute
{
    isLove;
    constructor(p,q,r,s)
    {
        super(q,r,s) // call parent class constructor
        this.isLove = p;
    }
}
let g1 = new radhikaInstitute()
console.log(g1.cheat())
let g2 = new Lilly("no","good","yes","yes")
console.log(g2)
export default g1;
export {radhikaInstitute,Lilly,g2}