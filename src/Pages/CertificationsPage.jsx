import React from "react";
import CertificateFullstack from "./pdfs/CertificateFullstack.pdf";
import Certificateintro from "./pdfs/Certificateintro.pdf";
function CertificationsPage() {
  return (
    <>
      <h1 className="Question-header">Certifications</h1>
      <table>
        <thead>
          <tr>
            <th>Certifications</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Master of Science in Computer Software and Technics</td>
            <td>Complete</td>
          </tr>
          <tr>
            <td>Full stack nanodegree master</td>
            <td>
              {" "}
              <a href={CertificateFullstack} target="_blank" rel="noreferrer">
                Complete
              </a>
            </td>
          </tr>
          <tr>
            <td>Introduction to Web development</td>
            <td>
              <a href={Certificateintro} target="_blank" rel="noreferrer">
                Complete
              </a>
            </td>
          </tr>
          <tr>
            <td>SheCodesbasic certification</td>
            <td>
              <a
                href="https://www.shecodes.io/certificates/91455d2cc8f740b7bc71de594ba6ca59"
                target="_blank"
                rel="noreferrer"
              >
                Complete
              </a>
            </td>
          </tr>
          <tr>
            <td>SheCodesPlus certification</td>
            <td>
              <a
                href="https://www.shecodes.io/certificates/5ee386e73a66b061ecfe48c03d45ca6c"
                target="_blank"
                rel="noreferrer"
              >
                Complete
              </a>
            </td>
          </tr>
          <tr>
            <td>Free bootcamp Responsive Web design certification</td>
            <td>
              {" "}
              <a href="https://www.freecodecamp.org/certification/Hanitra/responsive-web-design">
                Complete
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default CertificationsPage;
