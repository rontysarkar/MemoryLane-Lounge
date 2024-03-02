const cardContainer =document.getElementById('card-container')




let isActive = ''

const allPostCategory = async () =>{
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await response.json()
    const cardInfo = data.posts;
    allCardCategory(cardInfo);
    
}


const allCardCategory =(card) =>{
   
    card.forEach((info) =>{
        // console.log(info)

        if(info.isActive){
           
            isActive = 'bg-green-600'
            
        }else{
            isActive = 'bg-red-600'
        }

        

        const div = document.createElement('div');
        div.classList = `lg:w-[780px] lg:h-[270px] rounded-xl bg-[#f3f3f5] p-2 lg:p-10 flex gap-6 mb-8 relative`
        div.innerHTML = `
        <div class="w-20 h-16 rounded-xl bg-white relative">
        <img class=" rounded-2xl" src="${info.image}" alt="">
        <div  class=" is-active w-3 h-3 ${isActive} rounded-full  absolute -right-1 -top-1"></div>
    </div>
    <div class="">
        <div class="flex gap-6">
            <h1># <span>${info.category}</span></h1>
            <h1>Author : <span>${info.author.name }</span></h1>
        </div>
        <h1 class="text-xl font-bold my-4">${info.title}</h1>
        <h2>${info.description}</h2>
        <hr class="border-dashed  bg-slate-300 my-4 ">

        <div class="flex justify-between">
            <div class="flex gap-2 lg:gap-8">
                <div class="flex gap-2">
                    <img src="images/messg.png" alt="">
                    <h1>${info.comment_count}</h1>
                </div>
                <div class="flex gap-2">
                    <img src="images/eye.png" alt="">
                    <h1>${info.view_count}</h1>
                </div>
                <div class="flex gap-2">
                    <img src="images/clock.png" alt="">
                    <h1>${info.posted_time}</h1>
                    <span>min</span>
                </div>
            </div>
            <img onclick="markBtn(${info.id})" class =" absolute right-6 bottom-6" src="images/email 1.png" alt="">
        </div>

    </div>
        `
        cardContainer.appendChild(div)


        
    })
}








allPostCategory()





// const markBtn = async (id) =>{
//     const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
//     const data = await res.json();
//     const posts = data.posts;
//     // console.log(posts)
//     for(let post of posts){
//         console.log(post.)
//     }
    

// }

// const cardInfo = (cardInfo) =>{
//     console.log(cardInfo)
//     cardInfo.forEach((info) =>{
//         console.log(info)

//     })
// }
