
import './PageFour.css'; // Đảm bảo rằng bạn đã tạo file CSS và import vào đây.

export const PageFour = () => {
  return (
    <div className="page4-container">
      {/* Tiêu đề lớn */}
      <h1 className="page4-title">STORY</h1>
      
      {/* Grid chia bố cục 4 phần */}
      <div className="page4-grid">
        {/* History */}
        <div className="page4-section">
          <h2 className="section-title">History</h2>
          <div className="custom-scroll">
            <div className="history-content">
              <div>
                <h3 className="history-year">2021</h3>
                <p className="history-description">Rebrand the Company name to Maxius</p>
                <p className="history-description">1st Pan-Governmental Information Resource Integration HW3</p>
              </div>
              <div>
                <h3 className="history-year">2020</h3>
                <p className="history-description">2nd construction of AI-based adaptive security system</p>
                <p className="history-description">SPC Certification: TOP 5 Rank record in the world of storage</p>
              </div>
              <div>
                <h3 className="history-year">2019</h3>
                <p className="history-description">Development of Genome Analysis System</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="page4-section">
          <h2 className="section-title">Partners</h2>
          <div className="custom-scroll">
            <p className="partners-description">
              Samsung Total, Samsung SDS, LS Electric, Hanwha Systems, <b>More than 120 manufacturing-related companies</b>, including:
            </p>
            <ul className="partners-list">
              <li>350 Additional corporate Partners</li>
              <li>JoongAng Daily C&C, Dong-A Broadcasting System, KCTV, ETNEWS</li>
              <li>50 Additional corporate Partners: Hyundai Securities, Samsung Fire & Marine Insurance, etc.</li>
            </ul>
          </div>
        </div>

        {/* Patents */}
        <div className="page4-section">
          <h2 className="section-title">Patents</h2>
          <div className="custom-scroll">
            <ul className="patents-list">
              <li>High-speed data I/O semiconductor Chip</li>
              <li>Intelligent Pattern Analysis Algorithm</li>
              <li>OS and SSD optimization</li>
            </ul>
          </div>
        </div>

        {/* Awards */}
        <div className="page4-section">
          <h2 className="section-title">Awards</h2>
          <div className="custom-scroll">
            <ul className="awards-list">
              <li>Awarded the Sejong Award at the KR Patent Awards</li>
              <li>Certified by Korea Excellent Product Designation</li>
              <li>Korean Green Technology Certificate</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
