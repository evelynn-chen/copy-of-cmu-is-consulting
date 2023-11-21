const data = [
    {
        title: 'Greater Washington County Food Bank',
        description: "The Greater Washington County Food Bank's mission is to help those who are fighting against hunger. The CMU IS students' role is to help standardize the onboarding process for volunteers and incoming staff. The result was an improved understanding of the food bank's CRM for both staff and volunteers.",
        logo: './images/logos/GWCFB.png',
        execSummary: './exec-summaries/GWCFB.pdf',
        tags: 'sdg-tech zerohunger userexperience'
    },
    {
        title: 'Filipino-American Association of Pittsburgh',
        description: "The Filipino-American Association of Pittsburgh's mission is to preserve, promote, and perpetuate the Filipino heritage among its members and the general public through cultural, charitable, and educational activities. The CMU IS students improved their data management due to their lack of centralization and automation. The result was an improved website with automated data collection and transfer of legacy data into their new system.",
        logo: './images/logos/FAAP.jpg',
        execSummary: './exec-summaries/FAAP.pdf',
        tags: 'sdg-tech equality peaceandinclusion databasesolution webapp'
    },
    {
        title: 'The Italian Garden Project',
        description: 'The mission of The Italian Garden Project is to celebrate the joy and wisdom inherent in the traditional Italian American vegetable garden, preserving this heritage and demonstrating its relevance for reconnecting to our food, our families and the earth. The CMU IS students created The Legacy Fig Tree Archive website that allows individuals to enter their fig tree into the archive and search the database for the fig trees. The archive demonstrates the prevalence of the fig growing tradition throughout the US and creates a sense of community for fig tree owners.',
        logo: './images/logos/IGP.png',
        execSummary: './exec-summaries/IGP.pdf',
        tags: 'sdg-tech lifeonland promotehealth qualityeducation responsibleconsumption zerohunger webapp userexperience databasesolution'
    },
    {
        title: 'New Sun Rising',
        description: 'New Sun Rising (NSR) is a nonprofit organization that organizes and supports community development initiatives within Pittsburgh, with the mission "Build vibrant communities through culture, sustainability, and opportunity". The CMU IS students worked with New Sun Rising to create a digital form to collect contextual data (opinions/fears/hopes) of members of a community and store it within their database. This will add value by giving additional information to properly understand problems local Pittsburgh communities are facing.',
        logo: './images/logos/NewSunRising.png',
        execSummary: './exec-summaries/NewSunRising.pdf',
        tags: 'sdg-tech partnershipsforgoals peaceandinclusion api databasesolution technologystrategy userexperience'
    },
    {
        title: 'Project Theia',
        description: "Project Theia's mission is to provide oculoplastic medical and surgical care to the underserved global community. The CMU IS students furthered this mission by enhancing remote communication with all of their Global Providers, preparing Project Theia to scale. The team utilized Slack to centralize communication, organize educational resources, and support effective remote communication.",
        logo: './images/logos/ProjectTheia.jpg',
        execSummary: './exec-summaries/ProjectTheia.pdf',
        tags: 'sdg-tech goodhealthandwellbeing promotehealth applicationintegration'
    },
    {
        title: 'Women Against Abusive Relationships',
        description: "Women Against Abusive Relationships (WAAR) is a Pittsburgh-based volunteer organization that aims to break the cycle of domestic violence by providing education, awareness, and prevention programs, directed by Roxanne Epperson. The CMU IS student team revamped the website to meet ADA compliance, and restructured the information architecture to optimize usability, to help users find the resources they need quickly and efficiently.",
        logo: './images/logos/WAAR.png',
        execSummary: './exec-summaries/WAAR.pdf',
        tags: 'sdg-tech genderequality promotehealth peaceandinclusion softwareintegration technologystrategy userexperience'
    },
    {
        title: 'Queens Gambit Chess Institute',
        description: "Queens Gambit is an organization that aims to empower youth through chess, especially those who are underrepresented in the chess community. The team implemented two solutions for Queens Gambit: a new online tournament pairing system and updating their community partner relationship management system. As a result, Queens Gambit is able to run their classes and tournaments more effectively and manage their partner data in a more organized manner.",
        logo: './images/logos/QueensGambit.jpeg',
        execSummary: './exec-summaries/QueensGambit.pdf',
        tags: 'sdg-tech equality genderequality webapp userexperience softwareintegration'
    },
    {
        title: 'Operation Better Block/NewEra412',
        description: "NewEra412 is the information management system for the city of Pittsburgh's violence prevention initiatives. The CMU IS student team commissioned the best software development partner for NewEra412, fixed bugs, and designed new features. Now NewEra412 can focus on sustained growth and longevity with a solid vision and the support to back it up.",
        logo: './images/logos/OBB.png',
        execSummary: './exec-summaries/NewEra412.pdf',
        tags: 'sdg-tech equality technologystrategy userexperience databasesolution'
    },
    {
        title: 'Protect Penn-Trafford',
        description: "Protect Penn-Trafford (Protect PT) is committed to protecting Penn-Trafford and surrounding communities from the harmful environmental effects of energy projects through education and legal advocacy. The CMU IS students developed a web application with functionality to allow data entry and retrieval of information related to energy projects. The web application was used as a working prototype to demonstrate to potential funders the potential of this system.",
        logo: './images/logos/ProtectPT.jpg',
        execSummary: './exec-summaries/ProtectPT.pdf',
        tags: 'sdg-tech cleanenergy cleanwater climateaction lifeonland peaceandinclusion promotehealth responsibleconsumption sustainablecities databasesolution webapp'
    }

]

