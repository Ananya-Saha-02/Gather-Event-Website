
/* =========================================
   GATHER — EVENT MANAGEMENT WEBSITE
   Complete JavaScript
========================================= */


/* 1. EVENT DATA */

const events = [
    {
        id: 1,
        name: "The Indie Sessions",
        category: "music",
        date: "NOV 14, 2026",
        startAt: "2026-11-14T18:00:00",
        venue: "The Garden Arena, Bhubaneswar",
        price: "₹499",
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
        description: "An evening of independent music, live performances, and unforgettable energy. Discover emerging artists and experience music beyond the mainstream."
    },

    {
        id: 2,
        name: "Canvas & Conversations",
        category: "art",
        date: "NOV 18, 2026",
        startAt: "2026-11-18T18:00:00",
        venue: "Art District, Bhubaneswar",
        price: "₹299",
        image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80",
        description: "A creative gathering for art lovers. Explore contemporary artworks, meet local artists, and engage in conversations about creativity."
    },

    {
        id: 3,
        name: "The Creative Lab",
        category: "workshop",
        date: "NOV 21, 2026",
        startAt: "2026-11-21T18:00:00",
        venue: "Studio 17, Bhubaneswar",
        price: "₹799",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80",
        description: "A hands-on creative workshop designed to help you experiment with ideas, develop new skills, and connect with fellow creators."
    },

    {
        id: 4,
        name: "Sunset Soundscape",
        category: "music",
        date: "NOV 25, 2026",
        startAt: "2026-11-25T18:00:00",
        venue: "Ekamra Garden, Bhubaneswar",
        price: "₹599",
        image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80",
        description: "Watch the sky change colours while enjoying live music, ambient sounds, and a relaxed outdoor atmosphere."
    },

    {
        id: 5,
        name: "Stories in Frames",
        category: "art",
        date: "NOV 28, 2026",
        startAt: "2026-11-28T18:00:00",
        venue: "Gallery One, Bhubaneswar",
        price: "₹199",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=80",
        description: "A photography and visual storytelling exhibition featuring creative perspectives from emerging photographers."
    },

    {
        id: 6,
        name: "Design Your Future",
        category: "workshop",
        date: "DEC 02, 2026",
        startAt: "2026-12-02T18:00:00",
        venue: "Innovation Hub, Bhubaneswar",
        price: "₹499",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
        description: "A practical design workshop focused on creative thinking, problem-solving, and turning ideas into meaningful projects."
    }
];


/* 2. SELECT HTML ELEMENTS */

const eventGrid = document.getElementById("eventGrid");
const searchInput = document.getElementById("eventSearch");
const categoryButtons = document.querySelectorAll(".category");


/* 3. DISPLAY EVENT CARDS */

function displayEvents(eventList) {

    eventGrid.innerHTML = "";

    if (eventList.length === 0) {

        eventGrid.innerHTML = `
            <div class="no-events">
                <h3>No events found</h3>
                <p>Try searching for something else.</p>
            </div>
        `;

        return;
    }

    eventList.forEach(function(event, index) {

        const card = document.createElement("div");

        card.className = "event-card";

        card.innerHTML = `
            <div class="event-image">

                <img
                    src="${event.image}"
                    alt="${event.name}"
                    loading="lazy">

                <span class="event-category">
                    ${event.category}
                </span>

            </div>

            <div class="event-content">

                <p class="event-date">
                    ${event.date}
                </p>

                <h3>${event.name}</h3>

                <p class="event-description">
                    ${event.description}
                </p>

                <p class="event-location">
                    ${event.venue}
                </p>

                <div class="event-footer">

                    <span class="event-price">
                        ${event.price}
                    </span>

                    <button
                        class="event-details-btn"
                        onclick="showEventDetails(${event.id})">

                        View Details ↗

                    </button>

                </div>

            </div>
        `;

        eventGrid.appendChild(card);

    });

    observeEventCards();

}


/* 4. SEARCH AND FILTER EVENTS */

function searchEvents() {

    const searchText = searchInput.value.toLowerCase().trim();

    const activeCategory = document.querySelector(".category.active");

    const selectedCategory = activeCategory.dataset.category;

    const filteredEvents = events.filter(function(event) {

        const matchesSearch =
            event.name.toLowerCase().includes(searchText) ||
            event.venue.toLowerCase().includes(searchText) ||
            event.description.toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            event.category === selectedCategory;

        return matchesSearch && matchesCategory;

    });

    displayEvents(filteredEvents);

}


categoryButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        categoryButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        searchEvents();

    });

});


searchInput.addEventListener("input", searchEvents);


/* 5. EVENT DETAILS MODAL */

const eventModal = document.getElementById("eventModal");
const closeModal = document.getElementById("closeModal");

const modalEventName = document.getElementById("modalEventName");
const modalEventDescription = document.getElementById("modalEventDescription");
const modalEventDate = document.getElementById("modalEventDate");
const modalEventVenue = document.getElementById("modalEventVenue");
const modalEventPrice = document.getElementById("modalEventPrice");

const selectedEventInput = document.getElementById("selectedEvent");

const registrationForm = document.getElementById("registrationForm");
const registrationSuccess = document.getElementById("registrationSuccess");


