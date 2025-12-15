document.getElementById("reviewForm").addEventListener("submit", function(e){
    e.preventDefault();

    let review = {
        username: document.getElementById("username").value,
        comment: document.getElementById("comment").value,
        rating: document.getElementById("rating").value,
        time: new Date().toLocaleString()
    };

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push(review);

    localStorage.setItem("reviews", JSON.stringify(reviews));

    displayReviews();
    this.reset();
});

function displayReviews() {
    let reviewList = document.getElementById("reviewList");
    reviewList.innerHTML = "";

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.forEach(r => {
        reviewList.innerHTML += `
            <div class="review-card">
                <b>${r.username}</b> — Rating: ${r.rating}<br>
                <small>${r.time}</small>
                <p>${r.comment}</p>
            </div>
        `;
    });
}

displayReviews();
