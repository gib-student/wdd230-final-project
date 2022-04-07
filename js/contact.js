// Create directors' contacts
fetch('https://raw.githubusercontent.com/gib-student/wdd230-final-project/main/data/contact.json')
.then(response => response.json())
.then (data => {
    let cardNum = 0;
    for (i in data.directors) {
        cardNum += 1;
        // Make elements
        const div   = document.createElement('div');
        const img   = document.createElement('img');
        const name  = document.createElement('p');
        const nameB = document.createElement('b');
        const email = document.createElement('p');
        // Add content
        // Add image content
        const path = data.directors[i].image;
        if (path != '') {
            const imgUrl = 'https://raw.githubusercontent.com/gib-student/wdd230-final-project/main/images/Celebs/' + path;
            (async () => {
                const response = await fetch(imgUrl);
                const imageBlob = await response.blob();
                const reader = new FileReader();
                reader.readAsDataURL(imageBlob);
                reader.onloadend = () => {
                    const base64data  = reader.result;
                    img.src = base64data;
                };
            })();
        }
        // img.src = 'https://via.placeholder.com/300';
        img.alt = data.directors[i].name + 'portrait image';
        // name & email
        nameB.innerHTML = data.directors[i].name;
        email.innerHTML = 'Email: ' + data.directors[i].email;

        // Add class names
        img.classList.add('contact-img');
        div.classList.add('card');
        const cardNumText = "contact-card" + cardNum.toString();
        div.classList.add(cardNumText);

        // Append children to parent
        const contacts = document.getElementById('directors');
        name.appendChild(nameB);
        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(email);
        contacts.appendChild(div);
    }
});
