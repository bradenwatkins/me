import React from "react"

const resume = {
  header: {
    name: "Braden Watkins",
    links: [
      {
        href: "mailto:bradenwatkins5@gmail.com",
        icon: "far fa-envelope",
        text: "braden.watkins5@gmail.com",
      },
      {
        href: "https://github.com/bradenwatkins",
        icon: "fab fa-github",
        text: "github.com/bradenwatkins",
      },
      {
        href: "https://linkedin.com/in/bradenwatkins",
        icon: "fab fa-linkedin",
        text: "linkedin.com/in/bradenwatkins",
      },
    ],
  },
  summary: [
    "Software Engineer at Microsoft",
    "Over 3 years of software development experience",
    "Graduated in April 2020 with a Bachelors in Computer Science from BYU",
    "Skills: C#, .NET Core, Azure, CosmosDB, Kusto, Golang, React, Angular, AngularJs, Java, TypeScript, Javascript, Python, Oracle SQL/MySQL, and C++",
  ],
  sections: [
    {
      title: "Education",
      subsections: [
        {
          title: "Brigham Young University",
          subtitle: "Graduated: April 2020",
          details: [
            "Bachelor of Computer Science, Minor of Business Management",
            "GPA: 3.95",
            "Completed Coursework: Data Structures, Discrete Systems, Computational Theory, Advanced Programming Concepts, Software Design and Testing, Algorithm Design, User Experience Design, Computer Systems",
            "Activities: President of the Association of Computing Machinery (ACM), Member of the Developer Club, Member of the Tech Club",
          ],
        },
      ],
    },
    {
      title: "Experience",
      subsections: [
        {
          title: "Microsoft",
          subtitle: "Software Engineering Intern - May 2020 to Present",
          details: [
            "Contributed to the largest RESTful resource provider for the Azure cloud by building new features, reducing latency, and improving reliability",
            "Technologies utilized: C#, .NET Core, Cosmos DB, Azure",
          ],
        },
        {
          title: "SAP + Qualtrics",
          subtitle: "Software Engineering Intern - May 2019 to May 2020",
          details: [
            "Built systems to streamline translation processes, reducing time and cost by 90%",
            "Coordinating efforts with contributors in Utah, Seattle and Dublin, Ireland",
            "Technologies utilized: Golang, React, Javascript, Docker and Jenkins"
          ],
        },
        {
          title: "Domo",
          subtitle: "Software Engineering Intern - May 2018 to May 2019",
          details: [
            "Self-managed a project to improve search navigation in the Domo product and migrate an AngularJs frontend to React",
            "Redesigned AngularJs front-end architecture, removing thousands of lines of unused and unnecessary code to improve maintainability and stability",
            "Technologies utilized: React, AngularJS, Javascript, Java"
          ],
        },
        {
          title: "Provo Missionary Training Center",
          subtitle: "Senior Student Developer - Feb 2017 to May 2018",
          details: [
            "Onboarded quickly to become a senior student developer in 9 months",
            "Trained several new hires and lead development of an Angular app to help in onboarding processes",
            "Built a light issue tracking app in 30 hours as part of a test by the Missionary Training Center to determine skills with Angular (4), Java, SpringBoot, and Oracle",
          ],
        },
      ],
    },
    {
      title: "Service",
      subsections: [
        {
          title: "Club President",
          subtitle:
            "BYU Association of Computing Machinery (ACM) - May 2018 to Present",
          details: [
            <span>
              President of{" "}
              <a
                href="https://acm.byu.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                BYU ACM
              </a>{" "}
              for the 2019-2020 school year
            </span>,
            "Raised over $10,000 to sponsor club events over a year",
            "Coordinated 10+ large events (75-150 people) with companies including Apple, Microsoft and Google",
          ],
        },
      ],
    },
  ],
}

export default resume
