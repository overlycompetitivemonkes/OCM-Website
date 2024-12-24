// written by @misterfonka on discord.
// this array contains the team members with their name, profile picture, and discord URL
const teamMembers = [
    { name: "misterfonka", pfp: "assets/pfps/misterfonka.png", url: "https://discord.com/users/871556779455176745" },
    { name: "Runna", pfp: "assets/pfps/runna.png", url: "https://discord.com/users/967946990145126430" },
    { name: "Trisome", pfp: "assets/pfps/trisome.png", url: "https://discord.com/users/1167145944115056671" },
    { name: "Jax", pfp: "assets/pfps/jax.png", url: "https://discord.com/users/1212872815812804611" },
    { name: "T0J0", pfp: "assets/pfps/t0j0.png", url: "https://discord.com/users/1279271803142803540" },
    { name: "Globee", pfp: "assets/pfps/globee.png", url: "https://discord.com/users/1302099259805405357" },
    { name: "Momentumm", pfp: "assets/pfps/momentumm.png", url: "https://discord.com/users/1005653249728204941" },
    { name: "Dozza", pfp: "assets/pfps/dozza.png", url: "https://discord.com/users/1202325962147254334" },
    { name: "Cut Off", pfp: "assets/pfps/cutoff.png", url: "https://discord.com/users/915755344347660288" },
    { name: "Mig", pfp: "assets/pfps/mig.png", url: "https://discord.com/users/883756675239137380" },
    { name: "Maru", pfp: "assets/pfps/maru.png", url: "https://discord.com/users/1310023186179424267" },
    { name: "Vision", pfp: "assets/pfps/vision.png", url: "https://discord.com/users/1031318398367432825" },
    { name: "Scarecrow", pfp: "assets/pfps/scarecrow.png", url: "https://discord.com/users/376709477744771072" },
];

const teamContainer = document.getElementById("team-container");

// iterate over the team members array
teamMembers.forEach((member) => {
    const memberDiv = document.createElement("div");
    memberDiv.classList.add("team-member");

    // assign roles based on member's name
    let role = "Team Member"; // default role for members
    let roleClass = "default-role"; // default CSS class for roles

    // check if the member is a captain or co-captain
    if (member.name === "misterfonka") {
        role = "Captain"; // specific role for captain
        roleClass = "captain-role"; // apply captain CSS class
    } else if (["Runna", "Trisome", "Jax"].includes(member.name)) {
        role = "Co-Captain"; // co-captains
        roleClass = "co-captain-role"; // apply co-captain CSS class
    }

    // create the HTML structure for each member
    memberDiv.innerHTML = `
<img src="${member.pfp}" alt="${member.name}'s profile picture">
<p><a href="${member.url}" target="_blank">${member.name}</a></p>
<p class="role ${roleClass}">${role}</p>
`;

    teamContainer.appendChild(memberDiv); // add the member to the container
});

// modal functionality for zooming into the profile pictures
const modal = document.getElementById("zoomModal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

// add click event to open modal when a team member's image is clicked
document.querySelectorAll(".team-member img").forEach((img) => {
    img.addEventListener("click", (e) => {
        modalImage.src = e.target.src; // set the modal image to the clicked image
        modal.style.display = "flex"; // display the modal
    });
});

// close the modal when the close button is clicked
closeBtn.addEventListener("click", () => {
    modal.style.display = "none"; // hide the modal
});

// close the modal when clicking outside of the image
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none"; // hide the modal if the area outside the image is clicked
    }
});