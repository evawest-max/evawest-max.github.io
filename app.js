    const newBTN=document.createElement('button')
    const btnDiv=document.getElementById("submitBTN")
    const nextbtn=document.getElementById("next")
    const btncontainer=document.getElementById("btncontainer")
    const toggle1=document.getElementById("toggle1")
    const toggle2=document.getElementById("toggle2")
    const toggle3=document.getElementById("toggle3")
    const form1=document.getElementById("form1")
    const form2=document.getElementById("form2")
    const form3=document.getElementById("form3")
    const filltext=document.getElementById("filltext")
    const previous=document.getElementById("previous")
    const rating = document.querySelectorAll(".rating i");

        let star=0
    rating.forEach((rate, index1)=>{
        let starclicks=0
        star=starclicks
        rate.addEventListener('click', ()=>{
            //console.log(index1)
            starclicks=index1+1
            console.log(starclicks)
            rating.forEach((rate, index2)=>{
                index1 >= index2 ? rate.classList.add("checked") : rate.classList.remove("checked")
            })
        })
    })
    console.log(star)
    
    let addcount=0

    function addSubmitButton(){
        // this function add the submit button if it is on the last form
        // this function will style the color of the numbers of the form based on the condition below
        // this fuction will also change to the correct form if the condition stated below is true
            addcount++
            if (addcount==1){
                form1.style.cssText='display: none;'
                form2.style.cssText='display: block; background-color: white'
                form3.style.cssText='display: none;'

                toggle1.style.cssText='background-color: white;'
                toggle2.style.cssText='background-color: purple; color: white;'
                toggle3.style.cssText='background-color: white;'
                filltext.innerHTML='Please ensure you fill the form correctly'
                previous.style.cssText='display: block;'


            }else if(addcount==2){
                form1.style.cssText='display: none;'
                form2.style.cssText='display: none;'
                form3.style.cssText='display: block; background-color: white;'

                toggle1.style.cssText='background-color: white;'
                toggle2.style.cssText='background-color: white; border: 2px solid purple; border-radius: 50px;'
                toggle3.style.cssText='background-color: purple; color: white;'

                
                filltext.innerHTML='Let us know how you feel about the program.'
                btnDiv.style.cssText='display:block'

                nextbtn.remove()

                
                newBTN.innerHTML="submit"
                newBTN.setAttribute('id','submitBTN')
                newBTN.addEventListener("click", addperson)
                newBTN.setAttribute('type', 'button');
                btnDiv.appendChild(newBTN)
            }
        
    }

    
    function removeSubmitButton(){
        // this function removes the submit button if it is on the second or first form
        // this fuction will also change to the correct form if the condition stated below is true

        addcount--

        if (addcount==1){
            btnDiv.removeChild(newBTN)
            form1.style.cssText='display: none;'
            form2.style.cssText='display: block; background-color: white'
            form3.style.cssText='display: none;'

            toggle1.style.cssText='background-color: white;'
            toggle2.style.cssText='background-color: purple; color: white;'
            toggle3.style.cssText='background-color: white;'

            filltext.innerHTML='Please ensure you fill the form correctly'

            btncontainer.appendChild(nextbtn)
        }else if(addcount==0){
            form1.style.cssText='display: block; background-color: white; '
            form2.style.cssText='display: none;'
            form3.style.cssText='display: none;'

            toggle1.style.cssText='background-color: purple; color: white;'
            toggle2.style.cssText='background-color: white;'
            toggle3.style.cssText='background-color: white;'
            
            filltext.innerHTML='Please ensure you fill the form correctly'
            previous.style.cssText='display: none;'
            
        }else if (addcount<0){
            addcount++
        }
    }





// this list is going to store all the objects(each students data)
const listOfStudents=[]

