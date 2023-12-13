axios.get("https://leonardoapi.onrender.com/music")
    .then((res) => {
    res.data.map((song) => {
        
        let li = document.createElement('li')

        li.innerHTML = `
        
        <div>
            <h3>${song.title}</h3>
            <p>${song.author}</p>
        </div>
        <img src="${song.path.front}" class="imagen 1">
        
        `


        li.addEventListener('click' , () => {

           document.querySelector('#current-song-title').innerHTML = song.title
           document.querySelector('#current-song-author').innerHTML = song.author
           document.querySelector('#current-song-audio').setAttribute('src', song.path.audio)
           document.querySelector('#current-song-image').setAttribute('src', song.path.front)
        })

        document.querySelector('#tracklist').appendChild(li)
        

        









    })

    
}  )