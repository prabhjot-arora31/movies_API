const main = document.getElementsByClassName('main')
fetch('http://localhost:3004/api').then((data)=>{
    return data.json()
}).then((rData)=>{
    const spinner = document.getElementsByClassName('spinner')
    spinner[0].style.display = 'none'
    console.log(rData)
    rData.map((item)=>{
        const name = item.name;
        const imageUrl = item.image;
        const h3 = document.createElement('h3')
        const image = document.createElement('img')
        h3.innerText = name;
        image.src = imageUrl;
        image.style.width = '200px'
        const div = document.createElement('div')
        div.append(h3)
        div.append(image)
        div.style.padding = '0.4rem';
        div.style.border = '2px solid black'
        div.style.fontFamily = 'verdana'
        div.style.borderRadius = '10px'
        div.style.cursor = 'pointer';
        div.style.transition = '.4s ease-in-out'
        const h4= document.createElement('h4')
        div.addEventListener('mouseover',()=>{
            div.style.backgroundColor = '#201D1D'
            div.style.color = 'white'
            div.style.transform = 'scale(1.2)'
            h4.innerText = 'Download Now';
            h4.style.color = 'black'
            h4.style.position = 'absolute';
            h4.style.top = '160px'
            h4.style.backgroundColor = 'white'
            h4.style.padding ='0.5rem';
            h4.style.borderRadius = '20px'
            h4.style.left = '30px'
            h4.addEventListener('click',()=>{
                window.location = item.download
            })
            div.appendChild(h4)
        })
        div.addEventListener('mouseleave',(self)=>{
            div.style.backgroundColor = 'white'
            div.style.color = 'black'
            div.style.transform = 'scale(1)'
            // div.removeChild(self.target.h4)
            self.target.removeChild(h4)
        })
        main[0].appendChild(div)
    })
})