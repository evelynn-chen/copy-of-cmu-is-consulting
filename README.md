# CMU Consulting in IS Website
Carnegie Mellon University Fall 2023: Mobile Web Design and Development Client Project
by Evelynn Chen, Leo Hsu, and Amalia Kutin

**How to Add Projects:**  
1. Create a new folder in assets and add new logos.
1. Add new executive summaries to projects-page/exec-summaries. 
2. Navigate to *projects.js* in a code editor.
3. Create a new variable with project data formatted like so:
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
4. Add the projects20## variable to the beginning of the `allProjects` array.
5. Update `mostRecentProjectYear` to the year of the projects you added.