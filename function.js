function content_down (id_paragraph){
    const elem= document.getElementById(id_paragraph);
    if(elem.style.display== "none")
        elem.style.display="block";
    else
       elem.style.display="none";
}


let nr_id=1;
let nr_pj=4;

function add_before(project_nr){
    document.getElementById("pj_" + nr_id).style.display="none";

    const new_pj=document.createElement("div");
    const element= document.getElementById(project_nr);
    element.style.display="block" 
    new_pj.appendChild(element);

    const x=document.getElementById("projects");
    x.insertAdjacentElement("afterend",new_pj);
}

function before_pj(){
    if(nr_id!=1){
        add_before("pj_"+ (nr_id-1));
        nr_id=nr_id-1;
    }
    else {
        add_before("pj_"+ nr_pj);
        nr_id=nr_pj;
    }
}

function after_pj(){
    if(nr_id!=nr_pj){
        add_before("pj_"+ (nr_id+1));
        nr_id=nr_id+1;
    }
    else {
       add_before("pj_1");
        nr_id=1;
    }
}