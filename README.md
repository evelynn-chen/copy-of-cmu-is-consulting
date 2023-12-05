# CMU Consulting in IS Website
Carnegie Mellon University Fall 2023: Mobile Web Design and Development Client Project
by Evelynn Chen, Leo Hsu, and Amalia Kutin

**How to Add Projects:**  
1. Create a new folder in assets and add new logos.
2. Create a new folder in projects-page/exec-summaries and add new executive summaries. 
3. Navigate to *projects.js* in a code editor.
4. At the top, create a new variable with project data formatted like so:
```
const projects20## = [
    {
        title: String,
        description: String,
        logo: path,
        communityPartners: String array,
        studentConsultingTeam: String array,
        execSummary: path,
        tags: String
    },
]
```
5. Add the projects20## variable to the beginning of the `allProjects` array.
6. Update `mostRecentProjectYear` to the year of the projects you added.