function showEventDetails(eventId) {

    const selectedEvent = events.find(function(event) {
        return event.id === eventId;
    });

    if (!selectedEvent) {
        return;
    }

    modalEventName.textContent = selectedEvent.name;
    modalEventDescription.textContent = selectedEvent.description;
    modalEventDate.textContent = selectedEvent.date;
    modalEventVenue.textContent = selectedEvent.venue;
    modalEventPrice.textContent = selectedEvent.price;

    selectedEventInput.value = selectedEvent.id;

    registrationForm.reset();

    registrationForm.style.display = "block";

    registrationSuccess.classList.remove("show");

    clearAllErrors();

    eventModal.classList.add("show");

}


function hideEventModal() {

    eventModal.classList.remove("show");

}


closeModal.addEventListener("click", hideEventModal);


eventModal.addEventListener("click", function(event) {

    if (event.target === eventModal) {
        hideEventModal();
    }

});


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        hideEventModal();
    }

});


/* 6. FORM VALIDATION */

const participantName = document.getElementById("participantName");
const participantEmail = document.getElementById("participantEmail");
const participantPhone = document.getElementById("participantPhone");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");


function showError(input, errorElement, message) {

    input.classList.add("invalid");

    errorElement.textContent = message;

}


function clearError(input, errorElement) {

    input.classList.remove("invalid");

    errorElement.textContent = "";

}


function clearAllErrors() {

    clearError(participantName, nameError);

    clearError(participantEmail, emailError);

    clearError(participantPhone, phoneError);

}


/* 7. SAVE REGISTRATION */

registrationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let isValid = true;


    /* Validate Name */

    const name = participantName.value.trim();

    if (name.length < 3) {

        showError(
            participantName,
            nameError,
            "Name must contain at least 3 characters."
        );

        isValid = false;

    } else {

        clearError(participantName, nameError);

    }


    /* Validate Email */

    const email = participantEmail.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        showError(
            participantEmail,
            emailError,
            "Enter a valid email address."
        );

        isValid = false;

    } else {

        clearError(participantEmail, emailError);

    }


    /* Validate Phone */

    const phone = participantPhone.value.trim();

    const phonePattern = /^[6-9]\d{9}$/;

    if (!phonePattern.test(phone)) {

        showError(
            participantPhone,
            phoneError,
            "Enter a valid 10-digit Indian phone number."
        );

        isValid = false;

    } else {

        clearError(participantPhone, phoneError);

    }


    /* Submit Registration */

    if (isValid) {

        const eventId = Number(selectedEventInput.value);

        const selectedEvent = events.find(function(event) {
            return event.id === eventId;
        });

        const registration = {
            id: Date.now(),
            name: name,
            email: email,
            phone: phone,
            eventId: eventId,
            eventName: selectedEvent.name,
            registrationDate: new Date().toISOString()
        };


        let registrations = JSON.parse(
            localStorage.getItem("gatherRegistrations")
        ) || [];


        registrations.push(registration);


        localStorage.setItem(
            "gatherRegistrations",
            JSON.stringify(registrations)
        );


        console.log("Registration saved:", registration);


        registrationForm.style.display = "none";

        registrationSuccess.classList.add("show");

    }

});


/* 8. DARK MODE */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("gatherTheme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.textContent = "Light Mode";

}


themeToggle.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode) {

        localStorage.setItem("gatherTheme", "dark");

        themeToggle.textContent = "Light Mode";

    } else {

        localStorage.setItem("gatherTheme", "light");

        themeToggle.textContent = "Dark Mode";

    }

});


/* 9. DYNAMIC EVENT COUNTDOWN */

const countdownLabel = document.querySelector(".countdown-label");

let countdownInterval;


function updateCountdown() {

    const now = new Date();


    const upcomingEvents = events
        .filter(function(event) {
            return new Date(event.startAt) > now;
        })
        .sort(function(a, b) {
            return new Date(a.startAt) - new Date(b.startAt);
        });


    if (upcomingEvents.length === 0) {

        countdownLabel.textContent = "NO UPCOMING EVENTS";

        document.getElementById("countdown").innerHTML =
            "<p>Stay tuned for new events.</p>";

        clearInterval(countdownInterval);

        return;

    }


    const nextEvent = upcomingEvents[0];

    const eventTime = new Date(nextEvent.startAt).getTime();

    const currentTime = new Date().getTime();

    const difference = eventTime - currentTime;


    countdownLabel.textContent =
        "NEXT EVENT: " + nextEvent.name.toUpperCase();


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) /
        1000
    );


    document.getElementById("countDays").textContent =
        String(days).padStart(2, "0");

    document.getElementById("countHours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("countMinutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("countSeconds").textContent =
        String(seconds).padStart(2, "0");

}


updateCountdown();

countdownInterval = setInterval(updateCountdown, 1000);


/* 10. EVENT CARD SCROLL ANIMATION */

const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


function observeEventCards() {

    const cards = document.querySelectorAll(".event-card");

    cards.forEach(function(card, index) {

        card.style.transitionDelay = (index * 100) + "ms";

        observer.observe(card);

    });

}


/* 11. INITIALISE WEBSITE */

displayEvents(events);
// ===== Scroll Reveal for Page Sections =====

const revealSections = document.querySelectorAll(
    ".about, .section-title, .footer"
);

revealSections.forEach(section => {
    section.classList.add("reveal-section");
});

const sectionObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("section-visible");
                sectionObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealSections.forEach(section => {
    sectionObserver.observe(section);
});