const reviews = [
    {
        "id": 1,
        "name": "John",
        "surname": "Doe",
        "job": "Software Engineer specializing in backend development",
        "reviewText": "John consistently delivers high-quality code and pays great attention to detail. His ability to debug complex issues and optimize performance has been invaluable to the team.",
        "rating": 5,
        "imageUrl": "https://shorturl.at/JpnfR"
    },
    {
        "id": 2,
        "name": "Alice",
        "surname": "Smith",
        "job": "Graphic Designer with expertise in UI/UX design",
        "reviewText": "Alice has a keen eye for design and consistently creates visually appealing and user-friendly interfaces. Her work significantly enhances the user experience of our applications.",
        "rating": 4,
        "imageUrl": "https://shorturl.at/QViWk"
    },
    {
        "id": 3,
        "name": "Bob",
        "surname": "Johnson",
        "job": "Project Manager with experience in Agile methodologies",
        "reviewText": "Bob is excellent at keeping projects on track and ensuring team collaboration. He effectively manages deadlines and resources, contributing to the success of our initiatives.",
        "rating": 5,
        "imageUrl": "https://shorturl.at/RHItA"
    },
    {
        "id": 4,
        "name": "Jane",
        "surname": "Brown",
        "job": "Data Analyst with a focus on predictive modeling",
        "reviewText": "Jane has an exceptional ability to analyze large datasets and derive actionable insights. Her predictive models have helped the company forecast trends and make informed decisions.",
        "rating": 5,
        "imageUrl": "https://shorturl.at/krKkk"
    },
    {
        "id": 5,
        "name": "Emily",
        "surname": "Taylor",
        "job": "Content Strategist specializing in digital marketing",
        "reviewText": "Emily is highly skilled at creating engaging content that aligns with our marketing goals. Her strategies have significantly boosted our online presence and customer engagement.",
        "rating": 4,
        "imageUrl": "https://shorturl.at/8Zb5x"
    },
    {
        "id": 6,
        "name": "Mike",
        "surname": "White",
        "job": "Cybersecurity Specialist focusing on network security",
        "reviewText": "Mike has implemented robust security measures to protect our systems. His proactive approach has prevented multiple potential threats and ensured data integrity.",
        "rating": 5,
        "imageUrl": "https://tinyurl.com/n2aek3vz"
    },
    {
        "id": 7,
        "name": "Sarah",
        "surname": "Wilson",
        "job": "Human Resources Manager with expertise in talent acquisition",
        "reviewText": "Sarah is highly efficient at identifying and recruiting top talent. Her efforts have greatly improved our workforce quality and company culture.",
        "rating": 4,
        "imageUrl": "https://tinyurl.com/hasjbh2y"
    },
    {
        "id": 8,
        "name": "Tom",
        "surname": "Green",
        "job": "Full-Stack Developer with experience in cloud applications",
        "reviewText": "Tom excels at building scalable and efficient applications. His ability to seamlessly integrate frontend and backend systems is impressive and valuable to our team.",
        "rating": 5,
        "imageUrl": "https://tinyurl.com/32n6577f"
    },
    {
        "id": 9,
        "name": "Sophia",
        "surname": "Martinez",
        "job": "Marketing Specialist with a focus on SEO and social media",
        "reviewText": "Sophia has significantly improved our online visibility through her expertise in SEO. Her creative social media campaigns have also driven substantial engagement and traffic.",
        "rating": 5,
        "imageUrl": "https://tinyurl.com/c3hmbyzw"
    },
    {
        "id": 10,
        "name": "Chris",
        "surname": "Anderson",
        "job": "Quality Assurance Engineer ensuring software reliability",
        "reviewText": "Chris is meticulous in identifying and resolving bugs before release. His contributions have greatly improved the stability and reliability of our software.",
        "rating": 4,
        "imageUrl": "https://tinyurl.com/mrzd92zr"
    }
]

let INDEX = 0;

document.getElementById("left").addEventListener("click", () => getIndex(false));
document.getElementById("right").addEventListener("click", () => getIndex(true));


function getIndex(bool) {

    if (bool) {
        INDEX++
    } else {
        INDEX--
    }

    if (INDEX >= reviews.length) {
        INDEX = 0
    } else if (INDEX < 0) {
        INDEX = reviews.length - 1
    }

    re()


}


function re() {
    document.getElementById("cardContent").innerHTML = `
                <div class="img">
                    <img src="${reviews[INDEX].imageUrl}" alt="img">
                </div>
                <p class="name">${reviews[INDEX].name} ${reviews[INDEX].surname}</p>
                <p class="job">${reviews[INDEX].job}</p>
                <p class="review">${reviews[INDEX].reviewText}</p>
    `
}

re()