axios.get("https://leonardoapi.onrender.com/music")
    .then((res) => {
    res.data.map((song) => {
        document.write(song.title)
    })

    
}  )