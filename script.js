

async function api() {

   
        let url = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json');

        let output = await url.json();
    
        // console.log(output); 

        let body = document.querySelector('body')
         let container = document.createElement('div')
         container.classList.add('container')
         body.append(container)
   
    

        for(let i of Object.keys(output)){
          
         
        let card = document.createElement('div')
        card.classList.add("card")
        container.append(card)

        let cardHeader = document.createElement('div')
        cardHeader.classList.add("card-header")
        card.append(cardHeader)

        let heading = document.createElement('h1')
        cardHeader.append(heading)
        heading.innerText = i;

        let cardbody = document.createElement('div')
        cardbody.classList.add("card-body")
        card.append(cardbody)

         
          
            // Name:

            let para = document.createElement('p')
            cardbody.append(para)
            para.innerText = "Name : " + output[i].name

            //  author:
            
            let para2 = document.createElement('p')
            cardbody.append(para2)
            para2.innerText = "Author : " + output[i].author

          //  console.log(output[i].author)

           // Language:

           let para3 = document.createElement('p')
            cardbody.append(para3)
            para3.innerText = "Language : " + output[i].language
 
          //  console.log(output[i].language)
 
 
           // Link:

           let link1 = document.createElement('A')
           link1.setAttribute('href',output[i].link)
           link1.setAttribute('target','_blank')
            cardbody.append(link1)
            link1.innerText =  output[i].link
 
          //  console.log(output[i].link)
 
 
          
          


          //  console.log(output[i])
        }
        
  
}


api()