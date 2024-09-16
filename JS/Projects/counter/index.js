const countValue = document.getElementById('count')
console.log(countValue.textContent);
let c = 0;
function incr ()
{
    c++;
    countValue.textContent = c;
}
function decr ()
{
    c--;
    countValue.textContent = c;
}
function reset ()
{
    c=0
    countValue.textContent=c
}