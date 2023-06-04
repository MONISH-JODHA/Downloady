
function download(filename,content,content1,content2,content3,content4,content5){
    console.log("Function is called");
    const element=document.createElement("a");

    var blob = new Blob([content,content1,content2,content3,content4,content5]
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
        const ee=document.getElementById("ff").value;
        const content=ee+",";
        const ee1=document.getElementById("ff1").value;
        const content1=ee1+",";
        const ee2=document.getElementById("ff2").value;
        const content2=ee2+",";
        const ee3=document.getElementById("ff3").value;
        const content3=ee3+",";
        const ee4=document.getElementById("ff4").value;
        const content4=ee4+",";
        const ee5=document.getElementById("ff5").value;
        const content5=ee5+"";

if (filename && content){
    download(filename,content,content1,content2,content3,content4,content5);
    
}

    })
})