function createProject(title, description, execSummary, logo) {
    const projectContainer = document.createElement('div');
    projectContainer.className = 'col-lg-2 col-md-4 col-sm-6 my-2';
    const project = document.createElement('div');
    project.className = 'text-center bg-light border p-2 position-relative project';

    const projectLogo = document.createElement('img');
    projectLogo.src = logo;
    projectLogo.alt = `${title}'s logo`;
    projectLogo.className = 'img-fluid';

    const learnMore = document.createElement('button');
    learnMore.className = 'btn d-none learn-more text-white';
    learnMore.style.backgroundColor = '#6D6E71';
    learnMore.textContent = 'Learn More';

    project.addEventListener('mouseenter', () => {
        learnMore.classList.remove('d-none');
    });

    project.addEventListener('mouseleave', () => {
        learnMore.classList.add('d-none');
    });

    learnMore.addEventListener('click', () => {
        const projectDescription = document.getElementById('projectDescription');
        projectDescription.innerHTML = `<p>${description}</p>`;

        const modalLogo = document.getElementById('modalLogo');
        modalLogo.src = logo;
        modalLogo.alt = `Logo for ${title}`;

        const projectModalLabel = document.getElementById('projectModalLabel');
        projectModalLabel.innerHTML = title;

        const execSummaryButton = document.getElementById('execSummaryButton');
        execSummaryButton.onclick = function () {
            window.open(execSummary, '_blank');
        };

        $('#projectModal').modal('show');
    });

    project.appendChild(projectLogo);
    project.appendChild(learnMore);

    projectContainer.appendChild(project);
    return projectContainer;
}

function displayProjects(projects) {
    const allProjects = document.getElementById('projects');
    allProjects.innerHTML = '';
    allProjects.className = 'row w-100 mx-auto';

    projects.forEach(item => {
        allProjects.appendChild(createProject(item.title, item.description, item.execSummary, item.logo));
    });
}

function getSelectedCheckboxes(filterId) {
    const checkboxes = document.querySelectorAll(`#${filterId} input[type="checkbox"]:checked`);
    return Array.from(checkboxes).map(checkbox => checkbox.value);
}

function createFilterBadge(tag, filterId) {
    const badge = document.createElement('span');
    badge.className = 'badge badge-secondary p-2 m-1 carnegie-red';

    const badgeText = document.createElement('span');
    badgeText.textContent = tag;

    const removeButton = document.createElement('button');
    removeButton.className = 'btn btn-sm text-white p-0 m-0 ml-1';
    removeButton.innerHTML = '&times;';

    removeButton.addEventListener('click', function () {
        const checkbox = document.querySelector(`#${filterId} input[value="${tag}"]`);
        if (checkbox) {
            checkbox.checked = false;
            filterProjects();
        }
    });

    badge.appendChild(badgeText);
    badge.appendChild(removeButton);

    return badge;
}

function displaySelectedSDGTags(selectedSDGs) {
    const selectedTagsContainer = document.getElementById('selectedSDGTags');
    selectedTagsContainer.innerHTML = '';

    if (selectedSDGs.length > 0) {
        selectedSDGs.forEach(tag => {
            const badge = createFilterBadge(tag, 'sdg-filter');
            selectedTagsContainer.appendChild(badge);
        });
    }
}

function displaySelectedTechTags(selectedTech) {
    const selectedTagsContainer = document.getElementById('selectedTechTags');
    selectedTagsContainer.innerHTML = '';

    if (selectedTech.length > 0) {
        selectedTech.forEach(tag => {
            const badge = createFilterBadge(tag, 'tech-filter');
            selectedTagsContainer.appendChild(badge);
        });
    }
}

function filterProjects() {
    const selectedSDGs = getSelectedCheckboxes('sdg-filter');
    displaySelectedSDGTags(selectedSDGs);
    const selectedTech = getSelectedCheckboxes('tech-filter');
    displaySelectedTechTags(selectedTech);
    const searchTerm = document.getElementById('search').value.toLowerCase();

    const filteredProjects = data.filter(project => {
        const hasMatchingSDGTags = selectedSDGs.every(tag => project.tags.includes(tag));
        const hasMatchingTechTags = selectedTech.every(tag => project.tags.includes(tag));
        const hasMatchingSearch = project.title.toLowerCase().includes(searchTerm);

        return hasMatchingSDGTags && hasMatchingTechTags && hasMatchingSearch;
    });

    displayProjects(filteredProjects);
}

document.addEventListener('click', function (event) {
    const sdgDropdown = document.getElementById('sdgGoalsButton');
    const techDropdown = document.getElementById('techImplementedButton');

    if (!sdgDropdown.contains(event.target) && !techDropdown.contains(event.target)) {
        filterProjects();
    }
});

document.getElementById('search').addEventListener('input', filterProjects);

displayProjects(data);