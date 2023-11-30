const testimonials23 = [
    {
        name: "Greg Victor",
        imagePath:"../assets/GregVictor.png",
        position: "Founder, CEO",
        organization: "International Free Expression Project",
        quote:"The International Free Expression Project has been a CMU Information Systems Community Partner twice, and I cannot say enough about the efficiency of the program administration, the quality of the students, and the excellence of the work they produced. The first group of students helped us develop a contact/donor database. The second group worked with us and a startup, Roadies Lab, to create a unique online art gallery featuring the work of suppressed and persecuted artists. Both groups were organized, dedicated, hardworking, creative and a pleasure to work with.",
    },
    {
        name:"Aubrey Parke",
        imagePath:"",
        position:"Volunteer Coordinator",
        organization:"Hello Neighbor",
        quote:"The student consultants were so professional, adaptable, and skilled. Thanks to their work, Hello Neighbor now has a functional inventory management system and a plan for scaling it up in the future. I appreciated the way students asked thoughtful questions to get at the root of what we needed to best support migrant and refugee families in Pittsburgh.",
    },
    {
        name:"Ashley Lynn Priore",
        imagePath:"../assets/AshleyPriore.png",
        position:"Founder, President, CEO",
        organization:"Queens Gambit",
        quote:"The CMU IS Consulting Project connects nonprofit organizations with top-tier IS student consultants to deliver high-quality solutions and strategic advising to enhance missions and visions. Through this program, my nonprofit organization was able to increase the number of schools we impact by close to 60% thanks to the development of software to strengthen our community mapping directory. The student consultants became a part of our small but mighty team and continue to impact our work to this day.",
    },
    {
        name:"",
        imagePath:"",
        position:"",
        organization:"",
        quote:"I want to let you, and faculty know that the girl power team I had was amazing. They knew the assignment without much instruction, only because I was not sure, but I did know there was updates that were needed on our website. The girl power team I had executed the assignment, kudos to Emily Ngo, Anesha Santhanam, Fernanda Molina, and Valeria Cordova Mulvany, these young ladies came together and made it happen. We met every Monday, well maybe not every Monday but for the most part we met, they were eager to satisfy their customer, and that is just what they did. And let me not forget the first initial team who were amazing as well. I will be back for another run at updating our website. This program initiative is great for upcoming new organizations/business that may need that push to get their organization/business started and noticed, and for returning clients such as myself that may need a little more technical support.",
    },
    {
        name:"",
        imagePath:"",
        position:"",
        organization:"",
        quote:"Project mustard seed is extremely grateful for the community partnership program. The team produced a web app code that allows our community to collect their thoughts on what they read, publish and share. They had to learn Django from scratch and how to integrate code to a database. They proved that they could accomplish all this within 12 weeks. So more important than the app was their inspiration to others in developing nation communities to code. The project was done using entirely free open source software and so it is accessible to all.",
    },
    {
        name:"Bill DiPlacido",
        imagePath:"",
        position:"Business Analyst",
        organization:"Center for Organ Recovery & Education (CORE)",
        quote:"What a wonderful experience over the last couple of years working with two amazing student teams.  The CMU Community Partners programs allows us to develop solutions our teams have not had the time to complete projects that enables us to automate processes that were very labor intensive.  They learned new technologies quickly to develop in technologies like WordPress or Radzen that we can continue to support for many years to come, furthering CORE’s commitment to our mission to save and heal lives through donation."
    }
]


    function createTestimonial(data) {
    const testimonialContainer = document.createElement('div');
    testimonialContainer.className = 'col-lg-2 col-md-4 col-sm-6 my-2';
    const testimonial = document.createElement('div');
    testimonial.className = 'text-center bg-light border p-2 position-relative project';

    const testimonialImage = document.createElement('img');
    testimonialImage.src = data.imagePath;
    testimonialImage.alt = `${data.name}'s image`;
    testimonialImage.className = 'img-fluid';

    const learnMore = document.createElement('button');
    learnMore.className = 'btn d-none learn-more text-white';
    learnMore.style.backgroundColor = '#008F91';
    learnMore.textContent = 'View Testimonial';

    testimonial.style.transition = 'transform 0.5s ease';
    testimonial.addEventListener('mouseenter', () => {
        learnMore.classList.remove('d-none');
        testimonial.style.transform = 'translateY(-7px)';
        testimonialImage.style.opacity = '0.3';
    });

    testimonial.addEventListener('mouseleave', () => {
        learnMore.classList.add('d-none');
        testimonial.transform = '';
        testimonialImage.style.opacity = '1';

    });

    learnMore.addEventListener('click', () => {
        const positionContainer = document.getElementById('position');
        positionContainer.innerHTML = `<span class="modal-heading">${data.position.length > 1 ? 'Community Partners' : 'Community Partner'}</span>: ${data.position.join(', ')}`;

        const organizationContainer = document.getElementById('organization');
        organizationContainer.innerHTML = `<span class="modal-heading">Student Consulting Team</span>: ${data.organization.join(', ')}`;
        organizationContainer.classList.add('font-weight-normal');

        const testimonialQuote = document.getElementById('quote');
        testimonialQuote.innerHTML = `<span class="modal-heading">Description</span>: ${data.quote}`;

        const modalImage = document.getElementById('modalImage');
        modalImage.src = data.imagePath;
        modalImage.alt = `Logo for ${data.name}`;

        const testimonialModalLabel = document.getElementById('testimonialModalLabel');
        testimonialModalLabel.innerHTML = data.title;

        $('#testimonialModal').modal('show');
    });

    testimonial.appendChild(testimonialImage);
    testimonial.appendChild(learnMore);

    testimonialContainer.appendChild(testimonial);
    return testimonialContainer;
}

// FIX BELOW TO MATCH

function displayProjects(projectsArray) {
    const allProjectsContainer = document.getElementById('all-projects');
    allProjectsContainer.innerHTML = '';
    projectsArray.forEach((projectsData, index) => {
        const yearHeading = document.createElement('h2');
        yearHeading.textContent = `Spring ${mostRecentProjectYear - index}`;
        yearHeading.className = 'text-center';

        allProjectsContainer.appendChild(yearHeading);

        const projectsContainer = document.createElement('div');
        projectsContainer.id = `projects${mostRecentProjectYear - index}`;
        projectsContainer.className = 'row mx-auto';

        projectsData.forEach(project => {
            projectsContainer.appendChild(createProject(project));
        });

        allProjectsContainer.appendChild(projectsContainer);
    });
}

displayProjects(allProjects);