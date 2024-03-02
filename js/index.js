const cardContainer =document.getElementById('card-container')
const latestContainer =document.getElementById('latest-container')
const markContainer =document.getElementById('mark-container')
const markCountContainer =document.getElementById('mark-count-container')
const inputField =document.getElementById('input-field')
const inputBtn =document.getElementById('input-btn')

let markCount = 0;



let isActive = ''

const allPostCategory = async (category) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`)
    const data = await response.json()
    const cardInfo = data.posts;
    allCardCategory(cardInfo);
    
    
}




const allCardCategory =(card) =>{

    cardContainer.textContent = ' ';
   
    card.forEach((info) =>{
        // console.log(info)

        if(info.isActive){
           
            isActive = 'bg-green-600'
            
        }else{
            isActive = 'bg-red-600'
        }

        
        ;
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
            <img onclick="markBtn('${info.view_count},${info.title}')" class =" lg:absolute right-6 bottom-6" src="images/email 1.png" alt="">
        </div>

    </div>
        `
        cardContainer.appendChild(div)


        
    })
}

//      title mark  as red


function markBtn(data){
    markCount++;
    markCountContainer.innerText = markCount;
 
    const [views,title] = data.split(",");

    const div = document.createElement('div');
    div.classList = `flex p-5 bg-white mt-4 rounded-2xl`
    div.innerHTML = `
    <div class=" w-[75%]">
                        <h1 class="text-xl font-bold ">${title}</h1>
                    </div>
                    <div class="flex items-center gap-3">
                        <img class="size-10" src="images/eye.png" alt="">
                        <h1 class="text-xl">${views}</h1>
                    </div>
    `
    markContainer.appendChild(div)
}



inputBtn.addEventListener('click', async () =>{
    const category = inputField.value
    console.log(category)
    allPostCategory(category);
    
})












//        LatestPosts funtion


const latestPosts = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data = await res.json();

    data.forEach((post) =>{
        

        const div = document.createElement('div');
        div.classList = `mx-auto w-[90%] lg:w-[31%]  p-6 rounded-2xl  border-2`;
        div.innerHTML = `
        <div >
                    <img  src="${post.cover_image}" alt="" class="mx-auto rounded-2xl">
                    <div class="mt-4 pl-8">
                        <div class="flex gap-4 items-center  ">
                            <i class="fa-regular fa-calendar text-2xl"></i>
                            <h1 class="text-xl">${post.author.posted_date ? post.author.posted_date : 'No Publish Date' }</h1>
                        </div>
                        <h1 class="text-2xl font-bold my-4">${post.title}</h1>
                        <p class="text-xl">${post.description.slice(0,100)}</p>
                        <div class="flex gap-6 my-4 items-center">
                            <div class="  w-14 h-14 ">
                                <img class="rounded-full" src="${post.profile_image}g" alt="">
                            </div>
                            <div>
                                <h1 class="text-xl font-bold">${post.author.name}</h1>
                                <p>${post.author.designation ? post.author.designation : 'unknown'}</p>
                            </div>
                        </div>
                    </div>
                </div>
        `
        latestContainer.appendChild(div)

    })
}








allPostCategory('')
latestPosts();





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



