//get a random image from Unsplash and set it as the background
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=sky")
     .then(res => res.json())
     .then(data => {
        document.body.style.backgroundImage = `url($data.urls.regular})`
     })

//Challenge part 2: Display the image's author