// this function is used to create new objects were we will store each student data
function studentObject(name, email, location, phoneNumber,course, gender, comments, rating  ){
    return{name, email, location, phoneNumber,course, gender, comments, rating }
}

    //code below gets all the values from each input field in the page
    const pagename= document.getElementById("name")
    const pageEmail= document.getElementById("email")
    const pageLocation=document.getElementById("location")
    const pagePhonenumber=document.getElementById("phonenumber")
    const pageCourse=document.getElementById("enrolled-course")
    const pageGender=document.getElementById("gender")
    const pageComments=document.getElementById("comments")
    const pageRating=document.getElementById("rating")

    let numbs = /^[0-9]+$/
    let letters = /^[A-Za-z" "]+$/
    pageComments.addEventListener("blur", validatecomment)
    function validatecomment(){
        if(pageComments.value==null || pageComments.value==undefined){
            pageComments.style.cssText="border:solid; border-color:red";
        }else{
            pageComments.style.cssText="border:solid; border-color:green";
        }
    }

    pageLocation.addEventListener("blur", validatelocation)
    function validatelocation(){
        pageLocation.style.cssText="border:solid; border-color:green";
    }

    pagePhonenumber.addEventListener("blur", ()=>{
        if (pagePhonenumber.value.match(numbs)){
                pagePhonenumber.style.cssText="border:solid; border-color:green;"
        }else{
                pagePhonenumber.style.cssText="border:solid; border-color:red;"
            }
    })

    pageEmail.addEventListener('blur', validateemail)
    function validateemail(){

        if (pageEmail.value.match("@")){
            pageEmail.style.cssText="border:solid; border-color:green;"
            console.log("yes")
        }else{
            pageEmail.style.cssText="border:solid; border-color:red;"
            console.log("no")
        }
    }
    
    pagename.addEventListener("blur", validatename)
    function validatename(){

        if (pagename.value.match(letters)){
            pagename.style.cssText="border:solid; border-color:green;"
            console.log("yes")
        }else{
            pagename.style.cssText="border:solid; border-color:red;"
            console.log("no")
        }
    }
    
let numberOfRivews=0
function addperson(){
    //the function below add each record to the database when you click on the submit button
    numberOfRivews++
    const person1= studentObject(pagename.value, pageEmail.value, pageLocation.value,pagePhonenumber.value, pageCourse.options[pageCourse.selectedIndex].text, pageGender.options[pageGender.selectedIndex].text, pageComments.value, star)
    listOfStudents.push(person1)

    for (item of listOfStudents){
        const result= document.getElementById("result")
        const contentContainer=document.createElement("div")
        const contentname =document.createElement("p")
        const contentemail=document.createElement("p")
        const contentlocation=document.createElement("p")
        const contentPhonenumber=document.createElement("p")
        const contentcourse=document.createElement("p")
        const contentgender=document.createElement("p")
        const contentcomment=document.createElement("p")
        const contentstar=document.createElement("p")
        const deleteButton=document.createElement("button")
        deleteButton.addEventListener('click', removereview)

        


        contentname.setAttribute('class','para')
        contentemail.setAttribute('class','para')
        contentlocation.setAttribute('class','para')
        contentPhonenumber.setAttribute('class','para')
        contentcourse.setAttribute('class','para')
        contentgender.setAttribute('class','para')
        contentcomment.setAttribute('class','para')
        contentContainer.setAttribute('id','para-container')
        contentstar.setAttribute('id','para-container')
        deleteButton.setAttribute('type', 'button')
        deleteButton.innerHTML="Delete"
        
        
        contentname.textContent=`Name: ${pagename.value}`
        contentemail.textContent=`E-mail: ${pageEmail.value}`
        contentlocation.textContent=`Location: ${pageLocation.value}`
        contentPhonenumber.textContent=`Phone number: ${pagePhonenumber.value}`
        contentcourse.textContent=`Course of choice: ${pageCourse.options[pageCourse.selectedIndex].text}`
        contentgender.textContent=`Gender:${pageGender.options[pageGender.selectedIndex].text}`
        contentcomment.textContent=`Comments: ${pageComments.value}`
        contentstar.textContent=`Star: it is a test`
        
        contentContainer.appendChild(contentname)
        contentContainer.appendChild(contentemail)
        contentContainer.appendChild(contentlocation)
        contentContainer.appendChild(contentPhonenumber)
        contentContainer.appendChild(contentcourse)
        contentContainer.appendChild(contentgender)
        contentContainer.appendChild(contentcomment)
        contentContainer.appendChild(contentstar)
        contentContainer.appendChild(deleteButton)
        result.appendChild(contentContainer)

        function removereview(){
            result.removeChild(contentContainer)
            listOfStudents.pop(listOfStudents.indexOf())
        }
    }

    filltext.textContent="Thank you for filling the form"
    form1.style.cssText='display: none;'
    form2.style.cssText='display: none; background-color: white'
    form3.style.cssText='display: none;'
    btnDiv.style.cssText='display: none;'

    let storagecount=1
    for (let i =0; i<listOfStudents.length; i++){
        localStorage.setItem( "person "+ storagecount++, JSON.stringify(listOfStudents[i]) )
    }

    /*for (let i=0; i<localStorage.length; i++){
        newlistOfStudent.push(localStorage.getItem( localStorage.key(i)))
    }
    console.log(newlistOfStudent)
    */

    console.log(listOfStudents)
}
 

//console.log(localStorage.clear())
