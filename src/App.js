import './App.css';
import { useState } from "react";

function SkillCard({ title, data }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="card mb-3 shadow border-0 rounded-4">
      <div className="card-header d-flex justify-content-between align-items-center bg-white border-0 rounded-top-4" style={{ cursor: 'pointer' }}>
        <h5 className="mb-0 fw-bold" style={{ color: '#28a745' }}>{title}</h5>
        <button 
          className="btn btn-sm"
          style={{ borderColor: '#28a745', color: '#28a745' }}
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide" : "Details"}
        </button>
      </div>

      <div className="card-body p-3">
        {/* Normal View */}
        <div className="mb-2">
          <p className="mb-1"><strong>Name:</strong> {data.name}</p>
          <p className="mb-1"><strong>Type:</strong> {data.type}</p>
          <p className="mb-1"><strong>Duration:</strong> {data.duration}</p>
          <p className="mb-1"><strong>Location:</strong> {data.location}</p>
        </div>

        {/* Details View */}
        {showDetails && (
          <div className="border-top pt-2 mt-2">
            {data.organization && <p className="mb-1"><strong>Organization:</strong> {data.organization}</p>}
            {data.institution && <p className="mb-1"><strong>Institution:</strong> {data.institution}</p>}
            {data.validations && <p className="mb-1"><strong>Validations:</strong> {data.validations}</p>}
            {data.other && <p className="mb-1"><strong>Other:</strong> {data.other}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

function Accordion({ skill, applied, acquired }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="accordion mb-3 shadow-sm rounded-4">
      <div className="accordion-item border-0 rounded-4">
        <h2 className="accordion-header" id={`heading-${skill}`}>
          <button
            className={`accordion-button ${open ? '' : 'collapsed'} rounded-4 fw-semibold`}
            type="button"
            onClick={() => setOpen(!open)}
            style={{ color: '#28a745' }}
          >
            {skill}
          </button>
        </h2>
        {open && (
          <div className="accordion-body p-3">
            <SkillCard title="Skills Applied" data={applied} />
            <SkillCard title="Skills Acquired" data={acquired} />
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <Accordion
            skill="Problem Solving"
            applied={{
              name: "Front end developer",
              type: "Project/Functional Area (E)",
              duration: "2 Years",
              location: "India",
              organization: "Optimum Solutions",
            }}
            acquired={{
              name: "B.Tech ✅",
              type: "Education",
              duration: "5 Years",
              location: "Pollachi",
              institution: "Dr. Mahalingam College of Engineering and Technology",
              validations: "–",
            }}
          />

          <Accordion
            skill="React"
            applied={{
              name: "UI Developer",
              type: "Project/Technology (E)",
              duration: "1 Year",
              location: "Remote",
              organization: "Tech Corp",
            }}
            acquired={{
              name: "React Certification",
              type: "Online Course",
              duration: "6 Months",
              location: "Online",
              institution: "Coursera",
              validations: "Certified by Meta",
            }}
          />
        </div>
      </div>
    </div>
  );
}