document.addEventListener("DOMContentLoaded", function () {
    const testimonies = [
      {
        name: "Greg Victor",
        imagePath: "../assets/GregVictor.png",
        position: "Founder, CEO",
        organization: "International Free Expression Project",
        quote: "The International Free Expression Project has been a CMU Information Systems Community Partner twice, and I cannot say enough about the efficiency of the program administration, the quality of the students, and the excellence of the work they produced. The first group of students helped us develop a contact/donor database. The second group worked with us and a startup, Roadies Lab, to create a unique online art gallery featuring the work of suppressed and persecuted artists. Both groups were organized, dedicated, hardworking, creative and a pleasure to work with.",
      },
      {
        name:"Aubrey Parke",
        imagePath:"../assets/aubreyParke.png",
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
        name:"Terry Shields",
        imagePath:"../assets/terryShields.png",
        position:"CEO",
        organization:"Jada House International",
        quote:"I want to let you, and faculty know that the girl power team I had was amazing. They knew the assignment without much instruction, only because I was not sure, but I did know there was updates that were needed on our website. The girl power team I had executed the assignment, kudos to Emily Ngo, Anesha Santhanam, Fernanda Molina, and Valeria Cordova Mulvany, these young ladies came together and made it happen. We met every Monday, well maybe not every Monday but for the most part we met, they were eager to satisfy their customer, and that is just what they did. And let me not forget the first initial team who were amazing as well. I will be back for another run at updating our website. This program initiative is great for upcoming new organizations/business that may need that push to get their organization/business started and noticed, and for returning clients such as myself that may need a little more technical support.",
    },
    {
        name:"Patrick Tang",
        imagePath:"../assets/patrickTang.png",
        position:"Vice President of R&D",
        organization:"IonQ",
        quote:"Project mustard seed is extremely grateful for the community partnership program. The team produced a web app code that allows our community to collect their thoughts on what they read, publish and share. They had to learn Django from scratch and how to integrate code to a database. They proved that they could accomplish all this within 12 weeks. So more important than the app was their inspiration to others in developing nation communities to code. The project was done using entirely free open source software and so it is accessible to all.",
    },
    {
        name:"Bill DiPlacido",
        imagePath:"../assets/billDiPlacido.png",
        position:"Business Analyst",
        organization:"Center for Organ Recovery & Education (CORE)",
        quote:"What a wonderful experience over the last couple of years working with two amazing student teams.  The CMU Community Partners programs allows us to develop solutions our teams have not had the time to complete projects that enables us to automate processes that were very labor intensive.  They learned new technologies quickly to develop in technologies like WordPress or Radzen that we can continue to support for many years to come, furthering CORE’s commitment to our mission to save and heal lives through donation."
    },
    ];
  
    const testimonialContainer = document.getElementById("testimonial-container");
  
    function createTestimonialElement(testimony) {
        const testimonialDiv = document.createElement("div");
        testimonialDiv.classList.add("row", "mb-4");
    
        // Shorten the quote for display on the website
        const shortenedQuote = testimony.quote.slice(0, 150) + "...";
    
        const emptyColumnStart = `<div class="col-md-3"></div>`;
        const imageElement = `<div class="col-md-3 text-center"><img src="${testimony.imagePath}" alt="${testimony.name}" class="img-fluid mb-3" width="200"></div>`;
        const contentElement = `
          <div class="col-md-4 text-center">
            <h5 class="mb-2">${testimony.name}</h5>
            <p class="text-muted mb-2">${testimony.position}</p>
            <p class="text-muted mb-2">${testimony.organization}</p>
            <p>"${shortenedQuote}" <strong><a href="#" class="learn-more-link" data-toggle="modal" data-target="#testimonialModal${testimony.name.replace(/\s/g, '')}">Learn more</a></strong></p>
          </div>`;
        const emptyColumnEnd = `<div class="col-md-2"></div>`;
    
        testimonialDiv.innerHTML = `${emptyColumnStart}${imageElement}${contentElement}${emptyColumnEnd}`;
    
        return testimonialDiv;
      }
  
    function createModalElement(testimony) {
      const modalContent = `
        <div class="modal fade" id="testimonialModal${testimony.name.replace(/\s/g, '')}" tabindex="-1" role="dialog" aria-labelledby="testimonialModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="testimonialModalLabel">${testimony.name}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <img src="${testimony.imagePath}" alt="${testimony.name}" class="img-fluid mx-auto d-block mb-3" width="200">
                <p class="text-muted">${testimony.position}</p>
                <p class="text-muted">${testimony.organization}</p>
                <p>"${testimony.quote}"</p>
              </div>
            </div>
          </div>
        </div>
      `;
  
      return modalContent;
    }
  
    testimonies.forEach(testimony => {
        const testimonialElement = createTestimonialElement(testimony);
        testimonialContainer.appendChild(testimonialElement);
    });
  
    testimonies.forEach(testimony => {
        const modalElement = createModalElement(testimony);
        document.body.innerHTML += modalElement;
    });
  
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("learn-more-link")) {
            const modalId = event.target.getAttribute("data-target");
            $(modalId).modal("show");
        }
    });
  });
  