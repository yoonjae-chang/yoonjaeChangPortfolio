import React from 'react';
import styled from 'styled-components';

const Skills = () => {
  const languages = [
    "Python", "Java", "JavaScript", "TypeScript", "Golang", "SQL", "HTML", "CSS", "Tailwind CSS", "R"
  ];

  const frameworks = [
    "FastAPI", "Flask", "Next.js (React.js)", "Express.js (Node.js)"
  ];

  const toolsAndLibraries = [
    "NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Git", "GitHub", "Docker", 
    "Supabase", "PostgreSQL", "LangChain", "Langfuse"
  ];

  return (
    <StyledWrapper>
      <div className="skills-container">
        <h2 className="main-title">Technical Skills And Technologies</h2>
        
        <div className="partitions">
          <div className="card">
            <span className="title">Languages</span>
            <div className="card__tags">
              <ul className="tag">
                {languages.map((skill, index) => (
                  <li key={index} className="tag__name">{skill}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card">
            <span className="title">Frameworks</span>
            <div className="card__tags">
              <ul className="tag">
                {frameworks.map((skill, index) => (
                  <li key={index} className="tag__name">{skill}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card">
            <span className="title">Developer Tools & Libraries</span>
            <div className="card__tags">
              <ul className="tag">
                {toolsAndLibraries.map((skill, index) => (
                  <li key={index} className="tag__name">{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .skills-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    margin-bottom: 10px;
    @media (max-width: 768px) {
      padding: 10px;
    }
  }

  .main-title {
    text-align: center;
    font-weight: 850;
    font-size: 2.5em;
    color: #A83400;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      font-size: 1.8em;
    }
  }

  .partitions {
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    gap: 30px;
    margin: 0 auto;
    @media (max-width: 1100px) {
      grid-template-columns: repeat(1, minmax(250px, 1fr));
      gap: 20px;
      max-width: 700px;
    }
  }

  .card {
    background: #c8f0c8;
    padding: 20px;
    display: flex;
    flex-direction: column;
    color: #31572c;
    border-radius: 15px;
    box-shadow: -15px 15px 0px -5px #31572c;
    max-height: 300px;
    transition: transform 0.3s ease;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card__tags {
    overflow: auto;
    flex: 1;
    margin-top: 15px;
  }

  .title {
    font-weight: 800;
    font-size: 1.4em;
    text-align: center;
    margin-bottom: 10px;
  }

  .tag {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .tag__name {
    display: inline-block;
    color: #fff;
    font-size: 0.95em;
    background-color: #31572c;
    padding: 6px 16px 8px;
    border-radius: 70em;
    margin: 6px 6px 6px 0;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .tag__name::before,
  .tag__name::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 40%;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #90a955;
  }

  .tag__name::before {
    left: 6px;
  }

  .tag__name::after {
    right: 6px;
  }

  .tag__name:hover {
    transform: scale(1.05);
    background-color: #4a6b3a;
  }
`;

export default Skills;
