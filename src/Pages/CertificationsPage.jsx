import React from "react";
import CertificateFullstack from "./pdfs/CertificateFullstack.pdf";
import Certificateintro from "./pdfs/Certificateintro.pdf";
function CertificationsPage() {
  return (
    <>
      <h1 classname="page">Certifications</h1>
      <table>
        <thead>
          <tr>
            <th>Certifications</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Master of Science in Computer Software Technics</td>
            <td  className="certificationlink">Complete</td>
          </tr>
          <tr>
            <td>Full stack nanodegree master</td>
          <a href={CertificateFullstack} target="_blank" rel="noreferrer"><td  className="certificationlink">Certified</td>
              </a>
           
          </tr>
          <tr>
            <td>Introduction to Web development</td>
          
              <a  href={Certificateintro} target="_blank" rel="noreferrer">
              <td  className="certificationlink">Certified</td>
              </a>
          </tr>
          <tr>
            <td>SheCodesbasic certification</td>
            <td>
              <a className="certificationlink"
                href="https://www.shecodes.io/certificates/91455d2cc8f740b7bc71de594ba6ca59"
                target="_blank"
                rel="noreferrer"
              >Certified
              </a>
            </td>
          </tr>
          <tr>
            <td>SheCodesPlus certification</td>
            <td>
              <a className="certificationlink"
                href="https://www.shecodes.io/certificates/5ee386e73a66b061ecfe48c03d45ca6c"
                target="_blank"
                rel="noreferrer"
              >Certified
              </a>
            </td>
          </tr>
          <tr>
            <td>Free bootcamp Responsive Web design</td>
          <a href="https://www.freecodecamp.org/certification/Hanitra/responsive-web-design">
              <td className="certificationlink">Certified</td>
              </a>
              </tr>
        </tbody>
      </table>
    </>
  );
}

export default CertificationsPage;
