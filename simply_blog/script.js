// var blogs= []
function add(){
    var b = []
    var c = document.getElementById('Article').value
    var d = document.getElementById('Author').value
    var f = document.getElementById('text1').value
    document.getElementById('Article').value = null
    document.getElementById('Author').value = null
    document.getElementById('text1').value = null

    b.push(c)
    b.push(d)
    b.push(f)
    localStorage.setItem("Article_name", JSON.stringify(b[0]));
    localStorage.setItem("Author_name", JSON.stringify(b[1]));
    localStorage.setItem("details", JSON.stringify(b[2]));




}

function display(){
    let new_blog;
    const con = document.getElementById("main")
    var result = JSON.parse(localStorage.getItem("Article_name"));
    var result2 = JSON.parse(localStorage.getItem("Author_name"));
    var result3 = JSON.parse(localStorage.getItem("details"));
    localStorage.clear()
    if (result!=undefined && result !=null){
        new_blog = `<div class='text center bg-success'><h1>Article name is ${result}</h1><p>Information is ${result3}</p><h4>contributed by ${result2}</h4>`
        con.innerHTML += new_blog
        
    }
    else{
        const myform = document.getElementById("ra")
        myform.addEventListener("display",(e)=>{e.preventDefault();});
    }   
}


