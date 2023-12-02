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
        name: "Ashley Lynn Priore",
        imagePath: "../assets/AshleyPriore.png",
        position: "Founder, President, CEO",
        organization: "Queens Gambit",
        quote: "The CMU IS Consulting Project connects nonprofit organizations with top-tier IS student consultants to deliver high-quality solutions and strategic advising to enhance missions and visions. Through this program, my nonprofit organization was able to increase the number of schools we impact by close to 60% thanks to the development of software to strengthen our community mapping directory. The student consultants became a part of our small but mighty team and continue to impact our work to this day.",
      },
    ];
  
    const testimonialContainer = document.getElementById("testimonial-container");
  
    function createTestimonialElement(testimony) {
        const testimonialDiv = document.createElement("div");
        testimonialDiv.classList.add("row", "mb-4");
    
        // Shorten the quote for display on the website
        const shortenedQuote = testimony.quote.slice(0, 150) + "...";
    
        const emptyColumnStart = `<div class="col-md-3"></div>`;
        const imageElement = `<div class="col-md-3"><img src="${testimony.imagePath}" alt="${testimony.name}" class="img-fluid mb-3" width="200"></div>`;
        const contentElement = `
          <div class="col-md-4">
            <h5>${testimony.name}</h5>
            <p class="text-muted">${testimony.position}</p>
            <p class="text-muted">${testimony.organization}</p>
            <p>${shortenedQuote} <strong><a href="#" class="learn-more-link" data-toggle="modal" data-target="#testimonialModal${testimony.name.replace(/\s/g, '')}">Learn more</a></strong></p>
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
                <p>${testimony.quote}</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
  