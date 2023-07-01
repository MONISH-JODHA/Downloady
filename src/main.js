
function download(filename,content,content1,content2,content3){
    console.log("Function is called");
    const element=document.createElement("a");

    var blob = new Blob([content,content1,content2,content3]
        ,{type:"text/plain"});
    const fileurl=URL.createObjectURL(blob);

    element.setAttribute("href",fileurl);
    element.setAttribute("download",filename);
    element.style.display="none";

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

}

document.addEventListener("DOMContentLoaded",function(){
    console.log("window is ready");
    document.getElementById("download").addEventListener("click", function() {
    

        const filename=document.getElementById("file").value;
        const ee=document.getElementById("name").value;
        const content=ee+",";
        const ee1=document.getElementById("email").value;
        const content1=ee1+",";
        const ee2=document.getElementById("subject").value;
        const content2=ee2+",";
        const ee3=document.getElementById("message").value;
        const content3=ee3+",";
       
if (filename && content){
    download(filename,content,content1,content2,content3);
    
}

    })
})
console.log("hi node")